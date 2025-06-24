/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";

const TemplateImport = ({ template, onClose }) => {
	const [isImporting, setIsImporting] = useState(false);
	const [activeTab, setActiveTab] = useState('preview');

	const handleFullSiteImport = useCallback(async () => {
		setIsImporting(true);
		
		try {
			// Simulate import process
			await new Promise(resolve => setTimeout(resolve, 3000));
			console.log('Full site import completed for:', template?.id);
		} catch (error) {
			console.error('Import failed:', error);
		} finally {
			setIsImporting(false);
		}
	}, [template?.id]);

	const handleLiveDemo = useCallback(() => {
		console.log('Live demo clicked for:', template?.id);
		// Open demo in new tab
		window.open('#', '_blank');
	}, [template?.id]);

	const handleDownload = useCallback(() => {
		console.log('Download clicked for:', template?.id);
	}, [template?.id]);

	if (!template) {
		return null;
	}

	return (
		<div className="fb-template-import-modal">
			<div className="fb-template-import-overlay" onClick={onClose}></div>
			<div className="fb-template-import-container">
				{/* Header */}
				<div className="fb-template-import-header">
					<div className="fb-template-import-nav">
						<button 
							className={`fb-nav-tab ${activeTab === 'patterns' ? 'active' : ''}`}
							onClick={() => setActiveTab('patterns')}
						>
							Patterns
						</button>
						<button 
							className={`fb-nav-tab ${activeTab === 'pages' ? 'active' : ''}`}
							onClick={() => setActiveTab('pages')}
						>
							Pages
						</button>
						<button 
							className={`fb-nav-tab ${activeTab === 'kits' ? 'active' : ''}`}
							onClick={() => setActiveTab('kits')}
						>
							Kits
						</button>
						<button 
							className={`fb-nav-tab ${activeTab === 'template-library' ? 'active' : ''}`}
							onClick={() => setActiveTab('template-library')}
						>
							Template Library
							<span className="fb-pro-badge">PRO</span>
						</button>
					</div>
					
					<div className="fb-template-import-search">
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
						<input type="text" placeholder="Search Blocks" />
					</div>

					<button className="fb-close-btn" onClick={onClose}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</button>
				</div>

				{/* Content */}
				<div className="fb-template-import-content">
					{/* Left Content Area */}
					<div className="fb-template-import-main">
						<div className="fb-template-import-tags">
							<span className="fb-tag">User Experience</span>
							<span className="fb-tag">UI Kits</span>
							<span className="fb-tag">Templates</span>
							<span className="fb-tag">Web Design</span>
							<span className="fb-tag">Creative Assets</span>
							<span className="fb-tag">Digital Marketing</span>
							<span className="fb-tag">Landing Pages</span>
							<span className="fb-tag">Prototyping</span>
							<span className="fb-tag">E-commerce</span>
						</div>

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
								<span className="fb-category-label">Category</span>
								<div className="fb-category-tags">
									<span className="fb-category-tag">Blog & Magazine</span>
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
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
											<path d="M10 2L3 7v11h14V7l-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<div className="fb-dependency-icon woo">
										<span>WOO</span>
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

							<div className="fb-import-info">
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
									<path d="M8 5.5V8l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								<span>Learn more about full site import</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TemplateImport;