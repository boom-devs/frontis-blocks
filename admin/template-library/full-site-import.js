/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState, useCallback, useEffect } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
// import data from "./data.json";
import TemplateHeader from "./template-header";
import FullSiteImportSettingConfig from "./components/FullSiteImportSettingConfig";
import FullSiteImportSetting from "./components/FullSiteImportSetting.js";
import FullSiteImportContent from "./components/FullSiteImportContent.js";
import { toast, ToastContainer } from "react-toastify";

const FullSiteImport = ({ template, onClose, onBack, data }) => {
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
    const [isImporting, setIsImporting] = useState(false);
    const [importProgress, setImportProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState('');
    const [activeTab, setActiveTab] = useState('patterns');
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

    const handleUpdateState = useCallback(async () => {
        setIsLoading(true);
        const localStorageKeys = [
            {
                key: "fb_global_colors",
                setter: setGlobalColors,
                defaultValue: themeColors,
                api: "fb_get_global_colors",
            },
            {
                key: "fb_custom_colors",
                setter: setCustomColors,
                defaultValue: [],
                api: "fb_get_custom_colors",
            },
            {
                key: "fb_gradient_colors",
                setter: setGradientColors,
                defaultValue: frontisBlocksAdmin?.gradients_colors,
                api: "fb_get_gradient_colors",
            },
            {
                key: "fb_custom_gradient_colors",
                setter: setCustomGradientColors,
                defaultValue: [],
                api: "fb_get_custom_gradient_colors",
            },
            {
                key: "fb_typography",
                setter: setTypography,
                defaultValue: defaultTypography,
                api: "fb_get_typography",
            },
            {
                key: "fb_custom_typography",
                setter: setCustomTypography,
                defaultValue: [],
                api: "fb_get_custom_typography",
            },
            {
                key: "fb_fontfamilies",
                setter: setFontFamilies,
                defaultValue: [],
                api: "fb_get_fontfamilies",
                postProcess: getAllFontFamilies,
            },
            {
                key: "fb_globaltypo",
                setter: null,
                defaultValue: null,
                api: "fb_get_globaltypo",
                postProcess: (data) => generateCSSVariables(data, deviceType),
            },
        ];

        try {
            for (const {
                key,
                setter,
                defaultValue,
                api,
                postProcess,
            } of localStorageKeys) {
                if (key === "fb_global_colors") {
                    setter(globalColors ?? themeColors);
                    localStorage.setItem(key, JSON.stringify(globalColors ?? themeColors));
                    if (postProcess) setTimeout(() => postProcess(globalColors ?? themeColors), 1000);
                } else {
                    const res = await getGlobalStyle(api);
                    const data = res.success ? res.data : defaultValue;
                    if (setter) setter(data);
                    localStorage.setItem(key, JSON.stringify(data));
                    if (postProcess) setTimeout(() => postProcess(data), 1000);
                }
            }
        } catch (error) {
            console.error("Error fetching global settings:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleImport = useCallback(async () => {
        setIsImporting(true);
        setImportProgress(0);

        const steps = [ 
            'Preparing import...',
            'Importing content...',
            'Setting up customizer...',
            'Configuring widgets...',
            'Finalizing setup...'
        ];

        try {
            for (let i = 0; i < steps.length; i++) {
                setCurrentStep(steps[i]);
                setImportProgress(((i + 1) / steps.length) * 100);
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            console.log('Full site import completed:', {
                template: template,
                formData
            });

            toast.success(__('Site imported successfully!', 'frontis-blocks'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            onClose();
        } catch (error) {
            console.error('Import failed:', error);
            toast.error(__('Import failed. Please try again.', 'frontis-blocks'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setIsImporting(false);
            setImportProgress(0);
            setCurrentStep('');
        }
    }, [template?.id, formData, onClose]);

    // console.log(template);

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

                    {/* Left Panel - Sidebar */}
                    {showConfigStep ? (
                        <FullSiteImportSettingConfig
                            template={template}
                            onBack={() => setShowConfigStep(false)}
                            onImport={handleImport}
                            isImporting={isImporting}
                            importProgress={importProgress}
                            currentStep={currentStep}
                            isSidebarCollapsed={isSidebarCollapsed}
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
