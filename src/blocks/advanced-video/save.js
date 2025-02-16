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
}
