import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from "./inspector";
import ReactPlayer from "react-player";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        videoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,
        previewImageUrl,
        videoPlayIcon,
     } = attributes;

    const blockProps = useBlockProps({
        className: `fb-advanced-video-main-wrapper ${blockID}`,
    });

    console.log(videoPlayIcon);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            <div {...blockProps}>
                <div className="fb-parent-wrapper">
                    <div className={`fb-advanced-video-wrapper ${blockID}`}>
                        <div className="fb-player-wrapper">
                            <div className="fb-player-option">
                                <ReactPlayer
                                    url={videoURL}
                                    playing={autoPlaySwitcher}
                                    muted={muteSwitcher}
                                    loop={loopSwitcher}
                                    controls={showControlsSwitcher}
                                    light={previewImageUrl}
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
