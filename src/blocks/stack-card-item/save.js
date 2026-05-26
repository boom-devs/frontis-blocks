import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const getItemBackgroundValue = (
	backgroundType,
	classicColor,
	gradientColor,
	customGradientSwitcher,
	customGradientInputValue,
	fallbackValue
) => {
	if (backgroundType === 'gradient') {
		return customGradientSwitcher && customGradientInputValue
			? customGradientInputValue
			: (gradientColor || classicColor || fallbackValue);
	}

	return classicColor || fallbackValue;
};

export default function save({ attributes }) {
	const {
		itemNumber = 1,
		stackCardItemBgNormalBackgroundType,
		stackCardItemBgNormalClassicColor,
		stackCardItemBgNormalGradientColor,
		stackCardItemBgNormalCustomGradientSwitcher,
		stackCardItemBgNormalCustomGradientInputValue,
		stackCardItemBgHoverBackgroundType,
		stackCardItemBgHoverClassicColor,
		stackCardItemBgHoverGradientColor,
		stackCardItemBgHoverCustomGradientSwitcher,
		stackCardItemBgHoverCustomGradientInputValue,
		stackCardItemBorderColor,
		stackCardItemBorderHoverColor,
	} = attributes;

	const normalBackground = getItemBackgroundValue(
		stackCardItemBgNormalBackgroundType,
		stackCardItemBgNormalClassicColor,
		stackCardItemBgNormalGradientColor,
		stackCardItemBgNormalCustomGradientSwitcher,
		stackCardItemBgNormalCustomGradientInputValue
	);

	const hoverBackground = getItemBackgroundValue(
		stackCardItemBgHoverBackgroundType,
		stackCardItemBgHoverClassicColor,
		stackCardItemBgHoverGradientColor,
		stackCardItemBgHoverCustomGradientSwitcher,
		stackCardItemBgHoverCustomGradientInputValue,
		normalBackground
	);

	const blockProps = useBlockProps.save({
		className: ['fb-stack-card-item', `fb-card-item${itemNumber}`].filter(Boolean).join(' ')
	});

	return (
		<div {...blockProps}>
			<div className="fb-stack-card-item__content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
