import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import Inspector from './inspector';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Edit = (props) => {
    const { attributes, setAttributes, clientId, context, slideIndex } = props;

    const { blockId, slideTitle } = attributes;

    const blockProps = useBlockProps({
        className: `fb-slide-main-wrapper ${blockId || 'default-id'} swiper-slide`,
    });

    useEffect(() => {
        setAttributes({
            sliderID: context?.['fb/sliderID'] || '',
            inheritedTransitionType: context?.['fb/sliderInheritedTransitionType'] || '',
            inheritedDisplayIndicators: context?.['fb/sliderInheritedDisplayIndicators'] || false,
            inheritedIndicatorColor: context?.['fb/sliderInheritedIndicatorColor'] || '',
            inheritedAutoplay: context?.['fb/sliderInheritedAutoplay'] || false,
            inheritedAutoplaySpeed: context?.['fb/sliderInheritedAutoplaySpeed'] || 5000,
            inheritedNavigationArrows: context?.['fb/sliderInheritedNavigationArrows'] || false,
        });
    }, [context]);


    const parentBlocks = wp.blocks.getBlockTypes().filter( function ( item ) {
		return ! item.parent;
	} );



    const TEMPLATE = [
		[
			'frontis-blocks/testimonial',
		],
	];


    // Hide slider block.
	const ALLOWED_BLOCKS = parentBlocks
    .map( ( block ) => block.name )
    .filter(
        ( blockName ) => [ 'frontis-blocks/slider', ].indexOf( blockName ) === -1
    );

    const innerBlockOptions = {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
    };

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-content`,
            slot: 'container-start',
        },
        innerBlockOptions
    );


    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            <div {...blockProps}>
                {/* <div className="fb-slide-content">
                    <RichText
                        tagName="h2"
                        className="fb-slide-title"
                        value={slideTitle}
                        onChange={(value) => setAttributes({ slideTitle: value })}
                        placeholder={__('Slide Title', 'frontis')}
                    />
                </div> */}
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
