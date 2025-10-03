(function () {
    "use strict";

    function initPostFeaturedImageBlocks() {
        const blocks = document.querySelectorAll(".fb-post-featured-image-block");
        
        blocks.forEach((block) => {
            if (block.hasAttribute("data-initialized")) return;
            block.setAttribute("data-initialized", "true");
            
            // Add any client-side functionality here
            // For example: lazy loading, lightbox, etc.
        });
    }

    // Initialize
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPostFeaturedImageBlocks);
    } else {
        initPostFeaturedImageBlocks();
    }

    window.reinitPostFeaturedImageBlocks = initPostFeaturedImageBlocks;
})();