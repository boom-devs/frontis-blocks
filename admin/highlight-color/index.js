"use strict";

import { addFilter } from '@wordpress/hooks';
import renderFrontisHighlightColor from './render';
addFilter(
	'editor.BlockEdit',
	'frontis-blocks/highlight-color',
	renderFrontisHighlightColor,
);
