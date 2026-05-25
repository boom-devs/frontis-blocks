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



    } = attributes;

    const deviceType = useDeviceType();



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

                <FB_Range
                    min={0}
                    max={100}
                    label={__("Initial Offset (%)", "frontis-blocks")}
                    rangeValue={comparisonInitialOffset}
                    onChangeHandler={(value) => setAttributes({ comparisonInitialOffset: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
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

        </>
    );

    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>

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