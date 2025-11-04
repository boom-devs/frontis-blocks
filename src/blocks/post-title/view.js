(function () {
    "use strict";

    // This block is primarily server-rendered
    function initPostTitleBlocks() {
        // client-side interactions here
        const blocks = document.querySelectorAll(".fb-post-title-block");

        blocks.forEach((block) => {
            if (block.hasAttribute("data-initialized")) return;
            block.setAttribute("data-initialized", "true");

            // client-side functionality 
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