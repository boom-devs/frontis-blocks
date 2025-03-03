
// document.addEventListener('DOMContentLoaded', function () {
//     const counters = document.querySelectorAll('.fb-counter-number');

//     counters.forEach(counter => {
//         let observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     animateCounter(counter);
//                     observer.disconnect(); // Stop observing after animation starts
//                 }
//             });
//         });
//         observer.observe(counter);
//     });

//     function animateCounter(counterElement) {
//         let start = 0;
//         const end = parseInt(counterElement.getAttribute('aria-label'), 10) || 0;
//         const duration = 2000;
//         let startTime = null;

//         function step(timestamp) {
//             if (!startTime) startTime = timestamp;
//             const progress = Math.min((timestamp - startTime) / duration, 1);
//             const current = Math.floor(progress * (end - start) + start);

//             counterElement.textContent = current.toLocaleString();

//             if (progress < 1) {
//                 window.requestAnimationFrame(step);
//             }
//         }

//         window.requestAnimationFrame(step);
//     }

// });

(function() {
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.fb-counter-number');
        
        counters.forEach(function(counter) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        animateCounter(counter);
                        observer.disconnect(); // Stop observing after animation starts
                    }
                });
            });
            
            observer.observe(counter);
        });
        
        function animateCounter(counterElement) {
            var start = 0;
            var end = parseInt(counterElement.getAttribute('aria-label'), 10) || 0;
            var duration = 2000;
            var startTime = null;
            
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var current = Math.floor(progress * (end - start) + start);
                
                counterElement.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }
            
            window.requestAnimationFrame(step);
        }
    }
    
    var setupDone = false;
    
    function setupInitialization() {
        if (setupDone) return;
        setupDone = true;
        
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(initCounterAnimation, 100);
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                setTimeout(initCounterAnimation, 100);
            });
        }
        
        if (typeof window !== 'undefined') {
            var lastUrl = window.location.href;
            var urlObserver = new MutationObserver(function() {
                if (lastUrl !== window.location.href) {
                    lastUrl = window.location.href;
                    setTimeout(initCounterAnimation, 300);
                }
            });
            
            urlObserver.observe(document.body, { childList: true, subtree: true });
        }
    }
    
    setupInitialization();
    
    window.reinitCounterAnimation = initCounterAnimation;
})();