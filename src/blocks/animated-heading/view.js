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

    // Determine wrapper
    const dynamicWrapper =
      animationType === 'typing'
        ? container.querySelector('.fb-animated-headings')
        : container.querySelector('.fb-animated-heading-dynamic-wrapper');

    if (!dynamicWrapper) return;

    // Get all text items
    const items = Array.from(container.querySelectorAll('.fb-animated-heading-item'))
      .map((el) => el.textContent.trim())
      .filter(Boolean);

    if (!items.length) return;

    // Helper: split text
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

    // ============================================================
    // Typing Animation
    // ============================================================
    if (animationType === 'typing') {
        dynamicWrapper.textContent = '';
        let index = 0;
      
        // Use existing DOM cursor (keep it static)
        const cursorEl = container.querySelector('.fb-animated-heading-cursor');
      
        const typeText = () => {
          const currentText = items[index];
          let charIndex = 0;
      
          // Type characters left → right
          const typeChar = () => {
            if (charIndex < currentText.length) {
              dynamicWrapper.textContent += currentText[charIndex];
              charIndex++;
              gsap.delayedCall(startDuration, typeChar);
            } else {
              gsap.delayedCall(1, deleteChar);
            }
          };
      
          // Delete characters right → left
          const deleteChar = () => {
            if (dynamicWrapper.textContent.length > 0) {
              dynamicWrapper.textContent = dynamicWrapper.textContent.slice(0, -1);
              gsap.delayedCall(endDuration, deleteChar);
            } else {
              index = (index + 1) % items.length;
              typeText();
            }
          };
      
          typeChar();
        };
      
        if (cursorEl) {
          cursorEl.style.opacity = '1';
          cursorEl.style.display = 'inline';
          cursorEl.style.visibility = 'visible';
        }
      
        typeText();
        return;
    }

    // ============================================================
    // Swirl Animation
    // ============================================================
    if (animationType === 'swirl') {
      let index = 0;

      const animateNextText = () => {
        dynamicWrapper.innerHTML = '';

        const text = items[index];
        const spanContainer = document.createElement('span');
        spanContainer.className = 'fb-animated-heading-swirl-text';
        spanContainer.style.display = 'inline-block';
        dynamicWrapper.appendChild(spanContainer);

        // Create letter spans
        const letters = text.split('').map((char) => {
          const letterSpan = document.createElement('span');
          letterSpan.textContent = char;
          letterSpan.style.display = 'inline-block';
          letterSpan.style.opacity = 0;
          spanContainer.appendChild(letterSpan);
          return letterSpan;
        });

        // Swirl In
        gsap.fromTo(
          letters,
          { opacity: 0, y: 20, rotation: -90 },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: startDuration * 12,
            stagger: startDuration,
            ease: animationTransition,
          }
        );

        // Swirl Out
        gsap.delayedCall(2.5, () => {
          gsap.to(letters, {
            opacity: 0,
            y: -20,
            rotation: 90,
            duration: endDuration * 10,
            stagger: endDuration,
            ease: animationTransition,
            onComplete: () => {
              spanContainer.remove();
              index = (index + 1) % items.length;
              animateNextText();
            },
          });
        });
      };

      animateNextText();
      return; // Stop here for swirl
    }

    // ============================================================
    // GSAP Word/Letter Animations
    // ============================================================
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
              },
            });
          });
        },
      });

      switch (animationType) {
        case 'words-slide-up':
          tl.from(words, {
            opacity: 0,
            yPercent: 100,
            duration: startDuration * 5,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'words-rotate-in':
          tl.set(words, { transformPerspective: 1000 });
          tl.from(words, {
            rotationX: -90,
            duration: startDuration * 6,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'words-slide-from-right':
          tl.from(words, {
            opacity: 0,
            x: '1em',
            duration: startDuration * 6,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'letters-slide-up':
          tl.from(chars, {
            yPercent: 100,
            duration: startDuration * 3,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'letters-slide-down':
          tl.from(chars, {
            yPercent: -120,
            duration: startDuration * 3,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'letters-fade-in':
          tl.from(chars, {
            opacity: 0,
            duration: startDuration,
            ease: animationTransition,
            stagger: startDuration,
          });
          break;

        case 'letters-fade-in-random':
          tl.from(chars, {
            opacity: 0,
            duration: startDuration / 2,
            ease: animationTransition,
            stagger: { amount: startDuration * 5, from: 'random' },
          });
          break;

        case 'scrub-each-word':
          tl.from(words, {
            opacity: 0.2,
            duration: startDuration,
            ease: animationTransition,
            stagger: { each: startDuration * 2 },
          });
          break;

        default:
          break;
      }
    };

    animateNext();
  });
});
