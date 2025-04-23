document.addEventListener('DOMContentLoaded', function() {
    const socialButtons = document.querySelectorAll('.social-share-button');

    socialButtons.forEach(function(button) {
        const socialType = button.getAttribute('data-social-type');
        if (socialType && typeof SocialShareData !== 'undefined') {
            const networkLabel = getNetworkLabel(socialType);
            button.setAttribute('title', `Share on ${networkLabel}`);
        }
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const socialType = this.classList[1]; 
            
            if (typeof SocialShareData !== 'undefined' && SocialShareData.share_urls[socialType]) {
                let shareUrl = SocialShareData.share_urls[socialType];
                
                if (socialType === 'twitter' || socialType === 'pinterest' || socialType === 'reddit') {
                    shareUrl += encodeURIComponent(SocialShareData.permalink) + '&text=' + encodeURIComponent(SocialShareData.title);
                } else if (socialType === 'whatsapp') {
                    shareUrl += encodeURIComponent(SocialShareData.title + ' ' + SocialShareData.permalink);
                } else {
                    shareUrl += encodeURIComponent(SocialShareData.permalink);
                }
                
                window.open(shareUrl, 'share-dialog', 'width=626,height=436');
            } else {
                window.open(this.href, 'share-dialog', 'width=626,height=436');
            }
        });
    });
    
    function getNetworkLabel(type) {
        switch(type) {
            case 'facebook': return 'Facebook';
            case 'twitter': return 'Twitter';
            case 'linkedin': return 'LinkedIn';
            case 'pinterest': return 'Pinterest';
            case 'reddit': return 'Reddit';
            case 'whatsapp': return 'WhatsApp';
            default: return '';
        }
    }
});