const generateCSSVariables = (data, deviceType) => {

    const createValueWithUnit = (value, unit) => {
        if (!value || value === 'Default') return '0px';
        return `${value}${unit || ''}`;
    };

    const getValue = (obj, prop, breakpoint = null) => {
        if (breakpoint) {
            return obj?.[prop]?.value?.[breakpoint] || null;
        }
        return obj?.[prop]?.value || null;
    };

    const getUnit = (obj, prop, breakpoint) => {
        return obj?.[prop]?.unit?.[breakpoint] || obj?.[prop]?.unit || '';
    };

    const fontFamilies = new Set(); // to track added font families

    let rootStyles = '';
    let desktopStyles = '';
    let tabletStyles = '';
    let mobileStyles = '';

    let paragraphStyles = '';
    let linkStyles = '';
    let buttonStyles = '';
    let captionStyles = '';
    let heading1Styles = '';
    let heading2Styles = '';
    let heading3Styles = '';
    let heading4Styles = '';
    let heading5Styles = '';
    let heading6Styles = '';

    let combinedHeadingStyles = ''; // Combined styles for "all" headings
    if(!data) {
        return false;
    }
    const arrayKeys = Object.keys(data);

    // Loop through the data to generate CSS for each tag
    arrayKeys.forEach((key) => {
        if (!data[key]) return;

        // Apply global properties (fontFamily, fontWeight, etc.)
        ['fontFamily', 'fontWeight', 'fontStyle', 'textTransform', 'textDecoration'].forEach((prop) => {
            const value = getValue(data[key], prop);
            let typoValue = data[key][prop];

            if (value !== null) {

                if(typoValue) {
                    rootStyles += `${typoValue.variable}: ${value};\n`;
                }

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'button') {
                    buttonStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'captions') {
                    captionStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'all') {
                    combinedHeadingStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h1') {
                    heading1Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h2') {
                    heading2Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h3') {
                    heading3Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h4') {
                    heading4Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h5') {
                    heading5Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'h6') {
                    heading6Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
            }
        });

        // Apply font size, letter spacing, line height
        ['fontSize', 'letterSpacing', 'lineHeight'].forEach((prop) => {
            const desktopValue = getValue(data[key], prop, 'Desktop');
            const tabletValue = getValue(data[key], prop, 'Tablet');
            const mobileValue = getValue(data[key], prop, 'Mobile');

            const desktopUnit = getUnit(data[key], prop, 'Desktop');
            const tabletUnit = getUnit(data[key], prop, 'Tablet');
            const mobileUnit = getUnit(data[key], prop, 'Mobile');

            if (desktopValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                desktopStyles += `${cssVar}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'button') {
                    buttonStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'captions') {
                    captionStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'all') {
                    combinedHeadingStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h1') {
                    heading1Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h2') {
                    heading2Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h3') {
                    heading3Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h4') {
                    heading4Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h5') {
                    heading5Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
                if (key === 'h6') {
                    heading6Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
            }

            if (tabletValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                tabletStyles += `${cssVar}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
            }

            if (mobileValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                mobileStyles += `${cssVar}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
            }
        });

        // Add fontFamily to iframe context if not already added
        ['fontFamily'].forEach((prop) => {
            const fontFamily = getValue(data[key], prop);
            if (fontFamily !== null && !fontFamilies.has(fontFamily)) {
                fontFamilies.add(fontFamily);

                let iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");

                // If not found, try the editor-canvas iframe
                if (!iframe) {
                    iframe = document.querySelector('iframe[name="editor-canvas"]');
                }

                const iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;

                // Generate font URL and add to the iframe's document
                const fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily.replace(' ', '+')}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`;
                const linkElement = iframeDocument.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = fontUrl;
                iframeDocument.head.appendChild(linkElement);
            }
        });
    });

    if(paragraphStyles === '') {
        return false;
    }

    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);

    let headingGrouped = '';
    let allCombinedStyles = '';
    let styles = '';

    if(fileName === 'post.php') {
        headingGrouped = `
            body .is-root-container h1 {
                ${heading1Styles}
            }
            body .is-root-container h2 {
                ${heading2Styles}
            }
            body .is-root-container h3 {
                ${heading3Styles}
            }
            body .is-root-container h4 {
                ${heading4Styles}
            }
            body .is-root-container h5 {
                ${heading5Styles}
            }
            body .is-root-container h6 {
                ${heading6Styles}
            }
        `;

        // Styles for the "all" combined typography
        allCombinedStyles = `
            body .is-root-container h1{
                ${combinedHeadingStyles}
            }
            body .is-root-container h2{
                ${combinedHeadingStyles}
            }
            body .is-root-container h3{
                ${combinedHeadingStyles}
            }
            body .is-root-container h4{
                ${combinedHeadingStyles}
            }
            body .is-root-container h5{
                ${combinedHeadingStyles}
            }
            body .is-root-container h6 {
                ${combinedHeadingStyles}
            }
        `;

        styles = `
            :root {
                ${rootStyles}
                ${desktopStyles}
            }
            @media (max-width: 1024px) {
                :root {
                    ${tabletStyles}
                }
            }
            @media (max-width: 767px) {
                :root {
                    ${mobileStyles}
                }
            }

            body .is-root-container p {
                ${paragraphStyles}
            }

            body .is-root-container a{
                ${linkStyles}
            }
            body .is-root-container p a {
                ${linkStyles}
            }
            body .is-root-container .wp-block-button__link {
                ${buttonStyles}
            }
            :root :where(.wp-element-button, .wp-block-button__link) {
				${buttonStyles}
            }
            body .is-root-container button {
                ${buttonStyles}
            }

            body .is-root-container figcaption {
                ${captionStyles}
            }
            :root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption) {
                ${captionStyles}
            }
            ${allCombinedStyles}
            ${headingGrouped}
        `;
    } else {

        // Apply individual styles for each heading (h1, h2, h3, etc.)
        headingGrouped = `
            body .wp-site-blocks h1 {
                ${heading1Styles}
            }
            body .wp-site-blocks h2 {
                ${heading2Styles}
            }
            body .wp-site-blocks h3 {
                ${heading3Styles}
            }
            body .wp-site-blocks h4 {
                ${heading4Styles}
            }
            body .wp-site-blocks h5 {
                ${heading5Styles}
            }
            body .wp-site-blocks h6 {
                ${heading6Styles}
            }
        `;

        // Styles for the "all" combined typography
        allCombinedStyles = `
            body .wp-site-blocks h1,
            body .wp-site-blocks h2,
            body .wp-site-blocks h3,
            body .wp-site-blocks h4,
            body .wp-site-blocks h5,
            body .wp-site-blocks h6 {
                ${combinedHeadingStyles}
            }
        `;

        styles = `
            :root {
                ${rootStyles}
                ${desktopStyles}
            }
            @media (max-width: 1024px) {
                :root {
                    ${tabletStyles}
                }
            }
            @media (max-width: 767px) {
                :root {
                    ${mobileStyles}
                }
            }

            body .wp-site-blocks p {
                ${paragraphStyles}
            }

            body .wp-site-blocks a, body .wp-site-blocks p a {
                ${linkStyles}
            }

            body .wp-site-blocks .wp-block-button__link, body .wp-site-blocks button {
                ${buttonStyles}
            }

            body .wp-site-blocks figcaption {
                ${captionStyles}
            }
            :root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption) {
                ${captionStyles}
            }
            ${allCombinedStyles}
            ${headingGrouped}
        `;
    }

    let iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
    let iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
    let styleTag = iframeDocument.getElementById("global-typo");

    if(fileName === 'post.php') {

        if(deviceType !== 'Desktop') {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
            iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
            styleTag = iframeDocument.getElementById("global-typo");

            console.log("iframeDocument")
            console.log(iframeDocument)
        } else {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
            iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
            styleTag = iframeDocument.getElementById("global-typo");
        }
    }

    if (!styleTag) {
        styleTag = iframeDocument.createElement("style");
        styleTag.id = "global-typo";
        iframeDocument.head.appendChild(styleTag);
    }

    styleTag.innerHTML = styles;

    return styles;
};

export default generateCSSVariables;
