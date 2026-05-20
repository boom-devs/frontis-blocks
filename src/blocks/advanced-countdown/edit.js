import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect, useRef } from "@wordpress/element";
import Inspector from "./inspector";
import { renderCountdown } from "./presets";
import { getTimeLeft } from "./countdown-utils";
import generateStyling from "./styling";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";

const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {
	const { blockID, presetStyle, dueDateTime, startDateTime } = attributes;

	// Generate block ID on mount
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-advanced-countdown",
		isSelected,
		attributes,
		setAttributes,
	});

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

	const blockProps = useBlockProps({
		className: `fb-advanced-countdown-editor fb-block-editor-wrapper ${
			blockID || ""
		}`,
	});

	const dynamicStyles = generateStyling(attributes);

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<style>{dynamicStyles}</style>
			<div {...blockProps}>
				{/* Info bar */}
				<div className="acd-editor-info-bar">
					<span className="acd-editor-title">⏱ Advanced Countdown</span>
					<span className="acd-editor-preset-label">{presetStyle}</span>
				</div>

				{/* Preview */}
				<div className="acd-preview-area">
					<div className={`acd-container acd-${presetStyle}`}>
						{renderCountdown(attributes, timeData)}
					</div>
				</div>

				{/* Hint */}
				<div className="acd-editor-hint">
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
