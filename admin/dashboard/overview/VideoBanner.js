import { __ } from '@wordpress/i18n';
import { Play, Plus } from '../../icons';
import Button from '../../components/common/Button';

const VideoBanner = () => {

    const gotoPage = () => {
        window.open('/wp-admin/post-new.php?post_type=page', '_blank');
    }

    const gotoYoutube = () => {
        window.open('/wp-admin/post-new.php?post_type=page', '_blank');
    }

    return (
        <div className="fb-video-banner">
            <div className="fb-video-banner-header">
                <h1 className='heading-1'>{__('Welcome to Frontis Blocks', 'frontis-blocks')}</h1>
                <p className='p1'>{__('Enhance your WordPress site with custom, easy-to-use blocks. Fontis Blocks offers intuitive design options and endless customization to make your content shine.', 'frontis-blocks')}</p>
            </div>

            <div className="fb-video-wrapper card-v1">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/8U0K_wMcUPg?si=xneqJlJjVI-8sWod"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <div className="fb-video-banner-content">
                    <Button text={__('Watch on Youtube', 'frontis-blocks')} icon={<Play />} onClick={gotoYoutube} />
                    <Button text={__('Create New Page', 'frontis-blocks')} buttonType='fill' icon={<Plus />} position='right' onClick={gotoPage} />
                </div>
            </div>
        </div>
    )
}

export default VideoBanner;
