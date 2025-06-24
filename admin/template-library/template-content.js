/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";

const TemplateCard = ({ imageUrl, title, isPro = false, id }) => {
	const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Check authentication status on component mount
	useEffect(() => {
		// You can check if user is already logged in here
		// For demo purposes, assuming user is not authenticated initially
		setIsAuthenticated(false);
	}, []);

	const handleFullSiteImport = useCallback(() => {
		if (!isAuthenticated) {
			// Show login modal first
			setIsLoginModalOpen(true);
		} else {
			// User is authenticated, show import modal directly
			setIsModalOpen(true);
		}
	}, [isAuthenticated]);

	const handleLoginSuccess = useCallback(() => {
		setIsLoginModalOpen(false);
		setIsAuthenticated(true);
		setIsModalOpen(true);
	}, []);

	const handleCloseLoginModal = useCallback(() => {
		setIsLoginModalOpen(false);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const handleDemo = useCallback(() => {
		console.log("Demo clicked for:", id);
	}, [id]);

	const templateData = {
		id,
		title,
		image: imageUrl,
		isPro,
		category: ['Blog & Magazine', 'Construction', 'eCommerce'],
		author: 'Template Author',
		downloads: 2025
	};

	return (
		<>
			<div
				className="fb-template-library-card"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="fb-template-library-card-img">
					<img src={imageUrl} alt={title || "Template preview"} />
					{/* Hover Overlay */}
					{isHovered && (
						<div className="fb-template-overlay">
							<div className="fb-template-overlay-content">
								<button className="fb-demo-btn" onClick={handleDemo}>
									<span>Demo</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
										<path d="M16.158 8.28375C16.386 8.60348 16.5 8.76338 16.5 9C16.5 9.23662 16.386 9.39652 16.158 9.71625C15.1334 11.1529 12.5169 14.25 9 14.25C5.48309 14.25 2.86657 11.1529 1.84203 9.71625C1.61401 9.39652 1.5 9.23662 1.5 9C1.5 8.76338 1.61401 8.60348 1.84203 8.28375C2.86657 6.84708 5.48309 3.75 9 3.75C12.5169 3.75 15.1334 6.84708 16.158 8.28375Z" stroke="#0B0C0E" strokeWidth="1.125" />
										<path d="M11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25C10.2427 11.25 11.25 10.2427 11.25 9Z" stroke="#0B0C0E" strokeWidth="1.125" />
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>

				<div className="fb-template-library-card-content">
					<div className="fb-template-library-card-content-top">
						<div className={`fb-template-badge ${isPro ? "pro" : "free"}`}>
							{isPro ? "PRO" : "FREE"}
						</div>
						<div className="fb-template-actions">
							<button
								className={`fb-import-btn ${isLoading ? "loading" : ""}`}
								onClick={!isLoading ? handleFullSiteImport : null}
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<span>Importing...</span>
										<ClipLoader color="#fff" size={16} />
									</>
								) : (
									<>
										<span>Import</span>
									</>
								)}
							</button>

							<button className="fb-template-save-my-cloud">
								<span>Save My Cloud</span>
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
									<path d="M3.16675 8.5C3.16675 11.4455 5.55456 13.8333 8.50008 13.8333C11.4456 13.8333 13.8334 11.4455 13.8334 8.5" stroke="#404655" strokeWidth="1.5" strokeLinecap="round" />
									<path d="M8.5 3.16663V9.83329M8.5 9.83329L10.5 7.83329M8.5 9.83329L6.5 7.83329" stroke="#404655" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>
						</div>
					</div>
					<div className="fb-template-library-card-content-bottom">
						<h3 className="fb-template-title">{title}</h3>
					</div>
				</div>
			</div>

			{/* Login/Signup Modal */}
			{isLoginModalOpen && (
				<LoginSignupModal 
					onClose={handleCloseLoginModal}
					onLoginSuccess={handleLoginSuccess}
				/>
			)}

			{/* Template Import Modal */}
			{isModalOpen && (
				<TemplateImport 
					template={templateData}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
};

const TemplateLibrary = ({ activeTab, activeCategory, data }) => {
	const schema = data?.$schema || {};
	const [filteredTemplates, setFilteredTemplates] = useState([]);

	useEffect(() => {
		if (activeTab && activeCategory) {
			const tabData = schema[activeTab];
			const selectedCategory = tabData?.categories?.find(
				(category) => category.id === activeCategory,
			);

			if (selectedCategory && selectedCategory.items) {
				setFilteredTemplates(selectedCategory.items);
			} else {
				setFilteredTemplates([]);
			}
		}
	}, [activeTab, activeCategory]);

	return (
		<div className="fb-template-library-store-content">
			<div className="fb-template-library-content-header">
				<h2>All Pages</h2>
				<div className="fb-template-library-tags-wrapper">
					<span>User Experience</span>
					<span>UI Kits</span>
					<span>Templates</span>
					<span>Web Design</span>
					<span>Creative Assets</span>
					<span>Digital Marketing</span>
					<span>Landing Pages</span>
					<span>Prototyping</span>
					<span>E-commerce</span>
				</div>
			</div>
			<div className="fb-template-library-cards">
				{filteredTemplates.map((template, index) => (
					<TemplateCard
						key={template.id}
						id={template.id}
						title={template.title}
						imageUrl={template.image}
						isPro={index % 3 === 1}
					/>
				))}
			</div>
		</div>
	);
};

export default TemplateLibrary;