document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const iframe = document.querySelector('iframe.edit-site-visual-editor__editor-canvas');

        if (!iframe) {
            console.error("Iframe not found!");
            return;
        }

        // Check if iframe is already loaded
        if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
            injectStyleIntoIframe(iframe);
        } else {
            iframe.onload = function () {
                injectStyleIntoIframe(iframe);
            };
        }
    }, 10000);
});

function injectStyleIntoIframe(iframe) {
    const style = document.createElement('style');
    style.id = "test-responsive";
    style.textContent = `
        @media only screen and (min-width: 1025px) {
            .fb-desktop-responsive {
                background: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px) !important;
                opacity: .4;
            }
        }

        @media only screen and (max-width: 1024px) {
            .fb-tablet-responsive {
                background: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px) !important;
                opacity: .4;
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-mobile-responsive {
                background: repeating-linear-gradient(125deg, rgba(0, 0, 0, .05), rgba(0, 0, 0, .05) 1px, transparent 2px, transparent 9px) !important;
                opacity: .4;
            }
        }
    `;

    if (iframe.contentDocument && iframe.contentDocument.head) {
        iframe.contentDocument.head.appendChild(style);
        console.log("Style injected successfully!");
    } else {
        console.error("Iframe head not accessible!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const iframe = document.querySelector('body.block-editor-page iframe');

        if (!iframe) {
            console.error("Iframe not found!");
            return;
        }

        // Check if iframe is already loaded
        if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
            injectStyleIntoIframe(iframe);
        } else {
            iframe.onload = function () {
                injectStyleIntoIframe(iframe);
            };
        }
    }, 10000);
});

