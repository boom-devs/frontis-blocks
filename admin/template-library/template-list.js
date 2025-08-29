/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";
import PluginUpgradeModal from "./plugin-upgrade";

const TemplateList = ({ item, libraryData, setLibraryData, data, cardListType }) => {
    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isPluginUpgrade, setIsPluginUpgrade] = useState(false);
    console.log(cardListType);

    useEffect(() => {
        setIsAuthenticated(false);
    }, []);

    const handleFullSiteImport = useCallback(() => {
        if (!isPluginUpgrade) {
            setIsPluginUpgradeModalOpen(true);
        }
        if (!isAuthenticated) {
            setIsLoginModalOpen(true);
        }
        if (!item.is_premium) {
            setIsModalOpen(true);
        }
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

    const handleDemo = useCallback(() => {
        console.log("Demo clicked for:", item.id);
    }, [item.id]);

    return (
        <>
            <tr
                className="fb-template-library-card style-two"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <td className="fb-template-library-card-content">
                    <img src={`https://leech-better-moose.ngrok-free.app/storage/${item.image}`} alt={item.title || "Template preview"} />
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
                        onClick={!isLoading ? handleFullSiteImport : null}
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
                    >
                        {isLoading ? (
                            <>
                                <span>Saving...</span>
                                <ClipLoader color="#fff" size={16} />
                            </>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99316 10H10.0007" stroke="#0B0C0E" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.98682 15H9.99432" stroke="#0B0C0E" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.99976 5H10.0073" stroke="#0B0C0E" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </button>
                </td>
            </tr>
            {item.is_premium && isPluginUpgradeModalOpen && (
                <PluginUpgradeModal
                    onClose={handleClosePluginUpgradeModal}
                />
            )}

            {isModalOpen && (
                <TemplateImport
                    template={item}
                    onClose={handleCloseModal}
                    data={data}
                />
            )}
        </>
    );
};

export default TemplateList;