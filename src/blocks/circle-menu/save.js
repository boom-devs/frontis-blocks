import { useBlockProps } from '@wordpress/block-editor';
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
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-circle-menu-main-wrapper ${blockID} ${menuPosition}`,
	});

	const dynamicCSS = generateCircleMenuStyle(attributes);

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
			<style>{dynamicCSS}</style>
		</div>
	);
}
