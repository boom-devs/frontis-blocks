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

        // Add fontFamily to iframe context if not already added
        ['fontFamily'].forEach((prop) => {
            const fontFamily = getValue(data[key], prop);
            if (fontFamily !== null && fontFamily !== 'Default' && !fontFamilies.has(fontFamily)) {
                fontFamilies.add(fontFamily);
            }
        });
    });

    if(fontFamilies.size > 0) {
        let iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");

        // If not found, try the editor-canvas iframe
        if (!iframe) {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
        }

        const iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;

        const fontFamily = Array.from(fontFamilies).map(font => font.replace(' ', '+')).join('|');
        const fontUrl = `https://fonts.googleapis.com/css?family=${fontFamily}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`;
        const linkElement = iframeDocument.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = fontUrl;
        iframeDocument.head.appendChild(linkElement);
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
        // // Apply individual styles for each heading (h1, h2, h3, etc.)
        // if(deviceType !== 'Desktop') {

        // } else {
        //     headingGrouped = `
        //         body .editor-visual-editor h1 {
        //             ${heading1Styles}
        //         }
        //         body .editor-visual-editor h2 {
        //             ${heading2Styles}
        //         }
        //         body .editor-visual-editor h3 {
        //             ${heading3Styles}
        //         }
        //         body .editor-visual-editor h4 {
        //             ${heading4Styles}
        //         }
        //         body .editor-visual-editor h5 {
        //             ${heading5Styles}
        //         }
        //         body .editor-visual-editor h6 {
        //             ${heading6Styles}
        //         }
        //     `;

        //     // Styles for the "all" combined typography
        //     allCombinedStyles = `
        //         body .editor-visual-editor h1,
        //         body .editor-visual-editor h2,
        //         body .editor-visual-editor h3,
        //         body .editor-visual-editor h4,
        //         body .editor-visual-editor h5,
        //         body .editor-visual-editor h6 {
        //             ${combinedHeadingStyles}
        //         }
        //     `;

        //     styles = `
        //         :root {
        //             ${rootStyles}
        //             ${desktopStyles}
        //         }
        //         @media (max-width: 1024px) {
        //             :root {
        //                 ${tabletStyles}
        //             }
        //         }
        //         @media (max-width: 767px) {
        //             :root {
        //                 ${mobileStyles}
        //             }
        //         }

        //         body .editor-visual-editor p {
        //             ${paragraphStyles}
        //         }

        //         body .editor-visual-editor a, body .editor-visual-editor p a {
        //             ${linkStyles}
        //         }

        //         body .editor-visual-editor .wp-block-button__link, body .editor-visual-editor button {
        //             ${buttonStyles}
        //         }

        //         body .editor-visual-editor figcaption {
        //             ${captionStyles}
        //         }
        //         ${allCombinedStyles}
        //         ${headingGrouped}
        //     `;
        // }
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

    let iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
    let iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
    let styleTag = iframeDocument.getElementById("global-typo");

    if(fileName === 'post.php') {

        if(deviceType !== 'Desktop') {
            iframe = document.querySelector('iframe[name="editor-canvas"]');
            iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
            styleTag = iframeDocument.getElementById("global-typo");

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
