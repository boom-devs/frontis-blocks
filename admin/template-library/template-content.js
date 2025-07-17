/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";
import TemplateImport from "./template-import";
import LoginSignupModal from "./login-signup";
import PluginUpgradeModal from "./plugin-upgrade";

const TemplateCard = ({ imageUrl, title, isPro = false, id, tags = [], dependency = [], activeTab, setLibraryData }) => {
	const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isPluginUpgradeModalOpen, setIsPluginUpgradeModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isPluginUpgrade, setIsPluginUpgrade] = useState(false);

	// Check authentication status on component mount
	useEffect(() => {
		setIsAuthenticated(false);
	}, []);

	const handleFullSiteImport = useCallback(() => {

		if(!isPluginUpgrade) {
			setIsPluginUpgradeModalOpen(true);
		}
		if (!isAuthenticated) {
			setIsLoginModalOpen(true);
		}
		if (!isPro) {
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
		setIsPluginUpgrade(false);
	}, []);

	const handleClosePluginUpgradeModal = useCallback(() => {
		setIsPluginUpgradeModalOpen(false);
		setIsPluginUpgrade(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	const handleDemo = useCallback(() => {
		console.log("Demo clicked for:", id);
	}, [id]);

	const currentDay = new Date().toLocaleDateString('en-US', {day: 'numeric' });
	const currentMonth = new Date().toLocaleDateString('en-US', {month: 'long' });
	const currentYear = new Date().toLocaleDateString('en-US', {year: 'numeric' });
	const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
	const currentDateAndTime = {day: currentDay, month: currentMonth, year: currentYear, time: currentTime};

	const templateData = {
		id,
		title,
		image: imageUrl,
		isPro,
		category: ['Blog & Magazine', 'Construction', 'eCommerce'],
		author: 'Template Author',
		activeTab: activeTab,
		dependency: dependency,
		dateAndTime: currentDateAndTime,
	};

	const handleSaveLibrary = useCallback(() => {
		setLibraryData(prevData => {
			const alreadyExists = prevData.some(item => item.id === templateData.id);
			if (alreadyExists) return prevData;
			return [...prevData, templateData];
		});
	}, [templateData]);

	return (
		<>
			<div
				className="fb-template-library-card"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="fb-template-library-card-img">
					<img src={imageUrl} alt={title || "Template preview"} />
					<div className={`fb-template-badge ${isPro ? "pro" : "free"}`}>
						{isPro ? "PRO" : "FREE"}
					</div>
					{/* Hover Overlay */}
					{isHovered && (
						<div className="fb-template-overlay">
							<div className="fb-template-overlay-content">
								<button className="fb-demo-btn" onClick={handleDemo}>
									<span>Demo</span>
									<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
										<path d="M8.32425 2.25C5.58753 2.25493 4.15442 2.32213 3.23856 3.23814C2.25018 4.22667 2.25018 5.81769 2.25018 8.99968C2.25018 12.1817 2.25018 13.7728 3.23856 14.7613C4.22692 15.7498 5.81769 15.7498 8.99925 15.7498C12.1807 15.7498 13.7715 15.7498 14.7599 14.7613C15.6757 13.8453 15.7429 12.4119 15.7478 9.67476" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M15.4169 2.62224L8.28644 9.7941M15.4169 2.62224C15.0464 2.25128 12.5506 2.28586 12.023 2.29337M15.4169 2.62224C15.7874 2.99321 15.7528 5.4922 15.7453 6.02051" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>

				<div className="fb-template-library-card-content">
					<div className="fb-template-library-card-content-top">
						<div className="fb-template-tags">
							{tags && tags.length > 0 && tags.map((tag, index) => (
								<span key={index}>
									{tag}
									{index < tags.length - 1 && ', '}
								</span>
							))}
						</div>
					</div>
					<div className="fb-template-library-card-content-bottom">
						<h3 className="fb-template-title">{title}</h3>
					</div>
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

					<button 
						className={`fb-template-save-my-cloud ${isLoading ? "loading" : ""}`} 
						onClick={!isLoading ? handleSaveLibrary : null}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<span>Saving...</span>
								<ClipLoader color="#fff" size={16} />
							</>
						) : (
							<>
								<span>Save Library</span>
							</>
						)}
					</button>
				</div>
			</div>


			{isPro && isPluginUpgradeModalOpen && (
				<PluginUpgradeModal
					onClose={handleClosePluginUpgradeModal}
				/>
			)}

			{/* Login/Signup Modal */}
			{isPro && isPluginUpgrade && isLoginModalOpen && (
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

const TemplateLibrary = ({ activeTab, activeCategory, data, libraryData, setLibraryData }) => {

	const TagTabsOptions = [
		{name: 'User Experience', value: 'user-experience'},
		{name: 'Templates', value: 'templates'},
		{name: 'Web Design', value: 'web-design'},
		{name: 'E-commerce', value: 'e-commerce'},
		{name: 'Landing Pages', value: 'landing-pages'},
	];

	const schema = data?.$schema || {};
	const [filteredTemplates, setFilteredTemplates] = useState([]);
	const [activeTagTab, setActiveTagTab] = useState('');

	useEffect(() => {
		if (activeTab && activeCategory[activeTab]) {
			const tabData = schema[activeTab];
			const selectedCategory = tabData?.categories?.find(
				(category) => category.id === activeCategory[activeTab],
			);


			if (selectedCategory && selectedCategory.items) {
				setFilteredTemplates(selectedCategory.items);
			} else {
				setFilteredTemplates([]);
			}
		}
	}, [activeTab, activeCategory[activeTab]]);

	return (
		<div className="fb-template-library-store-content">
			<div className="fb-template-library-content-header">
				<div className="fb-template-library-content-header-left">
					<h2>All Pages</h2>
				</div>
				<div className="fb-template-library-content-header-right">
					<div className="fb-template-library-search-wrapper">
						<div className="fb-search-input-wrapper">
							<div className="fb-search-input-icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<g clip-path="url(#clip0_13116_5586)">
										<circle cx="8.625" cy="8.625" r="7.125" stroke="white" stroke-width="1.5" />
										<path d="M13.875 13.875L16.5 16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
									</g>
									<defs>
										<clipPath id="clip0_13116_5586">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>
							<input type="search" placeholder="Search Blocks" />
						</div>
					</div>
					<div className="fb-template-library-tags-wrapper">
						{TagTabsOptions.map(tab => (
							<button
								key={tab.value}
								className={`fb-template-library-tag-btn ${activeTagTab === tab.value ? 'active' : ''}`}
								onClick={() => setActiveTagTab(tab.value)}
							>
								{tab.name}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="fb-template-library-cards">
				{filteredTemplates.map(template => (
					<TemplateCard
						key={template.id}
						id={template.id}
						title={template.title}
						imageUrl={template.image}
						isPro={template.isPro || false}
						tags={template.tags || []}
						dependency={template.dependency || []}
						activeTab={activeTab}
						setLibraryData={setLibraryData}
					/>
				))}
			</div>
		</div>
	);
};

export default TemplateLibrary;