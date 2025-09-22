(function () {
    "use strict";

    // This block is primarily server-rendered
    function initPostTitleBlocks() {
        // Add any client-side interactions here if needed
        const blocks = document.querySelectorAll(".fb-post-title-block");
        
        blocks.forEach((block) => {
            if (block.hasAttribute("data-initialized")) return;
            block.setAttribute("data-initialized", "true");
            
            // Add any client-side functionality here
        });
    }

    // Initialize
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initPostTitleBlocks);
    } else {
        initPostTitleBlocks();
    }

    window.reinitPostTitleBlocks = initPostTitleBlocks;
})();