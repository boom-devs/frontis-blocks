import { Tuple } from "@reduxjs/toolkit";
import { useState, useEffect } from "@wordpress/element";

const TemplateSidebar = ({ activeTab, activeCategory, setActiveCategory, data, isProTemplate, setIsProTemplate, setActiveTagTab, resetCat, setResetCat }) => {
    const schema = data;
    const categories = schema[activeTab]?.categories || [];

    useEffect(() => {
        if (categories.length > 0 && !activeCategory[activeTab]) {
            setActiveCategory(prev => ({
                ...prev,
                [activeTab]: categories[0].name
            }));
        }
    }, [categories, activeTab, setActiveCategory]);

    const TagTabsOptions = [
        { name: 'Free', value: 'free' },
        { name: 'Pro', value: 'pro' },
    ];

    const handleTemplates = value => {
        if (value !== isProTemplate) {
            setIsProTemplate(value);
        } else {
            setIsProTemplate('');
        }
    };

    const handleCategoryClick = (catName) => {

        if (catName === null) {
            setResetCat(true);
        } else {
            setResetCat(false);
        }
        setActiveCategory((prev) => ({
            ...prev,
            [activeTab]: catName || "",
        }));
        setIsProTemplate('');
        setActiveTagTab('');

    };

    const handelTemplates = value => {
        setIsProTemplate(isProTemplate === value ? '' : value);
    }

    return (
        <div className="fb-template-library-store-sidebar" style={activeTab === 'templatelibrary' ? { paddingTop: 0 } : {}} >
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
                                onClick={() => handleTemplates(tab.value)}
                            >
                                {tab.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            <div className="fb-template-library-store-sidebar-tabs">
                {activeTab !== "templatelibrary" && (
                <button
                    className={`fb-template-library-store-sidebar-tab ${resetCat ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(null)}
                >
                    <span className="fb-template-library-store-sidebar-tab-name">
                        <span className="fb-category-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </span>
                        All
                    </span>
                </button>
                ) }

                {categories.map((category) => (
                    <button
                        key={category.slug}
                        className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === category.name ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {activeTab === "templatelibrary" ? (
                            <span className="fb-template-library-store-sidebar-tab-name">
                                <span
                                    dangerouslySetInnerHTML={{ __html: category.icon }}
                                    className="fb-category-icon"
                                />
                                {category.name}
                            </span>
                        ) : (
                            <span className="fb-template-library-store-sidebar-tab-name">
                                <img
                                    src={`https://leech-better-moose.ngrok-free.app/storage/${category.icon}`}
                                    alt={category.name}
                                    className="fb-category-icon"
                                />
                                {category.name}
                            </span>
                        )}

                        {activeTab !== 'templatelibrary' && (
                            <span className="fb-template-library-store-sidebar-tab-count">
                                {String(category.count).padStart(2, "0")}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TemplateSidebar;