import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import Inspector from './inspector';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Edit = (props) => {
    const { attributes, clientId, context, slideIndex } = props;
    const { blockId } = attributes;

    // Default template (outside news ticker)
    const DEFAULT_TEMPLATE = [
        ['frontis-blocks/advanced-image']
    ];

    // Template when inside news ticker
    const NEWS_TICKER_TEMPLATE = [
        ['frontis-blocks/advanced-heading', { headingTag: 'p' }]
    ];

    // Decide template based on context
    const isNewsTicker = context?.['frontisBlocks:isNewsTicker'];
    
    const TEMPLATE = isNewsTicker ? NEWS_TICKER_TEMPLATE : DEFAULT_TEMPLATE;


    // Allowed blocks: all except marquee-carousel itself
    const parentBlocks = wp.blocks.getBlockTypes().filter((item) => !item.parent);
    const ALLOWED_BLOCKS = parentBlocks
        .map((block) => block.name)
        .filter((blockName) => blockName !== 'frontis-blocks/marquee-carousel');

    const innerBlockOptions = {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `marquee-carousel-item-content`,
        },
        innerBlockOptions
    );

    const blockProps = useBlockProps({
        className: `marquee-carousel-item slick-slide ${blockId || 'default-id'}`,
    });

    return (
        <div {...blockProps}>
            <div {...innerBlocksProps} />
        </div>
    );
};

const applyWithSelect = withSelect((select, props) => {
    const deviceType = select('core/editor')?.getDeviceType
        ? select('core/editor').getDeviceType()
        : null;
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