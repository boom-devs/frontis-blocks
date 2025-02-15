import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import Inspector from "./inspector";
import ReactPlayer from "react-player";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
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
     } = attributes;

    const blockProps = useBlockProps({
        className: `fb-advanced-video-main-wrapper ${blockID}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
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
                                    playIcon={renderSVG(videoPlayIcon)}
                                    onClickPreview={() => setAttributes({ autoPlaySwitcher: true })}
                                    width="100%"
                                    height="100%"
                                    className="fb-react-player"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
