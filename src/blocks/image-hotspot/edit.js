/**
 * edit.js
 * Editor view for the Image Hotspot block.
 * Hotspots are draggable directly on the preview image.
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useRef, useState, useCallback } from '@wordpress/element';

import Inspector   from './inspector';
import styling     from './styling';
import { PRESET_DEFAULTS } from './constants';

// ─── Marker SVGs ───
const MarkerSVG = ( { design } ) => {
	if ( design === 'tag' ) return (
		<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
			<path d="M25.88 12.5467L14.1067 0.773333C13.6133 0.28 12.9333 0 12.2267 0H2.66667C1.2 0 0 1.2 0 2.66667V12.2267C0 12.9333 0.28 13.6133 0.786667 14.1067L12.56 25.88C13.6 26.92 15.2933 26.92 16.3333 25.88L25.8933 16.32C26.9333 15.28 26.9333 13.6 25.88 12.5467ZM6 8C4.89333 8 4 7.10667 4 6C4 4.89333 4.89333 4 6 4C7.10667 4 8 4.89333 8 6C8 7.10667 7.10667 8 6 8Z" fill="currentColor"/>
		</svg>
	);
	if ( design === 'target' ) return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			<rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="currentColor"/>
			<circle cx="10" cy="10" r="5" fill="currentColor"/>
		</svg>
	);
	if ( design === 'pin' ) return (
		<svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46" fill="none">
			<path fillRule="evenodd" clipRule="evenodd" d="M16.0369 44.4626C16.0369 44.4626 0 30.9564 0 17.6667C0 12.9812 1.8613 8.48759 5.17445 5.17445C8.48759 1.8613 12.9812 0 17.6667 0C22.3522 0 26.8457 1.8613 30.1589 5.17445C33.472 8.48759 35.3333 12.9812 35.3333 17.6667C35.3333 30.9564 19.2964 44.4626 19.2964 44.4626C18.4042 45.2841 16.9357 45.2752 16.0369 44.4626ZM17.6667 25.3958C25.3958 25.3958 25.3958 9.9375 17.6667 9.9375C9.9375 9.9375 9.9375 25.3958 17.6667 25.3958Z" fill="currentColor"/>
		</svg>
	);
	if ( design === 'square-notch' ) return (
		<svg xmlns="http://www.w3.org/2000/svg" width="38" height="46" viewBox="0 0 38 46" fill="none">
			<path d="M2 0H36C37.1046 0 38 0.895431 38 2V36C38 37.1046 37.1046 38 36 38H25L19.8 44.9333C19.4 45.4667 18.6 45.4667 18.2 44.9333L13 38H2C0.895431 38 0 37.1046 0 36V2C0 0.895431 0.895431 0 2 0Z" fill="currentColor"/>
		</svg>
	);
	return null; // round — no SVG
};

// ─── Star rating ────
const Stars = ( { count = 4 } ) => (
	<span className="fb-hotspot__tooltip-stars" aria-hidden="true">
		{ [ 1, 2, 3, 4, 5 ].map( ( n ) => (
			<svg key={ n } className={ `fb-hotspot__tooltip-star${ n <= count ? ' is-filled' : '' }` } xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
			</svg>
		) ) }
	</span>
);

// ─── Tooltip preview (editor) ─────
const TooltipPreview = ( { hotspot, preset } ) => {
	const { title, description, tooltipImage, ctaText, actionType, price, showLinks, links, showReviews } = hotspot;

	if ( preset === 'preset-4' ) return (
		<div className="fb-hotspot__tooltip">
			{ title && <div className="fb-hotspot__tooltip-title">{ title }</div> }
			{ description && <div className="fb-hotspot__tooltip-description">{ description }</div> }
			{ showLinks && (
				<div className="fb-hotspot__tooltip-icon-links">
					{ ( links || [] ).filter( l => l.icon ).map( ( l, i ) => (
						<span key={ i } className="fb-hotspot__tooltip-icon-link"><i className={ l.icon }></i></span>
					) ) }
				</div>
			) }
		</div>
	);

	if ( preset === 'preset-3' ) return (
		<div className={ `fb-hotspot__tooltip${ tooltipImage?.url ? ' fb-hotspot__tooltip--has-media' : '' }` }>
			{ tooltipImage?.url
				? <div className="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image"><div className="fb-hotspot__tooltip-media-frame"><img className="fb-hotspot__tooltip-image" src={ tooltipImage.url } alt=""/></div></div>
				: <div className="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--placeholder"><div className="fb-hotspot__tooltip-media-frame fb-hotspot__tooltip-media-frame--placeholder"><div className="fb-hotspot__placeholder"><span>{ __( 'Select image', 'frontis-blocks' ) }</span></div></div></div>
			}
			{ title       && <div className="fb-hotspot__tooltip-title">{ title }</div> }
			{ description && <div className="fb-hotspot__tooltip-description">{ description }</div> }
			{ price       && <div className="fb-hotspot__tooltip-price">{ price }</div> }
			{ showReviews && (
				<div className="fb-hotspot__tooltip-reviews">
					<Stars count={ 4 } />
					<span className="fb-hotspot__tooltip-review-count">12</span>
					<span className="fb-hotspot__tooltip-review-text"> { __( 'reviews', 'frontis-blocks' ) }</span>
				</div>
			) }
		</div>
	);

	if ( preset === 'preset-2' ) return (
		<div className={ `fb-hotspot__tooltip${ tooltipImage?.url ? ' fb-hotspot__tooltip--has-media' : '' }` }>
			{ tooltipImage?.url && <div className="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image"><div className="fb-hotspot__tooltip-media-frame"><img className="fb-hotspot__tooltip-image" src={ tooltipImage.url } alt=""/></div></div> }
			{ price && <div className="fb-hotspot__tooltip-price">{ price }</div> }
			{ title && <div className="fb-hotspot__tooltip-title">{ title }</div> }
			{ actionType !== 'none' && <span className="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--disabled">{ ctaText }</span> }
		</div>
	);

	// preset-1 and custom
	return (
		<div className={ `fb-hotspot__tooltip${ tooltipImage?.url ? ' fb-hotspot__tooltip--has-media' : '' }` }>
			{ tooltipImage?.url && <div className="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image"><div className="fb-hotspot__tooltip-media-frame"><img className="fb-hotspot__tooltip-image" src={ tooltipImage.url } alt=""/></div></div> }
			{ title       && <div className="fb-hotspot__tooltip-title">{ title }</div> }
			{ description && <div className="fb-hotspot__tooltip-description">{ description }</div> }
			{ price && <div className="fb-hotspot__tooltip-meta"><div className="fb-hotspot__tooltip-price">{ price }</div></div> }
			{ actionType !== 'none' && <span className="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--disabled">{ ctaText }</span> }
		</div>
	);
};

// ─── Single draggable hotspot pin ──────
const HotspotPin = ( { hotspot, index, preset, onChange } ) => {
	const dragging = useRef( false );
	const containerRef = useRef( null );
	const [ tooltipVisible, setTooltipVisible ] = useState( false );

	const defaults = PRESET_DEFAULTS[ preset ] || PRESET_DEFAULTS.custom;
	const design   = hotspot.markerDesign   || defaults.markerDesign;
	const position = hotspot.tooltipPosition || defaults.tooltipPosition;

	const handleMouseDown = useCallback( ( e ) => {
		e.preventDefault();
		e.stopPropagation();
		dragging.current = true;
		const wrapper = containerRef.current?.closest( '.fb-hotspot__image-wrapper' );
		if ( ! wrapper ) return;

		const onMove = ( me ) => {
			if ( ! dragging.current ) return;
			const rect = wrapper.getBoundingClientRect();
			const x = Math.max( 0, Math.min( 100, ( ( me.clientX - rect.left ) / rect.width  ) * 100 ) );
			const y = Math.max( 0, Math.min( 100, ( ( me.clientY - rect.top  ) / rect.height ) * 100 ) );
			onChange( { ...hotspot, positionX: Math.round( x ), positionY: Math.round( y ) } );
		};
		const onUp = () => {
			dragging.current = false;
			window.removeEventListener( 'mousemove', onMove );
			window.removeEventListener( 'mouseup',   onUp  );
		};
		window.addEventListener( 'mousemove', onMove );
		window.addEventListener( 'mouseup',   onUp  );
	}, [ hotspot, onChange ] );

	const buttonClasses = [
		'fb-hotspot__button',
		`fb-hotspot__button--${ design }`,
	].join( ' ' );

	return (
		<div
			ref={ containerRef }
			className={ `fb-hotspot__item fb-hotspot__item--${ position }` }
			style={ { left: `${ hotspot.positionX }%`, top: `${ hotspot.positionY }%` } }
			data-animation={ hotspot.animation }
			data-animation-delay={ hotspot.animationInterval }
			onMouseEnter={ () => setTooltipVisible( true ) }
			onMouseLeave={ () => setTooltipVisible( false ) }
		>
			<button
				type="button"
				className={ buttonClasses }
				aria-label={ hotspot.title }
				onMouseDown={ handleMouseDown }
			>
				{ ( design === 'tag' || design === 'target' || design === 'pin' || design === 'square-notch' ) ? (
					<span className={ `fb-hotspot__marker-${ design }` } aria-hidden="true">
						<MarkerSVG design={ design } />
						{ hotspot.markerIcon && (
							<span className={ `fb-hotspot__marker-${ design === 'square-notch' ? 'square-notch' : design }-icon` }>
								<i className={ hotspot.markerIcon }></i>
							</span>
						) }
					</span>
				) : (
					<>
						{ hotspot.markerIcon && <span className="fb-hotspot__marker-icon"><i className={ hotspot.markerIcon }></i></span> }
						{ hotspot.markerText && <span className="fb-hotspot__marker-text">{ hotspot.markerText }</span> }
					</>
				) }
			</button>

			{ tooltipVisible && (
				<TooltipPreview hotspot={ hotspot } preset={ preset } />
			) }

			{ /* Position badge (editor only) */ }
			<span className="fb-hotspot__editor-badge">{ index + 1 }</span>
		</div>
	);
};

