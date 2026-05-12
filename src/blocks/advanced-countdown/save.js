import { useBlockProps } from "@wordpress/block-editor";

/* Save outputs a static shell; view.js hydrates the timer on frontend */
const Save = ({ attributes }) => {
	const {
		presetStyle,
		dueDateTime,
		startDateTime,
		containerBgColor,
		containerBgImage,
		containerBorderType,
		containerBorderWidth,
		containerBorderColor,
		containerBorderRadius,
		containerAlignment,
		containerMargin,
		containerSize,
	} = attributes;

	const blockProps = useBlockProps.save({ className: "acd-block" });

	const containerStyle = {
		background: containerBgImage
			? `url(${containerBgImage}) center/cover no-repeat, ${containerBgColor}`
			: containerBgColor,
		borderRadius: `${containerBorderRadius.top || 12}px ${
			containerBorderRadius.right || 12
		}px ${containerBorderRadius.bottom || 12}px ${
			containerBorderRadius.left || 12
		}px`,
		...(containerBorderType !== "none"
			? {
					borderStyle: containerBorderType,
					borderWidth: `${containerBorderWidth.top || 0}px ${
						containerBorderWidth.right || 0
					}px ${containerBorderWidth.bottom || 0}px ${
						containerBorderWidth.left || 0
					}px`,
					borderColor: containerBorderColor,
			  }
			: {}),
		margin: `${containerMargin.top || 0}px ${containerMargin.right || 0}px ${
			containerMargin.bottom || 0
		}px ${containerMargin.left || 0}px`,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "40px 24px",
		width: presetStyle === "preset-1" ? `${containerSize}%` : "100%",
		boxSizing: "border-box",
	};

	return (
		<div {...blockProps}>
			<div style={{ textAlign: containerAlignment || "center" }}>
				<div
					className={`acd-container acd-${presetStyle}`}
					style={containerStyle}
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
