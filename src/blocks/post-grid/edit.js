/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BoxShadowControl from "@Components/box-shadow";
import TypographyControl from '@Components/typography';
import ResponsiveSlider from '@Components/responsive-slider';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit (props) {
	const { attributes, setAttributes } = props;
	const {
		headLoadGoogleFonts,
		headFontFamily,
		headFontWeight,
		headFontStyle,
		headFontSizeType,
		headFontSizeTypeMobile,
		headFontSizeTypeTablet,
		headFontSize,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeightType,
		headLineHeight,
		headLineHeightMobile,
		headLineHeightTablet,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		headTransform,
		headDecoration,

		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		headSpaceType
	} = attributes;

	const boxShadowHandler = (boxShadow) => {
		console.log(boxShadow)

		// How to render boxshadow in div style

		// boxShadow: boxShadow.map(shadowArrayToString).join(" "),
		// const shadowArrayToString = (element) => {
		// 	if (typeof element === "number") {
		// 		return element + "px";
		// 	}
		// 	return element;
		// }

		// setAttributes({boxShadow: boxShadow});
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Settings', 'text-domain') }>
				<TypographyControl
					label={ __( 'Typography', 'text-domain' ) }
					attributes={ attributes }
					setAttributes={ setAttributes }
					loadGoogleFonts={ {
						value: headLoadGoogleFonts,
						label: 'headLoadGoogleFonts',
					} }
					fontFamily={ {
						value: headFontFamily,
						label: 'headFontFamily',
					} }
					fontWeight={ {
						value: headFontWeight,
						label: 'headFontWeight',
					} }
					fontStyle={ {
						value: headFontStyle,
						label: 'headFontStyle',
					} }
					transform={ {
						value: headTransform,
						label: 'headTransform',
					} }
					decoration={ {
						value: headDecoration,
						label: 'headDecoration',
					} }
					fontSizeType={ {
						value: headFontSizeType,
						label: 'headFontSizeType',
					} }
					fontSizeTypeMobile={ {
						value: headFontSizeTypeMobile,
						label: 'headFontSizeTypeMobile',
					} }
					fontSizeTypeTablet={ {
						value: headFontSizeTypeTablet,
						label: 'headFontSizeTypeTablet',
					} }
					fontSize={ {
						value: headFontSize,
						label: 'headFontSize',
					} }
					fontSizeMobile={ {
						value: headFontSizeMobile,
						label: 'headFontSizeMobile',
					} }
					fontSizeTablet={ {
						value: headFontSizeTablet,
						label: 'headFontSizeTablet',
					} }
					lineHeightType={ {
						value: headLineHeightType,
						label: 'headLineHeightType',
					} }
					lineHeight={ {
						value: headLineHeight,
						label: 'headLineHeight',
					} }
					lineHeightMobile={ {
						value: headLineHeightMobile,
						label: 'headLineHeightMobile',
					} }
					lineHeightTablet={ {
						value: headLineHeightTablet,
						label: 'headLineHeightTablet',
					} }
					letterSpacing={ {
						value: headLetterSpacing,
						label: 'headLetterSpacing',
					} }
					letterSpacingTablet={ {
						value: headLetterSpacingTablet,
						label: 'headLetterSpacingTablet',
					} }
					letterSpacingMobile={ {
						value: headLetterSpacingMobile,
						label: 'headLetterSpacingMobile',
					} }
					letterSpacingType={ {
						value: headLetterSpacingType,
						label: 'headLetterSpacingType',
					} }
				/>
					<FB_BoxShadowControl boxShadowHandler={ boxShadowHandler } />

					<ResponsiveSlider
						label={ __( 'Bottom Spacing', 'text-domain' ) }
						data={ {
							desktop: {
								value: headSpace,
								label: 'headSpace',
							},
							tablet: {
								value: headSpaceTablet,
								label: 'headSpaceTablet',
							},
							mobile: {
								value: headSpaceMobile,
								label: 'headSpaceMobile',
							},
						} }
						min={ 0 }
						max={ 200 }
						unit={ {
							value: headSpaceType,
							label: 'headSpaceType',
						} }
						units={ [
							{
								name: __( 'Pixel', 'frontis-blocks' ),
								unitValue: 'px',
							},
							{
								name: __( 'em', 'frontis-blocks' ),
								unitValue: 'em',
							}
						] }
						setAttributes={ setAttributes }
					/>

				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()}>
				{__('This is post grid', 'text')}
			</p>

		</>
	);
}
