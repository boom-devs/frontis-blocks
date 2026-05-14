export function getResponsiveValue(value, deviceType) {
	if (value && typeof value === 'object' && !Array.isArray(value)) {
		return value[deviceType] ?? value.Desktop ?? '';
	}
	return value;
}

export function toNumber(value, fallback = 0) {
	const parsed = parseFloat(value);
	return Number.isFinite(parsed) ? parsed : fallback;
}

export function getDeviceTypeFromWidth(width) {
	if (width <= 767) {
		return 'Mobile';
	}
	if (width <= 1024) {
		return 'Tablet';
	}
	return 'Desktop';
}

export function parsePresetRootConfig(root, datasetKey, defaultConfig) {
	const rawConfig = root.querySelector('.fb-stack-cards-frame')?.dataset?.[datasetKey];
	if (!rawConfig) {
		return defaultConfig;
	}

	try {
		return {
			...defaultConfig,
			...JSON.parse(rawConfig),
		};
	} catch (error) {
		return defaultConfig;
	}
}
