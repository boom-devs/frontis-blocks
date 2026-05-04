const getPixelValue = (value, { allowZero = true } = {}) => {
	const numericValue = Number(value);

	if (!Number.isFinite(numericValue)) {
		return undefined;
	}

	if (!allowZero && numericValue <= 0) {
		return undefined;
	}

	if (allowZero && numericValue < 0) {
		return undefined;
	}

	return `${numericValue}px`;
};

export const getGridItemWrapperStyles = ({
	backgroundColor,
	borderRadius,
	minHeight,
	zIndex,
}) => {
	const styles = {};
	const resolvedBorderRadius = getPixelValue(borderRadius);
	const resolvedMinHeight = getPixelValue(minHeight, { allowZero: false });
	const numericZIndex = Number(zIndex);

	if (backgroundColor) {
		styles.background = backgroundColor;
		styles.backgroundColor = backgroundColor;
	}

	if (resolvedBorderRadius !== undefined) {
		styles.borderRadius = resolvedBorderRadius;
	}

	if (resolvedMinHeight !== undefined) {
		styles.minHeight = resolvedMinHeight;
	}

	if (Number.isFinite(numericZIndex) && numericZIndex !== 0) {
		styles.position = "relative";
		styles.zIndex = numericZIndex;
	}

	return styles;
};

export const getGridItemContentStyles = ({ padding }) => {
	const resolvedPadding = getPixelValue(padding);

	if (resolvedPadding === undefined) {
		return {};
	}

	return {
		padding: resolvedPadding,
	};
};
