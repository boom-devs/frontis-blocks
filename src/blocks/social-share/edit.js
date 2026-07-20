import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
} from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from './inspector';

import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateSocialShareStyle from "./styling";

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalWraperClass,
        socialShareGlobalWraperID
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-social-share',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateSocialShareStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

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

            {isSelected && (
                 <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

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