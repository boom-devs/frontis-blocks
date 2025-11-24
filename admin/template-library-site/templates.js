/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast } from "react-toastify";
import { __ } from "@wordpress/i18n";
import TemplateSidebar from "./template-sidebar";
import TemplateContent from "./template-content";

import { usePostDataMutation } from './services/laravelapi';

const PatternLibraryButton = () => {
    const [loading, setLoading] = useState(false);
    const [noneFilterLoading, setNoneFilterLoading] = useState(false);
    const [resetCat, setResetCat] = useState(true);
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('patterns');
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [activeCategory, setActiveCategory] = useState({
        patterns: '',
        pages: '',
        sites: '',
        templatelibrary: ''
    });
    const [isProTemplate, setIsProTemplate] = useState('');
    const [searchText, setSearchText] = useState('');
    const [activeTagTab, setActiveTagTab] = useState({
        patterns: '',
        pages: '',
        sites: '',
        templatelibrary: ''
    });

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState({
        patterns: 1,
        pages: 1,
        sites: 1,
        templatelibrary: 1
    });
    const [isImporting, setIsImporting] = useState(false);

    const userData = JSON.parse(localStorage.getItem("userData"));

    const [data, setData] = useState({
        patterns: { name: "Patterns", items: [], categories: [], pagination: {}, tags: [] },
        pages: { name: "Pages", items: [], categories: [], pagination: {}, tags: [] },
        sites: { name: "Sites", items: [], categories: [], pagination: {}, tags: [] },
    });
    const [noneFilterData, setNoneFilterData] = useState({
        patterns: [],
        pages: [],
        sites: []
    });
    

    const [patternsData, { data: patternsResponse, error, isLoading }] = usePostDataMutation();

    const getTemplatesData = async (value, email, license_key, page, tag, search, category, isPro) => {
        try {
            const response = await patternsData({
                endpoint: value,
                body: {
                    email: email,
                    license_key: '',
                    page: page,
                    tag: tag,
                    search: search,
                    category: category,
                    is_pro_template: isPro
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

    const handlePageChange = (tab, page) => {
        setCurrentPage((prev) => ({ ...prev, [tab]: page }));
        fetchData(tab, page, activeTagTab[activeTab], searchText, activeCategory[activeTab], isProTemplate);
    };

    const handleActiveTag = (value) => {
        const newState = { [activeTab]: value };
        setActiveTagTab(newState);

        fetchData(activeTab, 1, value, searchText, activeCategory[activeTab], isProTemplate);
    }

    const handleSearchTemplates = (value) => {
        // Step 1: update input immediately
        setSearchText(value);

        // Step 2: clear previous timer
        if (debounceTimer) clearTimeout(debounceTimer);

        // Step 3: set new timer
        const timer = setTimeout(() => {
            fetchData(activeTab, 1, activeTagTab[activeTab], value, activeCategory[activeTab], isProTemplate);
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
        setCurrentPage({ [activeTab]: 1 });

        fetchData(activeTab, 1, activeTagTab[activeTab], searchText, value, isProTemplate);
    }

    const handleTemplates = (value) => {
        if (value !== isProTemplate) {
            setIsProTemplate(value);
            fetchData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], value);
        } else {
            setIsProTemplate('');
            fetchData(activeTab, 1, activeTagTab[activeTab], searchText, activeCategory[activeTab], '');
        }
    } 

    const fetchData = async (tab = activeTab, page, tag, search, category, isPro) => {
        setLoading(true);

        try {
            let response;
            if (tab === 'patterns') {
                response = await getTemplatesData("patterns", '', '', page, tag, search, category, isPro);
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
                response = await getTemplatesData("pages", '', '', page, tag, search, category, isPro);
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
                response = await getTemplatesData("sites", '', '', page, tag, search, category, isPro);
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
            }
        } catch (err) {
            console.error(`Error fetching ${activeTab}:`, err);
        } finally {
            setLoading(false);
        }
    };

    const fetchNoneFilterData = async (tab = activeTab, page, tag, search = searchText, category, isPro, savedTemplate) => {
        setNoneFilterLoading(true);

        try {
            let response;
            if (tab === 'patterns') {
                response = await getTemplatesData("patterns", userData?.email, '', page, '', '', '');
                if (response) {
                    setNoneFilterData((prev) => ({
                        ...prev,
                        patterns: {
                            ...prev.patterns,
                            categories: response.categories || [],
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'pages') {
                response = await getTemplatesData("pages", userData?.email, '', page, '', '', '');
                if (response) {
                    setNoneFilterData((prev) => ({
                        ...prev,
                        pages: {
                            ...prev.pages,
                            categories: response.categories || [],
                            tags: response.tags || []
                        },
                    }));
                }
            } else if (tab === 'sites') {
                response = await getTemplatesData("sites", userData?.email, '', page, '', '', '');
                if (response) {
                    setNoneFilterData((prev) => ({
                        ...prev,
                        sites: {
                            ...prev.sites,
                            categories: response.categories || [],
                            tags: response.tags || []
                        },
                    }));
                }
            }
        } catch (err) {
            console.error(`Error fetching ${activeTab}:`, err);
        } finally {
            setNoneFilterLoading(false);
        }
    };
      
    useEffect(() => {
        setSearchText('');
        setCurrentPage({ [activeTab]: 1 });
        setActiveTagTab({ [activeTab]: '' });
        setActiveCategory({ [activeTab]: '' });
        setIsProTemplate('');
        fetchData(activeTab, 1, activeTagTab[activeTab], '', activeCategory[activeTab], isProTemplate);
        fetchNoneFilterData(activeTab, 1, activeTagTab[activeTab], '', activeCategory[activeTab], isProTemplate);
    }, [activeTab, userData?.email]);


    const TagTabsOptions = (() => {
        if (!data[activeTab]) return [];
        const currentItems = noneFilterData[activeTab].tags || [];
        const uniqueTags = [...new Set(currentItems)];
        return uniqueTags.map(tag => ({
            name: tag.name,
            value: tag.name,
        }));
    })();


    useEffect(() => {
        if(activeTab === 'templatelibrary' && !userData?.email) {
            setActiveTab('patterns');
        }
    }, [userData?.email]);

    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleSidebarToggle = useCallback(() => {
        setIsSidebarCollapsed(prev => !prev);
    }, []);



    return (
        <>
            <div className="fb-template-library-store-wrap">
                <div className="fb-template-library-store-inner-wrap">
                    <div className="fb-template-library-store-sidebar-wrapper">
                        <TemplateSidebar
                            activeTab={activeTab}
                            data={noneFilterData}
                            activeCategory={activeCategory}
                            isProTemplate={isProTemplate}
                            setIsProTemplate={setIsProTemplate}
                            onChangeTemplates={handleTemplates}
                            setActiveCategoryTab={handleActiveCategoryTab}
                            setActiveTagTab={setActiveTagTab}
                            resetCat={resetCat}
                            setResetCat={setResetCat}
                            loading={noneFilterLoading}
                            isImporting={isImporting}
                            isSidebarCollapsed={isSidebarCollapsed}
                            handleSidebarToggle={handleSidebarToggle}
                        />
                        <TemplateContent
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            activeCategory={activeCategory}
                            data={data}
                            activeTagTab={activeTagTab[activeTab]}
                            searchText={searchText}
                            searchTemplates={handleSearchTemplates}
                            setActiveTagTab={handleActiveTag}
                            TagTabsOptions={TagTabsOptions}
                            isLogedIn={isLogedIn}
                            setIsLogedIn={setIsLogedIn}
                            loading={isLoading}
                            setLoading={loading}
                            tagLoading={noneFilterLoading}
                            currentPage={currentPage[activeTab]}
                            onPageChange={handlePageChange}
                            isImporting={isImporting}
                            isSidebarCollapsed={isSidebarCollapsed}
                            handleSidebarToggle={handleSidebarToggle}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatternLibraryButton;