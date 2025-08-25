import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import FB_Range from '@Components/range';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        layoutType,
        iconSpacing,
        iconSpacingUnits,
        iconFontSize,
        iconFontSizeUnits,
        iconAlignment
    } = attributes;

    const deviceType = useDeviceType();
    
    // Generate unique block ID

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-social-share-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const fbSocialShareStyle = useMemo(
		() => `
        .${blockID} .social-share-parent-container{
            ${iconAlignment.Desktop ? `justify-content: ${iconAlignment.Desktop};` : ''}
            ${iconSpacing.Desktop ? `gap: calc(${iconSpacing.Desktop}${iconSpacingUnits.Desktop} + 20px);` : ''}
        }
        .${blockID} .social-share-parent-container .block-editor-block-list__layout {
            ${iconSpacing.Desktop ? `gap: ${iconSpacing.Desktop}${iconSpacingUnits.Desktop};` : ''}
        }
        .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
            ${iconFontSize.Desktop ? `width: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
            ${iconFontSize.Desktop ? `height: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
        }
        @media all and (max-width: 1024px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Tablet ? `justify-content: ${iconAlignment.Tablet};` : ''}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Tablet ? `gap: ${iconSpacing.Tablet}${iconSpacingUnits.Tablet};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Tablet ? `width: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
                ${iconFontSize.Tablet ? `height: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
            }
        }
        @media all and (max-width: 767px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Mobile ? `justify-content: ${iconAlignment.Mobile};` : ''}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Mobile ? `gap: ${iconSpacing.Mobile}${iconSpacingUnits.Mobile};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Mobile ? `width: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
                ${iconFontSize.Mobile ? `height: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
            }
        }
        `,
		[
            iconSpacing,
            iconSpacingUnits,
            iconFontSize,
            iconFontSizeUnits,
            iconAlignment
        ],
	);
    useEffect(() => {
		setAttributes({
			blockStyle: `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbSocialShareStyle]);

	const editorStyle = `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim();

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
                                        <PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Layout Type")}
                                                value={layoutType}
                                                options={[
                                                    { label: 'Horizontal', value: 'horizontal' },
                                                    { label: 'Vertical', value: 'vertical' },
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
                                )}
                                {tab.name === "styles" && (
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
                                )}
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
                                            {/* Add advanced settings here if needed */}
                                        </PanelBody>
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