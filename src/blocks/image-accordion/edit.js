import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	RichText,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { useEffect, useMemo, useRef } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { times } from "lodash";
import { createBlock } from "@wordpress/blocks";
import "./editor.scss";
import Inspector from "./inspector";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateimageAccordionStyle from "./styling";
import loadGoogleFont from "@Utils/loadGoogleFont";

const ALLOWED_BLOCKS = ["frontis-blocks/imageAccordion-item"];

// Global set to track loaded fonts across all block instances
const loadedFonts = new Set();

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,

		classHook,
		imageAccordionType,
		displayIcon,
		tabIconSwitcher,
		tabIcon,
		tabImageUrl,
		tabImageAlt,
		expandedIcon,
		expandedImageUrl,
		expandedImageAlt,
		tagName,
		faqSchema,
		imageAccordionChildCount,
		imageAccordionGlobalWraperID,
		imageAccordionGlobalWraperClass,

		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,

		/** Typography Fonts */
		titleFontFamily,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-imageAccordion",
		isSelected,
		attributes,
		setAttributes,
	});

	useEffect(() => {
		const parentBlocks =
			select("core/block-editor").getBlocksByClientId(clientId)[0];

		const innerBlocks = parentBlocks?.innerBlocks;

		const { updateBlockAttributes } = dispatch("core/block-editor");

		if (innerBlocks) {
			innerBlocks.forEach((block) => {
				updateBlockAttributes(block.clientId, {
					inheritedimageAccordionType: imageAccordionType,
					inheritedDisplayIcon: displayIcon,
					inheritedTabIcon: tabIcon,
					inheritedExpandedIcon: expandedIcon,
					inheritedTagName: tagName,
					faqSchema: faqSchema,
				});
			});
		}
	}, [
		imageAccordionType,
		displayIcon,
		tabIcon,
		expandedIcon,
		tagName,
		faqSchema,
	]);

	/** Start load font */
	useEffect(() => {
		if (titleFontFamily && !loadedFonts.has(titleFontFamily)) {
			loadGoogleFont(titleFontFamily);
			loadedFonts.add(titleFontFamily);
		}
	}, [titleFontFamily]);
	/** End load font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateimageAccordionStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `fb-imageAccordion-main-wrapper ${blockID} ${
			imageAccordionDesktopSwitcher && "fb-desktop-responsive"
		} ${imageAccordionTabletSwitcher && "fb-tablet-responsive"} ${
			imageAccordionMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const addimageAccordion = () => {
		const innerBlocks = [...select("core/block-editor").getBlocks(clientId)];
		let count = innerBlocks ? innerBlocks.length : 3;

		const newBlock = createBlock("frontis-blocks/imageAccordion-item", {
			itemId: count + 1,
			title: __(`imageAccordion title ${count + 1}`, "frontis-blocks"),
			inheritedimageAccordionType: imageAccordionType,
			inheritedTagName: tagName,
			inheritedDisplayIcon: displayIcon,
			inheritedTabIconSwitcher: tabIconSwitcher,
			inheritedTabIcon: tabIcon,
			inheritedTabImageUrl: tabImageUrl,
			inheritedTabImageAlt: tabImageAlt,
			inheritedExpandedIconSwitcher: tabIconSwitcher,
			inheritedExpandedIcon: expandedIcon,
			inheritedExpandedImageUrl: expandedImageUrl,
			inheritedExpandedImageAlt: expandedImageAlt,
			parentBlockID: blockID,
		});
		innerBlocks.splice(innerBlocks.length, 0, newBlock);
		dispatch("core/block-editor")
			.replaceInnerBlocks(clientId, innerBlocks)
			.then(() => {
				setAttributes({ imageAccordionChildCount: count + 1 });
			});
	};

	useEffect(() => {
		if (!tabIcon) {
			setAttributes({ tabIcon: "fas fa-angle-right" });
		}
		if (!expandedIcon) {
			setAttributes({ expandedIcon: "fas fa-angle-down" });
		}
	}, []);

	const insertAccodionItem = (imageAccordionChildCount) => {
		return times(imageAccordionChildCount, (n) => [
			"frontis-blocks/imageAccordion-item",
			{
				itemId: n + 1,
				title: __(`imageAccordion title ${n + 1}`, "frontis-blocks"),
				inheritedimageAccordionType: imageAccordionType,
				inheritedDisplayIcon: displayIcon,
				inheritedTabIcon: tabIcon,
				inheritedExpandedIcon: expandedIcon,
				inheritedTagName: tagName,
				faqSchema: faqSchema,
				parentBlockID: blockID,
			},
		]);
	};

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-imageAccordion-wrapper fb-parent-${blockID} ${classHook} ${imageAccordionGlobalWraperClass}`}
					id={imageAccordionGlobalWraperID}
					ref={panelRef}
				>
					<div className={`fb-imageAccordion-container`}>
						<div className="fb-imageAccordion-inner">
							<InnerBlocks
								template={insertAccodionItem(imageAccordionChildCount)}
								templateLock={false}
								allowedBlocks={ALLOWED_BLOCKS}
							/>
						</div>
					</div>
					<div className="fb-imageAccordion-add-button-wrapper">
						<Button
							className="fb-imageAccordion-add-button"
							label={__("Add Item", "frontis-blocks")}
							icon="plus"
							onClick={addimageAccordion}
						>
							<span className="fb-imageAccordion-add-button-label">
								{__("Add Item", "frontis-blocks")}
							</span>
						</Button>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
