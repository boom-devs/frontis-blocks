// Edit.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BackgroundColor from '@Components/background-color';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { blockId,
        testBackgroundType, 
        testGlobalClassicColor,
        testGlobalGradientColor,
        testCustomGradientSwitcher,
        testCustomGradientInputValue,
        testBackgroundColorStyle,
        testBackgroundImageUrl,
        testBackgroundImageAlt,
        testBackgroundImageID,
        testBackgroundImagePosition,
        testBackgroundImageAttachment,
        testBackgroundImageRepeat,
        testBackgroundImageSize
    } = attributes;

    const blockProps = useBlockProps();


    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Post Grid", "frontis-blocks")} initialOpen={true}>
                    <FB_BackgroundColor
                        backgroundType={testBackgroundType}
                        setBackgroundType={(value) => setAttributes({ testBackgroundType: value })}
                        classicColor={testGlobalClassicColor}
                        setClassicColor={(value) => setAttributes({ testGlobalClassicColor: value })}
                        gradientColor={testGlobalGradientColor}
                        setGradientColor={(value) => setAttributes({ testGlobalGradientColor: value })}
                        customGradientSwitcher={testCustomGradientSwitcher}
                        setCustomGradientSwitcher={(value) => setAttributes({ testCustomGradientSwitcher: value })}
                        customGradientInputValue={testCustomGradientInputValue}
                        setCustomGradientInputValue={(value) => setAttributes({ testCustomGradientInputValue: value })}
                        backgroundColorStyle={(value) => setAttributes({ testBackgroundColorStyle: value })}
                        backgroundImageUrl={testBackgroundImageUrl}
                        setBackgroundImageUrl={(value) => setAttributes({ testBackgroundImageUrl: value })}
                        backgroundImageAlt={testBackgroundImageAlt}
                        setBackgroundImageAlt={(value) => setAttributes({ testBackgroundImageAlt: value })}
                        backgroundImageID={testBackgroundImageID}
                        setBackgroundImageID={(value) => setAttributes({ testBackgroundImageID: value })}
                        backgroundImagePosition={testBackgroundImagePosition}
                        setBackgroundImagePosition={(value) => setAttributes({ testBackgroundImagePosition: value })}
                        backgroundImageAttachment={testBackgroundImageAttachment}
                        setBackgroundImageAttachment={(value) => setAttributes({ testBackgroundImageAttachment: value })}
                        backgroundImageRepeat={testBackgroundImageRepeat}
                        setBackgroundImageRepeat={(value) => setAttributes({ testBackgroundImageRepeat: value })}
                        backgroundImageSize={testBackgroundImageSize}
                        setBackgroundImageSize={(value) => setAttributes({ testBackgroundImageSize: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <style>{`
                .fb-post-grid-title {
                    ${testBackgroundImageUrl && testBackgroundImageUrl !== 'null' ? `
                        ${testBackgroundImageUrl ? `background-image: url(${testBackgroundImageUrl});` : ''}
                        ${testBackgroundImagePosition ? `background-position: ${testBackgroundImagePosition};` : ''}
                        ${testBackgroundImageAttachment ? `background-attachment: ${testBackgroundImageAttachment};` : ''}
                        ${testBackgroundImageRepeat ? `background-repeat: ${testBackgroundImageRepeat};` : ''}
                        ${testBackgroundImageSize ? `background-size: ${testBackgroundImageSize};` : ''}
                    ` : `
                        background: ${testBackgroundColorStyle};
                    `}
                }
            `}</style>

            <div {...blockProps} id={blockId}>
                <h1 className="fb-post-grid-title">Post Grid</h1>
            </div>
        </>
    );
}
