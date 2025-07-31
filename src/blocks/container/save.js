/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import shapes from './shapes';

export default function save( props ) {
	const {
		p_block_id,
		htmlTag,
		htmlTagLink,
		isBlockRootParent,
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
		containerType,
		containerDesktopSwitcher,
		containerTabletSwitcher,
		containerMobileSwitcher,
		containerGlobalCustomCSSClass,
		containerGlobalCustomCSSID
	} = props.attributes;

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'frontis-blocks-container__shape',
				'frontis-blocks-container__shape-top',
				{ 'frontis-blocks-container__shape-flip': topFlip === true },
				{
					'frontis-blocks-container__shape-above-content': topContentAboveShape === true,
				},
				{ 'frontis-blocks-container__invert': topInvert === true }
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'frontis-blocks-container__shape',
				'frontis-blocks-container__shape-bottom',
				{ 'frontis-blocks-container__shape-flip': bottomFlip === true },
				{
					'frontis-blocks-container__shape-above-content': bottomContentAboveShape === true,
				},
				{ 'frontis-blocks-container__invert': bottomInvert === true }
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;
	const customTagLinkAttributes = {};
	if ( htmlTag === 'a' ) {
		customTagLinkAttributes.rel = 'noopener';
		if ( htmlTagLink?.url ) {
			customTagLinkAttributes.href = htmlTagLink?.url;
		}
		if ( htmlTagLink?.opensInNewTab ) {
			customTagLinkAttributes.target = '_blank';
		}
		if ( htmlTagLink?.noFollow ) {
			customTagLinkAttributes.rel = 'nofollow noopener';
		}
	}

	const blockProps = {
		...useBlockProps.save(),
		id: (p_block_id || `container-${p_block_id}`),
	};

	const isRootContainerClass = isBlockRootParent ? `${ containerType === 'full-width' ? 'alignfull' : 'alignwide' } frontis-blocks-is-root-container` : `child`;

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

	return (
		<>
			<CustomTag
				{ ...blockProps }
				className={ classnames(
					blockProps.className,
					p_block_id ? `frontis-blocks-${ p_block_id }` : '', // Add class only if p_block_id exists
					desktopResponsiveClass,
					tabletResponsiveClass,
					mobileResponsiveClass,
					isRootContainerClass
				) }
			>
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
				{/* Both the dividers are positioned absolutely. Their place in the DOM is just to determine their default Z-index. */}
				{ topDividerHtml }
				{ bottomDividerHtml }
				{/* Render the content above the Video Background if any and above the Shape Dividers. */}
				{ isBlockRootParent ? (
					<div className={`frontis-blocks-container-inner-blocks-wrap ${containerGlobalCustomCSSClass}`} id={containerGlobalCustomCSSID}>
						<InnerBlocks.Content />
					</div>
				) : (
					<div className={`frontis-blocks-container-inner-child-blocks-wrap ${containerGlobalCustomCSSClass}`} id={containerGlobalCustomCSSID}>
						<InnerBlocks.Content />
					</div>
				)}
				{
					htmlTag === 'a' && 'undefined' !== typeof customTagLinkAttributes.href && (
						<a className='frontis-blocks-container-link-overlay' { ...customTagLinkAttributes } > </a>
					)
				}
			</CustomTag>
		</>
	);
}
