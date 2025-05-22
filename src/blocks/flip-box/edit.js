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
		descSwitcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		flip_Button_Switcher,
		flip_Button_Text,
		flip_Button_Link,
		wrapperAlignment,
		flipBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
        flipIconPosition,
		flipButtonLink,
		flipbtnTargetUrl,
		flipIconVerticalPosition,
		flipCardAlignment,

		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
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
				<div className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`} id={flipBoxGlobalWraperID} ref={panelRef}>
					<div className={`fb-flip-box-wrapper-inner ${blockID}`}>
						<div className="fb-flip-media-container">
						<div
							className="fb-flip-media-wrapper"
						>
							{mediaSwitcher === "image" && (
								<img src={attributes.flipMediaUrl} />
							)}
							{mediaSwitcher === "icon" && (
								<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
							)}
						</div>
						</div>
						<div className="fb-flip-box-content-wrapper">
							<RichText
								tagName={headingTag}
								value={Heading_Text}
								onChange={(value) =>
									setAttributes({ Heading_Text: value })
								}
								placeholder={__("flip Heading", "frontis-block")}
								className="fb-heading"
							/>

							{descSwitcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									placeholder={__("flip description", "frontis-block")}
									className="fb-description"
								/>
							)}
							{flip_Button_Switcher && (
								<div className="fb-flip-button">
								<div className="fb-flip-btn-container">
								<a
									className="fb-flip-btn-wrapper"
									href={flipButtonLink} 
									target={flipbtnTargetUrl ? '_blank' : undefined}
									rel={flipbtnTargetUrl ? 'noopener noreferrer' : undefined}
									onClick={handleButtonClick}
								>
									<RichText
										value={flip_Button_Text}
										tagName={"span"}
										onChange={(value) =>
											setAttributes({ flip_Button_Text: value })
										}
										placeholder={__("flip Button", "frontis-block")}
										
										
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
