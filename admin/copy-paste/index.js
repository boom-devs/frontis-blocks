"use strict";

import { addFilter } from '@wordpress/hooks';
import renderFrontisCopyPaste from './render';
addFilter(
	'editor.BlockEdit',
	'frontis-blocks/copy-paste-style',
	renderFrontisCopyPaste,
);
