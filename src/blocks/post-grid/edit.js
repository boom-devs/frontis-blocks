// /**
//  * Retrieves the translation of text.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
//  */
// import { __ } from '@wordpress/i18n';

// /**
//  * React hook that is used to mark the block wrapper element.
//  * It provides all the necessary props like the class name.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
//  */
// import {InspectorControls, RichText, useBlockProps} from '@wordpress/block-editor';
// import { PanelBody } from '@wordpress/components';
// import Range from '@Components/range';
// import { useState } from 'react';
// /**
//  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
//  * Those files can contain any CSS code that gets applied to the editor.
//  *
//  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
//  */
// import './editor.scss';

// /**
//  * The edit function describes the structure of your block in the context of the
//  * editor. This represents what the editor will render when the block is used.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
//  *
//  * @return {Element} Element to render.
//  */
// export default function Edit (props) {
// 	const { attributes, setAttributes } = props;
// 	const {
// 		DeviceType,
// 		rangeValue,
// 		rangeUnit,

// 	} = attributes;

// 	const [newRangeValue, SetNewRangeValue] = useState(rangeValue[DeviceType]);
// 	console.log(rangeValue);
// 	console.log(rangeUnit);
// 	console.log(newRangeValue);

// 	const onChangeHandler = (value) => {
// 		setAttributes(rangeValue[DeviceType] = value);
// 		SetNewRangeValue(rangeValue[DeviceType] = value);
// 	}

// 	const rangeUnitHandler = (unit) => {
// 		setAttributes(rangeUnit[DeviceType] = unit);
// 	}

// 	return (
// 		<>
// 			<InspectorControls>
// 				<PanelBody title={ __('Settings', 'text-domain') }>
// 					<Range  min='-300' max='300'  label='Width' rangeValue={rangeValue}   onChangeHandler={onChangeHandler} rangeUnitHandler={rangeUnitHandler} DeviceType={DeviceType} units={rangeUnit} setAttributes={setAttributes}  rangeStep={1} resetFallbackValue={40}/>

// 				</PanelBody>
// 			</InspectorControls>

// 			<p {...useBlockProps()}>
// 				Hello world
// 			</p>

// 		</>
// 	);
// }


import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_Range from '@Components/range';
import { __ } from '@wordpress/i18n';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { DeviceType, rangeValue, rangeUnit } = attributes;


	const onChangeHandler = (newRangeValue) => {
		setAttributes({ rangeValue: newRangeValue });
	};

	const rangeUnitHandler = (newUnits) => {
		setAttributes({ rangeUnit: newUnits });
	};

	return (
		<>

			<style>
				{`
					.main-container {
						font-size: ${rangeValue.Desktop}${rangeUnit.Desktop};
					}

					@media (max-width: 1024px) { /* Tablet */
						.main-container {
							font-size: ${rangeValue.Tablet}${rangeUnit.Tablet};
						}
					}

					@media (max-width: 767px) { /* Mobile */
						.main-container {
							font-size: ${rangeValue.Mobile}${rangeUnit.Mobile};
						}
					}
				`}
			</style>
			<InspectorControls>
				<PanelBody title={ __('Settings', 'text-domain') }>
					<FB_Range
						min={-300}
						max={300}
						label='Width'
						rangeValue={rangeValue}
						onChangeHandler={onChangeHandler}
						rangeUnitHandler={rangeUnitHandler}
						DeviceType={DeviceType}
						units={rangeUnit}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={40} // Default value
					/>
				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()} className='main-container'>
				{ __('Hello world', 'text-domain') }
			</p>
		</>
	);
}
