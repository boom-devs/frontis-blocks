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
import TemplateLoader from "./template-loader";
import { usePostDataMutation } from "./services/api";
import { select, dispatch } from '@wordpress/data';
import { createBlock, parse, rawHandler } from '@wordpress/blocks';

const TemplateCard = ({ 
    imageUrl, 
    title, 
    is_premium = false, 
    id, 
    tags = [], 
    dependencies = [], 
    colors,
    gradientColors,
    typographies, 
    customTypographies,
    categories, 
    activeTab, 
    setLibraryData, 
    isLogedIn, 
    data, 
    setIsVisible 
}) => {
    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPluginUpgrade, setIsPluginUpgrade] = useState(false);
    const [freeTemplate, setFreeTemplate] = useState(false);
    const handleFullSiteImport = useCallback(() => {
        if (!isPluginUpgrade) {
            setIsPluginUpgradeModalOpen(true);
        }
        // if (!is_premium && isLogedIn) {
            setIsModalOpen(true);
        // }
    }, [is_premium, isLogedIn, isPluginUpgrade]);

    const handelPatterns = useCallback(() => {
        setFreeTemplate(true);
    })

    const handleClosePluginUpgradeModal = useCallback(() => {
        setIsPluginUpgradeModalOpen(false);
        setIsPluginUpgrade(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleDemo = useCallback(() => {
        console.log("Demo clicked for:", id);
    }, [id]);

    const currentDay = new Date().toLocaleDateString('en-US', { day: 'numeric' });
    const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
    const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentDateAndTime = { day: currentDay, month: currentMonth, year: currentYear, time: currentTime };

    const templateData = {
        id,
        title,
        image: imageUrl,
        is_premium,
        categories,
        author: 'Template Author',
        activeTab,
        colors,
        gradientColors,
        typographies,
        customTypographies,
        dependencies,
        dateAndTime: currentDateAndTime,
    };

    const handleSaveLibrary = useCallback(() => {


        setLibraryData(prevData => {
            const alreadyExists = prevData.some(item => item.id === templateData.id);
            if (alreadyExists) return prevData;
            return [...prevData, templateData];
        });
        toast.success(__('Template saved to library', 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        alert('Template saved to library');
    }, [templateData, setLibraryData]);

    const fetImportData = () => {

    }

    const [patternsData, { data: patternsResponse, error, isLoading: dataLoading }] = usePostDataMutation();


    const getTemplatesData = async (path, key , id ) => {
        console.log('pattern id', id);
        try {
            const response = await patternsData({
                endpoint: path,
                body: {
                    [key] : id
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }).unwrap();
            console.log(key, response);
            return response;
        } catch (err) {
            console.error('Error:', err);
            console.error('Status:', err.status);
            console.error('Data:', err.data);
            if (err.status === 500) {
                console.error('Server error. Check the API endpoint and server logs.');
            }
        }
    };

    const importPattern = async (id) => {
        setIsLoading(true);

        const patterns = await getTemplatesData("import/pattern", 'pattern_id' ,id);

        if (patterns) {
            const patternData = JSON.parse(patterns.data).content;
            const parsedBlocks = parse(patternData);

            // Get block editor utilities
            const { insertBlocks, replaceBlocks } = dispatch('core/block-editor');
            const { getSelectedBlock, getBlocks, getBlockIndex } = select('core/block-editor');

            // Get the currently selected block
            const selectedBlock = getSelectedBlock();

            if (selectedBlock) {
                // Check if the selected block has content (e.g., innerBlocks or content attribute)
                const hasContent = selectedBlock.innerBlocks?.length > 0 ||
                    (selectedBlock.attributes?.content && selectedBlock.attributes.content.trim() !== '');

                if (!hasContent) {
                    // If the selected block is empty, replace it with the parsed blocks
                    replaceBlocks(selectedBlock.clientId, parsedBlocks);
                } else {
                    // If the selected block has content, insert parsed blocks after it
                    const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                    insertBlocks(parsedBlocks, selectedBlockIndex + 1);
                }
            } else {
                // If no block is selected, insert at the end of the current blocks
                const currentBlocks = getBlocks();
                insertBlocks(parsedBlocks, currentBlocks.length);
            }
        }

        setIsLoading(false);
        setIsVisible(false);
    };
    const importPage = async (id) => {
        setIsLoading(true);

        const page = await getTemplatesData("import/page", 'page_id',id);

        if (page) {
            const pageData = JSON.parse(page.data).content;
            const parsedBlocks = parse(pageData);

            // Get block editor utilities
            const { insertBlocks, replaceBlocks } = dispatch('core/block-editor');
            const { getSelectedBlock, getBlocks, getBlockIndex } = select('core/block-editor');

            // Get the currently selected block
            const selectedBlock = getSelectedBlock();

            if (selectedBlock) {
                const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                insertBlocks(parsedBlocks, selectedBlockIndex + 1);
            } else {
                // If no block is selected, insert at the end of the current blocks
                const currentBlocks = getBlocks();
                insertBlocks(parsedBlocks, currentBlocks.length);
            }
        }

        setIsLoading(false);
        setIsVisible(false);
    };

    // Function to insert blocks in chunks
    const insertBlocksInChunks = async (chunks, selectedBlock) => {
        const { insertBlocks, replaceBlocks } = wp.data.dispatch('core/block-editor');
            const { getBlocks, getBlockIndex } = wp.data.select('core/block-editor');
        if (selectedBlock) {
            const hasContent = selectedBlock.innerBlocks?.length > 0 ||
                (selectedBlock.attributes?.content && selectedBlock.attributes.content.trim() !== '');

            if (!hasContent) {
                // Replace the empty selected block with the first chunk
                replaceBlocks(selectedBlock.clientId, chunks[0]);

                // Insert remaining chunks after the selected block
                const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                for (let i = 1; i < chunks.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to prevent UI freeze
                    insertBlocks(chunks[i], selectedBlockIndex + i);
                }
            } else {
                // Insert all chunks after the selected block
                const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                for (let i = 0; i < chunks.length; i++) {
                    await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to prevent UI freeze
                    insertBlocks(chunks[i], selectedBlockIndex + i + 1);
                }
            }
        } else {
            // Insert all chunks at the end of the current blocks
            const currentBlocks = getBlocks();
            for (let i = 0; i < chunks.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 100)); // Small delay to prevent UI freeze
                insertBlocks(chunks[i], currentBlocks.length + i);
            }
        }
    };

    return (
        <>
            <div
                className="fb-template-library-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="fb-template-library-card-img">
                    <img src={`https://leech-better-moose.ngrok-free.app/storage/${imageUrl}`} alt={title || "Template preview"} />
                    <div className={`fb-template-badge ${is_premium ? "pro" : "free"}`}>
                        {is_premium ? "PRO" : "FREE"}
                    </div>
                    {isHovered && (
                        <div className="fb-template-overlay">
                            <div className="fb-template-overlay-content">
                                <button className="fb-demo-btn" onClick={handleDemo}>
                                    <span>Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M8.32425 2.25C5.58753 2.25493 4.15442 2.32213 3.23856 3.23814C2.25018 4.22667 2.25018 5.81769 2.25018 8.99968C2.25018 12.1817 2.25018 13.7728 3.23856 14.7613C4.22692 15.7498 5.81769 15.7498 8.99925 15.7498C12.1807 15.7498 13.7715 15.7498 14.7599 14.7613C15.6757 13.8453 15.7429 12.4119 15.7478 9.67476" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.4169 2.62224L8.28644 9.7941M15.4169 2.62224C15.0464 2.25128 12.5506 2.28586 12.023 2.29337M15.4169 2.62224C15.7874 2.99321 15.7528 5.4922 15.7453 6.02051" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="fb-template-library-card-content">
                    <div className="fb-template-library-card-content-top">
                        <div className="fb-template-tags">
                            {tags?.length > 0 && tags.map((tag, index) => (
                                <span key={index}>
                                    {tag}
                                    {index < tags.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="fb-template-library-card-content-bottom">
                        <h3 className="fb-template-title">{title}</h3>
                    </div>
                </div>
                <div className="fb-template-actions">
                    <button
                        className={`fb-import-btn ${isLoading ? "loading" : ""}`}
                        onClick={() => {
                            if (activeTab === 'patterns') {
                                importPattern(id);
                            } else if (activeTab === 'pages') {
                                importPage(id);
                            } else if (activeTab === 'sites') {
                                handleFullSiteImport()
                            }
                        }}

                        disabled={isLoading}
                    >
                        <span>Import</span>
                    </button>

                    <button
                        className={`fb-template-save-my-cloud ${isLoading ? "loading" : ""}`}
                        onClick={!isLoading ? handleSaveLibrary : null}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span>Saving...</span>
                                <ClipLoader color="#fff" size={16} />
                            </>
                        ) : (
                            <span>Save Library</span>
                        )}
                    </button>
                </div>
            </div>

            {is_premium && isPluginUpgradeModalOpen && (
                <PluginUpgradeModal
                    onClose={handleClosePluginUpgradeModal}
                />
            )}

            {isModalOpen && (
                <TemplateImport
                    template={templateData}
                    onClose={handleCloseModal}
                    data={data}
                />
            )}

            {isLoading && (
                <TemplateLoader />)
            }

        </>
    );
};

const TemplateContent = ({ activeTab, activeCategory, data, libraryData, setLibraryData, isProTemplate, TagTabsOptions, activeTagTab, setActiveTagTab, setIsVisible }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const [isLogedIn, setIsLogedIn] = useState(false);

    useEffect(() => {
        setIsLogedIn(true);
    }, []);
    // console.log('data', data);
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
                items = items.filter(item =>
                    item.categories?.includes(activeCategory[activeTab])
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
                                            <clipPath id="clip0_13116_5586">
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
                <div className="fb-template-library-cards">
                    {filteredTemplates.map(template => (
                        <TemplateCard
                            key={template.id}
                            id={template.id}
                            title={template.title}
                            imageUrl={template.image}
                            is_premium={template.is_premium || false}
                            tags={template.tags || []}
                            categories={template.categories || []}
                            colors={template.colors || []}
                            gradientColors={template.gradientColors || []}
                            typographies={template.typographies || []}
                            customTypographies={template.customTypographies || []}
                            dependencies={template.dependencies || []}
                            activeTab={activeTab}
                            setLibraryData={setLibraryData}
                            isLogedIn={isLogedIn}
                            data={data}
                            setIsVisible={setIsVisible}
                        />
                    ))}
                </div>
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