
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef } from "@wordpress/element";
import {
    PanelColorSettings
} from "@wordpress/block-editor";

const ColorPalletWrapper = (props) => {
    const { colorPanelArray, customColors, setCustomColor, setCustomColors } = props

    const deleteItem = (index) => {
        const colors = [...customColors]
        colors.splice(index, 1);
        setCustomColors([...colors])
    }

    useEffect(() => {
        if (customColors.length > 0) {
            //Add delete button and delete action for custom colors
            const colorPanel = document.querySelector('.fb-custom-color-panel');
            setTimeout(() => {
                const items = colorPanel && colorPanel.querySelectorAll('.components-tools-panel-item');
                if (items) {
                    items.forEach((item, index) => {
                        const newButton = document.createElement('button');
                        newButton.className = 'fb-delete-custom-color';
                        const deleteIcon = document.createElement('span');
                        deleteIcon.className = 'dashicons dashicons-trash';
                        newButton.appendChild(deleteIcon);

                        deleteIcon.addEventListener('click', function () {
                            deleteItem(index)
                        });

                        const existingButton = item.querySelector('button');
                        item.insertBefore(newButton, existingButton.nextSibling);
                    })
                }
            }, 100)
        }
    }, [customColors])

    return (
        <>
            <PanelColorSettings
                title={__(
                    "Custom Colors",
                    "frontis-blocks"
                )}
                className={"fb-color-panel fb-custom-color-panel"}
                initialOpen={true}
                disableAlpha={true}
                colorSettings={colorPanelArray(customColors, setCustomColor)}
            />
        </>
    )
}
export default ColorPalletWrapper;
