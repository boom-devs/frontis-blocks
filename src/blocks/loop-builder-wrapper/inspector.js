import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo, memo } from '@wordpress/element';
import { PanelBody, TabPanel, Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FB_InputControl from '@Components/input-control';
import { useDeviceType } from '@Config/displayType';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_Range from '@Components/range';
import FB_SwitcherControl from '@Components/switcher-control';
import { 
    POST_SWITCHER,
} from '@Constants/fbConstants';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockId,
        blockStyle,
        gridColumnsPerSection,
        gridRowGap,
        gridColumnGap,
        gridGapUnits,

        postSwitcher,
        listGapUnits,
        listRowGap,
        loopBuilderWrapperGlobalZIndex,
        loopBuilderWrapperID,
        loopBuilderWrapperClass,
        loopBuilderWrapperCustomCSS,
    } = attributes;

    const deviceType = useDeviceType();


    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({ blockId: `fb-loop-builder-wrapper-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-loop-builder-wrapper-main-container.grid-layout {
            display: grid;
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, 1fr); 
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop};  
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop}; 
        }

        .${blockId}.fb-loop-builder-wrapper-main-container.list-layout {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: ${listRowGap?.Desktop}${listGapUnits?.Desktop}; 
        }

        @media only screen and (max-width: 1024px) {
            .${blockId}.fb-loop-builder-wrapper-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, 1fr) !important; 
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};  
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet}; 
            }
            .${blockId}.fb-loop-builder-wrapper-main-container.list-layout {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: ${listRowGap?.Tablet}${listGapUnits?.Tablet}; 
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-loop-builder-wrapper-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, 1fr) !important; 
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile};  
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile}; 
            }
            .${blockId}.fb-loop-builder-wrapper-main-container.list-layout {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: ${listRowGap?.Mobile}${listGapUnits?.Mobile};  
            }
        }
    `, [
        blockId,
        blockStyle,
        gridColumnsPerSection,
        gridRowGap,
        gridColumnGap,
        gridGapUnits,
        
        listGapUnits,
        listRowGap,
        loopBuilderWrapperGlobalZIndex,
        loopBuilderWrapperClass,
        loopBuilderWrapperCustomCSS,
    ]);

    const customCss = getCustomCss(loopBuilderWrapperCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss] );

    const editorStyle = `${allBlockStyle}${customCss}`.replace(/\s+/g, ' ').trim();

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
            <PanelBody title={__("Style", "frontis-blocks")} initialOpen>
                {/* Add style settings here */}
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
                    rangeValue={loopBuilderWrapperGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ loopBuilderWrapperGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={loopBuilderWrapperClass}
                    onChangeValue={(value) => setAttributes({ loopBuilderWrapperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor  
                    value={loopBuilderWrapperCustomCSS} 
                    onChangeValue={(value) => setAttributes({ loopBuilderWrapperCustomCSS: value })}
                />

            </PanelBody>
		</>
	);

    return (

        <>
            <style>
                {editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);