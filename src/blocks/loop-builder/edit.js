import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import { Spinner } from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    templateType,
    postTypes,
    itemsPerPage,
    columns,
    gap,
    sortBy,
    taxonomyFilter,
    filterTerms,
    showPagination,
    cardElements,
    imageSize,
    excerptLength,
    metaElements,
    buttonText,
    cardStyle,
    titleStyle,
    imageStyle,
    buttonStyle
  } = attributes;

  // Generate and set a unique ID for the block if not already set
  useEffect(() => {
    if (!blockID) {
      setAttributes({ blockID: `fb-loop-builder-${clientId.slice(0, 8)}` });
    }
  }, [blockID, clientId, setAttributes]);

  // State for posts and loading
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts based on query parameters
  const posts = useSelect((select) => {
    const { getEntityRecords } = select('core');
    
    // Build query parameters
    const query = {
      per_page: itemsPerPage,
      _embed: true,
    };
    
    // Add sorting
    if (sortBy) {
      if (sortBy === 'date_desc') {
        query.order = 'desc';
        query.orderby = 'date';
      } else if (sortBy === 'date_asc') {
        query.order = 'asc';
        query.orderby = 'date';
      } else if (sortBy === 'title_asc') {
        query.order = 'asc';
        query.orderby = 'title';
      } else if (sortBy === 'title_desc') {
        query.order = 'desc';
        query.orderby = 'title';
      } else if (sortBy === 'random') {
        query.orderby = 'rand';
      }
    }
    
    // Add taxonomy filtering
    if (taxonomyFilter && filterTerms && filterTerms.length > 0) {
      query[taxonomyFilter] = filterTerms.join(',');
    }
    
    return getEntityRecords('postType', postTypes, query);
  }, [postTypes, itemsPerPage, sortBy, taxonomyFilter, filterTerms]);

  // Update loading state when posts are fetched
  useEffect(() => {
    if (posts !== null) {
      setIsLoading(false);
    }
  }, [posts]);

  // Function to get excerpt with specific length
  const getExcerpt = (post) => {
    if (!post.excerpt?.rendered) {
      return '';
    }
    
    // Remove HTML tags
    const excerptText = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '');
    
    // Trim to specified length
    if (excerptLength && excerptText.length > excerptLength) {
      return excerptText.substring(0, excerptLength) + '...';
    }
    
    return excerptText;
  };

  // Function to get formatted date
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Function to get author name
  const getAuthorName = (post) => {
    if (post._embedded && post._embedded.author && post._embedded.author[0]) {
      return post._embedded.author[0].name;
    }
    return '';
  };

  // Function to get categories
  const getCategories = (post) => {
    if (post._embedded && post._embedded['wp:term']) {
      const categories = post._embedded['wp:term'][0] || [];
      return categories.map(cat => cat.name).join(', ');
    }
    return '';
  };

  // Function to get comments count
  const getCommentsCount = (post) => {
    return post.comments_count || 0;
  };

  // Function to get featured image URL
  const getFeaturedImage = (post) => {
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      // Try to get the requested size
      const media = post._embedded['wp:featuredmedia'][0];
      
      if (media.media_details && media.media_details.sizes) {
        // If requested size exists, use it
        if (media.media_details.sizes[imageSize]) {
          return media.media_details.sizes[imageSize].source_url;
        }
        
        // Otherwise use full size
        if (media.media_details.sizes.full) {
          return media.media_details.sizes.full.source_url;
        }
      }
      
      // Fallback to media source URL
      return media.source_url;
    }
    
    // Return placeholder if no featured image
    return 'https://via.placeholder.com/800x600?text=No+Image';
  };

  // Generate CSS for different template types
  const getGridStyles = () => {
    const containerStyles = {
      display: templateType === 'list' ? 'block' : 'grid',
      gridTemplateColumns: templateType !== 'list' ? `repeat(${columns.desktop}, 1fr)` : 'initial',
      gap: `${gap.desktop}px`,
    };
    
    return containerStyles;
  };
  
  // Function to render a single card
  const renderCard = (post) => {
    if (!post) return null;
    
    // Generate card style
    const cardCSS = {
      backgroundColor: cardStyle.backgroundColor,
      borderRadius: `${cardStyle.borderRadius}px`,
      padding: `${cardStyle.padding}px`,
      boxShadow: cardStyle.boxShadow ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
      overflow: 'hidden',
    };
    
    // Generate title style
    const titleCSS = {
      color: titleStyle.color,
      fontSize: `${titleStyle.fontSize.desktop}px`,
      marginBottom: `${titleStyle.marginBottom}px`,
      lineHeight: 1.2,
    };
    
    // Generate image style
    const imageCSS = {
      borderRadius: `${imageStyle.borderRadius}px`,
      marginBottom: `${imageStyle.marginBottom}px`,
      width: '100%',
      height: 'auto',
    };
    
    // Generate button style
    const buttonCSS = {
      backgroundColor: buttonStyle.backgroundColor,
      color: buttonStyle.textColor,
      borderRadius: `${buttonStyle.borderRadius}px`,
      padding: `${buttonStyle.padding.vertical}px ${buttonStyle.padding.horizontal}px`,
      display: 'inline-block',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none',
      marginTop: '15px',
    };
    
    return (
      <div className="fb-loop-card" style={cardCSS} key={post.id}>
        {cardElements.image && (
          <div className="fb-loop-card-image">
            <img 
              src={getFeaturedImage(post)} 
              alt={decodeEntities(post.title.rendered)}
              style={imageCSS}
            />
          </div>
        )}
        
        {cardElements.title && (
          <h3 className="fb-loop-card-title" style={titleCSS}>
            {decodeEntities(post.title.rendered)}
          </h3>
        )}
        
        {cardElements.meta && (
          <div className="fb-loop-card-meta" style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
            {metaElements.author && getAuthorName(post) && (
              <span className="fb-loop-card-author">
                {__("By", "frontis-blocks")} {getAuthorName(post)}
              </span>
            )}
            
            {metaElements.date && (
              <span className="fb-loop-card-date">
                {metaElements.author ? ' • ' : ''}{getFormattedDate(post.date)}
              </span>
            )}
            
            {metaElements.comments && (
              <span className="fb-loop-card-comments">
                {(metaElements.author || metaElements.date) ? ' • ' : ''}
                {getCommentsCount(post)} {getCommentsCount(post) === 1 ? __("Comment", "frontis-blocks") : __("Comments", "frontis-blocks")}
              </span>
            )}
            
            {metaElements.categories && getCategories(post) && (
              <div className="fb-loop-card-categories" style={{ marginTop: '5px' }}>
                {getCategories(post)}
              </div>
            )}
          </div>
        )}
        
        {cardElements.excerpt && (
          <div className="fb-loop-card-excerpt" style={{ marginBottom: '10px' }}>
            {getExcerpt(post)}
          </div>
        )}
        
        {cardElements.button && (
          <button className="fb-loop-card-button" style={buttonCSS}>
            {buttonText}
          </button>
        )}
      </div>
    );
  };

  // Function to render the post grid
  const renderPostGrid = () => {
    if (isLoading) {
      return (
        <div className="fb-loop-loading">
          <Spinner />
          <p>{__("Loading posts...", "frontis-blocks")}</p>
        </div>
      );
    }
    
    if (!posts || posts.length === 0) {
      return (
        <div className="fb-loop-no-posts">
          <p>{__("No posts found. Try adjusting your query settings.", "frontis-blocks")}</p>
        </div>
      );
    }
    
    return (
      <div className="fb-loop-grid" style={getGridStyles()}>
        {posts.map(post => renderCard(post))}
      </div>
    );
  };

  // Render pagination
  const renderPagination = () => {
    if (showPagination === 'none') {
      return null;
    }
    
    if (showPagination === 'numbers') {
      return (
        <div className="fb-loop-pagination" style={{ marginTop: '30px', textAlign: 'center' }}>
          <button className="fb-pagination-prev" disabled style={{ padding: '8px 12px', margin: '0 5px' }}>
            {__("Previous", "frontis-blocks")}
          </button>
          <button className="fb-pagination-number active" style={{ padding: '8px 12px', margin: '0 5px', backgroundColor: '#0066CC', color: 'white', border: 'none' }}>1</button>
          <button className="fb-pagination-number" disabled style={{ padding: '8px 12px', margin: '0 5px' }}>2</button>
          <button className="fb-pagination-next" disabled style={{ padding: '8px 12px', margin: '0 5px' }}>
            {__("Next", "frontis-blocks")}
          </button>
        </div>
      );
    }
    
    if (showPagination === 'load_more') {
      return (
        <div className="fb-loop-pagination" style={{ marginTop: '30px', textAlign: 'center' }}>
          <button className="fb-pagination-load-more" disabled style={{ padding: '10px 20px', backgroundColor: '#0066CC', color: 'white', border: 'none', borderRadius: '4px' }}>
            {__("Load More", "frontis-blocks")}
          </button>
        </div>
      );
    }
    
    return null;
  };

  const blockProps = useBlockProps({
    className: `fb-loop-builder-block ${blockID}`,
  });

  return (
    <div {...blockProps}>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
      />
      <div className='fb-loop-builder-wrapper'>
        <div className="fb-loop-builder-header" style={{ marginBottom: '20px' }}>
          <h3>{__("Loop Builder", "frontis-blocks")}</h3>
          <p>{__("Displaying", "frontis-blocks")} {itemsPerPage} {postTypes} {__("in", "frontis-blocks")} {templateType} {__("layout", "frontis-blocks")}</p>
        </div>
        
        {renderPostGrid()}
        {renderPagination()}
      </div>
    </div>
  );
}