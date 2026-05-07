(function () {
	function initPdfViewers() {
		document.querySelectorAll("[data-pdf-url]").forEach(function (block) {
			var pdfUrl = block.getAttribute("data-pdf-url");
			var height = block.getAttribute("data-pdf-height");
			var showToolbar = block.getAttribute("data-show-toolbar") === "true";
			var themeColor = block.getAttribute("data-theme-color");
			var blockID = block.classList.contains("fb-pdf-viewer-main-wrapper")
				? block.classList[1]
				: "";

			if (!pdfUrl) return;

			var viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
				pdfUrl,
			)}&embedded=true`;

			// Create the iframe element
			var iframe = document.createElement("iframe");
			iframe.className = `fb-pdf-viewer-iframe ${blockID}`;
			iframe.src = viewerUrl;
			iframe.width = "100%";
			iframe.height = height + "px";
			iframe.style.border = "none";
			iframe.title = "PDF Viewer";
			iframe.setAttribute("loading", "lazy"); // Add lazy loading

			block.innerHTML = ""; // Clear placeholder
			block.appendChild(iframe);
		});
	}

	// Similar initialization logic as advanced-countdown
	var setupDone = false;

	function setupInitialization() {
		if (setupDone) return;
		setupDone = true;

		if (
			document.readyState === "complete" ||
			document.readyState === "interactive"
		) {
			setTimeout(initPdfViewers, 100);
		} else {
			document.addEventListener("DOMContentLoaded", function () {
				setTimeout(initPdfViewers, 100);
			});
		}

		// This part is for SPA-like navigation in the editor or certain themes.
		// Keeping for consistency with context, though might be overkill for a simple PDF viewer.
		if (typeof window !== "undefined") {
			var lastUrl = window.location.href;
			var urlObserver = new MutationObserver(function () {
				if (lastUrl !== window.location.href) {
					lastUrl = window.location.href;
					setTimeout(initPdfViewers, 300);
				}
			});

			// Observe changes in the document body, which might indicate a new page load in a SPA context
			urlObserver.observe(document.body, { childList: true, subtree: true });
		}
	}

	setupInitialization();

	// Expose reinitialization function if needed by other parts of the theme/plugin
	window.reinitPdfViewers = initPdfViewers;
})();
