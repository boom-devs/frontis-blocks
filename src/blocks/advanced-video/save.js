import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,
        imageOverlaySwitcher,
        previewImageUrl,
        videoPlayIconSwitcher,
        videoPlayIcon,

        videoGlobalWraperID,
        videoGlobalWraperClass,

        advancedVideoDesktopSwitcher,
        advancedVideoTabletSwitcher,
        advancedVideoMobileSwitcher,
    } = attributes;

    // Use unique ID only if blockID exists, otherwise use old format for backward compatibility
    const useUniqueID = blockID && blockID.trim() !== '';
    const playerID = useUniqueID ? `fb-player-option-${blockID}` : 'fb-player-option';
    const playIconClass = useUniqueID ? `fb-play-icon ${blockID}` : 'fb-play-icon';

    const blockProps = useBlockProps.save({
        className: `fb-advanced-video-main-wrapper ${blockID} ${advancedVideoDesktopSwitcher && 'fb-desktop-responsive'} ${advancedVideoTabletSwitcher && 'fb-tablet-responsive'} ${advancedVideoMobileSwitcher && 'fb-mobile-responsive'}`
    });

    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper ${videoGlobalWraperClass}`} id={videoGlobalWraperID}>
                    <div className={`fb-advanced-video-wrapper`}>
                        <div className="fb-player-wrapper">
                            {imageOverlaySwitcher && videoPlayIconSwitcher && (
                                <span className={playIconClass} style={{ display: 'block' }}>{renderSVG(videoPlayIcon)}</span>
                            )}
                            <div 
                                id={playerID}
                                className="fb-player-option"
                                data-url={videoURL}
                                data-autoplay={autoPlaySwitcher ? 'true' : 'false'}
                                data-muted={muteSwitcher ? 'true' : 'false'}
                                data-loop={loopSwitcher ? 'true' : 'false'}
                                data-controls={showControlsSwitcher ? 'true' : 'false'}
                                data-preview-image={imageOverlaySwitcher ? previewImageUrl : undefined}
                                data-play-icon={videoPlayIcon}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}