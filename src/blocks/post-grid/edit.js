// Edit.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import FB_BackgroundColor from '@Components/background-color';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { blockId,
        backgroundType, 
        globalClassicColor,
        globalGradientColor,
        customGradientSwitcher,
        customGradientInputValue,
    } = attributes;

    const blockProps = useBlockProps();

    // Determine the background color based on conditions
    const backgroundColor =
        backgroundType === 'gradient'
            ? (customGradientSwitcher && customGradientInputValue ? customGradientInputValue : globalGradientColor)
            : globalClassicColor;

    console.log(backgroundColor || 'transparent');
    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Post Grid", "frontis-blocks")} initialOpen={true}>
                    <FB_BackgroundColor
                        backgroundType={backgroundType}
                        setBackgroundType={(value) => setAttributes({ backgroundType: value })}
                        classicColor={globalClassicColor}
                        setClassicColor={(value) => setAttributes({ globalClassicColor: value })}
                        gradientColor={globalGradientColor}
                        setGradientColor={(value) => setAttributes({ globalGradientColor: value })}
                        customGradientSwitcher={customGradientSwitcher}
                        setCustomGradientSwitcher={(value) => setAttributes({ customGradientSwitcher: value })}
                        customGradientInputValue={customGradientInputValue}
                        setCustomGradientInputValue={(value) => setAttributes({ customGradientInputValue: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <style>{`
                .fb-post-grid-title {
                    background: ${backgroundColor || 'transparent'};
                }
            `}</style>

            <div {...blockProps} id={blockId}>
                <h1 className="fb-post-grid-title">Post Grid</h1>
            </div>
        </>
    );
}
