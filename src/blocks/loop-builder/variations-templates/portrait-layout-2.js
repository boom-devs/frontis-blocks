/**
 * Loop builder layout preset: portrait-layout-2
 *
 * Registered in ../variations.js
 */

import { __ } from '@wordpress/i18n';
import { portraitLayout2PreviewIcon } from '../icons';

export default
	{
		name: 'portrait-layout-2',
		title: __( 'Portrait Layout 2' ),
		description: __(
			'Post card with image, category, title, excerpt, and author row'
		),
		icon: (
			<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--portrait-layout-2">
				{ portraitLayout2PreviewIcon }
			</span>
		),
		attributes: {},
		innerBlocks: [
			[
				'frontis-blocks/loop-builder-item',
				{},
				[
					[
						'frontis-blocks/container',
						{
							variationSelected: true,
							loopAutoApplied: true,
							containerGlobalPadding: {
								Desktop: '0',
								Tablet: '0',
								Mobile: '0',
							},
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
										bottom: '16',
										left: '0',
									},
									globalMarginTablet: {
										top: '0',
										right: '0',
										bottom: '16',
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
							[
								'frontis-blocks/advanced-heading',
								{
									dynamicTextEnabled: true,
									dynamicTextSource: 'current_post',
									dynamicTextField: 'post_terms',
									dynamicTextTermsTaxonomy: 'category',
									loopAutoApplied: true,
									headingTag: 'p',
									headingFontSize: {
										Desktop: '12',
										Tablet: '12',
										Mobile: '12',
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
									headingDesktopPadding: {
										top: '8',
										right: '0',
										bottom: '8',
										left: '0',
									},
									headingTabPadding: {
										top: '8',
										right: '0',
										bottom: '8',
										left: '0',
									},
									headingMobilePadding: {
										top: '8',
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
										Desktop: '18',
										Tablet: '18',
										Mobile: '18',
									},
								},
							],
							[
								'frontis-blocks/container',
								{
									variationSelected: true,
									loopAutoApplied: true,
									containerGlobalPadding: {
										Desktop: '0',
										Tablet: '0',
										Mobile: '0',
									},
									containerDirection: {
										Desktop: 'row',
										Tablet: 'row',
										Mobile: 'row',
									},
									containerWrap: {
										Desktop: 'nowrap',
										Tablet: 'nowrap',
										Mobile: 'nowrap',
									},
									deviceType: 'Desktop',
									containerAlignItems: {
										Desktop: 'center',
										Tablet: 'center',
										Mobile: 'center',
									},
									columnGap: {
										Desktop: '16',
										Tablet: '16',
										Mobile: '16',
									},
									columnGapUnits: {
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
											containerGlobalPadding: {
												Desktop: '0',
												Tablet: '0',
												Mobile: '0',
											},
											customWidth: {
												Desktop: '48',
												Tablet: '48',
												Mobile: '48',
											},
											customWidthUnits: {
												Desktop: 'px',
												Tablet: 'px',
												Mobile: 'px',
											},
											widthSetByUser: true,
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
														Desktop: '48',
														Tablet: '48',
														Mobile: '48',
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
										],
									],
									[
										'frontis-blocks/container',
										{
											variationSelected: true,
											loopAutoApplied: true,
											containerGlobalPadding: {
												Desktop: '0',
												Tablet: '0',
												Mobile: '0',
											},
											customWidth: {
												Desktop: '80',
												Tablet: '80',
												Mobile: '80',
											},
											customWidthUnits: {
												Desktop: '%',
												Tablet: '%',
												Mobile: '%',
											},
											widthSetByUser: true,
										},
										[
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
