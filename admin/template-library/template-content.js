/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import LoginSignupModal from "./login-signup";
import { useState, useEffect, useCallback } from "@wordpress/element";
import TemplateGrid from "./template-grid";
import {ToastContainer, toast } from "react-toastify";
import { TemplateContentLoader } from "./template-loader";
import { usePostDataMutation } from "./services/wpapi";
import { ClipLoader } from "react-spinners";

const TemplateContent = ({
    activeTab,
    activeCategory,
    data,
    libraryData,
    setLibraryData,
    isProTemplate,
    TagTabsOptions,
    activeTagTab,
    setActiveTagTab,
    searchText,
    searchTemplates,
    setIsVisible,
    isLogedIn,
    savedItems,
    setSavedItems,
    alreadySaved,
    loading,
    setLoading,
    tagLoading,
    setIsLogedIn,
    setActiveCategory,
    onSaveLibrary,
    setIsLoginModalOpen,
    isLoginModalOpen,
    isProPlugin,
    isPluginUpgradeModalOpen,
    setIsPluginUpgradeModalOpen,
    currentPage,
    onPageChange
}) => {

    const schema = data || {};
    const [filteredTemplates, setFilteredTemplates] = useState([]);
    const [originalTemplates, setOriginalTemplates] = useState([]);
    const [searchItems, setSearchItems] = useState('');

    // const searchTemplates = (value) => {
    //     setSearchItems(value);

    //     if (!value.trim()) {
    //         if (activeTagTab) {
    //             const filtered = originalTemplates.filter(template =>
    //                 template.tags?.includes(
    //                     TagTabsOptions.find(tag => tag.value === activeTagTab)?.name
    //                 )
    //             );
    //             setFilteredTemplates(filtered);
    //         } else {
    //             setFilteredTemplates(originalTemplates);
    //         }
    //     } else {
    //         const lowerValue = value.toLowerCase();
    //         let filtered = originalTemplates.filter(template =>
    //             template.title.toLowerCase().includes(lowerValue)
    //         );
    //         if (activeTagTab) {
    //             filtered = filtered.filter(template =>
    //                 template.tags?.includes(
    //                     TagTabsOptions.find(tag => tag.value === activeTagTab)?.name
    //                 )
    //             );
    //         }
    //         setFilteredTemplates(filtered);
    //     }
    // };

    useEffect(() => {
        if (activeTab && schema[activeTab]) {
            let items = schema[activeTab]?.items || [];

            // Filter by category
            if (activeCategory[activeTab] && activeCategory[activeTab] !== 'all') {
                const selectedCat = activeCategory[activeTab].toLowerCase();

                items = items.filter(item =>
                    item.categories?.some(catName =>
                        catName.toLowerCase().replace(/\s+/g, '-') === selectedCat
                    )
                );
            }

            // Filter by Pro/Free
            // if (isProTemplate === 'pro') {
            //     items = items.filter(item => item.is_premium);
            // } else if (isProTemplate === 'free') {
            //     items = items.filter(item => !item.is_premium);
            // }

            setOriginalTemplates(items);
            if (activeTagTab) {
                const filtered = items.filter(template =>
                    template.tags?.includes(
                        TagTabsOptions.find(tag => tag.value === activeTagTab)?.name
                    )
                );
                setFilteredTemplates(filtered);
            } else {
                setFilteredTemplates(items);
            }
            setSearchItems('');
        }

        // setTimeout(() => {
        //     setLoading(false)
        // }, 2000)

    }, [activeTab, activeCategory, isProTemplate, activeTagTab, TagTabsOptions, schema]);

    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

    // Update user data inside database
    const updateUserDataToDb = (optionName, data) => {
        window.jQuery.ajax({
            url: ajaxUrl,
            type: 'POST',
            data: {
                action: 'fb_update_option',
                'option_name': optionName,
                'value': data,
                security: nonce
            },
            success: function(response) {
                console.log(response)
            },
            error: function(xhr, status, error) {
                console.log("Somthing went wrong.")
            }
        });
    }

    const getUserDataFromDb = () => {
        window.jQuery.ajax({
            data: {
                action: 'fb_get_option',
                'option_name': 'frontis_tl_user_data',
                security: nonce,
            },
            success: function(response) {
                localStorage.setItem('userData', JSON.stringify(response.data));
            },
            error: function(xhr, status, error) {
                console.log("Somthing went wrong.")
            }
        });
    }

    const handleLoginSuccess = useCallback((response, activeTab) => {
        toast( activeTab === "signup" ? "Your account has been created!" : "Logged in successfully!", {
            position:"top-right",
            autoClose:3000,
            hideProgressBar:false,
            newestOnTop:false,
            closeOnClick:true,
            rtl:false,
            pauseOnFocusLoss:true,
            draggable:true,
            pauseOnHover:true,
            theme:"light"
        } );

        updateUserDataToDb('frontis_tl_user_data', {
            'name': response?.user?.name,
            'email': response?.user?.email,
            'access_token': response?.access_token,
            'refresh_token': response?.refresh_token,
        })
        setIsLoginModalOpen(false);
        setIsLogedIn(true);
    }, []);

    const handleCloseLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // Get user data from local storage
    useEffect(() => {
        // Get userData from local storage
        
        const userData = localStorage.getItem('userData');
        if (userData === 'undefined' || userData === 'null' || userData === '') {
            getUserDataFromDb();
        }

        // Get user data from localstorage and set setIsLoginModalOpen is false
        if (userData) {
            setIsLoginModalOpen(false);
        }
        
    }, []);

    return (
        <>
            <div className="fb-template-library-store-content">
                <div className="fb-template-library-content-header">
                    <div className="fb-template-library-content-header-left">
                        <h2>All {capitalize(activeTab)}</h2>
                    </div>
                    <div className="fb-template-library-content-header-right">
                        <div className="fb-template-library-search-wrapper">
                            <div className="fb-search-input-wrapper">
                                <div className="fb-search-input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <g clipPath="url(#clip0_13116_5586)">
                                            <circle cx="8.625" cy="8.625" r="7.125" stroke="white" strokeWidth="1.5" />
                                            <path d="M13.875 13.875L16.5 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_131ikt16_5586">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    placeholder={`Search ${capitalize(activeTab)}`}
                                    value={searchText}
                                    onChange={e => searchTemplates(e.target.value)}
                                />
                            </div>
                        </div>
                        { tagLoading ? (
                            <>
                                <ClipLoader color="fff" size={24} />
                            </>
                        ) : (
                            <div className="fb-template-library-tags-wrapper">
                                <button
                                    className={`fb-template-library-tag-btn ${activeTagTab === '' ? 'active' : ''}`}
                                    onClick={() => setActiveTagTab('')}
                                    disabled={activeTagTab === ''}
                                >
                                    All
                                </button>
                                {TagTabsOptions.map(tab => (
                                    <button
                                        key={tab.value}
                                        className={`fb-template-library-tag-btn ${activeTagTab === tab.value ? 'active' : ''}`}
                                        onClick={() => setActiveTagTab(tab.value)}
                                        disabled={activeTagTab === tab.value}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {loading ? (
                    <TemplateContentLoader />
                ) : (
                    <>
                        <ToastContainer />
                        <div className="fb-template-library-cards">
                            {filteredTemplates && filteredTemplates.length > 0 ? (
                                filteredTemplates.map(template => (
                                    <TemplateGrid
                                        key={template.id}
                                        id={template.id}
                                        title={template.title}
                                        imageUrl={template.image}
                                        is_premium={template.is_premium || false}
                                        tags={template.tags || []}
                                        categories={template.categories || []}
                                        templateType={activeTab}
                                        colors={template.colors || []}
                                        customColors={template.custom_colors || []}
                                        gradientColors={template.color_gradients || []}
                                        customGradientColors={template.custom_gradientColors || []}
                                        typographies={template.typographies || {}}
                                        customTypographies={template.custom_typographies || {}}
                                        globalTypographies={template.globalTypographies || {}}
                                        fontFamilies={template.fontFamilies || {}}
                                        pages={template.pages || []}
                                        dependencies={template.dependencies || []}
                                        activeTab={activeTab}
                                        setLibraryData={setLibraryData}
                                        isLogedIn={isLogedIn}
                                        data={data}
                                        setIsVisible={setIsVisible}
                                        savedItems={savedItems}
                                        setSavedItems={setSavedItems}
                                        alreadySaved={alreadySaved}
                                        setActiveCategory={setActiveCategory}
                                        onSaveLibrary={onSaveLibrary}
                                        saved={template.saved}
                                        setLoading={template.loading}
                                        setIsLoginModalOpen={setIsLoginModalOpen}
                                        isLoginModalOpen={isLoginModalOpen}
                                        isProPlugin={isProPlugin}
                                        isPluginUpgradeModalOpen={isPluginUpgradeModalOpen}
                                        setIsPluginUpgradeModalOpen={setIsPluginUpgradeModalOpen}
                                    />
                                ))
                            ) : (
                                <h3>No {activeTab} found</h3>
                            )}
                        </div>
                        { schema[activeTab]?.pagination && (
                            <div className="fb-template-library-pagination">
                                <button
                                    className="fb-pagination-btn fb-btn-prev"
                                    disabled={currentPage === 1}
                                    onClick={() => onPageChange(activeTab, currentPage - 1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                        <path d="M8.93735 15L2 8M2 8L8.93735 1M2 8L20 8" stroke="#0B0C0E" stroke-width="1.5"/>
                                    </svg>
                                    Previous
                                </button>
                            
                                {/* Page Numbers */}
                                <div className="fb-page-numbers">
                                {(() => {
                                    const { last_page } = schema[activeTab].pagination;
                                    const maxVisiblePages = 3;
                                    const pages = [];
                            
                                    if (last_page <= maxVisiblePages) {
                                    for (let i = 1; i <= last_page; i++) {
                                        pages.push(
                                        <button
                                            key={i}
                                            className={`fb-pagination-btn ${currentPage === i ? "active" : ""}`}
                                            onClick={() => onPageChange(activeTab, i)}
                                        >
                                            {i}
                                        </button>
                                        );
                                    }
                                    } else {
                                    // Always show page 1
                                    pages.push(
                                        <button
                                        key={1}
                                        className={`fb-pagination-btn ${currentPage === 1 ? "active" : ""}`}
                                        onClick={() => onPageChange(activeTab, 1)}
                                        >
                                        1
                                        </button>
                                    );
                            
                                    if (currentPage > 2) {
                                        pages.push(<span key="start-ellipsis" className="fb-ellipsis">...</span>);
                                    }
                            
                                    let startPage = Math.max(2, currentPage - 1);
                                    let endPage = Math.min(last_page - 1, currentPage + 1);
                            
                                    if (currentPage > last_page - 2) {
                                        startPage = Math.max(2, last_page - maxVisiblePages + 1);
                                        endPage = last_page - 1;
                                    }
                            
                                    for (let i = startPage; i <= endPage; i++) {
                                        pages.push(
                                        <button
                                            key={i}
                                            className={`fb-pagination-btn ${currentPage === i ? "active" : ""}`}
                                            onClick={() => onPageChange(activeTab, i)}
                                        >
                                            {i}
                                        </button>
                                        );
                                    }
                            
                                    if (endPage < last_page - 1) {
                                        pages.push(<span key="end-ellipsis" className="fb-ellipsis">...</span>);
                                    }
                            
                                    if (last_page > 1) {
                                        pages.push(
                                        <button
                                            key={last_page}
                                            className={`fb-pagination-btn ${currentPage === last_page ? "active" : ""}`}
                                            onClick={() => onPageChange(activeTab, last_page)}
                                        >
                                            {last_page}
                                        </button>
                                        );
                                    }
                                    }
                            
                                    return pages;
                                })()}
                                </div>
                            
                                <button
                                    className="fb-pagination-btn fb-btn-next"
                                    disabled={currentPage === schema[activeTab].pagination.last_page}
                                    onClick={() => onPageChange(activeTab, currentPage + 1)}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                        <path d="M8.93735 15L2 8M2 8L8.93735 1M2 8L20 8" stroke="#0B0C0E" stroke-width="1.5"/>
                                    </svg>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            {isLoginModalOpen && (
                <LoginSignupModal
                    onLoginSuccess={handleLoginSuccess}
                    onRequestClose={handleCloseLoginModal}
                    isLoginModalOpen={isLoginModalOpen}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                />
            )}
        </>
    );
};

export default TemplateContent;