import { createBlock } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useLayoutEffect, useRef } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import Inspector from './inspector';
import generateStackCardsStyle from './styling';
import { bindEditorStackCardScale } from './stack-card-scale-behavior';
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
			createBlock(CARD_ITEM_BLOCK, { itemNumber: index + 1 })
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
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

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
        },
        {
            allowedBlocks: [CARD_ITEM_BLOCK],
            renderAppender: false,
        }
    );

	useLayoutEffect(() => {
		if (stackCardsPresetStyle !== 'stack-top') {
			return undefined;
		}
		const el = rootRef.current;
		if (!el) {
			return undefined;
		}
		return bindEditorStackCardScale(el);
	}, [stackCardsPresetStyle, clientId, childBlocks.length, blockID, blockStyle]);

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
				<div { ...innerBlocksProps } />
			</div>
			<style>{blockStyle}</style>
		</>
	);
};
