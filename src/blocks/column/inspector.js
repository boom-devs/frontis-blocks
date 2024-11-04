import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
    TabPanel,
} from '@wordpress/components';
import {
    COLUMN_HEIGHTS,
    COLUMN_VERTICAL_ALIGNMENTS,
    COLUMN_HORIZONTAL_ALIGNMENTS,
    COLUMN_OVERFLOW,
} from './constants';

const Inspector = (props) => {
    const {
        attributes,
        setAttributes,
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
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
    } = attributes;

    const onChangeColumnWidth = (newWidth) => {
        setAttributes({ cw_Range: newWidth });
    };

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
                                        <TextControl
                                            label={__('Gradient', 'frontis-blocks')}
                                            value={backgroundGradient}
                                            onChange={(value) => setAttributes({ backgroundGradient: value })}
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
                                            <RangeControl
                                                label={__('Border Width', 'frontis-blocks')}
                                                value={borderWidth}
                                                onChange={(value) => setAttributes({ borderWidth: value })}
                                                min={1}
                                                max={10}
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
                                    <RangeControl
                                        label={__('Padding Top', 'frontis-blocks')}
                                        value={paddingTop}
                                        onChange={(value) => setAttributes({ paddingTop: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Padding Right', 'frontis-blocks')}
                                        value={paddingRight}
                                        onChange={(value) => setAttributes({ paddingRight: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Padding Bottom', 'frontis-blocks')}
                                        value={paddingBottom}
                                        onChange={(value) => setAttributes({ paddingBottom: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Padding Left', 'frontis-blocks')}
                                        value={paddingLeft}
                                        onChange={(value) => setAttributes({ paddingLeft: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Margin Top', 'frontis-blocks')}
                                        value={marginTop}
                                        onChange={(value) => setAttributes({ marginTop: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Margin Right', 'frontis-blocks')}
                                        value={marginRight}
                                        onChange={(value) => setAttributes({ marginRight: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Margin Bottom', 'frontis-blocks')}
                                        value={marginBottom}
                                        onChange={(value) => setAttributes({ marginBottom: value })}
                                        min={0}
                                        max={100}
                                    />
                                    <RangeControl
                                        label={__('Margin Left', 'frontis-blocks')}
                                        value={marginLeft}
                                        onChange={(value) => setAttributes({ marginLeft: value })}
                                        min={0}
                                        max={100}
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