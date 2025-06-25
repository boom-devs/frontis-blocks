/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
import data from "./data.json";
import TemplateHeader from "./template-header";

const FullSiteImport = ({ template, onClose, onBack }) => {
    const [formData, setFormData] = useState({
        siteName: '',
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

    const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    }, []);

    const handleLogoUpload = useCallback((event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                logo: file
            }));
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
                template: template?.id,
                formData
            });

            // Show success message or redirect
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

    return (
        <div className="fb-full-site-import-modal">
            <div className="fb-full-site-import-overlay" onClick={onClose}></div>
            <div className="fb-full-site-import-container">
                {/* Header */}
                <TemplateHeader
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    data={data}
                />

                {/* Content */}
                <div className="fb-full-site-import-content">
                    {/* Left Panel - Sidebar */}
                    <div className="fb-import-form-panel">
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
                                        accept="image/*"
                                        onChange={handleLogoUpload}
                                        className="fb-file-input"
                                    />
                                    <label htmlFor="logoUpload" className="fb-upload-btn">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Choose Logo
                                    </label>
                                    {formData.logo && (
                                        <span className="fb-file-name">{formData.logo.name}</span>
                                    )}
                                </div>
                            </div>
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
                                <>
                                    <div className="fb-import-step-btn-wrapper">

                                        <button
                                            className="fb-import-btn next"
                                            onClick={handleImport}
                                            disabled={!formData.siteName}
                                        >
                                            Next
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                        <button
                                            className="fb-import-btn back"
                                            onClick={handleImport}
                                            disabled={!formData.siteName}
                                        >
                                            Back
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Right Panel - Preview */}
                    <div className="fb-import-preview-panel">
                        <div className="fb-template-preview-card">
                            <img
                                src={template?.image}
                                alt={template?.title}
                                className="fb-preview-image"
                            />
                            <div className="fb-preview-info">
                                <h3 className="fb-preview-title">
                                    {template?.title || 'Renovate - Home Decor Website Template'}
                                </h3>
                                <div className="fb-preview-meta">
                                    <span className="fb-preview-category">Construction</span>
                                    <span className="fb-preview-type">FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullSiteImport;