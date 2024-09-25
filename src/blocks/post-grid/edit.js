/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {InspectorControls, RichText} from '@wordpress/block-editor';
import {PanelBody} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
// eslint-disable-next-line import/no-unresolved
import FB_Spacing from '@Components/spacing';
// eslint-disable-next-line import/no-unresolved
import FB_BoxShadowControl from '@Components/box-shadow';

export default function Edit( props ) {
	const {attributes, setAttributes} = props;
	const {
		DeviceType,
		FeatureMarginLink,
		spacingUnits,
		TestimonialDesktopPadding,
		TestimonialTabPadding,
		TestimonialMobilePadding,
		boxShadow
	} = attributes;


	const handleSpacingUnitHandlerFn = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureMarginLink ) {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( DeviceType ) {
				case 'Desktop':
					setAttributes( {TestimonialDesktopPadding: {...TestimonialDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialTabPadding: {...TestimonialTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialMobilePadding: {...TestimonialMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const spacingCombineBtnHandlerFn = () => {
		setAttributes( {FeatureMarginLink: !FeatureMarginLink} );
	}


	// eslint-disable-next-line no-shadow
	const boxShadowHandler = ( value ) => {
		// eslint-disable-next-line import/no-unresolved
		setAttributes( { boxShadow: value } )
		/* eslint-disable no-console */
		console.log( boxShadow );
		/* eslint-enable no-console */
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__( 'Settings', 'frontis-blocks' )}>
					{/*<TypographyControl*/}
					{/*	attributes={ attributes }*/}
					{/*	setAttributes={ setAttributes }*/}
					{/*	loadGoogleFonts={ {*/}
					{/*		value: headLoadGoogleFonts,*/}
					{/*		label: 'headLoadGoogleFonts',*/}
					{/*	} }*/}
					{/*></TypographyControl>*/}
					<FB_BoxShadowControl boxShadowHandler={boxShadowHandler}/>
					{/*<Range label={'Font size'} displayUnit={'px'} />*/}
					{/*DeviceType, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes*/}
					<FB_Spacing label={ 'Padding' } DeviceType={DeviceType} spacingUnits={spacingUnits}
								spacingDesktop={TestimonialDesktopPadding}
								spacingTablet={TestimonialTabPadding} spacingMobile={TestimonialMobilePadding}
								handleSpacingUnitHandler={handleSpacingUnitHandlerFn}
								spacingCombineBtn={FeatureMarginLink}
								spacingCombineBtnHandler={spacingCombineBtnHandlerFn} setAttributes={setAttributes}/>

				</PanelBody>
			</InspectorControls>

			<RichText text={'Hello world'}/>
		</>
	);
}
