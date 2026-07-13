// (function() {
//     function initCounterAnimation() {
//         const counters = document.querySelectorAll('.fb-counter-number');
        
//         counters.forEach(function(counter) {
//             if (counter.dataset.animated === "true") return;
            
//             var observer = new IntersectionObserver(function(entries) {
//                 entries.forEach(function(entry) {
//                     if (entry.isIntersecting) {
//                         animateCounter(counter);
//                         counter.dataset.animated = "true";
//                         observer.disconnect();
//                     }
//                 });
//             }, { threshold: 0.5 });
            
//             observer.observe(counter);
//         });
//     }
    
//     function animateCounter(counterElement) {
//         var start = parseFloat(counterElement.getAttribute('counter-start')) || 0;
//         var end = parseFloat(counterElement.getAttribute('counter-end')) || 0;
//         var duration = parseInt(counterElement.getAttribute('counter-duration'), 10) || 2000;
//         var separatorEnabled = counterElement.getAttribute('separator-switch') === 'true';
//         var separatorType = counterElement.getAttribute('separator-type') || 'comma';
        
//         var startTime = null;
        
//         function step(timestamp) {
//             if (!startTime) startTime = timestamp;
            
//             var progress = Math.min((timestamp - startTime) / duration, 1);
//             var current = progress * (end - start) + start;
            
//             let formattedNumber;
            
//             // Check if the counter values have decimal places
//             const hasDecimal = !Number.isInteger(start) || !Number.isInteger(end);
//             const decimalPlaces = hasDecimal ? 1 : 0;
            
//             if (separatorEnabled) {
//                 switch (separatorType) {
//                     case 'comma':
//                         formattedNumber = current.toLocaleString('en-US', {
//                             minimumFractionDigits: decimalPlaces,
//                             maximumFractionDigits: decimalPlaces
//                         });
//                         break;
//                     case 'dot':
//                         formattedNumber = current.toLocaleString('de-DE', {
//                             minimumFractionDigits: decimalPlaces,
//                             maximumFractionDigits: decimalPlaces
//                         });
//                         break;
//                     case 'space':
//                         formattedNumber = current.toLocaleString('fr-FR', {
//                             minimumFractionDigits: decimalPlaces,
//                             maximumFractionDigits: decimalPlaces
//                         }).replace(/\./g, ' ');
//                         break;
//                     default:
//                         formattedNumber = current.toLocaleString(undefined, {
//                             minimumFractionDigits: decimalPlaces,
//                             maximumFractionDigits: decimalPlaces
//                         });
//                 }
//             } else {
//                 // Only show decimal places if necessary
//                 formattedNumber = hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current).toString();
//             }
            
//             counterElement.textContent = formattedNumber;
            
//             if (progress < 1) {
//                 window.requestAnimationFrame(step);
//             }
//         }
        
//         window.requestAnimationFrame(step);
//     }
    
//     var setupDone = false;
    
//     function setupInitialization() {
//         if (setupDone) return;
//         setupDone = true;
        
//         if (document.readyState === 'complete' || document.readyState === 'interactive') {
//             setTimeout(initCounterAnimation, 100);
//         } else {
//             document.addEventListener("DOMContentLoaded", function() {
//                 setTimeout(initCounterAnimation, 100);
//             });
//         }
        
//         if (typeof window !== 'undefined') {
//             var lastUrl = window.location.href;
//             var urlObserver = new MutationObserver(function() {
//                 if (lastUrl !== window.location.href) {
//                     lastUrl = window.location.href;
//                     setTimeout(initCounterAnimation, 300);
//                 }
//             });
            
//             urlObserver.observe(document.body, { childList: true, subtree: true });
//         }
//     }
    
//     setupInitialization();
    
//     window.reinitCounterAnimation = initCounterAnimation;
// })();
(function () {
	function initCounterAnimation() {
		const counters = document.querySelectorAll('.fb-counter-number');

		counters.forEach(function (counter) {
			if (counter.dataset.animated === "true") return;

			var observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						animateCounter(counter);
						counter.dataset.animated = "true";
						observer.disconnect();
					}
				});
			}, { threshold: 0.5 });

			observer.observe(counter);
		});
	}

	function formatNumberWithSpaceSeparator(num, decimalPlaces) {
		const [intPart, decPart] = num.toFixed(decimalPlaces).split('.');
		const intWithSpace = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		return decPart ? `${intWithSpace}.${decPart}` : intWithSpace;
	}

	function animateCounter(counterElement) {
		const start = parseFloat(counterElement.getAttribute('counter-start')) || 0;
		const end = parseFloat(counterElement.getAttribute('counter-end')) || 0;
		const duration = parseInt(counterElement.getAttribute('counter-duration'), 10) || 2000;
		const separatorEnabled = counterElement.getAttribute('separator-switch') === 'true';
		const separatorType = counterElement.getAttribute('separator-type') || 'comma';

		let startTime = null;

		function step(timestamp) {
			if (!startTime) startTime = timestamp;

			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = progress * (end - start) + start;

			const hasDecimal = !Number.isInteger(start) || !Number.isInteger(end);
			const decimalPlaces = hasDecimal ? 1 : 0;

			let formattedNumber;

			if (separatorEnabled) {
				switch (separatorType) {
					case 'comma':
						formattedNumber = current.toLocaleString('en-US', {
							minimumFractionDigits: decimalPlaces,
							maximumFractionDigits: decimalPlaces
						});
						break;
					case 'dot':
						formattedNumber = current.toLocaleString('de-DE', {
							minimumFractionDigits: decimalPlaces,
							maximumFractionDigits: decimalPlaces
						});
						break;
					case 'space':
						formattedNumber = formatNumberWithSpaceSeparator(current, decimalPlaces);
						break;
					default:
						formattedNumber = current.toLocaleString(undefined, {
							minimumFractionDigits: decimalPlaces,
							maximumFractionDigits: decimalPlaces
						});
				}
			} else {
				formattedNumber = hasDecimal ? current.toFixed(decimalPlaces) : Math.round(current).toString();
			}

			counterElement.textContent = formattedNumber;

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		}

		window.requestAnimationFrame(step);
	}

	let setupDone = false;

	function setupInitialization() {
		if (setupDone) return;
		setupDone = true;

		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			setTimeout(initCounterAnimation, 100);
		} else {
			document.addEventListener("DOMContentLoaded", function () {
				setTimeout(initCounterAnimation, 100);
			});
		}

		if (typeof window !== 'undefined') {
			let lastUrl = window.location.href;
			const urlObserver = new MutationObserver(function () {
				if (lastUrl !== window.location.href) {
					lastUrl = window.location.href;
					setTimeout(initCounterAnimation, 300);
				}
			});

			urlObserver.observe(document.body, { childList: true, subtree: true });
		}

		// Handle dynamic content changes (crucial for Next.js / SPA route transitions)
		if (typeof MutationObserver !== "undefined") {
			var domObserver = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					if (mutation.addedNodes.length || mutation.removedNodes.length) {
						initCounterAnimation();
					}
				});
			});

			domObserver.observe(document.body, {
				childList: true,
				subtree: true
			});
		}
	}

	setupInitialization();

	window.reinitCounterAnimation = initCounterAnimation;
})();
