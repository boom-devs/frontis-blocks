/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
import TemplateHeader from "./template-header";
import data from "./data.json";
import FsiGbTypography from "./global-settings/global-settings";
import SitePreview from "./sitePreview";

const FullSiteImportConfig = ({
    template,
    formData,
    onClose,
    onBack,
    onImport,
    isImporting,
    importProgress,
    currentStep,
    isSidebarCollapsed,
    setIsSidebarCollapsed
}) => {

    const [activeTab, setActiveTab] = useState('patterns');
    const handleSidebarToggle = useCallback(() => {
        setIsSidebarCollapsed(prev => !prev);
    }, []);
    return (
        <div className="fb-full-site-import-modal">
            <div className="fb-full-site-import-overlay" onClick={onClose}></div>
            <div className="fb-full-site-import-container">
                {/* Header */}
                <TemplateHeader
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    data={data}
                    onClose={onClose}
                />

                {/* Content */}
                <div className={`fb-full-site-import-content ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                    {/* Left Panel - Configuration Options */}
                    <div className={`fb-import-form-panel ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                        <div className="fb-form-section">
                            <span className="fb-template-label">Template Name:</span>
                            <h6 className="fb-template-title">{template?.title || 'Renovate - Home Decor Website Template'}</h6>
                            <FsiGbTypography/>
                        </div>

                        <div className="fb-import-actions">
                            {isImporting ? (
                                <div className="fb-import-progress">
                                    <div className="fb-progress-info">
                                        <ClipLoader color="#3B82F6" size={20} />
                                        <span className="fb-progress-text">{currentStep}</span>
                                    </div>
                                    <div className="fb-progress-bar">
                                        <div
                                            className="fb-progress-fill"
                                            style={{ width: `${importProgress}%` }}
                                        ></div>
                                    </div>
                                    <span className="fb-progress-percentage">{Math.round(importProgress)}%</span>
                                </div>
                            ) : (
                                <div className="fb-import-step-btn-wrapper">
                                    <button
                                        className="fb-import-btn next"
                                        onClick={onImport}
                                    >
                                        Import Now
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <button
                                        className="fb-import-btn back"
                                        onClick={onBack}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Back
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Panel - Preview */}
                    {/* <div className="fb-import-preview-panel">
						<SitePreview />
                    </div> */}
                    
                    <div 
                        className={`fb-import-sidebar-collapse ${isSidebarCollapsed ? 'collapsed' : ''}`}
                        onClick={handleSidebarToggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z" fill="white" />
                            <path d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z" stroke="#E1E3E8" />
                            <path d="M19.1875 21.375L14.8125 17L19.1875 12.625" stroke="#555E72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullSiteImportConfig;
