import { useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect, select } from '@wordpress/data';
import { useEffect, useLayoutEffect, useRef } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import attributeDefinitions from './attributes';
import Inspector, { createDefaultCardItemBlock } from './inspector';
import { presetStyles } from './presets';
import { getPresetFrameDataAttributes } from './preset-frame-data';
import generateStackCardsStyle from './styling';
import {
	generateStackCardItemsAggregateCss,
	getStackCardItemStyleSignature,
} from '../stack-card-item/styling';
import { applyFilters } from '@wordpress/hooks';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';
import getProActive from '@Utils/getProActive';

import {
	bindStackCardPresetOverBehavior as bindPresetFourBehavior,
	getStackCardPresetOverConfig as getPresetFourConfig,
	hasStackCardScalePreset,
	isStackCardPresetOver as isPresetFourStackOver,
	StackCardPresetOverNavigation as PresetFourNavigation,
} from './behaviors/preset-four';
import {
	bindStackCardPresetRightBehavior as bindPresetThreeBehavior,
	getStackCardPresetRightConfig as getPresetThreeConfig,
	isStackCardPresetRight as isPresetThreeStackRight,
} from './behaviors/preset-three';
import {
	bindStackCardPresetLeftBehavior as bindPresetTwoBehavior,
	getStackCardPresetLeftConfig as getPresetTwoConfig,
	isStackCardPresetLeft as isPresetTwoStackLeft,
} from './behaviors/preset-two';
import { bindStackCardScaleEditorBehavior as bindEditorStackCardScale } from './behaviors/stack-card-scale';
import './editor.scss';

