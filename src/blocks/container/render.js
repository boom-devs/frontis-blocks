import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import {getBlockTypes} from '@wordpress/blocks';
import {memo, useEffect} from '@wordpress/element';
import {select} from '@wordpress/data';
import backgroundCss from './backgroundCss';
import {useDeviceType} from "@Config/displayType";

const Render = ( props ) => {
	let deviceType = useDeviceType();
	const { attributes, setAttributes, clientId, hasSliderParent, hasPopupParent } = props;

	const {
		p_block_id,
		htmlTag,
		topType,
		topFlip,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomContentAboveShape,
		backgroundType,
		backgroundVideo,
		topInvert,
		bottomInvert,
		isBlockRootParent,
		contentWidth,
		innerContentWidth,
			/** Normal Bg */
			containerBgColorSwitcher,
			containerBgNormalBackgroundType,
			containerBgNormalClassicColor,
			containerBgNormalGradientColor,
			containerBgNormalCustomGradientSwitcher,
			containerBgNormalCustomGradientInputValue,
			containerBgNormalBackgroundImageUrl,
			containerBgNormalBackgroundImageAlt,
			containerBgNormalBackgroundImageID,
			containerBgNormalBackgroundImagePosition,
			containerBgNormalBackgroundImageAttachment,
			containerBgNormalBackgroundImageRepeat,
			containerBgNormalBackgroundImageSize,

			/** Hover Bg */
			containerBgHoverBackgroundType,
			containerBgHoverClassicColor,
			containerBgHoverGradientColor,
			containerBgHoverCustomGradientSwitcher,
			containerBgHoverCustomGradientInputValue,
			containerBgHoverBackgroundImageUrl,
			containerBgHoverBackgroundImageAlt,
			containerBgHoverBackgroundImageID,
			containerBgHoverBackgroundImagePosition,
			containerBgHoverBackgroundImageAttachment,
			containerBgHoverBackgroundImageRepeat,
			containerBgHoverBackgroundImageSize,

			// From fb
			containerType,
			
			containerDesktopSwitcher,
			containerTabletSwitcher,
			containerMobileSwitcher,

			containerGlobalCustomCSSClass,
			containerGlobalCustomCSSID,
	} = attributes;

	const direction = attributes[ 'direction'+deviceType ];
	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
	// const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId, { hasPseudo: true, forStyleSheet: false } );
	const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId );

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const Tag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;
	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'frontis-blocks-container-has-children' : '';
	
	const isRootContainerClass = isBlockRootParent ? `${ containerType === 'full-width' ? 'alignfull' : 'alignwide' } frontis-blocks-is-root-container` : '';

	let responsiveClass = '';
	if(containerDesktopSwitcher){
		responsiveClass = 'fb-desktop-responsive';
	}
	if(containerTabletSwitcher){
		responsiveClass = 'fb-tablet-responsive';
	}
	if(containerMobileSwitcher){
		responsiveClass = 'fb-mobile-responsive';
	}

	const blockProps = useBlockProps();
	const modifBlockProps = useBlockProps( {
		className: `frontis-blocks-block-${ blockProps.id } ${ hasChildrenClass } frontis-blocks-editor-preview-mode-${ deviceType.toLowerCase } ${ isRootContainerClass } ${responsiveClass}`,
		style: getContainerBGStyle,
	} );


	if (modifBlockProps.className && modifBlockProps.className.includes('alignfull') && containerType !== 'full-width') {
		modifBlockProps.className = modifBlockProps.className
		  .split(' ')
		  .filter(className => className !== 'alignfull')
		  .join(' ');
	}

	const innerBlocksParams = {
		__experimentalMoverDirection: { moverDirection },
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	};

	// If a special block is needed, run this code block.
	if ( hasSliderParent || hasPopupParent ) {
		const parentBlocks = getBlockTypes().filter( ( item ) => ( ! item.parent ) );
		innerBlocksParams.allowedBlocks = parentBlocks.map((block) => block.name);
	}

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {

			setAttributes({
				p_block_id: blockProps.id,
			});
		}
	}, [clientId]);

	return (
		<>
			<Tag { ...modifBlockProps } key={ blockProps.id }>
				{/* Video Background is positioned absolutely. The place in the DOM is to render it underneath the shape dividers and content. */}
				{ 'video' === backgroundType && (
					<div className="frontis-blocks-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }

				{ isBlockRootParent ? (
					<div className={`frontis-blocks-container-inner-blocks-wrap ${containerGlobalCustomCSSClass}`} id={containerGlobalCustomCSSID}>
						<InnerBlocks { ...innerBlocksParams } />
					</div>
				) : (
					<InnerBlocks { ...innerBlocksParams } />
				) }
			</Tag>
		</>
	);
};
export default memo( Render );