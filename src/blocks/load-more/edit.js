import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import apiFetch from '@wordpress/api-fetch';
import { Spinner } from '@wordpress/components';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    postType,
    postsPerPage,
    orderBy,
    order,
    showLoadMoreButton,
    showFeaturedImage,
    showTitle,
    showContent,
    showCategories,
    alternateLayout
  } = attributes;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts when attributes change
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const fetchedPosts = await apiFetch({
          path: `/wp/v2/${postType}?per_page=${postsPerPage}&orderby=${orderBy}&order=${order}`
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postType, postsPerPage, orderBy, order]);

  // Get taxonomy for the selected post type
  const taxonomy = useSelect((select) => {
    const { getTaxonomies } = select(coreStore);
    const taxonomies = getTaxonomies({ per_page: -1 });
    return taxonomies?.find(tax => 
      tax.types.includes(postType) && tax.hierarchical
    )?.slug || 'category';
  }, [postType]);

  const blockProps = useBlockProps({
    className: `fb-load-more-block ${blockID}`,
  });

  return (
    <div {...blockProps}>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
      />

      <div className="portfolios-wrapper">
        <div className="portfolio-items">
          {loading ? (
            <div className="loading-spinner">
              <Spinner />
            </div>
          ) : posts.length === 0 ? (
            <p className="no-posts-message">{__('No posts found.', 'frontis-blocks')}</p>
          ) : (
            posts.map((post, index) => {
              const isEven = index % 2 === 1;
              const className = alternateLayout ? (isEven ? 'right' : 'left') : '';
              
              return (
                <div key={post.id} className={`portfolio-item ${className}`}>
                  {showFeaturedImage && post.featured_media > 0 && (
                    <div className="portfolio-item-image">
                      <img 
                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/300'} 
                        alt={post.title.rendered} 
                      />
                    </div>
                  )}
                  <div className="portfolio-item-content">
                    {showTitle && (
                      <h3>
                        <a href={post.link}>{post.title.rendered}</a>
                      </h3>
                    )}
                    {showContent && (
                      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    )}
                    {showCategories && post._embedded?.['wp:term'] && (
                      <div className="portfolio-item-content-cats">
                        {post._embedded['wp:term'][0].map(term => (
                          <span key={term.id}>{term.name}</span>
                        ))}
                      </div>
                    )}
                    <div className="portfolio-item-content-btn">
                      <a href={post.link}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.9913 11.124L8.87678 11.124L8.87678 8.4577L23.5431 8.45771L23.5431 23.1241L20.8769 23.1241L20.8769 13.0096L9.401 24.4855L7.51538 22.5999L18.9913 11.124Z" fill="#00010B"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {showLoadMoreButton && (
          <div className="load-more">
            <a href="#" className="load-more-button">
              {__('Load More', 'frontis-blocks')}
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 3.11 16.94 3.11 16.94M3.11 16.94H7.63M3.11 16.94V21.94M2 12.5C2 6.98 6.44 2.5 12 2.5C18.67 2.5 22 8.06 22 8.06M22 8.06V3.06M22 8.06H17.56" stroke="#00010B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}