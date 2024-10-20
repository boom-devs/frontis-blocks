import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import BlockCard from './BlockCard';
import { toast } from 'react-toastify';

import '../../assets/css/switch.css';

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { ajaxurl, nonce, blocks: allBlocks } = window.frontisBlocksAdmin;

  useEffect(() => {
    getBlocks();
  }, []);

  const getBlocks = () => {
    console.log('Fetching blocks...');
    window.jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: {
        action: 'fb_get_active_blocks',
        security: nonce
      },
      success: function(response) {
        console.log('Raw response:', response);
        if (response.success) {
          console.log('Blocks data:', response.data);
          setBlocks(response.data);
        } else {
          console.error('Failed to fetch blocks:', response.data?.message || 'Unknown error');
          toast.error(__('Failed to fetch blocks', 'frontis-blocks'));
        }
        setIsLoading(false);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching blocks:', textStatus, errorThrown);
        console.log('Response text:', jqXHR.responseText);
        toast.error(__('Error fetching blocks', 'frontis-blocks'));
        setIsLoading(false);
      }
    });
  };

  const saveBlocks = (updatedBlocks) => {
    console.log('Saving blocks:', updatedBlocks);
    const blocksToSave = updatedBlocks.reduce((acc, block) => {
      acc[block.slug] = block.status === '1';
      return acc;
    }, {});

    console.log('Blocks to save:', blocksToSave);

    window.jQuery.ajax({
      url: ajaxurl,
      type: 'POST',
      data: {
        action: 'fb_save_blocks',
        security: nonce,
        blocks: JSON.stringify(blocksToSave)
      },
      success: function(response) {
        console.log('Save blocks response:', response);
        if (response.success) {
          console.log('Blocks saved successfully');
          toast.success(__('Blocks saved successfully', 'frontis-blocks'));
        } else {
          console.error('Failed to save blocks:', response.data?.message || 'Unknown error');
          toast.error(__('Failed to save blocks', 'frontis-blocks'));
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error saving blocks:', textStatus, errorThrown);
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
              placeholder={__('Search blocks...', 'frontis-blocks')}
              className="fb-blocks-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="fb-blocks-search-clear" onClick={clearSearch}>
                ×
              </button>
            )}
          </div>
        </div>
        <div className="fb-blocks-header-right">
          <button className="fb-blocks-button fb-blocks-enable-all" onClick={handleEnableAll}>
            {__('Enable All', 'frontis-blocks')}
          </button>
          <button className="fb-blocks-button fb-blocks-disable-all" onClick={handleDisableAll}>
            {__('Disable All', 'frontis-blocks')}
          </button>
        </div>
      </div>
      <div className="fb-blocks-category-filter">
        {Object.entries(categoryInfo).map(([category, { count }]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`fb-blocks-category-button ${selectedCategory === category ? 'fb-blocks-category-button--active' : ''}`}
          >
            {category === 'all' ? __('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1)} ({count})
          </button>
        ))}
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
