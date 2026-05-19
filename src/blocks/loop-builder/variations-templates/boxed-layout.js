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
				{},
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
							containerBorder: 'solid',
							containerDesktopBorderWidth: {
								top: '1',
								right: '1',
								bottom: '1',
								left: '1',
							},
							containerBorderColor: '#dcdcde',
							containerDesktopBorderRadiusWidth: {
								top: '12',
								right: '12',
								bottom: '12',
								left: '12',
							},
							containerDesktopPadding: {
								top: '16',
								right: '16',
								bottom: '16',
								left: '16',
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
										Desktop: '14',
										Tablet: '14',
										Mobile: '14',
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
									deviceType: 'Desktop',
									containerAlignItems: {
										Desktop: 'center',
										Tablet: 'center',
										Mobile: 'center',
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
												Desktop: 18,
												Tablet: 18,
												Mobile: 22,
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
												Desktop: 82,
												Tablet: 82,
												Mobile: 78,
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
