/**
 * WordPress dependencies
 */
import { useState, useEffect } from "@wordpress/element";
import { select, dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { __ } from "@wordpress/i18n";
import { Button, Modal } from "@wordpress/components";
import { toast } from "react-toastify";
import TemplateHeader from "./template-header";
import TemplateSidebar from "./template-sidebar";
import TemplateContent from "./template-content";
import LibraryContent from "./library-content";
import data from "./data.json";

const PatternLibraryButton = () => {
    const [showPatternButton, setShowPatternButton] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
        console.log("isVisible:", !isVisible);
    };

    const importDemo = () => {
        jQuery.ajax({
            url: frontisBlocksAdmin.ajaxUrl,
            type: 'POST',
            data: {
                action: 'fb_import_demo_data',
                nonce: frontisBlocksAdmin.nonce,
            },
            success: function (response) {
                const { getSelectedBlockClientId, getBlockOrder } = select('core/block-editor');
                const { insertBlock } = dispatch('core/block-editor');
                const selectedBlockClientId = getSelectedBlockClientId();

                if (!selectedBlockClientId) {
                    console.warn('No block is currently selected');
                    return;
                }

                try {
                    const blockOrder = getBlockOrder();
                    const selectedBlockIndex = blockOrder.indexOf(selectedBlockClientId);

                    if (selectedBlockIndex === -1) {
                        throw new Error('Selected block not found in block order');
                    }

                    const newBlock = createBlock('core/html', {
                        content: response.data
                    });

                    insertBlock(newBlock, selectedBlockIndex + 1);
                } catch (error) {
                    console.error('Error inserting blocks:', error);
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr, status, error);
            }
        });
    };

    const schema = data.$schema;
    const [activeTab, setActiveTab] = useState(Object.keys(schema)[0]);
    const [activeCategory, setActiveCategory] = useState({ patterns: 'all', pages: 'all', sites: 'all', templateLibrary: 'my-cloud' });
    const [isProTemplate, setIsProTemplate] = useState('');
    const [activeTagTab, setActiveTagTab] = useState({
        patterns: '',
        pages: '',
        sites: '',
        templateLibrary: ''
    });
    const [libraryData, setLibraryData] = useState([]);

    const TagTabsOptions = (() => {
        const allTags = schema[activeTab]?.categories
            ?.find(category => category.id === activeCategory[activeTab])
            ?.items
            ?.flatMap(item => item.tags || []) || [];
        const uniqueTags = [...new Set(allTags)].slice(0, 5);
        return uniqueTags.map(tag => ({
            name: tag,
            value: tag.toLowerCase().replace(/\s+/g, '-'),
        }));
    })();

    return (
        <>
            <Button
                onClick={() => handleClick()}
                className={"fb-template-library-button"}
            >
                <svg id="fb-global-panel-icon" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor"
                        d="m19.455 11.997 2.408 1.396A2.282 2.282 0 0 1 23 15.373v1.479a2.297 2.297 0 0 1-1.138 1.981l-2.408 1.396-3.56 2.064-2.412 1.4a2.267 2.267 0 0 1-2.276 0l-2.408-1.4v-4.119l3.546 2.06 3.55-2.06 3.546-2.054-3.546-2.06-3.55-2.058 3.55-2.064 3.546-2.055-3.546-2.059-3.55-2.054-3.546-2.06 2.408-1.4a2.267 2.267 0 0 1 2.276 0l2.408 1.4 3.541 2.06 2.408 1.4a2.282 2.282 0 0 1 1.138 1.981v1.474a2.298 2.298 0 0 1-1.138 1.98l-2.385 1.392Z"></path>
                    <path fill="currentColor"
                        d="m8.802 5.828-3.541 2.05v12.354l-2.404-1.395a2.282 2.282 0 0 1-1.142-1.982V7.141A2.297 2.297 0 0 1 2.853 5.16l1.265-.732a2.267 2.267 0 0 1 2.276 0l2.408 1.4Z"></path>
                    <path fill="currentColor"
                        d="m15.896 9.938-3.55 2.06-2.409 1.395a2.267 2.267 0 0 1-2.276 0l-2.417-1.395L8.79 9.943l2.413-1.4a2.266 2.266 0 0 1 2.276 0l2.417 1.395Z"></path>
                </svg>
                {__("Templates", "frontis-blocks")}
            </Button>

            {isVisible &&
                <Modal className={"fb-template-library-popover"} onRequestClose={handleClick}>
                    <div className={`fb-template-library-store-wrap`}>
                        <div className={`fb-template-library-store-inner-wrap`}>
                            <div>
                                <TemplateHeader
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    data={data}
                                    onClose={() => setIsVisible(false)}
                                    setIsProTemplate={setIsProTemplate}
                                    setActiveTagTab={setActiveTagTab}
                                />
                            </div>
                            <div className="fb-template-library-store-sidebar-wrapper">
                                <TemplateSidebar
                                    activeTab={activeTab}
                                    data={data}
                                    activeCategory={activeCategory}
                                    isProTemplate={isProTemplate}
                                    setIsProTemplate={setIsProTemplate}
                                    setActiveCategory={setActiveCategory}
                                    setActiveTagTab={setActiveTagTab}
                                />
                                {activeTab !== 'templateLibrary' && (
                                    <TemplateContent
                                        activeTab={activeTab}
                                        activeCategory={activeCategory}
                                        setLibraryData={setLibraryData}
                                        data={data}
                                        isProTemplate={isProTemplate}
                                        activeTagTab={activeTagTab[activeTab]}
                                        setActiveTagTab={(value) => setActiveTagTab({ ...activeTagTab, [activeTab]: value })}
                                        TagTabsOptions={TagTabsOptions}
                                    />
                                )}
                                {activeTab === 'templateLibrary' && (
                                    <LibraryContent
                                        activeTab={activeTab}
                                        activeCategory={activeCategory}
                                        libraryData={libraryData}
                                        setLibraryData={setLibraryData}
                                        data={data}
                                        isProTemplate={isProTemplate}
                                        activeTag={activeTagTab[activeTab]}
                                        setActiveTag={(value) => setActiveTagTab({ ...activeTagTab, [activeTab]: value })}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    );
};

export default PatternLibraryButton;