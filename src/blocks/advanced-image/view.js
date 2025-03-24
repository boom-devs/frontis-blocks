// class AdvancedImageLoader {
//     constructor(config = {}) {
//       this.config = {
//         lazyOffset: 50,
//         imageQuality: 85,
//         placeholder: {
//           color: '#F1F1F1',
//           blurHashLevel: 4
//         },
//         screens: {
//           sm: 640,
//           md: 768,
//           lg: 1024,
//           xl: 1280,
//           '2xl': 1536
//         },
//         cdnUrl: config.cdnUrl || '',
//         ...config
//       };
  
//       this.processedImages = new WeakSet();
//       this.processedVideos = new WeakSet();
//       this.init();
//     }
  
//     init() {
//       // Handle LCP elements immediately
//       this.processLCPElements();
  
//       // Proceed with lazy loading for the rest
//       if (document.readyState === 'complete') {
//         this.setupLazyLoading();
//       } else {
//         window.addEventListener('load', () => this.setupLazyLoading());
//       }
//     }
  
//     processLCPElements() {
//         const lcpElements = this.identifyLCPElements();
//         lcpElements.forEach(element => {
//           if (element.tagName === 'IMG' && element.closest('.data-lazy-load-true')) {
//             this.processLCPImage(element);
//           }
//         });
//     }
  
//     identifyLCPElements() {
//       const elements = [];
//       const heroImage = document.querySelector('.hero img, .banner img, header img');
//       if (heroImage) elements.push(heroImage);
  
//       const aboveFoldImages = Array.from(document.querySelectorAll('img')).filter(img => {
//         const rect = img.getBoundingClientRect();
//         return rect.top < window.innerHeight && rect.width > 200 && rect.height > 200;
//       });
//       elements.push(...aboveFoldImages);
  
//       return elements;
//     }
  
//     async processLCPImage(img) {
//       if (this.processedImages.has(img)) return;
//       const originalSrc = img.getAttribute('src') || img.getAttribute('data-src');
//       if (!originalSrc) return;
  
//       const optimizedSrc = this.getOptimizedUrl(originalSrc);
//       img.src = optimizedSrc;
//       img.setAttribute('fetchpriority', 'high');
//       this.processedImages.add(img);
//     }
  
//     setupLazyLoading() {
//       this.observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             this.loadImage(entry.target);
//             this.observer.unobserve(entry.target);
//           }
//         });
//       }, { rootMargin: `${this.config.lazyOffset}px`, threshold: 0.1 });
  
//       this.processImages();
//       this.watchDOM();
//     }
  
//     processImages() {
//       document.querySelectorAll('img[data-src]').forEach(img => {
//         if (!this.processedImages.has(img)) {
//           this.observer.observe(img);
//         }
//       });
//     }
//     processImages() {
//         document.querySelectorAll('img[data-src]').forEach(img => {
//           if (!this.processedImages.has(img) && img.closest('.data-lazy-load-true')) {
//             this.observer.observe(img);
//           }
//         });
//     }
  
//     loadImage(img) {
//       const originalSrc = img.getAttribute('data-src');
//       if (!originalSrc) return;
//       const optimizedSrc = this.getOptimizedUrl(originalSrc);
//       img.src = optimizedSrc;
//       img.removeAttribute('data-src');
//       this.processedImages.add(img);
//     }
  
//     getOptimizedUrl(url) {
//       if (!this.config.cdnUrl) {
//         return url;
//       }
//       return `${this.config.cdnUrl}/optimize?url=${encodeURIComponent(url)}&q=${this.config.imageQuality}`;
//     }
  
//     watchDOM() {
//       const observer = new MutationObserver(() => this.processImages());
//       observer.observe(document.body, { childList: true, subtree: true });
//     }
//   }
  
//   const advancedImageLoader = new AdvancedImageLoader({
//     lazyOffset: 100,
//     placeholder: { color: '#E2E2E2', blurHashLevel: 4 }
//   });
  

