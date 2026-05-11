/**
 * inspector.js
 * Sidebar panel controls for the Image Hotspot block.
 */

import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	Button,
	SelectControl,
	RangeControl,
	TextControl,
	TextareaControl,
	ToggleControl,
	ColorPicker,
	TabPanel,
	BaseControl,
	Flex,
	FlexItem,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { createHotspot, SOCIAL_LINKS } from './constants';

// Shared colour control helper
const ColourControl = ( { label, value, onChange } ) => (
	<BaseControl label={ label }>
		<ColorPicker
			color={ value }
			onChange={ onChange }
			enableAlpha
			defaultValue=""
		/>
	</BaseControl>
);

// Tiny shadow control (horizontal / vertical / blur / spread / colour)
const ShadowControl = ( { label, value = {}, onChange } ) => {
	const update = ( key, val ) => onChange( { ...value, [ key ]: val } );
	return (
		<BaseControl label={ label }>
			<ToggleControl
				label={ __( 'Enable Shadow', 'frontis-blocks' ) }
				checked={ !! value.enabled }
				onChange={ ( v ) => update( 'enabled', v ) }
			/>
			{ value.enabled && (
				<>
					<RangeControl label={ __( 'Horizontal', 'frontis-blocks' ) } value={ value.horizontal ?? 0 } onChange={ ( v ) => update( 'horizontal', v ) } min={ -50 } max={ 50 } />
					<RangeControl label={ __( 'Vertical', 'frontis-blocks' ) }   value={ value.vertical   ?? 4 } onChange={ ( v ) => update( 'vertical',   v ) } min={ -50 } max={ 50 } />
					<RangeControl label={ __( 'Blur', 'frontis-blocks' ) }       value={ value.blur      ?? 12 } onChange={ ( v ) => update( 'blur',       v ) } min={ 0 }   max={ 100 } />
					<RangeControl label={ __( 'Spread', 'frontis-blocks' ) }     value={ value.spread    ?? 0  } onChange={ ( v ) => update( 'spread',     v ) } min={ -50 } max={ 50 } />
					<ColourControl label={ __( 'Colour', 'frontis-blocks' ) } value={ value.color ?? '' } onChange={ ( v ) => update( 'color', v ) } />
				</>
			) }
		</BaseControl>
	);
};

