(function() {
    document.addEventListener('DOMContentLoaded', function() {

        const searchBlockButton = document.querySelector('.fb-search-button-wrapper');
        const searchBlockOverlay = document.querySelector('.fb-search-block-wrapper-overlay');

        searchBlockButton.addEventListener('click', function() {
            const searchBlock = document.querySelector('.fb-search-block-wrapper-inner-input-field');
            searchBlock.classList.toggle('active');

            searchBlockOverlay.classList.toggle('active');
        });

        searchBlockOverlay.addEventListener('click', function() {
            const searchBlock = document.querySelector('.fb-search-block-wrapper-inner-input-field');
            searchBlock.classList.remove('active');

            searchBlockOverlay.classList.remove('active');
        });
    });
})();