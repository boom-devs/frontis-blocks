import { ClipLoader } from "react-spinners";
import FsiGbTypography from "../global-settings/global-settings";

const FullSiteImportSettingConfig = ({template, onBack, onImport, isImporting, importProgress, currentStep, isSidebarCollapsed}) => {

  return (
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
  )
}

export default FullSiteImportSettingConfig;