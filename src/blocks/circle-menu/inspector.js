import { __ } from "@wordpress/i18n";
import { memo, useState, useRef, useEffect } from "@wordpress/element";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import {
	PanelBody,
	BaseControl,
	Button,
	ButtonGroup,
	SelectControl,
	ToggleControl,
	TextControl,
} from "@wordpress/components";

import FB_InspectorControls from "@Components/InspectorControls";
import FB_Range from "@Components/range";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_ColorControl from "@Components/color-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FBIconPicker from "@Components/icon-picker";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InputControl from "@Components/input-control";
import FB_ImageControl from "@Components/image-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import FB_TypographyControl from "@Components/typography-control";
import SortableItem from "./sortableItem";
import { useDeviceType } from "@Config/displayType";
import { BORDER_STYLES } from "@Constants/fbConstants";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		menuPosition,
		menuPreset,
		menuItems,
		submenuSpace,
		submenuSpaceUnits,
		submenuHorizontalSpace,
		submenuHorizontalSpaceUnits,
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
		mainMenuImageID,
		mainMenuImageSize,
		mainMenuCloseImage,
		mainMenuCloseImageAlt,
		mainMenuCloseImageID,
		mainMenuCloseImageSize,
		triggerType,
		submenuShowTitleOnHover,
		// Typography
		mainMenuTextGlobalTypographyData,
		mainMenuTextGlobalTypoSwitcher,
		mainMenuTextGlobalTypoType,
		mainMenuTextGlobalTypoOption,
		mainMenuTextFontFamily,
		mainMenuTextFontSize,
		mainMenuTextFontSizeUnits,
		mainMenuTextFontWeight,
		mainMenuTextFontStyle,
		mainMenuTextTransform,
		mainMenuTextDecoration,
		mainMenuTextLetterSpacing,
		mainMenuTextLetterSpacingUnits,
		mainMenuTextLineHeight,
		mainMenuTextLineHeightUnits,
		submenuTextGlobalTypographyData,
		submenuTextGlobalTypoSwitcher,
		submenuTextGlobalTypoType,
		submenuTextGlobalTypoOption,
		submenuTextFontFamily,
		submenuTextFontSize,
		submenuTextFontSizeUnits,
		submenuTextFontWeight,
		submenuTextFontStyle,
		submenuTextTransform,
		submenuTextDecoration,
		submenuTextLetterSpacing,
		submenuTextLetterSpacingUnits,
		submenuTextLineHeight,
		submenuTextLineHeightUnits,
		submenuTitleColor,
		submenuTitleBgColor,
		submenuTitleBgGradientColor,
		submenuTitleBgColorType,
		submenuTitleBgCustomGradientSwitcher,
		submenuTitleBgCustomGradientInputValue,
		submenuTitlePosition,
		// Background Type
		mainMenuNormalBackgroundType,
		mainMenuNormalGradientColor,
		mainMenuNormalCustomGradientSwitcher,
		mainMenuNormalCustomGradientInputValue,
		mainMenuHoverBackgroundType,
		mainMenuHoverGradientColor,
		mainMenuHoverCustomGradientSwitcher,
		mainMenuHoverCustomGradientInputValue,
		submenuNormalBackgroundType,
		submenuNormalGradientColor,
		submenuNormalCustomGradientSwitcher,
		submenuNormalCustomGradientInputValue,
		submenuHoverBackgroundType,
		submenuHoverGradientColor,
		submenuHoverCustomGradientSwitcher,
		submenuHoverCustomGradientInputValue,
		// Border Radius
		mainMenuBorderRadiusUnits,
		mainMenuBorderRadiusDesktop,
		mainMenuBorderRadiusTablet,
		mainMenuBorderRadiusMobile,
		mainMenuBorderRadiusLink,
		submenuBorderRadiusUnits,
		submenuBorderRadiusDesktop,
		submenuBorderRadiusTablet,
		submenuBorderRadiusMobile,
		submenuBorderRadiusLink,
		// Border
		mainMenuBorder,
		mainMenuBorderColor,
		mainMenuBorderHoverColor,
		mainMenuBorderUnits,
		mainMenuBorderDesktop,
		mainMenuBorderTablet,
		mainMenuBorderMobile,
		mainMenuBorderLink,
		submenuBorder,
		submenuBorderColor,
		submenuBorderHoverColor,
		submenuBorderUnits,
		submenuBorderDesktop,
		submenuBorderTablet,
		submenuBorderMobile,
		submenuBorderLink,
		// Box Shadow
		mainMenuBoxShadowSwitcher,
		mainMenuBoxShadowValues,
		mainMenuBoxShadowCssValue,
		mainMenuBoxShadowHoverValues,
		mainMenuBoxShadowHoverCssValue,
		submenuBoxShadowSwitcher,
		submenuBoxShadowValues,
		submenuBoxShadowCssValue,
		submenuBoxShadowHoverValues,
		submenuBoxShadowHoverCssValue,
		// Offsets
		offsetH,
		offsetV,
		activeOffsetH,
		activeOffsetV,
		// Main Menu Colors & Sizes
		mainMenuSize,
		mainMenuIconSize,
		mainMenuBgColorSwitcher,
		mainMenuBgColor,
		mainMenuBgHoverColor,
		mainMenuTextColorSwitcher,
		mainMenuTextColor,
		mainMenuTextHoverColor,
		mainMenuBorderColorSwitcher,
		// Sub Menu Colors & Sizes
		submenuSize,
		submenuIconSize,
		submenuBgColorSwitcher,
		submenuBgColor,
		submenuBgHoverColor,
		submenuIconColorSwitcher,
		submenuIconColor,
		submenuIconHoverColor,
		submenuBorderColorSwitcher,
		// Circle Menu Global Settings
		circleMenuGlobalPaddingLink,
		circleMenuGlobalPaddingDesktop,
		circleMenuGlobalPaddingTablet,
		circleMenuGlobalPaddingMobile,
		circleMenuGlobalPaddingUnits,
		circleMenuGlobalMarginLink,
		circleMenuGlobalMarginDesktop,
		circleMenuGlobalMarginTablet,
		circleMenuGlobalMarginMobile,
		circleMenuGlobalMarginUnits,
		circleMenuGlobalZIndex,
		circleMenuOverflow,
		circleMenuPositionType,
		circleMenuHZOrientationType,
		circleMenuVROrientationType,
		circleMenuHZLeftOffset,
		circleMenuHZLeftOffsetUnits,
		circleMenuHZRightOffset,
		circleMenuHZRightOffsetUnits,
		circleMenuVRTopOffset,
		circleMenuVRTopOffsetUnits,
		circleMenuVRBottomOffset,
		circleMenuVRBottomOffsetUnits,
		circleMenuGlobalWraperID,
		circleMenuGlobalWraperClass,
		circleMenuGlobalBgColorSwitcher,
		circleMenuGlobalNormalBackgroundType,
		circleMenuGlobalBgColor,
		circleMenuGlobalNormalGradientColor,
		circleMenuGlobalNormalCustomGradientSwitcher,
		circleMenuGlobalNormalCustomGradientInputValue,
		circleMenuGlobalHoverBackgroundType,
		circleMenuGlobalBgHoverColor,
		circleMenuGlobalHoverGradientColor,
		circleMenuGlobalHoverCustomGradientSwitcher,
		circleMenuGlobalHoverCustomGradientInputValue,
		circleMenuGlobalBgImageUrl,
		circleMenuGlobalBgImageAlt,
		circleMenuGlobalBgImageID,
		circleMenuGlobalBgImagePosition,
		circleMenuGlobalBgImageAttachment,
		circleMenuGlobalBgImageRepeat,
		circleMenuGlobalBgImageSize,
		circleMenuGlobalBgHoverImageUrl,
		circleMenuGlobalBgHoverImageAlt,
		circleMenuGlobalBgHoverImageID,
		circleMenuGlobalBgHoverImagePosition,
		circleMenuGlobalBgHoverImageAttachment,
		circleMenuGlobalBgHoverImageRepeat,
		circleMenuGlobalBgHoverImageSize,
		circleMenuGlobalBorder,
		circleMenuGlobalBorderColorSwitcher,
		circleMenuGlobalBorderColor,
		circleMenuGlobalBorderHoverColor,
		circleMenuGlobalBorderUnits,
		circleMenuGlobalBorderDesktop,
		circleMenuGlobalBorderTablet,
		circleMenuGlobalBorderMobile,
		circleMenuGlobalBorderLink,
		circleMenuGlobalBorderRadiusUnits,
		circleMenuGlobalBorderRadiusDesktop,
		circleMenuGlobalBorderRadiusTablet,
		circleMenuGlobalBorderRadiusMobile,
		circleMenuGlobalBorderRadiusLink,
		circleMenuGlobalBoxShadowSwitcher,
		circleMenuGlobalBoxShadowValues,
		circleMenuGlobalBoxShadowCssValue,
		circleMenuGlobalBoxShadowHoverValues,
		circleMenuGlobalBoxShadowHoverCssValue,
		circleMenuDesktopSwitcher,
		circleMenuTabletSwitcher,
		circleMenuMobileSwitcher,
		circleMenuGlobalCustomCSS,
	} = attributes;

	/** Start Local State & Device Context */
	const [offsetSwitcher, setOffsetSwitcher] = useState("before");
	const deviceType = useDeviceType();

	/** Start Component References */
	const menuItemsRef = useRef(menuItems);
	useEffect(() => {
		menuItemsRef.current = menuItems;
	}, [menuItems]);

	/** Add New Item Handler */
	const handleAddItem = (menuItemsRef, setAttributes) => {
		const newItem = {
			id: `item-${Date.now()}`,
			title: "New Item",
			contentType: "icon",
			icon: "fas fa-star",
			image: "",
			imageAlt: "",
			imageID: undefined,
			imageSize: "cover",
			link: "#",
		};
		const newItems = [...menuItemsRef.current, newItem];
		menuItemsRef.current = newItems;
		setAttributes({ menuItems: newItems });
	};

	/** Change/Update Item Property Handler */
	const handleChangeItem = (id, key, value, menuItemsRef, setAttributes) => {
		const newItems = menuItemsRef.current.map((item) => {
			if (item.id === id) {
				return { ...item, [key]: value };
			}
			return item;
		});
		menuItemsRef.current = newItems;
		setAttributes({ menuItems: newItems });
	};

	/** Delete Item Handler */
	const handleDeleteItem = (id, menuItemsRef, setAttributes) => {
		if (menuItemsRef.current.length > 1) {
			const newItems = menuItemsRef.current.filter((item) => item.id !== id);
			menuItemsRef.current = newItems;
			setAttributes({ menuItems: newItems });
		}
	};

	/** Duplicate Item Handler */
	const handleDuplicateItem = (id, menuItemsRef, setAttributes) => {
		const index = menuItemsRef.current.findIndex((item) => item.id === id);
		if (index !== -1) {
			const clonedItem = {
				...menuItemsRef.current[index],
				id: `item-${Date.now()}`,
			};
			const newItems = [...menuItemsRef.current];
			newItems.splice(index + 1, 0, clonedItem);
			menuItemsRef.current = newItems;
			setAttributes({ menuItems: newItems });
		}
	};

	/** Start Main Menu Border */
	const handleMainMenuBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (mainMenuBorderLink) {
			const newValue = { top: value, right: value, bottom: value, left: value };
			switch (deviceType) {
				case "Desktop":
					setAttributes({ mainMenuBorderDesktop: newValue });
					break;
				case "Tablet":
					setAttributes({ mainMenuBorderTablet: newValue });
					break;
				case "Mobile":
					setAttributes({ mainMenuBorderMobile: newValue });
					break;
			}
		} else {
			const current =
				deviceType === "Desktop"
					? mainMenuBorderDesktop
					: deviceType === "Tablet"
					? mainMenuBorderTablet
					: mainMenuBorderMobile || {};
			setAttributes({
				[`mainMenuBorder${deviceType}`]: { ...current, [position]: value },
			});
		}
	};
	const handleMainMenuBorderUnitsHandler = (unit) => {
		setAttributes({
			mainMenuBorderUnits: { ...mainMenuBorderUnits, [deviceType]: unit },
		});
	};
	/** End Main Menu Border */

	/** Start Main Menu Radius */
	const handleMainMenuBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (mainMenuBorderRadiusLink) {
			const newValue = { top: value, right: value, bottom: value, left: value };
			switch (deviceType) {
				case "Desktop":
					setAttributes({ mainMenuBorderRadiusDesktop: newValue });
					break;
				case "Tablet":
					setAttributes({ mainMenuBorderRadiusTablet: newValue });
					break;
				case "Mobile":
					setAttributes({ mainMenuBorderRadiusMobile: newValue });
					break;
			}
		} else {
			const current =
				deviceType === "Desktop"
					? mainMenuBorderRadiusDesktop
					: deviceType === "Tablet"
					? mainMenuBorderRadiusTablet
					: mainMenuBorderRadiusMobile || {};
			setAttributes({
				[`mainMenuBorderRadius${deviceType}`]: {
					...current,
					[position]: value,
				},
			});
		}
	};
	const handleMainMenuBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			mainMenuBorderRadiusUnits: {
				...mainMenuBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Main Menu Radius */

	/** Start Sub Menu Border */
	const handleSubmenuBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (submenuBorderLink) {
			const newValue = { top: value, right: value, bottom: value, left: value };
			switch (deviceType) {
				case "Desktop":
					setAttributes({ submenuBorderDesktop: newValue });
					break;
				case "Tablet":
					setAttributes({ submenuBorderTablet: newValue });
					break;
				case "Mobile":
					setAttributes({ submenuBorderMobile: newValue });
					break;
			}
		} else {
			const current =
				deviceType === "Desktop"
					? submenuBorderDesktop
					: deviceType === "Tablet"
					? submenuBorderTablet
					: submenuBorderMobile || {};
			setAttributes({
				[`submenuBorder${deviceType}`]: { ...current, [position]: value },
			});
		}
	};
	const handleSubmenuBorderUnitsHandler = (unit) => {
		setAttributes({
			submenuBorderUnits: { ...submenuBorderUnits, [deviceType]: unit },
		});
	};
	/** End Sub Menu Border */

	/** Start Sub Menu Radius */
	const handleSubmenuBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (submenuBorderRadiusLink) {
			const newValue = { top: value, right: value, bottom: value, left: value };
			switch (deviceType) {
				case "Desktop":
					setAttributes({ submenuBorderRadiusDesktop: newValue });
					break;
				case "Tablet":
					setAttributes({ submenuBorderRadiusTablet: newValue });
					break;
				case "Mobile":
					setAttributes({ submenuBorderRadiusMobile: newValue });
					break;
			}
		} else {
			const current =
				deviceType === "Desktop"
					? submenuBorderRadiusDesktop
					: deviceType === "Tablet"
					? submenuBorderRadiusTablet
					: submenuBorderRadiusMobile || {};
			setAttributes({
				[`submenuBorderRadius${deviceType}`]: {
					...current,
					[position]: value,
				},
			});
		}
	};
	const handleSubmenuBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			submenuBorderRadiusUnits: {
				...submenuBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Sub Menu Radius */

	/** Drag & Drop Handler (Sub Menu Items) */
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = menuItemsRef.current.findIndex(
				(item) => item.id === active.id,
			);
			const newIndex = menuItemsRef.current.findIndex(
				(item) => item.id === over.id,
			);
			const updatedItems = arrayMove(menuItemsRef.current, oldIndex, newIndex);
			menuItemsRef.current = updatedItems;
			setAttributes({ menuItems: updatedItems });
		}
	};

	/** UI: Inspector General Controls Tab */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
				<BaseControl
					help={__(
						"This setting only affects the position on the frontend, not in the editor.",
						"frontis-blocks",
					)}
				>
					<SelectControl
						label={__("Position", "frontis-blocks")}
						value={menuPosition}
						options={[
							{ label: "Bottom Right", value: "bottom-right" },
							{ label: "Bottom Center", value: "bottom-center" },
							{ label: "Bottom Left", value: "bottom-left" },
							{ label: "Center Right", value: "center-right" },
							{ label: "Center Left", value: "center-left" },
							{ label: "Top Right", value: "top-right" },
							{ label: "Top Center", value: "top-center" },
							{ label: "Top Left", value: "top-left" },
						]}
						onChange={(value) => setAttributes({ menuPosition: value })}
					/>
				</BaseControl>

				<SelectControl
					label={__("Preset", "frontis-blocks")}
					value={menuPreset}
					options={[
						{ label: "Half Circular Bubble Menu", value: "half-circular-menu" },
						{ label: "Circular Bubble Menu", value: "circular-menu" },
						{ label: "Horizontal Bubble Menu", value: "horizontal-menu" },
					]}
					onChange={(value) => setAttributes({ menuPreset: value })}
				/>

				{menuPreset !== "horizontal-menu" && (
					<FB_Range
						min={0}
						max={100}
						label={__("Space", "frontis-blocks")}
						rangeValue={submenuSpace}
						onChangeHandler={(value) => setAttributes({ submenuSpace: value })}
						rangeUnitHandler={(value) =>
							setAttributes({ submenuSpaceUnits: value })
						}
						deviceType={deviceType}
						units={submenuSpaceUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>
				)}

				{menuPreset === "horizontal-menu" && (
					<>
						<FB_Range
							min={0}
							max={200}
							label={__("Horizontal Space", "frontis-blocks")}
							rangeValue={submenuHorizontalSpace}
							onChangeHandler={(value) =>
								setAttributes({ submenuHorizontalSpace: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ submenuHorizontalSpaceUnits: value })
							}
							deviceType={deviceType}
							units={submenuHorizontalSpaceUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>
						<SelectControl
							label={__("Position Align", "frontis-blocks")}
							value={submenuHorizontalAlign}
							options={[
								{ label: "Horizontal", value: "horizontal" },
								{ label: "Vertical", value: "vertical" },
							]}
							onChange={(value) =>
								setAttributes({ submenuHorizontalAlign: value })
							}
						/>
					</>
				)}

				<SelectControl
					label={__("Trigger Type", "frontis-blocks")}
					value={triggerType}
					options={[
						{ label: "Hover", value: "hover" },
						{ label: "Click", value: "click" },
					]}
					onChange={(value) => setAttributes({ triggerType: value })}
				/>
			</PanelBody>

			<PanelBody
				title={__("Main Menu Content", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Content Type", "frontis-blocks")}
					value={mainMenuContentType}
					options={[
						{ label: "Icon", value: "icon" },
						{ label: "Text", value: "text" },
					]}
					onChange={(value) => setAttributes({ mainMenuContentType: value })}
				/>

				{mainMenuContentType === "text" ? (
					<>
						<TextControl
							label={__("Open Text", "frontis-blocks")}
							value={mainMenuOpenText}
							onChange={(value) => setAttributes({ mainMenuOpenText: value })}
						/>
						<TextControl
							label={__("Close Text", "frontis-blocks")}
							value={mainMenuCloseText}
							onChange={(value) => setAttributes({ mainMenuCloseText: value })}
						/>
					</>
				) : (
					<>
						<BaseControl label={__("Open Button", "frontis-blocks")}>
							<div className="fb-setting-switcher-container">
								<BaseControl className="fb-setting-switcher-panel-wrapper">
									<ButtonGroup className="fb-setting-switcher-panel-btn">
										<Button
											onClick={() =>
												setAttributes({ mainMenuOpenType: "icon" })
											}
											className={`fb-setting-switcher-panel-btn-switcher ${
												mainMenuOpenType === "icon" ? "active" : ""
											}`}
										>
											{__("Icon", "frontis-blocks")}
										</Button>
										<Button
											onClick={() =>
												setAttributes({ mainMenuOpenType: "image" })
											}
											className={`fb-setting-switcher-panel-btn-switcher ${
												mainMenuOpenType === "image" ? "active" : ""
											}`}
										>
											{__("Image", "frontis-blocks")}
										</Button>
									</ButtonGroup>
								</BaseControl>
							</div>
						</BaseControl>

						{mainMenuOpenType === "icon" ? (
							<BaseControl>
								<FBIconPicker
									value={mainMenuIcon || "fas fa-ellipsis"}
									setIconHandler={(icon) =>
										setAttributes({ mainMenuIcon: icon })
									}
								/>
							</BaseControl>
						) : (
							<FB_ImageControl
								label={__("Open Image", "frontis-blocks")}
								globalImageUrl={mainMenuImage}
								setglobalImageUrl={(value) =>
									setAttributes({ mainMenuImage: value })
								}
								globalImageAlt={mainMenuImageAlt}
								setglobalImageAlt={(value) =>
									setAttributes({ mainMenuImageAlt: value })
								}
								globalImageID={mainMenuImageID}
								setglobalImageID={(value) =>
									setAttributes({ mainMenuImageID: value })
								}
								globalImageSize={mainMenuImageSize}
								setglobalImageSize={(value) =>
									setAttributes({ mainMenuImageSize: value })
								}
							/>
						)}

						<hr />

						<BaseControl label={__("Close Button", "frontis-blocks")}>
							<div className="fb-setting-switcher-container">
								<BaseControl className="fb-setting-switcher-panel-wrapper">
									<ButtonGroup className="fb-setting-switcher-panel-btn">
										<Button
											onClick={() =>
												setAttributes({ mainMenuCloseType: "icon" })
											}
											className={`fb-setting-switcher-panel-btn-switcher ${
												mainMenuCloseType === "icon" ? "active" : ""
											}`}
										>
											{__("Icon", "frontis-blocks")}
										</Button>
										<Button
											onClick={() =>
												setAttributes({ mainMenuCloseType: "image" })
											}
											className={`fb-setting-switcher-panel-btn-switcher ${
												mainMenuCloseType === "image" ? "active" : ""
											}`}
										>
											{__("Image", "frontis-blocks")}
										</Button>
									</ButtonGroup>
								</BaseControl>
							</div>
						</BaseControl>

						{mainMenuCloseType === "icon" ? (
							<BaseControl>
								<FBIconPicker
									value={mainMenuCloseIcon || "fas fa-xmark"}
									setIconHandler={(icon) =>
										setAttributes({ mainMenuCloseIcon: icon })
									}
								/>
							</BaseControl>
						) : (
							<FB_ImageControl
								label={__("Close Image", "frontis-blocks")}
								globalImageUrl={mainMenuCloseImage}
								setglobalImageUrl={(value) =>
									setAttributes({ mainMenuCloseImage: value })
								}
								globalImageAlt={mainMenuCloseImageAlt}
								setglobalImageAlt={(value) =>
									setAttributes({ mainMenuCloseImageAlt: value })
								}
								globalImageID={mainMenuCloseImageID}
								setglobalImageID={(value) =>
									setAttributes({ mainMenuCloseImageID: value })
								}
								globalImageSize={mainMenuCloseImageSize}
								setglobalImageSize={(value) =>
									setAttributes({ mainMenuCloseImageSize: value })
								}
							/>
						)}
					</>
				)}
			</PanelBody>

			<PanelBody
				title={__("Sub Menu Items", "frontis-blocks")}
				initialOpen={false}
			>
				<ToggleControl
					label={__("Show Title on Hover", "frontis-blocks")}
					checked={submenuShowTitleOnHover}
					onChange={(value) =>
						setAttributes({ submenuShowTitleOnHover: value })
					}
				/>

				<BaseControl label={__("Menu Items", "frontis-blocks")}>
					<div className="fb-Social-wrapper">
						<DndContext
							collisionDetection={closestCenter}
							onDragEnd={handleDragEnd}
						>
							<SortableContext items={menuItems.map((item) => item.id)}>
								<ul className="dnd-items-wrapper">
									{menuItems.map((item, index) => (
										<SortableItem
											key={item.id}
											id={item.id}
											item={item}
											handleChangeItem={(id, key, value) =>
												handleChangeItem(
													id,
													key,
													value,
													menuItemsRef,
													setAttributes,
												)
											}
											handleDeleteItem={(id) =>
												handleDeleteItem(id, menuItemsRef, setAttributes)
											}
											handleDuplicateItem={(id) =>
												handleDuplicateItem(id, menuItemsRef, setAttributes)
											}
											index={index}
										/>
									))}
								</ul>
							</SortableContext>
						</DndContext>
						<Button
							isPrimary
							onClick={() => handleAddItem(menuItemsRef, setAttributes)}
						>
							{__("Add Item", "frontis-blocks")}
						</Button>
					</div>
				</BaseControl>
			</PanelBody>
			{/* End Sub Menu Items Panel */}
		</>
	);

	/** UI: Inspector Style Controls Tab */
	const styleControls = (
		<>
			<PanelBody title={__("Main Menu", "frontis-blocks")} initialOpen={true}>
				{mainMenuContentType === "text" && (
					<FB_TypographyControl
						label={__("Typography", "frontis-blocks")}
						globalTypoControlActive={true}
						globalTypoSwitcher={mainMenuTextGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) =>
							setAttributes({ mainMenuTextGlobalTypographyData: value })
						}
						globalTypoType={mainMenuTextGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								mainMenuTextGlobalTypoType: value,
								mainMenuTextGlobalTypoSwitcher:
									value === "default"
										? {
												...mainMenuTextGlobalTypoSwitcher,
												fontFamily: false,
												fontSize: false,
												fontWeight: false,
												fontStyle: false,
												textTransform: false,
												textDecoration: false,
												letterSpacing: false,
												lineHeight: false,
										  }
										: {
												...mainMenuTextGlobalTypoSwitcher,
												fontFamily: true,
												fontSize: true,
												fontWeight: true,
												fontStyle: true,
												textTransform: true,
												textDecoration: true,
												letterSpacing: true,
												lineHeight: true,
										  },
							});
						}}
						globalTypoOption={mainMenuTextGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ mainMenuTextGlobalTypoOption: value })
						}
						fontFamily={mainMenuTextFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								mainMenuTextFontFamily: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={mainMenuTextFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								mainMenuTextFontSize: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={mainMenuTextFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ mainMenuTextFontSizeUnits: value })
						}
						fontWeight={mainMenuTextFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								mainMenuTextFontWeight: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={mainMenuTextFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								mainMenuTextFontStyle: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={mainMenuTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								mainMenuTextTransform: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={mainMenuTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								mainMenuTextDecoration: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={mainMenuTextLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								mainMenuTextLetterSpacing: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={mainMenuTextLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ mainMenuTextLetterSpacingUnits: value })
						}
						lineHeight={mainMenuTextLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								mainMenuTextLineHeight: value,
								mainMenuTextGlobalTypoSwitcher: {
									...mainMenuTextGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={mainMenuTextLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ mainMenuTextLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
				)}
				<FB_Range
					min={30}
					max={200}
					label={__("Container Size", "frontis-blocks")}
					rangeValue={mainMenuSize}
					onChangeHandler={(value) => setAttributes({ mainMenuSize: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={72}
					isRangeUnit={false}
				/>
				{mainMenuContentType !== "text" && (
					<FB_Range
						min={10}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={mainMenuIconSize}
						onChangeHandler={(value) =>
							setAttributes({ mainMenuIconSize: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={32}
						isRangeUnit={false}
					/>
				)}
				<BaseControl label={__("Offset", "frontis-blocks")}>
					<div className="fb-setting-switcher-container">
						<BaseControl className="fb-setting-switcher-panel-wrapper">
							<ButtonGroup className="fb-setting-switcher-panel-btn">
								<Button
									onClick={() => setOffsetSwitcher("before")}
									className={`fb-setting-switcher-panel-btn-switcher ${
										offsetSwitcher === "before" ? "active" : ""
									}`}
								>
									{__("Before", "frontis-blocks")}
								</Button>
								<Button
									onClick={() => setOffsetSwitcher("active")}
									className={`fb-setting-switcher-panel-btn-switcher ${
										offsetSwitcher === "active" ? "active" : ""
									}`}
								>
									{__("Active", "frontis-blocks")}
								</Button>
							</ButtonGroup>
						</BaseControl>
					</div>
				</BaseControl>

				{offsetSwitcher === "before" ? (
					<>
						<BaseControl
							help={__(
								"Offsets only affect the frontend, so they are not visible in the editor.",
								"frontis-blocks",
							)}
						>
							<FB_Range
								min={0}
								max={300}
								label={__("Offset Horizontal", "frontis-blocks")}
								rangeValue={offsetH}
								onChangeHandler={(value) => setAttributes({ offsetH: value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={40}
								isRangeUnit={false}
							/>

							<FB_Range
								min={0}
								max={300}
								label={__("Offset Vertical", "frontis-blocks")}
								rangeValue={offsetV}
								onChangeHandler={(value) => setAttributes({ offsetV: value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={40}
								isRangeUnit={false}
							/>
						</BaseControl>
					</>
				) : (
					<>
						<BaseControl
							help={__(
								"Offsets only affect the frontend, so they are not visible in the editor.",
							)}
						>
							<FB_Range
								min={0}
								max={300}
								label={__("Offset Horizontal", "frontis-blocks")}
								rangeValue={activeOffsetH}
								onChangeHandler={(value) =>
									setAttributes({ activeOffsetH: value })
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={40}
								isRangeUnit={false}
							/>

							<FB_Range
								min={0}
								max={300}
								label={__("Offset Vertical", "frontis-blocks")}
								rangeValue={activeOffsetV}
								onChangeHandler={(value) =>
									setAttributes({ activeOffsetV: value })
								}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={40}
								isRangeUnit={false}
							/>
						</BaseControl>
					</>
				)}
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={mainMenuBgColorSwitcher || "normal"}
					setBgColorSwitcher={(value) =>
						setAttributes({ mainMenuBgColorSwitcher: value })
					}
					normalBackgroundType={mainMenuNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ mainMenuNormalBackgroundType: value })
					}
					normalClassicColor={mainMenuBgColor}
					setNormalClassicColor={(value) =>
						setAttributes({ mainMenuBgColor: value })
					}
					normalGradientColor={mainMenuNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({ mainMenuNormalGradientColor: value })
					}
					normalCustomGradientSwitcher={mainMenuNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ mainMenuNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						mainMenuNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ mainMenuNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={mainMenuHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ mainMenuHoverBackgroundType: value })
					}
					hoverClassicColor={mainMenuBgHoverColor}
					setHoverClassicColor={(value) =>
						setAttributes({ mainMenuBgHoverColor: value })
					}
					hoverGradientColor={mainMenuHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({ mainMenuHoverGradientColor: value })
					}
					hoverCustomGradientSwitcher={mainMenuHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ mainMenuHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={mainMenuHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ mainMenuHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

				<FB_SwitcherControl
					label={__("Icon/Text Color", "frontis-blocks")}
					globalSwitcher={mainMenuTextColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ mainMenuTextColorSwitcher: value })
					}
				/>
				{mainMenuTextColorSwitcher === "normal" ? (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={mainMenuTextColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuTextColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={mainMenuTextHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuTextHoverColor: value })
						}
					/>
				)}

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={mainMenuBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ mainMenuBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={mainMenuBorderColorSwitcher || "normal"}
					setGlobalSwitcher={(value) =>
						setAttributes({ mainMenuBorderColorSwitcher: value })
					}
				/>

				{mainMenuBorderColorSwitcher === "hover" ? (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={mainMenuBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuBorderHoverColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={mainMenuBorderColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuBorderColor: value })
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleMainMenuBorderUnitsHandler}
					spacingUnits={mainMenuBorderUnits}
					spacingDesktop={mainMenuBorderDesktop}
					spacingTablet={mainMenuBorderTablet}
					spacingMobile={mainMenuBorderMobile}
					handleSpacingUnitHandler={handleMainMenuBorderUnitChange}
					spacingCombineBtn={mainMenuBorderLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ mainMenuBorderLink: !mainMenuBorderLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Radius Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleMainMenuBorderRadiusUnitsHandler}
					spacingUnits={mainMenuBorderRadiusUnits}
					spacingDesktop={mainMenuBorderRadiusDesktop}
					spacingTablet={mainMenuBorderRadiusTablet}
					spacingMobile={mainMenuBorderRadiusMobile}
					handleSpacingUnitHandler={handleMainMenuBorderRadiusUnitChange}
					spacingCombineBtn={mainMenuBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							mainMenuBorderRadiusLink: !mainMenuBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={mainMenuBoxShadowSwitcher || "normal"}
					setGlobalSwitcher={(value) =>
						setAttributes({ mainMenuBoxShadowSwitcher: value })
					}
				/>

				{mainMenuBoxShadowSwitcher === "hover" ? (
					<FB_BoxShadowControl
						key="main-menu-hover-shadow"
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ mainMenuBoxShadowHoverValues: value })
						}
						initialShadowValue={
							Array.isArray(mainMenuBoxShadowHoverValues)
								? mainMenuBoxShadowHoverValues
								: []
						}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ mainMenuBoxShadowHoverCssValue: value })
						}
					/>
				) : (
					<FB_BoxShadowControl
						key="main-menu-normal-shadow"
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ mainMenuBoxShadowValues: value })
						}
						initialShadowValue={
							Array.isArray(mainMenuBoxShadowValues)
								? mainMenuBoxShadowValues
								: []
						}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ mainMenuBoxShadowCssValue: value })
						}
					/>
				)}
			</PanelBody>
			{/* End Main Menu Style Panel */}

			{/* Start Sub Menu Style Panel */}
			<PanelBody title={__("Sub Menu", "frontis-blocks")} initialOpen={false}>
				<FB_Range
					min={30}
					max={200}
					label={__("Container Size", "frontis-blocks")}
					rangeValue={submenuSize}
					onChangeHandler={(value) => setAttributes({ submenuSize: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={62}
					isRangeUnit={false}
				/>
				<FB_Range
					min={10}
					max={100}
					label={__("Icon Size", "frontis-blocks")}
					rangeValue={submenuIconSize}
					onChangeHandler={(value) => setAttributes({ submenuIconSize: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={24}
					isRangeUnit={false}
				/>
				<FB_BackgroundColorControl
					label={__("Background", "frontis-blocks")}
					bgColorSwitcher={submenuBgColorSwitcher || "normal"}
					setBgColorSwitcher={(value) =>
						setAttributes({ submenuBgColorSwitcher: value })
					}
					normalBackgroundType={submenuNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ submenuNormalBackgroundType: value })
					}
					normalClassicColor={submenuBgColor}
					setNormalClassicColor={(value) =>
						setAttributes({ submenuBgColor: value })
					}
					normalGradientColor={submenuNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({ submenuNormalGradientColor: value })
					}
					normalCustomGradientSwitcher={submenuNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ submenuNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={submenuNormalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({ submenuNormalCustomGradientInputValue: value })
					}
					hoverBackgroundType={submenuHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ submenuHoverBackgroundType: value })
					}
					hoverClassicColor={submenuBgHoverColor}
					setHoverClassicColor={(value) =>
						setAttributes({ submenuBgHoverColor: value })
					}
					hoverGradientColor={submenuHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({ submenuHoverGradientColor: value })
					}
					hoverCustomGradientSwitcher={submenuHoverCustomGradientSwitcher}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ submenuHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={submenuHoverCustomGradientInputValue}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({ submenuHoverCustomGradientInputValue: value })
					}
					isBackgroundImage={false}
				/>

				<FB_SwitcherControl
					label={__("Icon Color", "frontis-blocks")}
					globalSwitcher={submenuIconColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ submenuIconColorSwitcher: value })
					}
				/>
				{submenuIconColorSwitcher === "normal" ? (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={submenuIconColor}
						setGlobalColor={(value) =>
							setAttributes({ submenuIconColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={submenuIconHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ submenuIconHoverColor: value })
						}
					/>
				)}

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={submenuBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ submenuBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={submenuBorderColorSwitcher || "normal"}
					setGlobalSwitcher={(value) =>
						setAttributes({ submenuBorderColorSwitcher: value })
					}
				/>

				{submenuBorderColorSwitcher === "hover" ? (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={submenuBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ submenuBorderHoverColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={submenuBorderColor}
						setGlobalColor={(value) =>
							setAttributes({ submenuBorderColor: value })
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleSubmenuBorderUnitsHandler}
					spacingUnits={submenuBorderUnits}
					spacingDesktop={submenuBorderDesktop}
					spacingTablet={submenuBorderTablet}
					spacingMobile={submenuBorderMobile}
					handleSpacingUnitHandler={handleSubmenuBorderUnitChange}
					spacingCombineBtn={submenuBorderLink}
					spacingCombineBtnHandler={() =>
						setAttributes({ submenuBorderLink: !submenuBorderLink })
					}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Radius Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleSubmenuBorderRadiusUnitsHandler}
					spacingUnits={submenuBorderRadiusUnits}
					spacingDesktop={submenuBorderRadiusDesktop}
					spacingTablet={submenuBorderRadiusTablet}
					spacingMobile={submenuBorderRadiusMobile}
					handleSpacingUnitHandler={handleSubmenuBorderRadiusUnitChange}
					spacingCombineBtn={submenuBorderRadiusLink}
					spacingCombineBtnHandler={() =>
						setAttributes({
							submenuBorderRadiusLink: !submenuBorderRadiusLink,
						})
					}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={submenuBoxShadowSwitcher || "normal"}
					setGlobalSwitcher={(value) =>
						setAttributes({ submenuBoxShadowSwitcher: value })
					}
				/>

				{submenuBoxShadowSwitcher === "hover" ? (
					<FB_BoxShadowControl
						key="sub-menu-hover-shadow"
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ submenuBoxShadowHoverValues: value })
						}
						initialShadowValue={
							Array.isArray(submenuBoxShadowHoverValues)
								? submenuBoxShadowHoverValues
								: []
						}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ submenuBoxShadowHoverCssValue: value })
						}
					/>
				) : (
					<FB_BoxShadowControl
						key="sub-menu-normal-shadow"
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) =>
							setAttributes({ submenuBoxShadowValues: value })
						}
						initialShadowValue={
							Array.isArray(submenuBoxShadowValues)
								? submenuBoxShadowValues
								: []
						}
						onBoxShadowStyleChange={(value) =>
							setAttributes({ submenuBoxShadowCssValue: value })
						}
					/>
				)}
			</PanelBody>

			{submenuShowTitleOnHover && (
				<PanelBody
					title={__("Sub Menu Title", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_TypographyControl
						label={__("Typography", "frontis-blocks")}
						globalTypographyData={submenuTextGlobalTypographyData}
						setGlobalTypographyData={(value) =>
							setAttributes({ submenuTextGlobalTypographyData: value })
						}
						globalTypoSwitcher={submenuTextGlobalTypoSwitcher}
						setGlobalTypoSwitcher={(value) =>
							setAttributes({ submenuTextGlobalTypoSwitcher: value })
						}
						globalTypoType={submenuTextGlobalTypoType}
						setGlobalTypoType={(value) =>
							setAttributes({ submenuTextGlobalTypoType: value })
						}
						globalTypoOption={submenuTextGlobalTypoOption}
						onChangeGlobalTypoOption={(value) =>
							setAttributes({ submenuTextGlobalTypoOption: value })
						}
						fontFamily={submenuTextFontFamily}
						onChangeFontFamily={(value) =>
							setAttributes({
								submenuTextFontFamily: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									fontFamily: value && false,
								},
							})
						}
						fontSize={submenuTextFontSize}
						onChangeFontSize={(value) =>
							setAttributes({
								submenuTextFontSize: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									fontSize: value && false,
								},
							})
						}
						fontSizeUnits={submenuTextFontSizeUnits}
						onChangeFontSizeUnit={(value) =>
							setAttributes({ submenuTextFontSizeUnits: value })
						}
						fontWeight={submenuTextFontWeight}
						onChangeFontWeight={(value) =>
							setAttributes({
								submenuTextFontWeight: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									fontWeight: value && false,
								},
							})
						}
						fontStyle={submenuTextFontStyle}
						onChangeFontStyle={(value) =>
							setAttributes({
								submenuTextFontStyle: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									fontStyle: value && false,
								},
							})
						}
						textTransform={submenuTextTransform}
						onChangeTextTransform={(value) =>
							setAttributes({
								submenuTextTransform: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									textTransform: value && false,
								},
							})
						}
						textDecoration={submenuTextDecoration}
						onChangeTextDecoration={(value) =>
							setAttributes({
								submenuTextDecoration: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									textDecoration: value && false,
								},
							})
						}
						letterSpacing={submenuTextLetterSpacing}
						onChangeLetterSpacing={(value) =>
							setAttributes({
								submenuTextLetterSpacing: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									letterSpacing: value && false,
								},
							})
						}
						letterSpacingUnits={submenuTextLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) =>
							setAttributes({ submenuTextLetterSpacingUnits: value })
						}
						lineHeight={submenuTextLineHeight}
						onChangeLineHeight={(value) =>
							setAttributes({
								submenuTextLineHeight: value,
								submenuTextGlobalTypoSwitcher: {
									...submenuTextGlobalTypoSwitcher,
									lineHeight: value && false,
								},
							})
						}
						lineHeightUnits={submenuTextLineHeightUnits}
						onChangeLineHeightUnit={(value) =>
							setAttributes({ submenuTextLineHeightUnits: value })
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
					/>
					<SelectControl
						label={__("Position", "frontis-blocks")}
						value={submenuTitlePosition}
						options={[
							{ label: __("Top", "frontis-blocks"), value: "top" },
							{ label: __("Bottom", "frontis-blocks"), value: "bottom" },
							{ label: __("Left", "frontis-blocks"), value: "left" },
							{ label: __("Right", "frontis-blocks"), value: "right" },
						]}
						onChange={(value) => setAttributes({ submenuTitlePosition: value })}
					/>
					<FB_ColorControl
						label={__("Text Color", "frontis-blocks")}
						globalColor={submenuTitleColor}
						setGlobalColor={(value) =>
							setAttributes({ submenuTitleColor: value })
						}
					/>
					<FB_BackgroundColorControl
						label={__("Background", "frontis-blocks")}
						isBackgroundHover={false}
						bgColorSwitcher="normal"
						normalBackgroundType={submenuTitleBgColorType}
						setNormalBackgroundType={(value) =>
							setAttributes({ submenuTitleBgColorType: value })
						}
						normalClassicColor={submenuTitleBgColor}
						setNormalClassicColor={(value) =>
							setAttributes({ submenuTitleBgColor: value })
						}
						normalGradientColor={submenuTitleBgGradientColor}
						setNormalGradientColor={(value) =>
							setAttributes({ submenuTitleBgGradientColor: value })
						}
						normalCustomGradientSwitcher={submenuTitleBgCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) =>
							setAttributes({ submenuTitleBgCustomGradientSwitcher: value })
						}
						normalCustomGradientInputValue={
							submenuTitleBgCustomGradientInputValue
						}
						setNormalCustomGradientInputValue={(value) =>
							setAttributes({ submenuTitleBgCustomGradientInputValue: value })
						}
						isBackgroundImage={false}
					/>
				</PanelBody>
			)}
		</>
	);

	/** 7. Global Settings Event Handlers */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (circleMenuGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						circleMenuGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						circleMenuGlobalPaddingDesktop: {
							...circleMenuGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalPaddingTablet: {
							...circleMenuGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalPaddingMobile: {
							...circleMenuGlobalPaddingMobile,
							[position]: value,
						},
					});
					break;
			}
		}
	};
	const handleGlobalPaddingCombineBtn = () =>
		setAttributes({
			circleMenuGlobalPaddingLink: !circleMenuGlobalPaddingLink,
		});
	const handleGlobalPaddingUnitsHandler = (unit) =>
		setAttributes({
			circleMenuGlobalPaddingUnits: {
				...circleMenuGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});

	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (circleMenuGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						circleMenuGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						circleMenuGlobalMarginDesktop: {
							...circleMenuGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalMarginTablet: {
							...circleMenuGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalMarginMobile: {
							...circleMenuGlobalMarginMobile,
							[position]: value,
						},
					});
					break;
			}
		}
	};
	const handleGlobalMarginCombineBtn = () =>
		setAttributes({
			circleMenuGlobalMarginLink: !circleMenuGlobalMarginLink,
		});
	const handleGlobalMarginUnitsHandler = (unit) =>
		setAttributes({
			circleMenuGlobalMarginUnits: {
				...circleMenuGlobalMarginUnits,
				[deviceType]: unit,
			},
		});

	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={circleMenuGlobalZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									circleMenuGlobalZIndex: value === 0 ? undefined : value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={circleMenuOverflow}
							options={[
								{ label: "Default", value: "default" },
								{ label: "Hidden", value: "hidden" },
								{ label: "Scroll", value: "scroll" },
							]}
							onChange={(value) => setAttributes({ circleMenuOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={circleMenuPositionType}
							setPositionType={(value) =>
								setAttributes({ circleMenuPositionType: value })
							}
							HZOrientationType={circleMenuHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ circleMenuHZOrientationType: value })
							}
							VROrientationType={circleMenuVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ circleMenuVROrientationType: value })
							}
							HZLeftOffset={circleMenuHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ circleMenuHZLeftOffset: value })
							}
							HZLeftOffsetUnits={circleMenuHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ circleMenuHZLeftOffsetUnits: value })
							}
							HZRightOffset={circleMenuHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ circleMenuHZRightOffset: value })
							}
							HZRightOffsetUnits={circleMenuHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ circleMenuHZRightOffsetUnits: value })
							}
							VRTopOffset={circleMenuVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ circleMenuVRTopOffset: value })
							}
							VRTopOffsetUnits={circleMenuVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ circleMenuVRTopOffsetUnits: value })
							}
							VRBottomOffset={circleMenuVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ circleMenuVRBottomOffset: value })
							}
							VRBottomOffsetUnits={circleMenuVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ circleMenuVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={circleMenuGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ circleMenuGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={circleMenuGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({ circleMenuGlobalWraperClass: value })
							}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody
						title={__("Padding and Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={circleMenuGlobalPaddingUnits}
							spacingDesktop={circleMenuGlobalPaddingDesktop}
							spacingTablet={circleMenuGlobalPaddingTablet}
							spacingMobile={circleMenuGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={circleMenuGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={circleMenuGlobalMarginUnits}
							spacingDesktop={circleMenuGlobalMarginDesktop}
							spacingTablet={circleMenuGlobalMarginTablet}
							spacingMobile={circleMenuGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={circleMenuGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background Color", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_BackgroundColorControl
							label={__("Background", "frontis-blocks")}
							bgColorSwitcher={
								circleMenuGlobalBgColorSwitcher || "normal"
							}
							setBgColorSwitcher={(value) =>
								setAttributes({ circleMenuGlobalBgColorSwitcher: value })
							}
							normalBackgroundType={
								circleMenuGlobalNormalBackgroundType
							}
							setNormalBackgroundType={(value) =>
								setAttributes({ circleMenuGlobalNormalBackgroundType: value })
							}
							normalClassicColor={circleMenuGlobalBgColor}
							setNormalClassicColor={(value) =>
								setAttributes({ circleMenuGlobalBgColor: value })
							}
							normalGradientColor={
								circleMenuGlobalNormalGradientColor
							}
							setNormalGradientColor={(value) =>
								setAttributes({ circleMenuGlobalNormalGradientColor: value })
							}
							normalCustomGradientSwitcher={
								circleMenuGlobalNormalCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									circleMenuGlobalNormalCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								circleMenuGlobalNormalCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									circleMenuGlobalNormalCustomGradientInputValue: value,
								})
							}
							hoverBackgroundType={
								circleMenuGlobalHoverBackgroundType
							}
							setHoverBackgroundType={(value) =>
								setAttributes({ circleMenuGlobalHoverBackgroundType: value })
							}
							hoverClassicColor={circleMenuGlobalBgHoverColor}
							setHoverClassicColor={(value) =>
								setAttributes({ circleMenuGlobalBgHoverColor: value })
							}
							hoverGradientColor={circleMenuGlobalHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({ circleMenuGlobalHoverGradientColor: value })
							}
							hoverCustomGradientSwitcher={
								circleMenuGlobalHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									circleMenuGlobalHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								circleMenuGlobalHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									circleMenuGlobalHoverCustomGradientInputValue: value,
								})
							}
							isBackgroundImage={true}
							normalBackgroundImageUrl={circleMenuGlobalBgImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ circleMenuGlobalBgImageUrl: value })
							}
							normalBackgroundImageAlt={circleMenuGlobalBgImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ circleMenuGlobalBgImageAlt: value })
							}
							normalBackgroundImageID={circleMenuGlobalBgImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ circleMenuGlobalBgImageID: value })
							}
							normalBackgroundImagePosition={
								circleMenuGlobalBgImagePosition
							}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({ circleMenuGlobalBgImagePosition: value })
							}
							normalBackgroundImageAttachment={
								circleMenuGlobalBgImageAttachment
							}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({ circleMenuGlobalBgImageAttachment: value })
							}
							normalBackgroundImageRepeat={
								circleMenuGlobalBgImageRepeat
							}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({ circleMenuGlobalBgImageRepeat: value })
							}
							normalBackgroundImageSize={circleMenuGlobalBgImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ circleMenuGlobalBgImageSize: value })
							}
							hoverBackgroundImageUrl={
								circleMenuGlobalBgHoverImageUrl
							}
							setHoverBackgroundImageUrl={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageUrl: value })
							}
							hoverBackgroundImageAlt={
								circleMenuGlobalBgHoverImageAlt
							}
							setHoverBackgroundImageAlt={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageAlt: value })
							}
							hoverBackgroundImageID={circleMenuGlobalBgHoverImageID}
							setHoverBackgroundImageID={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageID: value })
							}
							hoverBackgroundImagePosition={
								circleMenuGlobalBgHoverImagePosition
							}
							setHoverBackgroundImagePosition={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImagePosition: value })
							}
							hoverBackgroundImageAttachment={
								circleMenuGlobalBgHoverImageAttachment
							}
							setHoverBackgroundImageAttachment={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageAttachment: value })
							}
							hoverBackgroundImageRepeat={
								circleMenuGlobalBgHoverImageRepeat
							}
							setHoverBackgroundImageRepeat={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageRepeat: value })
							}
							hoverBackgroundImageSize={
								circleMenuGlobalBgHoverImageSize
							}
							setHoverBackgroundImageSize={(value) =>
								setAttributes({ circleMenuGlobalBgHoverImageSize: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Border & Border Radius", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-border-setting-wrapper"
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={circleMenuGlobalBorder}
							options={[
								{ label: "None", value: "none" },
								{ label: "Solid", value: "solid" },
								{ label: "Dashed", value: "dashed" },
								{ label: "Dotted", value: "dotted" },
								{ label: "Double", value: "double" },
							]}
							onChange={(value) =>
								setAttributes({ circleMenuGlobalBorder: value })
							}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={circleMenuGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ circleMenuGlobalBorderColorSwitcher: value })
							}
						/>

						{circleMenuGlobalBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={circleMenuGlobalBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										circleMenuGlobalBorderColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						{circleMenuGlobalBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={circleMenuGlobalBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										circleMenuGlobalBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={(unit) =>
								setAttributes({
									circleMenuGlobalBorderUnits: {
										...circleMenuGlobalBorderUnits,
										[deviceType]: unit,
									},
								})
							}
							spacingUnits={circleMenuGlobalBorderUnits}
							spacingDesktop={circleMenuGlobalBorderDesktop}
							spacingTablet={circleMenuGlobalBorderTablet}
							spacingMobile={circleMenuGlobalBorderMobile}
							handleSpacingUnitHandler={(event, position) => {
								const value = event.target.value;
								const deviceAttr =
									deviceType === "Desktop"
										? "circleMenuGlobalBorderDesktop"
										: deviceType === "Tablet"
										? "circleMenuGlobalBorderTablet"
										: "circleMenuGlobalBorderMobile";
								if (circleMenuGlobalBorderLink) {
									setAttributes({
										[deviceAttr]: {
											top: value,
											right: value,
											bottom: value,
											left: value,
										},
									});
								} else {
									const current =
										deviceType === "Desktop"
											? circleMenuGlobalBorderDesktop
											: deviceType === "Tablet"
											? circleMenuGlobalBorderTablet
											: circleMenuGlobalBorderMobile;
									setAttributes({
										[deviceAttr]: {
											...current,
											[position]: value,
										},
									});
								}
							}}
							spacingCombineBtn={circleMenuGlobalBorderLink}
							spacingCombineBtnHandler={() =>
								setAttributes({
									circleMenuGlobalBorderLink:
										!circleMenuGlobalBorderLink,
								})
							}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={(unit) =>
								setAttributes({
									circleMenuGlobalBorderRadiusUnits: {
										...circleMenuGlobalBorderRadiusUnits,
										[deviceType]: unit,
									},
								})
							}
							spacingUnits={circleMenuGlobalBorderRadiusUnits}
							spacingDesktop={circleMenuGlobalBorderRadiusDesktop}
							spacingTablet={circleMenuGlobalBorderRadiusTablet}
							spacingMobile={circleMenuGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={(event, position) => {
								const value = event.target.value;
								const deviceAttr =
									deviceType === "Desktop"
										? "circleMenuGlobalBorderRadiusDesktop"
										: deviceType === "Tablet"
										? "circleMenuGlobalBorderRadiusTablet"
										: "circleMenuGlobalBorderRadiusMobile";
								if (circleMenuGlobalBorderRadiusLink) {
									setAttributes({
										[deviceAttr]: {
											top: value,
											right: value,
											bottom: value,
											left: value,
										},
									});
								} else {
									const current =
										deviceType === "Desktop"
											? circleMenuGlobalBorderRadiusDesktop
											: deviceType === "Tablet"
											? circleMenuGlobalBorderRadiusTablet
											: circleMenuGlobalBorderRadiusMobile;
									setAttributes({
										[deviceAttr]: {
											...current,
											[position]: value,
										},
									});
								}
							}}
							spacingCombineBtn={circleMenuGlobalBorderRadiusLink}
							spacingCombineBtnHandler={() =>
								setAttributes({
									circleMenuGlobalBorderRadiusLink:
										!circleMenuGlobalBorderRadiusLink,
								})
							}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={circleMenuGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ circleMenuGlobalBoxShadowSwitcher: value })
							}
						/>
						{circleMenuGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								key="global-normal-shadow"
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowValues: value })
								}
								initialShadowValue={
									Array.isArray(circleMenuGlobalBoxShadowValues)
										? circleMenuGlobalBoxShadowValues
										: []
								}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowCssValue: value })
								}
							/>
						)}

						{circleMenuGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								key="global-hover-shadow"
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowHoverValues: value })
								}
								initialShadowValue={
									Array.isArray(circleMenuGlobalBoxShadowHoverValues)
										? circleMenuGlobalBoxShadowHoverValues
										: []
								}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										circleMenuGlobalBoxShadowHoverCssValue: value,
									})
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={circleMenuDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ circleMenuDesktopSwitcher: value })
							}
							tabletValue={circleMenuTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ circleMenuTabletSwitcher: value })
							}
							mobileValue={circleMenuMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ circleMenuMobileSwitcher: value })
							}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={circleMenuGlobalCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ circleMenuGlobalCustomCSS: value })
							}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);

	/** Final Render output for Inspector UI */
	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
};

export default memo(Inspector);
