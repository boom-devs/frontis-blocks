import { useCallback, useState } from "@wordpress/element";
import { TemplateCategoryLoader } from "./template-loader";

const TemplateSidebar = ({
	activeTab,
	activeCategory,
	data,
	onChangeTemplates,
	isProTemplate,
	setActiveCategoryTab,
	loading,
	isImporting,
	isSidebarCollapsed,
	handleSidebarToggle,
	setActiveTab,
	searchText,
	searchTemplates,
	sortOrder,
	onSortChange,
}) => {
	const schema = data;
	const categories = schema[activeTab]?.categories || [];
	const totalItems = schema[activeTab]?.pagination?.total || 0;

	const TagTabsOptions = [
		{ name: "Free", value: "free" },
		{ name: "Pro", value: "pro" },
	];

	const TabsOptions = [
		{ name: "Patterns", value: "patterns" },
		{ name: "Pages", value: "pages" },
		{ name: "Sites", value: "sites" },
	];

	const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

	const SelectedIcon = () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
			<rect
				x="1"
				y="1"
				width="18"
				height="18"
				rx="9"
				stroke="#3991FF"
				strokeWidth="2"
			/>
			<circle cx="10" cy="10" r="4" fill="#3991FF" />
		</svg>
	);

	const UnselectedIcon = () => (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="1" y="1" width="18" height="18" rx="9" fill="white" />
			<rect
				x="1"
				y="1"
				width="18"
				height="18"
				rx="9"
				stroke="#E5E7EB"
				strokeWidth="2"
			/>
		</svg>
	);

	return (
		<div
			className={`fb-template-library-store-sidebar ${isSidebarCollapsed ? "collapsed" : ""
				}`}
			style={
				activeTab === "templatelibrary" && !loading ? { paddingTop: 0 } : {}
			}
		>
			<div className="fb-template-library-tabs">
				{/* <button
					className={`fb-template-library-tab nav-icon`}
					onClick={handleSidebarToggle}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M3 5H21M3 12H21M3 19H15"
							stroke="#0B0C0E"
							strokeWidth="1.4"
							strokeLinecap="round"
						/>
					</svg>
				</button> */}
				{TabsOptions.map((tab) => (
					<button
						key={tab.value}
						className={`fb-template-library-tab ${activeTab === tab.value ? "active" : ""
							}`}
						onClick={() => setActiveTab(tab.value)}
						disabled={activeTab === tab.value}
					>
						{tab.name}
					</button>
				))}
			</div>
			<div className="fb-template-sorting-options">
				{/* Sort By Select Box */}
				<div className="fb-template-sort-wrapper">
					<span className="fb-template-sorting-label">Sort By:</span>
					<div className="fb-sort-select-wrapper">
						<select
							className="fb-template-sort-select"
							value={sortOrder}
							onChange={(e) => onSortChange(e.target.value)}
						>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="a-z">A-Z</option>
							<option value="z-a">Z-A</option>
						</select>
						{/* <div className="fb-sort-select-arrow">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5"
									stroke="#2A2F39"
									strokeWidth="1.125"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div> */}
					</div>
				</div>
				{/* /Sort By Select Box */}
				<div className="fb-template-library-search-wrapper">
					<span className="fb-template-search-label">Search By:</span>
					<div className="fb-search-input-wrapper">
						<input
							type="search"
							placeholder={`Search ${capitalize(activeTab)}`}
							value={searchText}
							onChange={(e) => searchTemplates(e.target.value)}
						/>
						<div className="fb-search-input-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
							>
								<g clipPath="url(#clip0_13497_8589)">
									<circle
										cx="8.625"
										cy="8.625"
										r="7.125"
										stroke="#2A2F39"
										strokeWidth="1.5"
									/>
									<path
										d="M13.875 13.875L16.5 16.5"
										stroke="#2A2F39"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_13497_8589">
										<rect width="18" height="18" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{activeTab !== "templatelibrary" && (
				<div className="fb-template-type-filter-wrapper">
					<div className="fb-template-type-filter-label">
						<span>Type</span>
					</div>
					<div className="fb-template-type-filter-options">
						<label className="fb-template-radio-label">
							<input
								type="radio"
								name="fb_template_type"
								value=""
								checked={isProTemplate === ""}
								onChange={() => onChangeTemplates("")}
								style={{ display: "none" }}
							/>
							{isProTemplate === "" ? <SelectedIcon /> : <UnselectedIcon />}
							<span className="fb-radio-text">
								All {totalItems ? `(${totalItems})` : ""}
							</span>
						</label>
						{TagTabsOptions.map((tab) => (
							<label key={tab.value} className="fb-template-radio-label">
								<input
									type="radio"
									name="fb_template_type"
									value={tab.value}
									checked={isProTemplate === tab.value}
									onChange={() => onChangeTemplates(tab.value)}
									style={{ display: "none" }}
								/>
								{isProTemplate === tab.value ? (
									<SelectedIcon />
								) : (
									<UnselectedIcon />
								)}
								<span className="fb-radio-text">{tab.name}</span>
							</label>
						))}
					</div>
				</div>
			)}

			{/* {activeTab !== "templatelibrary" && (
				<div className="fb-template-category-wrapper">
					<div className="fb-template-category-label">
						<h2>Categories</h2>
					</div>
					<div className="fb-template-category">
						{TagTabsOptions.map((tab) => (
							<span
								key={tab.value}
								className={`${
									tab.value === "free" ? "fb-tl-free" : "fb-tl-pro"
								} ${isProTemplate === tab.value ? "active" : ""}`}
								onClick={() => onChangeTemplates(tab.value)}
							>
								{tab.name}
							</span>
						))}
					</div>
				</div>
			)} */}

			<div className="fb-template-category-label">
				<h2>Categories</h2>
			</div>

			{loading || isImporting ? (
				<TemplateCategoryLoader count={15} />
			) : (
				<div className="fb-template-library-store-sidebar-tabs">
					{activeTab !== "templatelibrary" ? (
						<button
							className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === "" ? "active" : ""
								}`}
							onClick={() => setActiveCategoryTab("")}
							disabled={activeCategory[activeTab] === ""}
						>
							<span className="fb-template-library-store-sidebar-tab-name">
								{/* <span className="fb-category-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z"
											stroke="#404655"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z"
											stroke="#404655"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z"
											stroke="#404655"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z"
											stroke="#404655"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span> */}
								All
							</span>
						</button>
					) : (
						<button
							className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === "" ? "active" : ""
								}`}
							onClick={() => setActiveCategoryTab("")}
							disabled={activeCategory[activeTab] === ""}
						>
							<span className="fb-template-library-store-sidebar-tab-name">
								{/* <span className="fb-category-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.4999 16.5V8.5C20.4999 6.14298 20.4999 4.96447 19.7676 4.23223C19.0354 3.5 17.8569 3.5 15.4999 3.5H8.49988C6.14286 3.5 4.96434 3.5 4.23211 4.23223C3.49988 4.96447 3.49988 6.14298 3.49988 8.5V16.5"
											stroke="#0B0C0E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M21.9841 20.5H2.01567C1.63273 20.5 1.38367 20.1088 1.55493 19.7764L3.49988 16.5H20.4999L22.4448 19.7764C22.6161 20.1088 22.367 20.5 21.9841 20.5Z"
											stroke="#0B0C0E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M9.49988 12.5C8.67145 12.5 7.99988 11.8284 7.99988 11C7.99988 10.1716 8.67145 9.5 9.49988 9.5H9.99988C9.99988 8.39543 10.8953 7.5 11.9999 7.5C13.1044 7.5 13.9999 8.39543 13.9999 9.5H14.4999C15.3283 9.5 15.9999 10.1716 15.9999 11C15.9999 11.8284 15.3283 12.5 14.4999 12.5H9.49988Z"
											stroke="#0B0C0E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span> */}
								My Cloud
							</span>
						</button>
					)}

					{categories.map((category) => (
						<button
							key={category?.slug}
							className={`fb-template-library-store-sidebar-tab ${activeCategory[activeTab] === category?.slug ? "active" : ""
								}`}
							onClick={() => setActiveCategoryTab(category.slug)}
							disabled={activeCategory[activeTab] === category.slug}
						>
							<span className="fb-template-library-store-sidebar-tab-name">
								{activeTab === "templatelibrary"
									? // <span
									// 	dangerouslySetInnerHTML={{ __html: category.icon }}
									// 	className="fb-category-icon"
									// />
									""
									: // <img
									// 	src={`${FB_TLibrary.portalApi}/storage/${category.icon}`}
									// 	alt={category.name}
									// 	className="fb-category-icon"
									// />
									""}
								{category.name}
							</span>

							{activeTab !== "templatelibrary" && (
								<span className="fb-template-library-store-sidebar-tab-count">
									{String(category.count).padStart(2, "0")}
								</span>
							)}
						</button>
					))}
				</div>
			)}

			{/* Collapse Button */}
			<div
				className={`fb-import-sidebar-collapse ${isSidebarCollapsed ? "collapsed" : ""
					}`}
				onClick={handleSidebarToggle}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="34"
					height="34"
					viewBox="0 0 34 34"
					fill="none"
				>
					<path
						d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z"
						fill="white"
					/>
					<path
						d="M17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5Z"
						stroke="#E1E3E8"
					/>
					<path
						d="M19.1875 21.375L14.8125 17L19.1875 12.625"
						stroke="#555E72"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={isSidebarCollapsed ? "rotated" : ""}
					/>
				</svg>
			</div>
		</div>
	);
};

export default TemplateSidebar;
