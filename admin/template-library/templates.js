/**
 * WordPress dependencies
 */
import { useState, useEffect } from "@wordpress/element";
import { toast } from "react-toastify";
import { select, dispatch, use } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
import { __ } from "@wordpress/i18n";
import { Button, Modal } from "@wordpress/components";
import TemplateHeader from "./template-header";
import TemplateSidebar from "./template-sidebar";
import TemplateContent from "./template-content";
import LibraryContent from "./library-content";

import { usePostDataMutation } from './services/laravelapi';


const PatternLibraryButton = () => {
    const [showPatternButton, setShowPatternButton] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tagLoading, setTagLoading] = useState(false);
    const [resetCat, setResetCat] = useState(true);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [cardListType, setCardListType] = useState('list');
    const [activeTab, setActiveTab] = useState('patterns');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [activeCategory, setActiveCategory] = useState({
        patterns: '',
        pages: '',
        sites: '',
        templatelibrary: ''
    });
    const [isProTemplate, setIsProTemplate] = useState('');
    const [searchText, setSearchText] = useState('');
    const [savedTemplateType, setSavedTemplateType] = useState('');
    const [activeTagTab, setActiveTagTab] = useState({
        patterns: '',
        pages: '',
        sites: '',
        templatelibrary: ''
    });
    const [libraryData, setLibraryData] = useState([]);
    const [savedItems, setSavedItems] = useState([]);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState({
        patterns: 1,
        pages: 1,
        sites: 1,
        templatelibrary: 1
    });

    const licenseKey = '8c29b662-1837-419e-9e28-96042a27cf02';
    const isProPlugin = FB_TLibrary.activationKey.length > 0 ? true : false;
    const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);

    const userData = JSON.parse(localStorage.getItem("userData"));

    const handleClick = () => {
        setIsVisible(!isVisible);
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

    const [data, setData] = useState({
        patterns: { name: "Patterns", items: [], categories: [], pagination: {}, tags: [] },
        pages: { name: "Pages", items: [], categories: [], pagination: {}, tags: [] },
        sites: { name: "Sites", items: [], categories: [], pagination: {}, tags: [] },
        templatelibrary: { name: "Template Library", items: [], categories: [], pagination: {} },
    });
    const [tagData, setTagData] = useState({
        patterns: [],
        pages: [],
        sites: [],
        templatelibrary: []
    });
    

    const [patternsData, { data: patternsResponse, error, isLoading }] = usePostDataMutation();

    const getTemplatesData = async (value, email, license_key, page, tag, search, category, is_pro_template) => {
        try {
            const response = await patternsData({
                endpoint: value,
                body: {
                    email: email,
                    license_key: license_key,
                    page: page,
                    tag: tag,
                    search: search,
                    category: category,
                    is_pro_template: is_pro_template
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }).unwrap();

            return response;
        } catch (err) {
            if(err?.data?.status === 'error') {
                toast.error(err.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    };

    const getSavedTemplatesData = async (value, email, license_key, page, tag, search, category, isPro, savedTemplate) => {
        try {
            const response = await patternsData({
                endpoint: value,
                body: {
                    email: email,
                    license_key: license_key,
                    page: page,
                    search: search,
                    type: savedTemplate
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }).unwrap();

            return response;
        } catch (err) {
            if(err?.data?.status === 'error') {
                toast.error(err.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    };

    const alreadySaved = (savedItems, id, activeTab) => {
        if (activeTab !== 'templatelibrary') {
            return savedItems.some(item => item?.id === id && item?.activeTab === 'templatelibrary');
        }

        return savedItems.some(item => item?.id === id && item?.activeTab === activeTab);
    };

    const handlePageChange = (tab, page) => {
        setCurrentPage((prev) => ({ ...prev, [tab]: page }));
        fetchData(tab, page, activeTagTab[activeTab]);
    };

    const handleActiveTag = (value) => {
        const newState = { [activeTab]: value };
        setActiveTagTab(newState);

        fetchData(activeTab, 1, value, searchText, activeCategory[activeTab], isProTemplate, savedTemplateType);
    }

    const handleSearchTemplates = (value) => {
        // Step 1: update input immediately
        setSearchText(value);

        // Step 2: clear previous timer
        if (debounceTimer) clearTimeout(debounceTimer);

        // Step 3: set new timer
        const timer = setTimeout(() => {
            setDebouncedValue(value);
            fetchData(activeTab, 1, activeTagTab[activeTab], value, activeCategory[activeTab], isProTemplate, savedTemplateType);
        }, 1000);

        setDebounceTimer(timer);
    }

    const handleActiveCategoryTab = (value) => {
        if (value === '') {
            setResetCat(true);
        } else {
            setResetCat(false);
        }

        const newState = { [activeTab]: value };
        setActiveCategory(newState);

        fetchData(activeTab, 1, activeTagTab[activeTab], searchText, value, isProTemplate, savedTemplateType);
    }

    const hangleChangeSavedTemplateType = (value) => {
        setSavedTemplateType(value);

        fetchData(activeTab, 1, value, searchText, activeCategory[activeTab], isProTemplate, value);
    }

    const handleTemplates = (value) => {
        if (value !== isProTemplate) {
            setIsProTemplate(value);
            fetchData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], value, savedTemplateType);
        } else {
            setIsProTemplate('');
            fetchData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], '', savedTemplateType);
        }
    } 

    const fetchData = async (tab = activeTab, page = currentPage[activeTab], tag = activeTagTab[activeTab], search = searchText, category = activeCategory[activeTab], isPro = isProTemplate, savedTemplate = savedTemplateType) => {
        setLoading(true);

        try {
            let response;
            if (tab === 'patterns') {
                response = await getTemplatesData("patterns", userData?.email, licenseKey, page, tag, search, category, isPro);
                if (response) {
                    setData((prev) => ({
                        ...prev,
                        patterns: {
                            ...prev.patterns,
                            items: response.items || [],
                            categories: response.categories || [],
                            pagination: response.pagination || {},
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'pages') {
                response = await getTemplatesData("pages", userData?.email, licenseKey, page, tag, search, category, isPro);
                if (response) {
                    setData((prev) => ({
                        ...prev,
                        pages: {
                            ...prev.pages,
                            items: response.items || [],
                            categories: response.categories || [],
                            pagination: response.pagination || {},
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'sites') {
                response = await getTemplatesData("sites", userData?.email, licenseKey, page, tag, search, category, isPro);
                if (response) {
                    setData((prev) => ({
                        ...prev,
                        sites: {
                            ...prev.sites,
                            items: response.items || [],
                            categories: response.categories || [],
                            pagination: response.pagination || {},
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'templatelibrary') {
                if(userData) {
                    response = await getSavedTemplatesData("clouds", userData?.email, licenseKey, page, tag, search, category, isPro, savedTemplate);
                    if (response) {
                        setData((prev) => ({
                            ...prev,
                            templatelibrary: {
                                ...prev.templatelibrary,
                                items: response.items || [],
                                categories: response.categories || [],
                                pagination: response.pagination || {}
                            },
                        }));
                    }
                }
            }
        } catch (err) {
            console.error(`Error fetching ${activeTab}:`, err);
        } finally {
            setLoading(false);
        }
    };

    const fetchTagData = async (tab = activeTab, page = currentPage[activeTab], tag = activeTagTab[activeTab], search = searchText, category = activeCategory[activeTab], isPro = isProTemplate, savedTemplate = savedTemplateType) => {
        setTagLoading(true);

        try {
            let response;
            if (tab === 'patterns') {
                response = await getTemplatesData("patterns", userData?.email, '', page, '', '', '', '');
                if (response) {
                    setTagData((prev) => ({
                        ...prev,
                        patterns: {
                            ...prev.patterns,
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'pages') {
                response = await getTemplatesData("pages", userData?.email, '', page, '', '', '', '');
                if (response) {
                    setTagData((prev) => ({
                        ...prev,
                        pages: {
                            ...prev.pages,
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'sites') {
                response = await getTemplatesData("sites", userData?.email, '', page, '', '', '', '');
                if (response) {
                    setTagData((prev) => ({
                        ...prev,
                        sites: {
                            ...prev.sites,
                            tags: response.tags || []
                        },
                    }));
                }
            }
        } catch (err) {
            console.error(`Error fetching ${activeTab}:`, err);
        } finally {
            setTagLoading(false);
        }
    };
      

    useEffect(() => {
        setSearchText('');
        setCurrentPage({ [activeTab]: 1 });
        setActiveTagTab({ [activeTab]: '' });
        setActiveCategory({ [activeTab]: '' });
        setIsProTemplate('');
        setSavedTemplateType('');
        fetchData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], isProTemplate);
        fetchTagData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], isProTemplate);
    }, [activeTab]);


    const handleSaveLibrary = async (templateData, isAlreadySaved) => {
        if (!userData) {
            setIsLoginModalOpen(true);
            return;
        }

        if (!isProPlugin) {
            setIsPluginUpgradeModalOpen(true);
            return;
        }

        if (isAlreadySaved) return;

        if (loading) return;

        setData((prev) => {
            const updatedItems = prev[activeTab].items.map((item) =>
                item.id === templateData.id ? { ...item, saveLoading: true } : item
            );
            return {
                ...prev,
                [activeTab]: {
                    ...prev[activeTab],
                    items: updatedItems,
                },
            };
        });

        const apiBase = `${FB_TLibrary.wordpressSyncApi}/wp-json`;
        const body = {
            email: userData.email,
            item_id: templateData.id,
            item_type: templateData.type,
            license_key: licenseKey,
            website: window.location.origin,
        };

        const response = await fetch(`${apiBase}/frontis-sync/v1/saved-item`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        const responseData = await response.json();

        if(responseData.status === 'success') {
            toast.success(responseData.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });

            setData((prev) => {
                const updatedItems = prev[activeTab].items.map((item) =>
                    item.id === templateData.id ? { ...item, saved: true, saveLoading: false } : item
                );
                return {
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        items: updatedItems,
                    },
                };
            });
        } else {
            toast.error('Failed to save template', {
                position: "top-right",
                autoClose: 3000,
            });

            setData((prev) => {
                const updatedItems = prev[activeTab].items.map((item) =>
                    item.id === templateData.id ? { ...item, saveLoading: false } : item
                );
                return {
                    ...prev,
                    [activeTab]: {
                        ...prev[activeTab],
                        items: updatedItems,
                    },
                };
            });
        }
    }

    const TagTabsOptions = (() => {
        if (!data[activeTab]) return [];
        const currentItems = tagData[activeTab].tags || [];
        const uniqueTags = [...new Set(currentItems)].slice(0, 5);
        return uniqueTags.map(tag => ({
            name: tag.name,
            value: tag.name,
        }));
    })();


    return (
        <>
            <Button
                onClick={handleClick}
                className="fb-template-library-button"
            >
                <svg id="fb-global-panel-icon" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path fill="currentColor" d="m19.455 11.997 2.408 1.396A2.282 2.282 0 0 1 23 15.373v1.479a2.297 2.297 0 0 1-1.138 1.981l-2.408 1.396-3.56 2.064-2.412 1.4a2.267 2.267 0 0 1-2.276 0l-2.408-1.4v-4.119l3.546 2.06 3.55-2.06 3.546-2.054-3.546-2.06-3.55-2.058 3.55-2.064 3.546-2.055-3.546-2.059-3.55-2.054-3.546-2.06 2.408-1.4a2.267 2.267 0 0 1 2.276 0l2.408 1.4 3.541 2.06 2.408 1.4a2.282 2.282 0 0 1 1.138 1.981v1.474a2.298 2.298 0 0 1-1.138 1.98l-2.385 1.392Z"></path>
                    <path fill="currentColor" d="m8.802 5.828-3.541 2.05v12.354l-2.404-1.395a2.282 2.282 0 0 1-1.142-1.982V7.141A2.297 2.297 0 0 1 2.853 5.16l1.265-.732a2.267 2.267 0 0 1 2.276 0l2.408 1.4Z"></path>
                    <path fill="currentColor" d="m15.896 9.938-3.55 2.06-2.409 1.395a2.267 2.267 0 0 1-2.276 0l-2.417-1.395L8.79 9.943l2.413-1.4a2.266 2.266 0 0 1 2.276 0l2.417 1.395Z"></path>
                </svg>
                {__("Templates", "frontis-blocks")}
            </Button>

            {isVisible && (
                <Modal className="fb-template-library-popover" onRequestClose={handleClick}>
                    <div className="fb-template-library-store-wrap">
                        <div className="fb-template-library-store-inner-wrap">
                            <div>
                                <TemplateHeader
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    data={data}
                                    onClose={() => setIsVisible(false)}
                                    setIsProTemplate={setIsProTemplate}
                                    setActiveTagTab={setActiveTagTab}
                                    // setActiveCategory={setActiveCategory}
                                    resetCat={resetCat}
                                    setResetCat={setResetCat}
                                    setLoading={setLoading}
                                    isLoginModalOpen={isLoginModalOpen}
                                    setIsLoginModalOpen={setIsLoginModalOpen}
                                />
                            </div>
                            <div className="fb-template-library-store-sidebar-wrapper">
                                <TemplateSidebar
                                    activeTab={activeTab}
                                    data={data}
                                    activeCategory={activeCategory}
                                    isProTemplate={isProTemplate}
                                    setIsProTemplate={setIsProTemplate}
                                    // setActiveCategory={setActiveCategory}
                                    onChangeTemplates={handleTemplates}
                                    setActiveCategoryTab={handleActiveCategoryTab}
                                    setActiveTagTab={setActiveTagTab}
                                    resetCat={resetCat}
                                    setResetCat={setResetCat}
                                    loading={isLoading}
                                    setLoading={setLoading}
                                />

                                {activeTab !== 'templatelibrary' && (
                                    <TemplateContent
                                        activeTab={activeTab}
                                        activeCategory={activeCategory}
                                        setLibraryData={setLibraryData}
                                        data={data}
                                        setIsVisible={setIsVisible}
                                        isProTemplate={isProTemplate}
                                        activeTagTab={activeTagTab[activeTab]}
                                        searchText={searchText}
                                        searchTemplates={handleSearchTemplates}
                                        setActiveTagTab={handleActiveTag}
                                        TagTabsOptions={TagTabsOptions}
                                        isLogedIn={isLogedIn}
                                        setIsLogedIn={setIsLogedIn}
                                        savedItems={savedItems}
                                        setSavedItems={setSavedItems}
                                        alreadySaved={alreadySaved}
                                        loading={isLoading}
                                        setLoading={loading}
                                        tagLoading={tagLoading}
                                        // setActiveCategory={setActiveCategory}
                                        onSaveLibrary={handleSaveLibrary}
                                        setIsLoginModalOpen={setIsLoginModalOpen}
                                        isLoginModalOpen={isLoginModalOpen}
                                        isProPlugin={isProPlugin}
                                        isPluginUpgradeModalOpen={isPluginUpgradeModalOpen}
                                        setIsPluginUpgradeModalOpen={setIsPluginUpgradeModalOpen}
                                        currentPage={currentPage[activeTab]}
                                        onPageChange={handlePageChange}
                                    />
                                )}

                                {
                                // activeTab !== 'templatelibrary' && (
                                //     <TemplateContent
                                //         activeTab={activeTab}
                                //         activeCategory={activeCategory}
                                //         setLibraryData={setLibraryData}
                                //         data={data}
                                //         setIsVisible={setIsVisible}
                                //         isProTemplate={isProTemplate}
                                //         activeTagTab={activeTagTab[activeTab]}
                                //         setActiveTagTab={(value) => setActiveTagTab({ ...activeTagTab, [activeTab]: value })}
                                //         TagTabsOptions={TagTabsOptions}
                                //         isLogedIn={isLogedIn}
                                //         savedItems={savedItems}
                                //         setSavedItems={setSavedItems}
                                //         alreadySaved={alreadySaved}
                                //         loading={loading}
                                //         setLoading={setLoading}
                                //         setIsLogedIn={setIsLogedIn}
                                //         setActiveCategory={setActiveCategory}
                                //     />
                                // )
                                }

                                {activeTab === 'templatelibrary' && (
                                    <LibraryContent
                                        activeTab={activeTab}
                                        activeCategory={activeCategory}
                                        setActiveCategory={setActiveCategory}
                                        libraryData={libraryData}
                                        setLibraryData={setLibraryData}
                                        setIsVisible={setIsVisible}
                                        data={data}
                                        searchText={searchText}
                                        isProTemplate={isProTemplate}
                                        activeTag={activeTagTab[activeTab]}
                                        setActiveTag={(value) => setActiveTagTab({ ...activeTagTab, [activeTab]: value })}
                                        isLogedIn={isLogedIn}
                                        cardListType={cardListType}
                                        setCardListType={setCardListType}
                                        savedItems={savedItems}
                                        setSavedItems={setSavedItems}
                                        loading={isLoading}
                                        setLoading={setLoading}
                                        currentPage={currentPage[activeTab]}
                                        onPageChange={handlePageChange}
                                        onSearchTemplates={handleSearchTemplates}
                                        onChangeSavedTemplateType={hangleChangeSavedTemplateType}
                                        savedTemplateType={savedTemplateType}
                                    />
                                )}

                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default PatternLibraryButton;