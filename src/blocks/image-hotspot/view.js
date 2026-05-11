/**
 * Frontend interactions for frontis-blocks/image-hotspot.
 */

const CART_ENDPOINT = '?wc-ajax=add_to_cart';

const formatQuantity = ( value ) => String( value ).padStart( 2, '0' );

const getCartEndpoint = () => {
	if ( window.wc_add_to_cart_params?.wc_ajax_url ) {
		return window.wc_add_to_cart_params.wc_ajax_url.replace( '%%endpoint%%', 'add_to_cart' );
	}

	return CART_ENDPOINT;
};

const initSlider = ( slider ) => {
	const slides = Array.from( slider.querySelectorAll( '.fb-hotspot__tooltip-slide' ) );
	const dots = Array.from( slider.querySelectorAll( '.fb-hotspot__tooltip-slider-dot' ) );

	if ( slides.length < 2 || ! dots.length ) {
		return;
	}

	const activate = ( index ) => {
		slides.forEach( ( slide, slideIndex ) => {
			slide.classList.toggle( 'is-active', slideIndex === index );
		} );

		dots.forEach( ( dot, dotIndex ) => {
			const isActive = dotIndex === index;
			dot.classList.toggle( 'is-active', isActive );
			dot.setAttribute( 'aria-selected', isActive ? 'true' : 'false' );
		} );

		slider.dataset.activeSlide = String( index );
	};

	dots.forEach( ( dot ) => {
		dot.addEventListener( 'click', () => {
			activate( Number( dot.dataset.slideTarget || 0 ) );
		} );
	} );
};

const initQuantity = ( quantity ) => {
	const value = quantity.querySelector( '.fb-hotspot__tooltip-quantity-value' );
	const buttons = quantity.querySelectorAll( '.fb-hotspot__tooltip-quantity-button' );

	if ( ! value || ! buttons.length ) {
		return;
	}

	buttons.forEach( ( button ) => {
		button.addEventListener( 'click', () => {
			const step = Number( button.dataset.step || 0 );
			const current = Number( quantity.dataset.quantity || 1 );
			const next = Math.max( 1, current + step );

			quantity.dataset.quantity = String( next );
			value.textContent = formatQuantity( next );
		} );
	} );
};

const initCartButton = ( button ) => {
	button.addEventListener( 'click', async () => {
		const productId = Number( button.dataset.productId || 0 );
		const item = button.closest( '.fb-hotspot__item' );
		const quantity = Number( item?.querySelector( '.fb-hotspot__tooltip-quantity' )?.dataset.quantity || 1 );

		if ( ! productId || button.disabled ) {
			return;
		}

		const defaultText = button.dataset.defaultText || button.textContent;
		const formData = new FormData();
		formData.append( 'product_id', String( productId ) );
		formData.append( 'quantity', String( Math.max( 1, quantity ) ) );

		button.disabled = true;
		button.textContent = window.wp?.i18n?.__( 'Adding...', 'frontis-blocks' ) || 'Adding...';

		try {
			const response = await fetch( getCartEndpoint(), {
				method: 'POST',
				body: formData,
				credentials: 'same-origin',
			} );
			const data = await response.json();

			if ( data?.error ) {
				throw new Error( data.product_url || 'Add to cart failed.' );
			}

			if ( window.jQuery && data?.fragments ) {
				window.jQuery( document.body ).trigger( 'added_to_cart', [ data.fragments, data.cart_hash, window.jQuery( button ) ] );
			}

			button.textContent = window.wp?.i18n?.__( 'Added', 'frontis-blocks' ) || 'Added';
			window.setTimeout( () => {
				button.textContent = defaultText;
			}, 1600 );
		} catch ( error ) {
			button.textContent = window.wp?.i18n?.__( 'View Product', 'frontis-blocks' ) || 'View Product';
		} finally {
			button.disabled = false;
		}
	} );
};

const initHotspot = ( root ) => {
	root.querySelectorAll( '.fb-hotspot__tooltip-slider' ).forEach( initSlider );
	root.querySelectorAll( '.fb-hotspot__tooltip-quantity' ).forEach( initQuantity );
	root.querySelectorAll( '.fb-hotspot__tooltip-cta--cart' ).forEach( initCartButton );
};

document.addEventListener( 'DOMContentLoaded', () => {
	document.querySelectorAll( '.fb-image-hotspot-block' ).forEach( initHotspot );
} );
