import { useEffect, useState, useRef } from "@wordpress/element";
import { useSelector, useDispatch } from "react-redux";
import { setAttribute } from "../store/attributesSlice";

const stepLabels = {
  fetch_site: "Fetching site data",
  upload_files: "Uploading files",
  theme: "Installing theme",
  plugins: "Installing plugins",
  headers_footers: "Creating headers & footers",
  templates: "Creating templates",
  pages: "Creating pages",
  posts: "Creating posts",
  global_styles: "Updating styles",
  asset_generation: "Generating assets",
  finalize: "Finalizing",
};

const BackgroundProgressBar = () => {
  const dispatch = useDispatch();
  const {
    bgImportActive,
    bgImportProgress,
    bgImportStep,
    bgImportFailed,
    bgImportSuccess,
    showFullSiteImportModal,
    showBgProgressBar,
  } = useSelector((state) => state.attributes);

  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const pollRef = useRef(null);

  // On mount: check if there's a running import on the server (survives page reload)
  useEffect(() => {
    const checkServerImport = async () => {
      try {
        const { nonce, ajaxUrl } = window.frontisBlocksAdmin || {};
        if (!nonce || !ajaxUrl) return;

        const form = new FormData();
        form.append("action", "fb_get_import_status");
        form.append("security", nonce);

        const resp = await fetch(ajaxUrl, { method: "POST", body: form, credentials: "same-origin" });
        const result = await resp.json();

        if (result.success && result.data && result.data.status === "running") {
          // There's an active server-side import! Resume showing progress.
          dispatch(setAttribute({
            bgImportActive: true,
            showBgProgressBar: true,
            bgImportProgress: result.data.progress || 0,
            bgImportStep: result.data.current_step || "",
            bgImportSteps: result.data.steps || [],
            bgImportFailed: false,
            bgImportSuccess: false,
          }));

          // Start polling
          startServerPolling();
        }
      } catch (err) {
        console.warn("BackgroundProgressBar: server check failed:", err);
      }
    };

    checkServerImport();

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, []);

  const startServerPolling = () => {
    if (pollRef.current) clearInterval(pollRef.current);

    pollRef.current = setInterval(async () => {
      try {
        const { nonce, ajaxUrl } = window.frontisBlocksAdmin || {};
        if (!nonce || !ajaxUrl) return;

        const form = new FormData();
        form.append("action", "fb_get_import_status");
        form.append("security", nonce);

        const resp = await fetch(ajaxUrl, { method: "POST", body: form, credentials: "same-origin" });
        const result = await resp.json();

        if (!result.success || !result.data || result.data.status === "idle") {
          clearInterval(pollRef.current);
          return;
        }

        const { progress, current_step, steps, status, error } = result.data;

        dispatch(setAttribute({
          bgImportProgress: progress || 0,
          bgImportStep: current_step || "",
          ...(steps ? { bgImportSteps: steps } : {}),
        }));

        if (status === "completed") {
          clearInterval(pollRef.current);
          dispatch(setAttribute({ bgImportSuccess: true, bgImportActive: true }));
        } else if (status === "failed") {
          clearInterval(pollRef.current);
          dispatch(setAttribute({ bgImportFailed: true }));
        }
      } catch (err) {
        console.warn("BackgroundProgressBar poll error:", err);
      }
    }, 3000);
  };

  // Show bar only when showBgProgressBar is true (clicked Continue in Background)
  useEffect(() => {
    if (bgImportActive && showBgProgressBar) {
      setIsVisible(true);
      setIsExiting(false);
    } else {
      setIsVisible(false);
    }
  }, [bgImportActive, showBgProgressBar]);

  // Auto-hide after success with a delay
  useEffect(() => {
    if (bgImportSuccess && isVisible) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        // Wait for exit animation then fully hide
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          setIsExiting(false);
          dispatch(setAttribute({
            bgImportActive: false,
            bgImportProgress: 0,
            bgImportStep: "",
            bgImportSteps: [],
            bgImportFailed: false,
            bgImportSuccess: false,
            showBgProgressBar: false,
          }));
        }, 400);
        return () => clearTimeout(hideTimer);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [bgImportSuccess, isVisible]);

  if (!isVisible) return null;

  const currentLabel = stepLabels[bgImportStep] || "Importing...";
  const isFailed = bgImportFailed;
  const isComplete = bgImportSuccess;

  return (
    <div className={`fb-bg-progress-bar ${isExiting ? "fb-bg-exit" : "fb-bg-enter"} ${isFailed ? "fb-bg-failed" : ""} ${isComplete ? "fb-bg-success" : ""}`}>
      {/* Top section */}
      <div className="fb-bg-progress-header">
        <div className="fb-bg-progress-info">
          {isComplete ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.682 4.31875 14.6668 8.00065 14.6668C11.6825 14.6668 14.6673 11.682 14.6673 8.00016Z" stroke="#4CAF50" strokeWidth="1.5"/>
              <path d="M5.33398 8.33333L7.00065 10L10.6673 6" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : isFailed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.682 4.31875 14.6668 8.00065 14.6668C11.6825 14.6668 14.6673 11.682 14.6673 8.00016Z" stroke="#E43242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.9996 10L6 6M6.00043 10L10 6" stroke="#E43242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <div className="fb-bg-spinner"></div>
          )}
          <span className="fb-bg-progress-label">
            {isComplete ? "Import completed!" : isFailed ? "Import failed" : currentLabel}
          </span>
        </div>
        <span className="fb-bg-progress-percent">
          {bgImportProgress}%
        </span>
      </div>

      {/* Progress bar track */}
      <div className="fb-bg-progress-track">
        <div
          className="fb-bg-progress-fill"
          style={{ width: `${bgImportProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BackgroundProgressBar;
