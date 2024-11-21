export const getGlobalSettings = (select) => {
	return {
		getGlobalColors: select('frontis-blocks').getGlobalColors()
		// getCustomColors: select('frontis-blocks').getCustomColors(),
		// getGradientColors: select('frontis-blocks').getGradientColors(),
		// getCustomGradientColors: select('frontis-blocks').getCustomGradientColors(),
		// getGlobalTypography: select('frontis-blocks').getGlobalTypography()
	}
}
