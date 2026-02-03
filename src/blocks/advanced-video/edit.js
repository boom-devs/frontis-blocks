import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useMemo, useState } from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        videoURL: rawVideoURL,
        autoPlaySwitcher,
        muteSwitcher,
        loopSwitcher,
        showControlsSwitcher,
        imageOverlaySwitcher,
        previewImageUrl,
        videoPlayIconSwitcher,
        videoPlayIcon,
        videoGlobalWraperClass,
        videoGlobalWraperID,
    } = attributes;

    const [isStarted, setIsStarted] = useState(autoPlaySwitcher);

    // Parse Video URL
    const videoRes = useMemo(() => {
        if (!rawVideoURL) return null;
        let str = rawVideoURL.trim();
        let youtubeMatch = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
        if (youtubeMatch) return { type: 'youtube', id: youtubeMatch[1] };

        // Help parser for other types (Vimeo, etc.)
        let vimeoMatch = str.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        if (vimeoMatch) return { type: 'vimeo', id: vimeoMatch[1] };

        return { type: 'iframe', url: str };
    }, [rawVideoURL]);

    // Handle YouTube Preview URL
    const previewUrl = useMemo(() => {
        if (videoRes?.type === 'youtube') {
            let url = `https://www.youtube.com/embed/${videoRes.id}?enablejsapi=1`;
            if (isStarted) url += '&autoplay=1&mute=1';
            if (loopSwitcher) url += `&loop=1&playlist=${videoRes.id}`;
            if (!showControlsSwitcher) url += '&controls=0';
            return url;
        }
        if (videoRes?.type === 'vimeo') {
            return `https://player.vimeo.com/video/${videoRes.id}?autoplay=${isStarted ? 1 : 0}&muted=1`;
        }
        return videoRes?.url || '';
    }, [videoRes, isStarted, loopSwitcher, showControlsSwitcher]);

    const togglePlay = () => setIsStarted(true);

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...useBlockProps()}>
                <div className={`fb-parent-wrapper ${videoGlobalWraperClass}`} id={videoGlobalWraperID}>
                    <div className="fb-advanced-video-wrapper">
                        <div className="fb-player-wrapper" style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>

                            {/* Overlay / Placeholder Logic */}
                            {(!isStarted) && (
                                <div className="fb-overlay-preview" onClick={togglePlay} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10, cursor: 'pointer', background: previewImageUrl ? `url(${previewImageUrl}) center/cover` : '#222' }}>
                                    {videoPlayIconSwitcher && (
                                        <div className="fb-play-btn" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                            {renderSVG(videoPlayIcon)}
                                        </div>
                                    )}
                                    {!previewImageUrl && !videoPlayIconSwitcher && (
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
                                            <p>{__('Click to Preview Video', 'frontis-blocks')}</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Standard Iframe for Editor Stability */}
                            {videoRes && (isStarted || !imageOverlaySwitcher) ? (
                                <iframe
                                    className="fb-video-iframe"
                                    src={previewUrl}
                                    frameBorder="0"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                />
                            ) : !videoRes && (
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', color: '#666' }}>
                                    {__('Please enter a valid video URL', 'frontis-blocks')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}