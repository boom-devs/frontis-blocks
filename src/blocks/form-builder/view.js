// Form Frontend Handler — email only, no storage

(function () {

    function initFormSubmissions() {
        const forms = document.querySelectorAll('.fb-form-builder-main-wrapper form');

        forms.forEach((form) => {
            if (form.hasAttribute('data-fb-form-initialized')) return;
            form.setAttribute('data-fb-form-initialized', 'true');

            const submitBtn = form.querySelector('.fb-submit-button');
            const inputs = form.querySelectorAll('input, textarea, select');

            // Real-time validation clearing
            inputs.forEach((input) => {
                const clearError = () => {
                    input.style.borderColor = '';
                    const wrapper = input.closest('.fb-field-input-wrapper') || input.parentElement;
                    const errorText = wrapper ? wrapper.querySelector('.fb-field-required-text') : null;
                    if (errorText) {
                        errorText.classList.add('fb-hide');
                        errorText.style.display = '';
                    }
                };

                input.addEventListener('input', clearError);
                input.addEventListener('blur', () => {
                   if (input.value.trim()) {
                       clearError();
                   }
                });
            });

            if (!submitBtn) return;

            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();

                const collectedData = {};
                let hasError = false;

                inputs.forEach((input) => {
                    const value = input.value.trim();
                    const name = input.name || input.id || 'unnamed_field';
                    collectedData[name] = value;

                    const wrapper = input.closest('.fb-field-input-wrapper') || input.parentElement;
                    const errorText = wrapper ? wrapper.querySelector('.fb-field-required-text') : null;

                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const isEmailField = input.type === 'email' || input.name?.toLowerCase().includes('email');

                    if (input.hasAttribute('required') && !value) {
                        hasError = true;
                        input.style.borderColor = 'red';
                        if (errorText) {
                            errorText.textContent = 'This field is required.';
                            errorText.classList.remove('fb-hide');
                        }
                    } else if (isEmailField && value && !emailRegex.test(value)) {
                        hasError = true;
                        input.style.borderColor = 'red';
                        if (errorText) {
                            errorText.textContent = 'Please enter a valid email address.';
                            errorText.classList.remove('fb-hide');
                        }
                    } else {
                        input.style.borderColor = '';
                        if (errorText) errorText.classList.add('fb-hide');
                    }
                });

                const validationMsg = form.getAttribute('data-form-validation-message') || 'Please fill all required fields.';

                function showMessage(type, content) {
                    const messagesContainer = form.querySelector('.fb-form-messages');
                    if (!messagesContainer) return;

                    const successMsgEl = messagesContainer.querySelector('.fb-success-message');
                    const errorMsgEl = messagesContainer.querySelector('.fb-error-message');
                    const validationMsgEl = messagesContainer.querySelector('.fb-validation-message');

                    [successMsgEl, errorMsgEl, validationMsgEl].forEach(el => {
                        if (el) {
                            el.classList.add('fb-hide');
                            el.innerHTML = '';
                        }
                    });

                    messagesContainer.classList.add('fb-hide');

                    let targetEl;
                    if (type === 'success') targetEl = successMsgEl;
                    else if (type === 'error') targetEl = errorMsgEl;
                    else if (type === 'validation') targetEl = validationMsgEl;

                    if (targetEl) {
                        targetEl.innerHTML = content;
                        targetEl.classList.remove('fb-hide');
                        messagesContainer.classList.remove('fb-hide');

                        if (type === 'validation') {
                            setTimeout(() => {
                                targetEl.classList.add('fb-hide');
                                targetEl.innerHTML = '';
                                const anyVisible = Array.from(messagesContainer.children).some(el => !el.classList.contains('fb-hide'));
                                if (!anyVisible) {
                                    messagesContainer.classList.add('fb-hide');
                                }
                            }, 5000);
                        }
                    }
                }

                if (hasError) {
                    showMessage('validation', validationMsg);
                    return;
                }

                if (typeof frontisFormsAjax === 'undefined') {
                    showMessage('error', 'Form script error. Please refresh the page.');
                    return;
                }

                // form_title = current page title + "Form"
                const pageTitle = document.title || 'Untitled Page';
                const formTitle = pageTitle + ' Form';

                const toEmail = form.getAttribute('data-form-to-email') || '';
                const ccEmail = form.getAttribute('data-form-cc-email') || '';
                const bccEmail = form.getAttribute('data-form-bcc-email') || '';
                const emailSubject = form.getAttribute('data-form-email-subject') || 'New Submission: {form_title}';
                const successType = form.getAttribute('data-form-success-type') || 'message';
                const successMsg = form.getAttribute('data-form-success-message') || 'Thank you! Your form has been submitted.';
                const successRedirect = form.getAttribute('data-form-success-redirect') || '';
                const failMsg = form.getAttribute('data-form-fail-message') || 'Submission failed. Please try again.';

                const formData = new FormData();
                formData.append('action', 'fb_save_form_submission');
                formData.append('nonce', frontisFormsAjax.nonce);
                formData.append('form_title', formTitle);
                formData.append('form_to_email', toEmail);
                formData.append('form_cc_email', ccEmail);
                formData.append('form_bcc_email', bccEmail);
                formData.append('form_email_subject', emailSubject);
                formData.append('form_page_url', window.location.href);
                formData.append('submission_data', JSON.stringify(collectedData));

                submitBtn.disabled = true;
                const originalLabel = submitBtn.textContent.trim() || 'Submit';
                submitBtn.textContent = 'Submitting...';

                fetch(frontisFormsAjax.ajax_url, {
                    method: 'POST',
                    body: formData,
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        if (successType === 'redirect' && successRedirect) {
                            showMessage('success', 'Success! Redirecting...');
                            setTimeout(() => {
                                window.location.href = successRedirect;
                            }, 1500);
                        } else {
                            showMessage('success', successMsg);
                            form.reset();
                            inputs.forEach((input) => input.style.borderColor = '');
                        }
                    } else {
                        showMessage('error', failMsg + (data.data?.message ? '<br><br>' + data.data.message : ''));
                    }
                })
                .catch(() => {
                    showMessage('error', failMsg + '<br><br>Network error.');
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalLabel;
                });
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormSubmissions);
    } else {
        initFormSubmissions();
    }

    const observer = new MutationObserver(initFormSubmissions);
    observer.observe(document.body, { childList: true, subtree: true });
})();