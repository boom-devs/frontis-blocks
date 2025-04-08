document.addEventListener('DOMContentLoaded', function () {

    const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');

    tocBlocks.forEach(function (tocBlock) {

        const smoothScroll = tocBlock.dataset.smoothScroll === 'true';
        const collapsible = tocBlock.dataset.collapsible === 'true';
        const initialCollapsed = tocBlock.dataset.initialCollapsed === 'true';


        const mobileToggle = tocBlock.querySelector('.fb-toc-mobile-toggle');
        const collapseToggle = tocBlock.querySelector('.fb-toc-collapse-toggle');
        const tocContent = tocBlock.querySelector('.fb-toc-content');
        const tocContainer = tocBlock.querySelector('.fb-toc-container');
        const tocListContainer = tocBlock.querySelector('.fb-toc-list-container');


        if (collapsible && initialCollapsed) {
            tocContent.classList.add('collapsed');

            if (collapseToggle) {
                const icon = collapseToggle.querySelector('.dashicons');
                if (icon) {
                    icon.classList.remove('dashicons-minus');
                    icon.classList.add('dashicons-plus');
                }
            }
        }

        // Find the content area where we should search for headings
        const contentArea = document.querySelector('.content-area, .entry-content, #main-content, article');

        // If no specific content area is found, don't proceed
        if (!contentArea) {
            console.warn('No content area found for TOC to scan headings.');
            if (tocListContainer) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'fb-toc-empty';
                emptyMessage.textContent = 'Content area not found.';
                tocListContainer.innerHTML = '';
                tocListContainer.appendChild(emptyMessage);
            }
            return;
        }

        // Only get headings from the content area
        const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');

        if (headings.length > 0 && tocListContainer) {
            // Clear any existing content first to prevent duplication
            tocListContainer.innerHTML = '';

            const tocList = document.createElement('ol');
            tocList.className = 'fb-toc-list';

            // Add list style
            const listStyle = tocBlock.dataset.listStyle || 'disc';
            tocList.classList.add('list-style-' + listStyle);

            headings.forEach(function (heading, index) {
                // Skip headings within the TOC itself
                if (tocBlock.contains(heading)) return;

                // Generate ID if missing
                if (!heading.id) {
                    heading.id = 'heading-' + index;
                }

                const level = parseInt(heading.tagName.substring(1));

                // Filter by heading level
                const minLevel = parseInt(tocBlock.dataset.minHeadingLevel || 2);
                const maxLevel = parseInt(tocBlock.dataset.maxHeadingLevel || 4);

                if (level < minLevel || level > maxLevel) return;

                // Create list item
                const listItem = document.createElement('li');
                listItem.className = 'toc-level-' + level;
                listItem.style.paddingLeft = ((level - minLevel) * 16) + 'px';

                // Create link
                const link = document.createElement('a');
                link.href = '#' + heading.id;
                link.innerHTML = heading.innerHTML;
                link.addEventListener('click', function (e) {
                    if (smoothScroll) {
                        e.preventDefault();
                        const targetElement = document.getElementById(heading.id);

                        if (targetElement) {
                            // Smooth scroll to heading
                            window.scrollTo({
                                top: targetElement.offsetTop + 600,
                                behavior: 'smooth'
                            });

                            // Close mobile TOC after clicking
                            if (window.innerWidth <= 768 && tocBlock.classList.contains('collapsible-mobile')) {
                                tocBlock.classList.add('mobile-collapsed');
                                if (tocContainer) {
                                    tocContainer.classList.add('hidden-mobile');
                                }
                            }
                        }
                    }
                });

                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });

            // Only append if there are headings found
            if (tocList.childElementCount > 0) {
                tocListContainer.appendChild(tocList);
            } else {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'fb-toc-empty';
                emptyMessage.textContent = 'No headings found in the content.';
                tocListContainer.appendChild(emptyMessage);
            }
        } else {
            // No headings found message
            if (tocListContainer) {
                tocListContainer.innerHTML = '';
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'fb-toc-empty';
                emptyMessage.textContent = 'No headings found in the content.';
                tocListContainer.appendChild(emptyMessage);
            }
        }

        // Collapse toggle functionality
        if (collapsible && collapseToggle) {
            collapseToggle.addEventListener('click', function () {
                tocContent.classList.toggle('collapsed');

                const icon = collapseToggle.querySelector('.dashicons');
                if (icon) {
                    if (tocContent.classList.contains('collapsed')) {
                        icon.classList.remove('dashicons-minus');
                        icon.classList.add('dashicons-plus');
                    } else {
                        icon.classList.remove('dashicons-plus');
                        icon.classList.add('dashicons-minus');
                    }
                }
            });
        }

        // Mobile toggle functionality
        if (mobileToggle && tocContainer) {

            mobileToggle.addEventListener('click', function (e) {
                e.stopPropagation();

                tocBlock.classList.toggle('mobile-collapsed');
                tocContainer.classList.toggle('hidden-mobile');
                mobileToggle.classList.toggle('toggle-toc')
                if (tocContainer.classList.contains('hidden-mobile')) {
                    tocContainer.classList.remove('hidden-mobile');
                }
            });

            // Initial state for mobile
            if (window.innerWidth <= 768) {
                tocBlock.classList.add('mobile-collapsed');
                tocContainer.classList.add('hidden-mobile');
            }
        }

    });

    // Close mobile TOC when clicking outside
    document.addEventListener('click', function (e) {
        if (window.innerWidth > 768) return;

        const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block.collapsible-mobile');

        tocBlocks.forEach(function (tocBlock) {
            const tocContainer = tocBlock.querySelector('.fb-toc-container');
            const mobileToggle = tocBlock.querySelector('.fb-toc-mobile-toggle');

            if (tocContainer &&
                !tocContainer.classList.contains('hidden-mobile') &&
                !tocContainer.contains(e.target) &&
                (!mobileToggle || !mobileToggle.contains(e.target))) {

                tocBlock.classList.add('mobile-collapsed');
                tocContainer.classList.add('hidden-mobile');
                mobileToggle.classList.remove('toggle-toc')
            }
        });
    });

    // Handle resize events
    window.addEventListener('resize', function () {
        const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');

        tocBlocks.forEach(function (tocBlock) {
            const tocContainer = tocBlock.querySelector('.fb-toc-container');

            if (tocContainer && tocBlock.classList.contains('collapsible-mobile')) {
                if (window.innerWidth <= 768) {
                    tocBlock.classList.add('mobile-collapsed');
                    tocContainer.classList.add('hidden-mobile');
                } else {
                    tocBlock.classList.remove('mobile-collapsed');
                    tocContainer.classList.remove('hidden-mobile');
                }
            }
        });
    });
});
