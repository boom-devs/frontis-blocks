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
