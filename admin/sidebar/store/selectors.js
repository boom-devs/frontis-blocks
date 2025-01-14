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


export const getTypographies = (state) => 
    Array.isArray(state.typographies) ? state.typographies : [];

export const getTypography = (state, slug) => 
    Array.isArray(state.typographies) 
        ? state.typographies.find(typography => typography.slug === slug)
        : null;