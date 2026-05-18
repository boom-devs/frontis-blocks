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
				'frontis-blocks/loop-builder-wrapper',
				{},
				[
					[
						'frontis-blocks/container',
						{
							variationSelected: true,
							loopAutoApplied: true,
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
									directionDesktop: 'row',
									wrapMobile: 'wrap',
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
