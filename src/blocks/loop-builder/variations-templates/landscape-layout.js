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
			'Image on the left with author, title, excerpt, and read more on the right'
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
				{},
				[
					[
						'frontis-blocks/container',
						{
							variationSelected: true,
							loopAutoApplied: true,
							directionDesktop: 'row',
							wrapMobile: 'wrap',
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
									customWidth: {
										Desktop: 60,
										Tablet: 60,
										Mobile: 100,
									},
									widthSetByUser: true,
								},
								[
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
																Desktop: '40',
																Tablet: '40',
																Mobile: '40',
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
												bottom: '4',
												left: '0',
											},
											headingTabPadding: {
												top: '8',
												right: '0',
												bottom: '4',
												left: '0',
											},
											headingMobilePadding: {
												top: '8',
												right: '0',
												bottom: '4',
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
										'frontis-blocks/advanced-button',
										{
											buttonText: 'Read More',
											buttonTextSwitcher: true,
											dynamicTextEnabled: true,
											dynamicTextSource: 'current_post',
											dynamicTextField: 'post_title',
											dynamicTextEnableLink: true,
											dynamicTextLinkSource: 'post_permalink',
											dynamicTextPreserveButtonLabel: true,
										},
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
