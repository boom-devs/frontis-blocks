import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	Button,
	ToggleControl,
	SelectControl,
} from "@wordpress/components";

/**
 * Internal depencencies
 */

import { 
    BORDER_STYLES,
} from '@Constants/fbConstants';

import { memo } from "@wordpress/element";
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import {useDeviceType} from "@Config/displayType";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import getCustomCss from '@Utils/getCustomCss';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_InputControl from '@Components/input-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';

import './editor.scss';

const Inspector = ({ attributes, setAttributes, addGridItem }) => {
	const {
		gutter,
		compactType,
		allowOverlap,

		/** Start Global Setting */
		gridLayoutGlobalZIndex,
        gridLayoutGlobalWraperID,
        gridLayoutGlobalWraperClass,
    
        /** Start Padding */
        gridLayoutGlobalPaddingUnits,
        gridLayoutGlobalPaddingDesktop,
        gridLayoutGlobalPaddingTablet,
        gridLayoutGlobalPaddingMobile,
        gridLayoutGlobalPaddingLink,
    
        /** Margin */
        gridLayoutGlobalMarginUnits,
        gridLayoutGlobalMarginDesktop,
        gridLayoutGlobalMarginTablet,
        gridLayoutGlobalMarginMobile,
        gridLayoutGlobalMarginLink,
    
        /** Background */
        gridLayoutGlobalBgColorTypeSwitcher,
        gridLayoutGlobalBgColorType,
        gridLayoutGlobalBgHoverColorType,
        gridLayoutGlobalBgColor,
        gridLayoutGlobalBgHoverColor,
        gridLayoutGlobalBgGradientColor,
        gridLayoutGlobalBgHoverGradientColor,
        gridLayoutGlobalBgCustomGradientColorSwitcher,
        gridLayoutGlobalBgCustomGradientColor,
        gridLayoutGlobalBgHoverCustomGradientColorSwitcher,
        gridLayoutGlobalBgHoverCustomGradientColor,
    
        /** Border */
        gridLayoutGlobalBorder,
        gridLayoutGlobalBorderColorSwitcher,
        gridLayoutGlobalBorderColor,
        gridLayoutGlobalBorderHoverColor,
        gridLayoutGlobalBorderUnits,
        gridLayoutGlobalBorderDesktop,
        gridLayoutGlobalBorderTablet,
        gridLayoutGlobalBorderMobile,
        gridLayoutGlobalBorderLink,
    
        /** Border Radius */
        gridLayoutGlobalBorderRadiusUnits,
        gridLayoutGlobalBorderRadiusDesktop,
        gridLayoutGlobalBorderRadiusTablet,
        gridLayoutGlobalBorderRadiusMobile,
        gridLayoutGlobalBorderRadiusLink,
    
        /** Box Shadow */
        gridLayoutGlobalBoxShadowSwitcher,
        gridLayoutGlobalBoxShadowValues,
        gridLayoutGlobalBoxShadowCssValue,
        gridLayoutGlobalBoxShadowHoverValues,
        gridLayoutGlobalBoxShadowHoverCssValue,
    
        /** Custom CSS */
        gridLayoutGlobalCustomCSS,
		/** End Global Setting */
	} = attributes;

	const deviceType = useDeviceType();


	/** Start Global Padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( gridLayoutGlobalPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        gridLayoutGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        gridLayoutGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        gridLayoutGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {gridLayoutGlobalPaddingDesktop: {...gridLayoutGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {gridLayoutGlobalPaddingTablet: {...gridLayoutGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {gridLayoutGlobalPaddingMobile: {...gridLayoutGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {gridLayoutGlobalPaddingLink: !gridLayoutGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            gridLayoutGlobalPaddingUnits: {
                ...gridLayoutGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( gridLayoutGlobalMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        gridLayoutGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        gridLayoutGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        gridLayoutGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {gridLayoutGlobalMarginDesktop: {...gridLayoutGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {gridLayoutGlobalMarginTablet: {...gridLayoutGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {gridLayoutGlobalMarginMobile: {...gridLayoutGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {gridLayoutGlobalMarginLink: !gridLayoutGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            gridLayoutGlobalMarginUnits: {
                ...gridLayoutGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global Border */
    const handleGlobalBorderUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( gridLayoutGlobalBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        gridLayoutGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        gridLayoutGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        gridLayoutGlobalBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {gridLayoutGlobalBorderDesktop: {...gridLayoutGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {gridLayoutGlobalBorderTablet: {...gridLayoutGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {gridLayoutGlobalBorderMobile: {...gridLayoutGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {gridLayoutGlobalBorderLink: !gridLayoutGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            gridLayoutGlobalBorderUnits: {
                ...gridLayoutGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Border */

    /** Start Global Border Radius */
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( gridLayoutGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        gridLayoutGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        gridLayoutGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        gridLayoutGlobalBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {gridLayoutGlobalBorderRadiusDesktop: {...gridLayoutGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {gridLayoutGlobalBorderRadiusTablet: {...gridLayoutGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {gridLayoutGlobalBorderRadiusMobile: {...gridLayoutGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {gridLayoutGlobalBorderRadiusLink: !gridLayoutGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            gridLayoutGlobalBorderRadiusUnits: {
                ...gridLayoutGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Border Radius */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Grid Settings", "frontis-blocks")}>
				<FB_Range
					min={1}
					max={1000}
					label={__("Gap", "frontis-blocks")}
					rangeValue={gutter}
					onChangeHandler={(value) => setAttributes({ gutter: value })}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={"10"}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Compaction Type", "frontis-blocks")}
					value={compactType || ""}
					options={[
						{ label: __("None (Free Placement)", "frontis-blocks"), value: "" },
						{ label: __("Vertical", "frontis-blocks"), value: "vertical" },
						{ label: __("Horizontal", "frontis-blocks"), value: "horizontal" },
					]}
					onChange={(val) => setAttributes({ compactType: val })}
					help={__(
						"Vertical keeps items packed upward, Horizontal packs left-to-right, and None keeps a looser free placement.",
						"frontis-blocks",
					)}
				/>
				<ToggleControl
					label={__("Allow Overlap", "frontis-blocks")}
					checked={allowOverlap}
					onChange={(val) => setAttributes({ allowOverlap: val })}
					help={__(
						"When disabled, dragged items push other items out of the way. When enabled, items can stack on top of each other.",
						"frontis-blocks",
					)}
				/>
				<Button
					variant="secondary"
					onClick={addGridItem}
					style={{ marginTop: "10px" }}
				>
					{__("Add New Item", "frontis-blocks")}
				</Button>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = <></>;

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>

            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
                className='fb-setting-layout-header'
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={gridLayoutGlobalZIndex} 
                    onChangeHandler={(value) => setAttributes({ gridLayoutGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}

                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={gridLayoutGlobalWraperID}
                    onChangeValue={(value) => setAttributes({ gridLayoutGlobalWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={gridLayoutGlobalWraperClass}
                    onChangeValue={(value) => setAttributes({ gridLayoutGlobalWraperClass: value })}
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
                    spacingUnits={gridLayoutGlobalPaddingUnits}
                    spacingDesktop={gridLayoutGlobalPaddingDesktop}
                    spacingTablet={gridLayoutGlobalPaddingTablet}
                    spacingMobile={gridLayoutGlobalPaddingMobile}
                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange} 
                    spacingCombineBtn={gridLayoutGlobalPaddingLink}
                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                    spacingUnits={gridLayoutGlobalMarginUnits}
                    spacingDesktop={gridLayoutGlobalMarginDesktop}
                    spacingTablet={gridLayoutGlobalMarginTablet}
                    spacingMobile={gridLayoutGlobalMarginMobile}
                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                    spacingCombineBtn={gridLayoutGlobalMarginLink}
                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody 
                title={__("Background", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={gridLayoutGlobalBgColorTypeSwitcher}  
					setBgColorSwitcher={(value) => setAttributes({ gridLayoutGlobalBgColorTypeSwitcher: value })}

					normalBackgroundType={gridLayoutGlobalBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ gridLayoutGlobalBgColorType: value })}
					normalClassicColor={gridLayoutGlobalBgColor}
					setNormalClassicColor={(value) => setAttributes({ gridLayoutGlobalBgColor: value === undefined ? '' : value })}
					normalGradientColor={gridLayoutGlobalBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ gridLayoutGlobalBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={gridLayoutGlobalBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ gridLayoutGlobalBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={gridLayoutGlobalBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ gridLayoutGlobalBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={gridLayoutGlobalBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ gridLayoutGlobalBgHoverColorType: value })}
					hoverClassicColor={gridLayoutGlobalBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ gridLayoutGlobalBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={gridLayoutGlobalBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ gridLayoutGlobalBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={gridLayoutGlobalBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ gridLayoutGlobalBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={gridLayoutGlobalBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ gridLayoutGlobalBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>
            </PanelBody>
            <PanelBody 
                title={__("Border and Shadow", "frontis-blocks")} 
                initialOpen={false}
            >
                <SelectControl
                    label={__("Border Style", "frontis-blocks")} 
                    value={gridLayoutGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ gridLayoutGlobalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={gridLayoutGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ gridLayoutGlobalBorderColorSwitcher: value })}
                />

                {gridLayoutGlobalBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={gridLayoutGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ gridLayoutGlobalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {gridLayoutGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={gridLayoutGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ gridLayoutGlobalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={gridLayoutGlobalBorderUnits}
                    spacingDesktop={gridLayoutGlobalBorderDesktop}
                    spacingTablet={gridLayoutGlobalBorderTablet}
                    spacingMobile={gridLayoutGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={gridLayoutGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={gridLayoutGlobalBorderRadiusUnits}
                    spacingDesktop={gridLayoutGlobalBorderRadiusDesktop}
                    spacingTablet={gridLayoutGlobalBorderRadiusTablet}
                    spacingMobile={gridLayoutGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={gridLayoutGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={gridLayoutGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ gridLayoutGlobalBoxShadowSwitcher: value })}
                />

                {gridLayoutGlobalBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ gridLayoutGlobalBoxShadowValues: value })}
                        initialShadowValue={gridLayoutGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ gridLayoutGlobalBoxShadowCssValue: value })}
                    />
                )}

                {gridLayoutGlobalBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ gridLayoutGlobalBoxShadowHoverValues: value })}
                        initialShadowValue={gridLayoutGlobalBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ gridLayoutGlobalBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={gridLayoutGlobalCustomCSS}
                    onChangeValue={(value) => setAttributes({ gridLayoutGlobalCustomCSS: value })}
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
};

export default memo(Inspector);
