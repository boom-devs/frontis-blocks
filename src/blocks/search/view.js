(function() {
    document.addEventListener('DOMContentLoaded', function() {

        const searchBlockButton = document.querySelector('.fb-search-container.button-and-search .fb-search-button-wrapper');
        const searchBlockOverlay = document.querySelector('.fb-search-block-wrapper-overlay');

        searchBlockButton.addEventListener('click', function() {
            const searchBlock = document.querySelector('.fb-search-block-wrapper-inner-input-field');
            searchBlock.classList.add('active');

            searchBlockOverlay.classList.add('active');
        });

        searchBlockOverlay.addEventListener('click', function() {
            const searchBlock = document.querySelector('.fb-search-block-wrapper-inner-input-field');
            searchBlock.classList.remove('active');

            searchBlockOverlay.classList.remove('active');
        });
    });
})();