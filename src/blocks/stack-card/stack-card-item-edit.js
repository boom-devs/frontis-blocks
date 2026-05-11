import { createBlock } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';

const DEFAULT_CARD_ITEM_TEMPLATE = [
	['frontis-blocks/info-box'],
];

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

	const { replaceInnerBlocks } = useDispatch(blockEditorStore);
	const autoRestoreAttemptedRef = useRef(false);

	const hasInnerBlocks = useSelect(
		(select) => (select(blockEditorStore).getBlocks(clientId) || []).length > 0,
		[clientId]
	);

	useEffect(() => {
		if (hasInnerBlocks) {
			autoRestoreAttemptedRef.current = false;
			return;
		}

		if (autoRestoreAttemptedRef.current) {
			return;
		}

		autoRestoreAttemptedRef.current = true;

		// Attempt a single recovery when the item becomes empty.
		// If insertion fails for any reason, don't retry endlessly.
		replaceInnerBlocks(
			clientId,
			[
				createBlock('frontis-blocks/info-box'),
			],
			false
		);
	}, [clientId, hasInnerBlocks, replaceInnerBlocks]);

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
			template: DEFAULT_CARD_ITEM_TEMPLATE,
			templateLock: false,
			renderAppender: !hasInnerBlocks || isSelected ? InnerBlocks.ButtonBlockAppender : false,
		}
	);

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
