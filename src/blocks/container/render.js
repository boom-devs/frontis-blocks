import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';
import {getBlockTypes} from '@wordpress/blocks';
import {memo, useEffect} from '@wordpress/element';
import {useSelect} from '@wordpress/data';
import backgroundCss from './backgroundCss';
import {useDeviceType} from "@Config/displayType";
import getCustomCss from '@Utils/getCustomCss';

const ALLOWED_FORM_BLOCKS = [
    "frontis-blocks/container",
    "frontis-forms/field-text",
    "frontis-forms/field-textarea",
    "frontis-forms/field-radio",
    "frontis-forms/field-select",
    "frontis-forms/field-checkbox"
];

const Render = ( props ) => {
	let deviceType = useDeviceType();
	const { attributes, setAttributes, clientId, hasSliderParent, hasPopupParent } = props;

	const {
		htmlTag,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		formContainerSwitcher,

		// From fb
		containerType,
		containerDesktopSwitcher,
		containerTabletSwitcher,
		containerMobileSwitcher,
		containerGlobalCustomCSS,
		containerGlobalCustomCSSClass,
		containerGlobalCustomCSSID,
		containerGlobalCustomCSSValue,
	} = attributes;

	const containerBlockId = attributes.p_block_id || clientId;

	const direction = attributes[ 'direction'+deviceType ];
	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
	const getContainerBGStyle = backgroundCss( attributes, deviceType, clientId );

	const { hasChildBlocks, hasChildren } = useSelect( ( selectStore ) => {
		const coreEditor = selectStore( 'core/block-editor' );
		const order = coreEditor?.getBlockOrder( clientId ) || [];
		return {
			hasChildBlocks: order.length > 0,
			hasChildren: order.length > 0,
		};
	}, [ clientId ] );

	const Tag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;
	const hasChildrenClass = hasChildren ? 'frontis-blocks-container-has-children' : '';

	const isRootContainerClass = isBlockRootParent ? `${ containerType === 'full-width' ? 'alignfull' : 'alignwide' } frontis-blocks-is-root-container` : `child ${containerGlobalCustomCSSClass}`;

	let desktopResponsiveClass = '';
	let tabletResponsiveClass = '';
	let mobileResponsiveClass = '';
	if(containerDesktopSwitcher){
		desktopResponsiveClass = 'fb-desktop-responsive';
	}
	if(containerTabletSwitcher){
		tabletResponsiveClass = 'fb-tablet-responsive';
	}
	if(containerMobileSwitcher){
		mobileResponsiveClass = 'fb-mobile-responsive';
	}

	const blockProps = useBlockProps();
	const modifBlockProps = useBlockProps( {
		className: `frontis-blocks-block-${ containerBlockId } ${ hasChildrenClass } frontis-blocks-editor-preview-mode-${ deviceType ? deviceType.toLowerCase() : 'desktop' } ${ isRootContainerClass } ${desktopResponsiveClass} ${tabletResponsiveClass} ${mobileResponsiveClass}`,
		style: getContainerBGStyle,
	} );

	/**
	 * Generate and update Custom CSS.
	 * 
	 * Always uses space separator (descendant selector) for all containers.
	 * For child containers, custom classes added to the container are passed
	 * as selfClasses to getCustomCss, which auto-detects when a selector
	 * matches a self-class and uses a chained selector (no space) instead.
	 * 
	 * Example with custom class "my-section" on child container:
	 *   .my-section { bg: red }  → #block-id.my-section { bg: red }  (chained, self)
	 *   .heading { color: blue } → #block-id .heading { color: blue } (descendant)
	 */
	useEffect(() => {
		const selfClasses = !isBlockRootParent
			? (containerGlobalCustomCSSClass || '').split(' ').filter(Boolean)
			: [];
		const customCss = getCustomCss(containerGlobalCustomCSS, `#${containerBlockId}`, ' ', selfClasses);
		// Only update if value actually changed
		if (containerGlobalCustomCSSValue !== customCss) {
			setAttributes({containerGlobalCustomCSSValue: customCss});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [containerGlobalCustomCSS, containerBlockId, containerGlobalCustomCSSClass]);

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

	if( formContainerSwitcher ){
		innerBlocksParams.allowedBlocks = ALLOWED_FORM_BLOCKS;
	}

	/**
	 * Set p_block_id attribute only if not set
	 */
	useEffect(() => {
		if (clientId && typeof clientId === 'string' && !attributes.p_block_id) {
			setAttributes({
				p_block_id: clientId,
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clientId, attributes.p_block_id]);

	return (
		<>
			<Tag { ...modifBlockProps } key={ containerBlockId }>
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
