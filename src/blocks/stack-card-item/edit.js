import './editor.scss';
import { createBlock } from '@wordpress/blocks';
import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useLayoutEffect, useRef, useEffect } from '@wordpress/element';
import StackCardItemInspector from './inspector';

const DEFAULT_CARD_ITEM_TEMPLATE = [
	['frontis-blocks/testimonial'],
];

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

export default function Edit({ attributes, isSelected, clientId, setAttributes }) {
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
		(sel) => (sel(blockEditorStore).getBlocks(clientId) || []).length > 0,
		[clientId]
	);

	useLayoutEffect(() => {
		if (hasInnerBlocks) {
			autoRestoreAttemptedRef.current = false;
			return;
		}

		if (autoRestoreAttemptedRef.current) {
			return;
		}

		autoRestoreAttemptedRef.current = true;

		replaceInnerBlocks(
			clientId,
			[
				createBlock('frontis-blocks/testimonial', {
					icon: 'swatchbook',
					btnIcon: 'arrow-up-right-from-square',
					mediaSwitcher: 'icon'
				})
			],
			false
		);
	}, [clientId, hasInnerBlocks, replaceInnerBlocks]);

	// Force a store update on mount to ensure defaults are saved and parent styles are triggered
	useEffect(() => {
		const timer = setTimeout(() => {
			setAttributes({ _fb_init: true });
		}, 50);
		return () => clearTimeout(timer);
	}, []);

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
		<>
			{isSelected && (
				<InspectorControls>
					<StackCardItemInspector attributes={attributes} setAttributes={setAttributes} />
				</InspectorControls>
			)}
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}
