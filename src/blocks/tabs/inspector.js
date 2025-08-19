import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    Dashicon,
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
} from '@wordpress/components';
/**
 * Internal depencencies
 */
import { 
    BORDER_STYLES,
    BACKGROUND_TYPES,
} from '@Constants/fbConstants';

import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import {useDeviceType} from "@Config/displayType";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_InputControl from '@Components/input-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import SortableItem from './sortableItem';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId}) {
    const { 
        blockId,
        
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-tabs-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();



    // const [tabsItemList, setTabsItemList] = useState(tabsItems);    

    // const handleDragEnd = (event) => {
    //     const { active, over } = event;
    //     if (active && over && active.id !== over.id) {
    //         const oldIndex = tabsItemList.findIndex(item => item.id === active.id);
    //         const newIndex = tabsItemList.findIndex(item => item.id === over.id);
    //         const updatedItems = arrayMove(tabsItemList, oldIndex, newIndex);
    //         setAttributes({ tabsItems: updatedItems });
    //         setTabsItemList(updatedItems);
    //     }
    // };

    // const handleAddItem = () => {
    //     const newItem = {
    //         id: `item-${tabsItemList.length + 1}`, 
    //         title: `Tab ${tabsItemList.length + 1}`, 
    //     };
    //     setAttributes({ tabsItems: [...tabsItems, newItem] });
    //     setTabsItemList([...tabsItemList, newItem]);
    // };

    // const handleChangeItem = (id, key, value) => {
    //     const updatedItems = tabsItemList.map(item => {
    //         if (item.id === id) {
    //             return {
    //                 ...item,
    //                 [key]: value,
    //             };
    //             return { ...item, [key]: value };
    //         }
    //         return item;
    //     });
        
    //     setTabsItemList(updatedItems);
    //     setAttributes({ tabsItems: updatedItems });
    // };

    // const handleDeleteItem = (id) => {
    //     const updatedItems = tabsItemList.filter(item => item.id !== id);
    //     setAttributes({ tabsItems: updatedItems });
    //     setTabsItemList(updatedItems);

    // };

    // const handleDuplicateItem = (id) => {
    //     const itemToDuplicate = tabsItemList.find(item => item.id === id);
    //     if (itemToDuplicate) {
    //         const newItem = { ...itemToDuplicate, id: `item-${tabsItemList.length + 1}` };
    //         setAttributes({tabsItems: [...tabsItems, newItem] });
    //         setTabsItemList([...tabsItemList, newItem]);
    //     }
    // };


    // //Sync TabsItemList with attributes.tabsItems
    // useEffect(() => {
    //     setAttributes({ tabsItems: tabsItemList });
    // }, [tabsItemList, setAttributes]); 

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody 
                title={__("General Settings", "frontis-blocks")} 
                initialOpen={true}
            >
                General

            </PanelBody>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody 
                title={__("Style", "frontis-blocks")} 
                initialOpen={true}
            >
                style controls
            </PanelBody>
        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
            advanced controls
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
