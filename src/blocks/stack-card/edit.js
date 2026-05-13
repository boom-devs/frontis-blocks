import { useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useLayoutEffect, useRef } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import attributeDefinitions from './attributes';
import Inspector from './inspector';
import { presetStyles } from './presets';
import { getPresetFrameDataAttributes } from './preset-frame-data';
import generateStackCardsStyle from './styling';
import { applyFilters } from '@wordpress/hooks';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';
import getProActive from '@Utils/getProActive';

import {
	bindPresetFourBehavior,
	getPresetFourConfig,
	hasStackCardScalePreset,
	isPresetFourStackOver,
	PresetFourNavigation,
} from './preset-four';
import {
	bindPresetThreeBehavior,
	getPresetThreeConfig,
	isPresetThreeStackRight,
} from './preset-three';
import {
	bindPresetTwoBehavior,
	getPresetTwoConfig,
	isPresetTwoStackLeft,
} from './preset-two';
import { bindEditorStackCardScale } from './stack-card-scale-behavior';
import { createDefaultCardItemBlock } from './default-card-item';
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
	} = attributes;

	const { replaceInnerBlocks, updateBlockAttributes } = useDispatch(blockEditorStore);
	const childBlocks = useSelect(
		(select) => select('core/block-editor').getBlocks(clientId) || [],
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

	useEffect(() => {
        if (blockID) {
            const css = generateStackCardsStyle(attributes);
            if (css !== blockStyle) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID, blockStyle]);

	useEffect(() => {
		if (childBlocks.length > 0) {
			return;
		}

		const defaultItems = Array.from({ length: INITIAL_CARD_ITEMS }, (_, index) =>
			createDefaultCardItemBlock(index + 1)
		);

		replaceInnerBlocks(clientId, defaultItems, false);
	}, [childBlocks.length, clientId, replaceInnerBlocks]);

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
		if (initialPresetHydratedRef.current || childBlocks.length > 0) {
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
	}, [attributes, childBlocks.length, setAttributes, stackCardsPresetStyle]);

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
		if (!el?.__fbPresetTwoInstance) {
			return undefined;
		}
		el.__fbPresetTwoInstance.updateConfig?.(presetTwoConfig);
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
		if (!el?.__fbPresetThreeInstance) {
			return undefined;
		}
		el.__fbPresetThreeInstance.updateConfig?.(presetThreeConfig);
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
		if (!el?.__fbPresetFourInstance) {
			return undefined;
		}
		el.__fbPresetFourInstance.updateConfig?.(presetFourConfig);
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
	const stackCardAvailable = applyFilters('frontisblocks-stack-card-available', false);

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
