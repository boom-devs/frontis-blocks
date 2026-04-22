import { __ } from "@wordpress/i18n";
import { memo } from "@wordpress/element";
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
import FBIconPicker from "@Components/icon-picker";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InputControl from "@Components/input-control";
import FB_ImageControl from "@Components/image-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import SortableItem from "./sortableItem";
import {
	handleAddItem,
	handleChangeItem,
	handleDeleteItem,
	handleDuplicateItem,
} from "./preset";
import { useDeviceType } from "@Config/displayType";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		menuPosition,
		menuPreset,
		menuItems,
		submenuSpace,
		submenuSpaceUnits,
		submenuHorizontalSpace,
		submenuHorizontalSpaceUnits,
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
	} = attributes;

	const deviceType = useDeviceType();

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active && over && active.id !== over.id) {
			const oldIndex = menuItems.findIndex((item) => item.id === active.id);
			const newIndex = menuItems.findIndex((item) => item.id === over.id);
			const updatedItems = arrayMove(menuItems, oldIndex, newIndex);
			setAttributes({ menuItems: updatedItems });
		}
	};

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
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
						resetFallbackValue={0}
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
							resetFallbackValue={0}
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
				{/* Open Button Content */}
				<BaseControl label={__("Open Button", "frontis-blocks")}>
					<ButtonGroup className="fb-icon-switcher-button-group">
						<Button
							isSmall
							isPrimary={mainMenuOpenType === "icon"}
							onClick={() => setAttributes({ mainMenuOpenType: "icon" })}
						>
							{__("Icon", "frontis-blocks")}
						</Button>
						<Button
							isSmall
							isPrimary={mainMenuOpenType === "image"}
							onClick={() => setAttributes({ mainMenuOpenType: "image" })}
						>
							{__("Image", "frontis-blocks")}
						</Button>
					</ButtonGroup>
				</BaseControl>

				{mainMenuOpenType === "icon" ? (
					<BaseControl>
						<FBIconPicker
							value={mainMenuIcon || "fas fa-ellipsis"}
							setIconHandler={(icon) => setAttributes({ mainMenuIcon: icon })}
						/>
					</BaseControl>
				) : (
					<FB_ImageControl
						label={__("Open Image", "frontis-blocks")}
						globalImageUrl={mainMenuImage}
						setglobalImageUrl={(value) => setAttributes({ mainMenuImage: value })}
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

				{/* Close Button Content */}
				<BaseControl label={__("Close Button", "frontis-blocks")}>
					<ButtonGroup className="fb-icon-switcher-button-group">
						<Button
							isSmall
							isPrimary={mainMenuCloseType === "icon"}
							onClick={() => setAttributes({ mainMenuCloseType: "icon" })}
						>
							{__("Icon", "frontis-blocks")}
						</Button>
						<Button
							isSmall
							isPrimary={mainMenuCloseType === "image"}
							onClick={() => setAttributes({ mainMenuCloseType: "image" })}
						>
							{__("Image", "frontis-blocks")}
						</Button>
					</ButtonGroup>
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
													menuItems,
													setAttributes,
												)
											}
											handleDeleteItem={(id) =>
												handleDeleteItem(id, menuItems, setAttributes)
											}
											handleDuplicateItem={(id) =>
												handleDuplicateItem(id, menuItems, setAttributes)
											}
											index={index}
										/>
									))}
								</ul>
							</SortableContext>
						</DndContext>
						<Button
							isPrimary
							onClick={() => handleAddItem(menuItems, setAttributes)}
						>
							{__("Add Item", "frontis-blocks")}
						</Button>
					</div>
				</BaseControl>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Main Menu Style", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_SwitcherControl
					label={__("Background Color", "frontis-blocks")}
					globalSwitcher={attributes.mainMenuBgColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ mainMenuBgColorSwitcher: value })
					}
				/>
				{attributes.mainMenuBgColorSwitcher === "normal" ? (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={attributes.mainMenuBgColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuBgColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={attributes.mainMenuBgHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuBgHoverColor: value })
						}
					/>
				)}

				<FB_SwitcherControl
					label={__("Icon/Text Color", "frontis-blocks")}
					globalSwitcher={attributes.mainMenuTextColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ mainMenuTextColorSwitcher: value })
					}
				/>
				{attributes.mainMenuTextColorSwitcher === "normal" ? (
					<FB_ColorControl
						label={__("Icon/Text Color", "frontis-blocks")}
						globalColor={attributes.mainMenuTextColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuTextColor: value })
						}
					/>
				) : (
					<FB_ColorControl
						label={__("Icon/Text Color (Hover)", "frontis-blocks")}
						globalColor={attributes.mainMenuTextHoverColor}
						setGlobalColor={(value) =>
							setAttributes({ mainMenuTextHoverColor: value })
						}
					/>
				)}

				<FB_Range
					min={0}
					max={300}
					label={__("Offset Horizontal", "frontis-blocks")}
					rangeValue={attributes.offsetH}
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
					rangeValue={attributes.offsetV}
					onChangeHandler={(value) => setAttributes({ offsetV: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={40}
					isRangeUnit={false}
				/>
				<FB_Range
					min={30}
					max={200}
					label={__("Container Size", "frontis-blocks")}
					rangeValue={attributes.mainMenuSize}
					onChangeHandler={(value) => setAttributes({ mainMenuSize: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={72}
					isRangeUnit={false}
				/>
				<FB_Range
					min={10}
					max={100}
					label={__("Icon Size", "frontis-blocks")}
					rangeValue={attributes.mainMenuIconSize}
					onChangeHandler={(value) =>
						setAttributes({ mainMenuIconSize: value })
					}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={32}
					isRangeUnit={false}
				/>
			</PanelBody>

			<PanelBody
				title={__("Sub Menu Style", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={30}
					max={200}
					label={__("Container Size", "frontis-blocks")}
					rangeValue={attributes.submenuSize}
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
					rangeValue={attributes.submenuIconSize}
					onChangeHandler={(value) => setAttributes({ submenuIconSize: value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={24}
					isRangeUnit={false}
				/>
				<FB_ColorControl
					label={__("Background Color", "frontis-blocks")}
					globalColor={attributes.submenuBgColor}
					setGlobalColor={(value) => setAttributes({ submenuBgColor: value })}
				/>
				<FB_ColorControl
					label={__("Icon Color", "frontis-blocks")}
					globalColor={attributes.submenuIconColor}
					setGlobalColor={(value) => setAttributes({ submenuIconColor: value })}
				/>
			</PanelBody>
		</>
	);

	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (attributes.circleMenuGlobalPaddingLink) {
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
							...attributes.circleMenuGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalPaddingTablet: {
							...attributes.circleMenuGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalPaddingMobile: {
							...attributes.circleMenuGlobalPaddingMobile,
							[position]: value,
						},
					});
					break;
			}
		}
	};
	const handleGlobalPaddingCombineBtn = () =>
		setAttributes({
			circleMenuGlobalPaddingLink: !attributes.circleMenuGlobalPaddingLink,
		});
	const handleGlobalPaddingUnitsHandler = (unit) =>
		setAttributes({
			circleMenuGlobalPaddingUnits: {
				...attributes.circleMenuGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});

	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (attributes.circleMenuGlobalMarginLink) {
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
							...attributes.circleMenuGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						circleMenuGlobalMarginTablet: {
							...attributes.circleMenuGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						circleMenuGlobalMarginMobile: {
							...attributes.circleMenuGlobalMarginMobile,
							[position]: value,
						},
					});
					break;
			}
		}
	};
	const handleGlobalMarginCombineBtn = () =>
		setAttributes({
			circleMenuGlobalMarginLink: !attributes.circleMenuGlobalMarginLink,
		});
	const handleGlobalMarginUnitsHandler = (unit) =>
		setAttributes({
			circleMenuGlobalMarginUnits: {
				...attributes.circleMenuGlobalMarginUnits,
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
							rangeValue={attributes.circleMenuGlobalZIndex}
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
							value={attributes.circleMenuOverflow}
							options={[
								{ label: "Default", value: "default" },
								{ label: "Hidden", value: "hidden" },
								{ label: "Scroll", value: "scroll" },
							]}
							onChange={(value) => setAttributes({ circleMenuOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={attributes.circleMenuPositionType}
							setPositionType={(value) =>
								setAttributes({ circleMenuPositionType: value })
							}
							HZOrientationType={attributes.circleMenuHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ circleMenuHZOrientationType: value })
							}
							VROrientationType={attributes.circleMenuVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ circleMenuVROrientationType: value })
							}
							HZLeftOffset={attributes.circleMenuHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ circleMenuHZLeftOffset: value })
							}
							HZLeftOffsetUnits={attributes.circleMenuHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ circleMenuHZLeftOffsetUnits: value })
							}
							HZRightOffset={attributes.circleMenuHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ circleMenuHZRightOffset: value })
							}
							HZRightOffsetUnits={attributes.circleMenuHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ circleMenuHZRightOffsetUnits: value })
							}
							VRTopOffset={attributes.circleMenuVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ circleMenuVRTopOffset: value })
							}
							VRTopOffsetUnits={attributes.circleMenuVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ circleMenuVRTopOffsetUnits: value })
							}
							VRBottomOffset={attributes.circleMenuVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ circleMenuVRBottomOffset: value })
							}
							VRBottomOffsetUnits={attributes.circleMenuVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ circleMenuVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={attributes.circleMenuGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ circleMenuGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={attributes.circleMenuGlobalWraperClass}
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
							spacingUnits={attributes.circleMenuGlobalPaddingUnits}
							spacingDesktop={attributes.circleMenuGlobalPaddingDesktop}
							spacingTablet={attributes.circleMenuGlobalPaddingTablet}
							spacingMobile={attributes.circleMenuGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={attributes.circleMenuGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={attributes.circleMenuGlobalMarginUnits}
							spacingDesktop={attributes.circleMenuGlobalMarginDesktop}
							spacingTablet={attributes.circleMenuGlobalMarginTablet}
							spacingMobile={attributes.circleMenuGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={attributes.circleMenuGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background Color", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_SwitcherControl
							label={__("Background Color", "frontis-blocks")}
							globalSwitcher={attributes.circleMenuGlobalBgColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ circleMenuGlobalBgColorSwitcher: value })
							}
						/>
						{attributes.circleMenuGlobalBgColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={attributes.circleMenuGlobalBgColor}
								setGlobalColor={(value) =>
									setAttributes({
										circleMenuGlobalBgColor: value === undefined ? "" : value,
									})
								}
							/>
						)}
						{attributes.circleMenuGlobalBgColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={attributes.circleMenuGlobalBgHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										circleMenuGlobalBgHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={attributes.circleMenuGlobalBorder}
							options={[
								{ label: "None", value: "none" },
								{ label: "Solid", value: "solid" },
								{ label: "Double", value: "double" },
							]}
							onChange={(value) =>
								setAttributes({ circleMenuGlobalBorder: value })
							}
						/>
						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={attributes.circleMenuGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ circleMenuGlobalBoxShadowSwitcher: value })
							}
						/>
						{attributes.circleMenuGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowValues: value })
								}
								initialShadowValue={attributes.circleMenuGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowCssValue: value })
								}
							/>
						)}
						{attributes.circleMenuGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ circleMenuGlobalBoxShadowHoverValues: value })
								}
								initialShadowValue={
									attributes.circleMenuGlobalBoxShadowHoverValues
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
							desktopValue={attributes.circleMenuDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ circleMenuDesktopSwitcher: value })
							}
							tabletValue={attributes.circleMenuTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ circleMenuTabletSwitcher: value })
							}
							mobileValue={attributes.circleMenuMobileSwitcher}
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
							value={attributes.circleMenuGlobalCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ circleMenuGlobalCustomCSS: value })
							}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);

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
