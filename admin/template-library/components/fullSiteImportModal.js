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
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.682 4.31875 14.6668 8.00065 14.6668C11.6825 14.6668 14.6673 11.682 14.6673 8.00016Z" stroke="#4CAF50" stroke-width="1.5"/>
        <path d="M5.33398 8.33333L7.00065 10L10.6673 6" stroke="#4CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  ),
  failed: (
    <span className="fb-step-icon fb-step-failed">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.682 4.31875 14.6668 8.00065 14.6668C11.6825 14.6668 14.6673 11.682 14.6673 8.00016Z" stroke="#E43242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.9996 10L6 6M6.00043 10L10 6" stroke="#E43242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  ),
  skipped: (
    <span className="fb-step-icon fb-step-skipped">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10.0003 14.1665C10.2364 14.1665 10.4345 14.0865 10.5945 13.9265C10.7545 13.7665 10.8342 13.5687 10.8337 13.3332C10.8331 13.0976 10.7531 12.8998 10.5937 12.7398C10.4342 12.5798 10.2364 12.4998 10.0003 12.4998C9.76422 12.4998 9.56644 12.5798 9.40699 12.7398C9.24755 12.8998 9.16755 13.0976 9.16699 13.3332C9.16644 13.5687 9.24644 13.7668 9.40699 13.9273C9.56755 14.0879 9.76533 14.1676 10.0003 14.1665ZM10.0003 10.8332C10.2364 10.8332 10.4345 10.7532 10.5945 10.5932C10.7545 10.4332 10.8342 10.2354 10.8337 9.99984V6.6665C10.8337 6.43039 10.7537 6.23262 10.5937 6.07317C10.4337 5.91373 10.2359 5.83373 10.0003 5.83317C9.76477 5.83262 9.56699 5.91262 9.40699 6.07317C9.24699 6.23373 9.16699 6.4315 9.16699 6.6665V9.99984C9.16699 10.2359 9.24699 10.434 9.40699 10.594C9.56699 10.754 9.76477 10.8337 10.0003 10.8332ZM10.0003 18.3332C8.84755 18.3332 7.76422 18.1143 6.75033 17.6765C5.73644 17.2387 4.85449 16.6451 4.10449 15.8957C3.35449 15.1462 2.76088 14.2643 2.32366 13.2498C1.88644 12.2354 1.66755 11.1521 1.66699 9.99984C1.66644 8.84762 1.88533 7.76428 2.32366 6.74984C2.76199 5.73539 3.3556 4.85345 4.10449 4.104C4.85338 3.35456 5.73533 2.76095 6.75033 2.32317C7.76533 1.88539 8.84866 1.6665 10.0003 1.6665C11.152 1.6665 12.2353 1.88539 13.2503 2.32317C14.2653 2.76095 15.1473 3.35456 15.8962 4.104C16.6451 4.85345 17.2389 5.73539 17.6778 6.74984C18.1167 7.76428 18.3353 8.84762 18.3337 9.99984C18.332 11.1521 18.1131 12.2354 17.677 13.2498C17.2409 14.2643 16.6473 15.1462 15.8962 15.8957C15.1451 16.6451 14.2631 17.239 13.2503 17.6773C12.2375 18.1157 11.1542 18.3343 10.0003 18.3332ZM10.0003 16.6665C11.8614 16.6665 13.4378 16.0207 14.7295 14.729C16.0212 13.4373 16.667 11.8609 16.667 9.99984C16.667 8.13873 16.0212 6.56234 14.7295 5.27067C13.4378 3.979 11.8614 3.33317 10.0003 3.33317C8.13921 3.33317 6.56283 3.979 5.27116 5.27067C3.97949 6.56234 3.33366 8.13873 3.33366 9.99984C3.33366 11.8609 3.97949 13.4373 5.27116 14.729C6.56283 16.0207 8.13921 16.6665 10.0003 16.6665Z" fill="#F89B2E"/>
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
            <p className="fb-modal-subtitle">Please wait while we complete the setup.</p>
          </div>
          <button className="fb-close-btn" onClick={onCloseModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z" fill="#3F3F3F"/>
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
                <span className={`fb-step-label ${item.status === "success" ? "text-success-color" : item.status === "failed" ? "text-error-color" : item.status === "skipped" ? "text-warning-color" : ""}`}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {!isImporting && (
          <div className="fb-footer-btns">
            <a
              href="/wp-admin/edit.php?post_type=page"
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
