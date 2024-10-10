import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import BlockCard from './BlockCard';

import '../../assets/css/switch.css';

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const loadBlocks = () => {
      const blocksData = window.frontisBlocksAdmin?.blocks;
      
      if (blocksData && typeof blocksData === 'object') {
        const blocksArray = Object.values(blocksData);
        setBlocks(blocksArray);
      }
      setIsLoading(false);
    };

    loadBlocks();
  }, []);

  const categoryInfo = useMemo(() => {
    const info = blocks.reduce((acc, block) => {
      const category = block.category;
      if (!acc[category]) {
        acc[category] = { count: 0, blocks: [] };
      }
      acc[category].count++;
      acc[category].blocks.push(block);
      return acc;
    }, {});

    const totalCount = blocks.length;
    return { all: { count: totalCount, blocks: blocks }, ...info };
  }, [blocks]);

  const filteredCategories = selectedCategory === 'all' 
    ? Object.entries(categoryInfo).filter(([category]) => category !== 'all')
    : [[selectedCategory, categoryInfo[selectedCategory]]];

  if (isLoading) {
    return <div>{__('Loading blocks...', 'frontis-blocks')}</div>;
  }

  return (
    <div className="frontis-blocks-blocks">
      <h2>{__('Blocks', 'frontis-blocks')}</h2>
      <div className="category-filter">
        {Object.entries(categoryInfo).map(([category, { count }]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category === 'all' ? __('All', 'frontis-blocks') : category.charAt(0).toUpperCase() + category.slice(1)} ({count})
          </button>
        ))}
      </div>
      {filteredCategories.length > 0 ? (
        filteredCategories.map(([category, { blocks: categoryBlocks }]) => (
          <div key={category} className={`category-group ${category}`}>
            <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '1rem', color: '#f04' }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="category-blocks">
              {categoryBlocks.map((block) => (
                <BlockCard key={block.slug} block={block} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>{__('No blocks found.', 'frontis-blocks')}</p>
      )}
    </div>
  );
};

export default Blocks;