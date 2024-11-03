import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { Card } from "@wordpress/components";
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		Heading_Text,
		Heading_Tag,
		Alignment,
		separator,
		Sub_Heading_Switcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		info_Button_Switcher,
		info_Button_Text,
		info_Button_Link,
		wrapperAlignment,
		infoBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
        infoIconPosition,
		btnTwoSwitcher,
		btnTwoIconPosition,
		btnTwoIcon,
		buttonTwoIconSwitcher,
		btnTwoText
	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<BlockControls>
				<AlignmentToolbar
					value={contentAlignment}
					onChange={(value) => setAttributes({ contentAlignment: value })}
					controls={["left", "center", "right", "justify"]}
				/>
			</BlockControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-cta-content-wrapper ${blockID}`}>
					<div className={`fb-cta-content-wrapper-inner ${blockID}`}>

						<div className="fb-cta-content-wrapper">
							<RichText
								tagName={Heading_Tag}
								value={Heading_Text}
								onChange={(value) => setAttributes({ text: value })}
								placeholder={__("CTA Title", "frontis-block")}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>

							{Sub_Heading_Switcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									placeholder={__("CTA Description", "frontis-block")}
									className="fb-description"
									style={{ textAlign: descAlignment }}
								/>
							)}

							<div className="fb-cta-buttons-wrapper" style={{ justifyContent: buttonAlignment }}>
								{info_Button_Switcher && (
									<div className="fb-cta-btn-one-wrapper" style={{

									}}>

										<div
											className="fb-cta-btn-wrapper"
											style={{
												flexDirection:
													btnIconPosition === "left" ? "row-reverse" : "row",
											}}
										>
											<RichText
												value={info_Button_Text}
												tagName={"span"}
												onChange={(value) =>
													setAttributes({info_Button_Text: value})
												}
												placeholder={__("CTA Button", "frontis-block")}
												className="fb-cta-button"
											/>
											{buttonIconSwitcher && (
												<div className="fb-btn-icon-wrapper">
													{renderSVG(btnIcon)}
												</div>
											)}
										</div>
									</div>
								)}
								{btnTwoSwitcher && (
									<div className="fb-cta-btn-two-wrapper" style={{
									}}>
										<div
											className="fb-cta-btn-wrapper"
											style={{
												flexDirection:
													btnTwoIconPosition === "left" ? "row-reverse" : "row",
											}}
										>
											<RichText
												value={btnTwoText}
												tagName={"span"}
												onChange={(value) =>
													setAttributes({btnTwoText: value})
												}
												placeholder={__("CTA Button", "frontis-block")}
												className="fb-cta-button"
											/>
											{buttonTwoIconSwitcher && (
												<div className="fb-btn-icon-wrapper">
													{renderSVG(btnTwoIcon)}
												</div>
											)}
										</div>
									</div>
								)}
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}
