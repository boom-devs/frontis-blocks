import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef, memo } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { select, dispatch } from '@wordpress/data';
import classnames from 'classnames';

const FB_Presets = ( props ) => {
	const {
        label = __( 'Select Preset', 'fb' ),
        presets = [],
		setAttributes,
		className,
	} = props;

	// selected block context (safe-guards)
	const panelRef = useRef(null);
	const { getSelectedBlock } = select( 'core/block-editor' );
	const selectedBlock = getSelectedBlock?.() || null;
	const blockNameForHook = selectedBlock?.name?.split('/')?.pop?.();
	const [ panelNameForHook, setPanelNameForHook ] = useState(null);

	useEffect(() => {
		const id = panelRef.current ? (panelRef.current.getAttribute('id') || 'fb-panel') : 'fb-panel';
		setPanelNameForHook(id);
	}, [ blockNameForHook ]);

	const [ selectedPresetState, setPreset ] = useState('');

	// ---------- helpers ----------
	const getDefaultValue = (attrLabel) => {
		const defObj = presets?.[0]?.defaultAttributes?.[attrLabel];
		if (defObj && Object.prototype.hasOwnProperty.call(defObj, 'default')) {
			return defObj.default;
		}
		return undefined;
	};

	const applyDefaultPresetAttributes = () => {
		presets?.[1]?.defaultPresetAttributes?.forEach( (item) => {
			if (item?.label) setAttributes({ [item.label]: getDefaultValue(item.label) });
		});
	};

	const updateChildBlockAttributes = ( preset ) => {
		if (!selectedBlock) return;
		const ids = (selectedBlock.innerBlocks || []).map(b => b.clientId).filter(Boolean);
		if (!ids.length || !preset?.childAttributes?.length) return;

		const childAttrs = {};
		preset.childAttributes.forEach( (a) => { if (a?.label) childAttrs[a.label] = a.value; });

		ids.forEach( (id) => {
			dispatch('core/block-editor').updateBlockAttributes(id, childAttrs);
		});
	};

	const resetChildBlockAttributes = () => {
		if (!selectedBlock) return;
		const ids = (selectedBlock.innerBlocks || []).map(b => b.clientId).filter(Boolean);
		if (!ids.length) return;

		const defaults = {};
		const childDefs = presets?.[1]?.defaultChildAttributes || {};
		Object.keys(childDefs).forEach( (k) => {
			if (Object.prototype.hasOwnProperty.call(childDefs[k], 'default')) {
				defaults[k] = childDefs[k].default;
			}
		});
		if (!Object.keys(defaults).length) return;

		ids.forEach( (id) => {
			dispatch('core/block-editor').updateBlockAttributes(id, defaults);
		});
	};

	// ---------- actions ----------
	const updatePresets = ( selectedValue ) => {
		setPreset( selectedValue );

		// 'default' অপশন থাকলে—ডিফল্টে ফেরত (UI-তে কোনো reset বাটন নেই)
		if (selectedValue === 'default') {
			applyDefaultPresetAttributes();
			resetChildBlockAttributes();
			return;
		}

		const preset = presets?.find( (p) => p?.value === selectedValue );
		if (!preset) return;

		// defaultPresetAttributes → defaults
		applyDefaultPresetAttributes();

		// preset attributes apply
		preset?.attributes?.forEach( (item) => {
			if (item?.label) setAttributes({ [item.label]: item.value });
		});

		// child attributes (if any)
		if (preset?.childAttributes?.length) updateChildBlockAttributes(preset);
	};

	// ---------- UI ----------
	const controlName = (label || 'Select Preset').toLowerCase().replace(/\s+/g, '-');
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

	const presetRadioImage = (
		<div className="fb-presets-radio-image-wrap" role="radiogroup" aria-label={label}>
			{ (presets || []).filter(p => p?.value).map( (p) => {
				const id = `fb-preset-${p.value}`;
				const checked = selectedPresetState === p.value;
				return (
					<div key={p.value} className="fb-preset-item">
						<input
							id={id}
							className="fb-presets-radio-input"
							type="radio"
							name="fb-presets"
							value={p.value}
							checked={checked}
							onChange={() => updatePresets(p.value)}
						/>
						{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
						<label
							htmlFor={id}
							className="fb-presets-radio-input-label"
							aria-checked={checked}
							dangerouslySetInnerHTML={{ __html: p.icon }}
						/>
					</div>
				);
			})}
		</div>
	);

	return (
		<div ref={panelRef} className="components-base-control">
			{ before }
			<div className={ classnames( className, 'fb-presets-main-wrap' ) }>
				<div className="fb-presets-header">
					<label className="fb-presets-label">{label}</label>
				</div>
				{ presetRadioImage }
			</div>
			{ after }
		</div>
	);
};

export default memo(FB_Presets);
