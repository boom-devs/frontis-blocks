import { useState, useEffect } from "@wordpress/element";

const TemplateSidebar = ({ activeTab, activeCategory, setActiveCategory, data, isProTemplate, setIsProTemplate, setActiveTagTab }) => {
    const schema = data;
    const categories = schema[activeTab]?.categories || [];

    useEffect(() => {
        // Set the first category as default only if no category is selected yet
        if (categories.length > 0 && !activeCategory[activeTab]) {
            setActiveCategory(prev => ({
                ...prev,
                [activeTab]: categories[0].id
            }));
        }
    }, [categories, activeTab, setActiveCategory]);

    const TagTabsOptions = [
        { name: 'Free', value: 'free' },
        { name: 'Pro', value: 'pro' },
    ];

    const handleTemplates = value => {
        setIsProTemplate(value);
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(prev => ({
            ...prev,
            [activeTab]: categoryId
        }));
        setIsProTemplate(''); // Reset Pro/Free filter when category changes
        setActiveTagTab(''); // Reset tag filter when category changes
    };

    return (
        <div className="fb-template-library-store-sidebar">
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
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === category.id ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <span className="fb-template-library-store-sidebar-tab-name">
                            <img src={category.icon} alt={category.name} className="fb-category-icon" />
                            {category.name}
                        </span>
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