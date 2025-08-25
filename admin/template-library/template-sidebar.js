import { useState, useEffect } from "@wordpress/element";

const TemplateSidebar = ({ activeTab, activeCategory, setActiveCategory, data, isProTemplate, setIsProTemplate , setActiveTagTab}) => {
    const schema = data.$schema;
    const categories = activeTab ? Object.values(schema[activeTab]?.categories || {}) : [];

    useEffect(() => {
        if (categories.length > 0 && !activeCategory[activeTab]) {
            setActiveCategory(prev => ({
                ...prev,
                [activeTab]: categories[0].id
            }));
        }
    }, [categories, activeTab]);

    const TagTabsOptions = [
        { name: 'Free', value: 'free' },
        { name: 'Pro', value: 'pro' },
    ];

    const handelTemplates = value => {
        setIsProTemplate(value);
    };

    return (
        <div className="fb-template-library-store-sidebar">
            {activeTab !== 'templateLibrary' && (
                <div className="fb-template-category-wrapper">
                    <div className="fb-template-category-label">
                        <h2>Categories</h2>
                    </div>
                    <div className="fb-template-category">
                        {TagTabsOptions.map(tab => (
                            <span
                                key={tab.value}
                                className={`${tab.value === 'free' ? 'fb-tl-free' : 'fb-tl-pro'} ${isProTemplate === tab.value ? 'active' : ''}`}
                                onClick={() => handelTemplates(tab.value)}
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
                        onClick={() => {
                            setActiveCategory({
                                ...activeCategory,
                                [activeTab]: category.id
                            });
                            setIsProTemplate('');
                            setActiveTagTab('');
                            
                        }}
                    >
                        <span className="fb-template-library-store-sidebar-tab-name">
                            <span dangerouslySetInnerHTML={{ __html: category.icon }} />
                            {category.name}
                        </span>
                        {activeTab !== 'templateLibrary' && (
                            <span className="fb-template-library-store-sidebar-tab-count">
                                {String(category.items.length).padStart(2, "0")}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TemplateSidebar;