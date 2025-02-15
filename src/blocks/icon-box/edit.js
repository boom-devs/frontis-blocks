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
import { useRef } from "@wordpress/element";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		Heading_Text,
		headingTag,
		Alignment,
		separator,
		Sub_Heading_Switcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		icon_Box_Button_Switcher,
		icon_Box_Button_Text,
		icon_Box_Button_Link,
		wrapperAlignment,
		iconBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
        iconBoxIconPosition,
		iconBoxButtonLink,
		iconBoxbtnTargetUrl,
		iconBoxIconVerticalPosition,
		iconBoxCardAlignment,

		iconBoxGlobalWraperID,
		iconBoxGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps();

	// Prevent link navigation in the editor and focus on text
    const handleButtonClick = (event) => {
        event.preventDefault();
    };

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);
	

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

			<div {...blockProps} id={blockID} className={`fb-icon-box-area ${blockID} ${iconBoxGlobalWraperClass}`}>
				<div className={`fb-parent-wrapper fb-icon-box-wrapper ${blockID}`} id={iconBoxGlobalWraperID} ref={panelRef}>
					<div className={`fb-icon-box-wrapper-inner ${blockID}`}>
						<div className="fb-icon-media-container">
						<div
							className="fb-icon-media-wrapper"
						>
							{mediaSwitcher === "image" && (
								<img src={attributes.iconBoxMediaUrl} />
							)}
							{mediaSwitcher === "icon" && (
								<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
							)}
						</div>
						</div>
						<div className="fb-icon-box-content-wrapper">
							<RichText
								tagName={headingTag}
								value={Heading_Text}
								onChange={(value) => setAttributes({ text: value })}
								placeholder={__("Icon Heading", "frontis-block")}
								className="fb-heading"
							/>

							{Sub_Heading_Switcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									placeholder={__("Icon description", "frontis-block")}
									className="fb-description"
								/>
							)}
							{icon_Box_Button_Switcher && (
								<div className="fb-icon-button">
								<div className="fb-icon-btn-container">
								<a
									className="fb-icon-btn-wrapper"
									href={iconBoxButtonLink} 
									target={iconBoxbtnTargetUrl ? '_blank' : undefined}
									rel={iconBoxbtnTargetUrl ? 'noopener noreferrer' : undefined}
									onClick={handleButtonClick}
								>
									<RichText
										value={icon_Box_Button_Text}
										tagName={"span"}
										onChange={(value) =>
											setAttributes({ icon_Box_Button_Text: value })
										}
										placeholder={__("Icon Button", "frontis-block")}
										
										
									/>
									{buttonIconSwitcher && (
										<div className="fb-btn-icon-wrapper">
											{renderSVG(btnIcon)}
										</div>
									)}
								</a>
								</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
