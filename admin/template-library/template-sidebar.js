import { useState, useEffect } from "@wordpress/element";
import { TemplateCategoryLoader } from "./template-loader";

const TemplateSidebar = ({ activeTab, activeCategory, setActiveCategory, data, onChangeTemplates, isProTemplate, setIsProTemplate, setActiveTagTab, setActiveCategoryTab, resetCat, setResetCat, loading , setLoading}) => {
    const schema = data;
    const categories = schema[activeTab]?.categories || [];


    // useEffect(() => {
    //     if (categories.length > 0 && !activeCategory[activeTab]) {
    //         setActiveCategory(prev => ({
    //             ...prev,
    //             [activeTab]: categories[0].slug
    //         }));
    //     }
    // }, [activeTab]);
    
    const TagTabsOptions = [
        { name: 'Free', value: 'free' },
        { name: 'Pro', value: 'pro' },
    ];

    // const handleTemplates = value => {
    //     if (value !== isProTemplate) {
    //         setIsProTemplate(value);
    //     } else {
    //         setIsProTemplate('');
    //     }
    // };

    // const handleCategoryClick = (catName) => {
    //     if (catName === null) {
    //         setResetCat(true);
    //     } else {
    //         setResetCat(false);
    //     }
    //     setActiveCategory((prev) => ({
    //         ...prev,
    //         [activeTab]: catName || "",
    //     }));
    //     setIsProTemplate('');
    //     setActiveTagTab('');
    // };

    // const handelTemplates = value => {
    //     setIsProTemplate(isProTemplate === value ? '' : value);
    // };

    return (
        <div className="fb-template-library-store-sidebar" style={activeTab === 'templatelibrary' && !loading ? { paddingTop: 0 } : {}}>
            {activeTab !== 'templatelibrary' && (
                <div className="fb-template-category-wrapper">
                    <div className="fb-template-category-label">
                        <h2>Categories</h2>
                    </div>
                    <div className="fb-template-category">
                        {TagTabsOptions.map(tab => (
                            <span
                                key={tab.value}
                                className={`${tab.value === 'free' ? 'fb-tl-free' : 'fb-tl-pro'} ${isProTemplate === tab.value ? 'active' : ''}`}
                                onClick={() => onChangeTemplates(tab.value)}
                            >
                                {tab.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <div className="fb-template-library-store-sidebar-tabs">
               
                {loading ? (
                    <TemplateCategoryLoader count={15} />
                ) : (
                    <>
                        {activeTab !== "templatelibrary" ? (
                            <button
                                className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === '' ? "active" : ""}`}
                                onClick={() => setActiveCategoryTab('')}
                                disabled={activeCategory[activeTab] === ''}
                            >
                                <span className="fb-template-library-store-sidebar-tab-name">
                                    <span className="fb-category-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z"
                                                stroke="#404655"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z"
                                                stroke="#404655"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z"
                                                stroke="#404655"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z"
                                                stroke="#404655"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    All
                                </span>
                            </button>
                        ) : (
                            <button
                                className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === '' ? "active" : ""}`}
                                onClick={() => setActiveCategoryTab('')}
                                disabled={activeCategory[activeTab] === ''}
                            >
                                <span className="fb-template-library-store-sidebar-tab-name">
                                    <span className="fb-category-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4999 16.5V8.5C20.4999 6.14298 20.4999 4.96447 19.7676 4.23223C19.0354 3.5 17.8569 3.5 15.4999 3.5H8.49988C6.14286 3.5 4.96434 3.5 4.23211 4.23223C3.49988 4.96447 3.49988 6.14298 3.49988 8.5V16.5" stroke="#0B0C0E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21.9841 20.5H2.01567C1.63273 20.5 1.38367 20.1088 1.55493 19.7764L3.49988 16.5H20.4999L22.4448 19.7764C22.6161 20.1088 22.367 20.5 21.9841 20.5Z" stroke="#0B0C0E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.49988 12.5C8.67145 12.5 7.99988 11.8284 7.99988 11C7.99988 10.1716 8.67145 9.5 9.49988 9.5H9.99988C9.99988 8.39543 10.8953 7.5 11.9999 7.5C13.1044 7.5 13.9999 8.39543 13.9999 9.5H14.4999C15.3283 9.5 15.9999 10.1716 15.9999 11C15.9999 11.8284 15.3283 12.5 14.4999 12.5H9.49988Z" stroke="#0B0C0E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    My Cloud
                                </span>
                            </button>
                        )}

                        {categories.map((category) => (
                            <button
                                key={category?.slug}
                                className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === category?.slug ? "active" : ""}`}
                                onClick={() => setActiveCategoryTab(category.slug)}
                                disabled={activeCategory[activeTab] === category.slug}
                            >
                                <span className="fb-template-library-store-sidebar-tab-name">
                                    {activeTab === "templatelibrary" ? (
                                        <span
                                            dangerouslySetInnerHTML={{ __html: category.icon }}
                                            className="fb-category-icon"
                                        />
                                    ) : (
                                        <img
                                            src={`${FB_TLibrary.portalApi}/storage/${category.icon}`}
                                            alt={category.name}
                                            className="fb-category-icon"
                                        />
                                    )}
                                    {category.name}
                                </span>

                                {activeTab !== "templatelibrary" && (
                                    <span className="fb-template-library-store-sidebar-tab-count">
                                        {String(category.count).padStart(2, "0")}
                                    </span>
                                )}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default TemplateSidebar;