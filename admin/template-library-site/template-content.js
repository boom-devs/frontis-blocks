/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useCallback } from "@wordpress/element";
import TemplateGrid from "./template-grid";
import { ClipLoader } from "react-spinners";
import { useRef } from "@wordpress/element";
import TemplateLibraryCardsSkeleton from "./components/TemplateLibraryCardsSkeleton";

const TabsOptions = [
    { name: 'Patterns', value: 'patterns' },
    { name: 'Pages', value: 'pages' },
    { name: 'Sites', value: 'sites' },
];


const TemplateContent = ({
    activeTab,
    setActiveTab ,
    activeCategory,
    data,
    TagTabsOptions,
    activeTagTab,
    setActiveTagTab,
    searchText,
    searchTemplates,
    loading,
    tagLoading,
    setIsLogedIn,
    setActiveCategory,
    currentPage,
    onPageChange,
}) => {

    const schema = data || {};
    const [filteredTemplates, setFilteredTemplates] = useState([]);

    const scrollContainer = useRef(null);

    const scroll = useCallback((direction) => {
        if (!scrollContainer.current) return;
        const container = scrollContainer.current.querySelector('.fb-tag-scroll-inner');
        if (!container) return;
    
        const scrollAmount = 150; // adjust for smoother or faster scroll
    
        const newScrollPosition =
            direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;
    
        container.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth',
        });
    }, []);
    


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
        }

    }, [activeTab, activeCategory, activeTagTab, TagTabsOptions, schema]);


    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


    return (
        <>
            <div className="fb-template-library-store-content-wrapper">
            <div className="fb-template-library-store-content" >
                <div className="fb-template-library-content-header">
                    <div className="fb-template-library-content-header-left">
                        <div className="fb-template-library-tabs">
                            {TabsOptions.map(tab => (
                                <button
                                    key={tab.value}
                                    className={`fb-template-library-tab ${activeTab === tab.value ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.value)}
                                    disabled={activeTab === tab.value}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </div>
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
                                {/* Left Arrow */}
                                <button
                                    className="fb-tag-slider-btn fb-tag-slider-left"
                                    onClick={() => scroll('left')}
                                    aria-label="Scroll left"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>

                                {/* Scrollable Tags */}
                                <div className="fb-tag-scroll-container" ref={scrollContainer}>
                                    <div className="fb-tag-scroll-inner">
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
                                </div>

                                {/* Right Arrow */}
                                <button
                                    className="fb-tag-slider-btn fb-tag-slider-right"
                                    onClick={() => scroll('right')}
                                    aria-label="Scroll right"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                        )}
                    </div>
                </div>

                {loading ? (
                    <TemplateLibraryCardsSkeleton count={15} />
                ) : (
                    <>
                        <div className="fb-template-library-cards">
                            {filteredTemplates && filteredTemplates.length > 0 ? (
                                filteredTemplates.map(template => (
                                    <TemplateGrid
                                        key={template.id}
                                        id={template.id}
                                        title={template.title}
                                        imageUrl={template.image}
                                        tags={template.tags || []}
                                        categories={template.categories || []}
                                        templateType={activeTab}
                                        preview_url={template.preview_url || ''}
                                        uploads={template.uploads || ''}
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
                                        setActiveCategory={setActiveCategory}
                                        data={data}
                                    />
                                ))
                            ) : (
                                <h3>No {activeTab} found</h3>
                            )}
                        </div>
                        { schema[activeTab]?.pagination?.last_page > 1 && (
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
            </div>
        </>
    );
};

export default TemplateContent;