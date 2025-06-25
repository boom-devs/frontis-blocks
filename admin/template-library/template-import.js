/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";
import TemplateHeader from "./template-header";
import FullSiteImport from "./full-site-import"; 
import data from "./data.json";

const TemplateImport = ({ template, onClose }) => {
	const [isImporting, setIsImporting] = useState(false);
	const [activeTab, setActiveTab] = useState('patterns');
	const [showFullSiteImport, setShowFullSiteImport] = useState(false); // New state

	const handleFullSiteImport = useCallback(async () => {
		// Show the FullSiteImport component instead of the import process
		setShowFullSiteImport(true);
	}, []);

	const handleLiveDemo = useCallback(() => {
		console.log('Live demo clicked for:', template?.id);
		window.open('#', '_blank');
	}, [template?.id]);

	const handleDownload = useCallback(() => {
		console.log('Download clicked for:', template?.id);
	}, [template?.id]);

	// Handle closing the FullSiteImport component
	const handleFullSiteImportClose = useCallback(() => {
		setShowFullSiteImport(false);
	}, []);

	if (!template) {
		return null;
	}

	// Show FullSiteImport component if showFullSiteImport is true
	if (showFullSiteImport) {
		return (
			<FullSiteImport 
				template={template}
				onClose={handleFullSiteImportClose}
				onBack={() => setShowFullSiteImport(false)} // Optional: Add back functionality
			/>
		);
	}

	return (
		<div className="fb-template-import-modal">
			<div className="fb-template-import-overlay" onClick={onClose}></div>
			<div className="fb-template-import-container">
				{/* Header */}
				<TemplateHeader
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					data={data}
				/>

				{/* Content */}
				<div className="fb-template-import-content">
					{/* Left Content Area */}
					<div className="fb-template-import-main">
						<div className="fb-template-preview">
							<img
								src={template.image}
								alt={template.title}
								className="fb-template-preview-image"
							/>
						</div>
					</div>

					{/* Right Sidebar */}
					<div className="fb-template-import-sidebar">
						<div className="fb-template-info">
							<div className="fb-template-category">
								<span className="fb-category-label">Category : </span>
								<div className="fb-category-tags">
									<span className="fb-category-tag"> Blog & Magazine</span>
									<span className="fb-category-tag">Construction</span>
									<span className="fb-category-tag">eCommerce</span>
								</div>
							</div>

							<h2 className="fb-template-title">
								{template.title || 'Renovate - Home Decor Website Template For Gutenberg'}
							</h2>

							<div className="fb-template-dependency">
								<span className="fb-dependency-label">Dependency</span>
								<div className="fb-dependency-icons">
									<div className="fb-dependency-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
											<path d="M23.335 15.9939L26.5028 17.8551C26.958 18.1229 27.336 18.508 27.5988 18.9718C27.8616 19.4356 28 19.9618 28 20.4974V22.4684C28 23.0039 27.8616 23.5301 27.5988 23.9939C27.336 24.4577 26.958 24.8429 26.5028 25.1107L23.335 26.9718L18.652 29.7239L15.4781 31.5912C15.0229 31.859 14.5065 32 13.981 32C13.4554 32 12.939 31.859 12.4838 31.5912L9.31592 29.7239V24.2319L13.981 26.9779L18.652 24.2319L23.317 21.492L18.652 18.746L13.981 16L18.652 13.2479L23.317 10.508L18.652 7.76198L13.981 5.02206L9.31592 2.27605L12.4838 0.408765C12.939 0.140974 13.4554 0 13.981 0C14.5065 0 15.0229 0.140974 15.4781 0.408765L18.646 2.27605L23.305 5.02206L26.4729 6.88935C26.9281 7.15713 27.3061 7.54229 27.5689 8.0061C27.8317 8.46992 27.97 8.99606 27.97 9.53163V11.4966C27.97 12.0321 27.8317 12.5582 27.5689 13.0221C27.3061 13.4859 26.9281 13.871 26.4729 14.1388L23.335 15.9939Z" fill="#3991FF" />
											<path d="M9.32407 7.76409L4.66503 10.4979V26.974L1.5031 25.1128C1.04681 24.8458 0.667639 24.4609 0.403758 23.9971C0.139878 23.5332 0.000619531 23.0067 0 22.4705V9.51545C1.3352e-05 8.97988 0.138364 8.45374 0.401163 7.98992C0.663962 7.52611 1.04195 7.14095 1.49712 6.87317L3.16192 5.8968C3.6171 5.62901 4.13344 5.48804 4.65904 5.48804C5.18464 5.48804 5.70098 5.62901 6.15616 5.8968L9.32407 7.76409Z" fill="#050607" />
											<path d="M18.6537 13.2504L13.9827 15.9964L10.8147 17.8576C10.3596 18.1254 9.84323 18.2664 9.31763 18.2664C8.79203 18.2664 8.27569 18.1254 7.82051 17.8576L4.64062 15.9964L9.30566 13.2565L12.4795 11.3893C12.9347 11.1215 13.4511 10.9805 13.9767 10.9805C14.5023 10.9805 15.0186 11.1215 15.4738 11.3893L18.6537 13.2504Z" fill="#050607" />
										</svg>
									</div>
									<div className="fb-dependency-icon woo">
										<svg xmlns="http://www.w3.org/2000/svg" width="54" height="32" viewBox="0 0 54 32" fill="none">
											<g clip-path="url(#clip0_12958_4053)">
												<path d="M5.01359 0H48.9642C51.7458 0 53.9973 2.23268 53.9973 4.99095V21.627C53.9973 24.3853 51.7458 26.6179 48.9642 26.6179H33.2029L35.3663 31.8714L25.852 26.6179H5.03552C2.25415 26.6179 0.00260341 24.3853 0.00260341 21.627V4.99095C-0.0195429 2.25464 2.23179 0 5.01359 0Z" fill="#9B5C8F" />
												<path d="M3.07746 4.54898C3.38477 4.13528 3.84562 3.91776 4.46024 3.87426C5.57979 3.78704 6.21634 4.30929 6.36989 5.44121C7.05031 9.99023 7.79653 13.8428 8.58663 16.9987L13.3934 7.92257C13.8326 7.09538 14.3814 6.66014 15.0399 6.61664C16.0057 6.55138 16.5981 7.16064 16.8396 8.44482C17.3884 11.3395 18.0908 13.7991 18.9248 15.8885C19.4955 10.3602 20.4613 6.37716 21.8221 3.91776C22.1512 3.3083 22.6342 3.00357 23.2707 2.95985C23.7757 2.91656 24.2365 3.06882 24.6535 3.39531C25.0705 3.72179 25.29 4.13528 25.3339 4.63599C25.3558 5.02772 25.29 5.35421 25.1146 5.68069C24.2584 7.24785 23.5559 9.88147 22.9853 13.5378C22.4367 17.0857 22.2391 19.85 22.3707 21.8307C22.4148 22.3744 22.3269 22.8534 22.1075 23.2671C21.8439 23.7458 21.449 24.0071 20.9441 24.0506C20.3733 24.0941 19.7809 23.8331 19.2101 23.2453C17.1689 21.1775 15.5446 18.0869 14.3594 13.9733C12.9326 16.7592 11.8791 18.8486 11.1986 20.2415C9.9036 22.7011 8.8062 23.9636 7.88427 24.0288C7.2916 24.0723 6.78687 23.5716 6.34795 22.5271C5.22861 19.6758 4.02132 14.1691 2.72649 6.00717C2.63854 5.44121 2.77015 4.94051 3.07746 4.54898ZM50.2462 7.96608C49.4561 6.59489 48.2927 5.76791 46.7345 5.44121C46.3173 5.35421 45.9224 5.3107 45.5491 5.3107C43.442 5.3107 41.73 6.39891 40.3911 8.57554C39.2496 10.4255 38.6791 12.4714 38.6791 14.7133C38.6791 16.3892 39.0303 17.8256 39.7326 19.0228C40.5227 20.394 41.6861 21.221 43.2444 21.5475C43.6614 21.6347 44.0564 21.6782 44.4298 21.6782C46.5588 21.6782 48.2708 20.59 49.5878 18.4133C50.729 16.5414 51.2998 14.4955 51.2998 12.2539C51.3217 10.5562 50.9486 9.14129 50.2462 7.96608ZM47.4807 13.995C47.1734 15.4315 46.6246 16.4979 45.8123 17.2162C45.176 17.7821 44.5833 18.0214 44.0347 17.9126C43.5078 17.8039 43.0687 17.3469 42.7397 16.4979C42.476 15.8232 42.3446 15.1485 42.3446 14.5173C42.3446 13.9733 42.3885 13.4291 42.4982 12.9286C42.6958 12.0361 43.0689 11.1654 43.6614 10.3385C44.3859 9.2718 45.1541 8.83677 45.9442 8.98903C46.471 9.09779 46.9102 9.55499 47.2392 10.4037C47.5026 11.0784 47.6342 11.7532 47.6342 12.3844C47.6342 12.9503 47.5904 13.4945 47.4807 13.995ZM36.506 7.96608C35.7159 6.59489 34.5306 5.76791 32.9942 5.44121C32.5772 5.35421 32.1822 5.3107 31.8089 5.3107C29.7018 5.3107 27.9898 6.39891 26.6509 8.57554C25.5096 10.4255 24.9389 12.4714 24.9389 14.7133C24.9389 16.3892 25.29 17.8256 25.9924 19.0228C26.7825 20.394 27.9459 21.221 29.5042 21.5475C29.9214 21.6347 30.3162 21.6782 30.6895 21.6782C32.8185 21.6782 34.5306 20.59 35.8475 18.4133C36.989 16.5414 37.5595 14.4955 37.5595 12.2539C37.5595 10.5562 37.2084 9.14129 36.506 7.96608ZM33.7185 13.995C33.4112 15.4315 32.8624 16.4979 32.0504 17.2162C31.4138 17.7821 30.8211 18.0214 30.2723 17.9126C29.7457 17.8039 29.3068 17.3469 28.9773 16.4979C28.7141 15.8232 28.5825 15.1485 28.5825 14.5173C28.5825 13.9733 28.6263 13.4291 28.736 12.9286C28.9336 12.0361 29.3068 11.1654 29.8994 10.3385C30.6237 9.2718 31.3919 8.83677 32.182 8.98903C32.7089 9.09779 33.148 9.55499 33.477 10.4037C33.7407 11.0784 33.8721 11.7532 33.8721 12.3844C33.8942 12.9503 33.8282 13.4945 33.7185 13.995Z" fill="white" />
											</g>
											<defs>
												<clipPath id="clip0_12958_4053">
													<rect width="54" height="32" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</div>
								</div>
							</div>

							<div className="fb-template-meta">
								<div className="fb-template-price">
									<span className="fb-price-badge">FREE</span>
									<span className="fb-download-count">2025</span>
									<span className="fb-download-label">Full Site Import</span>
								</div>
							</div>
						</div>

						<div className="fb-template-actions">
							<button
								className={`fb-full-site-import-btn ${isImporting ? 'loading' : ''}`}
								onClick={handleFullSiteImport}
								disabled={isImporting}
							>
								{isImporting ? (
									<>
										<ClipLoader color="#fff" size={16} />
										<span>Importing...</span>
									</>
								) : (
									<span>Full Site Import</span>
								)}
							</button>
							<button className="fb-live-demo-btn" onClick={handleLiveDemo}>
								<span>Live Demo</span>
							</button>
						</div>
						<div className="fb-import-info">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM9 13.3125C9.31065 13.3125 9.5625 13.0606 9.5625 12.75V8.25C9.5625 7.93935 9.31065 7.6875 9 7.6875C8.68935 7.6875 8.4375 7.93935 8.4375 8.25V12.75C8.4375 13.0606 8.68935 13.3125 9 13.3125ZM9 5.25C9.41423 5.25 9.75 5.58579 9.75 6C9.75 6.41421 9.41423 6.75 9 6.75C8.58577 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58577 5.25 9 5.25Z" fill="#8891A5" />
							</svg>
							<span><span className="blue-color">Learn more</span> about full site import</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TemplateImport;