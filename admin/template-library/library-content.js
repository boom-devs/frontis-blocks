/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";
import PluginUpgradeModal from "./plugin-upgrade";
import TemplateGrid from "./template-grid";
import TemplateList from "./template-list";
import { TemplateContentLoader } from "./template-loader";


const LibraryContent = ({ 
    activeTab, 
    activeCategory, 
    setActiveCategory, 
    data, 
    libraryData, 
    setLibraryData, 
    setIsVisible, 
    isLogedIn, 
    cardListType, 
    setCardListType, 
    savedItems, 
    setSavedItems, 
    loading, 
    setLoading 
}) => {

    const FavoriteTabsOptions = [
        { name: 'All', value: 'all' },
        { name: 'Patterns', value: 'patterns' },
        { name: 'Pages', value: 'pages' },
        { name: 'Sites', value: 'sites' },
    ];

    const CardListOptions = [
        {
            svg: (
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                    <path d='M3.88886 9.66294C4.39331 10 5.09554 10 6.5 10C7.90447 10 8.6067 10 9.11115 9.66294C9.32953 9.51702 9.51703 9.32952 9.66294 9.11114C10 8.60669 10 7.90446 10 6.5C10 5.09554 10 4.39331 9.66294 3.88886C9.51703 3.67048 9.32953 3.48298 9.11115 3.33706C8.6067 3 7.90447 3 6.5 3C5.09554 3 4.39331 3 3.88886 3.33706C3.67048 3.48298 3.48298 3.67048 3.33707 3.88886C3 4.39331 3 5.09554 3 6.5C3 7.90446 3 8.60669 3.33707 9.11114C3.48298 9.32952 3.67048 9.51702 3.88886 9.66294Z' stroke='#404655' strokeWidth='1.5' strokeLinejoin='round' />
                    <path d='M14.8888 9.66294C15.3933 10 16.0955 10 17.5 10C18.9044 10 19.6067 10 20.1111 9.66294C20.3295 9.51702 20.517 9.32952 20.6629 9.11114C21 8.60669 21 7.90446 21 6.5C21 5.09554 21 4.39331 20.6629 3.88886C20.517 3.67048 20.3295 3.48298 20.1111 3.33706C19.6067 3 18.9044 3 17.5 3C16.0955 3 15.3933 3 14.8888 3.33706C14.6705 3.48298 14.483 3.67048 14.337 3.88886C14 4.39331 14 5.09554 14 6.5C14 7.90446 14 8.60669 14.337 9.11114C14.483 9.32952 14.6705 9.51702 14.8888 9.66294Z' stroke='#404655' strokeWidth='1.5' strokeLinejoin='round' />
                    <path d='M3.88886 20.6629C4.39331 21 5.09554 21 6.5 21C7.90447 21 8.6067 21 9.11115 20.6629C9.32953 20.517 9.51703 20.3295 9.66294 20.1111C10 19.6067 10 18.9045 10 17.5C10 16.0955 10 15.3933 9.66294 14.8889C9.51703 14.6705 9.32953 14.483 9.11115 14.3371C8.6067 14 7.90447 14 6.5 14C5.09554 14 4.39331 14 3.88886 14.3371C3.67048 14.483 3.48298 14.6705 3.33707 14.8889C3 15.3933 3 16.0955 3 17.5C3 18.9045 3 19.6067 3.33707 20.1111C3.48298 20.3295 3.67048 20.517 3.88886 20.6629Z' stroke='#404655' strokeWidth='1.5' strokeLinejoin='round' />
                    <path d='M14.8888 20.6629C15.3933 21 16.0955 21 17.5 21C18.9044 21 19.6067 21 20.1111 20.6629C20.3295 20.517 20.517 20.3295 20.6629 20.1111C21 19.6067 21 18.9045 21 17.5C21 16.0955 21 15.3933 20.6629 14.8889C20.517 14.6705 20.3295 14.483 20.1111 14.3371C19.6067 14 18.9044 14 17.5 14C16.0955 14 15.3933 14 14.8888 14.3371C14.6705 14.483 14.483 14.6705 14.337 14.8889C14 15.3933 14 16.0955 14 17.5C14 18.9045 14 19.6067 14.337 20.1111C14.483 20.3295 14.6705 20.517 14.8888 20.6629Z' stroke='#404655' strokeWidth='1.5' strokeLinejoin='round' />
                </svg>
            ),
            value: 'grid'
        },
        {
            svg: (
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M4 5H20' stroke='#404655' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M4 12H20' stroke='#404655' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M4 19H20' stroke='#404655' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            ),
            value: 'list'
        },
    ];

    const schema = data || {};
    const [displayedData, setDisplayedData] = useState([]);
    const [originalLibraryData, setOriginalLibraryData] = useState([]);
    const [activeFavoriteTab, setActiveFavoriteTab] = useState('all');
    const [searchItems, setSearchItems] = useState('');
    const [isLibrary, setIsLibrary] = useState(true);

    const searchTemplates = (value) => {
        setSearchItems(value);

        let dataToSearch = originalLibraryData;

        if (activeCategory.templatelibrary === 'my-favourites' && activeFavoriteTab !== 'all') {
            dataToSearch = dataToSearch.filter(item => item.activeTab === activeFavoriteTab);
        }

        if (!value.trim()) {
            setDisplayedData(dataToSearch);
        } else {
            const lowerValue = value.toLowerCase();
            const filtered = dataToSearch.filter(item =>
                (item.title && item.title.toLowerCase().includes(lowerValue)) ||
                (item.name && item.name.toLowerCase().includes(lowerValue)) ||
                (item.activeTab && item.activeTab.toLowerCase().includes(lowerValue))
            );
            setDisplayedData(filtered);
        }
    };
    useEffect(() => {
        setOriginalLibraryData(libraryData);
        setDisplayedData(libraryData);
        setSearchItems('');
    }, [libraryData]);

    useEffect(() => {
        let filteredData = originalLibraryData;

        // Filter by activeTab when not 'all'
        if (activeFavoriteTab !== 'all') {
            filteredData = filteredData.filter(item => item.activeTab === activeFavoriteTab);
        }

        if (activeCategory.templatelibrary === 'my-favourites') {
            filteredData = filteredData.filter(item => item.categories?.includes(activeCategory.templatelibrary));
        }

        if (searchItems.trim()) {
            const lowerValue = searchItems.toLowerCase();
            filteredData = filteredData.filter(item =>
                (item.title && item.title.toLowerCase().includes(lowerValue)) ||
                (item.name && item.name.toLowerCase().includes(lowerValue)) ||
                (item.activeTab && item.activeTab.toLowerCase().includes(lowerValue))
            );
        }

        setTimeout(() => {
            setLoading(false)
        }, 2000)

        setDisplayedData(filteredData);
    }, [activeFavoriteTab, originalLibraryData, searchItems, activeCategory.templatelibrary]);

    const handleFavoriteTabClick = useCallback((tab) => {
        setActiveFavoriteTab(tab.value);
        setSearchItems('');
    }, []);


    const handleRemoveLibraryItem = useCallback((id, type) => {
        const updatedOriginalData = originalLibraryData.filter(
            (item) => !(item.id === id && item.type === type)
        );
        setOriginalLibraryData(updatedOriginalData);

        const updatedDisplayedData = displayedData.filter(
            (item) => !(item.id === id && item.type === type)
        );
        setDisplayedData(updatedDisplayedData);

        if (setLibraryData) {
            const updatedLibraryData = libraryData.filter(
                (item) => !(item.id === id && item.type === type)
            );
            setLibraryData(updatedLibraryData);
        }

        setSavedItems((prev) =>
            prev.filter((item) => !(item?.id === id && item?.type === type))
        );

        toast.success(__('Template removed from library', 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });


    }, [originalLibraryData, displayedData, libraryData, setLibraryData, setSavedItems]);



    return (
        <div className="fb-template-library-store-content">
            {loading ? (
                <TemplateContentLoader />
            ) : (
                <>
                    {/* {(activeCategory.templatelibrary === 'my-favourites' || activeCategory.templatelibrary === 'my-cloud') && ( */}
                    <div className="fb-template-library-content-header">
                        <div className="fb-template-library-content-header-left">
                            {/* {activeCategory.templatelibrary === 'my-cloud' && <h2>My Cloud</h2>} */}
                            {/* {activeCategory.templatelibrary === 'my-favourites' && ( */}
                            <div className="fb-template-library-tags-wrapper">
                                {FavoriteTabsOptions.map(tab => (
                                    <button
                                        key={tab.value}
                                        className={`fb-template-library-tag-btn ${activeFavoriteTab === tab.value ? 'active' : ''}`}
                                        onClick={() => handleFavoriteTabClick(tab)}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            {/* )} */}
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
                                                <clipPath id="clip0_13116_5586">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                                activeTemplate  </defs>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        placeholder="Search Templates"
                                        value={searchItems}
                                        onChange={e => searchTemplates(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="fb-template-library-card-list-wrapper">
                                {CardListOptions.map(tab => (
                                    <button
                                        key={tab.value}
                                        className={`fb-template-library-card-list-btn ${cardListType === tab.value ? 'active' : ''}`}
                                        onClick={() => setCardListType(tab.value)}
                                    >
                                        {tab.svg}
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

                    {displayedData && displayedData.length > 0 ? (
                        cardListType === 'list' ? (
                            <table className="fb-template-library-cards style-two">
                                <thead className="fb-template-library-card-header">
                                    <tr>
                                        <th className="fb-template-library-card-header-name">Name</th>
                                        {(activeCategory.templatelibrary === 'my-favourites' || activeCategory.templatelibrary === 'my-cloud') && (
                                            <>
                                                <th className="fb-template-library-card-header-date">Last Modified</th>
                                                <th className="fb-template-library-card-header-actions">Action</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody className="fb-template-library-card-body">
                                    {displayedData.map(item => (
                                        <TemplateList
                                            key={item.id}
                                            item={item}
                                            libraryData={libraryData}
                                            type={item.type}
                                            setLibraryData={setLibraryData}
                                            data={data}
                                            customColors={item.custom_colors || []}
                                            customGradientColors={item.custom_gradientColors || []}
                                            isLibrary={isLibrary}
                                            handleRemoveLibraryItem={handleRemoveLibraryItem}
                                            setIsVisible={setIsVisible}
                                            setActiveCategory={setActiveCategory}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="fb-template-library-cards">
                                {displayedData.map(item => (
                                    <TemplateGrid
                                        item={item}
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        imageUrl={item.image}
                                        is_premium={item.is_premium || false}
                                        tags={item.tags || []}
                                        templateType={item.type}
                                        categories={item.categories || []}
                                        colors={item.colors || []}
                                        customColors={item.customColors || []}
                                        gradientColors={item.gradientColors || []}
                                        customGradientColors={item.customGradientColors || []}
                                        typographies={item.typographies || []}
                                        customTypographies={item.customTypographies || []}
                                        dependencies={item.dependencies || []}
                                        activeTab={activeTab}
                                        setLibraryData={setLibraryData}
                                        isLogedIn={isLogedIn}
                                        data={data}
                                        setIsVisible={setIsVisible}
                                        isLibrary={isLibrary}
                                        handleRemoveLibraryItem={handleRemoveLibraryItem}
                                        setActiveCategory={setActiveCategory}
                                    />
                                ))}
                            </div>
                        )
                    ) : (
                        <h3>No template found</h3>
                    )}
                </>
            )}
        </div>
    );
};

export default LibraryContent;