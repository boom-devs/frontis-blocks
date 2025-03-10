import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
} from '@wordpress/components';

/**
 * Internal depencencies
 */

import { useEffect, useMemo } from "@wordpress/element"; 		
import {useDeviceType} from "@Config/displayType";
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';


import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
	const {
		blockId,
		blockStyle,
		testImageUrl,
		// testImageAlt,
		// testImageID,
		testImagePosition,
		testImageAttachment,
		testImageRepeat,
		testImageSize,
		overlayType,
    } = attributes;
    
	const deviceType= useDeviceType();
	
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-test-blocks-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


	const testBlocksStyle = useMemo(
		() => `
		  .fb-test-blocks-wrapper {
			background-image: url(${testImageUrl.Desktop});
			background-position: ${
			  testImagePosition && testImagePosition.Desktop 
				? `${testImagePosition.Desktop.x * 100}% ${testImagePosition.Desktop.y * 100}%` 
				: "50% 50%"
			};
			${testImageAttachment.Desktop && `background-attachment: ${testImageAttachment.Desktop};`}
			${testImageRepeat.Desktop && `background-repeat: ${testImageRepeat.Desktop};`}
			${testImageSize.Desktop && `background-size: ${testImageSize.Desktop};`}
		  }
	  
		  @media (max-width: 1024px) {
			.fb-test-blocks-wrapper {
				background-image: url(${testImageUrl.Tablet});
			background-position: ${
				testImagePosition && testImagePosition.Tablet 
				  ? `${testImagePosition.Tablet.x * 100}% ${testImagePosition.Tablet.y * 100}%` 
				  : "50% 50%"
			  };
			${testImageAttachment.Tablet && `background-attachment: ${testImageAttachment.Tablet};`}
			${testImageRepeat.Tablet && `background-repeat: ${testImageRepeat.Tablet};`}
			${testImageSize.Tablet && `background-size: ${testImageSize.Tablet};`}
			}
		  }
	  
		  @media (max-width: 768px) {
			.fb-test-blocks-wrapper {
			background-image: url(${testImageUrl.Mobile});
			  background-position: ${
				testImagePosition && testImagePosition.Mobile 
				  ? `${testImagePosition.Mobile.x * 100}% ${testImagePosition.Mobile.y * 100}%` 
				  : "50% 50%"
			  };
			  ${testImageAttachment.Mobile && `background-attachment: ${testImageAttachment.Mobile};`}
			  ${testImageRepeat.Mobile && `background-repeat: ${testImageRepeat.Mobile};`}
			  ${testImageSize.Mobile && `background-size: ${testImageSize.Mobile};`}
		  }
		`,
		[testImageUrl, testImageSize, testImagePosition, testImageRepeat, testImageAttachment]
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${testBlocksStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [testBlocksStyle]);

	const editorStyle = `${testBlocksStyle}`.replace(/\s+/g, " ").trim();

	return (
		<>

			<style>
				{
					`${editorStyle}`
				}
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
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										<FB_ResponsiveBackgroundImageControl
											deviceType={deviceType}
											globalBackgroundImageUrl={testImageUrl}
											setGlobalBackgroundImageUrl={(value) => setAttributes({ testImageUrl: value })}
											globalBackgroundImagePosition={testImagePosition}
											setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ testImagePosition: newPosition })}
											globalBackgroundImageAttachment={testImageAttachment}
											setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ testImageAttachment: newAttachment })}
											globalBackgroundImageRepeat={testImageRepeat}
											setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ testImageRepeat: newRepeat })}
											globalBackgroundImageSize={testImageSize}
											setGlobalBackgroundImageSize={(newSize) => setAttributes({ testImageSize: newSize })}
											overlayType={overlayType}
											setOverlayType={(newOverlayType) => setAttributes({ overlayType: newOverlayType })}
											setAttributes={setAttributes}
										/>
                                    </>
                                )}

								{tab.name === "styles" && (
									<>
										Styles
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
										Advanced
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
