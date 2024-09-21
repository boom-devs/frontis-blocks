/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import FBSelectControl from '@Components/select-control';
import FontFamilyControl from './font-typography';
import RangeTypographyControl from './range-typography';
import TypographyStyles from './inline-styles';
import styles from './editor.lazy.scss';
import { useLayoutEffect, useEffect, useState, useRef } from '@wordpress/element';

import { getIdFromString, getPanelIdFromRef } from '@Utils/Helpers';
import { select } from '@wordpress/data';
import getFBEditorStateLocalStorage from '@Controls/getFBEditorStateLocalStorage';
import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';
import FBHelpText from '@Components/help-text';

// Export for ease of importing in individual blocks.
export { TypographyStyles };

const TypographyControl = ( props ) => {
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );
	const panelRef = useRef( null );

	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );
	const allBlocksAttributes = applyFilters( 'fb.blocksAttributes', blocksAttributes ); // eslint-disable-line @wordpress/no-unused-vars-before-return

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useLayoutEffect( () => {
		window.addEventListener( 'click', function ( e ) {
			const popupButton = document.querySelector(
				`.active.popup-${ props?.attributes?.block_id } .frontis-control-popup__options--action-button`
			);
			const popupWrap = document.querySelector(
				`.active.popup-${ props?.attributes?.block_id } .frontis-control-popup`
			);

			if (
				popupButton &&
				! popupButton?.contains( e.target ) &&
				popupWrap &&
				! popupWrap?.contains( e.target ) &&
				! e.target?.parentElement?.parentElement?.classList?.contains( 'fb-font-family-select__menu' ) &&
				! e.target?.classList?.contains( 'fb-responsive-common-button' ) &&
				! e.target?.closest( '.fb-responsive-common-button' ) &&
				! e.target?.parentElement?.closest( '.fb-reset' )
			) {
				toggleAdvancedControls( false );

				const blockName = getSelectedBlock()?.name;
				const uagSettingState = getFBEditorStateLocalStorage( 'uagSettingState' );

				const data = {
					...uagSettingState,
					[ blockName ]: {
						...uagSettingState?.[ blockName ],
						selectedSetting: false,
					},
				};

				const uagLocalStorage = getFBEditorStateLocalStorage();
				if ( uagLocalStorage ) {
					uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
				}
			}
		} );
	}, [] );

	let lineHeight;
	let fontFamily;
	let fontAdvancedControls;
	let fontTypoAdvancedControls;
	let showAdvancedFontControls;
	let transform;
	let decoration;
	let letterSpacing;
	const activeClass = showAdvancedControls ? 'active' : '';

	const {
		disableFontFamily,
		disableFontSize,
		disableLineHeight,
		disableTransform,
		disableDecoration,
		disableAdvancedOptions = false,
		help = false,
	} = props;

	if ( true !== disableFontFamily ) {
		fontFamily = <FontFamilyControl { ...props } />;
	}
	const lineHeightStepsVal = 'em' === props.lineHeightType?.value ? 0.1 : 1; // fractional value when unit is em.
	const letterSpacingStepsVal = 'em' === props.letterSpacingType?.value ? 0.1 : 1; // fractional value when unit is em.

	// Array of all the current Typography Control's Labels.
	const attributeNames = [];

	if ( ! disableFontFamily ) {
		attributeNames.push( props.fontFamily.label, props.fontWeight.label, props.fontStyle.label );
	}

	if ( ! disableFontSize ) {
		attributeNames.push(
			props.fontSizeType.label,
			props.fontSize.label,
			props.fontSizeMobile.label,
			props.fontSizeTablet.label
		);
		if ( props.fontSizeTypeMobile && props.fontSizeTypeTablet ) {
			attributeNames.push(
			props.fontSizeTypeMobile.label,
			props.fontSizeTypeTablet.label,
			);
		};
	}

	if ( ! disableLineHeight ) {
		attributeNames.push(
			props.lineHeightType.label,
			props.lineHeight.label,
			props.lineHeightMobile.label,
			props.lineHeightTablet.label
		);
	}

	if ( ! disableTransform ) {
		attributeNames.push( props.transform.label );
	}

	if ( ! disableDecoration ) {
		attributeNames.push( props.decoration.label );
	}

	if ( props.letterSpacing ) {
		attributeNames.push(
			props.letterSpacing.label,
			props.letterSpacingTablet.label,
			props.letterSpacingMobile.label,
			props.letterSpacingType.label
		);
	}

	const { getSelectedBlock } = select( 'core/block-editor' );
	const blockNameForHook = getSelectedBlock()?.name.split( '/' ).pop(); // eslint-disable-line @wordpress/no-unused-vars-before-return
	useEffect( () => {
		setPanelNameForHook( getPanelIdFromRef( panelRef ) );
	}, [ blockNameForHook ] );

	// Function to get the Block's default Typography Values.
	const getBlockTypographyValue = () => {
		const selectedBlockName = getSelectedBlock()?.name.split( '/' ).pop();
		let defaultValues = false;
		if ( 'undefined' !== typeof allBlocksAttributes[ selectedBlockName ] ) {
			attributeNames.forEach( ( attributeName ) => {
				if ( attributeName ) {
					const blockDefaultAttributeValue =
						'undefined' !== typeof allBlocksAttributes[ selectedBlockName ][ attributeName ]?.default
							? allBlocksAttributes[ selectedBlockName ][ attributeName ]?.default
							: '';
					defaultValues = {
						...defaultValues,
						[ attributeName ]: blockDefaultAttributeValue,
					};
				}
			} );
		}
		return defaultValues;
	};

	// Function to check if any Typography Setting has changed.
	const getUpdateState = () => {
		const defaultValues = getBlockTypographyValue();
		const selectedBlockAttributes = getSelectedBlock()?.attributes;
		let isTypographyUpdated = false;
		attributeNames.forEach( ( attributeName ) => {
			if (
				selectedBlockAttributes?.[ attributeName ] &&
				selectedBlockAttributes?.[ attributeName ] !== defaultValues?.[ attributeName ]
			) {
				isTypographyUpdated = true;
			}
		} );
		return isTypographyUpdated;
	};

	// Flag to check if this control has been updated or not.
	const isTypographyUpdated = getUpdateState();

	if ( true !== disableLineHeight ) {
		lineHeight = (
			<RangeTypographyControl
				type={ props.lineHeightType }
				typeLabel={ props.lineHeightType.label }
				sizeMobile={ props.lineHeightMobile }
				sizeMobileLabel={ props.lineHeightMobile.label }
				sizeTablet={ props.lineHeightTablet }
				sizeTabletLabel={ props.lineHeightTablet.label }
				size={ props.lineHeight }
				sizeLabel={ props.lineHeight.label }
				min={ 0 }
				sizeMobileText={ __( 'Line Height', 'frontis-blocks' ) }
				sizeTabletText={ __( 'Line Height', 'frontis-blocks' ) }
				sizeText={ __( 'Line Height', 'frontis-blocks' ) }
				step={ lineHeightStepsVal }
				{ ...props }
			/>
		);
	}

	if ( props.letterSpacing ) {
		letterSpacing = (
			<RangeTypographyControl
				type={ props.letterSpacingType }
				typeLabel={ props.letterSpacingType.label }
				sizeMobile={ props.letterSpacingMobile }
				sizeMobileLabel={ props.letterSpacingMobile.label }
				sizeTablet={ props.letterSpacingTablet }
				sizeTabletLabel={ props.letterSpacingTablet.label }
				size={ props.letterSpacing }
				sizeLabel={ props.letterSpacing.label }
				min={ -50 }
				sizeMobileText={ __( 'Letter Spacing', 'frontis-blocks' ) }
				sizeTabletText={ __( 'Letter Spacing', 'frontis-blocks' ) }
				sizeText={ __( 'Letter Spacing', 'frontis-blocks' ) }
				step={ letterSpacingStepsVal }
				{ ...props }
			/>
		);
	}

	if ( ! disableTransform && props.transform ) {
		transform = (
			<FBSelectControl
				label={ __( 'Transform', 'frontis-blocks' ) }
				data={ {
					value: props.transform.value,
					label: props.transform.label,
				} }
				setAttributes={ props.setAttributes }
				options={ [
					{
						value: '',
						label: __( 'Default', 'frontis-blocks' ),
					},
					{
						value: 'none',
						label: __( 'Normal', 'frontis-blocks' ),
					},
					{
						value: 'capitalize',
						label: __( 'Capitalize', 'frontis-blocks' ),
					},
					{
						value: 'uppercase',
						label: __( 'Uppercase', 'frontis-blocks' ),
					},
					{
						value: 'lowercase',
						label: __( 'Lowercase', 'frontis-blocks' ),
					},
				] }
			/>
		);
	}
	if ( ! disableDecoration && props.decoration ) {
		decoration = (
			<div className="fb-typography-decoration">
				<FBSelectControl
					label={ __( 'Decoration', 'frontis-blocks' ) }
					data={ {
						value: props.decoration.value,
						label: props.decoration.label,
					} }
					setAttributes={ props.setAttributes }
					options={ [
						{
							value: '',
							label: __( 'Default', 'frontis-blocks' ),
						},
						{
							value: 'none',
							label: __( 'None', 'frontis-blocks' ),
						},
						{
							value: 'underline',
							label: __( 'Underline', 'frontis-blocks' ),
						},
						{
							value: 'overline',
							label: __( 'Overline', 'frontis-blocks' ),
						},
						{
							value: 'line-through',
							label: __( 'Line Through', 'frontis-blocks' ),
						},
					] }
				/>
			</div>
		);
	}
	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontAdvancedControls = (
			<Button
				className="fb-typography-button frontis-control-popup__options--action-button"
				aria-pressed={ showAdvancedControls }
				onClick={ () => {
					const allPopups = document.querySelectorAll( '.frontis-control-popup__options' );
					if ( allPopups && 0 < allPopups.length ) {
						for ( let i = 0; i < allPopups.length; i++ ) {
							const popupButton = allPopups[ i ]?.querySelector(
								'.frontis-control-popup__options.active .frontis-control-popup__options--action-button'
							);
							popupButton?.click();
						}
					}
					toggleAdvancedControls( ! showAdvancedControls );

					const blockName = getSelectedBlock()?.name;
					const uagSettingState = getFBEditorStateLocalStorage( 'uagSettingState' );
					let data = {
						...uagSettingState,
						[ blockName ]: {
							...uagSettingState?.[ blockName ],
							selectedSetting: '.fb-typography-options',
						},
					};

					if ( showAdvancedControls ) {
						data = {
							...uagSettingState,
							[ blockName ]: {
								...uagSettingState?.[ blockName ],
								selectedSetting: false,
							},
						};
					}

					const uagLocalStorage = getFBEditorStateLocalStorage();
					if ( uagLocalStorage ) {
						uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
					}
				} }
			>
				<Dashicon icon="edit" />
			</Button>
		);
	} else {
		showAdvancedFontControls = (
			<>
				{ fontFamily }
				{ transform }
				{ decoration }
				{ lineHeight }
				{ letterSpacing }
			</>
		);
	}

	if ( showAdvancedControls === true ) {
		showAdvancedFontControls = (
			<div className="fb-typography-advanced frontis-control-popup">
				{ fontFamily }
				{ transform }
				{ decoration }
				{ lineHeight }
				{ letterSpacing }
			</div>
		);
	}

	if ( true !== disableFontFamily && true !== disableFontSize ) {
		fontTypoAdvancedControls = (
			<div className="frontis-control-popup__options--action-wrapper">
				<span className="fb-control-label">
					{ props.label }
					{ isTypographyUpdated && <div className="frontis__change-indicator--dot-right" /> }
				</span>
				{ fontAdvancedControls }
			</div>
		);
	}

	const controlName = getIdFromString( props.label );
	const controlBeforeDomElement = applyFilters(
		`frontis.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);
	const controlAfterDomElement = applyFilters(
		`frontis.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	return (
		<div ref={ panelRef } className="components-base-control">
			{ controlBeforeDomElement }
			<div
				className={ ` fb-typography-options frontis-control-popup__options popup-${ props?.attributes?.block_id } ${ activeClass }` }
			>
				{ ! disableAdvancedOptions && (
					<>
						{ fontTypoAdvancedControls }
						{ showAdvancedFontControls }
					</>
				) }
				<FBHelpText text={ help } />
			</div>
			{ controlAfterDomElement }
		</div>
	);
};

export default TypographyControl;
