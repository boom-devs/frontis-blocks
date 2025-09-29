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

const TemplateList = ({ 
    item, 
    libraryData, 
    setLibraryData, 
    data, 
    setIsVisible, 
    handleRemoveLibraryItem, 
    type, 
    setActiveCategory,
    isImporting,
    setIsImporting,
}) => {

    const userData = localStorage.getItem('userData');

    useEffect(() => {
        setIsAuthenticated(false);
    }, []);

    const handleFullSiteImport = useCallback(async (id) => {
        setIsImporting(true);

        if (isProPlugin && is_premium) {
            const verified = await verifySubscription();            

            if(verified.status) {
                console.log('Now import the pro pattern.');
                setIsImporting(false);
                setIsVisible(false);
            } else {
                toast(verified.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: "light"
                });

                setIsModalOpen(true);
                setIsImporting(false);
            }
        } else {
            setIsModalOpen(true);
            setIsImporting(false);
        }
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleDemo = useCallback(() => {
        console.log("Demo clicked for:", id);
    }, [id]);

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

        console.log(responseData);

        return responseData;
    }
    

    const importPattern = async (id) => {
        if (!userData) {
            setIsLoginModalOpen(true);
            return;
        }
        if (is_premium === true && !isProPlugin) {
            setIsPluginUpgradeModalOpen(true);
            return;
        }
    
        setIsImporting(true);
    
        if (is_premium) {
            const verified = await verifySubscription();
    
            if (verified.status) {
                console.log("Now import the pro pattern.");
                setIsImporting(false);
                setIsVisible(false);
            } else {
                toast(verified.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    newestOnTop: false,
                    closeOnClick: true,
                    rtl: false,
                    pauseOnFocusLoss: true,
                    draggable: true,
                    pauseOnHover: true,
                    theme: "light",
                });
    
                setIsImporting(false);
                return;
            }
        } else {
            console.log("Free pattern will be imported directly.");
        }
    
        // 🔹 Fetch pattern from API
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
        if (!userData) {
            setIsLoginModalOpen(true);
            return;
        }
    
        if (is_premium === true && !isProPlugin) {
            setIsPluginUpgradeModalOpen(true);
            return;
        }
    
        setIsImporting(true);
    
        if (is_premium) {
            const verified = await verifySubscription();
            if (!verified.status) {
                toast(verified.message, { position: "top-right", autoClose: 3000 });
                setIsImporting(false);
                return;
            }
        }
    
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
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                        onClick={() => handleRemoveLibraryItem(item.id, type) }
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
        </>
    );
};

export default TemplateList;
