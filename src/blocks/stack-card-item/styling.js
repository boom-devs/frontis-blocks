/**
 * Stack Card Item — dynamic CSS fragments scoped by the parent Stack Card blockID.
 * Merged into the parent block's blockStyle (see stack-card/edit.js).
 */

const CARD_ITEM_BLOCK = 'frontis-blocks/stack-card-item';

const hasValue = (value) => value !== undefined && value !== null && value !== '';

/**
 * Revision string for when to regenerate parent `blockStyle`.
 * Includes each item's inner block count so parent CSS updates after template/default
 * inners are inserted (not only after item attribute edits or selection).
 *
 * @param {Array} innerBlocks Top-level stack-card-item blocks from `getBlocks(parentId)`
 * @param {{ getBlocks: (id: string) => Array }} blockEditor Block editor store API from `select(blockEditorStore)`
 */
export function getStackCardItemStyleSignature(innerBlocks, blockEditor) {
	if (!innerBlocks?.length) {
		return '';
	}
	return innerBlocks
		.filter((block) => block.name === CARD_ITEM_BLOCK)
		.map((block) => {
			const innerLen = (blockEditor.getBlocks(block.clientId) || []).length;
			return `${block.clientId}:${JSON.stringify(block.attributes ?? {})}:${innerLen}`;
		})
		.join('|');
}

export function generateStackCardItemsAggregateCss(blockID, innerBlocks) {
	if (!blockID || !innerBlocks?.length) {
		return '';
	}
	return innerBlocks
		.filter((block) => block.name === CARD_ITEM_BLOCK)
		.map((block) => generateStackCardItemStyle(blockID, block.attributes || {}))
		.join(' ');
}

