import { useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners";

const statusIcons = {
  running: (
    <span className="fb-step-icon fb-step-running">
      <ClipLoader color="fff" size={16} />
    </span>
  ),
  success: (
  <span className="fb-step-icon fb-step-success">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2.08331 5.83331L3.54165 7.29165L7.91665 2.70831" stroke="#404655" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
  ),
  failed: (
    <span className="fb-step-icon fb-step-failed">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2.08331 5.83331L3.54165 7.29165L7.91665 2.70831" stroke="#404655" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  ),
  skipped: (
    <span className="fb-step-icon fb-step-skipped">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2.08331 5.83331L3.54165 7.29165L7.91665 2.70831" stroke="#404655" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  ),
};

const FullSiteImportModal = ({
  steps = [],
  progress = 0,
  onCloseModal,
  frontPageUrl = "/",
  currentStep = "",
  isImporting = false,
}) => {
  const listRef = useRef(null);

  // Auto scroll to running/ active step
  useEffect(() => {
    if (!listRef.current) return;
    const runningEl = listRef.current.querySelector(
      `[data-step-key="${currentStep}"]`
    );
    if (runningEl) {
      runningEl.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [currentStep]);

  return (
    <div className="fb-fullsite-overlay">
      <div className="fb-fullsite-modal">
        
        {/* Header */}
        <div className="fb-modal-header">
          <div>
            <h2 className="fb-modal-title">Importing Full Site</h2>
            <p className="fb-modal-subtitle">Please wait while we complete setup…</p>
          </div>
          <button className="fb-close-btn" onClick={onCloseModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6L18 18" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="fb-progress-container">
          <div
            className="fb-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Steps List */}
        <div className="fb-steps-container" ref={listRef}>
          {steps.map((item) => (
            <div
              key={item.key}
              data-step-key={item.key}
              className={`fb-step-item ${
                currentStep === item.key ? "fb-step-active" : ""
              }`}
            >
              <div className="fb-step-left">
                {statusIcons[item.status] || statusIcons["running"]}
              </div>
              <div className="fb-step-right">
                <span className="fb-step-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {!isImporting && (
          <div className="fb-footer-btns">
            <a
              href="/edit.php?post_type=page"
              className="fb-btn fb-btn-secondary"
            >
              View All Pages
            </a>
            <a
              href={frontPageUrl}
              className="fb-btn fb-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullSiteImportModal;
