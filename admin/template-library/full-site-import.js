/**
 * WordPress dependencies
 */
import { useState, useCallback, useEffect } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
import data from "./data.json";
import TemplateHeader from "./template-header";
import FullSiteImportConfig from "./full-site-import-config";
import SitePreview from "./sitePreview";

const FullSiteImport = ({ template, onClose, onBack }) => {
    const [formData, setFormData] = useState({
        siteName: (window.frontisBlocksAdmin && window.frontisBlocksAdmin.siteName) || '',
        siteTagline: '',
        logo: null,
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
    const [logoPreview, setLogoPreview] = useState(null);

    const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleLogoUpload = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            const validTypes = [
                'image/png',
                'image/jpeg',
                'image/gif',
                'image/svg+xml'
            ];
            if (validTypes.includes(file.type)) {
                setFormData(prev => ({
                    ...prev,
                    logo: file
                }));
            } else {
                alert('Please upload a valid file type: PNG, JPG, SVG, or GIF.');
            }
        }
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
                template: template?.id,
                formData
            });

            alert('Site imported successfully!');
            onClose();
        } catch (error) {
            console.error('Import failed:', error);
            alert('Import failed. Please try again.');
        } finally {
            setIsImporting(false);
            setImportProgress(0);
            setCurrentStep('');
        }
    }, [template?.id, formData, onClose]);

    useEffect(() => {
        if (formData.logo) {
            const objectUrl = URL.createObjectURL(formData.logo);
            setLogoPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setLogoPreview(null);
        }
    }, [formData.logo]);

    if (showConfigStep) {
        return (
            <FullSiteImportConfig
                template={template}
                formData={formData}
                onClose={onClose}
                onBack={() => setShowConfigStep(false)}
                onImport={handleImport}
                isImporting={isImporting}
                importProgress={importProgress}
                currentStep={currentStep}
                isSidebarCollapsed = {isSidebarCollapsed}
                setIsSidebarCollapsed = {setIsSidebarCollapsed}
            />
        );
    }

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
                    <div className={`fb-import-form-panel ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                        <div className="fb-form-section">
                            <span className="fb-template-label">Template Name:</span>
                            <h6 className="fb-template-title">{template?.title || 'Renovate - Home Decor Website Template'}</h6>

                            <div className="fb-form-group">
                                <label htmlFor="siteName">Site Name</label>
                                <input
                                    type="text"
                                    id="siteName"
                                    placeholder="Enter your site name"
                                    value={formData.siteName}
                                    onChange={(e) => handleInputChange('siteName', e.target.value)}
                                    className="fb-form-input"
                                />
                            </div>

                            <div className="fb-form-group">
                                <label htmlFor="siteTagline">Site Tagline</label>
                                <input
                                    type="text"
                                    id="siteTagline"
                                    placeholder="Enter your site tagline"
                                    value={formData.siteTagline}
                                    onChange={(e) => handleInputChange('siteTagline', e.target.value)}
                                    className="fb-form-input"
                                />
                            </div>

                            <div className="fb-form-group">
                                <label>Upload Logo</label>
                                <div className="fb-logo-upload">
                                    <input
                                        type="file"
                                        id="logoUpload"
                                        accept=".png,.jpg,.jpeg,.svg,.gif"
                                        onChange={handleLogoUpload}
                                        className="fb-file-input"
                                    />
                                    <input
                                        type="file"
                                        id="logoUpload"
                                        accept=".png,.jpg,.jpeg,.svg,.gif"
                                        onChange={handleLogoUpload}
                                        className="fb-file-input"
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="logoUpload" className="fb-upload-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 13V21M12 13C11.2998 13 9.99153 14.9943 9.5 15.5M12 13C12.7002 13 14.0085 14.9943 14.5 15.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        {formData.logo ? (
                                            <>
                                                <span className="fb-file-name">{formData.logo.name}</span>
                                                {logoPreview && (
                                                    <img src={logoPreview} alt="Logo Preview" className="fb-logo-preview" style={{maxWidth: '120px', maxHeight: '60px', display: 'block', marginTop: '8px'}} />
                                                )}
                                            </>
                                        ) : (
                                            'Click to upload SVG, PNG, JPG or GIF (max. 800x400 px)SVG, PNG, JPG or GIF (max. 800x400 px)'
                                        )}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="fb-import-actions">
                            <div className="fb-import-step-btn-wrapper">
                                <button
                                    className="fb-import-btn next"
                                    onClick={handleNext}
                                    disabled={!formData.siteName.trim()}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    className="fb-import-btn back"
                                    onClick={handleBackClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Preview */}
                    <div className="fb-import-preview-panel">
						<SitePreview />
                    </div>

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
