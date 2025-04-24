import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    ToggleControl,
    CheckboxControl
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        selectedTemplate,
        menuPosition,
        iconStyle,
        menuItems
    } = attributes;

    const deviceType = useDeviceType();

    // Fetch all pages
    const { pages } = useSelect((select) => {
        const { getEntityRecords } = select(coreStore);
        const query = { per_page: -1 };
        return {
            pages: getEntityRecords('postType', 'page', query) || []
        };
    }, []);

    // Generate unique block ID if not set
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "fb-simple-navigation-" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);

    // Function to check if a page is selected in menu
    const isPageInMenu = (pageId) => {
        return menuItems && menuItems.some(item => item.id === pageId);
    };

    // Function to toggle a page in menu
    const togglePage = (page) => {
        const pageExists = isPageInMenu(page.id);
        
        if (pageExists) {
            // Remove page
            setAttributes({ 
                menuItems: menuItems.filter(item => item.id !== page.id)
            });
        } else {
            // Add page
            setAttributes({ 
                menuItems: [
                    ...(menuItems || []), 
                    {
                        id: page.id,
                        title: page.title.rendered,
                        url: page.link,
                        type: 'page'
                    }
                ]
            });
        }
    };

    return (
        <>
            <style>
                {`
                    .page-list-control .components-base-control__field {
                        display: flex;
                        flex-direction: column;
                    }
                    .page-list-control .components-checkbox-control__input-container {
                        margin-right: 8px;
                    }
                    .page-checkbox-wrapper {
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                    }
                `}
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
                                className: "fb-tab advance",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls " + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("Menu Content", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Template", "frontis-blocks")}
                                                value={selectedTemplate}
                                                options={[
                                                    { label: __("Default", "frontis-blocks"), value: "default" },
                                                    { label: __("Minimal", "frontis-blocks"), value: "minimal" },
                                                    { label: __("Modern", "frontis-blocks"), value: "modern" },
                                                ]}
                                                onChange={(value) => setAttributes({ selectedTemplate: value })}
                                            />
                                            
                                            <div className="page-list-control">
                                                <p>{__("Select Pages to Display", "frontis-blocks")}</p>
                                                {pages.map(page => (
                                                    <div className="page-checkbox-wrapper" key={page.id}>
                                                        <CheckboxControl
                                                            label={page.title.rendered}
                                                            checked={isPageInMenu(page.id)}
                                                            onChange={() => togglePage(page)}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Layout Options", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Menu Position", "frontis-blocks")}
                                                value={menuPosition}
                                                options={[
                                                    { label: __("Horizontal", "frontis-blocks"), value: "horizontal" },
                                                    { label: __("Vertical", "frontis-blocks"), value: "vertical" },
                                                ]}
                                                onChange={(value) => setAttributes({ menuPosition: value })}
                                            />
                                            
                                            <SelectControl
                                                label={__("Icon Style", "frontis-blocks")}
                                                value={iconStyle}
                                                options={[
                                                    { label: __("None", "frontis-blocks"), value: "none" },
                                                    { label: __("Arrow", "frontis-blocks"), value: "arrow" },
                                                    { label: __("Dot", "frontis-blocks"), value: "dot" },
                                                ]}
                                                onChange={(value) => setAttributes({ iconStyle: value })}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            
                                        </PanelBody>
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