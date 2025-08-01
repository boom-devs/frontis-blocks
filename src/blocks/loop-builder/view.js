document.addEventListener('DOMContentLoaded', () => {
    const containerSelector = '.fb-loop-builder';
    const paginationSelector = '.fb-query-pagination';
  
    // Check if LoopBuilderAjax exists globally
    if (typeof LoopBuilderAjax === 'undefined') {
      console.error('❌ LoopBuilderAjax not found');
      return;
    }
  
    console.log('✅ LoopBuilderAjax:', LoopBuilderAjax);
  
    document.body.addEventListener('click', async function (event) {
      const target = event.target.closest(`${paginationSelector} a`);
      if (!target) return;
  
      event.preventDefault();
  
      const url = new URL(target.href);
      const pagedMatch = url.pathname.match(/page\/(\d+)/) || url.search.match(/paged=(\d+)/);
      const paged = pagedMatch ? parseInt(pagedMatch[1]) : 1;
  
      const wrapper = target.closest(containerSelector);
      if (!wrapper) return;
  
      const blockAttrsRaw = wrapper.getAttribute('data-attrs');
      if (!blockAttrsRaw) return;
  
      let blockAttrs;
      try {
        blockAttrs = JSON.parse(blockAttrsRaw);
      } catch (e) {
        console.error('Invalid block attributes:', e);
        return;
      }
  
      wrapper.classList.add('is-loading');
  
      try {
        const res = await fetch(LoopBuilderAjax.ajaxUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: new URLSearchParams({
            action: 'frontis_loop_pagination',
            paged: paged,
            blockAttrs: JSON.stringify(blockAttrs),
            _ajax_nonce: LoopBuilderAjax.nonce
          }),
        });
        console.log(res);
        const result = await res.json();
        if (result.success && result.data?.html) {
          const temp = document.createElement('div');
          temp.innerHTML = result.data.html;
          const newWrapper = temp.querySelector(containerSelector);
          if (newWrapper) {
            wrapper.replaceWith(newWrapper);
          }
        } else {
          console.error('❌ AJAX response error:', result);
        }
      } catch (error) {
        console.error('🔥 AJAX request failed:', error);
      } finally {
        wrapper.classList.remove('is-loading');
      }
    });
  });
  