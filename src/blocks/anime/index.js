"use strict";

import { addFilter } from '@wordpress/hooks';
import renderFrontisAnime from "./render";
import './editor.scss';

addFilter(
	'editor.BlockEdit',
	'frontis-blocks/anime',
	renderFrontisAnime,
);

/*
* Add anime animation block attributes
 */
function fbAnimeAttributes( settings, name ) {
	if ( settings.attributes ) {
		settings.attributes.frontisAnimeAtt = {
			type: 'string',
			default: ''
		};
		settings.attributes.animeElementInt = {
			type: 'string',
			default: ''
		};
		settings.attributes.animeElementAction = {
			type: 'string',
			default: ''
		};
		settings.attributes.animeElementActionName = {
			type: 'string',
			default: ''
		};
		settings.attributes.animeElementActionActive = {
			type: 'boolean',
			default: true
		};
		settings.attributes.selectedAnimeElementName = {
			type: 'string',
			default: '',
		};
	}
	return settings;
}

addFilter( 'blocks.registerBlockType', 'frontis-blocks/animeAttributes', fbAnimeAttributes );
