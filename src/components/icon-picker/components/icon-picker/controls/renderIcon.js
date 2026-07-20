/**
 * Set inline CSS class.
 *
 * @param {Object} props - The block object.
 * @return {Array} The inline CSS class.
 */

import parseSVG from './parseIcon';

// Cache for memory and active fetch Promise
let fetchPromise = null;
let memoryCache = null;

// Function to check if data exists in memory or localStorage
const getDataFromLocalStorage = () => {
    if (memoryCache) {
        return memoryCache;
    }
    try {
        let data = localStorage.getItem('iconData');
        if (data) {
            memoryCache = JSON.parse(data);
            return memoryCache;
        }
    } catch (e) {
        console.error('Error reading iconData from localStorage', e);
    }
    return null;
};

// Fetch SVG icons from the API
const fetchFromApi = () => {
    const siteUrl = window.FrontisBlocksData?.site_url || (typeof window !== 'undefined' ? window.location.origin : '');
    const url = `${siteUrl}/wp-json/wp/v2/frontis-blocks/icons`;

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                memoryCache = data;
                try {
                    localStorage.setItem('iconData', JSON.stringify(data));
                } catch (e) {
                    console.error('Error saving iconData to localStorage', e);
                }
            }
            return data;
        })
        .catch(error => {
            console.error('Error fetching SVG icons:', error);
            return null;
        });
};

function generateSvg(svgArgData) {
    const svgData = svgArgData.svg.solid;
    const width = svgData.width;
    const height = svgData.height;
    const viewBox = svgData.viewBox;
    const elements = svgData.elements;

    // Start the SVG string
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">\n`;

    // Loop through each element and create the appropriate SVG tag
    elements.forEach(element => {
        const type = element.type;
        const attributes = element.attributes;

        // Start the tag for the current SVG element
        svg += `<${type}`;

        // Add each attribute
        for (const attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                svg += ` ${attr}="${attributes[attr]}"`; // Use double quotes for HTML attributes
            }
        }

        // Close the tag for the current SVG element
        svg += " />\n";
    });

    // Close the SVG tag
    svg += "</svg>";

    // Return the complete HTML string
    return svg;
}

// Helper function to process SVG data and return the SVG element
function processSvgData(data, svg, setAttributes, extraProps) {
    // console.log('Data in processSvgData:', data);
    const svgIcon = data;

    if (!svgIcon) {
        console.log('No svgIcon data');
        return null;
    }

    let fontAwesome = svgIcon[svg];

    if (!fontAwesome) {
        // console.log('No fontAwesome data for svg:', svg);
        return null;
    }

    const fontAwesomeSvg = fontAwesome.svg?.brands || fontAwesome.svg?.solid || fontAwesome.svg?.regular;
    if (!fontAwesomeSvg) {
        return null;
    }

    const viewBox = `0 0 ${fontAwesomeSvg.width} ${fontAwesomeSvg.height}`;
    const path = fontAwesomeSvg.path;

    let align = null;

    if (fontAwesome.hasOwnProperty('custom_icons') && fontAwesome.custom_icons) {
        return generateSvg(fontAwesome);
    } else {
        switch (svg) {
            case 'align-center':
                align = { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M4 2H14V0H4V2ZM0 7H18V5H0V7ZM4 12H14V10H4V12Z' };
                break;
            case 'align-left':
                align = { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 2H0V0H10V2ZM18 7H0V5H18V7ZM10 12H0V10H10V12Z' };
                break;
            case 'align-right':
                align = { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8 2H18V0H8V2ZM0 7H18V5H0V7ZM8 12H18V10H8V12Z' };
                break;
            case 'align-justify':
                align = { d: 'M0 0H18V2H0V0ZM0 5.00001H18V7.00001H0V5.00001ZM0 10H18V12H0V10Z' };
                break;
        }

        if (align) {
            return (
                <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                    <path {...align} />
                </svg>
            );
        }

        return !setAttributes || setAttributes === 'not_set' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...extraProps}>
                <path d={path}></path>
            </svg>
        ) : (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} {...extraProps}>
                <path d={path}></path>
            </svg>
        );
    }
}

// Get data from localStorage or fetch from API
function renderSVG(svg, setAttributes = false, extraProps = {}) {
    svg = parseSVG(svg);

    // console.log('renderSVG called with:', svg);
    let data = getDataFromLocalStorage();
    // console.log('Data from localStorage:', data);

    // If data exists in localStorage, process it immediately
    if (data) {
        return processSvgData(data, svg, setAttributes, extraProps);
    }

    // If no data and no ongoing fetch, start a new fetch
    if (!fetchPromise) {
        fetchPromise = fetchFromApi().finally(() => {
            fetchPromise = null;
        });
    }

    return null; // Return null while fetching
}

export default renderSVG;