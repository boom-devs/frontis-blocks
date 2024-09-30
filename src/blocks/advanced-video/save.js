import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Save({ attributes }) {
    const { 
        blockID,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-advanced-video-main-wrapper ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className="fb-parent-wrapper">
                <div className="fb-advanced-video-wrapper">
                    <div className="fb-player-wrapper">
                        {/* Add static structure with attributes needed for frontend */}
                        <div 
                            className="fb-player-option"
                            data-url={videoURL}
                            data-autoplay={autoPlaySwitcher}
                            data-muted={muteSwitcher}
                            data-loop={loopSwitcher}
                            data-controls={showControlsSwitcher}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
