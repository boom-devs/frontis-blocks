/**
 * Loop builder layout preset: landscape-layout
 *
 * Registered in ../variations.js
 */
import { __ } from '@wordpress/i18n';
import { landscapeLayoutPreviewIcon } from '../icons';

export default
	{
		name: 'landscape-layout',
		title: __( 'Landscape Layout' ),
		description: __(
			'Image on the left with title, excerpt, category, and author row on the right'
		),
		icon: (
			<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--landscape-layout">
				{ landscapeLayoutPreviewIcon }
			</span>
		),
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-item',
				{
					gridColumnsPerSection: {
						Desktop: '1',
						Tablet: '1',
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
				},
				[
					[
						'frontis-blocks/container',
						{
							variationSelected: true,
							loopAutoApplied: true,
							containerChildrenWidth: 'full',
							containerDirection: {
								Desktop: 'row',
								Tablet: 'row',
								Mobile: 'row',
							},
							containerWrap: {
								Desktop: 'wrap',
								Tablet: 'wrap',
								Mobile: 'wrap',
							},
							containerGlobalPadding: {
								Desktop: '0',
								Tablet: '0',
								Mobile: '0',
							},
							deviceType: 'Desktop',
							containerAlignItems: {
								Desktop: 'stretch',
								Tablet: 'stretch',
								Mobile: 'stretch',
							},
						},
						[
							[
								'frontis-blocks/container',
								{
									variationSelected: true,
									loopAutoApplied: true,
									containerChildrenWidth: 'full',
									containerDirection: {
										Desktop: 'column',
										Tablet: 'column',
										Mobile: 'column',
									},
									containerGlobalPadding: {
										Desktop: '0',
										Tablet: '0',
										Mobile: '0',
									},
									customWidth: {
										Desktop: 40,
										Tablet: 40,
										Mobile: 100,
									},
									widthSetByUser: true,
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
											globalMarginDesktop: {
												top: '0',
												right: '0',
												bottom: '0',
												left: '0',
											},
											globalMarginTablet: {
												top: '0',
												right: '0',
												bottom: '0',
												left: '0',
											},
											globalMarginMobile: {
												top: '0',
												right: '0',
												bottom: '16',
												left: '0',
											},
										},
									],
								],
							],
							[
								'frontis-blocks/container',
								{
									variationSelected: true,
									loopAutoApplied: true,
									containerChildrenWidth: 'full',
									containerDirection: {
										Desktop: 'column',
										Tablet: 'column',
										Mobile: 'column',
									},
									containerGlobalPadding: {
										Desktop: '0',
										Tablet: '0',
										Mobile: '0',
									},
									customWidth: {
										Desktop: 60,
										Tablet: 60,
										Mobile: 100,
									},
									widthSetByUser: true,
								},
								[
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
											headingFontSize: {
												Desktop: '20',
												Tablet: '20',
												Mobile: '18',
											},
											headingColorSwitcher: 'normal',
											headingColor: '#1e3a8a',
											headingDesktopMargin: {
												top: '0',
												right: '0',
												bottom: '8',
												left: '0',
											},
											headingTabMargin: {
												top: '0',
												right: '0',
												bottom: '8',
												left: '0',
											},
											headingMobileMargin: {
												top: '0',
												right: '0',
												bottom: '8',
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
												bottom: '12',
												left: '0',
											},
											headingTabMargin: {
												top: '0',
												right: '0',
												bottom: '12',
												left: '0',
											},
											headingMobileMargin: {
												top: '0',
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
											dynamicTextField: 'post_terms',
											dynamicTextTermsTaxonomy: 'category',
											dynamicTextEnableLink: true,
											loopAutoApplied: true,
											headingTag: 'p',
											headingFontSize: {
												Desktop: '12',
												Tablet: '12',
												Mobile: '12',
											},
											headingColorSwitcher: 'normal',
											headingColor: '#2563eb',
											headingDesktopMargin: {
												top: '0',
												right: '0',
												bottom: '16',
												left: '0',
											},
											headingTabMargin: {
												top: '0',
												right: '0',
												bottom: '16',
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
										'frontis-blocks/container',
										{
											variationSelected: true,
											loopAutoApplied: true,
											containerChildrenWidth: 'auto',
											containerDirection: {
												Desktop: 'row',
												Tablet: 'row',
												Mobile: 'row',
											},
											containerWrap: {
												Desktop: 'wrap',
												Tablet: 'wrap',
												Mobile: 'wrap',
											},
											containerGlobalPadding: {
												Desktop: '0',
												Tablet: '0',
												Mobile: '0',
											},
											containerDesktopMargin: {
												top: '0',
												bottom: '0',
												left: '0',
												right: '0',
											},
											containerTabletMargin: {
												top: '0',
												bottom: '0',
												left: '0',
												right: '0',
											},
											containerMobileMargin: {
												top: '0',
												bottom: '0',
												left: '0',
												right: '0',
											},
											containerMarginUnits: {
												Desktop: 'px',
												Tablet: 'px',
												Mobile: 'px',
											},
											deviceType: 'Desktop',
											containerAlignItems: {
												Desktop: 'center',
												Tablet: 'center',
												Mobile: 'center',
											},
											containerJustify: {
												Desktop: 'flex-start',
												Tablet: 'flex-start',
												Mobile: 'flex-start',
											},
											rowGap: {
												Desktop: '0',
												Tablet: '0',
												Mobile: '0',
											},
											rowGapUnits: {
												Desktop: 'px',
												Tablet: 'px',
												Mobile: 'px',
											},
											columnGap: {
												Desktop: '8',
												Tablet: '8',
												Mobile: '8',
											},
											columnGapUnits: {
												Desktop: 'px',
												Tablet: 'px',
												Mobile: 'px',
											},
										},
										[
											[
												'frontis-blocks/advanced-image',
												{
													dynamicImageEnabled: true,
													dynamicImageSource: 'current_post',
													dynamicImageField: 'avatar_profile',
													loopAutoApplied: true,
													autoFitSwitch: true,
													mediaHeight: {
														Desktop: '32',
														Tablet: '32',
														Mobile: '32',
													},
													mediaHeightUnits: {
														Desktop: 'px',
														Tablet: 'px',
														Mobile: 'px',
													},
													imageBorderRadiusUnits: {
														Desktop: '%',
														Tablet: '%',
														Mobile: '%',
													},
													imageBorderRadiusDesktop: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													imageBorderRadiusTablet: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													imageBorderRadiusMobile: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													imageBorderRadiusLink: true,
													globalBorderRadiusUnits: {
														Desktop: '%',
														Tablet: '%',
														Mobile: '%',
													},
													globalBorderRadiusDesktop: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													globalBorderRadiusTablet: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													globalBorderRadiusMobile: {
														top: '50',
														right: '50',
														bottom: '50',
														left: '50',
													},
													globalBorderRadiusLink: true,
													globalMarginDesktop: {
														top: '0',
														right: '0',
														bottom: '0',
														left: '0',
													},
													globalMarginTablet: {
														top: '0',
														right: '0',
														bottom: '0',
														left: '0',
													},
													globalMarginMobile: {
														top: '0',
														right: '0',
														bottom: '0',
														left: '0',
													},
												},
											],
											[
												'frontis-blocks/advanced-heading',
												{
													dynamicTextEnabled: true,
													dynamicTextSource: 'current_post',
													dynamicTextField: 'author_name',
													loopAutoApplied: true,
													headingTag: 'p',
													headingFontSize: {
														Desktop: '13',
														Tablet: '13',
														Mobile: '13',
													},
													headingColorSwitcher: 'normal',
													headingColor: '#2563eb',
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
								],
							],
						],
					],
				],
			],
			[ 'frontis-blocks/query-pagination' ],
		],
		scope: [ 'block' ],
	};
