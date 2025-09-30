/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { select, dispatch } from "@wordpress/data";
import { parse } from "@wordpress/blocks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import { usePostDataMutation } from "./services/laravelapi";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";
import PluginUpgradeModal from "./plugin-upgrade";
import { importBlocksFromApi } from "./components/importBlocks";

const TemplateList = ({ 
    item = '',
    activeTab, 
    data, 
    setIsVisible, 
    handleRemoveLibraryItem, 
    setActiveCategory,
    isImporting,
    setIsImporting,

    libraryData,
    setLibraryData,
    isLibrary,
    setIsLoginModalOpen,
    isLoginModalOpen,
}) => {

    const userData = JSON.parse(localStorage.getItem("userData"));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentDay = new Date().toLocaleDateString('en-US', { day: 'numeric' });
    const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long' });
    const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const currentDateAndTime = { day: currentDay, month: currentMonth, year: currentYear, time: currentTime };

    const [templateData, setTemplateData] = useState({
        activeTab,
        type: item.item_type,
        id: item.id,
        title: item.title,
        image: item.image,
        is_premium: item.is_premium || false,
        categories: item.categories || [],
        preview_url: item.preview_url || '',
        colors: item.colors || [],
        customColors: item.custom_colors || [],
        gradientColors: item.color_gradients || [],
        customGradientColors: item.custom_gradientColors || [],
        typographies: item.typographies || [],
        customTypographies: item.custom_typographies || [],
        dependencies: item.dependencies || [],
        dateAndTime: currentDateAndTime,
    });

    console.log(item);


    const handleFullSiteImport = useCallback(async () => {
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);


    const [patternsData] = usePostDataMutation();
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

            return response;
        } catch (err) {
            console.error("Error:", err);
        }
    };

    const verifySubscription = async () => {
        const apiBase = `${FB_TLibrary.wordpressSyncApi}/wp-json`;
        const body = {
            license_key: FB_TLibrary.activationKey,
            domain_name: window.location.origin,
        };

        const response = await fetch(`${apiBase}/frontis-sync/v1/verify-subscription`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        const responseData = await response.json();

        return responseData;
    }
    

    const importPattern = async (id) => {
        setIsImporting(true);
    
        // Fetch pattern from API
        const pattern = await getTemplatesData("import/pattern", "pattern_id", id);
        
        if (pattern.data) {
            try {
                const patternData = JSON.parse(pattern.data);
    
                // Safe importer call
                await importBlocksFromApi(patternData);
    
                toast.success("Pattern imported successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                });
    
            } catch (err) {
                console.error("Import error:", err);
                toast.error("Failed to import pattern", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    
        setIsImporting(false);
        setIsVisible(false);
    };
    

    const importPage = async (id) => {
        setIsImporting(true);
    
        try {
            const page = await getTemplatesData("import/page", "page_id", id);
    
            if (page) {
                const pageData = JSON.parse(page.data).content;
    
                await importBlocksFromApi({ content: pageData });
            }
        } catch (error) {
            console.error("Page import failed:", error);
            toast.error("Failed to import page!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    
        setIsImporting(false);
        setIsVisible(false);
    };

    return (
        <>
            <tr
                className="fb-template-library-card style-two"
            >
                <td className="fb-template-library-card-content">
                    <img
                        src={`${FB_TLibrary.portalApi}/storage/${item.image}`}
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
                        className={`fb-template-action-btn import-btn ${isImporting ? "loading" : ""}`}
                        onClick={
                            !isImporting
                                ? () => {
                                    if (item.item_type === "patterns") {
                                        importPattern(item.id);
                                    } else if (item.item_type === "pages") {
                                        importPage(item.id);
                                    } else if (item.item_type === "sites") {
                                        handleFullSiteImport();
                                    }
                                }
                                : null
                        }
                        disabled={isImporting}
                    >
                        <span>Import</span>
                    </button>

                    <button
                        className={`fb-template-action-btn option-btn ${isImporting ? "loading" : ""}`}
                        disabled={isImporting}
                        onClick={() => handleRemoveLibraryItem(item.id, item.item_type) }
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 6L6.1398 17.398C6.34428 19.4428 8.06494 21 10.12 21H13.8801C15.9351 21 17.6557 19.4428 17.8602 17.398L19 6M5 6H3M5 6H8M19 6H21M19 6H16M8 6L8.94721 4.10557C9.286 3.428 9.97852 3 10.7361 3L13.2639 3C14.0215 3 14.714 3.428 15.0528 4.10557L16 6M8 6H16M14 10.5V16.5M10 10.5V16.5" stroke="#0B0C0E" stroke-width="1.4" stroke-linecap="round" />
                        </svg>
                    </button>
                </td>
            </tr>
            {isModalOpen && (
                <TemplateImport
                    template={templateData}
                    onClose={handleCloseModal}
                    data={data}
                    setActiveCategory={setActiveCategory}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                    isLoginModalOpen={isLoginModalOpen}
                />
            )}
        </>
    );
};

export default TemplateList;