// class AdvancedImageLoader {
//   constructor(config = {}) {
//     this.config = {
//       lazyOffset: 50,
//       imageQuality: 85,
//       placeholder: {
//         color: '#F1F1F1',
//         blurHashLevel: 4
//       },
//       screens: {
//         sm: 640,
//         md: 768,
//         lg: 1024,
//         xl: 1280,
//         '2xl': 1536
//       },
//       cdnUrl: config.cdnUrl || '',
//       ...config
//     };

//     this.processedImages = new WeakSet();
//     this.processedVideos = new WeakSet();
//     this.init();
//   }

//   init() {
//     this.processLCPElements(); // Process important images (LCP) immediately
//     if (document.readyState === 'complete') {
//       this.setupLazyLoading();
//     } else {
//       window.addEventListener('load', () => this.setupLazyLoading());
//     }
//   }

//   processLCPElements() {
//     const lcpElements = this.identifyLCPElements();
//     lcpElements.forEach(element => {
//       if (element.tagName === 'IMG' && element.closest('.fb-parent-wrapper[class*="data-lazy-load-true"]')) {
//         this.processLCPImage(element);
//       }
//     });
//   }

//   identifyLCPElements() {
//     const elements = [];
//     const heroImage = document.querySelector('.hero img, .banner img, header img');
//     if (heroImage) elements.push(heroImage);

//     const aboveFoldImages = Array.from(document.querySelectorAll('img')).filter(img => {
//       const rect = img.getBoundingClientRect();
//       return rect.top < window.innerHeight && rect.width > 200 && rect.height > 200;
//     });
//     elements.push(...aboveFoldImages);

//     return elements;
//   }

//   async processLCPImage(img) {
//     if (this.processedImages.has(img)) return;
//     const originalSrc = img.getAttribute('data-src');  // Check data-src for the lazy-load image
//     if (!originalSrc) return;

//     const optimizedSrc = this.getOptimizedUrl(originalSrc);
//     img.src = optimizedSrc;
//     img.setAttribute('fetchpriority', 'high');
//     this.processedImages.add(img);
//   }

//   setupLazyLoading() {
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           this.loadImage(entry.target);
//           this.observer.unobserve(entry.target);
//         }
//       });
//     }, { rootMargin: `${this.config.lazyOffset}px`, threshold: 0.1 });

//     this.processImages();  // Start observing images
//     this.watchDOM();  // Keep watching for new images added dynamically
//   }

//   processImages() {
//     document.querySelectorAll('img[data-src]').forEach(img => {
//       if (!this.processedImages.has(img) && img.closest('.fb-parent-wrapper[class*="data-lazy-load-true"]')) {
//         this.observer.observe(img);  // Lazy load the images
//       }
//     });
//   }

//   loadImage(img) {
//     const originalSrc = img.getAttribute('data-src');
//     if (!originalSrc) return;
//     const optimizedSrc = this.getOptimizedUrl(originalSrc);
//     img.src = optimizedSrc;
    
//     const originalSrcSet = img.getAttribute('data-srcset');
//     if (originalSrcSet) {
//       img.srcset = originalSrcSet;
//       img.removeAttribute('data-srcset');
//     }

//     img.removeAttribute('data-src');  // After loading, remove data-src to prevent reloading
//     this.processedImages.add(img);
//   }

//   getOptimizedUrl(url) {
//     if (!this.config.cdnUrl) {
//       return url;
//     }
//     return `${this.config.cdnUrl}/optimize?url=${encodeURIComponent(url)}&q=${this.config.imageQuality}`;
//   }

//   watchDOM() {
//     const observer = new MutationObserver(() => this.processImages());
//     observer.observe(document.body, { childList: true, subtree: true });
//   }
// }

// const advancedImageLoader = new AdvancedImageLoader({
//   lazyOffset: 100,
//   placeholder: { color: '#E2E2E2', blurHashLevel: 4 }
// });
