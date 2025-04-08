document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-share-button');

    socialButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, 'share-dialog', 'width=626,height=436');
        });
    });
});