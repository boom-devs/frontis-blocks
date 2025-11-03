import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import BlockCard from './BlockCard';
import { toast } from 'react-toastify';

import '../../../assets/css/backend/switch.css';
import BlockHeader from './BlockHeader';

// Add this mapping object after the imports

const Blocks = () => {
	const [blocks, setBlocks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');
	const { ajaxUrl, nonce, blocks: allBlocks } = window.frontisBlocksAdmin;

	console.log(allBlocks);

	useEffect(() => {
		getBlocks();
	}, []);

	const getBlocks = () => {
		jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_get_blocks',
				security: nonce
			},
			success: function (response) {
				try {
					if (typeof response === 'string') {
						response = JSON.parse(response);
					}
					if (response.success) {
						const activeBlocks = response.data || {};
						const updatedBlocks = Object.entries(allBlocks).map(([slug, blockData]) => ({
							...blockData,
							slug: slug,
							status: activeBlocks[slug] ? '1' : '0'
						}));
						setBlocks(updatedBlocks);
					} else {
						toast.error(__('Failed to fetch blocks', 'frontis-blocks'));
					}
				} catch (error) {
					toast.error(__('Error processing server response', 'frontis-blocks'));
				}
				setIsLoading(false);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				toast.error(__('Error fetching blocks', 'frontis-blocks'));
				setIsLoading(false);
			}
		});
	};

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
					toast.success(__('Blocks saved successfully', 'frontis-blocks'));
					setBlocks(updatedBlocks); // Update the local state with the saved blocks
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
			block.title.toLowerCase().includes(searchTerm.toLowerCase())
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

	console.log(blocksCategory);

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

	//   if (isLoading) {
	//     return <div>{__('Loading blocks...', 'frontis-blocks')}</div>;
	//   }

	return (
		<div className="fb-blocks-container">
			<div className="fb-blocks-header">
				<div className="fb-blocks-header-left">
					<div className="fb-video-banner-header">
						<h1 className='heading-1'>{__('Global Control', 'frontis-blocks')}</h1>
						<p className='p1'>{__('Global control allows users to easily enable or disable all available blocks together, simplifying block management.', 'frontis-blocks')}</p>
					</div>
					<div className='fb-blocks-tab-header'>
						<BlockHeader onChange={setSearchTerm} value={searchTerm} categories={blocksCategory} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
 					</div>
				</div>
			</div>
			{filteredCategories.length > 0 ? (
				filteredCategories.map(([category, { blocks: categoryBlocks }]) => (
					<div key={category} className={`fb-blocks-category-group fb-blocks-category-group--${category}`}>
						<h3 className="fb-blocks-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
						<div className="fb-blocks-category-content">
							{categoryBlocks.map((block) => (
								<BlockCard
									key={block.slug}
									block={block}
									onChange={handleBlockChange}
								/>
							))}
						</div>
					</div>
				))
			) : (
				<p className="fb-blocks-no-results">{__('No blocks found.', 'frontis-blocks')}</p>
			)}
		</div>
	);
};

export default Blocks;
