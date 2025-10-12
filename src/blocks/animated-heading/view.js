// view.js
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.fb-animated-heading-main-wrapper');

  blocks.forEach((block) => {
    const container = block.querySelector('.fb-animated-heading-container');
    if (!container) return;

    const animationType = container.dataset.animationType;
    const startDuration = parseFloat(container.dataset.startDuration) || 0.5;
    const endDuration = parseFloat(container.dataset.endDuration) || 0.5;
    const animationTransition = container.dataset.animationTransition || 'power1.out';
    const cursor = container.dataset.cursor || '';

    // DOM elements
    const dynamicWrapper =
      animationType === 'typing'
        ? container.querySelector('.fb-animated-headings')  // typing uses this
        : container.querySelector('.fb-animated-heading-dynamic-wrapper'); // others use dynamic wrapper

    if (!dynamicWrapper) return;

    // Get items for animation
    const items = Array.from(
      container.querySelectorAll('.fb-animated-heading-item')
    ).map((el) => el.textContent);

    if (!items.length) return;

    const splitText = (el, type = 'words') => {
      const text = el.textContent;
      el.textContent = '';
      if (type === 'words') {
        text.split(' ').forEach((word) => {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = word + ' ';
          span.style.display = 'inline-block';
          el.appendChild(span);
        });
      } else if (type === 'letters') {
        text.split('').forEach((char) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.textContent = char;
          span.style.display = 'inline-block';
          el.appendChild(span);
        });
      }
    };

    // Typing animation
    if (animationType === 'typing') {
      dynamicWrapper.textContent = '';
      let index = 0;

      const cursorEl = cursor
        ? (() => {
            const span = document.createElement('span');
            span.className = 'fb-animated-heading-cursor';
            span.textContent = cursor;
            container.appendChild(span);
            return span;
          })()
        : null;

      const typeText = () => {
        const currentText = items[index];
        let charIndex = 0;

        const typeChar = () => {
          if (charIndex < currentText.length) {
            dynamicWrapper.textContent += currentText[charIndex];
            charIndex++;
            requestAnimationFrame(typeChar);
          } else {
            setTimeout(deleteChar, 1000);
          }
        };

        const deleteChar = () => {
          if (dynamicWrapper.textContent.length > 0) {
            dynamicWrapper.textContent = dynamicWrapper.textContent.slice(0, -1);
            requestAnimationFrame(deleteChar);
          } else {
            index = (index + 1) % items.length;
            typeText();
          }
        };

        typeChar();
      };

      typeText();
    }

    // Non-typing animations
    else {
      let index = 0;

      const animateNext = () => {
        dynamicWrapper.innerHTML = '';
        const text = items[index];
        const el = document.createElement('span');
        el.className = 'fb-animated-heading-text';
        el.textContent = text;
        dynamicWrapper.appendChild(el);

        const splitType = animationType.includes('letter') ? 'letters' : 'words';
        splitText(el, splitType);

        const words = el.querySelectorAll('.word');
        const chars = el.querySelectorAll('.char');

        const tl = gsap.timeline({
          onComplete: () => {
            gsap.delayedCall(1, () => {
              gsap.to(el, {
                opacity: 0,
                y: -30,
                duration: endDuration * 4,
                ease: animationTransition,
                onComplete: () => {
                  index = (index + 1) % items.length;
                  animateNext();
                }
              });
            });
          }
        });

        switch (animationType) {
          case 'words-slide-up':
            tl.from(words, { opacity: 0, yPercent: 100, duration: startDuration * 5, ease: animationTransition, stagger: startDuration });
            break;
          case 'words-rotate-in':
            tl.set(words, { transformPerspective: 1000 });
            tl.from(words, { rotationX: -90, duration: startDuration * 6, ease: animationTransition, stagger: startDuration });
            break;
          case 'words-slide-from-right':
            tl.from(words, { opacity: 0, x: '1em', duration: startDuration * 6, ease: animationTransition, stagger: startDuration });
            break;
          case 'letters-slide-up':
            tl.from(chars, { yPercent: 100, duration: startDuration * 3, ease: animationTransition, stagger: startDuration });
            break;
          case 'letters-slide-down':
            tl.from(chars, { yPercent: -120, duration: startDuration * 3, ease: animationTransition, stagger: startDuration });
            break;
          case 'letters-fade-in':
            tl.from(chars, { opacity: 0, duration: startDuration, ease: animationTransition, stagger: startDuration });
            break;
          case 'letters-fade-in-random':
            tl.from(chars, { opacity: 0, duration: startDuration / 2, ease: animationTransition, stagger: { amount: startDuration * 5, from: 'random' } });
            break;
          case 'scrub-each-word':
            tl.from(words, { opacity: 0.2, duration: startDuration, ease: animationTransition, stagger: { each: startDuration * 2 } });
            break;
          default:
            break;
        }
      animateNext();
      };
      animateNext();
    }
  });
});
