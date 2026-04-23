const generateCSSVariables = (data, deviceType) => {
    // Helper to find the correct editor document
    const getEditorDocument = () => {
        const path = window.location.pathname;
        const fileName = path.substring(path.lastIndexOf('/') + 1);
        const isPostEditor = fileName === 'post.php' || fileName === 'post-new.php';

        let iframe = null;
        if (isPostEditor) {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
        } else {
            // Site Editor
            iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
        }

        return iframe?.contentDocument || iframe?.contentWindow?.document || document;
    };

    const targetDocument = getEditorDocument();

    const createValueWithUnit = (value, unit) => {
        if (!value || value === 'Default') return '0px';
        return `${value}${unit || ''}`;
    };

    const getValue = (obj, prop, breakpoint = null) => {
        let val = null;
        if (breakpoint) {
            val = obj?.[prop]?.value?.[breakpoint];
        } else {
            val = obj?.[prop]?.value;
        }

        // Handle nested value objects (used by fontFamily/fontWeight occasionally)
        if (typeof val === 'object' && val !== null && val.value !== undefined) {
            return val.value;
        }

        return val || null;
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
                    
                    // Aliasing for backward compatibility
                    if (typoValue.variable.includes('--text-decoration')) {
                        rootStyles += `${typoValue.variable.replace('--text-decoration', '--font-decoration')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--text-transform')) {
                        rootStyles += `${typoValue.variable.replace('--text-transform', '--font-transform')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--letter-spacing')) {
                        rootStyles += `${typoValue.variable.replace('--letter-spacing', '--font-letter-spacing')}: ${value};\n`;
                    }
                    if (typoValue.variable.includes('--line-height')) {
                        rootStyles += `${typoValue.variable.replace('--line-height', '--font-line-height')}: ${value};\n`;
                    }
                }

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'button') {
                    buttonStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'captions') {
                    captionStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'all') {
                    combinedHeadingStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h1') {
                    heading1Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h2') {
                    heading2Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h3') {
                    heading3Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h4') {
                    heading4Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h5') {
                    heading5Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
                }
                if (key === 'h6') {
                    heading6Styles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${typoValue.variable});\n`;
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

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    desktopStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    desktopStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;
                }

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

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    tabletStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    tabletStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
                }
            }

            if (mobileValue !== null) {
                let typoValue = data[key][prop];
                const cssVar = `${typoValue.variable}`;
                mobileStyles += `${cssVar}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;

                // Aliasing for backward compatibility
                if (cssVar.includes('--letter-spacing')) {
                    mobileStyles += `${cssVar.replace('--letter-spacing', '--font-letter-spacing')}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
                }
                if (cssVar.includes('--line-height')) {
                    mobileStyles += `${cssVar.replace('--line-height', '--font-line-height')}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
                }
            }
        });

        // Add fontFamily to target context if not already added
        ['fontFamily'].forEach((prop) => {
            const fontFamily = getValue(data[key], prop);
            if (fontFamily !== null && fontFamily !== 'Default' && !fontFamilies.has(fontFamily)) {
                fontFamilies.add(fontFamily);
            }
        });
    });

    if(fontFamilies.size > 0) {
        const fontFamily = Array.from(fontFamilies).map(font => font.replace(' ', '+')).join('|');
        const fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`;

        // Reuse or create font link tag in the target document
        let linkElement = targetDocument.getElementById('frontis-blocks-google-fonts');
        if (!linkElement) {
            linkElement = targetDocument.createElement('link');
            linkElement.id = 'frontis-blocks-google-fonts';
            linkElement.rel = 'stylesheet';
            targetDocument.head.appendChild(linkElement);
        }
        linkElement.href = fontUrl;
    }

    if(rootStyles === '' && desktopStyles === '' && paragraphStyles === '') {
        return false;
    }

    const path = window.location.pathname;
    const fileName = path.substring(path.lastIndexOf('/') + 1);

    let headingGrouped = '';
    let allCombinedStyles = '';
    let styles = '';

    if(fileName === 'post.php' || fileName === 'post-new.php') {
        headingGrouped = `
            .is-root-container h1, .editor-styles-wrapper h1 {
                ${heading1Styles}
            }
            .is-root-container h2, .editor-styles-wrapper h2 {
                ${heading2Styles}
            }
            .is-root-container h3, .editor-styles-wrapper h3 {
                ${heading3Styles}
            }
            .is-root-container h4, .editor-styles-wrapper h4 {
                ${heading4Styles}
            }
            .is-root-container h5, .editor-styles-wrapper h5 {
                ${heading5Styles}
            }
            .is-root-container h6, .editor-styles-wrapper h6 {
                ${heading6Styles}
            }
        `;

        // Styles for the "all" combined typography
        allCombinedStyles = `
            .is-root-container h1, .editor-styles-wrapper h1 {
                ${combinedHeadingStyles}
            }
            .is-root-container h2, .editor-styles-wrapper h2 {
                ${combinedHeadingStyles}
            }
            .is-root-container h3, .editor-styles-wrapper h3 {
                ${combinedHeadingStyles}
            }
            .is-root-container h4, .editor-styles-wrapper h4 {
                ${combinedHeadingStyles}
            }
            .is-root-container h5, .editor-styles-wrapper h5 {
                ${combinedHeadingStyles}
            }
            .is-root-container h6, .editor-styles-wrapper h6 {
                ${combinedHeadingStyles}
            }
        `;

        styles = `
            :root, .is-root-container, .editor-styles-wrapper {
                ${rootStyles}
                ${desktopStyles}
            }
            @media (max-width: 1024px) {
                :root, .is-root-container, .editor-styles-wrapper {
                    ${tabletStyles}
                }
            }
            @media (max-width: 767px) {
                :root, .is-root-container, .editor-styles-wrapper {
                    ${mobileStyles}
                }
            }

            .is-root-container p, .editor-styles-wrapper p {
                ${paragraphStyles}
            }

            .is-root-container a, .editor-styles-wrapper a, .is-root-container p a, .editor-styles-wrapper p a {
                ${linkStyles}
            }
            .is-root-container .wp-block-button__link, .editor-styles-wrapper .wp-block-button__link {
                ${buttonStyles}
            }
            :root :where(.wp-element-button, .wp-block-button__link), .editor-styles-wrapper :where(.wp-element-button, .wp-block-button__link) {
				${buttonStyles}
            }
            .is-root-container button, .editor-styles-wrapper button {
                ${buttonStyles}
            }

            .is-root-container figcaption, .editor-styles-wrapper figcaption {
                ${captionStyles}
            }
            :root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption), .editor-styles-wrapper :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption) {
                ${captionStyles}
            }
            ${allCombinedStyles}
            ${headingGrouped}
        `;
    } else {

        // Apply individual styles for each heading (h1, h2, h3, etc.)
        headingGrouped = `
            .wp-site-blocks h1, .editor-styles-wrapper h1 {
                ${heading1Styles}
            }
            .wp-site-blocks h2, .editor-styles-wrapper h2 {
                ${heading2Styles}
            }
            .wp-site-blocks h3, .editor-styles-wrapper h3 {
                ${heading3Styles}
            }
            .wp-site-blocks h4, .editor-styles-wrapper h4 {
                ${heading4Styles}
            }
            .wp-site-blocks h5, .editor-styles-wrapper h5 {
                ${heading5Styles}
            }
            .wp-site-blocks h6, .editor-styles-wrapper h6 {
                ${heading6Styles}
            }
        `;

        // Styles for the "all" combined typography
        allCombinedStyles = `
            .wp-site-blocks h1, .editor-styles-wrapper h1,
            .wp-site-blocks h2, .editor-styles-wrapper h2,
            .wp-site-blocks h3, .editor-styles-wrapper h3,
            .wp-site-blocks h4, .editor-styles-wrapper h4,
            .wp-site-blocks h5, .editor-styles-wrapper h5,
            .wp-site-blocks h6, .editor-styles-wrapper h6 {
                ${combinedHeadingStyles}
            }
        `;

        styles = `
            :root, .wp-site-blocks, .editor-styles-wrapper {
                ${rootStyles}
                ${desktopStyles}
            }
            @media (max-width: 1024px) {
                :root, .wp-site-blocks, .editor-styles-wrapper {
                    ${tabletStyles}
                }
            }
            @media (max-width: 767px) {
                :root, .wp-site-blocks, .editor-styles-wrapper {
                    ${mobileStyles}
                }
            }

            .wp-site-blocks p, .editor-styles-wrapper p {
                ${paragraphStyles}
            }

            .wp-site-blocks a, .editor-styles-wrapper a, .wp-site-blocks p a, .editor-styles-wrapper p a {
                ${linkStyles}
            }

            .wp-site-blocks .wp-block-button__link, .editor-styles-wrapper .wp-block-button__link, .wp-site-blocks button, .editor-styles-wrapper button {
                ${buttonStyles}
            }

            .wp-site-blocks figcaption, .editor-styles-wrapper figcaption {
                ${captionStyles}
            }
            :root :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption), .editor-styles-wrapper :where(.wp-element-caption, .wp-block-audio figcaption, .wp-block-embed figcaption, .wp-block-gallery figcaption, .wp-block-image figcaption, .wp-block-table figcaption, .wp-block-video figcaption) {
                ${captionStyles}
            }
            ${allCombinedStyles}
            ${headingGrouped}
        `;
    }

    let styleTag = targetDocument.getElementById("global-typo");

    if (!styleTag) {
        styleTag = targetDocument.createElement("style");
        styleTag.id = "global-typo";
        targetDocument.head.appendChild(styleTag);
    }

    styleTag.textContent = styles;

    // Also update main document if the target was an iframe (to ensure sidebar consistency)
    if (targetDocument !== document) {
        let mainStyleTag = document.getElementById("global-typo");
        if (!mainStyleTag) {
            mainStyleTag = document.createElement("style");
            mainStyleTag.id = "global-typo";
            document.head.appendChild(mainStyleTag);
        }
        mainStyleTag.textContent = styles;
    }

    return styles;
};

export default generateCSSVariables;
