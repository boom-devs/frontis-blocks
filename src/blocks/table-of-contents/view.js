/**
 * Improved client-side enhancement for the server-rendered TOC block
 */

document.addEventListener('DOMContentLoaded', function () {
    // Only init once
    if (window.fbTOCInitialized) return;
    window.fbTOCInitialized = true;
    
    const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');
    
    if (tocBlocks.length === 0) return;
    
    // Function to calculate header height dynamically
    function calculateHeaderHeight() {
        // Common header selectors in WordPress themes
        const headerSelectors = [
            'header', 
            '.site-header', 
            '#masthead', 
            '.header', 
            '.main-header', 
            '#site-header',
            '.navigation-top',
            '.fixed-header',
            '.sticky-header'
        ];
        
        let headerHeight = 0;
        
        // Check each possible header element
        for (const selector of headerSelectors) {
            const headerElement = document.querySelector(selector);
            if (headerElement) {
                // Check if header is fixed/sticky using computed style
                const headerStyle = window.getComputedStyle(headerElement);
                const position = headerStyle.position;
                
                if (position === 'fixed' || position === 'sticky') {
                    headerHeight = Math.max(headerHeight, headerElement.offsetHeight);
                }
            }
        }
        
        // Add a small buffer (10px) to ensure heading is clearly visible
        return headerHeight + 10;
    }
    
    // Debug log to verify TOC blocks are found
    console.log(`TOC Blocks found: ${tocBlocks.length}`);
    
    // Set up smooth scrolling
    tocBlocks.forEach(function (tocBlock) {
        // Debug log block attributes
        console.log(`Processing TOC block with ID: ${tocBlock.id || 'unknown'}`);
        
        const tocLinks = tocBlock.querySelectorAll('a');
        const smoothScroll = tocBlock.dataset.smoothScroll === 'true';
        
        // Debug log link count
        console.log(`TOC links found: ${tocLinks.length}, smooth scroll: ${smoothScroll}`);
        
        if (smoothScroll) {
            tocLinks.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    // Debug log target identification
                    console.log(`Scrolling to target: #${targetId}`, targetElement ? 'found' : 'not found');
                    
                    if (targetElement) {
                        // Calculate adaptive offset
                        const headerHeight = calculateHeaderHeight();
                        const adminBarHeight = document.getElementById('wpadminbar') ? 
                            document.getElementById('wpadminbar').offsetHeight : 0;
                        
                        // Get user-defined offset from data attribute
                        const userOffset = parseInt(tocBlock.dataset.scrollOffset) || 20;
                        
                        // Calculate final offset
                        const totalOffset = headerHeight + adminBarHeight + userOffset;
                        
                        // Debug log offset calculation
                        console.log(`Scroll offset: ${totalOffset}px (header: ${headerHeight}, admin: ${adminBarHeight}, user: ${userOffset})`);
                        
                        // Smooth scroll
                        window.scrollTo({
                            top: targetElement.offsetTop - totalOffset,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile TOC after clicking
                        if (window.innerWidth <= 768 && tocBlock.classList.contains('collapsible-mobile')) {
                            tocBlock.classList.add('mobile-collapsed');
                            const tocContainer = tocBlock.querySelector('.fb-toc-container');
                            if (tocContainer) {
                                tocContainer.classList.add('hidden-mobile');
                            }
                        }
                    }
                });
            });
        }
        
        // Set up collapse toggle
        const collapseToggle = tocBlock.querySelector('.fb-toc-collapse-toggle');
        const tocContent = tocBlock.querySelector('.fb-toc-content');
        const collapsible = tocBlock.dataset.collapsible === 'true';
        
        if (collapsible && collapseToggle && tocContent) {
            // Debug log collapsible setup
            console.log(`Collapsible TOC found`);
            
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
        const mobileToggle = tocBlock.querySelector('.fb-toc-mobile-toggle');
        const tocContainer = tocBlock.querySelector('.fb-toc-container');
        
        if (mobileToggle && tocContainer) {
            // Debug log mobile toggle setup
            console.log(`Mobile toggle found`);
            
            mobileToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                
                tocBlock.classList.toggle('mobile-collapsed');
                tocContainer.classList.toggle('hidden-mobile');
                mobileToggle.classList.toggle('toggle-toc');
                
                if (mobileToggle.classList.contains('toggle-toc') && 
                    tocContainer.classList.contains('hidden-mobile')) {
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
        
        tocBlocks.forEach(function (tocBlock) {
            const tocContainer = tocBlock.querySelector('.fb-toc-container');
            const mobileToggle = tocBlock.querySelector('.fb-toc-mobile-toggle');
            
            if (tocContainer &&
                !tocContainer.classList.contains('hidden-mobile') &&
                !tocContainer.contains(e.target) &&
                (!mobileToggle || !mobileToggle.contains(e.target))) {
                
                tocBlock.classList.add('mobile-collapsed');
                tocContainer.classList.add('hidden-mobile');
                if (mobileToggle) {
                    mobileToggle.classList.remove('toggle-toc');
                }
            }
        });
    });
    
    // Handle resize events
    window.addEventListener('resize', function () {
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
    
    // Initialize scroll tracking
    initTOCScrollTracking();
    
    // Log successful initialization
    console.log('TOC initialization complete');
});

// Function to initialize scroll tracking for TOC
function initTOCScrollTracking() {
    const tocBlocks = document.querySelectorAll('.fb-table-of-contents-block');
    if (!tocBlocks.length) return;
    
    // Get all TOC links
    const tocLinks = document.querySelectorAll('.fb-toc-container a');
    if (!tocLinks.length) return;
    
    // Debug log
    console.log(`TOC Scroll tracking initialized with ${tocLinks.length} links`);
    
    // Create a mapping of heading IDs to TOC links
    const idToLinkMap = {};
    tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const id = href.substring(1);
            idToLinkMap[id] = link;
        }
    });
    
    // Debug log mapped headings
    console.log(`Mapped ${Object.keys(idToLinkMap).length} headings for scroll tracking`);
    
    // Function to determine which heading is in view
    function findActiveHeading() {
        let activeHeadingId = null;
        const scrollPosition = window.scrollY;
        
        // Check each heading ID in our map
        for (const id in idToLinkMap) {
            const heading = document.getElementById(id);
            if (!heading) continue;
            
            const headerHeight = calculateHeaderHeight();
            const offset = headerHeight + 50;
            const headingTop = heading.getBoundingClientRect().top + window.scrollY;
            
            // Check if we've scrolled past this heading
            if (scrollPosition >= headingTop - offset) {
                activeHeadingId = id;
            } else {
                break;
            }
        }
        
        return activeHeadingId;
    }
    
    // Function to update active class on TOC items
    function updateActiveTOCItem() {
        const activeHeadingId = findActiveHeading();
        
        // Remove active class from all links
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current link
        if (activeHeadingId && idToLinkMap[activeHeadingId]) {
            idToLinkMap[activeHeadingId].classList.add('active');
        }
    }
    
    // Listen for scroll events with throttling
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

// Helper function to calculate header height
function calculateHeaderHeight() {
    const headerSelectors = [
        'header', 
        '.site-header', 
        '#masthead', 
        '.header', 
        '.main-header', 
        '#site-header',
        '.navigation-top',
        '.fixed-header',
        '.sticky-header'
    ];
    
    let headerHeight = 0;
    
    // Check each possible header element
    for (const selector of headerSelectors) {
        const headerElement = document.querySelector(selector);
        if (headerElement) {
            // Check if header is fixed/sticky using computed style
            const headerStyle = window.getComputedStyle(headerElement);
            const position = headerStyle.position;
            
            if (position === 'fixed' || position === 'sticky') {
                headerHeight = Math.max(headerHeight, headerElement.offsetHeight);
            }
        }
    }
    
    // Add a small buffer (10px) to ensure heading is clearly visible
    return headerHeight + 10;
}