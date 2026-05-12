import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect, useRef } from "@wordpress/element";
import Inspector from "./inspector";
import { renderCountdown } from "./presets";
import { getTimeLeft } from "./countdown-utils";

const Edit = ({ attributes, setAttributes }) => {
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

	const [timeData, setTimeData] = useState(() => getTimeLeft(dueDateTime));
	const timerRef = useRef(null);

	/* Live countdown tick */
	useEffect(() => {
		setTimeData(getTimeLeft(dueDateTime));
		timerRef.current = setInterval(() => {
			setTimeData(getTimeLeft(dueDateTime));
		}, 1000);
		return () => clearInterval(timerRef.current);
	}, [dueDateTime, startDateTime]);

	const blockProps = useBlockProps({ className: "acd-block-editor-wrap" });

	/* Container styles */
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
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				{/* Info bar */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "6px 12px",
						background: "#1e1e1e",
						borderRadius: "6px 6px 0 0",
					}}
				>
					<span style={{ color: "#fff", fontWeight: 600, fontSize: 11 }}>
						⏱ Advanced Countdown
					</span>
					<span style={{ color: "#777", fontSize: 11 }}>{presetStyle}</span>
				</div>

				{/* Preview */}
				<div style={{ textAlign: containerAlignment || "center" }}>
					<div style={containerStyle}>
						{renderCountdown(attributes, timeData)}
					</div>
				</div>

				{/* Hint */}
				<div
					style={{
						padding: "5px 12px",
						background: "#f8f8f8",
						borderTop: "1px solid #e8e8e8",
						borderRadius: "0 0 6px 6px",
						fontSize: 11,
						color: "#999",
					}}
				>
					{__(
						"Timer is live in this preview. All styles update in real time.",
						"frontis-blocks",
					)}
				</div>
			</div>
		</>
	);
};

export default Edit;
