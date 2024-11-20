/**
 * Get Global Colors
 */
export const getGlobalColors = (state) => state?.globalColors || [];

/**
 * Get Custom Colors
 */
export const getCustomColors = (state) => state?.customColors || [];

/**
 * Get Gradient Colors
 */
export const getGradientColors = (state) => state?.gradientColors || [];

/**
 * Get Custom Gradient Colors
 */
export const getCustomGradientColors = (state) => state?.customGradientColors || [];

/**
 * Get Typography Settings
 */
export const getTypography = (state) => state?.globalTypography || {};

/**
 * Get Typography by Type (heading/body)
 */
export const getTypographyByType = (state, type) =>
	state?.globalTypography?.[type] || {};

/**
 * Get Loading State
 */
export const getIsLoading = (state) => Boolean(state?.isLoading);

/**
 * Get Error State
 */
export const getError = (state) => state?.error || null;

/**
 * Get Global Color by Slug
 */
export const getGlobalColorBySlug = (state, slug) =>
	state?.globalColors?.find((color) => color.slug === slug)?.color || null;

/**
 * Get Gradient Color by Slug
 */
export const getGradientColorBySlug = (state, slug) =>
	state?.gradientColors?.find((color) => color.slug === slug)?.color || null;
