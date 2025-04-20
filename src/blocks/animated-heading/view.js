(function() {
   
  function initTypingEffect() {
      var containers = document.querySelectorAll('.fb-typing-texts');
      
      containers.forEach(function(container) {
          var itemElements = container.querySelectorAll('.fb-typing-item');
          var items = [];
          itemElements.forEach(function(el) {
              items.push(el.textContent);
              el.style.display = 'none'; // Hide individual items
          });
          
          if (!items.length) return;
          
          // Clear container initially
          container.textContent = '';
          
          var currentItem = 0, charIndex = 0, isDeleting = false;
          
          function typeEffect() {
              var currentText = items[currentItem];
              var displayText = currentText.substring(0, charIndex);
              container.textContent = displayText;
              
              if (!isDeleting) {
                  if (charIndex < currentText.length) {
                      charIndex++;
                      setTimeout(typeEffect, 100);
                  } else {
                      isDeleting = true;
                      setTimeout(typeEffect, 1000);
                  }
              } else {
                  if (charIndex > 0) {
                      charIndex--;
                      setTimeout(typeEffect, 50);
                  } else {
                      isDeleting = false;
                      currentItem = (currentItem + 1) % items.length;
                      setTimeout(typeEffect, 500);
                  }
              }
          }
          
          typeEffect();
      });
  }

  function setupTypingEffect() {
      // Wait for the full window load (including images, etc.)
      window.addEventListener('load', initTypingEffect);
      
      // MutationObserver to handle dynamically added content
      var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
              if (mutation.addedNodes.length || mutation.removedNodes.length) {
                  initTypingEffect();
              }
          });
      });
      
      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  }
  
  window.reinitTypingEffect = initTypingEffect;
  
  setupTypingEffect();
})();