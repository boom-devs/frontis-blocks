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
import Range from '@Components/range';
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

		DeviceType,
		rangeValue,
		rangeUnit,

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

	const onChangeHandler = (value) => {
		setAttributes(rangeValue[DeviceType] = value);
	}

	const rangeUnitHandler = (unit) => {
		setAttributes(rangeUnit[DeviceType] = unit);
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __('Settings', 'text-domain') }>
					<Range  min='-300' max='300'  label='Width' rangeValue={rangeValue}   onChangeHandler={onChangeHandler} rangeUnitHandler={rangeUnitHandler} DeviceType={DeviceType} units={rangeUnit} setAttributes={setAttributes} />

				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()}>
				{__('This is post grid', 'text')}
			</p>

		</>
	);
}