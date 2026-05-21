/**
 * Loop builder layout preset: portrait-layout-1
 *
 * Edit innerBlocks here; registered in ../variations.js
 */

import { __ } from '@wordpress/i18n';
import { portraitLayout1PreviewIcon } from '../icons';

export default
	{
		name: 'portrait-layout-1',
		title: __( 'Portrait Layout 1' ),
		description: __(
			'Post card with image, date, title, excerpt, and read more'
		),
		icon: (
			<span className="fb-loop-builder-variation-picker__preview fb-loop-builder-variation-picker__preview--portrait-layout-1">
				{ portraitLayout1PreviewIcon }
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
									dynamicTextField: 'post_date',
									dynamicTextDateFormat: 'jS F Y',
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
									buttonFontSize: {
										Desktop: '14',
										Tablet: '14',
										Mobile: '14',
									},
									buttonDesktopPadding: {
										top: '8',
										right: '16',
										bottom: '8',
										left: '16',
									},
									buttonTabPadding: {
										top: '8',
										right: '16',
										bottom: '8',
										left: '16',
									},
									buttonMobilePadding: {
										top: '8',
										right: '16',
										bottom: '8',
										left: '16',
									},
									buttonGlobalMarginDesktop: {
										top: '16',
										right: '0',
										bottom: '0',
										left: '0',
									},
									buttonGlobalMarginTablet: {
										top: '16',
										right: '0',
										bottom: '0',
										left: '0',
									},
									buttonGlobalMarginMobile: {
										top: '16',
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
			[ 'frontis-blocks/query-pagination' ],
		],
		scope: [ 'block' ],
	};
