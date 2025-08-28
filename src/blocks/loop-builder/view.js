(function () {
    if (typeof window.CSS === "undefined" || typeof window.CSS.escape !== "function") {
      window.CSS = window.CSS || {};
      window.CSS.escape = function (sel) {
        return sel.replace(/[^a-zA-Z0-9_\-]/g, "\\$&");
      };
    }
  
    /**
     * Clean the URL
     */
    function cleanUrl(param) {
      try {
        var url = new URL(window.location.href);
        url.searchParams.delete(param);
        var qs = url.searchParams.toString();
        window.history.replaceState(null, "", url.pathname + (qs ? "?" + qs : "") + url.hash);
      } catch (e) {}
    }
  
    /**
     * Get the page number from the URL
     */
    function getParamPage(u, param) {
      try {
        var url = new URL(u, window.location.href);
        var v = url.searchParams.get(param);
        return v ? parseInt(v, 10) : null;
      } catch (e) { return null; }
    }
  
    /**
     * Add a parameter to the URL
     */
    function addParam(urlStr, key, val) {
      var url = new URL(urlStr, window.location.href);
      url.searchParams.set(key, String(val));
      return url.toString();
    }
  
    /**
     * Handle the click event
     */
    document.addEventListener("click", function (e) {
      var a = e.target.closest(".fb-query-pagination a");
      if (!a) return;
  
      var blockEl = a.closest(".wp-block-frontis-blocks-loop-builder.fb-loop-builder");
      if (!blockEl) return;
  
      var blockId = blockEl.getAttribute("data-fb-block-id");
      if (!blockId) return;
  
      var nav = a.closest(".fb-query-pagination");
      var pageParam  = (nav && nav.dataset.pageParam)  ? nav.dataset.pageParam  : ("fb_paged_" + blockId.replace(/[^a-z0-9_\-]/gi, ""));
      var baseUrl    = (nav && nav.dataset.baseUrl)    ? nav.dataset.baseUrl    : window.location.href;
      var curr       = (nav && nav.dataset.currentPage)? parseInt(nav.dataset.currentPage,10) : 1;
      var total      = (nav && nav.dataset.totalPages) ? parseInt(nav.dataset.totalPages,10) : 1;
  
    /**
     * Get the target page from the href
     */
      var targetPage = getParamPage(a.getAttribute("href") || "", pageParam);
  
      /**
       * If the target page is not found, then get the target page from the current page ± 1
       */
      if (!targetPage) {
        if (a.classList.contains("fb-page-prev")) targetPage = Math.max(1, curr - 1);
        else if (a.classList.contains("fb-page-next")) targetPage = Math.min(total, curr + 1);
      }
  
      /**
       * If the target page is not found, then return
       */
      if (!targetPage) return;
  
      /**
       * Prevent the default action
       */
      e.preventDefault();
  
      /**
       * Fetch the URL: baseUrl + our unique param
       */
      var fetchUrl = addParam(baseUrl, pageParam, targetPage);
  
      blockEl.classList.add("is-loading");
  
      fetch(fetchUrl, { credentials: "same-origin" })
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var dom = document.implementation.createHTMLDocument("");
          dom.documentElement.innerHTML = html;
  
          var selector = "div.wp-block-frontis-blocks-loop-builder.fb-loop-builder." + CSS.escape(blockId);
          var newBlock = dom.querySelector(selector);
          if (!newBlock) { window.location.href = fetchUrl; return; }
  
          blockEl.outerHTML = newBlock.outerHTML;
          cleanUrl(pageParam);
        })
        .catch(function () { window.location.href = fetchUrl; })
        .finally(function () {
          var b = document.querySelector("div.wp-block-frontis-blocks-loop-builder.fb-loop-builder." + CSS.escape(blockId));
          if (b) b.classList.remove("is-loading");
        });
    }, true);
  })();
  