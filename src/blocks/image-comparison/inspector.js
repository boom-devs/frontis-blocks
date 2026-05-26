import { __ } from '@wordpress/i18n';
import {
    SelectControl,
    PanelBody,
    TextControl,
    ToggleControl,
    __experimentalInputControl as InputControl,
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import { BORDER_STYLES } from '@Constants/fbConstants';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from '@Components/icon-picker';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_ImageControl from '@Components/image-control';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {

    const {
        beforeImageUrl,
        beforeImageAlt,
        beforeImageId,
        afterImageUrl,
        afterImageAlt,
        afterImageId,

        /** Start Comparison Height */
        comparisonHeight,
        comparisonHeightUnits,
        /** End Comparison Height */

        /** Start Before Image */
        beforeImgShowLabelSwitcher,
        /** End Before Image */

        /** Start After Image */
        afterImgShowLabelSwitcher,
        /** End After Image */

        /** Start After Image */
        afterImageLabel,
        /** End After Image */

        /** Start Before Image */
        beforeImageLabel,
        /** End Before Image */

        /** Start Initial Offset */
        comparisonInitialOffset,
        /** End Initial Offset */

        /** Start Comparison Settings */
        hoverToSlideSwitcher,
        clickToMoveSwitcher,
        disableOverlaySwitcher,
        /** End Comparison Settings */

        /** Start Comparison Drag Direction */
        comparisonDragDirection,
        /** End Comparison Drag Direction */

        /** Start Comparison Margin */
        comparisonMarginUnits,
        comparisonMarginDesktop,
        comparisonMarginTablet,
        comparisonMarginMobile,
        comparisonMarginLink,
        /** End Comparison Margin */

        /** Start Comparison Border */
        comparisonBorder,
        comparisonBorderColorSwitcher,
        comparisonBorderColor,
        comparisonBorderHoverColor,
        /** End Comparison Border */

        /** Start Comparison Border Units */
        comparisonBorderUnits,
        comparisonBorderDesktop,
        comparisonBorderTablet,
        comparisonBorderMobile,
        comparisonBorderLink,
        /** End Comparison Border Units */

        /** Start Comparison Border Radius */
        comparisonBorderRadiusUnits,
        comparisonBorderRadiusDesktop,
        comparisonBorderRadiusTablet,
        comparisonBorderRadiusMobile,
        comparisonBorderRadiusLink,
        /** End Comparison Border Radius */

        /** Start Comparison Box Shadow */
        comparisonBoxShadowSwitcher,
        comparisonBoxShadowValues,
        comparisonBoxShadowCssValue,
        comparisonBoxShadowHoverValues,
        comparisonBoxShadowHoverCssValue,
        /** End Comparison Box Shadow */

        /** Start Comparison Labels Padding */
        comparisonLabelsPaddingUnits,
        comparisonLabelsPaddingDesktop,
        comparisonLabelsPaddingTablet,
        comparisonLabelsPaddingMobile,
        comparisonLabelsPaddingLink,
        /** End Comparison Labels Padding */

        /** Start Comparison Labels Border Radius */
        comparisonLabelsBorderRadiusUnits,
        comparisonLabelsBorderRadiusDesktop,
        comparisonLabelsBorderRadiusTablet,
        comparisonLabelsBorderRadiusMobile,
        comparisonLabelsBorderRadiusLink,
        /** End Comparison Labels Border Radius */

        /** Start Comparison Labels Background Color */
        comparisonLabelsBgColorSwitcher,
        comparisonLabelsNormalBackgroundType,
        comparisonLabelsNormalClassicColor,
        comparisonLabelsNormalGradientColor,
        comparisonLabelsNormalCustomGradientSwitcher,
        comparisonLabelsNormalCustomGradientInputValue,
        comparisonLabelsHoverBackgroundType,
        comparisonLabelsHoverClassicColor,
        comparisonLabelsHoverGradientColor,
        comparisonLabelsHoverCustomGradientSwitcher,
        comparisonLabelsHoverCustomGradientInputValue,
        /** End Comparison Labels Background Color */

        /** Start Comparison Labels Typography */
        comparisonLabelsGlobalTypoSwitcher,
        comparisonLabelsGlobalTypoType,
        comparisonLabelsGlobalTypoOption,
        comparisonLabelsFontFamily,
        comparisonLabelsFontSize,
        comparisonLabelsFontSizeUnits,
        comparisonLabelsFontWeight,
        comparisonLabelsFontStyle,
        comparisonLabelsTextTransform,
        comparisonLabelsTextDecoration,
        comparisonLabelsLetterSpacing,
        comparisonLabelsLineHeight,
        comparisonLabelsLetterSpacingUnits,
        comparisonLabelsLineHeightUnits,
        /** End Comparison Labels Typography */

        /** Start Comparison Labels Text Color */
        comparisonLabelsBtnTextColorSwitcher,
        comparisonLabelsBtnTextColor,
        comparisonLabelsBtnTextHoverColor,
        /** End Comparison Labels Text Color */

        /** Start Global Settings */
        comparisonGlobalZIndex,
        /** End Global Settings */

        /** Start Custom CSS */
        comparisonCustomCSS,
        /** End Custom CSS */

        /** Start Wrapper ID */
        comparisonWraperID,
        /** End Wrapper ID */

        /** Start Wrapper Class */
        comparisonWraperClass,
        /** End Wrapper Class */

    } = attributes;

    const deviceType = useDeviceType();

    /** Start Google Map Margin */
    const comparisonMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (comparisonMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        comparisonMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        comparisonMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        comparisonMarginMobile: {
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
                    setAttributes({ comparisonMarginDesktop: { ...comparisonMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ comparisonMarginTablet: { ...comparisonMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ comparisonMarginMobile: { ...comparisonMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const comparisonMarginLinkBtn = () => {
        setAttributes({
            comparisonMarginLink: !comparisonMarginLink
        });
    };

    const comparisonMarginUnitsHandler = (unit) => {
        setAttributes({
            comparisonMarginUnits: {
                ...comparisonMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Margin */

    /** Start Comparison Border */
    const comparisonBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (comparisonBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        comparisonBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        comparisonBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        comparisonBorderMobile: {
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
                    setAttributes({ comparisonBorderDesktop: { ...comparisonBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ comparisonBorderTablet: { ...comparisonBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ comparisonBorderMobile: { ...comparisonBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const comparisonBorderLinkBtn = () => {
        setAttributes({
            comparisonBorderLink: !comparisonBorderLink
        });
    };

    const comparisonBorderUnitsHandler = (unit) => {
        setAttributes({
            comparisonBorderUnits: {
                ...comparisonBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Comparison Border */

    /** Start Comparison Border Radius */
    const comparisonBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (comparisonBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        comparisonBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        comparisonBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        comparisonBorderRadiusMobile: {
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
                    setAttributes({ comparisonBorderRadiusDesktop: { ...comparisonBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ comparisonBorderRadiusTablet: { ...comparisonBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ comparisonBorderRadiusMobile: { ...comparisonBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const comparisonBorderRadiusLinkBtn = () => {
        setAttributes({
            comparisonBorderRadiusLink: !comparisonBorderRadiusLink
        });
    };

    const comparisonBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            comparisonBorderRadiusUnits: {
                ...comparisonBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Comparison Border Radius */

    /** Start Comparison Labels Padding */
    const comparisonLabelsPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (comparisonLabelsPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        comparisonLabelsPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        comparisonLabelsPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        comparisonLabelsPaddingMobile: {
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
                    setAttributes({ comparisonLabelsPaddingDesktop: { ...comparisonLabelsPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ comparisonLabelsPaddingTablet: { ...comparisonLabelsPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ comparisonLabelsPaddingMobile: { ...comparisonLabelsPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const comparisonLabelsPaddingLinkBtn = () => {
        setAttributes({
            comparisonLabelsPaddingLink: !comparisonLabelsPaddingLink
        });
    };

    const comparisonLabelsPaddingUnitsHandler = (unit) => {
        setAttributes({
            comparisonLabelsPaddingUnits: {
                ...comparisonLabelsPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Comparison Labels Padding */

    /** Start Comparison Labels Border Radius */
    const comparisonLabelsBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (comparisonLabelsBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        comparisonLabelsBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        comparisonLabelsBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        comparisonLabelsBorderRadiusMobile: {
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
                    setAttributes({ comparisonLabelsBorderRadiusDesktop: { ...comparisonLabelsBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ comparisonLabelsBorderRadiusTablet: { ...comparisonLabelsBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ comparisonLabelsBorderRadiusMobile: { ...comparisonLabelsBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const comparisonLabelsBorderRadiusLinkBtn = () => {
        setAttributes({
            comparisonLabelsBorderRadiusLink: !comparisonLabelsBorderRadiusLink
        });
    };

    const comparisonLabelsBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            comparisonLabelsBorderRadiusUnits: {
                ...comparisonLabelsBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Comparison Labels Border Radius */


    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("After Images", "frontis-blocks")}
                initialOpen={true}
            >

                <FB_ImageControl
                    label={__("After Image", "frontis-blocks")}
                    globalImageUrl={afterImageUrl}
                    setglobalImageUrl={(value) => setAttributes({ afterImageUrl: value })}
                    globalImageAlt={afterImageAlt}
                    setglobalImageAlt={(value) => setAttributes({ afterImageAlt: value })}
                    globalImageID={afterImageId}
                    setglobalImageID={(value) => setAttributes({ afterImageId: value })}
                    isImageSize={false}
                />

                <ToggleControl
                    label={__("Show Label", "frontis-blocks")}
                    checked={afterImgShowLabelSwitcher}
                    onChange={(value) => setAttributes({ afterImgShowLabelSwitcher: value })}
                />

                {afterImgShowLabelSwitcher && (
                    <TextControl
                        label={__("Label", "frontis-blocks")}
                        value={afterImageLabel}
                        onChange={(value) => setAttributes({ afterImageLabel: value })}
                        className="fb-google-map-address-control"
                        help={__('Enter the address or location for the map', 'frontis-blocks')}
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Before Images", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_ImageControl
                    label={__("Before Image", "frontis-blocks")}
                    globalImageUrl={beforeImageUrl}
                    setglobalImageUrl={(value) => setAttributes({ beforeImageUrl: value })}
                    globalImageAlt={beforeImageAlt}
                    setglobalImageAlt={(value) => setAttributes({ beforeImageAlt: value })}
                    globalImageID={beforeImageId}
                    setglobalImageID={(value) => setAttributes({ beforeImageId: value })}
                    isImageSize={false}
                />
                <ToggleControl
                    label={__("Show Label", "frontis-blocks")}
                    checked={beforeImgShowLabelSwitcher}
                    onChange={(value) => setAttributes({ beforeImgShowLabelSwitcher: value })}
                />

                {beforeImgShowLabelSwitcher && (
                    <TextControl
                        label={__("Label", "frontis-blocks")}
                        value={beforeImageLabel}
                        onChange={(value) => setAttributes({ beforeImageLabel: value })}
                        className="fb-google-map-address-control"
                        help={__('Enter the address or location for the map', 'frontis-blocks')}
                    />
                )}

            </PanelBody>

            <PanelBody
                title={__("General Settings", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={0}
                    max={comparisonHeightUnits[deviceType] === '%' ? 100 : 1000}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={comparisonHeight}
                    onChangeHandler={(value) => setAttributes({ comparisonHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ comparisonHeightUnits: value })}
                    deviceType={deviceType}
                    units={comparisonHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                    label={__('Drag Direction', 'frontis-blocks')}
                    options={[
                        { label: __('Horizontal', 'frontis-blocks'), value: 'horizontal' },
                        { label: __('Vertical', 'frontis-blocks'), value: 'vertical' },
                    ]}
                    globalSwitcher={comparisonDragDirection}
                    setGlobalSwitcher={(value) => setAttributes({ comparisonDragDirection: value })}
                />

                <ToggleControl
                    label={__("Hover To Slide", "frontis-blocks")}
                    checked={hoverToSlideSwitcher}
                    onChange={(value) => setAttributes({ hoverToSlideSwitcher: value })}
                />

                <ToggleControl
                    label={__("Click To Move", "frontis-blocks")}
                    checked={clickToMoveSwitcher}
                    onChange={(value) => setAttributes({ clickToMoveSwitcher: value })}
                />

                <ToggleControl
                    label={__("Disable Overlay", "frontis-blocks")}
                    checked={disableOverlaySwitcher}
                    onChange={(value) => setAttributes({ disableOverlaySwitcher: value })}
                />

            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Container", "frontis-blocks")}
                initialOpen={false}
            >

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={comparisonBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ comparisonBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={comparisonBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ comparisonBorderColorSwitcher: value })}
                />

                {comparisonBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={comparisonBorderColor}
                        setGlobalColor={(value) => setAttributes({ comparisonBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {comparisonBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={comparisonBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ comparisonBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={comparisonBorderUnitsHandler}
                    spacingUnits={comparisonBorderUnits}
                    spacingDesktop={comparisonBorderDesktop}
                    spacingTablet={comparisonBorderTablet}
                    spacingMobile={comparisonBorderMobile}
                    handleSpacingUnitHandler={comparisonBorderUnitsChange}
                    spacingCombineBtn={comparisonBorderLink}
                    spacingCombineBtnHandler={comparisonBorderLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={comparisonBorderRadiusUnitsHandler}
                    spacingUnits={comparisonBorderRadiusUnits}
                    spacingDesktop={comparisonBorderRadiusDesktop}
                    spacingTablet={comparisonBorderRadiusTablet}
                    spacingMobile={comparisonBorderRadiusMobile}
                    handleSpacingUnitHandler={comparisonBorderRadiusUnitsChange}
                    spacingCombineBtn={comparisonBorderRadiusLink}
                    spacingCombineBtnHandler={comparisonBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={comparisonMarginUnitsHandler}
                    spacingUnits={comparisonMarginUnits}
                    spacingDesktop={comparisonMarginDesktop}
                    spacingTablet={comparisonMarginTablet}
                    spacingMobile={comparisonMarginMobile}
                    handleSpacingUnitHandler={comparisonMarginUnitsChange}
                    spacingCombineBtn={comparisonMarginLink}
                    spacingCombineBtnHandler={comparisonMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={comparisonBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ comparisonBoxShadowSwitcher: value })}
                />

                {comparisonBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ comparisonBoxShadowValues: value })}
                        initialShadowValue={comparisonBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ comparisonBoxShadowCssValue: value })}
                    />
                )}

                {comparisonBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ comparisonBoxShadowHoverValues: value })}
                        initialShadowValue={comparisonBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ comparisonBoxShadowHoverCssValue: value })}
                    />
                )}

            </PanelBody>

            <PanelBody
                title={__("Divider", "frontis-blocks")}
                initialOpen={false}
            >

            </PanelBody>

            <PanelBody
                title={__("Labels", "frontis-blocks")}
                initialOpen={false}
            >

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={comparisonLabelsGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ comparisonLabelsGlobalTypographyData: value })}
                    globalTypoType={comparisonLabelsGlobalTypoType}
                    onChangeGlobalTypoType={(value) => { setAttributes({ comparisonLabelsGlobalTypoType: value, comparisonLabelsGlobalTypoSwitcher: value === "default" ? { ...comparisonLabelsGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...comparisonLabelsGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, } }); }}
                    globalTypoOption={comparisonLabelsGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ comparisonLabelsGlobalTypoOption: value })}
                    fontFamily={comparisonLabelsFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ comparisonLabelsFontFamily: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, fontFamily: value && false, } })}
                    fontSize={comparisonLabelsFontSize}
                    onChangeFontSize={(value) => setAttributes({ comparisonLabelsFontSize: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, fontSize: value && false, } })}
                    fontSizeUnits={comparisonLabelsFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ comparisonLabelsFontSizeUnits: value })}
                    fontWeight={comparisonLabelsFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ comparisonLabelsFontWeight: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, fontWeight: value && false, } })}
                    fontStyle={comparisonLabelsFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ comparisonLabelsFontStyle: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, fontStyle: value && false, } })}
                    textTransform={comparisonLabelsTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ comparisonLabelsTextTransform: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, textTransform: value && false, } })}
                    textDecoration={comparisonLabelsTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ comparisonLabelsTextDecoration: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, textDecoration: value && false, } })}
                    letterSpacing={comparisonLabelsLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ comparisonLabelsLetterSpacing: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, letterSpacing: value && false, } })}
                    letterSpacingUnits={comparisonLabelsLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ comparisonLabelsLetterSpacingUnits: value })}
                    lineHeight={comparisonLabelsLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ comparisonLabelsLineHeight: value, comparisonLabelsGlobalTypoSwitcher: { ...comparisonLabelsGlobalTypoSwitcher, lineHeight: value && false, } })}
                    lineHeightUnits={comparisonLabelsLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ comparisonLabelsLineHeightUnits: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={comparisonLabelsBtnTextColorSwitcher}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ comparisonLabelsBtnTextColorSwitcher: value })
                    }
                />


                {comparisonLabelsBtnTextColorSwitcher === "normal" && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={comparisonLabelsBtnTextColor}
                        setGlobalColor={(value) => setAttributes({ comparisonLabelsBtnTextColor: value })}
                    />
                )}

                {comparisonLabelsBtnTextColorSwitcher === "hover" && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={comparisonLabelsBtnTextHoverColor}
                        setGlobalColor={(value) =>
                            setAttributes({ comparisonLabelsBtnTextHoverColor: value })
                        }
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={comparisonLabelsBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ comparisonLabelsBgColorSwitcher: value })}

                    normalBackgroundType={comparisonLabelsNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ comparisonLabelsNormalBackgroundType: value })}
                    normalClassicColor={comparisonLabelsNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ comparisonLabelsNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={comparisonLabelsNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ comparisonLabelsNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={comparisonLabelsNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ comparisonLabelsNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={comparisonLabelsNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ comparisonLabelsNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={comparisonLabelsHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ comparisonLabelsHoverBackgroundType: value })}
                    hoverClassicColor={comparisonLabelsHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ comparisonLabelsHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={comparisonLabelsHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ comparisonLabelsHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={comparisonLabelsHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ comparisonLabelsHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={comparisonLabelsHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ comparisonLabelsHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={comparisonLabelsPaddingUnitsHandler}
                    spacingUnits={comparisonLabelsPaddingUnits}
                    spacingDesktop={comparisonLabelsPaddingDesktop}
                    spacingTablet={comparisonLabelsPaddingTablet}
                    spacingMobile={comparisonLabelsPaddingMobile}
                    handleSpacingUnitHandler={comparisonLabelsPaddingUnitsChange}
                    spacingCombineBtn={comparisonLabelsPaddingLink}
                    spacingCombineBtnHandler={comparisonLabelsPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={comparisonLabelsBorderRadiusUnitsHandler}
                    spacingUnits={comparisonLabelsBorderRadiusUnits}
                    spacingDesktop={comparisonLabelsBorderRadiusDesktop}
                    spacingTablet={comparisonLabelsBorderRadiusTablet}
                    spacingMobile={comparisonLabelsBorderRadiusMobile}
                    handleSpacingUnitHandler={comparisonLabelsBorderRadiusUnitsChange}
                    spacingCombineBtn={comparisonLabelsBorderRadiusLink}
                    spacingCombineBtnHandler={comparisonLabelsBorderRadiusLinkBtn}
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

            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={comparisonGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ comparisonGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={comparisonWraperID}
                    onChangeValue={(value) => setAttributes({ comparisonWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={comparisonWraperClass}
                    onChangeValue={(value) => setAttributes({ comparisonWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={comparisonCustomCSS}
                    onChangeValue={(value) => setAttributes({ comparisonCustomCSS: value })}
                />
            </PanelBody>

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

}

export default Inspector;