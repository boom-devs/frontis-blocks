/**
 * Block Icons
 */

import { createElement as fb } from '@wordpress/element';
const iconColor = '#fff';
const fbBlockColor = '#1d2327';
const noColor = 'none';

const FB_Block_Icons = {
	advanced_heading: fb(
		'svg',
		{ 
			version: '1.1', 
			id: 'Layer_1', 
			xmlns: 'http://www.w3.org/2000/svg', 
			'xmlns:xlink': 'http://www.w3.org/1999/xlink', 
			x: '0px', 
			y: '0px',
			viewBox: '0 0 24 24', 
			style: { enableBackground: 'new 0 0 24 24' }, 
			'xml:space': 'preserve',
			className: 'fb-editor-icons'
		},
		fb('style', { type: 'text/css' }, `
			.st0{fill:#399CFF;}
		`),
		fb('g', null,
			fb('g', null,
				fb('path', { className: 'st0', d: 'M21.2,18.2h-4.1V5.7h4.1C22.8,5.7,24,7,24,8.5v7C24,17,22.8,18.2,21.2,18.2z M18.7,16.7h2.6c0.7,0,1.2-0.6,1.2-1.2v-7c0-0.7-0.6-1.2-1.2-1.2h-2.6V16.7z' })
			),
			fb('g', null,
				fb('path', { className: 'st0', d: 'M15.5,18.2H2.8C1.2,18.2,0,17,0,15.5v-7C0,7,1.2,5.7,2.8,5.7h12.8V18.2z M2.8,7.2c-0.7,0-1.2,0.6-1.2,1.2v7c0,0.7,0.6,1.2,1.2,1.2H14V7.2H2.8z' })
			),
			fb('g', null,
				fb('path', { className: 'st0', d: 'M15.5,7.3H14c0-1.8-1.5-3.2-3.3-3.2V2.6h8v1.5C17,4.1,15.5,5.5,15.5,7.3z M14.2,4.1c0.2,0.2,0.4,0.4,0.5,0.7c0.2-0.2,0.3-0.5,0.5-0.7H14.2z' })
			),
			fb('g', null,
				fb('path', { className: 'st0', d: 'M18.8,21.4h-8v-1.5c1.8,0,3.2-1.5,3.2-3.2h1.5c0,1.8,1.5,3.2,3.2,3.2V21.4z M14.2,19.9h1.1c-0.2-0.2-0.4-0.4-0.5-0.7C14.6,19.5,14.4,19.7,14.2,19.9z' })
			),
			fb('g', null,
				fb('path', { className: 'st0', d: 'M5.2,14.4v-0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1-0.1,0.1-0.2c0-0.1,0-0.2,0-0.4v-3.4c0-0.2,0-0.3,0-0.4c0-0.1-0.1-0.1-0.1-0.2c-0.1,0-0.2,0-0.3-0.1V9.6c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.5,0v0.1c-0.1,0-0.2,0-0.3,0.1C7,9.8,7,9.9,7,10c0,0.1,0,0.2,0,0.4v3.4c0,0.2,0,0.3,0,0.4c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.2,0,0.3,0.1v0.1c-0.1,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0C5.5,14.4,5.3,14.4,5.2,14.4z' }),
				fb('rect', { x: '6.4', y: '11.7', className: 'st0', width: '2.7', height: '0.5' }),
				fb('path', { className: 'st0', d: 'M8.1,14.4v-0.1c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1-0.1,0.1-0.2c0-0.1,0-0.2,0-0.4v-3.4c0-0.2,0-0.3,0-0.4c0-0.1-0.1-0.1-0.1-0.2c-0.1,0-0.2,0-0.3-0.1V9.6c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0,0.6,0c0.2,0,0.3,0,0.5,0v0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0-0.1,0.1-0.1,0.2c0,0.1,0,0.2,0,0.4v3.4c0,0.2,0,0.3,0,0.4c0,0.1,0.1,0.1,0.1,0.2c0.1,0,0.2,0,0.3,0.1v0.1c-0.1,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4,0-0.6,0C8.4,14.4,8.2,14.4,8.1,14.4z' })
			)
		)
	),
	advanced_image: fb(
		'svg',
		{ 
			version: '1.1', 
			id: 'Layer_1', 
			xmlns: 'http://www.w3.org/2000/svg', 
			'xmlns:xlink': 'http://www.w3.org/1999/xlink', 
			x: '0px', 
			y: '0px',
			viewBox: '0 0 100 100', 
			style: { enableBackground: 'new 0 0 100 100' }, 
			'xml:space': 'preserve',
			className: 'uagb-editor-icons'
		},
		fb('style', { type: 'text/css' }, '.st0{fill:none;stroke:#399CFF;stroke-width:3;stroke-miterlimit:10;}.st1{fill:none;stroke:#399CFF;stroke-width:2;stroke-miterlimit:10;}'),
		fb('g', null,
			fb('path', { className: 'st0', d: 'M42,56.49H8c-1.66,0-3-1.34-3-3v-20c0-1.66,1.34-3,3-3h34c1.66,0,3,1.34,3,3v20C45,55.15,43.66,56.49,42,56.49z' }),
			fb('path', { className: 'st0', d: 'M5,51.49l3.38-3.38c1.58-1.58,4.15-1.58,5.74,0l0,0c1.58,1.58,4.15,1.58,5.74,0l8.64-8.64c1.65-1.65,4.34-1.57,5.9,0.17L45,51.49' }),
			fb('path', { className: 'st0', d: 'M92,56.49H58c-1.66,0-3-1.34-3-3v-20c0-1.66,1.34-3,3-3h34c1.66,0,3,1.34,3,3v20C95,55.15,93.66,56.49,92,56.49z' }),
			fb('path', { className: 'st0', d: 'M55,51.49l3.38-3.38c1.58-1.58,4.15-1.58,5.74,0l0,0c1.58,1.58,4.15,1.58,5.74,0l8.64-8.64c1.65-1.65,4.34-1.57,5.9,0.17L95,51.49' }),
			fb('circle', { className: 'st1', cx: '8', cy: '66.51', r: '3' }),
			fb('path', { className: 'st1', d: 'M33.5,69.51H18c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h15.5c1.66,0,3,1.34,3,3v0C36.5,68.16,35.16,69.51,33.5,69.51z' }),
			fb('g', null,
				fb('circle', { className: 'st1', cx: '58', cy: '66.51', r: '3' }),
				fb('path', { className: 'st1', d: 'M83.5,69.51H68c-1.66,0-3-1.34-3-3v0c0-1.66,1.34-3,3-3h15.5c1.66,0,3,1.34,3,3v0C86.5,68.16,85.16,69.51,83.5,69.51z' })
			)
		)
	),
};

export const renderFbBlockIcon = ( blockName ) => (
	<>
		{ FB_Block_Icons[ blockName ] }
		<div className="fb-icon--block-inserter-label">Legacy</div>
	</>
);

export default FB_Block_Icons;
