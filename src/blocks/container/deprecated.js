import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import shapes from './shapes';
import attributes from './attributes.js';

const v1_0_7 = {
	attributes,

	supports: {
		html: false,
		className: false,
	},

	save({ attributes }) {
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
		} = attributes;

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

		return (
			<>
				<CustomTag
					{ ...blockProps }
					className={ classnames(
						blockProps.className,
						p_block_id ? `frontis-blocks-${ p_block_id }` : '',
						desktopResponsiveClass,
						tabletResponsiveClass,
						mobileResponsiveClass,
						isRootContainerClass
					) }
				>
					{ 'video' === backgroundType && (
						<div className="frontis-blocks-container__video-wrap">
							{ backgroundVideo && (
								<video autoPlay loop muted playsInline>
									<source src={ backgroundVideo.url } type="video/mp4" />
								</video>
							) }
						</div>
					) }
					{ topDividerHtml }
					{ bottomDividerHtml }

					{ isBlockRootParent ? (
						<div className={`frontis-blocks-container-inner-blocks-wrap ${containerGlobalCustomCSSClass}`} id={containerGlobalCustomCSSID}>
							<InnerBlocks.Content />
						</div>
					) : (
						<InnerBlocks.Content />
					)}
					{
						htmlTag === 'a' && 'undefined' !== typeof customTagLinkAttributes.href && (
							<a className='frontis-blocks-container-link-overlay' { ...customTagLinkAttributes } > </a>
						)
					}
				</CustomTag>
			</>
		);
	},
};

const deprecated = [v1_0_7];

export default deprecated;
