import { __ } from '@wordpress/i18n';

const VideoBanner = () => {
    return (
        <div className="fb-video-banner">
            <div className="fb-video-wrapper">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/eroWCJodVa8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="fb-video-banner-content">
                <div>
                    <h2>{__('Welcome to Frontis Blocks', 'frontis-blocks')}</h2>
                    <p>{__('The Frontis Block is a modern content creation tool', 'frontis-blocks')}</p>
                </div>
                <a className="fb-create-page-button" href="/wp-admin/post-new.php?post_type=page">
                    {__('Create New Page', 'frontis-blocks')}
                    <span>+</span>
                </a>
            </div>
        </div>
    )
}

export default VideoBanner;
