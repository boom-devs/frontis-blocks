import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import BlockCard from './BlockCard';
import { toast } from 'react-toastify';
import { All, Content, Creative } from '../icons';

import '../../assets/css/backend/switch.css';

// Add this mapping object after the imports
const categoryIcons = {
  all: All,
  content: Content,
  creative: Creative,
};

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { ajaxUrl, nonce, blocks: allBlocks } = window.frontisBlocksAdmin;

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
      success: function(response) {
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
      error: function(jqXHR, textStatus, errorThrown) {
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
      success: function(response) {
        if (response.success) {
          toast.success(__('Blocks saved successfully', 'frontis-blocks'));
          setBlocks(updatedBlocks); // Update the local state with the saved blocks
        } else {
          toast.error(__('Failed to save blocks', 'frontis-blocks'));
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        toast.error(__('Error saving blocks', 'frontis-blocks'));
      }
    });
  };

  const categoryInfo = useMemo(() => {
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

  const filteredCategories = selectedCategory === 'all' 
    ? Object.entries(categoryInfo).filter(([category]) => category !== 'all')
    : [[selectedCategory, categoryInfo[selectedCategory]]];

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

  if (isLoading) {
    return <div>{__('Loading blocks...', 'frontis-blocks')}</div>;
  }

  return (
    <div className="fb-blocks-container">
      <div className="fb-blocks-header">
        <div className="fb-blocks-header-left">
          <h2 className="fb-blocks-title">{__('Blocks', 'frontis-blocks')}</h2>
          <div className="fb-blocks-search">
            <input
              type="text"
              placeholder={__('Search Blocks', 'frontis-blocks')}
              className="fb-blocks-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="fb-blocks-search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <g clip-path="url(#clip0_4834_1174)">
              <circle cx="8.625" cy="8.625" r="7.125" stroke="#6A758E" stroke-width="1.5"/>
              <path d="M13.875 13.875L16.5 16.5" stroke="#6A758E" stroke-width="1.5" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_4834_1174">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </span>
            {searchTerm && (
              <button className="fb-blocks-search-clear" onClick={clearSearch}>
                ×
              </button>
            )}
          </div>
        </div>
        <div className="fb-blocks-header-right">
          <button className="fb-blocks-button fb-blocks-disable-all" onClick={handleDisableAll}>
            {__('Disable All', 'frontis-blocks')}
          </button>
          <button className="fb-blocks-button fb-blocks-enable-all" onClick={handleEnableAll}>
            {__('Enable All', 'frontis-blocks')}
          </button>
        </div>
      </div>
      <div className="fb-blocks-category-filter">
        {Object.entries(categoryInfo).map(([category, { count }]) => {
          const IconComponent = categoryIcons[category] || All;  // Use All as default
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`fb-blocks-category-button ${selectedCategory === category ? 'fb-blocks-category-button--active' : ''}`}
            >
              <span className="fb-blocks-category-button-icon">
                <IconComponent />
              </span>
              <span className="fb-blocks-category-button-title">
                {category === 'all' ? __('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              <span className="fb-blocks-category-button-count">{count}</span>
            </button>
          );
        })}
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
