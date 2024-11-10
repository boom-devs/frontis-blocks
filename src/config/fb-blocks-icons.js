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
			viewBox: '0 0 100 100', 
			style: { enableBackground: 'new 0 0 100 100' }, 
			'xml:space': 'preserve',
			className: 'fb-editor-icons'
		},
		fb('style', { type: 'text/css' }, '.st0{fill:none;stroke:#399CFF;stroke-width:3;stroke-miterlimit:10;}'),
		fb('g', null,
			fb('path', { className: 'st0', d: 'M88,72H67.5V28H88c5.5,0,10,4.5,10,10v24C98,67.5,93.5,72,88,72z' }),
			fb('path', { className: 'st0', d: 'M60.5,72H12C6.5,72,2,67.5,2,62V38c0-5.5,4.5-10,10-10h48.5V72z' }),
			fb('line', { className: 'st0', x1: '60.5', y1: '28', x2: '60.5', y2: '72' }),
			fb('path', { className: 'st0', d: 'M70.5,18c-5.5,0-10,4.5-10,10c0-5.5-4.5-10-10-10H70.5z' }),
			fb('path', { className: 'st0', d: 'M50.5,82c5.5,0,10-4.5,10-10c0,5.5,4.5,10,10,10H50.5z' }),
			fb('g', null,
				fb('path', { d: 'M21.1,60v-0.6c0.6,0,1-0.1,1.3-0.2c0.3-0.1,0.5-0.3,0.6-0.7c0.1-0.3,0.2-0.8,0.2-1.5V43c0-0.7-0.1-1.2-0.2-1.5c-0.1-0.3-0.3-0.6-0.6-0.7c-0.3-0.1-0.7-0.2-1.3-0.2V40c0.5,0,1.2,0,2,0.1c0.8,0,1.8,0,2.7,0c0.8,0,1.7,0,2.5,0c0.8,0,1.5,0,2-0.1v0.6c-0.6,0-1,0.1-1.3,0.2c-0.3,0.1-0.5,0.3-0.6,0.7c-0.1,0.3-0.1,0.8-0.1,1.5v14c0,0.7,0.1,1.2,0.2,1.5c0.1,0.3,0.3,0.6,0.6,0.7s0.7,0.2,1.3,0.2V60c-0.5,0-1.2-0.1-2-0.1c-0.8,0-1.6,0-2.5,0c-1,0-1.9,0-2.7,0C22.3,59.9,21.6,60,21.1,60z M26.2,50.2v-0.6h11.2v0.6H26.2z M33.1,60v-0.6c0.6,0,1-0.1,1.3-0.2s0.5-0.3,0.6-0.7c0.1-0.3,0.2-0.8,0.2-1.5V43c0-0.7-0.1-1.2-0.2-1.5c-0.1-0.3-0.3-0.6-0.6-0.7c-0.3-0.1-0.7-0.2-1.3-0.2V40c0.5,0,1.3,0,2.1,0.1c0.9,0,1.7,0,2.6,0c0.9,0,1.8,0,2.6,0c0.8,0,1.4,0,1.9-0.1v0.6c-0.6,0-1,0.1-1.3,0.2c-0.3,0.1-0.5,0.3-0.6,0.7c-0.1,0.3-0.1,0.8-0.1,1.5v14c0,0.7,0.1,1.2,0.2,1.5c0.1,0.3,0.3,0.6,0.6,0.7s0.7,0.2,1.3,0.2V60c-0.5,0-1.1-0.1-1.9-0.1c-0.8,0-1.7,0-2.6,0c-0.9,0-1.7,0-2.6,0C34.4,59.9,33.7,60,33.1,60z' })
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
