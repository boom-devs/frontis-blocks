import { useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import generateCircleMenuStyle from "./styling";

export default function save({ attributes }) {
	const {
		blockID,
		blockStyle,
		menuPosition,
		menuPreset,
		menuItems,
		submenuSpace,
		submenuHorizontalSpace,
		submenuHorizontalAlign,
		mainMenuContentType,
		mainMenuOpenText,
		mainMenuCloseText,
		mainMenuOpenType,
		mainMenuCloseType,
		mainMenuIcon,
		mainMenuCloseIcon,
		mainMenuImage,
		mainMenuImageAlt,
		mainMenuImageSize,
		mainMenuCloseImage,
		mainMenuCloseImageAlt,
		mainMenuCloseImageSize,
		triggerType,
		submenuShowTitleOnHover,

		circleMenuGlobalWraperID,
		circleMenuGlobalWraperClass,
	} = attributes;

	const blockProps = useBlockProps.save({
		id: circleMenuGlobalWraperID || undefined,
		className: `fb-circle-menu-main-wrapper ${blockID} ${menuPosition} ${circleMenuGlobalWraperClass} ${
			attributes.circleMenuDesktopSwitcher ? "fb-desktop-responsive" : ""
		} ${attributes.circleMenuTabletSwitcher ? "fb-tablet-responsive" : ""} ${
			attributes.circleMenuMobileSwitcher ? "fb-mobile-responsive" : ""
		}`,
	});

	const dynamicCSS = generateCircleMenuStyle(attributes);

	const renderMainContent = () => {
		return (
			<>
				<div className="fb-circle-menu-open-icon">
					{mainMenuContentType === "text" ? (
						<span className="fb-circle-menu-text">{mainMenuOpenText}</span>
					) : mainMenuOpenType === "icon" ? (
						mainMenuIcon ? (
							renderSVG(mainMenuIcon)
						) : (
							""
						)
					) : (
						mainMenuImage && (
							<img
								src={mainMenuImage}
								alt={mainMenuImageAlt}
								style={{ objectFit: mainMenuImageSize }}
							/>
						)
					)}
				</div>
				<div className="fb-circle-menu-close-icon">
					{mainMenuContentType === "text" ? (
						<span className="fb-circle-menu-text">{mainMenuCloseText}</span>
					) : mainMenuCloseType === "icon" ? (
						mainMenuCloseIcon ? (
							renderSVG(mainMenuCloseIcon)
						) : (
							""
						)
					) : (
						mainMenuCloseImage && (
							<img
								src={mainMenuCloseImage}
								alt={mainMenuCloseImageAlt}
								style={{ objectFit: mainMenuCloseImageSize }}
							/>
						)
					)}
				</div>
			</>
		);
	};

	return (
		<div {...blockProps}>
			<div className={`fb-parent-wrapper ${blockID}`}>
				<div
					className="fb-circle-menu"
					data-radiusgap={submenuSpace?.Desktop || 0}
					data-preset={menuPreset}
					data-trigger={triggerType}
					data-horizontalspace={submenuHorizontalSpace?.Desktop || 0}
					data-horizontposition={submenuHorizontalAlign}
				>
					<div className="fb-circle-menu-center">
						<div className="fb-circle-menu-toggle">{renderMainContent()}</div>
					</div>

					<ul className="fb-circle-menu-items">
						{menuItems.map((item, index) => (
							<li key={index} className="fb-circle-menu-item">
								<a
									href={item.link ? item.link : "#"}
									className="fb-circle-menu-link"
								>
									<div className="fb-circle-menu-icon">
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
			</div>
			<style>{dynamicCSS}</style>
		</div>
	);
}
