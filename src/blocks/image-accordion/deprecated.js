import { useBlockProps } from "@wordpress/block-editor";
import attributes from "./attributes.js";

const v1_0_0 = {
	attributes,
	supports: {
		html: false,
		className: false,
	},
	save({ attributes }) {
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
	},
};

export default [v1_0_0];
