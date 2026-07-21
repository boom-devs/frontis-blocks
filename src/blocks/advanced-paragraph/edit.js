import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { useRef, useEffect } from "@wordpress/element";
import loadGoogleFont from '@Utils/loadGoogleFont';
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import { useDeviceType } from "@Config/displayType";
import "./editor.scss";

import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";

import generateAdvancedParagraphStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, context, isSelected }) {
	const {
		blockID,
		blockStyle,
		paragraphText,
		paragraphAlignment,

		paragraphGlobalWraperID,
		paragraphGlobalWraperClass,

		advancedParagraphDesktopSwitcher,
		advancedParagraphTabletSwitcher,
		advancedParagraphMobileSwitcher,
		paragraphFontFamily,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-advanced-paragraph',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start load font */
	useEffect(() => {
		[paragraphFontFamily].forEach(font => {
			if (font && !loadedFonts.has(font)) {
				loadGoogleFont(font);
				loadedFonts.add(font);
			}
		});
	}, [paragraphFontFamily]);
	/** End load font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateAdvancedParagraphStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `frontis-block fb-advanced-paragraph-main-wrapper ${blockID} ${advancedParagraphDesktopSwitcher && "fb-desktop-responsive"
			} ${advancedParagraphTabletSwitcher && "fb-tablet-responsive"} ${advancedParagraphMobileSwitcher && "fb-mobile-responsive"
			}`,
	});

	const deviceType = useDeviceType();

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	return (
		<>
			{isSelected}
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={paragraphAlignment[deviceType]}
					onChange={(value) =>
						setAttributes({
							paragraphAlignment: {
								...paragraphAlignment,
								[deviceType]: value,
							},
						})
					}
					controls={["left", "center", "right"]}
				/>
			</BlockControls>

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-advanced-wrapper ${paragraphGlobalWraperClass}`}
					id={paragraphGlobalWraperID}
					ref={panelRef}
				>
					<div className="fb-advanced-paragraph-wrapper">
						<RichText
							tagName="p"
							value={paragraphText}
							onChange={(value) => {
								setAttributes({ paragraphText: value });
							}}
							placeholder={__(
								"Write your advanced paragraph...",
								"frontis-blocks",
							)}
							className={`fb-advanced-paragraph`}
						/>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}