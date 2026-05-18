/**
 * Loop builder block variations.
 *
 * Layout presets live in ./variations-templates/ — import each file below and append to the array.
 */
import portraitLayout1 from './variations-templates/portrait-layout-1';
import portraitLayout2 from './variations-templates/portrait-layout-2';
import landscapeLayout from './variations-templates/landscape-layout';
import boxedLayout from './variations-templates/boxed-layout';

const variations = [
	portraitLayout1,
	portraitLayout2,
	landscapeLayout,
	boxedLayout,
];

export default variations;
