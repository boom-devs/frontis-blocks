/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import TemplateImport from "./template-import";
import PluginUpgradeModal from "./plugin-upgrade";
import { TemplateLoader } from "./template-loader";
import { usePostDataMutation } from "./services/api";
import { select, dispatch } from '@wordpress/data';
import { createBlock, parse, rawHandler } from '@wordpress/blocks';
import { useState, useEffect, useCallback } from "@wordpress/element";

const TemplateGrid = ({
    item = '',
    imageUrl,
    title,
    is_premium = false,
    id,
    tags = [],
    dependencies = [],
    colors,
    templateType,
    gradientColors,
    customColors,
    customGradientColors,
    typographies,
    customTypographies,
    categories,
    activeTab,
    setLibraryData,
    isLogedIn,
    data,
    setIsVisible,
    isLibrary = false,
    handleRemoveLibraryItem,
    savedItems = [],
    setSavedItems = [],
    alreadySaved = () => { },
    setActiveCategory

    // setIsPladmin
}) => {

    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isPluginUpgrade, setIsPluginUpgrade] = useState(false);
    const [freeTemplate, setFreeTemplate] = useState(false);

    const isAlreadySaved = alreadySaved(savedItems, id, activeTab)

    const handleFullSiteImport = useCallback(() => {
        // if (!isPluginUpgrade) {
        //     setIsPladmin / template - library / scss / _main - content.scssuginUpgradeModalOpen(true);
        // }
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
        customColors,
        gradientColors,
        customGradientColors,
        typographies,
        customTypographies,
        dependencies,
        dateAndTime: currentDateAndTime,
        type: templateType
    };

    const handleSaveLibrary = useCallback(() => {
        if (isAlreadySaved) return;

        setLibraryData(prevData => [...prevData, templateData]);
        setSavedItems(prev => [...prev, templateData]);

        toast.success(__(`Template saved to library`, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }, [isAlreadySaved, templateData, setLibraryData, setSavedItems]);

    const fetImportData = () => {

    }

    const [patternsData, { data: patternsResponse, error, isLoading: dataLoading }] = usePostDataMutation();


    const getTemplatesData = async (route, key, id) => {
        try {
            const response = await patternsData({
                endpoint: route,
                body: {
                    [key]: id
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

        const patterns = await getTemplatesData("import/pattern", 'pattern_id', id);

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

        const page = await getTemplatesData("import/page", 'page_id', id);

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
                        {item && (
                            <div className="fb-template-library-card-date">
                                <span>
                                    Last Modified: {item.dateAndTime.month} {item.dateAndTime.day}, {item.dateAndTime.year}
                                </span>
                            </div>
                        )}

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
                            } else if (activeTab === 'templatelibrary') {
                                // console.log(templateData);
                                if (templateData.type === 'patterns') {
                                    importPattern(id);
                                    // console.log('patterns');

                                } else if (templateData.type === 'pages') {
                                    // console.log('pages');
                                    importPage(id);
                                } else if (templateData.type === 'sites') {
                                    // console.log('sites');
                                    handleFullSiteImport()
                                }
                            }
                        }}

                        disabled={isLoading}
                    >
                        <span>Import</span>
                    </button>
                    <button
                        className={`fb-template-save-my-cloud ${isLoading ? "loading" : ""}`}
                        onClick={() => {
                            if (isLoading || isAlreadySaved) return;
                            isLibrary ? handleRemoveLibraryItem(id, templateType) : handleSaveLibrary();
                        }}
                        disabled={isLoading || isAlreadySaved}
                    >
                        {isLoading ? (
                            <>
                                <span>Saving...</span>
                                <ClipLoader color="#fff" size={16} />
                            </>
                        ) : isAlreadySaved ? (
                            <span>Saved</span>
                        ) : isLibrary ? (
                            <span>Remove</span>
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
                    setActiveCategory={setActiveCategory}

                />
            )}

            {isLoading && (
                <TemplateLoader />)
            }


        </>
    );
};

export default TemplateGrid;