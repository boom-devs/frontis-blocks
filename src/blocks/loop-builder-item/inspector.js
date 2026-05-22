import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, memo } from '@wordpress/element';
import {
    PanelBody,
    SelectControl
} from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import { useDeviceType } from '@Config/displayType';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_Range from '@Components/range';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';


import { 
    POST_SWITCHER,
    BORDER_STYLES,
} from '@Constants/fbConstants';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockID,
        blockStyle,
        gridColumnsPerSection,
        gridRowGap,
        gridColumnGap,
        gridGapUnits,

        postSwitcher,
        listGapUnits,
        listRowGap,
        loopBuilderItemGlobalZIndex,
        loopBuilderItemClass,
        loopBuilderItemCustomCSS,

        loopBuilderItemPaddingUnits,
        loopBuilderItemPaddingDesktop,
        loopBuilderItemPaddingTablet,
        loopBuilderItemPaddingMobile,
        loopBuilderItemPaddingLink,

        loopBuilderItemMarginUnits,
        loopBuilderItemMarginDesktop,
        loopBuilderItemMarginTablet,
        loopBuilderItemMarginMobile,
        loopBuilderItemMarginLink,

        loopBuilderItemBgColorSwitcher,
        loopBuilderItemNormalBackgroundType,
        loopBuilderItemNormalClassicColor,
        loopBuilderItemNormalGradientColor,
        loopBuilderItemNormalCustomGradientSwitcher,
        loopBuilderItemNormalCustomGradientInputValue,
        loopBuilderItemHoverBackgroundType,
        loopBuilderItemHoverClassicColor,
        loopBuilderItemHoverGradientColor,
        loopBuilderItemHoverCustomGradientSwitcher,
        loopBuilderItemHoverCustomGradientInputValue,

        loopBuilderItemBorder,
        loopBuilderItemBorderColorSwitcher,
        loopBuilderItemBorderColor,
        loopBuilderItemBorderHoverColor,

        loopBuilderItemBorderUnits,
        loopBuilderItemBorderDesktop,
        loopBuilderItemBorderTablet,
        loopBuilderItemBorderMobile,
        loopBuilderItemBorderLink,

        loopBuilderItemBorderRadiusUnits,
        loopBuilderItemBorderRadiusDesktop,
        loopBuilderItemBorderRadiusTablet,
        loopBuilderItemBorderRadiusMobile,
        loopBuilderItemBorderRadiusLink,

        loopBuilderItemBoxShadowSwitcher,
        loopBuilderItemBoxShadowValues,
        loopBuilderItemBoxShadowCssValue,
        loopBuilderItemBoxShadowHoverValues,
        loopBuilderItemBoxShadowHoverCssValue,
    } = attributes;

    const deviceType = useDeviceType();

    /** Start Google Map Padding */
    const loopBuilderItemPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (loopBuilderItemPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        loopBuilderItemPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        loopBuilderItemPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        loopBuilderItemPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ loopBuilderItemPaddingDesktop: { ...loopBuilderItemPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ loopBuilderItemPaddingTablet: { ...loopBuilderItemPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ loopBuilderItemPaddingMobile: { ...loopBuilderItemPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const loopBuilderItemPaddingLinkBtn = () => {
        setAttributes({
            loopBuilderItemPaddingLink: !loopBuilderItemPaddingLink
        });
    };

    const loopBuilderItemPaddingUnitsHandler = (unit) => {
        setAttributes({
            loopBuilderItemPaddingUnits: {
                ...loopBuilderItemPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Padding */

    /** Start Google Map Margin */
    const loopBuilderItemMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (loopBuilderItemMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        loopBuilderItemMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        loopBuilderItemMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        loopBuilderItemMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ loopBuilderItemMarginDesktop: { ...loopBuilderItemMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ loopBuilderItemMarginTablet: { ...loopBuilderItemMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ loopBuilderItemMarginMobile: { ...loopBuilderItemMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const loopBuilderItemMarginLinkBtn = () => {
        setAttributes({
            loopBuilderItemMarginLink: !loopBuilderItemMarginLink
        });
    };

    const loopBuilderItemMarginUnitsHandler = (unit) => {
        setAttributes({
            loopBuilderItemMarginUnits: {
                ...loopBuilderItemMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Margin */

    /** Start Google Map Border Radius */
    const loopBuilderItemBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (loopBuilderItemBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({    
                        loopBuilderItemBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        loopBuilderItemBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        loopBuilderItemBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ loopBuilderItemBorderDesktop: { ...loopBuilderItemBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ loopBuilderItemBorderTablet: { ...loopBuilderItemBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ loopBuilderItemBorderMobile: { ...loopBuilderItemBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const loopBuilderItemBorderLinkBtn = () => {
        setAttributes({
            loopBuilderItemBorderLink: !loopBuilderItemBorderLink
        });
    };

    const loopBuilderItemBorderUnitsHandler = (unit) => {
        setAttributes({
            loopBuilderItemBorderUnits: {
                ...loopBuilderItemBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Border */

    /** Start Google Map Border Radius */
    const loopBuilderItemBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (loopBuilderItemBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        loopBuilderItemBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        loopBuilderItemBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        loopBuilderItemBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ loopBuilderItemBorderRadiusDesktop: { ...loopBuilderItemBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ loopBuilderItemBorderRadiusTablet: { ...loopBuilderItemBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ loopBuilderItemBorderRadiusMobile: { ...loopBuilderItemBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const loopBuilderItemBorderRadiusLinkBtn = () => {
        setAttributes({
            loopBuilderItemBorderRadiusLink: !loopBuilderItemBorderRadiusLink
        });
    };

    const loopBuilderItemBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            loopBuilderItemBorderRadiusUnits: {
                ...loopBuilderItemBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Border Radius */

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
                <PanelBody
                    title={__("Layout", "frontis-blocks")}
                    initialOpen={true}
                >

                <FB_SwitcherControl
                    options={POST_SWITCHER}
                    globalSwitcher={postSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ postSwitcher: value })}
                />
                {postSwitcher === 'grid' && (
                    <>
                        <FB_Range
                            min={1}
                            max={12}
                            label={__("Columns", "frontis-blocks")}
                            rangeValue={gridColumnsPerSection}
                            onChangeHandler={(value) => setAttributes({ gridColumnsPerSection: value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"3"}
                            isRangeUnit={false}
                        />

                        <FB_Range
                            min={1}
                            max={200}
                            label={__("Row Gap", "frontis-blocks")}
                            rangeValue={gridRowGap}
                            onChangeHandler={(value) => setAttributes({ gridRowGap: value })}
                            rangeUnitHandler={(value) => setAttributes({ gridGapUnits: value })}
                            deviceType={deviceType}
                            units={gridGapUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"30"}
                        />

                        <FB_Range
                            min={1}
                            max={200}
                            label={__("Column Gap", "frontis-blocks")}
                            rangeValue={gridColumnGap}
                            onChangeHandler={(value) => setAttributes({ gridColumnGap: value })}
                            rangeUnitHandler={(value) => setAttributes({ gridGapUnits: value })} 
                            deviceType={deviceType}
                            units={gridGapUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"30"}
                        />
                    </>
                )}

                {postSwitcher === 'list' && (
                    <>
                        <FB_Range
                            min={1}
                            max={200}
                            label={__("Row Gap", "frontis-blocks")}
                            rangeValue={listRowGap}
                            onChangeHandler={(value) => setAttributes({ listRowGap: value })}
                            rangeUnitHandler={(value) => setAttributes({ listGapUnits: value })}
                            deviceType={deviceType}
                            units={listGapUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"30"}
                        />
                    </>
                )}
                </PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
            <PanelBody
                title={__("Style", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={loopBuilderItemPaddingUnitsHandler}
                    spacingUnits={loopBuilderItemPaddingUnits}
                    spacingDesktop={loopBuilderItemPaddingDesktop}
                    spacingTablet={loopBuilderItemPaddingTablet}
                    spacingMobile={loopBuilderItemPaddingMobile}
                    handleSpacingUnitHandler={loopBuilderItemPaddingUnitsChange}
                    spacingCombineBtn={loopBuilderItemPaddingLink}
                    spacingCombineBtnHandler={loopBuilderItemPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={loopBuilderItemMarginUnitsHandler}
                    spacingUnits={loopBuilderItemMarginUnits}
                    spacingDesktop={loopBuilderItemMarginDesktop}
                    spacingTablet={loopBuilderItemMarginTablet}
                    spacingMobile={loopBuilderItemMarginMobile}
                    handleSpacingUnitHandler={loopBuilderItemMarginUnitsChange}
                    spacingCombineBtn={loopBuilderItemMarginLink}
                    spacingCombineBtnHandler={loopBuilderItemMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={loopBuilderItemBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ loopBuilderItemBgColorSwitcher: value })}
                    
                    normalBackgroundType={loopBuilderItemNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ loopBuilderItemNormalBackgroundType: value })}
                    normalClassicColor={loopBuilderItemNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ loopBuilderItemNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={loopBuilderItemNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ loopBuilderItemNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={loopBuilderItemNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ loopBuilderItemNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={loopBuilderItemNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ loopBuilderItemNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={loopBuilderItemHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ loopBuilderItemHoverBackgroundType: value })}
                    hoverClassicColor={loopBuilderItemHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ loopBuilderItemHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={loopBuilderItemHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ loopBuilderItemHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={loopBuilderItemHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ loopBuilderItemHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={loopBuilderItemHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ loopBuilderItemHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={loopBuilderItemBorder} 
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ loopBuilderItemBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={loopBuilderItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ loopBuilderItemBorderColorSwitcher: value })}
                />

                {loopBuilderItemBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={loopBuilderItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ loopBuilderItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {loopBuilderItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={loopBuilderItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ loopBuilderItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={loopBuilderItemBorderUnitsHandler}
                    spacingUnits={loopBuilderItemBorderUnits}
                    spacingDesktop={loopBuilderItemBorderDesktop}
                    spacingTablet={loopBuilderItemBorderTablet}
                    spacingMobile={loopBuilderItemBorderMobile}
                    handleSpacingUnitHandler={loopBuilderItemBorderUnitsChange}
                    spacingCombineBtn={loopBuilderItemBorderLink}
                    spacingCombineBtnHandler={loopBuilderItemBorderLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={loopBuilderItemBorderRadiusUnitsHandler}
                    spacingUnits={loopBuilderItemBorderRadiusUnits}
                    spacingDesktop={loopBuilderItemBorderRadiusDesktop}
                    spacingTablet={loopBuilderItemBorderRadiusTablet}
                    spacingMobile={loopBuilderItemBorderRadiusMobile}
                    handleSpacingUnitHandler={loopBuilderItemBorderRadiusUnitsChange}
                    spacingCombineBtn={loopBuilderItemBorderRadiusLink}
                    spacingCombineBtnHandler={loopBuilderItemBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={loopBuilderItemBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ loopBuilderItemBoxShadowSwitcher: value })}
                />

                {loopBuilderItemBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ loopBuilderItemBoxShadowValues: value })}
                        initialShadowValue={loopBuilderItemBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ loopBuilderItemBoxShadowCssValue: value })}
                    />
                )}

                {loopBuilderItemBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ loopBuilderItemBoxShadowHoverValues: value })}
                        initialShadowValue={loopBuilderItemBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ loopBuilderItemBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
		</>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={loopBuilderItemGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ loopBuilderItemGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={loopBuilderItemClass}
                    onChangeValue={(value) => setAttributes({ loopBuilderItemClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor  
                    value={loopBuilderItemCustomCSS} 
                    onChangeValue={(value) => setAttributes({ loopBuilderItemCustomCSS: value })}
                />

            </PanelBody>
		</>
	);

    return (
        <FB_InspectorControls
            generalControls={generalControls}
            styleControls={styleControls}
            advancedControls={advancedControls}
        />
    );
}
export default memo(Inspector);