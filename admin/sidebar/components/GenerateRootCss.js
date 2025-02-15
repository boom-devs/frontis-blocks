const generateCSSVariables = (data) => {
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

    let rootStyles = '';
    let desktopStyles = '';
    let tabletStyles = '';
    let mobileStyles = '';

    let paragraphStyles = '';
    let linkStyles = '';

    ['body', 'link'].forEach((key) => {
        if (!data[key]) return;

        // Apply global properties (fontFamily, fontWeight, etc.)
        ['fontFamily', 'fontWeight', 'fontStyle', 'fontTransform', 'fontDecoration'].forEach((prop) => {
            const value = getValue(data[key], prop);
            if (value !== null) {
                rootStyles += `--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: ${value};\n`;

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()});\n`;
                }
            }
        });

        // Apply font size, letter spacing, line height
        ['fontSize', 'fontLetterspacing', 'fontLineheight'].forEach((prop) => {
            const desktopValue = getValue(data[key], prop, 'Desktop');
            const tabletValue = getValue(data[key], prop, 'Tablet');
            const mobileValue = getValue(data[key], prop, 'Mobile');

            const desktopUnit = getUnit(data[key], prop, 'Desktop');
            const tabletUnit = getUnit(data[key], prop, 'Tablet');
            const mobileUnit = getUnit(data[key], prop, 'Mobile');

            if (desktopValue !== null) {
                const cssVar = `--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
                desktopStyles += `${cssVar}: ${createValueWithUnit(desktopValue, desktopUnit)};\n`;

                if (key === 'body') {
                    paragraphStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar}) !important;\n`;
                }
                if (key === 'link') {
                    linkStyles += `${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}: var(${cssVar});\n`;
                }
            }
            if (tabletValue !== null) {
                const cssVar = `--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
                tabletStyles += `${cssVar}: ${createValueWithUnit(tabletValue, tabletUnit)};\n`;
            }
            if (mobileValue !== null) {
                const cssVar = `--fb-global-${key}--${prop.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
                mobileStyles += `${cssVar}: ${createValueWithUnit(mobileValue, mobileUnit)};\n`;
            }
        });
    });

    const styles = `
        :root {
            ${rootStyles}
            ${desktopStyles}
        }
        @media (max-width: 991px) {
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

        body .wp-site-blocks a {
            ${linkStyles}
        }
    `;

    const iframe = document.querySelector("iframe.edit-site-visual-editor__editor-canvas");
    const iframeDocument = iframe?.contentDocument || iframe?.contentWindow?.document || document;
    let styleTag = iframeDocument.getElementById("global-typo-test");

    if (!styleTag) {
        styleTag = iframeDocument.createElement("style");
        styleTag.id = "global-typo-test";
        iframeDocument.head.appendChild(styleTag);
    }

    styleTag.innerHTML = styles;

    // const styleElement = document.createElement('style');
    // styleElement.textContent = styles;
    // document.head.appendChild(styleElement);

    return styles;
};

export default generateCSSVariables;
