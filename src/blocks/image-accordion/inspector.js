/**
 * Image Accordion Carousel Block Inspector
 *
 * Note: Inspector controls are now integrated directly in edit.js
 * This file is kept for backward compatibility
 */

const Inspector = () => {
	// Controls are now in edit.js InspectorControls
	return null;
};

export default Inspector;
const deviceType = useDeviceType();

const titlePfIconHandler = (IconName) => {
	setAttributes({ titlePrefixIcon: IconName });
};
const titleSfIconHandler = (IconName) => {
	setAttributes({ titleSuffixIcon: IconName });
};

// accordionItem content margin
const handleAccordionItemMarginUnitChange = (event, position) => {
	const value = event.target.value;
	if (accordionItemMarginLink) {
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					accordionItemDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					accordionItemTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					accordionItemMobileMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			default:
				break;
		}
	} else {
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					accordionItemDesktopMargin: {
						...accordionItemDesktopMargin,
						[position]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					accordionItemTabMargin: {
						...accordionItemTabMargin,
						[position]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					accordionItemMobileMargin: {
						...accordionItemMobileMargin,
						[position]: value,
					},
				});
				break;
			default:
				break;
		}
	}
};

const handleAccordionItemMarginCombineBtn = () => {
	setAttributes({ accordionItemMarginLink: !accordionItemMarginLink });
};

const handleAccordionItemMarginUnitsHandler = (unit) => {
	setAttributes({
		accordionItemMarginUnits: {
			...accordionItemMarginUnits,
			[deviceType]: unit,
		},
	});
};

// accordionItem Padding Functionb
const handleAccordionItemPaddingUnitChange = (event, position) => {
	const value = event.target.value;
	if (accordionItemPaddingLink) {
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					accordionItemDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					accordionItemTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					accordionItemMobilePadding: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			default:
				break;
		}
	} else {
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					accordionItemDesktopPadding: {
						...accordionItemDesktopPadding,
						[position]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					accordionItemTabPadding: {
						...accordionItemTabPadding,
						[position]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					accordionItemMobilePadding: {
						...accordionItemMobilePadding,
						[position]: value,
					},
				});
				break;
			default:
				break;
		}
	}
};

const handleAccordionItemPaddingCombineBtn = () => {
	setAttributes({ accordionItemPaddingLink: !accordionItemPaddingLink });
};

const handleAccordionItemPaddingUnitsHandler = (unit) => {
	setAttributes({
		accordionItemPaddingUnits: {
			...accordionItemPaddingUnits,
			[deviceType]: unit,
		},
	});
};

/**
 * Inspector General Controls
 */
