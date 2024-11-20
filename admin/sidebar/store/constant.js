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
    SET_GLOBAL_COLORS: 'fb_set_global_colors',
    SAVE_GLOBAL_COLORS: 'fb_save_global_colors',
    FETCH_GLOBAL_COLORS: 'fb_fetch_global_colors',

    // Custom Colors
    SET_CUSTOM_COLORS: 'fb_set_custom_colors',
    SAVE_CUSTOM_COLORS: 'fb_save_custom_colors',
    FETCH_CUSTOM_COLORS: 'fb_fetch_custom_colors',

    // Gradient Colors
    SET_GRADIENT_COLORS: 'fb_set_gradient_colors',
    SAVE_GRADIENT_COLORS: 'fb_save_gradient_colors',
    FETCH_GRADIENT_COLORS: 'fb_fetch_gradient_colors',

    // Custom Gradient Colors
    SET_CUSTOM_GRADIENT_COLORS: 'fb_set_custom_gradient_colors',
    SAVE_CUSTOM_GRADIENT_COLORS: 'fb_save_custom_gradient_colors',
    FETCH_CUSTOM_GRADIENT_COLORS: 'fb_fetch_custom_gradient_colors',

    // Typography
    SET_TYPOGRAPHY: 'fb_set_typography',
    SAVE_TYPOGRAPHY: 'fb_save_typography',
    FETCH_TYPOGRAPHY: 'fb_fetch_typography',

    // Custom CSS
    SET_CUSTOM_CSS: 'fb_set_custom_css',
    SAVE_CUSTOM_CSS: 'fb_save_custom_css',
    FETCH_CUSTOM_CSS: 'fb_fetch_custom_css',

    // UI States
    SET_LOADING: 'fb_set_loading',
    SET_ERROR: 'fb_set_error'
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
