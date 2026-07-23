import generateBackgroundCSS from '@Config/generateBackgroundCSS';
import { select } from '@wordpress/data';

/**
 * Module-level cache for loop-builder ancestry lookups.
 *
 * Shape: clientId -> { parentKey: string, hasLoopBuilder: boolean }
 * - parentKey: joined parent client IDs; invalidated automatically when ancestry changes
 * - LOOP_CACHE_MAX: soft cap so long editing sessions cannot grow the Map unboundedly
 *
 * Why cache
 * ---------
 * `backgroundCss()` is called from three hot paths per container:
 *   1. `render.js` (inline background style in the editor canvas)
 *   2. `styling.js` (editor DynamicCSSLoader stylesheet)
 *   3. `frontend-style.js` (saved / meta frontend CSS)
 *
 * Previously each call did `getBlockParents()` + `getBlockName()` for every ancestor.
 * On a deep nest of N containers that is roughly O(N²) store work per style pass and
 * contributed to editor jank / memory pressure alongside the blockStyle serialize issue.
 *
 * Behavior is unchanged: still only checks whether any ancestor is
 * `frontis-blocks/loop-builder` (placeholder image for loop context).
 */
const loopBuilderParentCache = new Map();
const LOOP_CACHE_MAX = 2500;

/**
 * Return whether `clientId` has a Loop Builder ancestor.
 *
 * Uses `loopBuilderParentCache` keyed by clientId + parent chain. Cache hit skips
 * repeated `getBlockName` walks when the parent list has not changed.
 *
 * @param {string} clientId Block client ID from the block editor.
 * @return {boolean} True if a `frontis-blocks/loop-builder` parent exists.
 */
const hasLoopBuilderParent = ( clientId ) => {
	if ( ! clientId ) {
		return false;
	}

	const coreBlockEditor = select( 'core/block-editor' );
	if ( ! coreBlockEditor?.getBlockParents ) {
		return false;
	}

	const parentBlockClientIds = coreBlockEditor.getBlockParents( clientId ) || [];
	const parentKey = parentBlockClientIds.join( '|' );
	const cached = loopBuilderParentCache.get( clientId );

	if ( cached && cached.parentKey === parentKey ) {
		return cached.hasLoopBuilder;
	}

	let hasLoopBuilder = false;
	for ( let i = 0; i < parentBlockClientIds.length; i++ ) {
		if ( coreBlockEditor.getBlockName( parentBlockClientIds[ i ] ) === 'frontis-blocks/loop-builder' ) {
			hasLoopBuilder = true;
			break;
		}
	}

	if ( loopBuilderParentCache.size >= LOOP_CACHE_MAX ) {
		const oldestKey = loopBuilderParentCache.keys().next().value;
		loopBuilderParentCache.delete( oldestKey );
	}
	loopBuilderParentCache.set( clientId, { parentKey, hasLoopBuilder } );

	return hasLoopBuilder;
};

/**
 * Build camelCased inline / stylesheet background CSS for a container.
 *
 * Performance note (deep nesting)
 * -------------------------------
 * Loop-builder parent detection goes through `hasLoopBuilderParent()` (cached).
 * Visual output and attribute handling are unchanged for existing sites.
 *
 * @param {Object} attributes            Block attributes.
 * @param {string} deviceType            Desktop | Tablet | Mobile.
 * @param {string} clientId              Block client ID (for ancestry / loop check).
 * @param {Object} [pseudoElementOverlay] Overlay options for stylesheet generation.
 * @return {Object} Camel-cased CSS property map.
 */
