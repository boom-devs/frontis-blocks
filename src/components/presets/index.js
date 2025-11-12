import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef, memo, Fragment } from '@wordpress/element';
import { BaseControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';
import { select, dispatch } from '@wordpress/data';
import classnames from 'classnames';

const FB_Presets = ( {
	className = '',
	label = __( 'Select Preset', 'frontis-blocks' ),
	presets = [],
	value = '',
	onChangeValue = '',
	defaultPresetValue = null,
	setAttributes,
} ) => {
	// Selected block context (safe-guards)
	const panelRef = useRef( null );
	const { getSelectedBlock } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock?.() || null;
	const blockNameForHook = selectedBlock?.name?.split( '/' )?.pop?.();
	const [ panelNameForHook, setPanelNameForHook ] = useState( null );

	useEffect( () => {
		const id = panelRef.current
			? ( panelRef.current.getAttribute( 'id' ) || 'fb-panel' )
			: 'fb-panel';
		setPanelNameForHook( id );
	}, [ blockNameForHook ] );

	// keep UI state in sync with saved attribute
	const [ selectedPresetState, setPreset ] = useState( value || '' );
	useEffect( () => {
		setPreset( value || '' );
	}, [ value ] );

	// figure out what "default preset" means
	const resolveDefaultPresetValue = () => {
		if ( defaultPresetValue ) return defaultPresetValue;
		const flagged = ( presets || [] ).find( (p) => p?.isDefault && p?.value );
		if ( flagged?.value ) return flagged.value;
		const first = ( presets || [] ).find( (p) => p?.value );
		return first?.value || '';
	};

	// helper to update child block attributes
	const updateChildBlockAttributes = ( preset ) => {
		if ( ! selectedBlock?.innerBlocks?.length ) return;
		const ids = selectedBlock.innerBlocks.map( ( b ) => b.clientId ).filter( Boolean );
		if ( ! ids.length || ! preset?.childAttributes?.length ) return;

		const childAttrs = {};
		preset.childAttributes.forEach( ( a ) => { if ( a?.label ) childAttrs[ a.label ] = a.value; } );

		ids.forEach( ( id ) => {
			dispatch( 'core/block-editor' ).updateBlockAttributes( id, childAttrs );
		} );
	};

	// actions
	const applyPresetByValue = ( selectedValue ) => {
		// save controlling attribute, if provided
		if ( onChangeValue ) {
			setAttributes( { [ onChangeValue ]: selectedValue } );
		}
		setPreset( selectedValue );

		const preset = presets?.find( ( p ) => p?.value === selectedValue );
		if ( preset?.attributes?.length ) {
			preset.attributes.forEach( ( item ) => {
				if ( item?.label ) setAttributes( { [ item.label ]: item.value } );
			} );
		}
		if ( preset?.childAttributes?.length ) updateChildBlockAttributes( preset );
	};

	const updatePresets = ( selectedValue ) => {
		applyPresetByValue( selectedValue );
	};

	const resetPresets = () => {
		const defVal = resolveDefaultPresetValue();
		if ( defVal ) applyPresetByValue( defVal );
	};

	// UI
	const controlName = ( label || 'Select Preset' ).toLowerCase().replace( /\s+/g, '-' );
	const before = applyFilters(
		`fb.${ blockNameForHook }.${ panelNameForHook }.${ controlName }.before`,
		'',
		blockNameForHook
	);
	const after = applyFilters(
		`fb.${ blockNameForHook }.${ panelNameForHook }.${ controlName }`,
		'',
		blockNameForHook
	);

	// unique group so multiple blocks don’t clash
	const radioName = `fb-presets-${ selectedBlock?.clientId || 'global' }`;

	// show reset only when current != default
	const defaultValue = resolveDefaultPresetValue();
	const showReset = selectedPresetState && selectedPresetState !== defaultValue;

	return (
		<div ref={ panelRef } className="components-base-control">
			{ before }
			<div className={ classnames( className, 'fb-presets-main-wrap' ) }>
				<div className="fb-presets-header">
					<BaseControl className="fb-presets-label-position">
						<label className="fb-presets-label">{ label }</label>
					</BaseControl>

					{ showReset && (
						<div className="fb-unit-wrapper">
							<div className="fb-reset-control-container" onClick={ resetPresets }>
								<button type="button" className="fb-reset-button fb-reset-has-value" aria-label="Reset to default preset">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"/>
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>

				{/* inputs + labels (siblings) so CSS :checked + label works */}
				<div className="fb-presets-radio-image-wrap" role="radiogroup" aria-label={ label }>
					{ ( presets || [] ).map( ( p ) => {
						if ( ! p?.value ) return null;
						const key = p.value;
						const checked = selectedPresetState === key;
						const inputId = `${ radioName }-${ key }`;

						return (
							<Fragment key={ key }>
								<input
									id={ inputId }
									className="fb-presets-radio-input"
									type="radio"
									name={ radioName }
									value={ key }
									checked={ checked }
									onChange={ () => updatePresets( key ) }
								/>
								<label
									htmlFor={ inputId }
									className="fb-presets-radio-input-label"
									dangerouslySetInnerHTML={ { __html: p.icon || '' } }
								/>
							</Fragment>
						);
					} ) }
				</div>
			</div>
			{ after }
		</div>
	);
};

export default memo( FB_Presets );