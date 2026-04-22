import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useRef, useState, useEffect, useMemo } from "@wordpress/element";
import loadGoogleFont from "@Utils/loadGoogleFont";
import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import "./editor.scss";

import generateCircleMenuStyle from "./styling";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,
		menuPosition,
		menuPreset,
		menuItems,
		submenuSpace,
		submenuHorizontalSpace,
		submenuHorizontalAlign,
		mainMenuOpenType,
		mainMenuCloseType,
		mainMenuIcon,
		mainMenuCloseIcon,
		mainMenuImage,
		mainMenuImageAlt,
		mainMenuImageID,
		mainMenuImageSize,
		mainMenuCloseImage,
		mainMenuCloseImageAlt,
		mainMenuCloseImageSize,
		triggerType,
		submenuShowTitleOnHover,
	} = attributes;

	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const itemRefs = useRef([]);

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-circle-menu",
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateCircleMenuStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `fb-circle-menu-main-wrapper ${blockID} ${
			attributes.menuPosition
		} ${isSelected || isOpen ? "is-active" : ""}`,
	});

	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	// Replicate positioning logic from view.js
	useEffect(() => {
		const menu = menuRef.current;
		const items = itemRefs.current.filter(Boolean);
		const radiusGap = parseInt(submenuSpace?.Desktop || 0, 10);
		const horizontalGap = parseInt(submenuHorizontalSpace?.Desktop || 0, 10);
		const radius = 100 + radiusGap;
		const isMenuOpen = isSelected || isOpen;

		if (!items.length) return;

		if (isMenuOpen) {
			const total = items.length;
			let direction = "right";
			let startAngle = 0;
			let spreadAngle = 360;

			if (menuPreset === "circular-menu") {
				startAngle = -90;
				spreadAngle = 360;
			} else if (menuPreset === "horizontal-menu") {
				startAngle = 180;
				spreadAngle = 0;

				// Exact logic from view.js
				if (menuPosition === "bottom-right") {
					direction = submenuHorizontalAlign === "vertical" ? "top" : "left";
				} else if (menuPosition === "bottom-left") {
					direction = submenuHorizontalAlign === "vertical" ? "top" : "right";
				} else if (menuPosition === "top-center") {
					direction = submenuHorizontalAlign === "vertical" ? "bottom" : "left";
				} else if (menuPosition === "bottom-center") {
					direction = submenuHorizontalAlign === "vertical" ? "top" : "left";
				} else if (menuPosition === "center-right") {
					direction = submenuHorizontalAlign === "vertical" ? "left" : "bottom";
				} else if (menuPosition === "center-left") {
					direction = submenuHorizontalAlign === "vertical" ? "top" : "right";
				} else if (menuPosition === "top-right") {
					direction = submenuHorizontalAlign === "vertical" ? "bottom" : "left";
				} else if (menuPosition === "top-left") {
					direction =
						submenuHorizontalAlign === "vertical" ? "bottom" : "right";
				}
			} else {
				// half-circular
				if (menuPosition === "bottom-right") {
					startAngle = 180;
					spreadAngle = 90;
				} else if (menuPosition === "bottom-left") {
					startAngle = 270;
					spreadAngle = 90;
				} else if (menuPosition === "top-right") {
					startAngle = 90;
					spreadAngle = 90;
				} else if (menuPosition === "top-left") {
					startAngle = 0;
					spreadAngle = 90;
				} else if (menuPosition === "top-center") {
					startAngle = 0;
					spreadAngle = 180;
				} else if (menuPosition === "bottom-center") {
					startAngle = 180;
					spreadAngle = 180;
				} else if (menuPosition === "center-right") {
					startAngle = 90;
					spreadAngle = 180;
				} else if (menuPosition === "center-left") {
					startAngle = 270;
					spreadAngle = 180;
				}
			}

			items.forEach((item, i) => {
				let x = 0,
					y = 0;
				if (menuPreset === "horizontal-menu") {
					const firstItem = items[0];
					const itemWidth = firstItem.offsetWidth || 62;
					const gap = itemWidth + horizontalGap;
					if (direction === "left") x = -(i + 1) * gap;
					if (direction === "right") x = (i + 1) * gap;
					if (direction === "top") y = -(i + 1) * gap;
					if (direction === "bottom") y = (i + 1) * gap;
				} else {
					let angle;
					if (total === 1) {
						angle = startAngle + spreadAngle / 2;
					} else {
						angle =
							menuPreset === "circular-menu"
								? startAngle + (spreadAngle / total) * i
								: startAngle + (spreadAngle / (total - 1)) * i;
					}
					const rad = angle * (Math.PI / 180);
					x = Math.cos(rad) * radius;
					y = Math.sin(rad) * radius;
				}

				// Timing from view.js: i * 100ms
				item.style.transitionDelay = `${i * 0.1}s`;
				item.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
				item.style.opacity = "1";
				item.style.pointerEvents = "auto";
			});
		} else {
			items.forEach((item, i) => {
				// Timing from view.js: (items.length - 1 - i) * 50ms
				item.style.transitionDelay = `${(items.length - 1 - i) * 0.05}s`;
				item.style.transform = "translate(-50%, -50%) scale(0)";
				item.style.opacity = "0";
				item.style.pointerEvents = "none";
			});
		}
	}, [
		isOpen,
		isSelected,
		menuItems,
		menuPreset,
		menuPosition,
		submenuSpace,
		submenuHorizontalSpace,
		submenuHorizontalAlign,
	]);

	const [hoverTimer, setHoverTimer] = useState(null);

	const handleMouseEnter = () => {
		if (triggerType === "hover") {
			if (hoverTimer) clearTimeout(hoverTimer);
			setIsOpen(true);
		}
	};

	const handleMouseLeave = () => {
		if (triggerType === "hover") {
			const timer = setTimeout(() => {
				setIsOpen(false);
			}, 500); // 500ms delay from view.js
			setHoverTimer(timer);
		}
	};

	const renderMainContent = () => {
		return (
			<>
				<div className="fb-circle-menu-open-icon">
					{mainMenuOpenType === "icon"
						? mainMenuIcon
							? renderSVG(mainMenuIcon)
							: ""
						: mainMenuImage && (
								<img
									src={mainMenuImage}
									alt={mainMenuImageAlt}
									style={{ objectFit: mainMenuImageSize }}
								/>
						  )}
				</div>
				<div className="fb-circle-menu-close-icon">
					{mainMenuCloseType === "icon"
						? mainMenuCloseIcon
							? renderSVG(mainMenuCloseIcon)
							: ""
						: mainMenuCloseImage && (
								<img
									src={mainMenuCloseImage}
									alt={mainMenuCloseImageAlt}
									style={{ objectFit: mainMenuCloseImageSize }}
								/>
						  )}
				</div>
			</>
		);
	};

	return (
		<div {...blockProps}>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div
				ref={menuRef}
				className="fb-circle-menu"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				data-radiusgap={attributes.submenuSpace?.Desktop || 0}
				data-preset={attributes.menuPreset}
				data-trigger={attributes.triggerType}
				data-horizontalspace={attributes.submenuHorizontalSpace?.Desktop || 0}
				data-horizontposition={attributes.submenuHorizontalAlign}
			>
				<div
					className={`fb-circle-menu-center ${
						isSelected || isOpen ? "is-active" : ""
					}`}
					onClick={() => triggerType === "click" && setIsOpen(!isOpen)}
				>
					<div className="fb-circle-menu-toggle">{renderMainContent()}</div>
				</div>

				<ul className="fb-circle-menu-items">
					{menuItems.map((item, index) => (
						<li
							key={item.id}
							ref={(el) => (itemRefs.current[index] = el)}
							className="fb-circle-menu-item"
						>
							<a
								href={item.link ? item.link : "#"}
								className="fb-circle-menu-link"
								onClick={(e) => e.preventDefault()}
							>
								<div className="fb-circle-menu-icon" aria-hidden="true">
									{item.icon ? renderSVG(item.icon) : ""}
								</div>
							</a>
							{submenuShowTitleOnHover && (
								<div className="fb-circle-menu-tooltip">{item.title}</div>
							)}
						</li>
					))}
				</ul>
			</div>
			<style>{blockStyle}</style>
		</div>
	);
}
