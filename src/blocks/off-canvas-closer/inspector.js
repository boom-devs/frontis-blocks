import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	TabPanel,
	SelectControl,
} from '@wordpress/components';
import { useEffect, useMemo } from '@wordpress/element';
import {
	ICON_ALIGN,
	BORDER_STYLES
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import FBIconPicker from "../../components/icon-picker";
import FB_ImageControl from '@Components/image-control';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		blockStyle,


		offCanvasIconAlign,
        offCanvasIcon,
		/** Start button Icon Image */
		offCanvasIconImageUrl,
		offCanvasIconImageAlt,
		offCanvasIconImageID,
		offCanvasIconImageWidth,
		offCanvasIconImageWidthUnits,
		offCanvasIconImageHeight,
		offCanvasIconImageHeightUnits,
		offCanvasIconImagedisplay,
		/** end Icon Button Image*/

		/** Start Icon Styles */
		offCanvasIconSize,
        offCanvasIconSizeUnits,
        offCanvasIconColorSwitcher,
        offCanvasIconColor,
        offCanvasIconHoverColor,
		offCanvasIconBgColorSwitcher,
        offCanvasIconBgColor,
        offCanvasIconBgHoverColor,
        offCanvasIconBorder,
        offCanvasIconBorderColorSwitcher,
        offCanvasIconBorderColor,
        offCanvasIconBorderHoverColor,

		offCanvasIconPaddingUnits,
		offCanvasIconPaddingDesktop,
		offCanvasIconPaddingTablet,
		offCanvasIconPaddingMobile,
		offCanvasIconPaddingLink,

        offCanvasIconBorderUnits,
        offCanvasIconBorderDesktop,
        offCanvasIconBorderTablet,
        offCanvasIconBorderMobile,
        offCanvasIconBorderLink,
        offCanvasIconBorderRadiusUnits,
        offCanvasIconBorderRadiusDesktop,
        offCanvasIconBorderRadiusTablet,
        offCanvasIconBorderRadiusMobile,
        offCanvasIconBorderRadiusLink,
		offCanvasIconRotateSwitcher,
		offCanvasIconRotate,
		offCanvasIconRotateHover,
		offCanvasIconImageRotateSwitcher,
		offCanvasIconImageRotate,
		offCanvasIconImageRotateHover,
		/** End Icon Styles */


		offCanvasIconZIndex,
	} = attributes;

	const deviceType = useDeviceType();


	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-off-canvas-closer-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

	/** Start Icon Handler */
	const iconHandler = (IconName) => {
		setAttributes({offCanvasIcon: IconName})
	}

	/** Start Icon padding */
	const handleoffCanvasIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( offCanvasIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						offCanvasIconPaddingDesktop: { 
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						offCanvasIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						offCanvasIconPaddingMobile: {
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
					setAttributes( {offCanvasIconPaddingDesktop: {...offCanvasIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {offCanvasIconPaddingTablet: {...offCanvasIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {offCanvasIconPaddingMobile: {...offCanvasIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleoffCanvasIconPaddingCombineBtn = () => { 
		setAttributes( {offCanvasIconPaddingLink: !offCanvasIconPaddingLink} );
	}

	const handleoffCanvasIconPaddingUnitsHandler = (unit) => {
		setAttributes( {
			offCanvasIconPaddingUnits: {
				...offCanvasIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Icon padding */
	const offCanvasIconPaddingDesktopWidth = `${offCanvasIconPaddingDesktop.top}${offCanvasIconPaddingUnits.Desktop} ${offCanvasIconPaddingDesktop.right}${offCanvasIconPaddingUnits.Desktop} ${offCanvasIconPaddingDesktop.bottom}${offCanvasIconPaddingUnits.Desktop} ${offCanvasIconPaddingDesktop.left}${offCanvasIconPaddingUnits.Desktop}`;
	const offCanvasIconPaddingTabletWidth = `${offCanvasIconPaddingTablet.top}${offCanvasIconPaddingUnits.Tablet} ${offCanvasIconPaddingTablet.right}${offCanvasIconPaddingUnits.Tablet} ${offCanvasIconPaddingTablet.bottom}${offCanvasIconPaddingUnits.Tablet} ${offCanvasIconPaddingTablet.left}${offCanvasIconPaddingUnits.Tablet}`;
	const offCanvasIconPaddingMobileWidth = `${offCanvasIconPaddingMobile.top}${offCanvasIconPaddingUnits.Mobile} ${offCanvasIconPaddingMobile.right}${offCanvasIconPaddingUnits.Mobile} ${offCanvasIconPaddingMobile.bottom}${offCanvasIconPaddingUnits.Mobile} ${offCanvasIconPaddingMobile.left}${offCanvasIconPaddingUnits.Mobile}`;
	/** End Border */
	
    /** Start Icon border */
    const handleoffCanvasIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( offCanvasIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        offCanvasIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        offCanvasIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        offCanvasIconBorderMobile: {
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
                    setAttributes( {offCanvasIconBorderDesktop: {...offCanvasIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {offCanvasIconBorderTablet: {...offCanvasIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {offCanvasIconBorderMobile: {...offCanvasIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleoffCanvasIconBorderCombineBtn = () => {
        setAttributes( {offCanvasIconBorderLink: !offCanvasIconBorderLink} );
    }

    const handleoffCanvasIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            offCanvasIconBorderUnits: {
                ...offCanvasIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon border */
    const offCanvasIconBorderDesktopWidth = `${offCanvasIconBorderDesktop.top}${offCanvasIconBorderUnits.Desktop} ${offCanvasIconBorderDesktop.right}${offCanvasIconBorderUnits.Desktop} ${offCanvasIconBorderDesktop.bottom}${offCanvasIconBorderUnits.Desktop} ${offCanvasIconBorderDesktop.left}${offCanvasIconBorderUnits.Desktop}`;
    const offCanvasIconBorderTabletWidth = `${offCanvasIconBorderTablet.top}${offCanvasIconBorderUnits.Tablet} ${offCanvasIconBorderTablet.right}${offCanvasIconBorderUnits.Tablet} ${offCanvasIconBorderTablet.bottom}${offCanvasIconBorderUnits.Tablet} ${offCanvasIconBorderTablet.left}${offCanvasIconBorderUnits.Tablet}`;
    const offCanvasIconBorderMobileWidth = `${offCanvasIconBorderMobile.top}${offCanvasIconBorderUnits.Mobile} ${offCanvasIconBorderMobile.right}${offCanvasIconBorderUnits.Mobile} ${offCanvasIconBorderMobile.bottom}${offCanvasIconBorderUnits.Mobile} ${offCanvasIconBorderMobile.left}${offCanvasIconBorderUnits.Mobile}`;
    /** End Border */


    /** Start Icon border radius*/
    const handleoffCanvasIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( offCanvasIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        offCanvasIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        offCanvasIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        offCanvasIconBorderRadiusMobile: {
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
                    setAttributes( {offCanvasIconBorderRadiusDesktop: {...offCanvasIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {offCanvasIconBorderRadiusTablet: {...offCanvasIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {offCanvasIconBorderRadiusMobile: {...offCanvasIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleoffCanvasIconBorderRadiusCombineBtn = () => {
        setAttributes( {offCanvasIconBorderRadiusLink: !offCanvasIconBorderRadiusLink} );
    }

    const handleoffCanvasIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            offCanvasIconBorderRadiusUnits: {
                ...offCanvasIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Icon Border Radius */
    const offCanvasIconBorderRadiusDesktopWidth = `${offCanvasIconBorderRadiusDesktop.top}${offCanvasIconBorderRadiusUnits.Desktop} ${offCanvasIconBorderRadiusDesktop.right}${offCanvasIconBorderRadiusUnits.Desktop} ${offCanvasIconBorderRadiusDesktop.bottom}${offCanvasIconBorderRadiusUnits.Desktop} ${offCanvasIconBorderRadiusDesktop.left}${offCanvasIconBorderRadiusUnits.Desktop}`;
    const offCanvasIconBorderRadiusTabletWidth = `${offCanvasIconBorderRadiusTablet.top}${offCanvasIconBorderRadiusUnits.Tablet} ${offCanvasIconBorderRadiusTablet.right}${offCanvasIconBorderRadiusUnits.Tablet} ${offCanvasIconBorderRadiusTablet.bottom}${offCanvasIconBorderRadiusUnits.Tablet} ${offCanvasIconBorderRadiusTablet.left}${offCanvasIconBorderRadiusUnits.Tablet}`;
    const offCanvasIconBorderRadiusMobileWidth = `${offCanvasIconBorderRadiusMobile.top}${offCanvasIconBorderRadiusUnits.Mobile} ${offCanvasIconBorderRadiusMobile.right}${offCanvasIconBorderRadiusUnits.Mobile} ${offCanvasIconBorderRadiusMobile.bottom}${offCanvasIconBorderRadiusUnits.Mobile} ${offCanvasIconBorderRadiusMobile.left}${offCanvasIconBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

	const allBlockStyle = useMemo(() => `

		.${blockId}.fb-off-canvas-closer-block{
			${offCanvasIconZIndex.Desktop ? `z-index: ${offCanvasIconZIndex.Desktop};` : ''}
		}
		.${blockId} .fb-off-canvas-closer {
			display: flex;
			background-color: transparent;
			padding: 0;
			${offCanvasIconBgColor ? `background-color: ${offCanvasIconBgColor};` : ''}
			${offCanvasIconPaddingDesktopWidth && offCanvasIconPaddingDesktop.top ? `padding: ${offCanvasIconPaddingDesktopWidth};` : ''}
			${offCanvasIconBorder ? `border: ${offCanvasIconBorder};` : ''}
			${offCanvasIconBorderColor ? `border-color: ${offCanvasIconBorderColor};` : ''}
			${offCanvasIconBorderDesktopWidth && offCanvasIconBorderDesktop.top ? `border-width: ${offCanvasIconBorderDesktopWidth};` : ''}
			${offCanvasIconBorderRadiusDesktopWidth && offCanvasIconBorderRadiusDesktop.top ? `border-radius: ${offCanvasIconBorderRadiusDesktopWidth};` : ''}
		}
		.${blockId} .fb-off-canvas-closer:hover {
			${offCanvasIconBgHoverColor ? `background-color: ${offCanvasIconBgHoverColor};` : ''}
			${offCanvasIconBorderHoverColor ? `border-color: ${offCanvasIconBorderHoverColor};` : ''}
		}

		.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper svg {
			${offCanvasIconSize.Desktop && offCanvasIconSizeUnits.Desktop ? `width: ${offCanvasIconSize.Desktop}${offCanvasIconSizeUnits.Desktop};` : ''} 
			${offCanvasIconSize.Desktop && offCanvasIconSizeUnits.Desktop ? `height: ${offCanvasIconSize.Desktop}${offCanvasIconSizeUnits.Desktop};` : ''}
			${offCanvasIconColor ? `fill: ${offCanvasIconColor};` : ''}
			transform: rotate(${offCanvasIconRotate.Desktop}deg);
			transition: all .3s ease-in-out;
		}


		.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
			${offCanvasIconImageWidth ? `width: ${offCanvasIconImageWidth.Desktop}${offCanvasIconImageWidthUnits.Desktop};` : ''}
			${offCanvasIconImageHeight ? `height: ${offCanvasIconImageHeight.Desktop}${offCanvasIconImageHeightUnits.Desktop};` : ''}
			${offCanvasIconImagedisplay ? `object-fit: ${offCanvasIconImagedisplay};` : ''}
			transform: rotate(${offCanvasIconImageRotate.Desktop}deg);
			transition: all .3s ease-in-out;
		}
		.${blockId} .fb-off-canvas-closer:hover .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
			transform: rotate(${offCanvasIconImageRotateHover.Desktop}deg);
		}

		@media only screen and (max-width: 1024px) {
			.${blockId}.fb-off-canvas-closer-block{
				${offCanvasIconZIndex.Tablet ? `z-index: ${offCanvasIconZIndex.Tablet};` : ''}
			}
			.${blockId} .fb-off-canvas-closer {
				${offCanvasIconPaddingTabletWidth && offCanvasIconPaddingTablet.top ? `padding: ${offCanvasIconPaddingTabletWidth};` : ''}
				${offCanvasIconBorderTabletWidth && offCanvasIconBorderTablet.top ? `border-width: ${offCanvasIconBorderTabletWidth};` : ''}
				${offCanvasIconBorderRadiusTabletWidth && offCanvasIconBorderRadiusTablet.top ? `border-radius: ${offCanvasIconBorderRadiusTabletWidth};` : ''}
			}

			.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper svg {
				${offCanvasIconSize.Tablet && offCanvasIconSizeUnits.Tablet ? `width: ${offCanvasIconSize.Tablet}${offCanvasIconSizeUnits.Tablet};` : ''} 
				${offCanvasIconSize.Tablet && offCanvasIconSizeUnits.Tablet ? `height: ${offCanvasIconSize.Tablet}${offCanvasIconSizeUnits.Tablet};` : ''}
				transform: rotate(${offCanvasIconRotate.Tablet}deg);
			}


			.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
				${offCanvasIconImageWidth ? `width: ${offCanvasIconImageWidth.Tablet}${offCanvasIconImageWidthUnits.Tablet};` : ''}
				${offCanvasIconImageHeight ? `height: ${offCanvasIconImageHeight.Tablet}${offCanvasIconImageHeightUnits.Tablet};` : ''}
				transform: rotate(${offCanvasIconImageRotate.Tablet}deg);
			}
			.${blockId} .fb-off-canvas-closer:hover .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
				transform: rotate(${offCanvasIconImageRotateHover.Tablet}deg);
			}
		}

		@media only screen and (max-width: 767px) {
			.${blockId}.fb-off-canvas-closer-block{
				${offCanvasIconZIndex.Mobile ? `z-index: ${offCanvasIconZIndex.Mobile};` : ''}
			}
			.${blockId} .fb-off-canvas-closer {
				${offCanvasIconPaddingMobileWidth && offCanvasIconPaddingMobile.top ? `padding: ${offCanvasIconPaddingMobileWidth};` : ''}
				${offCanvasIconBorderMobileWidth && offCanvasIconBorderMobile.top ? `border-width: ${offCanvasIconBorderMobileWidth};` : ''}
				${offCanvasIconBorderRadiusMobileWidth && offCanvasIconBorderRadiusMobile.top ? `border-radius: ${offCanvasIconBorderRadiusMobileWidth};` : ''}
			}

			.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper svg {
				${offCanvasIconSize.Mobile && offCanvasIconSizeUnits.Mobile ? `width: ${offCanvasIconSize.Mobile}${offCanvasIconSizeUnits.Mobile};` : ''} 
				${offCanvasIconSize.Mobile && offCanvasIconSizeUnits.Mobile ? `height: ${offCanvasIconSize.Mobile}${offCanvasIconSizeUnits.Mobile};` : ''}
				transform: rotate(${offCanvasIconRotate.Mobile}deg);
			}


			.${blockId} .fb-off-canvas-closer .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
				${offCanvasIconImageWidth ? `width: ${offCanvasIconImageWidth.Mobile}${offCanvasIconImageWidthUnits.Mobile};` : ''}
				${offCanvasIconImageHeight ? `height: ${offCanvasIconImageHeight.Mobile}${offCanvasIconImageHeightUnits.Mobile};` : ''}
				transform: rotate(${offCanvasIconImageRotate.Mobile}deg);
			}
			.${blockId} .fb-off-canvas-closer:hover .fb-off-canvas-closer-icon-wrapper .fb-off-canvas-closer-icon-image {
				transform: rotate(${offCanvasIconImageRotateHover.Mobile}deg);
			}
		}
	`, [
		blockId,
		blockStyle,
		offCanvasIconAlign,
        offCanvasIcon,
		/** Start button Icon Image */
		offCanvasIconImageUrl,
		offCanvasIconImageAlt,
		offCanvasIconImageID,
		offCanvasIconImageWidth,
		offCanvasIconImageWidthUnits,
		offCanvasIconImageHeight,
		offCanvasIconImageHeightUnits,
		offCanvasIconImagedisplay,
		/** end Icon Button Image*/

		/** Start Icon Styles */
		offCanvasIconSize,
        offCanvasIconSizeUnits,
        offCanvasIconColorSwitcher,
        offCanvasIconColor,
        offCanvasIconHoverColor,
		offCanvasIconBgColorSwitcher,
        offCanvasIconBgColor,
        offCanvasIconBgHoverColor,
        offCanvasIconBorder,
        offCanvasIconBorderColorSwitcher,
        offCanvasIconBorderColor,
        offCanvasIconBorderHoverColor,
		/** End Icon Border */

		/** Start Icon Padding */
		offCanvasIconPaddingUnits,
		offCanvasIconPaddingDesktop,
		offCanvasIconPaddingTablet,
		offCanvasIconPaddingMobile,
		offCanvasIconPaddingLink,
		offCanvasIconPaddingDesktopWidth,
		offCanvasIconPaddingTabletWidth,
		offCanvasIconPaddingMobileWidth,
		/** End Icon Padding */

		/** Start Icon Border Units */
        offCanvasIconBorderUnits,
        offCanvasIconBorderDesktop,
        offCanvasIconBorderTablet,
        offCanvasIconBorderMobile,
        offCanvasIconBorderLink,
		offCanvasIconBorderDesktopWidth,
		offCanvasIconBorderTabletWidth,
		offCanvasIconBorderMobileWidth,
		/** End Icon Border Units */

		/** Start Icon Border Radius */	
        offCanvasIconBorderRadiusUnits,
        offCanvasIconBorderRadiusDesktop,
        offCanvasIconBorderRadiusTablet,
        offCanvasIconBorderRadiusMobile,
        offCanvasIconBorderRadiusLink,
		offCanvasIconBorderRadiusDesktopWidth,
		offCanvasIconBorderRadiusTabletWidth,
		offCanvasIconBorderRadiusMobileWidth,
		/** End Icon Border Radius */

		/** Start Icon Rotate */
		offCanvasIconRotateSwitcher,
		offCanvasIconRotate,
		offCanvasIconRotateHover,
		offCanvasIconImageRotateSwitcher,
		offCanvasIconImageRotate,
		offCanvasIconImageRotateHover,
		/** End Icon Rotate */

		offCanvasIconZIndex,
		
	]);

	useEffect(() => {
		setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
	}, [allBlockStyle]);


	const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();


	return (
		<>
			<style>
				{editorStyle}
			</style>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<div className="fb-advanced-button-wrapper">
											<PanelBody
												initialOpen={true}
											>
												<div className='fb-advanced-btn-icon-wrapper'>
													<BaseControl
														label={__("Icon", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
													>
														<ButtonGroup
															className="fb-setting-text-alignment-group-btn"
														>
															{ICON_ALIGN.map((item, key) => (
																<Button
																	key={key}
																	onClick={() => setAttributes({ offCanvasIconAlign: item.value })} 
																	className={`fb-setting-text-alignment-single-btn ${offCanvasIconAlign === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
														{(offCanvasIconAlign === 'icon-text') && (
															<FBIconPicker value={offCanvasIcon} setIconHandler={iconHandler} /> 
														)}

														{(offCanvasIconAlign === 'image') && (
															<FB_ImageControl 
																globalImageUrl={offCanvasIconImageUrl}
																setglobalImageUrl={(value) => setAttributes({ offCanvasIconImageUrl: value })}
																globalImageAlt={offCanvasIconImageAlt}
																setglobalImageAlt={(value) => setAttributes({ offCanvasIconImageAlt: value })}
																globalImageID={offCanvasIconImageID}
																setglobalImageID={(value) => setAttributes({ offCanvasIconImageID: value })}
																globalImageSize={offCanvasIconImagedisplay}
																setglobalImageSize={(value) => setAttributes({ offCanvasIconImagedisplay: value })}
															/>
														)}

													</BaseControl>
												</div>
											</PanelBody>
                                        </div>
									</>
								)}
								{tab.name === "styles" && (
									<>
										{(offCanvasIconAlign === 'icon-text') && (
											<PanelBody
												title={__("Icon Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Icon Size", "frontis-blocks")}
													rangeValue={offCanvasIconSize}
													onChangeHandler={(value) => setAttributes({ offCanvasIconSize: value })}
													rangeUnitHandler={(value) => setAttributes({ offCanvasIconSizeUnits: value })}
													deviceType={deviceType}
													units={offCanvasIconSizeUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={25}
												/>

												<FB_SwitcherControl
													label={__("Icon Color", "frontis-blocks")}
													globalSwitcher={offCanvasIconColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconColorSwitcher: value })}
												/>

												{offCanvasIconColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={offCanvasIconColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconColor: value })}
													/>
												)}

												{offCanvasIconColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={offCanvasIconHoverColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconHoverColor: value })}
													/>
												)}

												<FB_SwitcherControl
													label={__("Background Color", "frontis-blocks")}
													globalSwitcher={offCanvasIconBgColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconBgColorSwitcher: value })}
												/>

												{offCanvasIconBgColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={offCanvasIconBgColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBgColor: value })}
													/>
												)}

												{offCanvasIconBgColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={offCanvasIconBgHoverColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBgHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconPaddingUnitsHandler}
													spacingUnits={offCanvasIconPaddingUnits}
													spacingDesktop={offCanvasIconPaddingDesktop}
													spacingTablet={offCanvasIconPaddingTablet}
													spacingMobile={offCanvasIconPaddingMobile}
													handleSpacingUnitHandler={handleoffCanvasIconPaddingUnitChange}
													spacingCombineBtn={offCanvasIconPaddingLink}
													spacingCombineBtnHandler={handleoffCanvasIconPaddingCombineBtn}
													setAttributes={setAttributes}
												/>

												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={offCanvasIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ offCanvasIconBorder: value })}
												/>

												<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={offCanvasIconBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconBorderColorSwitcher: value })}
												/>

												{offCanvasIconBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={offCanvasIconBorderColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBorderColor: value })}
													/>
												)}

												{offCanvasIconBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={offCanvasIconBorderHoverColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBorderHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconBorderUnitsHandler}
													spacingUnits={offCanvasIconBorderUnits}
													spacingDesktop={offCanvasIconBorderDesktop}
													spacingTablet={offCanvasIconBorderTablet}
													spacingMobile={offCanvasIconBorderMobile}
													handleSpacingUnitHandler={handleoffCanvasIconBorderUnitChange}
													spacingCombineBtn={offCanvasIconBorderLink}
													spacingCombineBtnHandler={handleoffCanvasIconBorderCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing 
													label={__("Radius Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconBorderRadiusUnitsHandler}
													spacingUnits={offCanvasIconBorderRadiusUnits}
													spacingDesktop={offCanvasIconBorderRadiusDesktop}
													spacingTablet={offCanvasIconBorderRadiusTablet}
													spacingMobile={offCanvasIconBorderRadiusMobile}
													handleSpacingUnitHandler={handleoffCanvasIconBorderRadiusUnitChange}
													spacingCombineBtn={offCanvasIconBorderRadiusLink}
													spacingCombineBtnHandler={handleoffCanvasIconBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>

												<FB_SwitcherControl
													label={__("Icon Rotation", "frontis-blocks")}
													globalSwitcher={offCanvasIconRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconRotateSwitcher: value })}
												/>

												{offCanvasIconRotateSwitcher === 'normal' && (
													<FB_Range 
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={offCanvasIconRotate}
														onChangeHandler={(value) => setAttributes({ offCanvasIconRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{offCanvasIconRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Icon Rotation", "frontis-blocks")}
														rangeValue={offCanvasIconRotateHover}
														onChangeHandler={(value) => setAttributes({ offCanvasIconRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}

											</PanelBody>
										)}
										{(offCanvasIconAlign === 'image') &&(
											<PanelBody
												title={__("Image Styles", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={1}
													max={200}
													label={__("Image Width", "frontis-blocks")}
													rangeValue={offCanvasIconImageWidth}
													onChangeHandler={(value) => setAttributes({ offCanvasIconImageWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ offCanvasIconImageWidthUnits: value })}
													deviceType={deviceType}
													units={offCanvasIconImageWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Range
													min={1}
													max={200}
													label={__("Image Height", "frontis-blocks")}
													rangeValue={offCanvasIconImageHeight}
													onChangeHandler={(value) => setAttributes({ offCanvasIconImageHeight: value })}
													rangeUnitHandler={(value) => setAttributes({ offCanvasIconImageHeightUnits: value })}
													deviceType={deviceType}
													units={offCanvasIconImageHeightUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={20}
												/>

												<FB_Spacing 
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconPaddingUnitsHandler}
													spacingUnits={offCanvasIconPaddingUnits}
													spacingDesktop={offCanvasIconPaddingDesktop}
													spacingTablet={offCanvasIconPaddingTablet}
													spacingMobile={offCanvasIconPaddingMobile}
													handleSpacingUnitHandler={handleoffCanvasIconPaddingUnitChange}
													spacingCombineBtn={offCanvasIconPaddingLink}
													spacingCombineBtnHandler={handleoffCanvasIconPaddingCombineBtn}
													setAttributes={setAttributes}
												/>

												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={offCanvasIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ offCanvasIconBorder: value })}
												/>

												<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={offCanvasIconBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconBorderColorSwitcher: value })}
												/>

												{offCanvasIconBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={offCanvasIconBorderColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBorderColor: value })}
													/>
												)}

												{offCanvasIconBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={offCanvasIconBorderHoverColor}
														setGlobalColor={(value) => setAttributes({ offCanvasIconBorderHoverColor: value })}
													/>
												)}

												<FB_Spacing 
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconBorderUnitsHandler}
													spacingUnits={offCanvasIconBorderUnits}
													spacingDesktop={offCanvasIconBorderDesktop}
													spacingTablet={offCanvasIconBorderTablet}
													spacingMobile={offCanvasIconBorderMobile}
													handleSpacingUnitHandler={handleoffCanvasIconBorderUnitChange}
													spacingCombineBtn={offCanvasIconBorderLink}
													spacingCombineBtnHandler={handleoffCanvasIconBorderCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing 
													label={__("Radius Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleoffCanvasIconBorderRadiusUnitsHandler}
													spacingUnits={offCanvasIconBorderRadiusUnits}
													spacingDesktop={offCanvasIconBorderRadiusDesktop}
													spacingTablet={offCanvasIconBorderRadiusTablet}
													spacingMobile={offCanvasIconBorderRadiusMobile}
													handleSpacingUnitHandler={handleoffCanvasIconBorderRadiusUnitChange}
													spacingCombineBtn={offCanvasIconBorderRadiusLink}
													spacingCombineBtnHandler={handleoffCanvasIconBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>

												<FB_SwitcherControl
													label={__("Image Rotation", "frontis-blocks")}
													globalSwitcher={offCanvasIconImageRotateSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ offCanvasIconImageRotateSwitcher: value })}
												/>

												{offCanvasIconImageRotateSwitcher === 'normal' && ( 
													<FB_Range 
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={offCanvasIconImageRotate}
														onChangeHandler={(value) => setAttributes({ offCanvasIconImageRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}

													/>
												)}

												{offCanvasIconImageRotateSwitcher === 'hover' && (
													<FB_Range
														min={-360}
														max={360}
														label={__("Image Rotation", "frontis-blocks")}
														rangeValue={offCanvasIconImageRotateHover}
														onChangeHandler={(value) => setAttributes({ offCanvasIconImageRotateHover: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
													/>
												)}
											</PanelBody>
										)}
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Advanced", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>
													<FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={offCanvasIconZIndex}
                                                        onChangeHandler={(value) => setAttributes({ offCanvasIconZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}

                                                    />
												</PanelBody>
											</div>
										</div>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}