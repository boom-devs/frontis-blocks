/**
 * WordPress dependencies
 */
import { useState, useCallback, useEffect } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
import TemplateHeader from "./template-header";
import FullSiteImport from "./full-site-import";
import { ToastContainer } from "react-toastify";

const TemplateImport = ({ 
    template,
    onClose,
    data,
    setActiveCategory,
    setIsLoginModalOpen,
    isLoginModalOpen,
}) => {
    const [isImporting, setIsImporting] = useState(false);
    const [activeTab, setActiveTab] = useState(template.activeTab || 'pattern');
    const [showFullSiteImport, setShowFullSiteImport] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));
    
    const handleFullSiteImport = useCallback(async () => {
        setShowFullSiteImport(true);
    }, []);

    const handleLiveDemo = useCallback(() => {
        if (template.preview_url && template.preview_url.trim() !== '') {
            window.open(template.preview_url, '_blank');
        } else {
            console.log('No preview URL available');
        }
    }, [template.preview_url]);

    const handleDownload = useCallback(() => {
        console.log('Download clicked for:', template?.id);
    }, [template?.id]);

    if (!template) {
        return null;
    }

    // Map category IDs to names
    const categoryNames = template.categories?.map(category => {
        return category;
    })
        .filter(name => name)
        .join(', ');

    if (showFullSiteImport && userData?.email) {
        return (
            <>
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

                <FullSiteImport
                    data={data}
                    template={template}
                    onClose={onClose}
                    onBack={() => setShowFullSiteImport(false)}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                    isLoginModalOpen={isLoginModalOpen}
                />
            </>
        );
    }

    return (
        <div className="fb-template-import-modal">
            <div className="fb-template-import-overlay" onClick={onClose}></div>
            <div className="fb-template-import-container">
                {/* Header */}
                <TemplateHeader
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    data={data}
                    onClose={onClose}
                    setActiveCategory={setActiveCategory}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                    disableMenu={true}
                />

                {/* Content */}
                <div className="fb-template-import-content">
                    {/* Left Content Area */}
                    <div className="fb-template-import-main">
                        <div className="fb-template-preview">
                            <img
                                src={`${FB_TLibrary.portalApi}/storage/${template.image}`}
                                alt={template.title}
                                className="fb-template-preview-image"
                            />
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="fb-template-import-sidebar">
                        <div className="fb-template-info">
                            <div className="fb-template-category">
                                <span className="fb-category-label">Category: </span>
                                <div className="fb-category-tags">
                                    <span className="fb-category-tag">{categoryNames}</span>
                                </div>
                            </div>

                            <h2 className="fb-template-title">
                                {template.title || 'Renovate - Home Decor Website Template For Gutenberg'}
                            </h2>

                            <p className="fb-template-description">
                                {template.description || 'Create your dream website in minutes with Frontis! Forget endless theme searches. This high-performance Theme maximizes Gutenberg’s potential, delivering fast, modern, and adaptable designs.'}
                            </p>
                        </div>

                        <div className="fb-template-actions">
                            <button
                                className={`fb-full-site-import-btn ${isImporting ? 'loading' : ''}`}
                                onClick={handleFullSiteImport}
                                disabled={isImporting}
                            >
                                {isImporting ? (
                                    <>
                                        <ClipLoader color="#fff" size={16} />
                                        <span>Importing...</span>
                                    </>
                                ) : (
                                    <span>Full Site Import</span>
                                )}
                            </button>
                            <button className="fb-live-demo-btn" onClick={handleLiveDemo}>
                                <span>Live Demo</span>
                            </button>
                        </div>
                        <div className="fb-import-info">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM9 13.3125C9.31065 13.3125 9.5625 13.0606 9.5625 12.75V8.25C9.5625 7.93935 9.31065 7.6875 9 7.6875C8.68935 7.6875 8.4375 7.93935 8.4375 8.25V12.75C8.4375 13.0606 8.68935 13.3125 9 13.3125ZM9 5.25C9.41423 5.25 9.75 5.58579 9.75 6C9.75 6.41421 9.41423 6.75 9 6.75C8.58577 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58577 5.25 9 5.25Z" fill="#8891A5" />
                            </svg>
                            <span><span className="blue-color">Learn more</span> about full site import</span>
                        </div>
                        {template.dependencies.length > 0 &&
                            <div className="fb-template-dependency">
                                <h5 className="fb-dependency-label">Dependencies</h5>
                                <ul className="fb-dependency-list">
                                    {template.dependencies?.map((item) => (
                                        <li className="fb-dependency-item" key={item.name}>
                                            <span className="fb-dependency-name">{item.name}</span>
                                            <span className="fb-dependency-version"><span className="fb-dependency-version-label">Version:</span> {item.version}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateImport;