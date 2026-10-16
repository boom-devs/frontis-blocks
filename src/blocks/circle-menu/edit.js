import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useRef, useState, useEffect, useMemo } from "@wordpress/element";
import loadGoogleFont from "@Utils/loadGoogleFont";
import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import "./editor.scss";

import { useDeviceType } from "@Config/displayType";
import generateCircleMenuStyle from "./styling";




export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
		menuPosition,
		menuItems,
		mainMenuContentType,
		mainMenuOpenText,
		mainMenuCloseText,
		mainMenuOpenType,
		mainMenuCloseType,
		mainMenuIcon,
		mainMenuCloseIcon,
		mainMenuImage,
		mainMenuImageAlt,
		mainMenuCloseImage,
		mainMenuCloseImageAlt,
		triggerType,
		submenuShowTitleOnHover,
		circleMenuDesktopSwitcher,
		circleMenuTabletSwitcher,
		circleMenuMobileSwitcher,
		circleMenuGlobalWraperID,
		circleMenuGlobalWraperClass,
	} = attributes;

	/** Local States & References */
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const itemRefs = useRef([]);

	/** Block Initialization Hooks */
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-circle-menu",
		isSelected,
		attributes,
		setAttributes,
	});

	const deviceType = useDeviceType();

	/** Style Generation (Dynamic CSS) */
	useEffect(() => {
		if (blockID) {
			const css = generateCircleMenuStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);

	/** Typography Font Loading */
	useEffect(() => {
		if (attributes.mainMenuTextFontFamily) {
			loadGoogleFont(attributes.mainMenuTextFontFamily);
		}
		if (attributes.submenuTextFontFamily) {
			loadGoogleFont(attributes.submenuTextFontFamily);
		}
	}, [attributes.mainMenuTextFontFamily, attributes.submenuTextFontFamily]);

	/** Block Props & Global Wrappers Setup */
	const blockProps = useBlockProps({
		className: `fb-circle-menu-main-wrapper ${blockID} ${menuPosition} is-editor ${circleMenuDesktopSwitcher ? "fb-desktop-responsive" : ""
			} ${circleMenuTabletSwitcher ? "fb-tablet-responsive" : ""} ${circleMenuMobileSwitcher ? "fb-mobile-responsive" : ""
			}`,
	});

	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);


	/** Mouse Event Handlers (Hover Trigger) */
	const [hoverTimer, setHoverTimer] = useState(null);

	useEffect(() => {
		if (isSelected) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [isSelected]);

	const handleMouseEnter = () => {
		if (triggerType === "hover") {
			if (hoverTimer) clearTimeout(hoverTimer);
			setIsOpen(true);
		}
	};

	const handleMouseLeave = () => {
		if (triggerType === "hover") {
			const timer = setTimeout(() => {
				if (!isSelected) {
					setIsOpen(false);
				}
			}, 500);
			setHoverTimer(timer);
		}
	};

	/** Render Main Menu Center Content */
	const renderMainContent = () => {
		return (
			<>
				<div className="fb-circle-menu-open-icon">
					{mainMenuContentType === "text" ? ( <span className="fb-circle-menu-text">{mainMenuOpenText}</span>
					) : mainMenuOpenType === "icon" ? (mainMenuIcon ? ( renderSVG(mainMenuIcon)) : ( "")
					) : ( mainMenuImage && <img src={mainMenuImage} alt={mainMenuImageAlt} /> )}
				</div>
				<div className="fb-circle-menu-close-icon">
					{mainMenuContentType === "text" ? (<span className="fb-circle-menu-text">{mainMenuCloseText}</span>
					) : mainMenuCloseType === "icon" ? ( mainMenuCloseIcon ? ( renderSVG(mainMenuCloseIcon)) : ( "" )
					) : ( mainMenuCloseImage && ( <img src={mainMenuCloseImage} alt={mainMenuCloseImageAlt} /> ))}
				</div>
			</>
		);
	};




	/** Final Render Output for Block Editor */
	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper ${isOpen ? "is-active" : ""} ${circleMenuGlobalWraperClass}`}
					ref={panelRef}
					id={circleMenuGlobalWraperID}
				>
					<div ref={menuRef} className="fb-circle-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
						data-radiusgap={attributes.submenuSpace?.[deviceType] || attributes.submenuSpace?.Desktop || 0}
						data-preset={attributes.menuPreset}
						data-trigger={attributes.triggerType}
						data-horizontalspace={attributes.submenuHorizontalSpace?.[deviceType] || attributes.submenuHorizontalSpace?.Desktop || 0}
						data-horizontposition={attributes.submenuHorizontalAlign}
					>
						<div className={`fb-circle-menu-center ${isOpen ? "is-active" : ""}`} onClick={() => triggerType === "click" && setIsOpen(!isOpen)}>
							<div className="fb-circle-menu-toggle">{renderMainContent()}</div>
						</div>

						<ul className="fb-circle-menu-items">
							{menuItems.map((item, index) => (
								<li key={item.id} className="fb-circle-menu-item">
									<a href={item.link ? item.link : "#"} className="fb-circle-menu-link" onClick={(e) => e.preventDefault()} >
										<div className="fb-circle-menu-icon" aria-hidden="true">
											{!item.contentType || item.contentType === "icon" ? item.icon ? renderSVG(item.icon) : "" : item.image && (
											<img src={item.image} alt={item.imageAlt} style={{objectFit: item.imageSize || "cover",}}/>
											)}
										</div>
									</a>
									{submenuShowTitleOnHover && (<div className="fb-circle-menu-tooltip">{item.title}</div>)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
