import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
} from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalWraperClass,
        socialShareGlobalWraperID
    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({
                blockID: "fb-social-share-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const blockProps = useBlockProps({
        className: `frontis-block fb-social-share ${blockID} ${socialShareDesktopSwitcher && 'fb-desktop-responsive'} ${socialShareTabletSwitcher && 'fb-tablet-responsive'} ${socialShareMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    const ALLOWED_BLOCKS = ['frontis-blocks/social-share-child'];
    const TEMPLATE = [
        ['frontis-blocks/social-share-child', {
            socialMediaType: 'facebook',
            socialItemColor: '#1877F2',
            socialItemHoverColor: '#0d6efd'
        }],
        ['frontis-blocks/social-share-child', {
            socialMediaType: 'twitter',
            socialItemColor: '#1DA1F2',
            socialItemHoverColor: '#0d6efd'
        }],
        ['frontis-blocks/social-share-child', {
            socialMediaType: 'linkedin',
            socialItemColor: '#0A66C2',
            socialItemHoverColor: '#0d6efd'
        }],
        ['frontis-blocks/social-share-child', {
            socialMediaType: 'whatsapp',
            socialItemColor: '#25D366',
            socialItemHoverColor: '#0d6efd'
        }]
    ];

    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <div className={`social-share-parent-container ${socialShareGlobalWraperClass}`} id={socialShareGlobalWraperID} ref={panelRef}>
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={false}
                />
            </div>
            <style>{blockStyle}</style>
        </div>
    );
}