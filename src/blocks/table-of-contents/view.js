document.addEventListener('DOMContentLoaded', function () {
    // Add initialization flag to prevent multiple initializations
    if (window.fbTOCInitialized) return;
    window.fbTOCInitialized = true;

    const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');
    let tocGenerationTimeout;

    // Debounce function to prevent multiple rapid calls
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(tocGenerationTimeout);
                func(...args);
            };
            clearTimeout(tocGenerationTimeout);
            tocGenerationTimeout = setTimeout(later, wait);
        };
    }

    // Debounced function to generate TOC
    const generateTOC = debounce(function(tocBlock) {
        const tocListContainer = tocBlock.querySelector('.fb-toc-list-container');
        if (tocListContainer) {
            tocListContainer.innerHTML = '';
        }

        const smoothScroll = tocBlock.dataset.smoothScroll === 'true';
        const collapsible = tocBlock.dataset.collapsible === 'true';
        const initialCollapsed = tocBlock.dataset.initialCollapsed === 'true';

        const mobileToggle = tocBlock.querySelector('.fb-toc-mobile-toggle');
        const collapseToggle = tocBlock.querySelector('.fb-toc-collapse-toggle');
        const tocContent = tocBlock.querySelector('.fb-toc-content');
        const tocContainer = tocBlock.querySelector('.fb-toc-container');

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
        const contentAreaSelectors = [
            '.content-area',
            '.entry-content',
            '#main-content',
            'article',
            '.post-content',
            '.main-content',
            '.site-content',
            '.content',
            '.wp-block-post-content'
        ].join(',');

        const contentArea = document.querySelector(contentAreaSelectors);

        if (!contentArea) {
            const possibleContentAreas = document.querySelectorAll('main, [role="main"], .main, .content');
            if (possibleContentAreas.length > 0) {
                // Use the first matching element that contains headings
                for (const area of possibleContentAreas) {
                    if (area.querySelector('h1, h2, h3, h4, h5, h6')) {
                        contentArea = area;
                        break;
                    }
                }
            }
        }

        // If still no content area is found, don't proceed
        if (!contentArea) {
            console.warn('No content area found for TOC to scan headings. Please check your theme structure or contact support.');
            if (tocListContainer) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'fb-toc-empty';
                emptyMessage.textContent = 'Content area not found. Please check your theme structure.';
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

            // Get min and max heading levels
            const minLevel = parseInt(tocBlock.dataset.minHeadingLevel || 2);
            const maxLevel = parseInt(tocBlock.dataset.maxHeadingLevel || 4);
            
            // Store all processed headings for hierarchy
            const processedHeadings = [];
            const headingsData = [];
            
            // First pass: collect all valid headings and their data
            headings.forEach(function (heading, index) {
                // Skip headings within the TOC itself
                if (tocBlock.contains(heading)) return;

                // Generate ID if missing
                if (!heading.id) {
                    const rawText = heading.textContent || 'heading';
                    const slug = rawText
                        .toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/-+/g, '-');
                    heading.id = slug || 'heading-' + index;
                }

                const level = parseInt(heading.tagName.substring(1));

                // Filter by heading level
                if (level < minLevel || level > maxLevel) return;

                // Add to our processed headings
                headingsData.push({
                    id: heading.id,
                    text: heading.textContent,
                    level: level,
                    index: processedHeadings.length
                });
                
                processedHeadings.push(heading);
            });
            
            if (headingsData.length === 0) {
                const emptyMessage = document.createElement('p');
                emptyMessage.className = 'fb-toc-empty';
                emptyMessage.textContent = 'No headings found in the content.';
                tocListContainer.appendChild(emptyMessage);
                return;
            }
            
            // Create main list
            const mainList = document.createElement('ul');
            mainList.className = 'fb-toc-list';
            
            // Add list style
            const listStyle = tocBlock.dataset.listStyle || 'disc';
            mainList.classList.add('list-style-' + listStyle);
            
            // Build hierarchical structure
            const hierarchy = [];
            let currentLevel = null;
            let currentParent = null;
            let lastItemAtLevel = {};
            
            // Process each heading to build hierarchy
            headingsData.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'toc-level-' + item.level;
                
                const link = document.createElement('a');
                link.href = '#' + item.id;
                link.textContent = item.text;
                link.addEventListener('click', function (e) {
                    if (smoothScroll) {
                        e.preventDefault();
                        const targetElement = document.getElementById(item.id);

                        if (targetElement) {
                            // Smooth scroll to heading
                            window.scrollTo({
                                top: targetElement.offsetTop - 50,
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
                
                // Initialize for first item
                if (currentLevel === null) {
                    currentLevel = item.level;
                    hierarchy.push(listItem);
                    lastItemAtLevel[item.level] = listItem;
                    return;
                }
                
                // Handle item with same level as current
                if (item.level === currentLevel) {
                    hierarchy.push(listItem);
                    lastItemAtLevel[item.level] = listItem;
                }
                // Handle going deeper in hierarchy
                else if (item.level > currentLevel) {
                    // Create sublist if needed
                    let parentItem = lastItemAtLevel[currentLevel];
                    let parentList = parentItem.querySelector('ul');
                    
                    if (!parentList) {
                        parentList = document.createElement('ul');
                        parentList.className = 'fb-toc-sublist';
                        parentItem.appendChild(parentList);
                    }
                    
                    parentList.appendChild(listItem);
                    lastItemAtLevel[item.level] = listItem;
                    currentLevel = item.level;
                }
                // Handle going up in hierarchy
                else if (item.level < currentLevel) {
                    // Find the correct parent level
                    currentLevel = item.level;
                    
                    // If same level as a previous item, add to main hierarchy
                    if (currentLevel === minLevel) {
                        hierarchy.push(listItem);
                    } else {
                        // Find the nearest parent level
                        for (let l = item.level - 1; l >= minLevel; l--) {
                            if (lastItemAtLevel[l]) {
                                let parentItem = lastItemAtLevel[l];
                                let parentList = parentItem.querySelector('ul');
                                
                                if (!parentList) {
                                    parentList = document.createElement('ul');
                                    parentList.className = 'fb-toc-sublist';
                                    parentItem.appendChild(parentList);
                                }
                                
                                parentList.appendChild(listItem);
                                break;
                            }
                        }
                    }
                    
                    lastItemAtLevel[item.level] = listItem;
                }
            });
            
            // Add all top-level items to the main list
            hierarchy.forEach(item => {
                mainList.appendChild(item);
            });
            
            // Add the main list to the container
            tocListContainer.appendChild(mainList);
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
                mobileToggle.classList.toggle('toggle-toc');
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
    }, 100);

    tocBlocks.forEach(function (tocBlock) {
        // Initial generation
        generateTOC(tocBlock);

        // Set up mutation observer to watch for content changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'subtree') {
                    generateTOC(tocBlock);
                }
            });
        });

        // Start observing the content area for changes
        const contentAreaSelectors = [
            '.content-area',
            '.entry-content',
            '#main-content',
            'article',
            '.post-content',
            '.main-content',
            '.site-content',
            '.content',
            '.wp-block-post-content'
        ].join(',');
        
        const contentArea = document.querySelector(contentAreaSelectors);
        if (contentArea) {
            observer.observe(contentArea, {
                childList: true,
                subtree: true
            });
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
                mobileToggle.classList.remove('toggle-toc');
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

// Function to initialize scroll tracking for TOC
function initTOCScrollTracking() {
    const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');
    if (!tocBlocks.length) return;

    // Get all headings that should be tracked
    const tocBlock = tocBlocks[0]; // Using the first TOC block
    const minLevel = parseInt(tocBlock.getAttribute('data-min-heading-level') || 2);
    const maxLevel = parseInt(tocBlock.getAttribute('data-max-heading-level') || 4);
    
    // Build selector for headings
    const headingSelectors = [];
    for (let i = minLevel; i <= maxLevel; i++) {
        headingSelectors.push(`h${i}`);
    }
    
    const headingSelector = headingSelectors.join(',');
    const headings = document.querySelectorAll(headingSelector);
    
    if (!headings.length) return;
    
    // Get all TOC links
    const tocLinks = document.querySelectorAll('.fb-toc-container a');
    if (!tocLinks.length) return;
    
    // Create a mapping of heading IDs to TOC links
    const idToLinkMap = {};
    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const id = href.substring(1);
            idToLinkMap[id] = link;
        }
    });
    
    // Function to determine which heading is in view
    function findActiveHeading() {
        let activeHeadingId = null;
        const scrollPosition = window.scrollY;
        const offset = parseInt(tocBlock.getAttribute('data-sticky-offset') || 20) + 50;
        
        // Find the heading that is currently at the top of the viewport
        for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            if (!heading.id) continue;
            
            const headingTop = heading.getBoundingClientRect().top + window.scrollY;
            
            // Check if we've scrolled past this heading
            if (scrollPosition >= headingTop - offset) {
                activeHeadingId = heading.id;
            } else {
                break;
            }
        }
        
        return activeHeadingId;
    }
    
    // Function to update active class on TOC items
    function updateActiveTOCItem() {
        const activeHeadingId = findActiveHeading();
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        if (activeHeadingId && idToLinkMap[activeHeadingId]) {
            idToLinkMap[activeHeadingId].classList.add('active');
        }
    }
    
    // Listen for scroll events
    let isScrolling;
    window.addEventListener('scroll', function() {
        // Clear the timeout
        window.clearTimeout(isScrolling);
        
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            updateActiveTOCItem();
        }, 50);
    });
    
    // Initialize active item on page load
    window.addEventListener('load', updateActiveTOCItem);
    
    // Initial call to set active item
    updateActiveTOCItem();
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initTOCScrollTracking();
});