import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef, useMemo } from '@wordpress/element';
import ReactPlayer from "react-player";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

import Inspector from "./inspector";


export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
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

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-advanced-video-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const blockProps = useBlockProps({
        className: `fb-advanced-video-main-wrapper ${blockID} ${advancedVideoDesktopSwitcher && 'fb-desktop-responsive'} ${advancedVideoTabletSwitcher && 'fb-tablet-responsive'} ${advancedVideoMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    const playerConfig = useMemo(() => ({
        youtube: {
            playerVars: { origin: window.location.origin }
        }
    }), []);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <div {...blockProps}>
                <div className={`fb-parent-wrapper ${videoGlobalWraperClass}`} ref={panelRef} id={videoGlobalWraperID}>
                    <div className={`fb-advanced-video-wrapper`}>
                        <div className="fb-player-wrapper">
                            <div className="fb-player-option">
                                <ReactPlayer
                                    url={videoURL}
                                    playing={autoPlaySwitcher}
                                    muted={muteSwitcher}
                                    loop={loopSwitcher}
                                    controls={showControlsSwitcher}
                                    light={imageOverlaySwitcher ? previewImageUrl : null}
                                    playIcon={videoPlayIconSwitcher ? renderSVG(videoPlayIcon) : null}
                                    onClickPreview={() => setAttributes({ autoPlaySwitcher: true })}
                                    width="100%"
                                    height="100%"
                                    config={playerConfig}
                                    className="fb-react-player"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}