const CARD_ITEM_BLOCK = 'frontis-blocks/stack-card-item';
const INITIAL_CARD_ITEMS = 3;

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

	const {
		blockID,
		blockStyle,
		stackCardsPresetStyle,
		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,
		stackCardsPresetFourShowNavigation,
		stackCardsHasInitializedItems,
	} = attributes;

	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch(blockEditorStore);
	const childBlocks = useSelect(
		(sel) => sel(blockEditorStore).getBlocks(clientId) || [],
		[clientId]
	);

	const stackCardItemStyleSignature = useSelect(
		(sel) => {
			const blockEditor = sel(blockEditorStore);
			const blocks = blockEditor.getBlocks(clientId) || [];
			return getStackCardItemStyleSignature(blocks, blockEditor);
		},
		[clientId]
	);

	useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-stack-cards',
        isSelected,
        attributes,
        setAttributes,
    });

	useLayoutEffect(() => {
		if (childBlocks.length === 0 && !stackCardsHasInitializedItems) {
			const defaultItems = Array.from({ length: INITIAL_CARD_ITEMS }, (_, index) =>
				createDefaultCardItemBlock(index + 1)
			); 
			replaceInnerBlocks(clientId, defaultItems, false);
			setAttributes({stackCardsHasInitializedItems: true});
			return; // Let the next cycle handle styling once blocks are added
		}

		const ensuredBlockId =
			blockID ||
			(clientId && typeof clientId === 'string' ? `fb-stack-cards-${clientId.slice(0, 8)}` : '');
		
		if (!ensuredBlockId) {
			return;
		}

		const itemCss = generateStackCardItemsAggregateCss(ensuredBlockId, childBlocks);
		const baseCss = generateStackCardsStyle(attributes);
		const css = `${baseCss} ${itemCss}`.replace(/\s+/g, ' ').trim();

		const updates = {};

		if (!blockID) {
			updates.blockID = ensuredBlockId;
		}

		if (!stackCardsHasInitializedItems && childBlocks.length > 0) {
			updates.stackCardsHasInitializedItems = true;
		}

		if (css !== blockStyle) {
			updates.blockStyle = css;
		}

		if (Object.keys(updates).length > 0) {
			setAttributes(updates);
		}
	}, [
		attributes,
		blockID,
		blockStyle,
		childBlocks,
		clientId,
		setAttributes,
		stackCardItemStyleSignature,
		stackCardsHasInitializedItems,
	]);

	useEffect(() => {
		childBlocks.forEach((childBlock, index) => {
			const nextItemNumber = index + 1;

			if (childBlock.attributes?.itemNumber !== nextItemNumber) {
				updateBlockAttributes(childBlock.clientId, {
					itemNumber: nextItemNumber,
				});
			}
		});
	}, [childBlocks, updateBlockAttributes]);

	const rootRef = useRef(null);
	const presetTwoCleanupRef = useRef(null);
	const presetThreeCleanupRef = useRef(null);
	const presetFourCleanupRef = useRef(null);
	const initialPresetHydratedRef = useRef(false);
	const panelRef = useRef(null);
	const presetTwoConfig = getPresetTwoConfig(attributes);
	const presetThreeConfig = getPresetThreeConfig(attributes);
	const presetFourConfig = getPresetFourConfig(attributes);
	const presetFrameDataAttributes = getPresetFrameDataAttributes(stackCardsPresetStyle, attributes);
	SwitchToBlockSettings(panelRef);

	useEffect(() => {
		if (initialPresetHydratedRef.current) {
			return;
		}

		const currentPresetValues = presetStyles[stackCardsPresetStyle];

		if (!currentPresetValues || !Object.keys(currentPresetValues).length) {
			initialPresetHydratedRef.current = true;
			return;
		}

		const shouldHydratePreset = Object.entries(currentPresetValues).every(([key]) => {
			const currentValue = attributes[key];
			const defaultValue = attributeDefinitions[key]?.default;

			if (currentValue === undefined) {
				return true;
			}

			return JSON.stringify(currentValue) === JSON.stringify(defaultValue ?? '');
		});

		initialPresetHydratedRef.current = true;

		if (shouldHydratePreset) {
			setAttributes(currentPresetValues);
		}
	}, [attributes, setAttributes, stackCardsPresetStyle]);

	const blockProps = useBlockProps({
		ref: rootRef,
        className: [
            'fb-stack-cards-main-wrapper',
            isSelected ? 'fb-stack-cards-main-wrapper--active' : '',
            `fb-stack-cards-preset-${stackCardsPresetStyle}`,
            blockID,
            stackCardsDesktopSwitcher ? 'fb-desktop-responsive' : '',
            stackCardsTabletSwitcher ? 'fb-tablet-responsive' : '',
            stackCardsMobileSwitcher ? 'fb-mobile-responsive' : '',
        ].filter(Boolean).join(' '),
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `fb-stack-cards-frame fb-stack-cards-frame--${stackCardsPresetStyle} ${stackCardsGlobalWraperClass}`.trim(),
            id: stackCardsGlobalWraperID || undefined,
            ref: panelRef,
            ...presetFrameDataAttributes,
        },
        {
            allowedBlocks: [CARD_ITEM_BLOCK],
            renderAppender: false,
        }
    );
    const { children: innerBlocksChildren, ...innerBlocksWrapperProps } = innerBlocksProps;

	useLayoutEffect(() => {
		if (!isPresetTwoStackLeft(stackCardsPresetStyle)) {
			presetTwoCleanupRef.current?.();
			presetTwoCleanupRef.current = null;
			return undefined;
		}
		const el = rootRef.current;
		if (!el) {
			return undefined;
		}
		const cleanup = bindPresetTwoBehavior(el, {
			isEditor: true,
			config: presetTwoConfig,
		});
		presetTwoCleanupRef.current = cleanup;
		return () => {
			cleanup?.();
			if (presetTwoCleanupRef.current === cleanup) {
				presetTwoCleanupRef.current = null;
			}
		};
	}, [stackCardsPresetStyle, clientId, childBlocks.length, blockID]);

	useLayoutEffect(() => {
		if (!isPresetTwoStackLeft(stackCardsPresetStyle)) {
			return undefined;
		}
		const el = rootRef.current;
		if (!el?.__fbStackCardPresetLeftInstance) {
			return undefined;
		}
		el.__fbStackCardPresetLeftInstance.updateConfig?.(presetTwoConfig);
	}, [stackCardsPresetStyle, JSON.stringify(presetTwoConfig)]);

	useLayoutEffect(() => {
		if (!isPresetThreeStackRight(stackCardsPresetStyle)) {
			presetThreeCleanupRef.current?.();
			presetThreeCleanupRef.current = null;
			return undefined;
		}
		const el = rootRef.current;
		if (!el) {
			return undefined;
		}
		const cleanup = bindPresetThreeBehavior(el, {
			isEditor: true,
			config: presetThreeConfig,
		});
		presetThreeCleanupRef.current = cleanup;
		return () => {
			cleanup?.();
			if (presetThreeCleanupRef.current === cleanup) {
				presetThreeCleanupRef.current = null;
			}
		};
	}, [stackCardsPresetStyle, clientId, childBlocks.length, blockID]);

	useLayoutEffect(() => {
		if (!isPresetThreeStackRight(stackCardsPresetStyle)) {
			return undefined;
		}
		const el = rootRef.current;
		if (!el?.__fbStackCardPresetRightInstance) {
			return undefined;
		}
		el.__fbStackCardPresetRightInstance.updateConfig?.(presetThreeConfig);
	}, [stackCardsPresetStyle, JSON.stringify(presetThreeConfig)]);

	useLayoutEffect(() => {
		if (!isPresetFourStackOver(stackCardsPresetStyle)) {
			presetFourCleanupRef.current?.();
			presetFourCleanupRef.current = null;
			return undefined;
		}
		const el = rootRef.current;
		if (!el) {
			return undefined;
		}
		const cleanup = bindPresetFourBehavior(el, {
			isEditor: true,
			config: presetFourConfig,
		});
		presetFourCleanupRef.current = cleanup;
		return () => {
			cleanup?.();
			if (presetFourCleanupRef.current === cleanup) {
				presetFourCleanupRef.current = null;
			}
		};
	}, [stackCardsPresetStyle, clientId, childBlocks.length, blockID, stackCardsPresetFourShowNavigation]);

	useLayoutEffect(() => {
		if (!isPresetFourStackOver(stackCardsPresetStyle)) {
			return undefined;
		}
		const el = rootRef.current;
		if (!el?.__fbStackCardPresetOverInstance) {
			return undefined;
		}
		el.__fbStackCardPresetOverInstance.updateConfig?.(presetFourConfig);
	}, [stackCardsPresetStyle, JSON.stringify(presetFourConfig)]);

	useLayoutEffect(() => {
		if (!hasStackCardScalePreset(stackCardsPresetStyle)) {
			return undefined;
		}
		const el = rootRef.current;
		if (!el) {
			return undefined;
		}
		return bindEditorStackCardScale(el);
	}, [stackCardsPresetStyle, clientId, childBlocks.length, blockID, blockStyle]);

	const isProActive = getProActive();
	const stackCardAvailable = applyFilters('frontisblocks-stack-card-pro-available', false);

	if(!stackCardAvailable || !isProActive) {
		return (
			<UpgradeToProPopup />
		)
	}

	return (
		<>
			{isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
					clientId={clientId}
                />
            )}

			<div { ...blockProps }>
				<div { ...innerBlocksWrapperProps }>
					{innerBlocksChildren}
					{isPresetFourStackOver(stackCardsPresetStyle) && stackCardsPresetFourShowNavigation && <PresetFourNavigation config={presetFourConfig} />}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
};