/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { usePostDataMutation } from "./services/api";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";
import PluginUpgradeModal from "./plugin-upgrade";

const TemplateList = ({ item, libraryData, setLibraryData, data, setIsVisible, handleRemoveLibraryItem, setActiveCategory }) => {
    console.log(item)
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isPluginUpgrade, setIsPluginUpgrade] = useState(false);

    const [patternsData] = usePostDataMutation();

    useEffect(() => {
        setIsAuthenticated(false);
    }, []);

    const handleFullSiteImport = useCallback(() => {
        if (!isPluginUpgrade) setIsPluginUpgradeModalOpen(true);
        if (!isAuthenticated) setIsLoginModalOpen(true);
        if (!item.is_premium) setIsModalOpen(true);
    }, [isAuthenticated, isPluginUpgrade, item.is_premium]);

    const handleLoginSuccess = useCallback(() => {
        setIsLoginModalOpen(false);
        setIsAuthenticated(true);
        setIsModalOpen(true);
    }, []);

    const handleCloseLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
        setIsPluginUpgrade(false);
    }, []);

    const handleClosePluginUpgradeModal = useCallback(() => {
        setIsPluginUpgradeModalOpen(false);
        setIsPluginUpgrade(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const getTemplatesData = async (route, key, id) => {
        try {
            const response = await patternsData({
                endpoint: route,
                body: { [key]: id },
                headers: { "Content-Type": "application/json" },
            }).unwrap();
            return response;
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const importPattern = async (id) => {
        setIsLoading(true);
        const patterns = await getTemplatesData("import/pattern", "pattern_id", id);
        if (patterns) {
            const patternData = JSON.parse(patterns.data).content;
            const parsedBlocks = parse(patternData);
            const { insertBlocks, replaceBlocks } = dispatch("core/block-editor");
            const { getSelectedBlock, getBlocks, getBlockIndex } = select("core/block-editor");

            const selectedBlock = getSelectedBlock();
            if (selectedBlock) {
                const hasContent =
                    selectedBlock.innerBlocks?.length > 0 ||
                    (selectedBlock.attributes?.content &&
                        selectedBlock.attributes.content.trim() !== "");
                if (!hasContent) {
                    replaceBlocks(selectedBlock.clientId, parsedBlocks);
                } else {
                    const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                    insertBlocks(parsedBlocks, selectedBlockIndex + 1);
                }
            } else {
                const currentBlocks = getBlocks();
                insertBlocks(parsedBlocks, currentBlocks.length);
            }
        }
        setIsLoading(false);
        setIsVisible(false);
    };

    const importPage = async (id) => {
        setIsLoading(true);
        const page = await getTemplatesData("import/page", "page_id", id);
        if (page) {
            const pageData = JSON.parse(page.data).content;
            const parsedBlocks = parse(pageData);
            const { insertBlocks } = dispatch("core/block-editor");
            const { getBlocks } = select("core/block-editor");
            const currentBlocks = getBlocks();
            insertBlocks(parsedBlocks, currentBlocks.length);
        }
        setIsLoading(false);
        setIsVisible(false);
    };

    return (
        <>
            <tr
                className="fb-template-library-card style-two"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <td className="fb-template-library-card-content">
                    <img
                        src={`https://leech-better-moose.ngrok-free.app/storage/${item.image}`}
                        alt={item.title || "Template preview"}
                    />
                    <h4 className="fb-template-title">{item.title}</h4>
                </td>
                <td className="fb-template-library-card-date">
                    <span>{item.dateAndTime.month}</span>
                    <span> {item.dateAndTime.day},</span>
                    <span> {item.dateAndTime.year}</span>
                </td>
                <td className="fb-template-library-card-actions">
                    <button
                        className={`fb-template-action-btn import-btn ${isLoading ? "loading" : ""}`}
                        onClick={
                            !isLoading
                                ? () => {
                                    if (item.type === "patterns") {
                                        importPattern(item.id);
                                    } else if (item.type === "pages") {
                                        importPage(item.id);
                                    } else if (item.type === "sites") {
                                        handleFullSiteImport();
                                    }
                                }
                                : null
                        }
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span>Importing...</span>
                                <ClipLoader color="#fff" size={16} />
                            </>
                        ) : (
                            <span>Import</span>
                        )}
                    </button>

                    <button
                        className={`fb-template-action-btn option-btn ${isLoading ? "loading" : ""}`}
                        disabled={isLoading}
                        onClick={() => handleRemoveLibraryItem(item.id, item.type) }
                    >
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99316 10H10.0007" stroke="#0B0C0E" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.98682 15H9.99432" stroke="#0B0C0E" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.99976 5H10.0073" stroke="#0B0C0E" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6L6.1398 17.398C6.34428 19.4428 8.06494 21 10.12 21H13.8801C15.9351 21 17.6557 19.4428 17.8602 17.398L19 6M5 6H3M5 6H8M19 6H21M19 6H16M8 6L8.94721 4.10557C9.286 3.428 9.97852 3 10.7361 3L13.2639 3C14.0215 3 14.714 3.428 15.0528 4.10557L16 6M8 6H16M14 10.5V16.5M10 10.5V16.5" stroke="#0B0C0E" stroke-width="1.4" stroke-linecap="round" />
                        </svg>
                    </button>
                </td>
            </tr>

            {item.is_premium && isPluginUpgradeModalOpen && (
                <PluginUpgradeModal onClose={handleClosePluginUpgradeModal} />
            )}

            {isModalOpen && (
                <TemplateImport template={item} onClose={handleCloseModal} data={data} setActiveCategory={setActiveCategory}/>
            )}

            {isLoginModalOpen && (
                <LoginSignupModal
                    onClose={handleCloseLoginModal}
                    onSuccess={handleLoginSuccess}
                />
            )}
        </>
    );
};

export default TemplateList;
