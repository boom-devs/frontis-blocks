/**
 * Loop builder layout preset: boxed-layout
 *
 * Registered in ../variations.js
 */
import { __ } from '@wordpress/i18n';
import { boxedLayoutPreviewIcon } from '../icons';

export default
	{
		name: 'boxed-layout',
		title: __( 'Boxed Layout' ),
		description: __(
			'Post card in a bordered frame with category, title, excerpt, and author'
		),
		icon: (
			<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--boxed-layout">
				{ boxedLayoutPreviewIcon }
			</span>
		),
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-item',
				{
					gridColumnsPerSection: {
						Desktop: '3',
						Tablet: '2',
						Mobile: '1',
					},
					gridRowGap: {
						Desktop: '16',
						Tablet: '16',
						Mobile: '16',
					},
					gridColumnGap: {
						Desktop: '16',
						Tablet: '16',
						Mobile: '16',
					},
					gridGapUnits: {
						Desktop: 'px',
						Tablet: 'px',
						Mobile: 'px',
					},
					loopBuilderItemBgColorSwitcher: 'normal',
					loopBuilderItemNormalBackgroundType: 'classic',
					loopBuilderItemNormalClassicColor: '#ffffff',
					loopBuilderItemBorder: 'solid',
					loopBuilderItemBorderColorSwitcher: 'normal',
					loopBuilderItemBorderColor: '#cbd5e1',
					loopBuilderItemBorderUnits: {
						Desktop: 'px',
						Tablet: 'px',
						Mobile: 'px',
					},
					loopBuilderItemBorderDesktop: {
						top: '1',
						right: '1',
						bottom: '1',
						left: '1',
					},
					loopBuilderItemBorderTablet: {
						top: '1',
						right: '1',
						bottom: '1',
						left: '1',
					},
					loopBuilderItemBorderMobile: {
						top: '1',
						right: '1',
						bottom: '1',
						left: '1',
					},
					loopBuilderItemBorderLink: true,
					loopBuilderItemBorderRadiusUnits: {
						Desktop: 'px',
						Tablet: 'px',
						Mobile: 'px',
					},
					loopBuilderItemBorderRadiusDesktop: {
						top: '4',
						right: '4',
						bottom: '4',
						left: '4',
					},
					loopBuilderItemBorderRadiusTablet: {
						top: '4',
						right: '4',
						bottom: '4',
						left: '4',
					},
					loopBuilderItemBorderRadiusMobile: {
						top: '4',
						right: '4',
						bottom: '4',
						left: '4',
					},
					loopBuilderItemBorderRadiusLink: true,
					loopBuilderItemPaddingUnits: {
						Desktop: 'px',
						Tablet: 'px',
						Mobile: 'px',
					},
					loopBuilderItemPaddingDesktop: {
						top: '10',
						right: '10',
						bottom: '10',
						left: '10',
					},
					loopBuilderItemPaddingTablet: {
						top: '10',
						right: '10',
						bottom: '10',
						left: '10',
					},
					loopBuilderItemPaddingMobile: {
						top: '10',
						right: '10',
						bottom: '10',
						left: '10',
					},
					loopBuilderItemPaddingLink: true,
				},
				[
					[
						'frontis-blocks/advanced-image',
						{
							dynamicImageEnabled: true,
							dynamicImageSource: 'current_post',
							dynamicImageField: 'featured_image',
							dynamicImageEnableLink: true,
							dynamicImageLinkSource: 'post_permalink',
							loopAutoApplied: true,
							autoFitSwitch: true,
							mediaHeight: {
								Desktop: '200',
								Tablet: '200',
								Mobile: '200',
							},
							mediaHeightUnits: {
								Desktop: 'px',
								Tablet: 'px',
								Mobile: 'px',
							},
							globalBorderRadiusUnits: {
								Desktop: 'px',
								Tablet: 'px',
								Mobile: 'px',
							},
							globalBorderRadiusDesktop: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							globalBorderRadiusTablet: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							globalBorderRadiusMobile: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							globalBorderRadiusLink: true,
							imageBorderRadiusUnits: {
								Desktop: 'px',
								Tablet: 'px',
								Mobile: 'px',
							},
							imageBorderRadiusDesktop: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							imageBorderRadiusTablet: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							imageBorderRadiusMobile: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							imageBorderRadiusLink: true,
							globalMarginDesktop: {
								top: '0',
								right: '0',
								bottom: '10',
								left: '0',
							},
							globalMarginTablet: {
								top: '0',
								right: '0',
								bottom: '10',
								left: '0',
							},
							globalMarginMobile: {
								top: '0',
								right: '0',
								bottom: '10',
								left: '0',
							},
						},
					],
					[
						'frontis-blocks/advanced-heading',
						{
							dynamicTextEnabled: true,
							dynamicTextSource: 'current_post',
							dynamicTextField: 'post_title',
							loopAutoApplied: true,
							headingTag: 'h3',
							dynamicTextEnableLink: true,
							dynamicTextLinkSource: 'post_permalink',
							headingAlignment: {
								Desktop: 'center',
								Tablet: 'center',
								Mobile: 'center',
							},
							headingFontSize: {
								Desktop: '20',
								Tablet: '20',
								Mobile: '18',
							},
							headingColorSwitcher: 'normal',
							headingColor: '#1e3a8a',
							headingDesktopMargin: {
								top: '16',
								right: '0',
								bottom: '16',
								left: '0',
							},
							headingTabMargin: {
								top: '16',
								right: '0',
								bottom: '16',
								left: '0',
							},
							headingMobileMargin: {
								top: '16',
								right: '0',
								bottom: '12',
								left: '0',
							},
						},
					],
					[
						'frontis-blocks/advanced-heading',
						{
							dynamicTextEnabled: true,
							dynamicTextSource: 'current_post',
							dynamicTextField: 'post_excerpt',
							loopAutoApplied: true,
							headingTag: 'p',
							headingAlignment: {
								Desktop: 'center',
								Tablet: 'center',
								Mobile: 'center',
							},
							headingFontSize: {
								Desktop: '14',
								Tablet: '14',
								Mobile: '14',
							},
							headingColorSwitcher: 'normal',
							headingColor: '#64748b',
							headingDesktopMargin: {
								top: '0',
								right: '0',
								bottom: '20',
								left: '0',
							},
							headingTabMargin: {
								top: '0',
								right: '0',
								bottom: '20',
								left: '0',
							},
							headingMobileMargin: {
								top: '0',
								right: '0',
								bottom: '16',
								left: '0',
							},
						},
					],
					[
						'frontis-blocks/advanced-heading',
						{
							dynamicTextEnabled: true,
							dynamicTextSource: 'current_post',
							dynamicTextField: 'post_date',
							loopAutoApplied: true,
							headingTag: 'p',
							headingAlignment: {
								Desktop: 'center',
								Tablet: 'center',
								Mobile: 'center',
							},
							headingFontSize: {
								Desktop: '13',
								Tablet: '13',
								Mobile: '13',
							},
							headingColorSwitcher: 'normal',
							headingColor: '#94a3b8',
							headingDesktopMargin: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							headingTabMargin: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
							headingMobileMargin: {
								top: '0',
								right: '0',
								bottom: '0',
								left: '0',
							},
						},
					],
				],
			],
			[ 'frontis-blocks/query-pagination' ],
		],
		scope: [ 'block' ],
	};
