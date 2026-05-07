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

			var iframe = document.createElement("iframe");
			iframe.className = `fb-pdf-viewer-iframe ${blockID}`;
			iframe.src = viewerUrl;
			iframe.width = "100%";
			iframe.height = height + "px";
			iframe.style.border = "none";
			iframe.title = "PDF Viewer";
			iframe.setAttribute("loading", "lazy");

			block.innerHTML = "";
			block.appendChild(iframe);
		});
	}

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

		if (typeof window !== "undefined") {
			var lastUrl = window.location.href;
			var urlObserver = new MutationObserver(function () {
				if (lastUrl !== window.location.href) {
					lastUrl = window.location.href;
					setTimeout(initPdfViewers, 300);
				}
			});

			urlObserver.observe(document.body, { childList: true, subtree: true });
		}
	}

	setupInitialization();

	window.reinitPdfViewers = initPdfViewers;
})();
