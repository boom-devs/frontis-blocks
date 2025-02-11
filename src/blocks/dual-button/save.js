import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		ButtonAlignment,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonIcon,
		ButtonTwoText,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		ButtonTwoIcon,

		connectorSwitcher,
		connectorText,
		
		buttonTwoIconAlign,
		buttonIconAlign,
		buttonsDirection,
		btnIconPosition,
		btnTwoIconPosition,

		dualButtonGlobalWraperID,
		dualButtonGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<>
			<div {...blockProps} id={blockID} className={dualButtonGlobalWraperClass}>
				<div className={`fb-parent-wrapper fb-dual-button-container ${blockID}`} id={dualButtonGlobalWraperID}>
					<div
						className="fb-dual-button-wrapper"
						style={{
							justifyContent: ButtonAlignment,
							flexDirection: buttonsDirection === "vertical" ? "row" : "column",
						}}
					>
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button fb-dual-button-one"
								href={ButtonUrl}
								target={ButtonTargetUrl ? "_blank" : undefined}
								rel={ButtonTargetUrl ? "noopener noreferrer" : undefined}
								style={{
									flexDirection:
										btnIconPosition === "left" ? "row-reverse" : "row",
								}}
							>
								<RichText.Content
									tagName="span"
									value={ButtonText}
									className="fb-advanced-button-text"
								/>
								{buttonIconAlign === "icon-text" && (
									<div className="fb-advanced-button-icon-wrapper">
										<div className="fb-advanced-button-icon">
											{renderSVG(ButtonIcon)}
										</div>
									</div>
								)}
							</a>
						</div>
						{connectorSwitcher && (
							<div className="fb-dual-button-connector">
								<RichText.Content
									tagName="span"
									value={connectorText}
									className="fb-dual-button-connector-text"
								/>
							</div>
						)}
						<div className="fb-dual-button-two-wrapper">
							<a
								className="fb-advanced-button fb-dual-button-two"
								href={ButtonTwoUrl}
								target={ButtonTwoTargetUrl ? "_blank" : undefined}
								rel={ButtonTwoTargetUrl ? "noopener noreferrer" : undefined}
								style={{
									flexDirection:
										btnTwoIconPosition === "left" ? "row-reverse" : "row",
								}}
							>
								<RichText.Content
									tagName="span"
									value={ButtonTwoText}
									className="fb-advanced-button-text"
								/>
								{buttonTwoIconAlign === "icon-text" && (
									<div className="fb-advanced-button-icon-wrapper">
										<div className="fb-advanced-button-icon">
											{renderSVG(ButtonTwoIcon)}
										</div>
									</div>
								)}
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
