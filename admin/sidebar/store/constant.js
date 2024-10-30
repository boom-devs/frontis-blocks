/**
 * Store Key
 */
export const STORE_KEY = 'frontis-blocks';

/**
 * Default State
 */
export const DEFAULT_STATE = {
    globalColors: [],
    customColors: [],
    gradientColors: [],
    customGradientColors: [],
    globalTypography: {
        heading: {},
        body: {}
    },
    customCSS: '',
    isLoading: false,
    error: null
};

/**
 * Action Types
 */
export const ActionTypes = {
    // Global Colors
    SET_GLOBAL_COLORS: 'SET_GLOBAL_COLORS',
    SAVE_GLOBAL_COLORS: 'SAVE_GLOBAL_COLORS',
    FETCH_GLOBAL_COLORS: 'FETCH_GLOBAL_COLORS',
    
    // Custom Colors
    SET_CUSTOM_COLORS: 'SET_CUSTOM_COLORS',
    SAVE_CUSTOM_COLORS: 'SAVE_CUSTOM_COLORS',
    FETCH_CUSTOM_COLORS: 'FETCH_CUSTOM_COLORS',
    
    // Gradient Colors
    SET_GRADIENT_COLORS: 'SET_GRADIENT_COLORS',
    SAVE_GRADIENT_COLORS: 'SAVE_GRADIENT_COLORS',
    FETCH_GRADIENT_COLORS: 'FETCH_GRADIENT_COLORS',
    
    // Custom Gradient Colors
    SET_CUSTOM_GRADIENT_COLORS: 'SET_CUSTOM_GRADIENT_COLORS',
    SAVE_CUSTOM_GRADIENT_COLORS: 'SAVE_CUSTOM_GRADIENT_COLORS',
    FETCH_CUSTOM_GRADIENT_COLORS: 'FETCH_CUSTOM_GRADIENT_COLORS',
    
    // Typography
    SET_TYPOGRAPHY: 'SET_TYPOGRAPHY',
    SAVE_TYPOGRAPHY: 'SAVE_TYPOGRAPHY',
    FETCH_TYPOGRAPHY: 'FETCH_TYPOGRAPHY',

    // Custom CSS
    SET_CUSTOM_CSS: 'SET_CUSTOM_CSS',
    SAVE_CUSTOM_CSS: 'SAVE_CUSTOM_CSS',
    
    // UI States
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR'
};

/**
 * Option Keys for WordPress Options
 */
export const OptionKeys = {
    GLOBAL_COLORS: 'global_colors',
    CUSTOM_COLORS: 'custom_colors',
    GRADIENT_COLORS: 'gradient_colors',
    CUSTOM_GRADIENT_COLORS: 'custom_gradient_colors',
    TYPOGRAPHY: 'typography',
    CUSTOM_CSS: 'custom_css'
};

/**
 * Default Values
 */
export const Defaults = {
    GLOBAL_COLORS: [
        {
            name: "Primary Color",
            color: '#f00000',
            slug: 'primary-color',
        },
        {
            name: "Secondary Color",
            color: '#0f0',
            slug: 'secondary-color',
        }
        // ... other default colors
    ],
    GRADIENT_COLORS: [
        {
            color: "linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)",
            name: "Primary Gradient",
            slug: "gradient-primary",
            var: "--fb-gradient-primary"
        }
        // ... other default gradients
    ],
    TYPOGRAPHY: {
        heading: {
            fontFamily: 'inherit',
            fontSize: '16',
            fontSizeUnit: 'px',
            // ... other typography defaults
        },
        body: {
            fontFamily: 'inherit',
            fontSize: '14',
            fontSizeUnit: 'px',
            // ... other typography defaults
        }
    }
};

/**
 * CSS Variable Names
 */
export const CSSVars = {
    GLOBAL_COLORS_PREFIX: '--fb-color-',
    GRADIENT_COLORS_PREFIX: '--fb-gradient-',
    CUSTOM_COLORS_PREFIX: '--fb-custom-color-',
    CUSTOM_GRADIENT_PREFIX: '--fb-custom-gradient-'
};
