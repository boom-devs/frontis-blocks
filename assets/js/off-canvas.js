(function() {
    document.addEventListener('DOMContentLoaded', function() {
      // Get all trigger elements
      const triggers = document.querySelectorAll('.fb-off-canvas-menu-trigger');
      
      // Add click event to each trigger
      triggers.forEach(function(trigger) {
        const targetId = trigger.getAttribute('data-target');
        const menu = document.getElementById(`${targetId}-menu`);
        
        if (!menu) return;
        
        // Open menu when clicking the trigger
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          menu.classList.add('is-active');
          document.body.classList.add('fb-menu-open');
        });
        
        // Close menu when clicking the close button
        const closeBtn = menu.querySelector('.fb-off-canvas-menu-close');
        if (closeBtn) {
          closeBtn.addEventListener('click', function() {
            menu.classList.remove('is-active');
            document.body.classList.remove('fb-menu-open');
          });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
          if (
            menu.classList.contains('is-active') && 
            !menu.contains(e.target) && 
            !trigger.contains(e.target)
          ) {
            menu.classList.remove('is-active');
            document.body.classList.remove('fb-menu-open');
          }
        });
      });
      
      // Add Escape key support to close all menus
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          const activeMenus = document.querySelectorAll('.fb-off-canvas-menu.is-active');
          activeMenus.forEach(function(menu) {
            menu.classList.remove('is-active');
          });
          document.body.classList.remove('fb-menu-open');
        }
      });
    });
  })();