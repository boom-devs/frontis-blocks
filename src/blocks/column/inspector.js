import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
    TabPanel,
    GradientPicker,
} from '@wordpress/components';
import {
    COLUMN_HEIGHTS,
    COLUMN_VERTICAL_ALIGNMENTS,
    COLUMN_HORIZONTAL_ALIGNMENTS,
    COLUMN_OVERFLOW,
} from './constants';
import FB_Spacing from '@Components/spacing';

const Inspector = (props) => {
    const {
        attributes,
        setAttributes,
        deviceType,
        colWrap,
        nextBlockClientId,
        prevBlockClientId,
    } = props;

    const {
        cw_Range,
        colAli,
        rowOverFlow,
        classHook,
        backgroundType,
        backgroundColor,
        backgroundGradient,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        paddingUnits,
        desktopPadding,
        tabletPadding,
        mobilePadding,
        paddingLink,
        marginUnits,
        desktopMargin,
        tabletMargin,
        mobileMargin,
        marginLink,
        columnBorderUnits,
        columnDesktopBorder,
        columnTabBorder,
        columnMobileBorder,
        columnBorderLink,
    } = attributes;

    const onChangeColumnWidth = (newWidth) => {
        setAttributes({ cw_Range: newWidth });
    };

    const paddingUnitsHandler = (value) => setAttributes({ paddingUnits: value });
    const marginUnitsHandler = (value) => setAttributes({ marginUnits: value });

    const paddingUnitsChange = (value) => setAttributes({ paddingUnits: value });
    const marginUnitsChange = (value) => setAttributes({ marginUnits: value });

    const paddingLinkBtn = (value) => setAttributes({ paddingLink: value });
    const marginLinkBtn = (value) => setAttributes({ marginLink: value });


    const columnBorderUnitsHandler = (value) => setAttributes({ columnBorderUnits: { ...columnBorderUnits, [deviceType]: value } });
    const columnBorderLinkBtn = (value) => setAttributes({ columnBorderLink: value });

    return (
        <InspectorControls>
            <TabPanel
                className="frontis-column-inspector-tabs"
                activeClass="active-tab"
                tabs={[
                    {
                        name: 'general',
                        title: __('General', 'frontis-blocks'),
                        className: 'frontis-column-tab',
                    },
                    {
                        name: 'style',
                        title: __('Style', 'frontis-blocks'),
                        className: 'frontis-column-tab',
                    },
                    {
                        name: 'advanced',
                        title: __('Advanced', 'frontis-blocks'),
                        className: 'frontis-column-tab',
                    },
                ]}
            >
                {(tab) => {
                    if (tab.name === 'general') {
                        return (
                            <>
                                <PanelBody title={__('Column Settings', 'frontis-blocks')}>
                                    <RangeControl
                                        label={__('Column Width', 'frontis-blocks')}
                                        value={cw_Range}
                                        onChange={onChangeColumnWidth}
                                        min={0}
                                        max={100}
                                    />
                                    <SelectControl
                                        label={__('Vertical Alignment', 'frontis-blocks')}
                                        value={colAli}
                                        options={COLUMN_VERTICAL_ALIGNMENTS}
                                        onChange={(value) => setAttributes({ colAli: value })}
                                    />
                                    <SelectControl
                                        label={__('Overflow', 'frontis-blocks')}
                                        value={rowOverFlow}
                                        options={COLUMN_OVERFLOW}
                                        onChange={(value) => setAttributes({ rowOverFlow: value })}
                                    />
                                </PanelBody>
                            </>
                        );
                    } else if (tab.name === 'style') {
                        return (
                            <>
                                <PanelBody title={__('Background', 'frontis-blocks')}>
                                    <SelectControl
                                        label={__('Background Type', 'frontis-blocks')}
                                        value={backgroundType}
                                        options={[
                                            { label: __('Color', 'frontis-blocks'), value: 'color' },
                                            { label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
                                        ]}
                                        onChange={(value) => setAttributes({ backgroundType: value })}
                                    />
                                    {backgroundType === 'color' && (
                                        <PanelColorSettings
                                            title={__('Color Settings', 'frontis-blocks')}
                                            colorSettings={[
                                                {
                                                    value: backgroundColor,
                                                    onChange: (value) => setAttributes({ backgroundColor: value }),
                                                    label: __('Background Color', 'frontis-blocks'),
                                                },
                                            ]}
                                        />
                                    )}
                                    {backgroundType === 'gradient' && (
                                        <GradientPicker
                                            value={backgroundGradient}
                                            onChange={(newGradient) => setAttributes({ backgroundGradient: newGradient })}
                                        />
                                    )}
                                </PanelBody>
                                <PanelBody title={__('Border', 'frontis-blocks')}>
                                    <SelectControl
                                        label={__('Border Style', 'frontis-blocks')}
                                        value={borderStyle}
                                        options={[
                                            { label: __('None', 'frontis-blocks'), value: 'none' },
                                            { label: __('Solid', 'frontis-blocks'), value: 'solid' },
                                            { label: __('Dashed', 'frontis-blocks'), value: 'dashed' },
                                            { label: __('Dotted', 'frontis-blocks'), value: 'dotted' },
                                        ]}
                                        onChange={(value) => setAttributes({ borderStyle: value })}
                                    />
                                    {borderStyle !== 'none' && (
                                        <>
                                            <FB_Spacing
                                                label={__("Border Width", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={columnBorderUnitsHandler}
                                                spacingUnits={columnBorderUnits[deviceType]}
                                                spacingDesktop={columnDesktopBorder}
                                                spacingTablet={columnTabBorder}
                                                spacingMobile={columnMobileBorder}
                                                handleSpacingUnitHandler={columnBorderUnitsHandler}
                                                spacingCombineBtn={columnBorderLink}
                                                spacingCombineBtnHandler={columnBorderLinkBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <PanelColorSettings
                                                title={__('Border Color', 'frontis-blocks')}
                                                colorSettings={[
                                                    {
                                                        value: borderColor,
                                                        onChange: (value) => setAttributes({ borderColor: value }),
                                                        label: __('Border Color', 'frontis-blocks'),
                                                    },
                                                ]}
                                            />
                                        </>
                                    )}
                                    <RangeControl
                                        label={__('Border Radius', 'frontis-blocks')}
                                        value={borderRadius}
                                        onChange={(value) => setAttributes({ borderRadius: value })}
                                        min={0}
                                        max={50}
                                    />
                                </PanelBody>
                                <PanelBody title={__('Spacing', 'frontis-blocks')}>
                                    <FB_Spacing
                                        label={__("Padding", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={paddingUnitsHandler}
                                        spacingUnits={paddingUnits}
                                        spacingDesktop={desktopPadding}
                                        spacingTablet={tabletPadding}
                                        spacingMobile={mobilePadding}
                                        handleSpacingUnitHandler={paddingUnitsChange}
                                        spacingCombineBtn={paddingLink}
                                        spacingCombineBtnHandler={paddingLinkBtn}
                                        setAttributes={setAttributes}
                                    />
                                    <FB_Spacing
                                        label={__("Margin", "frontis-blocks")}
                                        deviceType={deviceType}
                                        spacingUnitsHandler={marginUnitsHandler}
                                        spacingUnits={marginUnits}
                                        spacingDesktop={desktopMargin}
                                        spacingTablet={tabletMargin}
                                        spacingMobile={mobileMargin}
                                        handleSpacingUnitHandler={marginUnitsChange}
                                        spacingCombineBtn={marginLink}
                                        spacingCombineBtnHandler={marginLinkBtn}
                                        setAttributes={setAttributes}
                                    />
                                </PanelBody>
                            </>
                        );
                    } else if (tab.name === 'advanced') {
                        return (
                            <>
                                <PanelBody title={__('Additional', 'frontis-blocks')}>
                                    <TextControl
                                        label={__('Additional CSS Class', 'frontis-blocks')}
                                        value={classHook}
                                        onChange={(value) => setAttributes({ classHook: value })}
                                    />
                                </PanelBody>
                            </>
                        );
                    }
                }}
            </TabPanel>
        </InspectorControls>
    );
};

export default Inspector;