const generalControls = (
	<>
		<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
			<ToggleControl
				label={__("Default Open?", "frontis-blocks")}
				checked={clickable}
				onChange={(value) => setAttributes({ clickable: value })}
			/>
			<TextControl
				label="Title Text"
				value={title}
				onChange={(text) => setAttributes({ title: text })}
			/>
		</PanelBody>

		<PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
			<PanelBody title={__("Title Prefix", "frontis-blocks")}>
				<div className="fb-setting-switcher-container">
					<BaseControl className="fb-setting-switcher-panel-wrapper">
						<ButtonGroup className="fb-setting-switcher-panel-btn">
							{MEDIA_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ titlePrefixType: item.value })}
									className={`fb-setting-switcher-panel-btn-switcher ${
										titlePrefixType === item.value ? "active" : ""
									}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				</div>

				{titlePrefixType !== "none" && (
					<>
						{titlePrefixType === "icon" && (
							<BaseControl label={__("Icon", "frontis-blocks")}>
								<FBIconPicker
									value={titlePrefixIcon}
									setIconHandler={titlePfIconHandler}
								/>
							</BaseControl>
						)}

						{titlePrefixType === "icon" && (
							<>
								<FB_SwitcherControl
									label={__("Color", "frontis-blocks")}
									globalSwitcher={titlePrefixColorSwitcher}
									setGlobalSwitcher={(value) =>
										setAttributes({ titlePrefixColorSwitcher: value })
									}
								/>

								{titlePrefixColorSwitcher === "normal" && (
									<FB_ColorControl
										label={__("Normal Color", "frontis-blocks")}
										globalColor={titlePrefixColor}
										setGlobalColor={(value) =>
											setAttributes({
												titlePrefixColor: value === undefined ? "" : value,
											})
										}
									/>
								)}

								{titlePrefixColorSwitcher === "hover" && (
									<FB_ColorControl
										label={__("Hover Color", "frontis-blocks")}
										globalColor={titlePrefixHoverColor}
										setGlobalColor={(value) =>
											setAttributes({
												titlePrefixHoverColor: value === undefined ? "" : value,
											})
										}
									/>
								)}
							</>
						)}

						{titlePrefixType === "image" && (
							<FB_BackgroundImageControl
								globalBackgroundImageUrl={titlePrefixImgUrl}
								setGlobalBackgroundImageUrl={(value) =>
									setAttributes({ titlePrefixImgUrl: value })
								}
								globalBackgroundImageAlt={titlePrefixImgAlt}
								setGlobalBackgroundImageAlt={(value) =>
									setAttributes({ titlePrefixImgAlt: value })
								}
								globalBackgroundImageID={titlePrefixImgID}
								setGlobalBackgroundImageID={(value) =>
									setAttributes({ titlePrefixImgID: value })
								}
								globalBackgroundImagePosition={titlePrefixImgPosition}
								setGlobalBackgroundImagePosition={(value) =>
									setAttributes({ titlePrefixImgPosition: value })
								}
								globalBackgroundImageAttachment={titlePrefixImgAttachment}
								setGlobalBackgroundImageAttachment={(value) =>
									setAttributes({ titlePrefixImgAttachment: value })
								}
								globalBackgroundImageRepeat={titlePrefixImgRepeat}
								setGlobalBackgroundImageRepeat={(value) =>
									setAttributes({ titlePrefixImgRepeat: value })
								}
								globalBackgroundImageSize={titlePrefixImgSize}
								setGlobalBackgroundImageSize={(value) =>
									setAttributes({ titlePrefixImgSize: value })
								}
							/>
						)}
					</>
				)}
			</PanelBody>

			<PanelBody title={__("Title Suffix", "frontis-blocks")}>
				<div className="fb-setting-switcher-container">
					<BaseControl className="fb-setting-switcher-panel-wrapper">
						<ButtonGroup className="fb-setting-switcher-panel-btn">
							{MEDIA_TYPES.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ titleSuffixType: item.value })}
									className={`fb-setting-switcher-panel-btn-switcher ${
										titleSuffixType === item.value ? "active" : ""
									}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>
				</div>

				{titleSuffixType !== "none" && (
					<>
						{titleSuffixType === "icon" && (
							<BaseControl label={__("Icon", "frontis-blocks")}>
								<FBIconPicker
									value={titleSuffixIcon}
									setIconHandler={titleSfIconHandler}
								/>
							</BaseControl>
						)}

						{titleSuffixType === "icon" && (
							<>
								<FB_SwitcherControl
									label={__("Color", "frontis-blocks")}
									globalSwitcher={titleSuffixColorSwitcher}
									setGlobalSwitcher={(value) =>
										setAttributes({ titleSuffixColorSwitcher: value })
									}
								/>

								{titleSuffixColorSwitcher === "normal" && (
									<FB_ColorControl
										label={__("Normal Color", "frontis-blocks")}
										globalColor={titleSuffixColor}
										setGlobalColor={(value) =>
											setAttributes({
												titleSuffixColor: value === undefined ? "" : value,
											})
										}
									/>
								)}

								{titleSuffixColorSwitcher === "hover" && (
									<FB_ColorControl
										label={__("Hover Color", "frontis-blocks")}
										globalColor={titleSuffixHoverColor}
										setGlobalColor={(value) =>
											setAttributes({
												titleSuffixHoverColor: value === undefined ? "" : value,
											})
										}
									/>
								)}
							</>
						)}

						{titleSuffixType === "image" && (
							<FB_BackgroundImageControl
								globalBackgroundImageUrl={titleSuffixImgUrl}
								setGlobalBackgroundImageUrl={(value) =>
									setAttributes({ titleSuffixImgUrl: value })
								}
								globalBackgroundImageAlt={titleSuffixImgAlt}
								setGlobalBackgroundImageAlt={(value) =>
									setAttributes({ titleSuffixImgAlt: value })
								}
								globalBackgroundImageID={titleSuffixImgID}
								setGlobalBackgroundImageID={(value) =>
									setAttributes({ titleSuffixImgID: value })
								}
								globalBackgroundImagePosition={titleSuffixImgPosition}
								setGlobalBackgroundImagePosition={(value) =>
									setAttributes({ titleSuffixImgPosition: value })
								}
								globalBackgroundImageAttachment={titleSuffixImgAttachment}
								setGlobalBackgroundImageAttachment={(value) =>
									setAttributes({ titleSuffixImgAttachment: value })
								}
								globalBackgroundImageRepeat={titleSuffixImgRepeat}
								setGlobalBackgroundImageRepeat={(value) =>
									setAttributes({ titleSuffixImgRepeat: value })
								}
								globalBackgroundImageSize={titleSuffixImgSize}
								setGlobalBackgroundImageSize={(value) =>
									setAttributes({ titleSuffixImgSize: value })
								}
							/>
						)}
					</>
				)}
			</PanelBody>
		</PanelBody>
	</>
);

