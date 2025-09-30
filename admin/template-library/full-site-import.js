/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useCallback, useEffect } from "@wordpress/element";
// import data from "./data.json";
import TemplateHeader from "./template-header";
import FullSiteImportSettingConfig from "./components/FullSiteImportSettingConfig";
import FullSiteImportSetting from "./components/FullSiteImportSetting.js";
import FullSiteImportContent from "./components/FullSiteImportContent.js";

const FullSiteImport = ({ 
    template,
    onClose,
    onBack,
    data,
    setIsLoginModalOpen,
    isLoginModalOpen,
}) => {

    const [formData, setFormData] = useState({
        siteName: (window.frontisBlocksAdmin && window.frontisBlocksAdmin.siteName) || '',
        siteTagline: '',
        logo: { id: '', url: '', alt: '' },
        logoUrl: '',
        importContent: true,
        importCustomizer: true,
        importWidgets: true,
        importOptions: true
    });
    
    const [activeTab, setActiveTab] = useState(template.activeTab || 'pattern');
    const [showConfigStep, setShowConfigStep] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleNext = useCallback(() => {
        if (formData.siteName.trim()) {
            setShowConfigStep(true);
        }
    }, [formData.siteName]);

    const handleBackClick = useCallback(() => {
        if (showConfigStep) {
            setShowConfigStep(false);
        } else {
            if (onBack) {
                onBack();
            }
        }
    }, [showConfigStep, onBack]);

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
                    disableMenu={true}
                    setIsLoginModalOpen={setIsLoginModalOpen}
                />

                {/* Content */}
                <div className={`fb-full-site-import-content ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>

                    {/* Left Panel - Sidebar */}
                    {showConfigStep ? (
                        <FullSiteImportSettingConfig
                            template={template}
                            onBack={() => setShowConfigStep(false)}
                            isSidebarCollapsed={isSidebarCollapsed}
                            formData={formData}
                            onClose={onClose}
                        />
                    ) : (
                        <FullSiteImportSetting
                            template={template}
                            formData={formData}
                            setFormData={setFormData}
                            handleInputChange={handleInputChange}
                            handleNext={handleNext}
                            handleBackClick={handleBackClick}
                            isSidebarCollapsed={isSidebarCollapsed}
                        />
                    )}

                    {/* Right Panel - Preview */}
                    <FullSiteImportContent
                        template={template}
                    />
                    {/* Collapse Button */}
                    <div
                        className={`fb-import-sidebar-collapse ${isSidebarCollapsed ? 'collapsed' : ''}`}
                        onClick={handleSidebarToggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z" fill="white" />
                            <path d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z" stroke="#E1E3E8" />
                            <path
                                d="M19.1875 21.375L14.8125 17L19.1875 12.625"
                                stroke="#555E72"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className={isSidebarCollapsed ? 'rotated' : ''}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullSiteImport;
