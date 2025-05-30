
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef } from "@wordpress/element";
import { Panel, Button, Modal, TextControl } from '@wordpress/components';
import {
    PanelColorSettings
} from "@wordpress/block-editor";

const ColorPalletWrapper = (props) => {
    const { colorPanelArray, customColors, setCustomColor, setCustomColors, setCurrentState, addCustomColor, colorModalOpen, setColorModalOpen, colorName, setColorName } = props;
    const [afterDeletedCustomColors, setAfterDeletedColors] = useState(customColors);

    const deleteItem = (index) => {
        const colors = [...afterDeletedCustomColors]
        afterDeletedCustomColors.splice(index, 1);
        setAfterDeletedColors([...afterDeletedCustomColors]);
        setCustomColors(afterDeletedCustomColors);
    }

    useEffect(() => {
        //Add delete button and delete action for custom colors
        const colorPanel = document.querySelector('.fb-custom-color-panel');
        setTimeout(() => {
            const items = colorPanel && colorPanel.querySelectorAll('.components-tools-panel-item');
            if (items) {
                items.forEach((item, index) => {
                    const newButton = document.createElement('button');
                    newButton.className = 'fb-delete-custom-color';
                    newButton.setAttribute('type', 'button');
                    newButton.setAttribute('aria-label', 'Delete');

                    newButton.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M13 4.16675L12.5869 10.8501C12.4813 12.5577 12.4285 13.4115 12.0005 14.0253C11.7889 14.3288 11.5165 14.5849 11.2005 14.7774C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7767C4.46987 14.5839 4.19733 14.3273 3.98579 14.0233C3.55792 13.4085 3.5063 12.5535 3.40307 10.8435L3 4.16675" stroke="#E43242" stroke-linecap="round"/>
                            <path d="M2 4.16659H14M10.7038 4.16659L10.2487 3.22774C9.9464 2.60409 9.7952 2.29227 9.53447 2.09779C9.47667 2.05465 9.4154 2.01628 9.35133 1.98305C9.0626 1.83325 8.71607 1.83325 8.023 1.83325C7.31253 1.83325 6.95733 1.83325 6.66379 1.98933C6.59873 2.02393 6.53665 2.06385 6.47819 2.1087C6.21443 2.31105 6.06709 2.63429 5.77241 3.28076L5.36861 4.16659" stroke="#E43242" stroke-linecap="round"/>
                            <path d="M6.3335 11.5V7.5" stroke="#E43242" stroke-linecap="round"/>
                            <path d="M9.6665 11.5V7.5" stroke="#E43242" stroke-linecap="round"/>
                            </svg>
                        `;

                    newButton.addEventListener('click', function () {
                        deleteItem(index);
                    });

                    const existingButton = item.querySelector('button');
                    item.insertBefore(newButton, existingButton.nextSibling);
                });
            }

        }, 100)
    }, [customColors]);

    return (
        <>
            <Panel>
                <PanelColorSettings
                    title={__(
                        "Custom Colors",
                        "frontis-blocks"
                    )}
                    className={"fb-color-panel fb-custom-color-panel"}
                    initialOpen={true}
                    disableAlpha={true}
                    colorSettings={colorPanelArray(customColors, setCustomColor)}
                >
                    {colorModalOpen && (
                        <Modal
                            title={__("Add Color name", "frontis-blocks")}
                            onRequestClose={() => setColorModalOpen(false)}
                        >
                            <TextControl
                                __nextHasNoMarginBottom
                                __next40pxDefaultSize
                                label={__("Color Name", "frontis-blocks")}
                                value={colorName}
                                onChange={setColorName}
                            />
                            <Button
                                className="fb-custom-color-btn"
                                onClick={() => setColorModalOpen(false)}
                            >
                                {__("Save", "frontis-blocks")}
                            </Button>
                        </Modal>
                    )}
                    <div className="add-custom-color">
                        <Button
                            className="add-custom-color-btn"
                            onClick={addCustomColor}
                        >
                            {/* {__("Add Custom Color", "frontis-blocks")}{" "} */}
                            <span>
                                <svg
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.5 0.75V13.25M13.75 7L1.25 7"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </Button>
                    </div>

                </PanelColorSettings>
            </Panel>
        </>
    )
}
export default ColorPalletWrapper;
