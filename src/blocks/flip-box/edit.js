import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useRef } from "@wordpress/element";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';


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
		flipMediaUrl,
		flipBackMediaUrl,
		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,

		flipBack_Button_Switcher,
		flipBack_Button_Text,
		flipBack_Button_Link,
		flipBackBoxBg,
		flipBackIconPosition,
		flipBackButtonLink,
		flipBackbtnTargetUrl,
		flipBackIconVerticalPosition,
		flipBackCardAlignment,

		flipBackBoxGlobalWraperID,
		flipBackBoxGlobalWraperClass,

		flipBackBoxDesktopSwitcher,
		flipBackBoxTabletSwitcher,
		flipBackBoxMobileSwitcher,
		headingTagBack,
		headingTextBack,
		flipBackContent,
		flipBackContentTag,
		descSwitcherBack,
		descAlignmentBack,
		mediaSwitcherBack,
		iconBack,
		flipSelectedSide,
		flipAnimationType,
		buttonIconSwitcherBack,
		btnIconBack
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});


	const handleButtonClick = (event) => {
		event.preventDefault();
	};


	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`}
					id={flipBoxGlobalWraperID}
				>
					<div className={`fb-flipper-wrapper fb-editor-mode ${flipSelectedSide === 'back' ? 'fb-show-back' : ''} ${flipAnimationType}`} >
						<div className={`fb-flipbox-front ${flipSelectedSide === 'front' ? 'fb-active-side' : 'fb-inactive-side'}`}>
							<div className="fb-flipbox-content-wrapper">
								<div className="fb-flip-media-container">
									<div className="fb-flip-media-wrapper">
										{mediaSwitcher === "image" && (
											<img src={flipMediaUrl} alt="Front media" />
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
										placeholder={__("Flip Heading", "frontis-block")}
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
						<div className={`fb-flipbox-back ${flipSelectedSide === 'back' ? 'fb-active-side' : 'fb-inactive-side'}`}>
							<div className="fb-flipbox-content-wrapper">
								<div className="fb-flip-back-media-container">
									<div className="fb-flip-back-media-wrapper">
										{mediaSwitcherBack === "image" && (
											<img src={flipBackMediaUrl} alt="Back media" />
										)}
										{mediaSwitcherBack === "icon" && (
											<div className="fb-icon-wrapper">{renderSVG(iconBack)}</div>
										)}
									</div>
								</div>
								<div className="fb-flip-back-box-content-wrapper">
									<RichText
										tagName={headingTagBack}
										value={headingTextBack}
										onChange={(value) =>
											setAttributes({ headingTextBack: value })
										}
										placeholder={__("Back Title", "frontis-block")}
										className="fb-heading"
									/>

									{descSwitcherBack && (
										<RichText
											tagName={flipBackContentTag}
											value={flipBackContent}
											onChange={(value) =>
												setAttributes({ flipBackContent: value })
											}
											placeholder={__("Back description", "frontis-block")}
											className="fb-description"
										/>
									)}
									{flipBack_Button_Switcher && (
										<div className="fb-flip-back-button">
											<div className="fb-flip-back-btn-container">
												<a
													className="fb-flip-back-btn-wrapper"
													href={flipBackButtonLink}
													target={flipBackbtnTargetUrl ? '_blank' : undefined}
													rel={flipBackbtnTargetUrl ? 'noopener noreferrer' : undefined}
													onClick={handleButtonClick}
												>
													<RichText
														value={flipBack_Button_Text}
														tagName={"span"}
														onChange={(value) =>
															setAttributes({ flipBack_Button_Text: value })
														}
														placeholder={__("Flip Back Button", "frontis-block")}
													/>
													{buttonIconSwitcherBack && (
														<div className="fb-btn-icon-wrapper">
															{renderSVG(btnIconBack)}
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
				</div>
			</div>
		</>
	);
}
