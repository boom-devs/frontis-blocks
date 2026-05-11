/**
 * styling.js
 * Generates inline CSS from block attributes.
 * Pattern mirrors other frontis-blocks styling files.
 */

const styling = ( attributes ) => {
	const {
		blockId,
		markerSize,
		markerSizeTablet,
		markerSizeMobile,
		markerSizeHover,
		markerColor,
		markerColorHover,
		markerBackground,
		markerBackgroundHover,
		markerBorderType,
		markerBorderWidth,
		markerBorderColor,
		markerBorderColorHover,
		markerBorderRadius,
		markerShadow,
		markerShadowHover,
		tooltipBackground,
		tooltipTitleColor,
		tooltipDescriptionColor,
		tooltipWidth,
		tooltipWidthTablet,
		tooltipWidthMobile,
		tooltipPaddingTop,
		tooltipPaddingRight,
		tooltipPaddingBottom,
		tooltipPaddingLeft,
		tooltipPaddingUnit,
		tooltipBorderType,
		tooltipBorderWidth,
		tooltipBorderColor,
		tooltipBorderColorHover,
		tooltipBorderRadius,
		tooltipShadow,
		titleFontSize,
		titleFontWeight,
		titleLineHeight,
		descriptionFontSize,
		descriptionFontWeight,
		descriptionLineHeight,
	} = attributes;

	const wrap = `#block-${ blockId }`;

	// ─── Helpers ──────────────────────────────────────────────────────────────

	const px = ( v ) => ( v !== '' && v !== undefined && v !== null ? `${ v }px` : undefined );

	const shadow = ( s ) => {
		if ( ! s || ! s.enabled ) return 'none';
		return `${ s.horizontal }px ${ s.vertical }px ${ s.blur }px ${ s.spread }px ${ s.color }`;
	};

	const dropShadow = ( s ) => {
		if ( ! s || ! s.enabled ) return 'none';
		return `drop-shadow(${ s.horizontal }px ${ s.vertical }px ${ s.blur }px ${ s.color })`;
	};

	// Selector helpers — shared marker shapes that respond to size
	const roundSelector = `${ wrap } .fb-hotspot__button:not(.fb-hotspot__button--tag):not(.fb-hotspot__button--target):not(.fb-hotspot__button--pin):not(.fb-hotspot__button--square-notch)`;
	const shapeSelector = `${ wrap } .fb-hotspot__button--tag,
		${ wrap } .fb-hotspot__button--target,
		${ wrap } .fb-hotspot__button--pin,
		${ wrap } .fb-hotspot__button--square-notch`;

	// ─── CSS Object ──────────────────────────────────────────────────────────

	const selectors = {};

	// Drop-shadow CSS variable on the wrapper
	selectors[ `${ wrap } .fb-hotspot` ] = {
		'--fb-hotspot-marker-drop-shadow': dropShadow( markerShadow ),
		'--fb-hotspot-marker-drop-shadow-hover': dropShadow( markerShadowHover ),
		'--fb-hotspot-glow-color': markerBackground || undefined,
		'--fb-hotspot-glow-hover-color': markerBackgroundHover || undefined,
	};

	// ── Marker size (normal) ─────────────────────────────────────────────────
	if ( markerSize ) {
		selectors[ roundSelector ] = {
			...( selectors[ roundSelector ] || {} ),
			width: px( markerSize ),
			height: px( markerSize ),
		};
		selectors[ shapeSelector ] = {
			...( selectors[ shapeSelector ] || {} ),
			width: px( markerSize ),
			height: px( markerSize ),
		};
		// SVG children of shape markers should mirror size
		selectors[
			`${ wrap } .fb-hotspot__button--tag .fb-hotspot__marker-tag,
			${ wrap } .fb-hotspot__button--target .fb-hotspot__marker-target,
			${ wrap } .fb-hotspot__button--pin .fb-hotspot__marker-pin,
			${ wrap } .fb-hotspot__button--square-notch .fb-hotspot__marker-square-notch`
		] = {
			width: px( markerSize ),
			height: px( markerSize ),
		};
	}

	// ── Marker size (hover) ──────────────────────────────────────────────────
	if ( markerSizeHover ) {
		const roundHover = `${ roundSelector }:hover, ${ roundSelector }:focus-visible`;
		selectors[ roundHover ] = {
			width: px( markerSizeHover ),
			height: px( markerSizeHover ),
		};
		const shapeHover = `
			${ wrap } .fb-hotspot__button--tag:hover, ${ wrap } .fb-hotspot__button--tag:focus-visible,
			${ wrap } .fb-hotspot__button--target:hover, ${ wrap } .fb-hotspot__button--target:focus-visible,
			${ wrap } .fb-hotspot__button--pin:hover, ${ wrap } .fb-hotspot__button--pin:focus-visible,
			${ wrap } .fb-hotspot__button--square-notch:hover, ${ wrap } .fb-hotspot__button--square-notch:focus-visible`;
		selectors[ shapeHover ] = {
			width: px( markerSizeHover ),
			height: px( markerSizeHover ),
		};
	}

	// ── Marker colour (normal) ───────────────────────────────────────────────
	if ( markerColor ) {
		selectors[ `${ roundSelector }` ] = {
			...( selectors[ roundSelector ] || {} ),
			color: markerColor,
		};
		selectors[
			`${ wrap } .fb-hotspot__marker-icon svg,
			${ wrap } .fb-hotspot__marker-icon svg path`
		] = { fill: markerColor };

		selectors[
			`${ wrap } .fb-hotspot__button--tag, ${ wrap } .fb-hotspot__button--target,
			${ wrap } .fb-hotspot__button--pin, ${ wrap } .fb-hotspot__button--square-notch`
		] = {
			...( selectors[ shapeSelector ] || {} ),
			color: markerColor,
		};
	}

	// ── Marker colour (hover) ────────────────────────────────────────────────
	if ( markerColorHover ) {
		selectors[
			`${ roundSelector }:hover, ${ roundSelector }:focus-visible`
		] = {
			...( selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] || {} ),
			color: markerColorHover,
		};
	}

	// ── Marker background (normal) ───────────────────────────────────────────
	if ( markerBackground ) {
		selectors[ roundSelector ] = {
			...( selectors[ roundSelector ] || {} ),
			'background-color': markerBackground,
		};
	}

	// ── Marker background (hover) ────────────────────────────────────────────
	if ( markerBackgroundHover ) {
		selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] = {
			...( selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] || {} ),
			'background-color': markerBackgroundHover,
		};
	}

	// ── Marker border ────────────────────────────────────────────────────────
	if ( markerBorderType && markerBorderType !== 'none' ) {
		selectors[ roundSelector ] = {
			...( selectors[ roundSelector ] || {} ),
			'border-style': markerBorderType,
			'border-width': px( markerBorderWidth ),
			'border-color': markerBorderColor || undefined,
		};
	}
	if ( markerBorderColorHover ) {
		selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] = {
			...( selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] || {} ),
			'border-color': markerBorderColorHover,
		};
	}
	if ( markerBorderRadius !== undefined && markerBorderRadius !== '' ) {
		selectors[ roundSelector ] = {
			...( selectors[ roundSelector ] || {} ),
			'border-radius': px( markerBorderRadius ),
		};
	}

	// ── Marker box shadow (normal) ───────────────────────────────────────────
	if ( markerShadow && markerShadow.enabled ) {
		selectors[ roundSelector ] = {
			...( selectors[ roundSelector ] || {} ),
			'box-shadow': shadow( markerShadow ),
		};
	}

	// ── Marker box shadow (hover) ────────────────────────────────────────────
	if ( markerShadowHover && markerShadowHover.enabled ) {
		selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] = {
			...( selectors[ `${ roundSelector }:hover, ${ roundSelector }:focus-visible` ] || {} ),
			'box-shadow': shadow( markerShadowHover ),
		};
	}

	// ─── Tooltip ─────────────────────────────────────────────────────────────
	const tooltipSel = `${ wrap } .fb-hotspot__tooltip`;

	selectors[ tooltipSel ] = {
		'background-color': tooltipBackground || undefined,
		width: px( tooltipWidth ),
		padding: `${ tooltipPaddingTop }${ tooltipPaddingUnit } ${ tooltipPaddingRight }${ tooltipPaddingUnit } ${ tooltipPaddingBottom }${ tooltipPaddingUnit } ${ tooltipPaddingLeft }${ tooltipPaddingUnit }`,
		'border-radius': px( tooltipBorderRadius ),
		'box-shadow': tooltipShadow?.enabled ? shadow( tooltipShadow ) : undefined,
		...(
			tooltipBorderType && tooltipBorderType !== 'none'
				? {
					'border-style': tooltipBorderType,
					'border-width': px( tooltipBorderWidth ),
					'border-color': tooltipBorderColor || undefined,
				}
				: {}
		),
	};

	if ( tooltipBorderColorHover ) {
		selectors[ `${ tooltipSel }:hover, ${ tooltipSel }:focus-within` ] = {
			'border-color': tooltipBorderColorHover,
		};
	}

	// ─── Tooltip title ────────────────────────────────────────────────────────
	selectors[ `${ wrap } .fb-hotspot__tooltip-title` ] = {
		color: tooltipTitleColor || undefined,
		'font-size': px( titleFontSize ),
		'font-weight': titleFontWeight || undefined,
		'line-height': titleLineHeight || undefined,
	};

	// ─── Tooltip description ──────────────────────────────────────────────────
	selectors[ `${ wrap } .fb-hotspot__tooltip-description` ] = {
		color: tooltipDescriptionColor || undefined,
		'font-size': px( descriptionFontSize ),
		'font-weight': descriptionFontWeight || undefined,
		'line-height': descriptionLineHeight || undefined,
	};

	// ─── Responsive: Tablet ───────────────────────────────────────────────────
	const tablet = {};
	if ( markerSizeTablet ) {
		tablet[ roundSelector ] = { width: px( markerSizeTablet ), height: px( markerSizeTablet ) };
		tablet[ shapeSelector ] = { width: px( markerSizeTablet ), height: px( markerSizeTablet ) };
	}
	if ( tooltipWidthTablet ) {
		tablet[ tooltipSel ] = { width: px( tooltipWidthTablet ) };
	}

	// ─── Responsive: Mobile ───────────────────────────────────────────────────
	const mobile = {};
	if ( markerSizeMobile ) {
		mobile[ roundSelector ] = { width: px( markerSizeMobile ), height: px( markerSizeMobile ) };
		mobile[ shapeSelector ] = { width: px( markerSizeMobile ), height: px( markerSizeMobile ) };
	}
	if ( tooltipWidthMobile ) {
		mobile[ tooltipSel ] = { width: px( tooltipWidthMobile ) };
	}

	return {
        desktop: selectors || {},
        tablet: tablet || {},
        mobile: mobile || {},
    };
};

export default styling;