export function generateStackCardItemStyle(blockID, attributes) {
	const itemNumber = attributes.itemNumber ?? 1;
	const {
		stackCardItemBgColorSwitcher,
		stackCardItemBgNormalBackgroundType,
		stackCardItemBgNormalClassicColor,
		stackCardItemBgNormalGradientColor,
		stackCardItemBgNormalCustomGradientSwitcher,
		stackCardItemBgNormalCustomGradientInputValue,
		stackCardItemBgNormalImageUrl,
		stackCardItemBgNormalImageAlt,
		stackCardItemBgNormalImageID,
		stackCardItemBgNormalImagePosition,
		stackCardItemBgNormalImageAttachment,
		stackCardItemBgNormalImageRepeat,
		stackCardItemBgNormalImageSize,
		stackCardItemBgHoverBackgroundType,
		stackCardItemBgHoverClassicColor,
		stackCardItemBgHoverGradientColor,
		stackCardItemBgHoverCustomGradientSwitcher,
		stackCardItemBgHoverCustomGradientInputValue,
		stackCardItemBgHoverImageUrl,
		stackCardItemBgHoverImageAlt,
		stackCardItemBgHoverImageID,
		stackCardItemBgHoverImagePosition,
		stackCardItemBgHoverImageAttachment,
		stackCardItemBgHoverImageRepeat,
		stackCardItemBgHoverImageSize,

		stackCardItemPaddingUnits,
		stackCardItemPaddingDesktop,
		stackCardItemPaddingTablet,
		stackCardItemPaddingMobile,
		stackCardItemBorder,
		stackCardItemBorderColor,
		stackCardItemBorderHoverColor,
		stackCardItemBorderUnits,
		stackCardItemBorderDesktop,
		stackCardItemBorderTablet,
		stackCardItemBorderMobile,
		stackCardItemBorderRadiusUnits,
		stackCardItemBorderRadiusDesktop,
		stackCardItemBorderRadiusTablet,
		stackCardItemBorderRadiusMobile,
	} = attributes;

	const frameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame`;
	const editorLayoutSelector = `${frameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
	const frameItemSelector = `${frameSelector} .fb-stack-card-item`;
	const editorItemSelector = `${editorLayoutSelector} > .fb-stack-card-item`;
	const scopedItem = `${frameItemSelector}.fb-card-item${itemNumber}, ${editorItemSelector}.fb-card-item${itemNumber}`;

	const stackCardItemDesktopPadding = `${stackCardItemPaddingDesktop?.top}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.right}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.bottom}${stackCardItemPaddingUnits?.Desktop} ${stackCardItemPaddingDesktop?.left}${stackCardItemPaddingUnits?.Desktop}`;
	const stackCardItemDesktopBorderWidth = `${stackCardItemBorderDesktop?.top}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.right}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.bottom}${stackCardItemBorderUnits?.Desktop} ${stackCardItemBorderDesktop?.left}${stackCardItemBorderUnits?.Desktop}`;
	const stackCardItemDesktopBorderRadiusWidth = `${stackCardItemBorderRadiusDesktop?.top}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.right}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.bottom}${stackCardItemBorderRadiusUnits?.Desktop} ${stackCardItemBorderRadiusDesktop?.left}${stackCardItemBorderRadiusUnits?.Desktop}`;

	const stackCardItemTabletPadding = `${stackCardItemPaddingTablet?.top}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.right}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.bottom}${stackCardItemPaddingUnits?.Tablet} ${stackCardItemPaddingTablet?.left}${stackCardItemPaddingUnits?.Tablet}`;
	const stackCardItemTabletBorderWidth = `${stackCardItemBorderTablet?.top}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.right}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.bottom}${stackCardItemBorderUnits?.Tablet} ${stackCardItemBorderTablet?.left}${stackCardItemBorderUnits?.Tablet}`;
	const stackCardItemTabletBorderRadiusWidth = `${stackCardItemBorderRadiusTablet?.top}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.right}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.bottom}${stackCardItemBorderRadiusUnits?.Tablet} ${stackCardItemBorderRadiusTablet?.left}${stackCardItemBorderRadiusUnits?.Tablet}`;

	const stackCardItemMobilePadding = `${stackCardItemPaddingMobile?.top}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.right}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.bottom}${stackCardItemPaddingUnits?.Mobile} ${stackCardItemPaddingMobile?.left}${stackCardItemPaddingUnits?.Mobile}`;
	const stackCardItemMobileBorderWidth = `${stackCardItemBorderMobile?.top}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.right}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.bottom}${stackCardItemBorderUnits?.Mobile} ${stackCardItemBorderMobile?.left}${stackCardItemBorderUnits?.Mobile}`;
	const stackCardItemMobileBorderRadiusWidth = `${stackCardItemBorderRadiusMobile?.top}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.right}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.bottom}${stackCardItemBorderRadiusUnits?.Mobile} ${stackCardItemBorderRadiusMobile?.left}${stackCardItemBorderRadiusUnits?.Mobile}`;

	return `
        .${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame .fb-stack-card-item {
            overflow: hidden;
			${stackCardItemBgNormalBackgroundType === "gradient"
			? `background: ${stackCardItemBgNormalCustomGradientSwitcher && stackCardItemBgNormalCustomGradientInputValue
				? stackCardItemBgNormalCustomGradientInputValue
				: stackCardItemBgNormalGradientColor
			};`
			: stackCardItemBgNormalImageUrl !== undefined && stackCardItemBgNormalImageUrl !== null && stackCardItemBgNormalImageUrl !== ""
				? `
						${stackCardItemBgNormalImageUrl !== undefined ? `background-image: url(${stackCardItemBgNormalImageUrl});` : ''}
						${stackCardItemBgNormalImagePosition !== undefined ? `background-position: ${stackCardItemBgNormalImagePosition};` : ''}
						${stackCardItemBgNormalImageAttachment !== undefined ? `background-attachment: ${stackCardItemBgNormalImageAttachment};` : ''}
						${stackCardItemBgNormalImageRepeat !== undefined ? `background-repeat: ${stackCardItemBgNormalImageRepeat};` : ''}
						${stackCardItemBgNormalImageSize !== undefined ? `background-size: ${stackCardItemBgNormalImageSize};` : ''}
						`
				: stackCardItemBgNormalClassicColor ? `background: ${stackCardItemBgNormalClassicColor};` : ''
		}
            ${hasValue(stackCardItemPaddingDesktop?.top) ? `padding: ${stackCardItemDesktopPadding};` : ''}
            ${stackCardItemBorder ? `border: ${stackCardItemBorder};` : ''}
            ${hasValue(stackCardItemBorderDesktop?.top) ? `border-width: ${stackCardItemDesktopBorderWidth};` : ''}
            ${hasValue(stackCardItemBorderRadiusDesktop?.top) ? `border-radius: ${stackCardItemDesktopBorderRadiusWidth};` : ''}
            border-color: var(--fb-stack-card-item-border-color, ${stackCardItemBorderColor || 'transparent'});
        } 
        .${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame .fb-stack-card-item:hover {
			${stackCardItemBgHoverBackgroundType === "gradient"
			? `background: ${stackCardItemBgHoverCustomGradientSwitcher && stackCardItemBgHoverCustomGradientInputValue
				? stackCardItemBgHoverCustomGradientInputValue
				: stackCardItemBgHoverGradientColor
			};`
			: stackCardItemBgHoverImageUrl !== undefined && stackCardItemBgHoverImageUrl !== null && stackCardItemBgHoverImageUrl !== ""
				? `
						${stackCardItemBgHoverImageUrl !== undefined ? `background-image: url(${stackCardItemBgHoverImageUrl});` : ''}
						${stackCardItemBgHoverImagePosition !== undefined ? `background-position: ${stackCardItemBgHoverImagePosition};` : ''}
						${stackCardItemBgHoverImageAttachment !== undefined ? `background-attachment: ${stackCardItemBgHoverImageAttachment};` : ''}
						${stackCardItemBgHoverImageRepeat !== undefined ? `background-repeat: ${stackCardItemBgHoverImageRepeat};` : ''}
						${stackCardItemBgHoverImageSize !== undefined ? `background-size: ${stackCardItemBgHoverImageSize};` : ''}
						`
				: stackCardItemBgHoverClassicColor ? `background: ${stackCardItemBgHoverClassicColor};` : ''
		} 
            border-color: var(--fb-stack-card-item-border-hover-color, var(--fb-stack-card-item-border-color, ${stackCardItemBorderHoverColor || stackCardItemBorderColor || 'transparent'
		}));
        }

		@media only screen and (max-width: 1024px) {
			${scopedItem} {
				${hasValue(stackCardItemPaddingTablet?.top) ? `padding: ${stackCardItemTabletPadding};` : ''}
				${hasValue(stackCardItemBorderTablet?.top) ? `border-width: ${stackCardItemTabletBorderWidth};` : ''}
				${hasValue(stackCardItemBorderRadiusTablet?.top) ? `border-radius: ${stackCardItemTabletBorderRadiusWidth};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			${scopedItem} {
				${hasValue(stackCardItemPaddingMobile?.top) ? `padding: ${stackCardItemMobilePadding};` : ''}
				${hasValue(stackCardItemBorderMobile?.top) ? `border-width: ${stackCardItemMobileBorderWidth};` : ''}
				${hasValue(stackCardItemBorderRadiusMobile?.top) ? `border-radius: ${stackCardItemMobileBorderRadiusWidth};` : ''}
			}
		}
    `;
}
