/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import LoginSignupModal from "./login-signup";
import { useState, useEffect, useCallback } from "@wordpress/element";
import TemplateGrid from "./template-grid";
import { ToastContainer } from "react-toastify";
import { TemplateContentLoader } from "./template-loader";

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
    setIsVisible,
    isLogedIn,
    savedItems,
    setSavedItems,
    alreadySaved,
    loading,
    setLoading,
    setIsLogedIn,
    setActiveCategory
}) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const schema = data || {};
    const [filteredTemplates, setFilteredTemplates] = useState([]);
    const [originalTemplates, setOriginalTemplates] = useState([]);
    const [searchItems, setSearchItems] = useState('');

    const searchTemplates = (value) => {
        setSearchItems(value);

        if (!value.trim()) {
            if (activeTagTab) {
                const filtered = originalTemplates.filter(template =>
                    template.tags?.includes(
                        TagTabsOptions.find(tag => tag.value === activeTagTab)?.name
                    )
                );
                setFilteredTemplates(filtered);
            } else {
                setFilteredTemplates(originalTemplates);
            }
        } else {
            const lowerValue = value.toLowerCase();
            let filtered = originalTemplates.filter(template =>
                template.title.toLowerCase().includes(lowerValue)
            );
            if (activeTagTab) {
                filtered = filtered.filter(template =>
                    template.tags?.includes(
                        TagTabsOptions.find(tag => tag.value === activeTagTab)?.name
                    )
                );
            }
            setFilteredTemplates(filtered);
        }
    };

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
            if (isProTemplate === 'pro') {
                items = items.filter(item => item.is_premium);
            } else if (isProTemplate === 'free') {
                items = items.filter(item => !item.is_premium);
            }

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

        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [activeTab, activeCategory, isProTemplate, activeTagTab, TagTabsOptions, schema]);

    const handleLoginSuccess = useCallback(() => {
        setIsLoginModalOpen(false);
        setIsLogedIn(true);
    }, []);

    const handleCloseLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <>
            <div className="fb-template-library-store-content">
                {loading ? (
                    <TemplateContentLoader />
                ) : (
                    <>

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
                                            value={searchItems}
                                            onChange={e => searchTemplates(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="fb-template-library-tags-wrapper">
                                    <button
                                        className={`fb-template-library-tag-btn ${activeTagTab === '' ? 'active' : ''}`}
                                        onClick={() => setActiveTagTab('')}
                                    >
                                        All
                                    </button>
                                    {TagTabsOptions.map(tab => (
                                        <button
                                            key={tab.value}
                                            className={`fb-template-library-tag-btn ${activeTagTab === tab.value ? 'active' : ''}`}
                                            onClick={() => setActiveTagTab(tab.value)}
                                        >
                                            {tab.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />

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
                                        gradientColors={template.gradientColors || []}
                                        customGradientColors={template.custom_gradientColors || []}
                                        typographies={template.typographies || {}}
                                        customTypographies={template.customTypographies || {}}
                                        globalTypographies={template.globalTypographies || {}}
                                        fontFamilies={template.fontFamilies || {}}
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
                                    />
                                ))
                            ) : (
                                <h3>No {activeTab} found</h3>
                            )}
                        </div>
                    </>
                )}
            </div>
            {/* {isLoginModalOpen && (
                <LoginSignupModal
                    onLoginSuccess={handleLoginSuccess}
                    onRequestClose={handleCloseLoginModal}
                />
            )} */}
        </>
    );
};

export default TemplateContent;