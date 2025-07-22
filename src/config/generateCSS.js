function generateCSS(
	selectorsObj,
	id,
	isResponsive = false, // eslint-disable-line no-unused-vars
	responsiveType = '', // eslint-disable-line no-unused-vars
	isOverride = false,
	updatedContainerWidth = '',
) {
	let gen_styling_css = '';

	for ( const selector in selectorsObj ) {
		const cssProps = selectorsObj[ selector ];
		let css = '';

		for ( const property in cssProps ) {
			if (
				typeof cssProps[ property ] === 'undefined' ||
				cssProps[ property ] === null ||
				cssProps[ property ]?.length === 0
			) {
				continue;
			}

			const propertyValue = cssProps[ property ];

			if ( 'font-family' === property && 'Default' === propertyValue ) {
				continue;
			}

			if ( 'font-family' === property ) {
				css += property + ': ' + "'" + propertyValue + "'" + ';';
			} else {
				css += property + ': ' + propertyValue + ';';
			}
		}

		let tabletBreakpoint = FrontisBlocksData.tablet_breakpoint;
		let mobileBreakpoint = FrontisBlocksData.mobile_breakpoint;

		if ( isOverride ) {
			tabletBreakpoint = updatedContainerWidth;
			mobileBreakpoint = updatedContainerWidth;
		}

		if ( css.length !== 0 ) {
			if ( responsiveType === 'tablet' ) {
				gen_styling_css += '@media only screen and (max-width: ' + tabletBreakpoint + 'px) {';
				gen_styling_css += id;
				gen_styling_css += selector + '{';
				gen_styling_css += css;
				gen_styling_css += '}}';
			} else if ( responsiveType === 'mobile' ) {
				gen_styling_css += '@media only screen and (max-width: ' + mobileBreakpoint + 'px) {';
				gen_styling_css += id;
				gen_styling_css += selector + '{';
				gen_styling_css += css;
				gen_styling_css += '}}';
			} else {
				gen_styling_css += id;
				gen_styling_css += selector + '{';
				gen_styling_css += css;
				gen_styling_css += '}';
			}
		}
	}

	return gen_styling_css;
}

export default generateCSS;
