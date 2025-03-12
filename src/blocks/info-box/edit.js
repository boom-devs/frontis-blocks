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
		infoButtonLink,
		infobtnTargetUrl,
		infoIconVerticalPosition,
		infoCardAlignment,

		infoBoxGlobalWraperID,
		infoBoxGlobalWraperClass,

		infoBoxDesktopSwitcher,
		infoBoxTabletSwitcher,
		infoBoxMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-info-box-main-wrapper ${blockID} ${infoBoxDesktopSwitcher && 'fb-desktop-responsive'} ${infoBoxTabletSwitcher && 'fb-tablet-responsive'} ${infoBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

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

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-info-box-wrapper ${blockID} ${infoBoxGlobalWraperClass}`} id={infoBoxGlobalWraperID} ref={panelRef}>
					<div className={`fb-info-box-wrapper-inner ${blockID}`}>
						<div className="fb-info-media-container">
						<div
							className="fb-info-media-wrapper"
						>
							{mediaSwitcher === "image" && (
								<img src={attributes.infoMediaUrl} />
							)}
							{mediaSwitcher === "icon" && (
								<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
							)}
						</div>
						</div>
						<div className="fb-info-box-content-wrapper">
							<RichText
								tagName={headingTag}
								value={Heading_Text}
								onChange={(value) =>
									setAttributes({ Heading_Text: value })
								}
								placeholder={__("Info Heading", "frontis-block")}
								className="fb-heading"
							/>

							{Sub_Heading_Switcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									placeholder={__("Info description", "frontis-block")}
									className="fb-description"
								/>
							)}
							{info_Button_Switcher && (
								<div className="fb-info-button">
								<div className="fb-info-btn-container">
								<a
									className="fb-info-btn-wrapper"
									href={infoButtonLink} 
									target={infobtnTargetUrl ? '_blank' : undefined}
									rel={infobtnTargetUrl ? 'noopener noreferrer' : undefined}
									onClick={handleButtonClick}
								>
									<RichText
										value={info_Button_Text}
										tagName={"span"}
										onChange={(value) =>
											setAttributes({ info_Button_Text: value })
										}
										placeholder={__("Info Button", "frontis-block")}
										
										
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
