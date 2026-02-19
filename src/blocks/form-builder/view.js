// assets/js/form-frontend.js

(function () {
    const STORAGE_KEY = 'frontis_forms_submissions';

    function getStoredSubmissions() {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    function saveToLocalStorage(submission) {
        const submissions = getStoredSubmissions();
        submissions.push(submission);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
        return submissions; // Return for logging
    }

    function logSubmissionToConsole(submission, updatedSubmissions) {
        console.log('%c=== New Form Submission (Saved Locally) ===', 
            'font-weight: bold; color: #2ecc71; font-size: 14px; padding: 5px; background: #ecf0f1;');
        console.table(submission.data);
        console.log('Form:', submission.form_title);
        console.log('Time:', submission.timestamp);
        console.log('Email Sent To:', submission.email_sent_to || 'None');
        console.log('Total saved:', updatedSubmissions.length);
    }

    function initFormSubmissions() {
        const forms = document.querySelectorAll('.fb-form-builder-main-wrapper form');

        forms.forEach((form) => {
            if (form.hasAttribute('data-fb-form-initialized')) return;
            form.setAttribute('data-fb-form-initialized', 'true');

            // View Tracking
            const formTitleForView = form.getAttribute('data-form-title');
            if (formTitleForView && typeof frontisFormsAjax !== 'undefined') {
                const viewData = new FormData();
                viewData.append('action', 'fb_increment_view_count');
                viewData.append('form_title', formTitleForView);
                
                fetch(frontisFormsAjax.ajax_url, {
                    method: 'POST',
                    body: viewData
                }).catch(err => console.error('View tracking failed:', err));
            }

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
                        errorText.style.display = ''; // Clear inline display if present
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

                    // Find error message element
                    const wrapper = input.closest('.fb-field-input-wrapper') || input.parentElement;
                    const errorText = wrapper ? wrapper.querySelector('.fb-field-required-text') : null;

                    // Email validation regex
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    const isEmailField = input.type === 'email' || input.name?.toLowerCase().includes('email');

                    if (input.hasAttribute('required') && !value) {
                        // Required field is empty
                        hasError = true;
                        input.style.borderColor = 'red';
                        if (errorText) {
                            errorText.textContent = 'This field is required.';
                            errorText.classList.remove('fb-hide');
                        }
                    } else if (isEmailField && value && !emailRegex.test(value)) {
                        // Email validation failed
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

                    // Hide all first
                    [successMsgEl, errorMsgEl, validationMsgEl].forEach(el => {
                        if (el) {
                            el.classList.add('fb-hide');
                            el.innerHTML = '';
                        }
                    });

                    // Initially hide container
                    messagesContainer.classList.add('fb-hide');

                    let targetEl;
                    if (type === 'success') targetEl = successMsgEl;
                    else if (type === 'error') targetEl = errorMsgEl;
                    else if (type === 'validation') targetEl = validationMsgEl;

                    if (targetEl) {
                        targetEl.innerHTML = content;
                        targetEl.classList.remove('fb-hide');
                        messagesContainer.classList.remove('fb-hide'); // Show parent

                        // Auto-hide validation messages after a few seconds
                        if (type === 'validation') {
                            setTimeout(() => {
                                targetEl.classList.add('fb-hide');
                                targetEl.innerHTML = '';
                                
                                // Check if others are showing
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
                    console.error('frontisFormsAjax is not defined');
                    return;
                }

                const formTitle = form.getAttribute('data-form-title');

                if (!formTitle || formTitle === 'Untitled Form') {
                    showMessage('error', 'Please set your form title in the editor.');
                    return;
                }
                const toEmail = form.getAttribute('data-form-to-email') || '';
                const ccEmail = form.getAttribute('data-form-cc-email') || '';
                const bccEmail = form.getAttribute('data-form-bcc-email') || '';
                const emailSubject = form.getAttribute('data-form-email-subject') || 'New Submission: {form_title}';
                const successType = form.getAttribute('data-form-success-type') || 'message';
                const successMsg = form.getAttribute('data-form-success-message') || 'Thank you! Your form has been submitted.';
                const successRedirect = form.getAttribute('data-form-success-redirect') || '';
                const failMsg = form.getAttribute('data-form-fail-message') || 'Submission failed. Please try again.';

                const formData = new FormData();
                formData.append('submission_data', JSON.stringify(collectedData));

                formData.append('action', 'fb_save_form_submission');
                formData.append('nonce', frontisFormsAjax.nonce);
                formData.append('form_title', formTitle);
                formData.append('form_to_email', toEmail);
                formData.append('form_cc_email', ccEmail);
                formData.append('form_bcc_email', bccEmail);
                formData.append('form_email_subject', emailSubject);
                formData.append('form_page_url', window.location.href);

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
                        const submission = {
                            form_title: formTitle,
                            data: collectedData,
                            page_url: window.location.href,
                            submitted_at: new Date().toISOString(),
                            timestamp: new Date().toLocaleString(),
                            email_sent_to: toEmail
                        };

                        // Save and get updated list
                        const updatedSubmissions = saveToLocalStorage(submission);
                        logSubmissionToConsole(submission, updatedSubmissions);

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
                .catch((err) => {
                    console.error(err);
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

    window.reinitFormSubmissions = initFormSubmissions;

    // Show existing submissions on load
    const existing = getStoredSubmissions();
    if (existing.length > 0) {
        console.log('%cFrontis Forms – Previous Submissions Found', 'font-weight: bold; color: #3498db; font-size: 16px;');
        console.table(existing);
    }
})();