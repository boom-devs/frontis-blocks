// Edit.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BackgroundColor from '@Components/background-color';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { blockId,
        testBgColorSwitcher,

        testBackgroundType, 
        testClassicColor, 
        testGradientColor,
        testCustomGradientSwitcher,
        testCustomGradientInputValue,
        testBackgroundImageUrl,
        testBackgroundImageAlt,
        testBackgroundImageID,
        testBackgroundImagePosition,
        testBackgroundImageAttachment,
        testBackgroundImageRepeat,
        testBackgroundImageSize,

        hoverBackgroundType,
        hoverClassicColor, 
        hoverGradientColor,
        hoverCustomGradientSwitcher,
        hoverCustomGradientInputValue,
        hoverBackgroundImageUrl,
        hoverBackgroundImageAlt,
        hoverBackgroundImageID,
        hoverBackgroundImagePosition,
        hoverBackgroundImageAttachment,
        hoverBackgroundImageRepeat,
        hoverBackgroundImageSize,

    } = attributes;

    const blockProps = useBlockProps();


    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Background Color", "frontis-blocks")} initialOpen={true}>
                    <FB_BackgroundColor
                        bgColorSwitcher={testBgColorSwitcher}
                        setBgColorSwitcher={(value) => setAttributes({ testBgColorSwitcher: value })}
                        
                        normalBackgroundType={testBackgroundType}
                        setNormalBackgroundType={(value) => setAttributes({ testBackgroundType: value })}
                        normalClassicColor={testClassicColor}
                        setNormalClassicColor={(value) => setAttributes({ testClassicColor: value })}
                        normalGradientColor={testGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ testGradientColor: value })}
                        normalCustomGradientSwitcher={testCustomGradientSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ testCustomGradientSwitcher: value })}
                        normalCustomGradientInputValue={testCustomGradientInputValue}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ testCustomGradientInputValue: value })}
                        normalBackgroundImageUrl={testBackgroundImageUrl}
                        setNormalBackgroundImageUrl={(value) => setAttributes({ testBackgroundImageUrl: value })}
                        normalBackgroundImageAlt={testBackgroundImageAlt}
                        setNormalBackgroundImageAlt={(value) => setAttributes({ testBackgroundImageAlt: value })}
                        normalBackgroundImageID={testBackgroundImageID}
                        setNormalBackgroundImageID={(value) => setAttributes({ testBackgroundImageID: value })}
                        normalBackgroundImagePosition={testBackgroundImagePosition}
                        setNormalBackgroundImagePosition={(value) => setAttributes({ testBackgroundImagePosition: value })}
                        normalBackgroundImageAttachment={testBackgroundImageAttachment}
                        setNormalBackgroundImageAttachment={(value) => setAttributes({ testBackgroundImageAttachment: value })}
                        normalBackgroundImageRepeat={testBackgroundImageRepeat}
                        setNormalBackgroundImageRepeat={(value) => setAttributes({ testBackgroundImageRepeat: value })}
                        normalBackgroundImageSize={testBackgroundImageSize}
                        setNormalBackgroundImageSize={(value) => setAttributes({ testBackgroundImageSize: value })}
                        
                        hoverBackgroundType={hoverBackgroundType}
                        setHoverBackgroundType={(value) => setAttributes({ hoverBackgroundType: value })}
                        hoverClassicColor={hoverClassicColor}
                        setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value })}
                        hoverGradientColor={hoverGradientColor} 
                        setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value })}
                        hoverCustomGradientSwitcher={hoverCustomGradientSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ hoverCustomGradientSwitcher: value })}
                        hoverCustomGradientInputValue={hoverCustomGradientInputValue}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ hoverCustomGradientInputValue: value })}
                        hoverBackgroundImageUrl={hoverBackgroundImageUrl}
                        setHoverBackgroundImageUrl={(value) => setAttributes({ hoverBackgroundImageUrl: value })}
                        hoverBackgroundImageAlt={hoverBackgroundImageAlt}
                        setHoverBackgroundImageAlt={(value) => setAttributes({ hoverBackgroundImageAlt: value })}
                        hoverBackgroundImageID={hoverBackgroundImageID}
                        setHoverBackgroundImageID={(value) => setAttributes({ hoverBackgroundImageID: value })}
                        hoverBackgroundImagePosition={hoverBackgroundImagePosition}
                        setHoverBackgroundImagePosition={(value) => setAttributes({ hoverBackgroundImagePosition: value })}
                        hoverBackgroundImageAttachment={hoverBackgroundImageAttachment}
                        setHoverBackgroundImageAttachment={(value) => setAttributes({ hoverBackgroundImageAttachment: value })}
                        hoverBackgroundImageRepeat={hoverBackgroundImageRepeat}
                        setHoverBackgroundImageRepeat={(value) => setAttributes({ hoverBackgroundImageRepeat: value })}
                        hoverBackgroundImageSize={hoverBackgroundImageSize}
                        setHoverBackgroundImageSize={(value) => setAttributes({ hoverBackgroundImageSize: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <style>{`
                .fb-post-grid-title {
                    ${testBackgroundType === 'gradient' ? `
                        background: ${testCustomGradientSwitcher && testCustomGradientInputValue ? testCustomGradientInputValue : testGradientColor};
                    ` : testBackgroundImageUrl && testBackgroundImageUrl !== 'null' ? `
                        ${testBackgroundImageUrl ? `background-image: url(${testBackgroundImageUrl});` : ''}
                        ${testBackgroundImagePosition ? `background-position: ${testBackgroundImagePosition};` : ''}
                        ${testBackgroundImageAttachment ? `background-attachment: ${testBackgroundImageAttachment};` : ''}
                        ${testBackgroundImageRepeat ? `background-repeat: ${testBackgroundImageRepeat};` : ''}
                        ${testBackgroundImageSize ? `background-size: ${testBackgroundImageSize};` : ''}
                    ` : `
                        background: ${testClassicColor};
                    `}
                }
                .fb-post-grid-title:hover {
                    ${hoverBackgroundType === 'gradient' ? `
                        background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor};
                    ` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== 'null' ? `
                        ${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : ''}
                        ${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : ''}
                        ${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : ''}
                        ${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : ''}
                        ${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : ''}
                    ` : `
                        background: ${hoverClassicColor};
                    `}
                }
            `}</style>

            <div {...blockProps} id={blockId}>
                <h1 className="fb-post-grid-title">Post Grid</h1>
            </div>
        </>
    );
}
