import { InnerBlocks, useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const getItemBackgroundValue = (backgroundType, classicColor, gradientColor, customGradientSwitcher, customGradientInputValue, fallbackValue) => {
	if (backgroundType === 'gradient') {
		return customGradientSwitcher && customGradientInputValue
			? customGradientInputValue
			: (gradientColor || classicColor || fallbackValue);
	}

	return classicColor || fallbackValue;
};

export default function StackCardItemEdit({ attributes, isSelected, clientId }) {
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

	const hasInnerBlocks = useSelect(
		(select) => (select(blockEditorStore).getBlocks(clientId) || []).length > 0,
		[clientId]
	);

	const blockProps = useBlockProps({
		className: ['fb-stack-card-item', `fb-card-item${itemNumber}`].filter(Boolean).join(' '),
		style: {
			'--fb-stack-card-item-bg-normal': normalBackground,
			'--fb-stack-card-item-bg-hover': hoverBackground,
			'--fb-stack-card-item-border-color': stackCardItemBorderColor || undefined,
			'--fb-stack-card-item-border-hover-color': stackCardItemBorderHoverColor || undefined,
		},
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `fb-stack-card-item__content ${!hasInnerBlocks ? 'fb-stack-card-item__content--empty' : ''}`.trim(),
		},
		{
			renderAppender: !hasInnerBlocks || isSelected ? InnerBlocks.ButtonBlockAppender : false,
		}
	);

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
