import { createReduxStore, register } from '@wordpress/data';
import { getGlobalStyle, updateGlobalStyle } from '../fetch';

const STORE_NAME = 'frontis-blocks/global-styles';

const DEFAULT_STATE = {
  colors: [],
  typography: {},
  shadeSteps: {}, // Store shade steps for each color
};

const actions = {
  setColors(colors) {
    return {
      type: 'SET_COLORS',
      colors: Array.isArray(colors) ? colors : [],
    };
  },
  *updateColor(slug, color, shadeStep) {
    try {
      const result = yield {
        type: 'SAVE_TO_API',
        data: { slug, color, shadeStep }
      };

      if (result.success) {
        return {
          type: 'UPDATE_COLOR',
          slug,
          color,
          shadeStep,
        };
      }
      
      console.error('Color update failed:', result.data);
      // Return current state action to prevent undefined state
      return { type: 'COLOR_UPDATE_FAILED' };
    } catch (error) {
      console.error('Color update error:', error);
      // Return current state action to prevent undefined state
      return { type: 'COLOR_UPDATE_FAILED' };
    }
  },
  setTypography(typography) {
    return {
      type: 'SET_TYPOGRAPHY',
      typography,
    };
  },
  updateTypography(key, value) {
    return {
      type: 'UPDATE_TYPOGRAPHY',
      key,
      value,
    };
  },
  setShadeStep(slug, step) {
    return {
      type: 'SET_SHADE_STEP',
      slug,
      step,
    };
  },
};

const store = createReduxStore(STORE_NAME, {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case 'SET_COLORS':
        return {
          ...state,
          colors: Array.isArray(action.colors) ? action.colors : [],
        };
      case 'UPDATE_COLOR':
        return {
          ...state,
          colors: Array.isArray(state.colors) 
            ? state.colors.map((color) =>
                color.slug === action.slug
                  ? { ...color, color: action.color }
                  : color
              )
            : [],
          shadeSteps: {
            ...state.shadeSteps,
            [action.slug]: action.shadeStep || state.shadeSteps[action.slug],
          },
        };
      case 'SET_TYPOGRAPHY':
        return {
          ...state,
          typography: action.typography || {},
        };
      case 'UPDATE_TYPOGRAPHY':
        return {
          ...state,
          typography: {
            ...state.typography,
            [action.key]: action.value,
          },
        };
      case 'SET_SHADE_STEP':
        return {
          ...state,
          shadeSteps: {
            ...state.shadeSteps,
            [action.slug]: action.step,
          },
        };
      default:
        return state;
    }
  },

  actions,

  selectors: {
    getColors(state) {
      return Array.isArray(state.colors) ? state.colors : [];
    },
    getColor(state, slug) {
      return Array.isArray(state.colors) 
        ? state.colors.find((color) => color.slug === slug)
        : null;
    },
    getTypography(state) {
      return state.typography || {};
    },
    getShadeStep(state, slug) {
      return state.shadeSteps[slug] || 500;
    },
  },

  controls: {
    FETCH_FROM_API(action) {
      return getGlobalStyle();
    },
    SAVE_TO_API(action) {
      return updateGlobalStyle(action.data);
    },
  },

  resolvers: {
    *getColors() {
      const colors = yield { type: 'FETCH_FROM_API' };
      return actions.setColors(Array.isArray(colors.data) ? colors.data : []);
    },
    *getTypography() {
      const typography = yield { type: 'FETCH_FROM_API' };
      return actions.setTypography(typography.data || {});
    },
  },
});

// Register the store
register(store);

export { STORE_NAME };
export default store; 