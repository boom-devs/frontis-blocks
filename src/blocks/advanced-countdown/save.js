import { useBlockProps } from "@wordpress/block-editor";

/* Save outputs a static shell; view.js hydrates the timer on frontend */
const Save = ({ attributes }) => {
	const { presetStyle, dueDateTime, startDateTime } = attributes;

	const blockProps = useBlockProps.save({ className: "acd-block" });

	return (
		<div {...blockProps}>
			<div className="acd-main-wrapper">
				<div
					className={`acd-container acd-${presetStyle}`}
					data-preset={presetStyle}
					data-due={dueDateTime}
					data-start={startDateTime}
					data-attrs={JSON.stringify(attributes)}
				>
					{/* Hydrated by view.js */}
					<div className="acd-inner" />
				</div>
			</div>
		</div>
	);
};

export default Save;