const backgroundCss = ( attributes, deviceType, clientId, pseudoElementOverlay = {} ) => {
	const isLoopBuilderPresent = hasLoopBuilderParent( clientId );

	const placeHolderImage = isLoopBuilderPresent ? {
		type: 'image',
		url: '/admin/assets/images/uag-placeholder.svg'
	} : '';
	const {
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		customPosition,
		centralizedPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		backgroundVideoColor,
		backgroundVideo,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,

		//image overlay
		backgroundOverlayImageDesktop,
		backgroundOverlayImageTablet,
		backgroundOverlayImageMobile,
		backgroundRepeatOverlayDesktop,
		backgroundRepeatOverlayTablet,
		backgroundRepeatOverlayMobile,
		backgroundPositionOverlayDesktop,
		backgroundPositionOverlayTablet,
		backgroundPositionOverlayMobile,
		backgroundSizeOverlayDesktop,
		backgroundSizeOverlayTablet,
		backgroundSizeOverlayMobile,
		backgroundCustomSizeOverlayDesktop,
		backgroundCustomSizeOverlayTablet,
		backgroundCustomSizeOverlayMobile,
		backgroundCustomOverlaySizeType,
		backgroundAttachmentOverlayDesktop,
		backgroundAttachmentOverlayTablet,
		backgroundAttachmentOverlayMobile,
		customOverlayPosition,
		xPositionOverlayDesktop,
		xPositionOverlayTablet,
		xPositionOverlayMobile,
		xPositionOverlayType,
		xPositionOverlayTypeTablet,
		xPositionOverlayTypeMobile,
		yPositionOverlayDesktop,
		yPositionOverlayTablet,
		yPositionOverlayMobile,
		yPositionOverlayType,
		yPositionOverlayTypeTablet,
		yPositionOverlayTypeMobile,
		overlayBlendMode,
		overlayBlendModeTablet,
		overlayBlendModeMobile,
		globalBlockStyleId,


		/** Normal Bg from FB Container */
		containerBgNormalBackgroundType,
		containerBgNormalClassicColor,
	} = attributes;

	const backgroundAttributesDesktop = {
		containerBgNormalBackgroundType,
		containerBgNormalClassicColor,
		backgroundImage: backgroundImageDesktop?.url ? backgroundImageDesktop : placeHolderImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatDesktop,
		backgroundPosition: backgroundPositionDesktop,
		backgroundSize: backgroundSizeDesktop,
		backgroundAttachment: backgroundAttachmentDesktop,
		backgroundCustomSize: backgroundCustomSizeDesktop,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: xPositionDesktop,
		xPositionType,
		yPosition: yPositionDesktop,
		yPositionType,

		backgroundOverlayImage: backgroundOverlayImageDesktop,
		backgroundOverlayRepeat: backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition: backgroundPositionOverlayDesktop,
		backgroundOverlaySize: backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment: backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize: backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: xPositionOverlayDesktop,
		xPositionOverlayType,
		yPositionOverlay: yPositionOverlayDesktop,
		yPositionOverlayType,
		blendMode: overlayBlendMode,
		globalBlockStyleId
	};

	// Any properties that should be inherited from Desktop will be imported from backgroundAttributesDesktop, since only 1 CSS file is generated at a time in bgCss.
	const backgroundAttributesTablet = {
		containerBgNormalBackgroundType,
		containerBgNormalClassicColor,
		// The placeholder image or Desktop background image would already be set or undefined in backgroundAttributesDesktop by this point.
		backgroundImage: backgroundImageTablet?.url ? backgroundImageTablet : backgroundAttributesDesktop.backgroundImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatTablet ? backgroundRepeatTablet : backgroundAttributesDesktop.backgroundRepeat,
		backgroundPosition: backgroundPositionTablet ? backgroundPositionTablet : backgroundAttributesDesktop.backgroundPosition,
		backgroundSize: backgroundSizeTablet ? backgroundSizeTablet : backgroundAttributesDesktop.backgroundSize,
		backgroundAttachment: backgroundAttachmentTablet ? backgroundAttachmentTablet : backgroundAttributesDesktop.backgroundAttachment,
		backgroundCustomSize: backgroundCustomSizeTablet ? backgroundCustomSizeTablet : backgroundAttributesDesktop.backgroundCustomSize,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: ! isNaN( xPositionTablet ) ? xPositionTablet : backgroundAttributesDesktop.xPosition,
		xPositionType: xPositionTypeTablet ? xPositionTypeTablet : backgroundAttributesDesktop.xPositionType,
		yPosition: ! isNaN( yPositionTablet ) ? yPositionTablet : backgroundAttributesDesktop.yPosition,
		yPositionType: yPositionTypeTablet ? yPositionTypeTablet : backgroundAttributesDesktop.yPositionType,

		backgroundOverlayImage: backgroundOverlayImageTablet || backgroundOverlayImageDesktop,
		backgroundOverlayRepeat: backgroundRepeatOverlayTablet || backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition: backgroundPositionOverlayTablet || backgroundPositionOverlayDesktop,
		backgroundOverlaySize: backgroundSizeOverlayTablet || backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment: backgroundAttachmentOverlayTablet || backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize: backgroundCustomSizeOverlayTablet || backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: ( 'number' === typeof xPositionOverlayTablet ) ? xPositionOverlayTablet : backgroundAttributesDesktop.xPositionOverlay,
		xPositionOverlayType: xPositionOverlayTypeTablet
			? xPositionOverlayTypeTablet
			: backgroundAttributesDesktop.xPositionOverlayType,
		yPositionOverlay: ( 'number' === typeof yPositionOverlayTablet ) ? yPositionOverlayTablet : backgroundAttributesDesktop.yPositionOverlay,
		yPositionOverlayType: yPositionOverlayTypeTablet
			? yPositionOverlayTypeTablet
			: backgroundAttributesDesktop.yPositionOverlayType,
		blendMode: overlayBlendModeTablet || overlayBlendMode,
		globalBlockStyleId,
	};

	// Any properties that should be inherited from Tablet will be imported from backgroundAttributesTablet ( which inherits from backgroundAttributesDesktop ), since only 1 CSS file is generated at a time in bgCss.
	const backgroundAttributesMobile = {
		containerBgNormalBackgroundType,
		containerBgNormalClassicColor,
		// The placeholder image or Tablet background image would already be set or undefined in backgroundAttributesTablet by this point.
		backgroundImage: backgroundImageMobile?.url ? backgroundImageMobile : backgroundAttributesTablet.backgroundImage,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		backgroundRepeat: backgroundRepeatMobile ? backgroundRepeatMobile : backgroundAttributesTablet.backgroundRepeat,
		backgroundPosition: backgroundPositionMobile ? backgroundPositionMobile : backgroundAttributesTablet.backgroundPosition,
		backgroundSize: backgroundSizeMobile ? backgroundSizeMobile : backgroundAttributesTablet.backgroundSize,
		backgroundAttachment: backgroundAttachmentMobile ? backgroundAttachmentMobile : backgroundAttributesTablet.backgroundAttachment,
		backgroundCustomSize: backgroundCustomSizeMobile ? backgroundCustomSizeMobile : backgroundAttributesTablet.backgroundCustomSize,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		overlayOpacity,
		backgroundVideo,
		backgroundVideoColor,
		customPosition,
		centralizedPosition,
		xPosition: ! isNaN( xPositionMobile ) ? xPositionMobile : backgroundAttributesTablet.xPosition,
		xPositionType: xPositionTypeMobile ? xPositionTypeMobile : backgroundAttributesTablet.xPositionType,
		yPosition: ! isNaN( yPositionMobile ) ? yPositionMobile : backgroundAttributesTablet.yPosition,
		yPositionType: yPositionTypeMobile ? yPositionTypeMobile : backgroundAttributesTablet.yPositionType,

		backgroundOverlayImage:
			backgroundOverlayImageMobile || backgroundOverlayImageTablet || backgroundOverlayImageDesktop,
		backgroundOverlayRepeat:
			backgroundRepeatOverlayMobile || backgroundRepeatOverlayTablet || backgroundRepeatOverlayDesktop,
		backgroundOverlayPosition:
			backgroundPositionOverlayMobile || backgroundPositionOverlayTablet || backgroundPositionOverlayDesktop,
		backgroundOverlaySize:
			backgroundSizeOverlayMobile || backgroundSizeOverlayTablet || backgroundSizeOverlayDesktop,
		backgroundOverlayAttachment:
			backgroundAttachmentOverlayMobile ||
			backgroundAttachmentOverlayTablet ||
			backgroundAttachmentOverlayDesktop,
		backgroundCustomOverlaySize:
			backgroundCustomSizeOverlayMobile ||
			backgroundCustomSizeOverlayTablet ||
			backgroundCustomSizeOverlayDesktop,
		backgroundCustomOverlaySizeType,
		customOverlayPosition,
		xPositionOverlay: ( 'number' === typeof xPositionOverlayMobile ) ? xPositionOverlayMobile : backgroundAttributesTablet.xPositionOverlay,
		xPositionOverlayType: xPositionOverlayTypeMobile
			? xPositionOverlayTypeMobile
			: backgroundAttributesTablet.xPositionOverlayType,
		yPositionOverlay: ( 'number' === typeof yPositionOverlayMobile ) ? yPositionOverlayMobile : backgroundAttributesTablet.yPositionOverlay,
		yPositionOverlayType: yPositionOverlayTypeMobile
			? yPositionOverlayTypeMobile
			: backgroundAttributesTablet.yPositionOverlayType,
		blendMode: overlayBlendModeMobile || overlayBlendModeTablet || overlayBlendMode,
		globalBlockStyleId,
	};
	// console.log(backgroundAttributesDesktop)

	let bgCss;

	switch ( deviceType ) {
		case 'Mobile':
			bgCss = generateBackgroundCSS( backgroundAttributesMobile, pseudoElementOverlay );
			break;
		case 'Tablet':
			bgCss = generateBackgroundCSS( backgroundAttributesTablet, pseudoElementOverlay );
			break;
		default:
			bgCss = generateBackgroundCSS( backgroundAttributesDesktop, pseudoElementOverlay );
	}


	if ( ! bgCss ) {
		return null;
	}

	// Return without formatting if this is for dynamic styling
	if ( pseudoElementOverlay?.forStyleSheet ) {
		return bgCss;
	}



	const createCamelCase = {};

	const snakeToCamel = str =>
		str.toLowerCase().replace( /([-_][a-z])/g, group =>
			group
				.toUpperCase()
				.replace( '-', '' )
				.replace( '_', '' )
		);

	for ( const cssProp in bgCss ) {
		if( ! bgCss[cssProp] ){
			continue;
		}
		createCamelCase[ snakeToCamel( cssProp ) ] = 'string' === typeof bgCss[cssProp] ? bgCss[cssProp].replace( ';', '' ) : bgCss[cssProp];
	}

	return createCamelCase;
}
export default backgroundCss;
