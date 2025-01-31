// store/selectors.js
export const getItems = (state) => state.items;
export const isLoading = (state) => state.loading;
export const getColors = (state) => 
  Array.isArray(state.colors) ? state.colors : [];

export const getColor = (state, slug) => 
  Array.isArray(state.colors) 
    ? state.colors.find(color => color.slug === slug)
    : null;

export const getShadeStep = (state, slug) => 
    state.shadeSteps[ slug ] || 500;

export const getTypographies = (state) => {
    // Return the typography object directly if it exists, otherwise return empty object with default structure
    return state.typographies || {
        body: {
            fontFamily: '',
            fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
            fontWeight: '',
            fontStyle: '',
            textTransform: '',
            textDecoration: '',
            lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
            letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
        },
        link: {
            fontFamily: '',
            fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
            fontWeight: '',
            fontStyle: '',
            textTransform: '',
            textDecoration: '',
            lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
            letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
        },
        button: {
            fontFamily: '',
            fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
            fontWeight: '',
            fontStyle: '',
            textTransform: '',
            textDecoration: '',
            lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
            letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
        },
        heading: {
            h1: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            },
            h2: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            },
            h3: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            },
            h4: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            },
            h5: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            },
            h6: {
                fontFamily: '',
                fontSize: { Desktop: 0, Tablet: 0, Mobile: 0 },
                fontWeight: '',
                fontStyle: '',
                textTransform: '',
                textDecoration: '',
                lineHeight: { Desktop: 0, Tablet: 0, Mobile: 0 },
                letterSpacing: { Desktop: 0, Tablet: 0, Mobile: 0 }
            }
        }
    };
};

export const getTypography = (state, element) => {
    const typographies = getTypographies(state);
    if (element.startsWith('h')) {
        return typographies?.heading?.[element] || null;
    }
    return typographies?.[element] || null;
};