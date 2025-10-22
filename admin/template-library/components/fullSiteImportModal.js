import { useEffect, useRef } from "react";
import { ClipLoader } from "react-spinners";

const statusIcons = {
  running: (
    <span className="fb-step-icon fb-step-running">
      <ClipLoader color="fff" size={16} />
    </span>
  ),
  success: <span className="fb-step-icon fb-step-success">✔</span>,
  failed: <span className="fb-step-icon fb-step-failed">✖</span>,
  skipped: <span className="fb-step-icon fb-step-skipped">⟲</span>,
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
            ✖
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
