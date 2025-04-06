document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-share-button');
    
    socialButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const network = this.classList[1];
            if (network !== 'email') {
                e.preventDefault();
                window.open(this.href, 'share-dialog', 'width=626,height=436');
            }
        });
    });
});