import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import BlockCard from './BlockCard';
import { toast } from 'react-toastify';

import '../../../assets/css/backend/switch.css';
import BlockHeader from './BlockHeader';
import FBSwitch from '../../components/common/Switch';

const Blocks = () => {
	const [disableAllBlocks, setDisableAllBlocks] = useState(false);
	const [disabledCategories, setDisabledCategories] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');
	const { ajaxUrl, nonce, blocks: allBlocks, completedBlocks, isProActive } = window.frontisBlocksAdmin;
	const [blocks, setBlocks] = useState([]);

	const handleChange = () => {
		// setDisableAllBlocks(!disableAllBlocks);
	};

	useEffect(() => {
		setBlocks(completedBlocks);
		const allDisabled = completedBlocks.every(block => block.status === '0');
		setDisableAllBlocks(allDisabled);
	}, []);

	const saveBlocks = (updatedBlocks) => {
		const blocksToSave = updatedBlocks.reduce((acc, block) => {
			acc[block.slug] = block.status === '1';
			return acc;
		}, {});

		jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_save_blocks',
				security: nonce,
				blocks: JSON.stringify(blocksToSave)
			},
			success: function (response) {
				if (response.success) {
					setBlocks(updatedBlocks);
					toast.success(__('Blocks saved successfully', 'frontis-blocks'));
				} else {
					toast.error(__('Failed to save blocks', 'frontis-blocks'));
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				toast.error(__('Error saving blocks', 'frontis-blocks'));
			}
		});
	};

	const blocksCategory = useMemo(() => {
		const filteredBlocks = blocks.filter(block =>
			block.title.toLowerCase().includes(searchTerm.toLowerCase()) && block.child === 'false'
		);

		const info = filteredBlocks.reduce((acc, block) => {
			const category = block.category;
			if (!acc[category]) {
				acc[category] = { count: 0, blocks: [] };
			}
			acc[category].count++;
			acc[category].blocks.push(block);
			return acc;
		}, {});

		const totalCount = filteredBlocks.length;
		return { all: { count: totalCount, blocks: filteredBlocks }, ...info };
	}, [blocks, searchTerm]);

	// Keep disabledCategories in sync with blocks
	useEffect(() => {
		const categoryStates = {};
		Object.entries(blocksCategory).forEach(([category, { blocks: categoryBlocks }]) => {
			if (category !== 'all') {
				const allCategoryDisabled = categoryBlocks.every(block => block.status === '0');
				categoryStates[category] = allCategoryDisabled;
			}
		});
		setDisabledCategories(categoryStates);
	}, [blocks, blocksCategory]);

	const filteredCategories = selectedCategory === 'all'
		? Object.entries(blocksCategory).filter(([category]) => category !== 'all')
		: [[selectedCategory, blocksCategory[selectedCategory]]];

	const clearSearch = () => {
		setSearchTerm('');
	};

	const handleEnableAll = () => {
		const updatedBlocks = blocks.map(block => ({ ...block, status: '1' }));
		setBlocks(updatedBlocks);
		saveBlocks(updatedBlocks);
	};

	const handleDisableAll = () => {
		const updatedBlocks = blocks.map(block => ({ ...block, status: '0' }));
		setBlocks(updatedBlocks);
		saveBlocks(updatedBlocks);
	};

	const handleBlockChange = (slug, enabled) => {
		const updatedBlocks = blocks.map(block =>
			block.slug === slug ? { ...block, status: enabled ? '1' : '0' } : block
		);
		setBlocks(updatedBlocks);
		saveBlocks(updatedBlocks);
	};

	const [openIndices, setOpenIndices] = useState([]);

	const toggleAccordion = (e) => {
		e.stopPropagation();
		const index = Number(e.currentTarget.dataset.index);
		setOpenIndices((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	const disableAllBlocksHandler = () => {
		const newStatus = disableAllBlocks ? '1' : '0'; // Toggle logic
		setDisableAllBlocks(!disableAllBlocks);

		const updatedBlocks = blocks.map(block => ({
			...block,
			status: newStatus
		}));

		setBlocks(updatedBlocks);
		saveBlocks(updatedBlocks);
	}

	const categoryBlocksHandler = (category) => {
		const currentStatus = disabledCategories[category] || false;
		const newStatus = currentStatus ? '1' : '0';
		const updatedBlocks = blocks.map(block => {
			if (block.category === category) {
				return { 
					...block, 
					status: newStatus 
				};
			}
			return block;
		});

		setBlocks(updatedBlocks);
		saveBlocks(updatedBlocks);
	}

	return (
		<div className="fb-blocks-container">
			<div className="fb-blocks-header">
				<div className="fb-blocks-header-left">
					<div className="fb-video-banner-header">
						<h1 className='heading-1'>{__('Global Control', 'frontis-blocks')}</h1>
						<p className='p1'>{__('Global control allows users to easily enable or disable all available blocks together, simplifying block management.', 'frontis-blocks')}</p>
					</div>
					<div className='fb-blocks-tab-header'>
						<BlockHeader onChange={setSearchTerm} value={searchTerm} categories={blocksCategory} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} disableAllBlocksHandler={disableAllBlocksHandler} disableAllBlocks={disableAllBlocks} />
					</div>
				</div>
			</div>
			{isLoading ? (
				<>
					{/* Show 2-3 skeleton groups for realism */}
					{[1, 2, 3].map((i) => (
						<div key={i} className="fb-blocks-skeleton">
							<div className="fb-blocks-skeleton-header">
								<div className="fb-blocks-skeleton-title"></div>
								<div className="fb-blocks-skeleton-toggle">
									<div className="fb-blocks-skeleton-toggle-label"></div>
									<div className="fb-blocks-skeleton-switch"></div>
									<div className="fb-blocks-skeleton-icon"></div>
								</div>
							</div>
							<div className="fb-blocks-skeleton-content">
								{[1, 2, 3].map((j) => (
									<div key={j} className="fb-blocks-skeleton-card">
										<div className="fb-blocks-skeleton-card-icon"></div>
										<div className="fb-blocks-skeleton-card-body">
											<div className="fb-blocks-skeleton-card-title"></div>
											<div className="fb-blocks-skeleton-card-subtitle"></div>
										</div>
										<div className="fb-blocks-skeleton-card-switch"></div>
									</div>
								))}
							</div>
						</div>
					))}
				</>
			) : (
				filteredCategories.length > 0 ? (
					filteredCategories.map(([category, { blocks: categoryBlocks }], index) => (
						<div
							key={category}
							className={`fb-blocks-category-group fb-blocks-category-group--${category} ${openIndices.includes(index) ? 'active' : ''
								}`}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="fb-blocks-category-group-header">
								<h3 className="fb-blocks-category-title">
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</h3>

								<div
									className="fb-blocks-category-group-toggle"
									onClick={(e) => e.stopPropagation()}
								>
									<span className="fb-blocks-category-group-toggle-label">
										Disable All
									</span>

									<FBSwitch 
										onChange={() => categoryBlocksHandler(category)} 
										checked={disabledCategories[category] || false} 
									/>

									<span
										className="fb-blocks-category-group-header-icon"
										data-index={index}
										onClick={toggleAccordion}
										aria-expanded={openIndices.includes(index)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
												fill="#404655"
											/>
										</svg>
									</span>
								</div>
							</div>
							{openIndices.includes(index) && (
								<div className={`fb-blocks-category-content`}>
									{categoryBlocks.map((block) => (
										<BlockCard
											key={block.slug}
											block={block}
											onChange={handleBlockChange}
										/>
									))}
								</div>
							)}
						</div>
					))
				) : (
					<p className="fb-blocks-no-results">
						{__('No blocks found.', 'frontis-blocks')}
					</p>
				)
			)}
		</div>
	);
};

export default Blocks;