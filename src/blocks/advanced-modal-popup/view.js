(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const modals = document.querySelectorAll('.fb-advanced-modal-popup-container');

        modals.forEach((modalContainer) => {
            const trigger = modalContainer.querySelector('.js-fb-modal-trigger');
            const popup = modalContainer.querySelector('.js-fb-modal-popup');
            const closeBtn = modalContainer.querySelector('.js-fb-modal-close-btn');
            const overlay = modalContainer.querySelector('.js-fb-modal-overlay');

            if (!trigger || !popup) return;

            const openModal = () => {
                popup.classList.add('open');
                if (overlay) overlay.classList.add('active');
                
                // Optional: Pause background scrolling
                document.body.style.overflow = 'hidden';

                // Auto-play video or iframe if present inside the modal popup
                const video = popup.querySelector('video');
                if (video) {
                    video.play();
                }
            };

            const closeModal = () => {
                popup.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
                
                // Resume background scrolling
                document.body.style.overflow = '';

                // Pause video or iframe if present inside the modal popup
                const video = popup.querySelector('video');
                if (video) {
                    video.pause();
                }

                // Stop iframe videos (YouTube/Vimeo)
                const iframe = popup.querySelector('iframe');
                if (iframe) {
                    const iframeSrc = iframe.src;
                    iframe.src = iframeSrc; // Reloading the iframe stops the video
                }
            };

            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });

            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeModal();
                });
            }

            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    e.preventDefault();
                    closeModal();
                });
            }
        });
    });
})();