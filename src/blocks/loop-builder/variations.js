/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { postCardPreviewIcon } from './icons';
const variations = [
	{
		name: 'post-card',
		title: '',
		description: __( 'Post card with image, date, title, and excerpt' ),
		icon: (
			<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--post-card">
				{ postCardPreviewIcon }
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
						},
						[ 
							[ 
								'frontis-blocks/advanced-image',
								{
									dynamicImageEnabled: true,
									dynamicImageSource: 'current_post',
									dynamicImageEnableLink: true,
									dynamicImageLinkSource: 'post_permalink',
									loopAutoApplied: true,
									autoFitSwitch: true,
									mediaHeight: { 
										Desktop: "200", 
										Tablet: "200", 
										Mobile: "200" 
									},
									mediaHeightUnits: { 
										Desktop: "px", 
										Tablet: "px", 
										Mobile: "px" 
									},
									globalMarginDesktop: {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},
									globalMarginTablet : {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},
									globalMarginMobile : {
										top: '0',
										right: '0',
										bottom: '16',
										left: '0',
									},

								}
							],
							[ 
								'frontis-blocks/advanced-heading',
								{
									dynamicTextEnabled: true,
									dynamicTextSource: 'current_post',
									dynamicTextField: 'post_date',
									loopAutoApplied: true,
									headingTag: 'p',
									headingFontSize: { 
										Desktop: "14", 
										Tablet: "14", 
										Mobile: "14" 
									}

								}
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
									headingDesktopPadding : {
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
									}
								}
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
										Desktop: "14", 
										Tablet: "14", 
										Mobile: "14" 
									}
								}
							],
						 ],
					],
				],
			],
			[ 'frontis-blocks/query-pagination' ]
		],
		scope: [ 'block' ],
	},
];

export default variations;
