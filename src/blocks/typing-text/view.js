(function() {
    // টাইপিং এফেক্ট ইনিশিয়ালাইজ করার ফাংশন
    function initTypingEffect() {
      var containers = document.querySelectorAll('.fb-typing-texts');
      
      containers.forEach(function(container) {
        // সকল typing item থেকে text সংগ্রহ করা
        var itemElements = container.querySelectorAll('.fb-typing-item');
        var items = [];
        itemElements.forEach(function(el) {
          items.push(el.textContent);
        });
        
        // যদি কোনো আইটেম না পাওয়া যায়, তাহলে সেই container এ কিছুই করবেন না
        if (!items.length) return;
        
        // টাইপিং এফেক্টের ভেরিয়েবলগুলো
        var currentItem = 0, charIndex = 0, isDeleting = false;
        
        // টাইপিং এফেক্ট ফাংশন
        function typeEffect() {
          var currentText = items[currentItem];
          var displayText = currentText.substring(0, charIndex);
          container.textContent = displayText;
          
          if (!isDeleting) {
            if (charIndex < currentText.length) {
              charIndex++;
              setTimeout(typeEffect, 100); // টাইপিং স্পিড (মিলিসেকেন্ড)
            } else {
              isDeleting = true;
              setTimeout(typeEffect, 1000); // পুরো লেখা হলে অপেক্ষার সময়
            }
          } else {
            if (charIndex > 0) {
              charIndex--;
              setTimeout(typeEffect, 50); // মুছে ফেলার স্পিড
            } else {
              isDeleting = false;
              currentItem = (currentItem + 1) % items.length;
              setTimeout(typeEffect, 500); // পরবর্তী টেক্সটের আগে অপেক্ষার সময়
            }
          }
        }
        
        typeEffect();
      });
    }
  
    // Setup ফাংশন যা বিভিন্ন লোডিং স্টেট ও ডাইনামিক কন্টেন্ট চেক করে
    function setupTypingEffect() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTypingEffect);
      } else {
        initTypingEffect();
      }
      
      // ডাইনামিক কন্টেন্ট পরিবর্তন হলে পুনরায় ইনিশিয়ালাইজ করার জন্য MutationObserver
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
    
    // গ্লোবালি reinit ফাংশন এক্সপোজ করা যাতে প্রয়োজনে পুনরায় ইনিশিয়ালাইজ করা যায়
    window.reinitTypingEffect = initTypingEffect;
    
    // Setup ফাংশন চালু করা
    setupTypingEffect();
  })();
  