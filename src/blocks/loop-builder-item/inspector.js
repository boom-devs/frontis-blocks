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
        loopBuilderItemGlobalZIndex,
        loopBuilderItemClass,
        loopBuilderItemCustomCSS,
    } = attributes;

    const deviceType = useDeviceType();


    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({ blockId: `fb-loop-builder-item-${clientId.slice(0, 8)}` });
        }
    }, [clientId]);

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-loop-builder-item-main-container {
            margin-top: 0;
            margin-bottom: 0;
            max-width: 100%;
            padding: 0;
            list-style: none;
            box-sizing: border-box;
            width: 100%;
        }

        .${blockId}.fb-loop-builder-item-main-container > .wp-block-post .alignright,
        .${blockId}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        .${blockId}.fb-loop-builder-item-main-container > .wp-block-post .alignleft,
        .${blockId}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        .${blockId}.fb-loop-builder-item-main-container > .wp-block-post .aligncenter,
        .${blockId}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .aligncenter {
            margin-inline-start: auto;
            margin-inline-end: auto;
        }

        .${blockId}.fb-loop-builder-item-main-container.grid-layout {
            display: grid;
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, minmax(0, 1fr)); 
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop};  
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop};
            overflow: hidden;
        }

        .${blockId}.fb-loop-builder-item-main-container.list-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: ${listRowGap?.Desktop}${listGapUnits?.Desktop}; 
        }

        .${blockId}.fb-loop-builder-item-main-container > .wp-block-post,
        .${blockId}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container {
            min-width: 0;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-main-wrapper,
        .${blockId}.fb-loop-builder-item-main-container .fb-parent-wrapper,
        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-wrapper,
        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image,
        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-inner,
        .${blockId}.fb-loop-builder-item-main-container .wp-block-post-featured-image {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-inner {
            display: block;
        }

        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-inner img,
        .${blockId}.fb-loop-builder-item-main-container .wp-block-post-featured-image img,
        .${blockId}.fb-loop-builder-item-main-container .fb-advanced-image-main-wrapper img {
            width: 100%;
            max-width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            box-sizing: border-box;
        }

        @media only screen and (max-width: 1024px) {
            .${blockId}.fb-loop-builder-item-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, minmax(0, 1fr)) !important; 
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};  
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet}; 
            }

            .${blockId}.fb-loop-builder-item-main-container.list-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: ${listRowGap?.Tablet}${listGapUnits?.Tablet}; 
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-loop-builder-item-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, minmax(0, 1fr)) !important; 
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile};  
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile}; 
            }

            .${blockId}.fb-loop-builder-item-main-container.list-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
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
        loopBuilderItemGlobalZIndex,
        loopBuilderItemClass,
        loopBuilderItemCustomCSS,
    ]);

    const customCss = getCustomCss(loopBuilderItemCustomCSS, `.${blockId}`);

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