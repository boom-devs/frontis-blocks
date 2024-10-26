/**
 * Selector: Get Global Colors
 * @param {*} state
 * @returns
 */
export function getGlobalColors(state) {
    const { globalColors } = state
    return globalColors;
}

/**
 * Selector: Get Global Colors by Item
 * @param {*} state
 * @param {*} item
 * @returns
 */
export function getGlobalColorsByItem(state, item) {
    const { globalColors } = state
    return globalColors[item]
}

/**
 * Selector: Get Custom Colors
 * @param {*} state
 * @returns
 */
export function getCustomColors(state) {
    const { customColors } = state
    return customColors;
}

/**
 * Selector: Get Gradient Colors
 * @param {*} state
 * @returns
 */
export function getGradientColors(state) {
    const { gradientColors } = state
    return gradientColors;
}

/**
 * Selector: Get Custom Gradient Colors
 * @param {*} state
 * @returns
 */
export function getCustomGradientColors(state) {
    const { customGradientColors } = state
    return customGradientColors;
}

/**
 * Selector: Get Is Saving
 * @param {*} state
 * @returns
 */
export function getIsSaving(state) {
    const { isSaving } = state
    return isSaving
}
