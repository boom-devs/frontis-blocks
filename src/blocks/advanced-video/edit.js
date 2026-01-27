import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef, useMemo, useState } from '@wordpress/element';
import ReactPlayer from "react-player";
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

import Inspector from "./inspector";


export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
        videoURL: rawVideoURL,
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



    const [isPlaying, setIsPlaying] = useState(autoPlaySwitcher);
    const [isStarted, setIsStarted] = useState(autoPlaySwitcher);

    const videoURL = useMemo(() => {
        if (!rawVideoURL) return '';
        const str = rawVideoURL.trim();

        // 1. Extract URL if it's an iframe string
        const iframeMatch = str.match(/src=["']([^"']+)["']/);
        let url = iframeMatch ? iframeMatch[1] : str;

        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const idMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
            const videoId = idMatch ? idMatch[1] : null;

            if (videoId) {
                // Use standard youtube.com for best compatibility with ReactPlayer's internals
                url = 'https://www.youtube.com/watch?v=' + videoId;
                const listMatch = str.match(/[?&]list=([^#&?]+)/);
                if (listMatch) url += '&list=' + listMatch[1];
            }
        }
        return url;
    }, [rawVideoURL]);

    useEffect(() => {
        setIsPlaying(autoPlaySwitcher);
        if (autoPlaySwitcher) {
            setIsStarted(true);
        } else {
            setIsStarted(false);
        }
    }, [autoPlaySwitcher, videoURL, imageOverlaySwitcher]);

    useEffect(() => {
        const container = document.querySelector(`.fb-advanced-video-main-wrapper.${blockID}`);
        if (container) {
            const iframe = container.querySelector('.fb-react-player iframe');
            if (iframe) {
                iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            }
        }
    }, [videoURL, isPlaying, blockID]);

    const blockProps = useBlockProps({
        className: `fb-advanced-video-main-wrapper ${blockID} ${advancedVideoDesktopSwitcher && 'fb-desktop-responsive'} ${advancedVideoTabletSwitcher && 'fb-tablet-responsive'} ${advancedVideoMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    const playerConfig = useMemo(() => {
        const siteOrigin = window.location.origin ? window.location.origin.replace(/\/$/, '') : (window.location.protocol + '//' + window.location.hostname);

        return {
            youtube: {
                playerVars: {
                    origin: siteOrigin,
                    enablejsapi: 1,
                    rel: 0,
                    modestbranding: 0
                }
            },
            vimeo: {
                playerOptions: {
                    origin: siteOrigin,
                    transparent: 0
                }
            },
            file: {
                attributes: {
                    controlsList: 'nodownload'
                }
            }
        };
    }, []);

    const togglePlay = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!isStarted && imageOverlaySwitcher) {
            setIsStarted(true);
            setIsPlaying(true);
        } else {
            setIsPlaying(!isPlaying);
        }
    };

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
                            {videoPlayIconSwitcher && (!isPlaying) && (
                                <div
                                    className={`fb-play-icon ${blockID}`}
                                    style={{ display: 'flex', zIndex: 10 }}
                                    onClick={togglePlay}
                                >
                                    {renderSVG(videoPlayIcon)}
                                </div>
                            )}
                            <div className="fb-player-option">
                                <ReactPlayer
                                    key={`${videoURL}-${showControlsSwitcher}`} // Only re-mount when URL or controls change, NOT on play/pause
                                    url={videoURL}
                                    playing={isPlaying}
                                    muted={muteSwitcher}
                                    loop={loopSwitcher}
                                    controls={showControlsSwitcher}
                                    light={!isStarted && imageOverlaySwitcher ? previewImageUrl : false}
                                    onClickPreview={() => {
                                        setIsStarted(true);
                                        setIsPlaying(true);
                                    }}
                                    onPlay={() => {
                                        setIsPlaying(true);
                                        setIsStarted(true);
                                    }}
                                    onPause={() => setIsPlaying(false)}
                                    onEnded={() => {
                                        if (!loopSwitcher) {
                                            setIsPlaying(false);
                                        }
                                    }}
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