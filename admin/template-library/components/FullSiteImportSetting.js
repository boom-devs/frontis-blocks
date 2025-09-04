
import { useState, useEffect } from '@wordpress/element';
import FB_ImageControl from '@Components/image-control';

const FullSiteImportSetting = ({template, formData, setFormData, handleInputChange, handleNext, handleBackClick, isSidebarCollapsed}) => {

  const [logoUrl, setLogoUrl] = useState(formData.logo.url);
  const [logoAlt, setLogoAlt] = useState(formData.logo.alt);
  const [logoId, setLogoId] = useState(formData.logo.id);

  useEffect(() => {
    setFormData({...formData, logo: {url: logoUrl, alt: logoAlt, id: logoId}});
  }, [logoUrl]);

  return (
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
                                <FB_ImageControl
                                    globalImageUrl={logoUrl}
                                    setglobalImageUrl={(value) => setLogoUrl(value) }
                                    globalImageAlt={logoAlt}
                                    setglobalImageAlt={(value) => setLogoAlt(value)}
                                    globalImageID={logoId}
                                    setglobalImageID={(value) => setLogoId(value)}
                                    isImageSize={false}
								                />
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
                                    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    className="fb-import-btn back"
                                    onClick={handleBackClick}
                                >
                                    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
  )
}

export default FullSiteImportSetting;
