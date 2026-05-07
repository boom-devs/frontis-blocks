/**
 * save.js
 * Produces the static HTML saved to the WordPress database.
 * view.js (front-end script) picks up data-* attributes and adds interactivity.
 */

import { useBlockProps } from "@wordpress/block-editor";
import { renderAccordion } from "./render";

const Save = ({ attributes }) => {
	const { presetStyle, triggerOn } = attributes;

	const blockProps = useBlockProps.save({
		className: "image-accordion-block",
	});

	const { containerStyle, items } = renderAccordion(attributes, false);

	return (
		<div {...blockProps}>
			<div
				className={`pea-image-accordion-wrapper ${presetStyle}`}
				data-trigger={triggerOn}
			>
				<div className="pea-image-accordion-container" style={containerStyle}>
					{items}
				</div>
			</div>
		</div>
	);
};

export default Save;
