/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { toast } from "react-toastify";
import { __ } from "@wordpress/i18n";
import TemplateSidebar from "./template-sidebar";
import TemplateContent from "./template-content";

import { usePostDataMutation } from "./services/laravelapi";
import { use } from "@wordpress/data";

const PatternLibraryButton = () => {
	const [loading, setLoading] = useState(false);
	const [noneFilterLoading, setNoneFilterLoading] = useState(false);
	const [resetCat, setResetCat] = useState(true);
	const [isLogedIn, setIsLogedIn] = useState(false);
	const [activeTab, setActiveTab] = useState("patterns");
	const [debounceTimer, setDebounceTimer] = useState(null);
	const [activeCategory, setActiveCategory] = useState({
		patterns: "",
		pages: "",
		sites: "",
		templatelibrary: "",
	});
	const [isProTemplate, setIsProTemplate] = useState("");
	const [searchText, setSearchText] = useState("");
	const [activeTagTab, setActiveTagTab] = useState({
		patterns: "",
		pages: "",
		sites: "",
		templatelibrary: "",
	});

	const [currentPage, setCurrentPage] = useState({
		patterns: 1,
		pages: 1,
		sites: 1,
		templatelibrary: 1,
	});
	const [isImporting, setIsImporting] = useState(false);

	// Sort order for templates: newest | oldest | a-z | z-a
	const [sortOrder, setSortOrder] = useState("newest");

	// Helper: sorts a copy of items array based on sortOrder
	const sortItems = (items, order) => {
		if (!items || !items.length) return items;
		const sorted = [...items];
		switch (order) {
			case "oldest":
				// Smaller id = older
				return sorted.sort((a, b) => (a.id || 0) - (b.id || 0));
			case "a-z":
				return sorted.sort((a, b) =>
					(a.title || "").localeCompare(b.title || ""),
				);
			case "z-a":
				return sorted.sort((a, b) =>
					(b.title || "").localeCompare(a.title || ""),
				);
			case "newest":
			default:
				// Larger id = newer
				return sorted.sort((a, b) => (b.id || 0) - (a.id || 0));
		}
	};

	// Handler: updates sort order and re-sorts current data in place
	const handleSortChange = (order) => {

		setSortOrder(order);
		setData((prev) => ({
			...prev,
			patterns: {
				...prev.patterns,
				items: sortItems(prev.patterns.items, order),
			},
			pages: {
				...prev.pages,
				items: sortItems(prev.pages.items, order),
			},
			sites: {
				...prev.sites,
				items: sortItems(prev.sites.items, order),
			},
		}));
	};

	const userData = JSON.parse(localStorage.getItem("userData"));

	const [data, setData] = useState({
		patterns: {
			name: "Patterns",
			items: [],
			categories: [],
			pagination: {},
			tags: [],
		},
		pages: {
			name: "Pages",
			items: [],
			categories: [],
			pagination: {},
			tags: [],
		},
		sites: {
			name: "Sites",
			items: [],
			categories: [],
			pagination: {},
			tags: [],
		},
	});
	const [noneFilterData, setNoneFilterData] = useState({
		patterns: { categories: [], tags: [], pagination: {} },
		pages: { categories: [], tags: [], pagination: {} },
		sites: { categories: [], tags: [], pagination: {} },
	});

	const pageUrl = window.location.href;

	useEffect(() => {
		if (pageUrl.includes("/design-library/?patterns")) {
			setActiveTab("patterns");
		} else if (pageUrl.includes("/design-library/?pages")) {
			setActiveTab("pages");
		} else if (pageUrl.includes("/design-library/?sites")) {
			setActiveTab("sites");
		}
	}, []);

	const [patternsData, { data: patternsResponse, error, isLoading }] =
		usePostDataMutation();

	const getTemplatesData = async (
		value,
		email,
		license_key,
		page,
		tag,
		search,
		category,
		isPro,
	) => {
		try {
			const response = await patternsData({
				endpoint: value,
				body: {
					email: email,
					license_key: "",
					page: page,
					tag: tag,
					search: search,
					category: category,
					is_pro_template: isPro,
				},
				headers: {
					"Content-Type": "application/json",
				},
			}).unwrap();

			return response;
		} catch (err) {
			if (err?.data?.status === "error") {
				toast.error(err.data.message, {
					position: "top-right",
					autoClose: 3000,
				});
			}
		}
	};

	const handlePageChange = (tab, page) => {
		setCurrentPage((prev) => ({ ...prev, [tab]: page }));
		fetchData(
			tab,
			page,
			activeTagTab[activeTab],
			searchText,
			activeCategory[activeTab],
			isProTemplate,
		);
	};

	const handleActiveTag = (value) => {
		const newState = { [activeTab]: value };
		setActiveTagTab(newState);

		fetchData(
			activeTab,
			1,
			value,
			searchText,
			activeCategory[activeTab],
			isProTemplate,
		);
	};

	const handleSearchTemplates = (value) => {
		// Step 1: update input immediately
		setSearchText(value);

		// Step 2: clear previous timer
		if (debounceTimer) clearTimeout(debounceTimer);

		// Step 3: set new timer
		const timer = setTimeout(() => {
			fetchData(
				activeTab,
				1,
				activeTagTab[activeTab],
				value,
				activeCategory[activeTab],
				isProTemplate,
			);
		}, 1000);

		setDebounceTimer(timer);
	};

	const handleActiveCategoryTab = (value) => {
		if (value === "") {
			setResetCat(true);
		} else {
			setResetCat(false);
		}

		const newState = { [activeTab]: value };
		setActiveCategory(newState);
		setCurrentPage({ [activeTab]: 1 });

		fetchData(
			activeTab,
			1,
			activeTagTab[activeTab],
			searchText,
			value,
			isProTemplate,
		);
	};

	const handleTemplates = (value) => {
		if (value !== isProTemplate) {
			setIsProTemplate(value);
			fetchData(
				activeTab,
				1,
				activeTagTab[activeTab],
				searchText,
				activeCategory[activeTab],
				value,
			);
		} else {
			setIsProTemplate("");
			fetchData(
				activeTab,
				1,
				activeTagTab[activeTab],
				searchText,
				activeCategory[activeTab],
				"",
			);
		}
	};

	const fetchData = async (
		tab = activeTab,
		page,
		tag,
		search,
		category,
		isPro,
	) => {
		setLoading(true);

		try {
			let response;
			if (tab === "patterns") {
				response = await getTemplatesData(
					"patterns",
					"",
					"",
					page,
					tag,
					search,
					category,
					isPro,
				);
				if (response) {
					setData((prev) => ({
						...prev,
						patterns: {
							...prev.patterns,
							items: sortItems(response.items || [], sortOrder),
							categories: response.categories || [],
							pagination: response.pagination || {},
							tags: response.tags || [],
						},
					}));
				}
			} else if (tab === "pages") {
				response = await getTemplatesData(
					"pages",
					"",
					"",
					page,
					tag,
					search,
					category,
					isPro,
				);
				if (response) {
					setData((prev) => ({
						...prev,
						pages: {
							...prev.pages,
							items: sortItems(response.items || [], sortOrder),
							categories: response.categories || [],
							pagination: response.pagination || {},
							tags: response.tags || [],
						},
					}));
				}
			} else if (tab === "sites") {
				response = await getTemplatesData(
					"sites",
					"",
					"",
					page,
					tag,
					search,
					category,
					isPro,
				);
				if (response) {
					setData((prev) => ({
						...prev,
						sites: {
							...prev.sites,
							items: sortItems(response.items || [], sortOrder),
							categories: response.categories || [],
							pagination: response.pagination || {},
							tags: response.tags || [],
						},
					}));
				}
			}
		} catch (err) {
			console.error(`Error fetching ${activeTab}:`, err);
		} finally {
			setLoading(false);
		}
	};

	const fetchNoneFilterData = async (
		tab = activeTab,
		page,
		tag,
		search = searchText,
		category,
		isPro,
		savedTemplate,
	) => {
		setNoneFilterLoading(true);

		try {
			let response;
			if (tab === "patterns") {
				response = await getTemplatesData(
					"patterns",
					userData?.email,
					"",
					page,
					"",
					"",
					"",
				);
				if (response) {
					setNoneFilterData((prev) => ({
						...prev,
						patterns: {
							...prev.patterns,
							categories: response.categories || [],
							tags: response.tags || [],
							pagination: response.pagination || {},
						},
					}));
				}
			} else if (tab === "pages") {
				response = await getTemplatesData(
					"pages",
					userData?.email,
					"",
					page,
					"",
					"",
					"",
				);
				if (response) {
					setNoneFilterData((prev) => ({
						...prev,
						pages: {
							...prev.pages,
							categories: response.categories || [],
							tags: response.tags || [],
							pagination: response.pagination || {},
						},
					}));
				}
			} else if (tab === "sites") {
				response = await getTemplatesData(
					"sites",
					userData?.email,
					"",
					page,
					"",
					"",
					"",
				);
				if (response) {
					setNoneFilterData((prev) => ({
						...prev,
						sites: {
							...prev.sites,
							categories: response.categories || [],
							tags: response.tags || [],
							pagination: response.pagination || {},
						},
					}));
				}
			}
		} catch (err) {
			console.error(`Error fetching ${activeTab}:`, err);
		} finally {
			setNoneFilterLoading(false);
		}
	};

	useEffect(() => {
		setSearchText("");
		setCurrentPage({ [activeTab]: 1 });
		setActiveTagTab({ [activeTab]: "" });
		setActiveCategory({ [activeTab]: "" });
		setIsProTemplate("");
		fetchData(
			activeTab,
			1,
			activeTagTab[activeTab],
			"",
			activeCategory[activeTab],
			isProTemplate,
		);
		fetchNoneFilterData(
			activeTab,
			1,
			activeTagTab[activeTab],
			"",
			activeCategory[activeTab],
			isProTemplate,
		);
	}, [activeTab, userData?.email]);

	const TagTabsOptions = (() => {
		if (!data[activeTab]) return [];
		const currentItems = noneFilterData[activeTab].tags || [];
		const uniqueTags = [...new Set(currentItems)];
		return uniqueTags.map((tag) => ({
			name: tag.name,
			value: tag.name,
		}));
	})();

	useEffect(() => {
		if (activeTab === "templatelibrary" && !userData?.email) {
			setActiveTab("patterns");
		}
	}, [userData?.email]);

	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

	const handleSidebarToggle = useCallback(() => {
		setIsSidebarCollapsed((prev) => !prev);
	}, []);

	return (
		<>
			<div className="fb-template-library-store-wrap">
				<div className="fb-template-library-store-inner-wrap">
					<div className="fb-template-library-store-sidebar-wrapper">
						<TemplateSidebar
							activeTab={activeTab}
							data={noneFilterData}
							activeCategory={activeCategory}
							isProTemplate={isProTemplate}
							setIsProTemplate={setIsProTemplate}
							onChangeTemplates={handleTemplates}
							setActiveCategoryTab={handleActiveCategoryTab}
							setActiveTagTab={setActiveTagTab}
							resetCat={resetCat}
							setResetCat={setResetCat}
							loading={noneFilterLoading}
							isImporting={isImporting}
							isSidebarCollapsed={isSidebarCollapsed}
							handleSidebarToggle={handleSidebarToggle}
							setActiveTab={setActiveTab}
							searchText={searchText}
							searchTemplates={handleSearchTemplates}
							sortOrder={sortOrder}
							onSortChange={handleSortChange}
						/>
						<TemplateContent
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							activeCategory={activeCategory}
							data={data}
							activeTagTab={activeTagTab[activeTab]}
							searchText={searchText}
							searchTemplates={handleSearchTemplates}
							setActiveTagTab={handleActiveTag}
							TagTabsOptions={TagTabsOptions}
							isLogedIn={isLogedIn}
							setIsLogedIn={setIsLogedIn}
							loading={isLoading}
							setLoading={loading}
							tagLoading={noneFilterLoading}
							currentPage={currentPage[activeTab]}
							onPageChange={handlePageChange}
							isImporting={isImporting}
							isSidebarCollapsed={isSidebarCollapsed}
							handleSidebarToggle={handleSidebarToggle}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default PatternLibraryButton;
