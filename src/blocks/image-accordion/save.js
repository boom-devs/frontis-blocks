import { useBlockProps } from "@wordpress/block-editor";

/**
 * save.js — minimal output only.
 * render.php handles the actual frontend HTML.
 * This only provides WordPress block validation.
 */
export default function save({ attributes }) {
	const {
		blockID,
		accordionDesktopSwitcher,
		accordionTabletSwitcher,
		accordionMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-image-accordion-main-wrapper ${blockID} ${
			accordionDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${accordionTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			accordionMobileSwitcher ? "fb-mobile-responsive" : ""
		}`.trim(),
	});

	return <div {...blockProps}></div>;
}
