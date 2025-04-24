import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
} from '@wordpress/block-editor';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-social-share ${blockID}`,
    });

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
                clientId={clientId}
            />
            
            <div className="social-share-parent-container">
                <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    template={TEMPLATE}
                    templateLock={false}
                />
            </div>
        </div>
    );
}