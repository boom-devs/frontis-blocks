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
// import FB_BoxShadowControl from '@Components/box-shadow';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {attributes, setAttributes} = props;
	const {
		DeviceType,
		FeatureMarginLink,
		spacingUnits,
		TestimonialDesktopPadding,
		TestimonialTabPadding,
		TestimonialMobilePadding
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
					{/*<FB_BoxShadowControl boxShadowHandler={boxShadowHandler}/>*/}
					{/*<Range label={'Font size'} displayUnit={'px'} />*/}
					{/*DeviceType, spacingUnits, spacingDesktop, spacingTablet, spacingMobile, handleSpacingUnitHandler, spacingCombineBtn, spacingCombineBtnHandler, setAttributes*/}
					<FB_Spacing DeviceType={DeviceType} spacingUnits={spacingUnits}
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
