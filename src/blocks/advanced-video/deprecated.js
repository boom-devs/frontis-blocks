import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

/**
 * v1_0_4 - Version with unique IDs support (without backward compatibility)
 * This version always uses unique IDs when blockID exists
 */
const v1_0_4 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
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

        // Always use unique ID if blockID exists (no backward compatibility)
        const uniqueID = blockID || `block-${Math.random().toString(36).substr(2, 9)}`;
        const playerID = `fb-player-option-${uniqueID}`;
        const playIconClass = `fb-play-icon ${uniqueID}`;

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
    },
};

/**
 * v1_0_3 - Old version with inline script and hardcoded ID
 * This is the oldest version that used inline scripts
 */
const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            videoURL,
            autoPlaySwitcher,
            muteSwitcher,
            loopSwitcher,
            showControlsSwitcher,
            imageOverlaySwitcher,
            previewImageUrl,
            videoPlayIcon,
    
            videoGlobalWraperID,
            videoGlobalWraperClass,
    
            advancedVideoDesktopSwitcher,
            advancedVideoTabletSwitcher,
            advancedVideoMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-advanced-video-main-wrapper ${blockID} ${advancedVideoDesktopSwitcher && 'fb-desktop-responsive'} ${advancedVideoTabletSwitcher && 'fb-tablet-responsive'} ${advancedVideoMobileSwitcher && 'fb-mobile-responsive'}`
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper ${videoGlobalWraperClass}`} id={videoGlobalWraperID}>
                        <div className={`fb-advanced-video-wrapper`}>
                            <div className="fb-player-wrapper">
                                {imageOverlaySwitcher && (
                                    <span className="fb-play-icon" style={{ display: 'block' }}>{renderSVG(videoPlayIcon)}</span>
                                )}
                                <div 
                                    id="fb-player-option"
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

                <script>
                    {`
                        document.addEventListener('DOMContentLoaded', () => {
                            const container = document.getElementById('fb-player-option');
                            const playIconSpan = document.querySelector('.fb-play-icon');
                            if (container) {
                                const url = container.getAttribute('data-url');
                                const autoPlay = container.getAttribute('data-autoplay') === 'true';
                                const muted = container.getAttribute('data-muted') === 'true';
                                const loop = container.getAttribute('data-loop') === 'true';
                                const controls = container.getAttribute('data-controls') === 'true';
                                const previewImage = container.getAttribute('data-preview-image');
                                const playIcon = container.getAttribute('data-play-icon');

                                renderReactPlayer(container, { 
                                    url: url,
                                    playing: autoPlay,
                                    muted: muted,
                                    loop: loop,
                                    controls: controls,
                                    light: previewImage,
                                    onClickPreview: () => {
                                        container.setAttribute('data-autoplay', 'true');
                                        playIconSpan.style.display = 'none';
                                        renderReactPlayer(container, { 
                                            url: url,
                                            playing: true,
                                            muted: muted,
                                            loop: loop,
                                            controls: controls,
                                            light: previewImage,
                                            width: '100%',
                                            height: '100%',
                                            className: 'fb-react-player'
                                        });
                                    },
                                    width: '100%',
                                    height: '100%',
                                    className: 'fb-react-player'
                                });


                                playIconSpan.addEventListener('click', () => {
                                    const previewElement = container.querySelector('.react-player__preview');
                                    if (previewElement) {
                                        previewElement.click();
                                    }
                                });
                            }
                        });
                    `}
                </script>
            </>
        );
    },
};

/**
 * v1_1_8 - Old version with inline script and hardcoded ID
 * This is the oldest version that used inline scripts
 */
const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
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
    },
};

// Export in reverse chronological order (newest first)
export default [v1_0_4, v1_0_3, v1_1_8];