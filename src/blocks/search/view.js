(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const searchContainers = document.querySelectorAll('.fb-search-block');

        searchContainers.forEach(function (block) {
            const buttonWrapper = block.querySelector('.fb-search-container.button-and-search .fb-search-button-wrapper');
            const overlay = block.querySelector('.fb-search-block-wrapper-overlay');
            const inputField = block.querySelector('.fb-search-block-wrapper-inner-input-field');
            const inputEl = block.querySelector('.wp-block-search__input');

            if (buttonWrapper) {
                buttonWrapper.addEventListener('click', function () {
                    inputField.classList.add('active');
                    overlay.classList.add('active');

                    if (inputEl) {
                        setTimeout(() => inputEl.focus(), 50);
                    }
                });
            }

            if (overlay) {
                overlay.addEventListener('click', function () {
                    closeSearch(block);
                });
            }

            // Close on Escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    closeSearch(block);
                }
            });

            // --- AJAX search ---
            if (!inputEl) return;

            // Create the floating results dropdown
            const resultsDropdown = document.createElement('div');
            resultsDropdown.className = 'fb-search-ajax-results';
            resultsDropdown.setAttribute('aria-live', 'polite');
            resultsDropdown.setAttribute('role', 'listbox');
            inputField.appendChild(resultsDropdown);

            let debounceTimer = null;
            let currentRequest = null;
            let selectedIndex = -1;

            inputEl.addEventListener('input', function () {
                const query = inputEl.value.trim();
                clearTimeout(debounceTimer);

                if (query.length < 2) {
                    hideResults(resultsDropdown);
                    return;
                }

                // Show loading state
                showLoading(resultsDropdown);

                debounceTimer = setTimeout(function () {
                    doAjaxSearch(query, resultsDropdown, inputEl);
                }, 350);
            });

            // Keyboard navigation inside results
            inputEl.addEventListener('keydown', function (e) {
                const items = resultsDropdown.querySelectorAll('.fb-search-result-item');
                if (!items.length) return;

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                    updateSelectedItem(items, selectedIndex);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, -1);
                    updateSelectedItem(items, selectedIndex);
                } else if (e.key === 'Enter' && selectedIndex >= 0) {
                    e.preventDefault();
                    items[selectedIndex].querySelector('a').click();
                }
            });

            // Hide results when clicking outside
            document.addEventListener('click', function (e) {
                if (!block.contains(e.target)) {
                    hideResults(resultsDropdown);
                }
            });

            function doAjaxSearch(query, dropdown) {
                if (currentRequest) {
                    currentRequest.abort();
                    currentRequest = null;
                }

                const controller = new AbortController();
                currentRequest = controller;

                const url = `${FrontisBlocksData.site_url}/wp-json/frontis-blocks/v1/search?query=${encodeURIComponent(query)}`;

                fetch(url, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' },
                    signal: controller.signal,
                })
                    .then(function (response) {
                        if (!response.ok) throw new Error('Network error');
                        return response.json();
                    })
                    .then(function (data) {
                        currentRequest = null;
                        selectedIndex = -1;
                        renderResults(data.results, dropdown, query);
                    })
                    .catch(function (err) {
                        if (err.name === 'AbortError') return;
                        currentRequest = null;
                        showError(dropdown);
                    });
            }

            function renderResults(results, dropdown, query) {
                dropdown.innerHTML = '';

                if (results.length === 0) {
                    dropdown.innerHTML = `<div class="fb-search-no-results">No results found for "<strong>${escapeHtml(query)}</strong>"</div>`;
                    dropdown.classList.add('active');
                    return;
                }

                const fragment = document.createDocumentFragment();

                results.forEach(function (item, index) {
                    const el = document.createElement('div');
                    el.className = 'fb-search-result-item';
                    el.setAttribute('role', 'option');
                    el.setAttribute('data-index', index);

                    // Highlight matched text in title
                    const highlightedTitle = highlightMatch(item.title, query);

                    el.innerHTML = `
                        <a href="${item.permalink}" class="fb-search-result-link">
                            <div class="fb-search-result-content">
                                <span class="fb-search-result-title">${highlightedTitle}</span>
                                ${item.excerpt ? `<span class="fb-search-result-excerpt">${escapeHtml(item.excerpt)}</span>` : ''}
                                <span class="fb-search-result-meta">
                                    ${capitalizeFirst(item.type)}
                                    <span class="meta-divider"></span>
                                    ${item.date}
                                </span>
                            </div>
                        </a>
                    `;

                    fragment.appendChild(el);
                });

                // "View all results" footer link
                const footer = document.createElement('div');
                footer.className = 'fb-search-results-footer';
                footer.innerHTML = `<a href="${FrontisBlocksData.site_url}/?s=${encodeURIComponent(query)}" class="fb-search-view-all">View all results for "<strong>${escapeHtml(query)}</strong>" →</a>`;
                fragment.appendChild(footer);

                dropdown.appendChild(fragment);
                dropdown.classList.add('active');
            }

            function showLoading(dropdown) {
                dropdown.innerHTML = `
                    <div class="fb-search-loading">
                        <span class="fb-search-spinner"></span>
                        <span>Searching...</span>
                    </div>`;
                dropdown.classList.add('active');
            }

            function showError(dropdown) {
                dropdown.innerHTML = `<div class="fb-search-error">Something went wrong. Please try again.</div>`;
                dropdown.classList.add('active');
            }

            function hideResults(dropdown) {
                dropdown.classList.remove('active');
                selectedIndex = -1;
            }

            function updateSelectedItem(items, index) {
                items.forEach(function (item, i) {
                    item.classList.toggle('selected', i === index);
                    if (i === index) {
                        item.scrollIntoView({ block: 'nearest' });
                    }
                });
            }

            function highlightMatch(text, query) {
                const escaped = escapeHtml(text);
                const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return escaped.replace(
                    new RegExp(`(${escapedQuery})`, 'gi'),
                    '<mark class="fb-search-highlight">$1</mark>'
                );
            }

            function escapeHtml(str) {
                const div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            }

            function capitalizeFirst(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }); // end forEach

        function closeSearch(block) {
            const inputField = block.querySelector('.fb-search-block-wrapper-inner-input-field');
            const overlay = block.querySelector('.fb-search-block-wrapper-overlay');
            const dropdown = block.querySelector('.fb-search-ajax-results');

            if (inputField) inputField.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            if (dropdown) dropdown.classList.remove('active');
        }

    });
})();