/**
 * Inspector Style Controls
 */
const styleControls = (
	<>
		<PanelBody
			title={__("Padding & Margin", "frontis-blocks")}
			initialOpen={true}
		>
			<FB_Spacing
				label={__("Margin", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleAccordionItemMarginUnitsHandler}
				spacingUnits={accordionItemMarginUnits}
				spacingDesktop={accordionItemDesktopMargin}
				spacingTablet={accordionItemTabMargin}
				spacingMobile={accordionItemMobileMargin}
				handleSpacingUnitHandler={handleAccordionItemMarginUnitChange}
				spacingCombineBtn={accordionItemMarginLink}
				spacingCombineBtnHandler={handleAccordionItemMarginCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_Spacing
				label={__("Padding", "frontis-blocks")}
				deviceType={deviceType}
				spacingUnitsHandler={handleAccordionItemPaddingUnitsHandler}
				spacingUnits={accordionItemPaddingUnits}
				spacingDesktop={accordionItemDesktopPadding}
				spacingTablet={accordionItemTabPadding}
				spacingMobile={accordionItemMobilePadding}
				handleSpacingUnitHandler={handleAccordionItemPaddingUnitChange}
				spacingCombineBtn={accordionItemPaddingLink}
				spacingCombineBtnHandler={handleAccordionItemPaddingCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	</>
);

/**
 * Inspector Advanced Controls
 */
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
						rangeValue={accordionItemZIndex}
						onChangeHandler={(value) =>
							setAttributes({
								accordionItemZIndex: value === 0 ? undefined : value,
							})
						}
						deviceType={deviceType}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
						isRangeUnit={false}
					/>

					<FB_InputControl
						label={__("CSS ID", "frontis-blocks")}
						value={accordionItemGlobalWraperID}
						onChangeValue={(value) =>
							setAttributes({ accordionItemGlobalWraperID: value })
						}
						helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
					/>

					<FB_InputControl
						label={__("CSS Class", "frontis-blocks")}
						value={accordionItemGlobalWraperClass}
						onChangeValue={(value) =>
							setAttributes({ accordionItemGlobalWraperClass: value })
						}
						helpText={__("Separate with spaces key.", "frontis-blocks")}
					/>
				</PanelBody>

				<PanelBody
					title={__("Responsive Control", "frontis-blocks")}
					initialOpen={false}
					className="fb-setting-responsive-control-wrapper"
				>
					<ToggleControl
						label={__("Hide on Desktop", "frontis-blocks")}
						className="fb-setting-responsive-control"
						checked={accordionItemDesktopSwitcher}
						onChange={(value) =>
							setAttributes({ accordionItemDesktopSwitcher: value })
						}
					/>
					<ToggleControl
						label={__("Hide on Tablet", "frontis-blocks")}
						className="fb-setting-responsive-control"
						checked={accordionItemTabletSwitcher}
						onChange={(value) =>
							setAttributes({ accordionItemTabletSwitcher: value })
						}
					/>
					<ToggleControl
						label={__("Hide on Mobile", "frontis-blocks")}
						className="fb-setting-responsive-control"
						checked={accordionItemMobileSwitcher}
						onChange={(value) =>
							setAttributes({ accordionItemMobileSwitcher: value })
						}
					/>
				</PanelBody>

				<PanelBody
					title={__("Custom CSS", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_CustomCSSEditor
						value={accordionItemCustomCSS}
						onChangeValue={(value) =>
							setAttributes({ accordionItemCustomCSS: value })
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

// export default memo(Inspector);
