/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const TemplateCard = ({ imageUrl, title, isPro = false, id }) => {
	const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleFullSiteImport = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const handleDemo = useCallback(() => {
		// Handle demo functionality
		console.log("Demo clicked for:", id);
	}, [id]);

	return (
		<>
			<div
				className="fb-template-library-card"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="fb-template-library-card-img">
					<img src={imageUrl} alt={title || "Template preview"} />

					{/* Badge */}

					{/* Hover Overlay */}
					{isHovered && (
						<div className="fb-template-overlay">
							<div className="fb-template-overlay-content">
								<button className="fb-demo-btn" onClick={handleDemo}>
									<span>Demo</span>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path
											d="M8 2L14 8L8 14"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>

				<div className="fb-template-library-card-content">
					<div className={`fb-template-badge ${isPro ? "pro" : "free"}`}>
						{isPro ? "PRO" : "FREE"}
					</div>
					<h3 className="fb-template-title">{title}</h3>
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
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path
											d="M2.67 8C2.67 10.95 5.05 13.33 8 13.33C10.95 13.33 13.33 10.95 13.33 8"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M8 2.67V9.33M8 9.33L10 7.33M8 9.33L6 7.33"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</>
							)}
						</button>

						<button className="fb-favorite-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
							>
								<path
									d="M9 4.12553L8.5947 4.5156C8.59725 4.51821 8.5998 4.52079 8.60235 4.52335L9 4.12553ZM10.1024 6.02281C10.322 6.24244 10.6782 6.24237 10.8978 6.02266C11.1175 5.80296 11.1174 5.4468 10.8976 5.22717L10.1024 6.02281ZM7.06954 13.7415C5.93279 12.8454 4.6898 11.9703 3.70372 10.8599C2.73692 9.77121 2.0625 8.50093 2.0625 6.85288H0.9375C0.9375 8.85201 1.77038 10.3771 2.86254 11.6069C3.93542 12.815 5.30308 13.7815 6.37306 14.625L7.06954 13.7415ZM2.0625 6.85288C2.0625 5.23973 2.97403 3.88695 4.21827 3.3182C5.42705 2.76567 7.05125 2.91199 8.5947 4.5156L9.4053 3.73545C7.57387 1.8327 5.44807 1.5191 3.75057 2.29503C2.08853 3.05475 0.9375 4.81883 0.9375 6.85288H2.0625ZM6.37306 14.625C6.75724 14.9278 7.16966 15.2508 7.5876 15.495C8.00543 15.7391 8.4822 15.9376 9 15.9376V14.8126C8.7678 14.8126 8.49458 14.722 8.1552 14.5237C7.81598 14.3254 7.46406 14.0525 7.06954 13.7415L6.37306 14.625ZM11.6269 14.625C12.6969 13.7815 14.0646 12.815 15.1375 11.6069C16.2296 10.3771 17.0625 8.85201 17.0625 6.85288H15.9375C15.9375 8.50093 15.2631 9.77121 14.2963 10.8599C13.3102 11.9703 12.0672 12.8454 10.9305 13.7415L11.6269 14.625ZM17.0625 6.85288C17.0625 4.81883 15.9115 3.05475 14.2494 2.29503C12.5519 1.5191 10.4261 1.8327 8.5947 3.73545L9.4053 4.5156C10.9487 2.91199 12.5729 2.76567 13.7817 3.3182C15.026 3.88695 15.9375 5.23973 15.9375 6.85288H17.0625ZM10.9305 13.7415C10.5359 14.0525 10.184 14.3254 9.8448 14.5237C9.50543 14.722 9.2322 14.8126 9 14.8126V15.9376C9.5178 15.9376 9.99457 15.7391 10.4124 15.495C10.8304 15.2508 11.2427 14.9278 11.6269 14.625L10.9305 13.7415ZM8.60235 4.52335L10.1024 6.02281L10.8976 5.22717L9.39765 3.72771L8.60235 4.52335Z"
									fill="#050607"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
			/>
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