// ─── Edit component ──────
const Edit = ( props ) => {
	const { attributes: attrs, setAttributes, clientId } = props;
	const { blockId, image, imageAlt, markerPreset, hotspots } = attrs;

	// Generate stable blockId once
	useEffect( () => {
		if ( ! blockId ) {
			setAttributes( { blockId: clientId.replace( /-/g, '' ).slice( 0, 12 ) } );
		}
	}, [] );

	// Build & inject dynamic styles
	const styleId = `fb-hotspot-style-${ blockId }`;
	useEffect( () => {
		if ( ! blockId ) return;
		const cssData = styling( attrs ) || {
			desktop: {},
			tablet: {},
			mobile: {},
		};

		const css = buildCSS( cssData );
		let el = document.getElementById( styleId );
		if ( ! el ) {
			el = document.createElement( 'style' );
			el.id = styleId;
			document.head.appendChild( el );
		}
		el.textContent = css;
		return () => el?.remove();
	}, [ attrs, blockId ] );

	const updateHotspot = ( index, updated ) => {
		const next = [ ...hotspots ];
		next[ index ] = updated;
		setAttributes( { hotspots: next } );
	};

	const blockProps = useBlockProps( {
		id: blockId ? `block-${ blockId }` : undefined,
		className: 'fb-image-hotspot-block',
	} );

	return (
		<>
			<Inspector attributes={ attrs } setAttributes={ setAttributes } />

			<div { ...blockProps }>
				<div className={ `fb-hotspot fb-hotspot--${ markerPreset }` }>
					<div className="fb-hotspot__image-wrapper">
						{ image?.url ? (
							<img
								className="fb-hotspot__image"
								src={ image.url }
								alt={ imageAlt || image.alt || '' }
								draggable={ false }
							/>
						) : (
							<div className="fb-hotspot__placeholder">
								<span className="fb-hotspot__placeholder-text">
									{ __( 'Select an image in the sidebar', 'frontis-blocks' ) }
								</span>
							</div>
						) }

						{ hotspots.map( ( hotspot, index ) => (
							<HotspotPin
								key={ hotspot.id || index }
								hotspot={ hotspot }
								index={ index }
								preset={ markerPreset }
								onChange={ ( updated ) => updateHotspot( index, updated ) }
							/>
						) ) }
					</div>
				</div>
			</div>
		</>
	);
};

// ─── CSS object → string ─────
function buildCSS( { desktop = {}, tablet = {}, mobile = {} } ) {
	const rules = ( obj ) =>
		Object.entries( obj || {} )
			.map( ( [ selector, decls ] ) => {
				const props = Object.entries( decls )
					.filter( ( [ , v ] ) => v !== undefined && v !== null && v !== '' )
					.map( ( [ k, v ] ) => `${ k }:${ v }` )
					.join( ';' );
				return props ? `${ selector }{${ props }}` : '';
			} )
			.filter( Boolean )
			.join( '\n' );

	const tabletCss = rules( tablet );
	const mobileCss = rules( mobile );

	return [
		rules( desktop ),
		tabletCss ? `@media(max-width:1024px){${ tabletCss }}` : '',
		mobileCss ? `@media(max-width:767px){${ mobileCss }}`  : '',
	].filter( Boolean ).join( '\n' );
}

export default Edit;
