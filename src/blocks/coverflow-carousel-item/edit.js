import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Edit = (props) => {
    const { attributes, setAttributes, clientId, context, slideIndex } = props;

    const { blockID } = attributes;


    const parentBlocks = wp.blocks.getBlockTypes().filter(function (item) {
        return !item.parent;
    });

    const TEMPLATE = [
        ['frontis-blocks/advanced-image', { advancedImageUrl: window.FrontisBlocksData?.pluginUrl + 'assets/images/preset-bg.jpg' }]
    ];

    // Hide coverflow carousel block.
    const ALLOWED_BLOCKS = parentBlocks
        .map((block) => block.name)
        .filter(
            (blockName) => ['frontis-blocks/coverflow-carousel',].indexOf(blockName) === -1
        );

    const innerBlockOptions = {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `fb-coverflow-carousel-content`,
        },
        innerBlockOptions
    );

    const blockProps = useBlockProps({
        className: `fb-coverflow-carousel-child-wrap fb-coverflow-carousel-slide ${blockID ? blockID : ''}`.trim(),
    });

    return (
        <>
            {/* <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} /> */}
            <div {...blockProps}>
                <div {...innerBlocksProps} />
            </div>
        </>
    );
};

const applyWithSelect = withSelect((select, props) => {
    const deviceType = select('core/editor')?.getDeviceType ? select('core/editor').getDeviceType() : null;
    const { getBlocks, getBlockIndex } = select('core/block-editor');
    const innerBlocks = getBlocks(props.clientId);
    const slideIndex = getBlockIndex(props.clientId);

    return {
        innerBlocks,
        deviceType,
        isParentOfSelectedBlock: select('core/block-editor').hasSelectedInnerBlock(props.clientId, true),
        slideIndex,
    };
});

export default compose(applyWithSelect)(Edit);