// ─── Hotspot item editor
const HotspotEditor = ( { hotspot, index, markerPreset, onChange, onRemove } ) => {
	const [ open, setOpen ] = useState( index === 0 );
	const update = ( key, val ) => onChange( { ...hotspot, [ key ]: val } );
	const hasProductAction = [ 'product_link', 'add_to_cart' ].includes( hotspot.actionType );
	const updateLink = ( linkIndex, key, val ) => {
		const links = [ ...( hotspot.links || [] ) ];
		links[ linkIndex ] = { ...links[ linkIndex ], [ key ]: val };
		update( 'links', links );
	};
	const updateSlider = ( images ) => {
		const slides = ( Array.isArray( images ) ? images : [ images ] )
			.filter( Boolean )
			.map( ( media ) => ( {
				id: media.id || 0,
				url: media.url || '',
				alt: media.alt || '',
			} ) );

		update( 'tooltipSlider', slides );
	};

	return (
		<div className="fb-hotspot-inspector__item">
			<Flex className="fb-hotspot-inspector__item-header" justify="space-between" align="center" onClick={ () => setOpen( ! open ) }>
				<FlexItem><strong>{ hotspot.title || __( '(untitled)', 'frontis-blocks' ) }</strong></FlexItem>
				<FlexItem>
					<Button isDestructive isSmall onClick={ ( e ) => { e.stopPropagation(); onRemove(); } }>
						{ __( 'Remove', 'frontis-blocks' ) }
					</Button>
				</FlexItem>
			</Flex>

			{ open && (
				<div className="fb-hotspot-inspector__item-content">
					<TextControl
						label={ __( 'Title', 'frontis-blocks' ) }
						value={ hotspot.title }
						onChange={ ( v ) => update( 'title', v ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'frontis-blocks' ) }
						value={ hotspot.description }
						rows={ 3 }
						onChange={ ( v ) => update( 'description', v ) }
					/>

					{/* Position */}
					<RangeControl
						label={ __( 'Horizontal Position (%)', 'frontis-blocks' ) }
						value={ hotspot.positionX }
						onChange={ ( v ) => update( 'positionX', v ) }
						min={ 0 }
						max={ 100 }
					/>
					<RangeControl
						label={ __( 'Vertical Position (%)', 'frontis-blocks' ) }
						value={ hotspot.positionY }
						onChange={ ( v ) => update( 'positionY', v ) }
						min={ 0 }
						max={ 100 }
					/>

					{/* Tooltip position override */}
					<SelectControl
						label={ __( 'Tooltip Position', 'frontis-blocks' ) }
						value={ hotspot.tooltipPosition }
						options={ [
							{ label: __( 'Default', 'frontis-blocks' ), value: '' },
							{ label: __( 'Top', 'frontis-blocks' ),         value: 'top' },
							{ label: __( 'Top Left', 'frontis-blocks' ),    value: 'top-left' },
							{ label: __( 'Top Right', 'frontis-blocks' ),   value: 'top-right' },
							{ label: __( 'Right', 'frontis-blocks' ),       value: 'right' },
							{ label: __( 'Bottom', 'frontis-blocks' ),      value: 'bottom' },
							{ label: __( 'Bottom Left', 'frontis-blocks' ), value: 'bottom-left' },
							{ label: __( 'Bottom Right', 'frontis-blocks' ),value: 'bottom-right' },
							{ label: __( 'Left', 'frontis-blocks' ),        value: 'left' },
						] }
						onChange={ ( v ) => update( 'tooltipPosition', v ) }
					/>

					{/* Marker design override */}
					<SelectControl
						label={ __( 'Marker Design', 'frontis-blocks' ) }
						value={ hotspot.markerDesign }
						options={ [
							{ label: __( 'Default', 'frontis-blocks' ),      value: '' },
							{ label: __( 'Round', 'frontis-blocks' ),        value: 'round' },
							{ label: __( 'Tag', 'frontis-blocks' ),          value: 'tag' },
							{ label: __( 'Target', 'frontis-blocks' ),       value: 'target' },
							{ label: __( 'Pin', 'frontis-blocks' ),          value: 'pin' },
							{ label: __( 'Square Notch', 'frontis-blocks' ), value: 'square-notch' },
						] }
						onChange={ ( v ) => update( 'markerDesign', v ) }
					/>

					{ hotspot.markerDesign === 'round' && (
						<TextControl
							label={ __( 'Marker Text', 'frontis-blocks' ) }
							value={ hotspot.markerText }
							onChange={ ( v ) => update( 'markerText', v ) }
						/>
					) }

					{/* Marker icon class (FontAwesome) */}
					<TextControl
						label={ __( 'Marker Icon Class', 'frontis-blocks' ) }
						value={ hotspot.markerIcon }
						placeholder="fas fa-plus"
						onChange={ ( v ) => update( 'markerIcon', v ) }
					/>

					{/* Animation */}
					<SelectControl
						label={ __( 'Animation', 'frontis-blocks' ) }
						value={ hotspot.animation }
						options={ [
							{ label: __( 'None', 'frontis-blocks' ),  value: 'none' },
							{ label: __( 'Pulse', 'frontis-blocks' ), value: 'pulse' },
							{ label: __( 'Glow', 'frontis-blocks' ),  value: 'glow' },
							{ label: __( 'Float', 'frontis-blocks' ), value: 'float' },
							{ label: __( 'Shrink', 'frontis-blocks' ),value: 'shrink' },
							{ label: __( 'Shake', 'frontis-blocks' ), value: 'shake' },
							{ label: __( 'Swing', 'frontis-blocks' ), value: 'swing' },
						] }
						onChange={ ( v ) => update( 'animation', v ) }
					/>
					{ hotspot.animation !== 'none' && (
						<RangeControl
							label={ __( 'Animation Delay (s)', 'frontis-blocks' ) }
							value={ hotspot.animationInterval }
							onChange={ ( v ) => update( 'animationInterval', v ) }
							min={ 0 }
							max={ 10 }
							step={ 0.1 }
						/>
					) }

					{/* Tooltip media */}
					<SelectControl
						label={ __( 'Tooltip Media', 'frontis-blocks' ) }
						value={ hotspot.tooltipMediaType }
						options={ [
							{ label: __( 'None', 'frontis-blocks' ),         value: '' },
							{ label: __( 'Image', 'frontis-blocks' ),        value: 'image' },
							{ label: __( 'Image Slider', 'frontis-blocks' ), value: 'slider' },
						] }
						onChange={ ( v ) => update( 'tooltipMediaType', v ) }
					/>

					{ hotspot.tooltipMediaType === 'image' && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => update( 'tooltipImage', { id: media.id, url: media.url, alt: media.alt } ) }
								allowedTypes={ [ 'image' ] }
								value={ hotspot.tooltipImage?.id }
								render={ ( { open: openMedia } ) => (
									<>
										{ hotspot.tooltipImage?.url && (
											<img className="fb-hotspot-inspector__media-preview" src={ hotspot.tooltipImage.url } alt="" />
										) }
										<Button isSecondary onClick={ openMedia }>
											{ hotspot.tooltipImage?.url
												? __( 'Replace Image', 'frontis-blocks' )
												: __( 'Select Image', 'frontis-blocks' ) }
										</Button>
									</>
								) }
							/>
						</MediaUploadCheck>
					) }

					{ hotspot.tooltipMediaType === 'slider' && (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ updateSlider }
								allowedTypes={ [ 'image' ] }
								multiple
								gallery
								value={ ( hotspot.tooltipSlider || [] ).map( ( slide ) => slide.id ).filter( Boolean ) }
								render={ ( { open: openMedia } ) => (
									<>
										{ !! hotspot.tooltipSlider?.length && (
											<div className="fb-hotspot-inspector__slider-preview">
												{ hotspot.tooltipSlider.map( ( slide, slideIndex ) => (
													<img key={ slide.id || slideIndex } src={ slide.url } alt="" />
												) ) }
											</div>
										) }
										<Button isSecondary onClick={ openMedia }>
											{ hotspot.tooltipSlider?.length
												? __( 'Replace Slider Images', 'frontis-blocks' )
												: __( 'Select Slider Images', 'frontis-blocks' ) }
										</Button>
										{ !! hotspot.tooltipSlider?.length && (
											<Button
												isDestructive
												onClick={ () => update( 'tooltipSlider', [] ) }
												className="fb-hotspot-inspector__inline-action"
											>
												{ __( 'Clear', 'frontis-blocks' ) }
											</Button>
										) }
									</>
								) }
							/>
						</MediaUploadCheck>
					) }

					{ markerPreset === 'preset-4' && (
						<>
							<ToggleControl
								label={ __( 'Show Social Links', 'frontis-blocks' ) }
								checked={ hotspot.showLinks }
								onChange={ ( v ) => update( 'showLinks', v ) }
							/>
							{ hotspot.showLinks && ( hotspot.links || [] ).map( ( link, li ) => (
								<div key={ li } className="fb-hotspot-inspector__link">
									<TextControl
										label={ `${ __( 'Icon', 'frontis-blocks' ) } ${ li + 1 }` }
										value={ link.icon }
										placeholder="fab fa-facebook-f"
										onChange={ ( v ) => updateLink( li, 'icon', v ) }
									/>
									<TextControl
										label={ `${ __( 'URL', 'frontis-blocks' ) } ${ li + 1 }` }
										value={ link.url }
										onChange={ ( v ) => updateLink( li, 'url', v ) }
									/>
									<ToggleControl
										label={ __( 'Open in new tab', 'frontis-blocks' ) }
										checked={ !! link.isExternal }
										onChange={ ( v ) => updateLink( li, 'isExternal', v ) }
									/>
									<ToggleControl
										label={ __( 'Add nofollow', 'frontis-blocks' ) }
										checked={ !! link.nofollow }
										onChange={ ( v ) => updateLink( li, 'nofollow', v ) }
									/>
								</div>
							) ) }
						</>
					) }

					{ markerPreset === 'preset-3' && (
						<ToggleControl
							label={ __( 'Show Reviews', 'frontis-blocks' ) }
							checked={ hotspot.showReviews }
							onChange={ ( v ) => update( 'showReviews', v ) }
						/>
					) }

					<SelectControl
						label={ __( 'Action', 'frontis-blocks' ) }
						value={ hotspot.actionType }
						options={ [
							{ label: __( 'None', 'frontis-blocks' ),        value: 'none' },
							{ label: __( 'Add to Cart', 'frontis-blocks' ),  value: 'add_to_cart' },
							{ label: __( 'Product Link', 'frontis-blocks' ), value: 'product_link' },
							{ label: __( 'Custom URL', 'frontis-blocks' ),   value: 'custom_url' },
						] }
						onChange={ ( v ) => update( 'actionType', v ) }
					/>
					{ hotspot.actionType === 'custom_url' && (
						<>
							<TextControl
								label={ __( 'Custom URL', 'frontis-blocks' ) }
								value={ hotspot.customUrl }
								onChange={ ( v ) => update( 'customUrl', v ) }
							/>
							<ToggleControl
								label={ __( 'Open in new tab', 'frontis-blocks' ) }
								checked={ !! hotspot.customUrlExternal }
								onChange={ ( v ) => update( 'customUrlExternal', v ) }
							/>
							<ToggleControl
								label={ __( 'Add nofollow', 'frontis-blocks' ) }
								checked={ !! hotspot.customUrlNofollow }
								onChange={ ( v ) => update( 'customUrlNofollow', v ) }
							/>
						</>
					) }
					{ hotspot.actionType !== 'none' && (
						<>
							{ hasProductAction && (
								<TextControl
									label={ __( 'Product ID', 'frontis-blocks' ) }
									type="number"
									value={ hotspot.productId }
									onChange={ ( v ) => update( 'productId', parseInt( v, 10 ) || 0 ) }
								/>
							) }
							<TextControl
								label={ __( 'CTA Text', 'frontis-blocks' ) }
								value={ hotspot.ctaText }
								onChange={ ( v ) => update( 'ctaText', v ) }
							/>
							<TextControl
								label={ __( 'Fallback Price', 'frontis-blocks' ) }
								value={ hotspot.price }
								onChange={ ( v ) => update( 'price', v ) }
							/>
							{ hotspot.actionType === 'add_to_cart' && (
								<RangeControl
									label={ __( 'Default Quantity', 'frontis-blocks' ) }
									value={ hotspot.quantity }
									onChange={ ( v ) => update( 'quantity', v ) }
									min={ 1 }
									max={ 99 }
								/>
							) }
						</>
					) }
				</div>
			) }
		</div>
	);
};

