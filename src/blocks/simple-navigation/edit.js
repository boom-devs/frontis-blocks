import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    TextControl,
    ToggleControl,
    SelectControl,
    Placeholder
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        menuItems,
        customItems,
        menuPosition,
        iconStyle
    } = attributes;

    // Fetch all pages from WordPress
    const { pages, isLoading } = useSelect((select) => {
        const { getEntityRecords } = select(coreStore);
        
        const query = { per_page: -1 };
        const pagesData = getEntityRecords('postType', 'page', query);

        return {
            pages: pagesData,
            isLoading: pagesData === null
        };
    }, []);

    // Initialize menu items with pages on first load
    useEffect(() => {
        if (pages && pages.length > 0 && (!menuItems || menuItems.length === 0)) {
            const initialPages = pages.map(page => ({
                id: page.id,
                title: page.title.rendered,
                url: page.link,
                type: 'page'
            }));
            
            setAttributes({ menuItems: initialPages });
        }
    }, [pages, menuItems, setAttributes]);

    // Generate unique block ID if not set
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "fb-simple-navigation-" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);

    // Function to add a new custom item
    const addCustomItem = () => {
        const newCustomItems = [...(customItems || []), {
            id: 'custom-' + Date.now(),
            title: 'New Link',
            url: '#',
            type: 'custom'
        }];
        
        setAttributes({ 
            customItems: newCustomItems,
            menuItems: [...(menuItems || []), ...newCustomItems.slice(-1)]
        });
    };

    // Function to update custom item
    const updateCustomItem = (index, field, value) => {
        const updatedCustomItems = [...customItems];
        updatedCustomItems[index] = {
            ...updatedCustomItems[index],
            [field]: value
        };
        
        // Also update in menuItems
        const menuIndex = menuItems.findIndex(item => item.id === updatedCustomItems[index].id);
        if (menuIndex !== -1) {
            const updatedMenuItems = [...menuItems];
            updatedMenuItems[menuIndex] = {
                ...updatedMenuItems[menuIndex],
                [field]: value
            };
            setAttributes({ 
                customItems: updatedCustomItems,
                menuItems: updatedMenuItems
            });
        } else {
            setAttributes({ customItems: updatedCustomItems });
        }
    };

    // Function to remove an item from the menu
    const removeMenuItem = (id) => {
        const updatedMenuItems = menuItems.filter(item => item.id !== id);
        
        // Also remove from customItems if it's there
        const updatedCustomItems = customItems.filter(item => item.id !== id);
        
        setAttributes({ 
            menuItems: updatedMenuItems,
            customItems: updatedCustomItems
        });
    };

    // Function to toggle a page in menu
    const togglePage = (page) => {
        const pageExists = menuItems.some(item => item.id === page.id);
        
        if (pageExists) {
            // Remove page
            setAttributes({ 
                menuItems: menuItems.filter(item => item.id !== page.id)
            });
        } else {
            // Add page
            setAttributes({ 
                menuItems: [
                    ...menuItems, 
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

    const blockProps = useBlockProps({
        className: `fb-simple-navigation-block ${menuPosition}-layout`,
    });

    return (
        <div {...blockProps}>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            
            <div className="fb-simple-navigation-container">
                {isLoading ? (
                    <Placeholder label={__('Loading pages...', 'frontis-blocks')} />
                ) : (
                    <>
                        <div className="fb-navigation-preview">
                            <nav className={`simple-nav ${menuPosition}-position`}>
                                <ul className="menu-items">
                                    {menuItems && menuItems.map((item) => (
                                        <li key={item.id} className="menu-item">
                                            <span>{item.title}</span>
                                            <Button 
                                                isSmall
                                                isDestructive
                                                onClick={() => removeMenuItem(item.id)}
                                                className="remove-item-btn"
                                            >
                                                {__('Remove', 'frontis-blocks')}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        
                        <div className="fb-navigation-custom-items">
                            <h3>{__('Custom Links', 'frontis-blocks')}</h3>
                            {customItems && customItems.map((item, index) => (
                                <div key={item.id} className="custom-item-edit">
                                    <TextControl
                                        label={__('Title', 'frontis-blocks')}
                                        value={item.title}
                                        onChange={(value) => updateCustomItem(index, 'title', value)}
                                    />
                                    <TextControl
                                        label={__('URL', 'frontis-blocks')}
                                        value={item.url}
                                        onChange={(value) => updateCustomItem(index, 'url', value)}
                                    />
                                </div>
                            ))}
                            <Button 
                                isPrimary
                                onClick={addCustomItem}
                                className="add-custom-item-btn"
                            >
                                {__('Add Custom Link', 'frontis-blocks')}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}