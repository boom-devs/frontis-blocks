import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    BaseControl,
    Button,
    ButtonGroup,
    Dropdown,
} from '@wordpress/components';

import {
    BORDER_STYLES,
    BACKGROUND_TYPES,
    OVERFLOW_OP
} from '@Constants/fbConstants';

import { memo } from '@wordpress/element';
import FB_Range from '@Components/range';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        layoutType,
        iconSpacing,
        iconSpacingUnits,
        iconFontSize,
        iconFontSizeUnits,
        iconAlignment,
        socialShareCustomCSS,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalZIndex,
        socialShareOverflow,
        socialShareGlobalWraperID,
        socialShareGlobalWraperClass,

        /** Padding */
        socialShareGlobalPaddingUnits,
        socialShareGlobalPaddingDesktop,
        socialShareGlobalPaddingTablet,
        socialShareGlobalPaddingMobile,
        socialShareGlobalPaddingLink,

        /** Margin */
        socialShareGlobalMarginUnits,
        socialShareGlobalMarginDesktop,
        socialShareGlobalMarginTablet,
        socialShareGlobalMarginMobile,
        socialShareGlobalMarginLink,

        /** Background Normal */
        socialShareGlobalBgColor,
        socialShareGlobalBgHoverColor,
        socialShareGlobalBgColorSwitcher,
        socialShareGlobalBgNormalBackgroundType,
        socialShareGlobalBgNormalClassicColor,
        socialShareGlobalBgNormalGradientColor,
        socialShareGlobalBgNormalCustomGradientSwitcher,
        socialShareGlobalBgNormalCustomGradientInputValue,
        socialShareGlobalBgNormalBackgroundImageUrl,
        socialShareGlobalBgNormalBackgroundImagePosition,
        socialShareGlobalBgNormalBackgroundImageAttachment,
        socialShareGlobalBgNormalBackgroundImageRepeat,
        socialShareGlobalBgNormalBackgroundImageSize,

        /** Background Hover */
        socialShareGlobalBgHoverBackgroundType,
        socialShareGlobalBgHoverClassicColor,
        socialShareGlobalBgHoverGradientColor,
        socialShareGlobalBgHoverCustomGradientSwitcher,
        socialShareGlobalBgHoverCustomGradientInputValue,
        socialShareGlobalBgHoverBackgroundImageUrl,
        socialShareGlobalBgHoverBackgroundImagePosition,
        socialShareGlobalBgHoverBackgroundImageAttachment,
        socialShareGlobalBgHoverBackgroundImageRepeat,
        socialShareGlobalBgHoverBackgroundImageSize,

        /** Border */
        socialShareGlobalBorder,
        socialShareGlobalBorderColorSwitcher,
        socialShareGlobalBorderColor,
        socialShareGlobalBorderHoverColor,
        socialShareGlobalBorderUnits,
        socialShareGlobalBorderDesktop,
        socialShareGlobalBorderTablet,
        socialShareGlobalBorderMobile,
        socialShareGlobalBorderLink,

        /** Border Radius */
        socialShareGlobalBorderRadiusUnits,
        socialShareGlobalBorderRadiusDesktop,
        socialShareGlobalBorderRadiusTablet,
        socialShareGlobalBorderRadiusMobile,
        socialShareGlobalBorderRadiusLink,

        /** Box Shadow */
        socialShareGlobalBoxShadowSwitcher,
        socialShareGlobalBoxShadowValues,
        socialShareGlobalBoxShadowCssValue,
        socialShareGlobalBoxShadowHoverValues,
        socialShareGlobalBoxShadowHoverCssValue,
        socialSharePositionType,
        socialShareHZOrientationType,
        socialShareVROrientationType,
        socialShareHZLeftOffset,
        socialShareHZLeftOffsetUnits,
        socialShareHZRightOffset,
        socialShareHZRightOffsetUnits,
        socialShareVRTopOffset,
        socialShareVRTopOffsetUnits,
        socialShareVRBottomOffset,
        socialShareVRBottomOffsetUnits,
    } = attributes;

    const deviceType = useDeviceType();

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalPaddingMobile: {
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
                    setAttributes({ socialShareGlobalPaddingDesktop: { ...socialShareGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalPaddingTablet: { ...socialShareGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalPaddingMobile: { ...socialShareGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ socialShareGlobalPaddingLink: !socialShareGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalPaddingUnits: {
                ...socialShareGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalMarginMobile: {
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
                    setAttributes({ socialShareGlobalMarginDesktop: { ...socialShareGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalMarginTablet: { ...socialShareGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalMarginMobile: { ...socialShareGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ socialShareGlobalMarginLink: !socialShareGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalMarginUnits: {
                ...socialShareGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalBorderMobile: {
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
                    setAttributes({ socialShareGlobalBorderDesktop: { ...socialShareGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalBorderTablet: { ...socialShareGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalBorderMobile: { ...socialShareGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ socialShareGlobalBorderLink: !socialShareGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalBorderUnits: {
                ...socialShareGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalBorderRadiusMobile: {
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
                    setAttributes({ socialShareGlobalBorderRadiusDesktop: { ...socialShareGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalBorderRadiusTablet: { ...socialShareGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalBorderRadiusMobile: { ...socialShareGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ socialShareGlobalBorderRadiusLink: !socialShareGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalBorderRadiusUnits: {
                ...socialShareGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    //Start Style
    const generalControls = (
        <>
            <PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Layout Type")}
                    value={layoutType}
                    options={[
                        { label: 'Vertical', value: 'vertical' },
                        { label: 'Horizontal', value: 'horizontal' },
                    ]}
                    onChange={(value) => setAttributes({ layoutType: value })}
                />
                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={iconAlignment}
                    setGlobalAlignment={(value) => setAttributes({ iconAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
            </PanelBody>

        </>
    );
    const styleControls = (
        <>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={iconFontSize}
                    onChangeHandler={(value) => setAttributes({ iconFontSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ iconFontSizeUnits: value })}
                    deviceType={deviceType}
                    units={iconFontSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Icon Spacing", "frontis-blocks")}
                    rangeValue={iconSpacing}
                    onChangeHandler={(value) => setAttributes({ iconSpacing: value })}
                    rangeUnitHandler={(value) => setAttributes({ iconSpacingUnits: value })}
                    deviceType={deviceType}
                    units={iconSpacingUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
            </PanelBody>
        </>
    );
    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={socialShareGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ socialShareGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={socialShareOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ socialShareOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={socialSharePositionType}
                            setPositionType={(value) => setAttributes({ socialSharePositionType: value })}

                            HZOrientationType={socialShareHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ socialShareHZOrientationType: value })
                            }
                            VROrientationType={socialShareVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ socialShareVROrientationType: value })
                            }

                            HZLeftOffset={socialShareHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ socialShareHZLeftOffset: value })}
                            HZLeftOffsetUnits={socialShareHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ socialShareHZLeftOffsetUnits: value })}
                            HZRightOffset={socialShareHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ socialShareHZRightOffset: value })}
                            HZRightOffsetUnits={socialShareHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ socialShareHZRightOffsetUnits: value })}

                            VRTopOffset={socialShareVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ socialShareVRTopOffset: value })}
                            VRTopOffsetUnits={socialShareVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ socialShareVRTopOffsetUnits: value })}
                            VRBottomOffset={socialShareVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ socialShareVRBottomOffset: value })}
                            VRBottomOffsetUnits={socialShareVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ socialShareVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={socialShareGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ socialShareGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={socialShareGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ socialShareGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={socialShareGlobalPaddingUnits}
                            spacingDesktop={socialShareGlobalPaddingDesktop}
                            spacingTablet={socialShareGlobalPaddingTablet}
                            spacingMobile={socialShareGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={socialShareGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={socialShareGlobalMarginUnits}
                            spacingDesktop={socialShareGlobalMarginDesktop}
                            spacingTablet={socialShareGlobalMarginTablet}
                            spacingMobile={socialShareGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={socialShareGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Background Type", "frontis-blocks")}
                            globalSwitcher={socialShareGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBgColorSwitcher: value })}
                        />

                        {socialShareGlobalBgColorSwitcher === 'normal' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Normal Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ socialShareGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {socialShareGlobalBgColorSwitcher === 'hover' && (
                            <BaseControl
                                className="fb-setting-background-color-setting-wrapper"
                                label={__("Hover Background Type", "frontis-blocks")}
                            >
                                <Dropdown
                                    className="fb-setting-background-color-setting-icon-dropdown"
                                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                    popoverProps={{ placement: 'bottom-start' }}
                                    renderToggle={({ isOpen, onToggle }) => (
                                        <Button
                                            variant="primary"
                                            onClick={onToggle}
                                            aria-expanded={isOpen}
                                            className="fb-setting-background-color-setting-icon-btn"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
                                            </svg>
                                        </Button>
                                    )}
                                    renderContent={() => (
                                        <div className="fb-setting-background-color-popup-wrapper">
                                            <BaseControl
                                                className="fb-setting-background-color-popup-inner-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                                    {BACKGROUND_TYPES.map((item) => (
                                                        <Button
                                                            key={item.value}
                                                            onClick={() => setAttributes({ socialShareGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareGlobalBgHoverGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={socialShareGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ socialShareGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={socialShareGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBorderColorSwitcher: value })}
                        />

                        {socialShareGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={socialShareGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ socialShareGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {socialShareGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={socialShareGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ socialShareGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={socialShareGlobalBorderUnits}
                            spacingDesktop={socialShareGlobalBorderDesktop}
                            spacingTablet={socialShareGlobalBorderTablet}
                            spacingMobile={socialShareGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={socialShareGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={socialShareGlobalBorderRadiusUnits}
                            spacingDesktop={socialShareGlobalBorderRadiusDesktop}
                            spacingTablet={socialShareGlobalBorderRadiusTablet}
                            spacingMobile={socialShareGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={socialShareGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={socialShareGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBoxShadowSwitcher: value })}
                        />

                        {socialShareGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareGlobalBoxShadowValues: value })}
                                initialShadowValue={socialShareGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {socialShareGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={socialShareGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={socialShareDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ socialShareDesktopSwitcher: value })}

                            tabletValue={socialShareTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ socialShareTabletSwitcher: value })}

                            mobileValue={socialShareMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ socialShareMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={socialShareCustomCSS}
                            onChangeValue={(value) => setAttributes({ socialShareCustomCSS: value })}
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
}
export default memo(Inspector);