// ─── Main Inspector export
const Inspector = ( { attributes, setAttributes } ) => {
	const {
		image,
		imageAlt,
		markerPreset,
		hotspots,
		markerSize,
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
		tooltipPaddingTop,
		tooltipPaddingRight,
		tooltipPaddingBottom,
		tooltipPaddingLeft,
		tooltipBorderType,
		tooltipBorderWidth,
		tooltipBorderColor,
		tooltipBorderColorHover,
		tooltipBorderRadius,
		tooltipShadow,
		titleFontSize,
		titleFontWeight,
		descriptionFontSize,
		descriptionFontWeight,
	} = attributes;

	// Hotspot helpers
	const updateHotspot = ( index, updated ) => {
		const next = [ ...hotspots ];
		next[ index ] = updated;
		setAttributes( { hotspots: next } );
	};
	const removeHotspot = ( index ) => {
		setAttributes( { hotspots: hotspots.filter( ( _, i ) => i !== index ) } );
	};
	const addHotspot = () => {
		const id = `hotspot-${ Date.now() }`;
		setAttributes( {
			hotspots: [
				...hotspots,
				createHotspot( {
					id,
					title: __( 'New Hotspot', 'frontis-blocks' ),
					description: '',
					links: SOCIAL_LINKS.map( ( link ) => ( { ...link, url: '' } ) ),
				} ),
			],
		} );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'General', 'frontis-blocks' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Layout', 'frontis-blocks' ) }
					value={ markerPreset }
					options={ [
						{ label: __( 'Tag', 'frontis-blocks' ), value: 'preset-1' },
						{ label: __( 'Target', 'frontis-blocks' ), value: 'preset-2' },
						{ label: __( 'Pin', 'frontis-blocks' ), value: 'preset-3' },
						{ label: __( 'Social', 'frontis-blocks' ), value: 'preset-4' },
						{ label: __( 'Custom', 'frontis-blocks' ), value: 'custom' },
					] }
					onChange={ ( v ) => setAttributes( { markerPreset: v } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( 'Image', 'frontis-blocks' ) } initialOpen={ true }>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) =>
							setAttributes( { image: { id: media.id, url: media.url, alt: media.alt || '' } } )
						}
						allowedTypes={ [ 'image' ] }
						value={ image?.id }
						render={ ( { open: openMedia } ) => (
							<PanelRow>
								<div className="fb-hotspot-inspector__media-control">
									{ image?.url && (
										<img
											src={ image.url }
											alt={ image.alt }
											className="fb-hotspot-inspector__media-preview"
										/>
									) }
									<Button isSecondary onClick={ openMedia } className="fb-hotspot-inspector__wide-button">
										{ image?.url
											? __( 'Replace Image', 'frontis-blocks' )
											: __( 'Select Image', 'frontis-blocks' ) }
									</Button>
									{ image?.url && (
										<Button
											isDestructive
											onClick={ () => setAttributes( { image: { id: 0, url: '', alt: '' } } ) }
											className="fb-hotspot-inspector__wide-button fb-hotspot-inspector__stacked-action"
										>
											{ __( 'Remove Image', 'frontis-blocks' ) }
										</Button>
									) }
								</div>
							</PanelRow>
						) }
					/>
				</MediaUploadCheck>
				<TextControl
					label={ __( 'Alt Text Override', 'frontis-blocks' ) }
					value={ imageAlt }
					onChange={ ( v ) => setAttributes( { imageAlt: v } ) }
					placeholder={ __( 'Leave empty to use media alt text', 'frontis-blocks' ) }
				/>
			</PanelBody>

			<PanelBody title={ __( 'Hotspots', 'frontis-blocks' ) } initialOpen={ true }>
				{ hotspots.map( ( hotspot, index ) => (
					<HotspotEditor
						key={ hotspot.id || index }
						hotspot={ hotspot }
						index={ index }
						markerPreset={ markerPreset }
						onChange={ ( updated ) => updateHotspot( index, updated ) }
						onRemove={ () => removeHotspot( index ) }
					/>
				) ) }
				<Button isPrimary onClick={ addHotspot } className="fb-hotspot-inspector__add-button">
					{ __( '+ Add Hotspot', 'frontis-blocks' ) }
				</Button>
			</PanelBody>

			<PanelBody title={ __( 'Marker', 'frontis-blocks' ) } initialOpen={ false }>
				<TabPanel
					tabs={ [
						{ name: 'normal', title: __( 'Normal', 'frontis-blocks' ) },
						{ name: 'hover',  title: __( 'Hover',  'frontis-blocks' ) },
					] }
				>
					{ ( tab ) => tab.name === 'normal' ? (
						<>
							<RangeControl
								label={ __( 'Size (px)', 'frontis-blocks' ) }
								value={ markerSize }
								onChange={ ( v ) => setAttributes( { markerSize: v } ) }
								min={ 20 } max={ 80 }
							/>
							<ColourControl
								label={ __( 'Icon / Text Colour', 'frontis-blocks' ) }
								value={ markerColor }
								onChange={ ( v ) => setAttributes( { markerColor: v } ) }
							/>
							<ColourControl
								label={ __( 'Background Colour', 'frontis-blocks' ) }
								value={ markerBackground }
								onChange={ ( v ) => setAttributes( { markerBackground: v } ) }
							/>
							<SelectControl
								label={ __( 'Border Style', 'frontis-blocks' ) }
								value={ markerBorderType }
								options={ [
									{ label: 'None',   value: 'none' },
									{ label: 'Solid',  value: 'solid' },
									{ label: 'Dashed', value: 'dashed' },
									{ label: 'Dotted', value: 'dotted' },
								] }
								onChange={ ( v ) => setAttributes( { markerBorderType: v } ) }
							/>
							{ markerBorderType !== 'none' && (
								<>
									<RangeControl
										label={ __( 'Border Width (px)', 'frontis-blocks' ) }
										value={ markerBorderWidth }
										onChange={ ( v ) => setAttributes( { markerBorderWidth: v } ) }
										min={ 0 } max={ 10 }
									/>
									<ColourControl
										label={ __( 'Border Colour', 'frontis-blocks' ) }
										value={ markerBorderColor }
										onChange={ ( v ) => setAttributes( { markerBorderColor: v } ) }
									/>
								</>
							) }
							<RangeControl
								label={ __( 'Border Radius (px)', 'frontis-blocks' ) }
								value={ markerBorderRadius }
								onChange={ ( v ) => setAttributes( { markerBorderRadius: v } ) }
								min={ 0 } max={ 100 }
							/>
							<ShadowControl
								label={ __( 'Box Shadow', 'frontis-blocks' ) }
								value={ markerShadow }
								onChange={ ( v ) => setAttributes( { markerShadow: v } ) }
							/>
						</>
					) : (
						<>
							<RangeControl
								label={ __( 'Size (px)', 'frontis-blocks' ) }
								value={ markerSizeHover || '' }
								onChange={ ( v ) => setAttributes( { markerSizeHover: v } ) }
								min={ 20 } max={ 100 }
							/>
							<ColourControl
								label={ __( 'Icon / Text Colour', 'frontis-blocks' ) }
								value={ markerColorHover }
								onChange={ ( v ) => setAttributes( { markerColorHover: v } ) }
							/>
							<ColourControl
								label={ __( 'Background Colour', 'frontis-blocks' ) }
								value={ markerBackgroundHover }
								onChange={ ( v ) => setAttributes( { markerBackgroundHover: v } ) }
							/>
							<ColourControl
								label={ __( 'Border Colour', 'frontis-blocks' ) }
								value={ markerBorderColorHover }
								onChange={ ( v ) => setAttributes( { markerBorderColorHover: v } ) }
							/>
							<ShadowControl
								label={ __( 'Box Shadow', 'frontis-blocks' ) }
								value={ markerShadowHover }
								onChange={ ( v ) => setAttributes( { markerShadowHover: v } ) }
							/>
						</>
					) }
				</TabPanel>
			</PanelBody>

			<PanelBody title={ __( 'Tooltip', 'frontis-blocks' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Width (px)', 'frontis-blocks' ) }
					value={ tooltipWidth }
					onChange={ ( v ) => setAttributes( { tooltipWidth: v } ) }
					min={ 140 } max={ 360 }
				/>
				<ColourControl
					label={ __( 'Background', 'frontis-blocks' ) }
					value={ tooltipBackground }
					onChange={ ( v ) => setAttributes( { tooltipBackground: v } ) }
				/>
				<ColourControl
					label={ __( 'Title Colour', 'frontis-blocks' ) }
					value={ tooltipTitleColor }
					onChange={ ( v ) => setAttributes( { tooltipTitleColor: v } ) }
				/>
				<ColourControl
					label={ __( 'Description Colour', 'frontis-blocks' ) }
					value={ tooltipDescriptionColor }
					onChange={ ( v ) => setAttributes( { tooltipDescriptionColor: v } ) }
				/>

				<BaseControl label={ __( 'Title Typography', 'frontis-blocks' ) }>
					<RangeControl label={ __( 'Font Size (px)', 'frontis-blocks' ) } value={ titleFontSize } onChange={ ( v ) => setAttributes( { titleFontSize: v } ) } min={ 10 } max={ 36 } />
					<SelectControl label={ __( 'Font Weight', 'frontis-blocks' ) } value={ titleFontWeight } options={ [ '300', '400', '500', '600', '700', '800' ].map( ( w ) => ( { label: w, value: w } ) ) } onChange={ ( v ) => setAttributes( { titleFontWeight: v } ) } />
				</BaseControl>
				<BaseControl label={ __( 'Description Typography', 'frontis-blocks' ) }>
					<RangeControl label={ __( 'Font Size (px)', 'frontis-blocks' ) } value={ descriptionFontSize } onChange={ ( v ) => setAttributes( { descriptionFontSize: v } ) } min={ 10 } max={ 24 } />
					<SelectControl label={ __( 'Font Weight', 'frontis-blocks' ) } value={ descriptionFontWeight } options={ [ '300', '400', '500', '600', '700' ].map( ( w ) => ( { label: w, value: w } ) ) } onChange={ ( v ) => setAttributes( { descriptionFontWeight: v } ) } />
				</BaseControl>

				<BaseControl label={ __( 'Padding', 'frontis-blocks' ) }>
					<Flex>
						{ [ [ 'Top', 'tooltipPaddingTop' ], [ 'Right', 'tooltipPaddingRight' ], [ 'Bottom', 'tooltipPaddingBottom' ], [ 'Left', 'tooltipPaddingLeft' ] ].map( ( [ label, key ] ) => (
							<FlexItem key={ key }>
								<TextControl
									label={ label }
									type="number"
									value={ attributes[ key ] }
									onChange={ ( v ) => setAttributes( { [ key ]: parseInt( v, 10 ) || 0 } ) }
									className="fb-hotspot-inspector__compact-input"
								/>
							</FlexItem>
						) ) }
					</Flex>
				</BaseControl>

				<SelectControl
					label={ __( 'Border Style', 'frontis-blocks' ) }
					value={ tooltipBorderType }
					options={ [ { label: 'None', value: 'none' }, { label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' } ] }
					onChange={ ( v ) => setAttributes( { tooltipBorderType: v } ) }
				/>
				{ tooltipBorderType !== 'none' && (
					<>
						<RangeControl label={ __( 'Border Width', 'frontis-blocks' ) } value={ tooltipBorderWidth } onChange={ ( v ) => setAttributes( { tooltipBorderWidth: v } ) } min={ 0 } max={ 10 } />
						<ColourControl label={ __( 'Border Colour', 'frontis-blocks' ) } value={ tooltipBorderColor } onChange={ ( v ) => setAttributes( { tooltipBorderColor: v } ) } />
						<ColourControl label={ __( 'Hover Border Colour', 'frontis-blocks' ) } value={ tooltipBorderColorHover } onChange={ ( v ) => setAttributes( { tooltipBorderColorHover: v } ) } />
					</>
				) }
				<RangeControl
					label={ __( 'Border Radius (px)', 'frontis-blocks' ) }
					value={ tooltipBorderRadius }
					onChange={ ( v ) => setAttributes( { tooltipBorderRadius: v } ) }
					min={ 0 } max={ 50 }
				/>
				<ShadowControl
					label={ __( 'Box Shadow', 'frontis-blocks' ) }
					value={ tooltipShadow }
					onChange={ ( v ) => setAttributes( { tooltipShadow: v } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
