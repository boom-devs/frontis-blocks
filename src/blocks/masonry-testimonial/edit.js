import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        postsToShow = 6,
        postType = 'post',
        postOrder = 'desc',
        columns = 3,
        showImage = true,
        showAuthor = true,
        showRole = true,
        textColor,
        backgroundColor,
        itemBackgroundColor,
        animation = 'none'
    } = attributes;

    // Set blockID on initial load
    useEffect(() => {
        if (!blockID) {
            setAttributes({ blockID: `fb-masionry-testimonial-${clientId.slice(0, 8)}` });
        }
    }, [blockID, clientId, setAttributes]);

    // Generate inline styles
    const containerStyle = {};
    const textStyle = {
        color: textColor || 'inherit',
    };
    const itemStyle = {
        backgroundColor: itemBackgroundColor || 'transparent',
    };

    if (columns) {
        containerStyle.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }

    const blockProps = useBlockProps({
        className: `fb-masionry-testimonial frontis-block ${blockID || ''} ${animation !== 'none' ? `animate__${animation}` : ''}`,
        style: backgroundColor ? { backgroundColor } : {},
    });

    // Fetch posts based on the selected post type
    const posts = useSelect((select) => {
        if (!postType) return [];
        
        const query = { 
            per_page: postsToShow,
            orderby: postOrder === 'title' || postOrder === 'title-desc' ? 'title' : 'date',
            order: postOrder === 'asc' || postOrder === 'title' ? 'asc' : 'desc'
        };
        
        if (postOrder === 'rand') {
            query.orderby = 'rand';
            delete query.order;
        }
        
        return select('core').getEntityRecords('postType', postType, query) || [];
    }, [postType, postsToShow, postOrder]);

    // Get loading state separately
    const isLoading = useSelect((select) => {
        if (!postType) return false;
        
        const query = { per_page: postsToShow };
        return select('core/data').isResolving('core', 'getEntityRecords', [
            'postType',
            postType,
            query,
        ]);
    }, [postType, postsToShow]);

    // Get all media and authors at once
    const media = useSelect((select) => {
        if (!posts?.length) return {};
        const mediaIds = posts.map(post => post.featured_media).filter(Boolean);
        return select('core').getMediaItems(mediaIds) || {};
    }, [posts]);

    const authors = useSelect((select) => {
        if (!posts?.length) return {};
        const authorIds = posts.map(post => post.author).filter(Boolean);
        return select('core').getAuthors() || {};
    }, [posts]);

    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            <div className="testimonial-container" style={containerStyle}>
                {isLoading ? (
                    <div className="loading-spinner">
                        <Spinner />
                        <p>{__('Loading testimonials...', 'frontis-blocks')}</p>
                    </div>
                ) : posts && posts.length > 0 ? (
                    posts.map((post) => {
                        const featuredImage = media[post.featured_media];
                        const author = authors?.find(a => a.id === post.author);
                        
                        const imageUrl = featuredImage?.source_url || '';
                        console.log(imageUrl);
                        const authorName = author?.name || post.title?.rendered || '';
                        const authorRole = post.meta?.author_designation || "Sales and service";
                        
                        return (
                            <div className="testimonial-item" key={post.id} style={itemStyle}>
                                <div className="testimonial-content" style={textStyle}>
                                    <p dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || post.content?.rendered || '' }}></p>
                                </div>
                                <div className="testimonial-bottom">
                                    {showAuthor && (
                                        <div className="author-info">
                                            {showAuthor && (
                                                <span className="author-name">{authorName}</span>
                                            )}
                                            {showRole && authorRole && (
                                                <span className="author-designation">{authorRole}</span>
                                            )}
                                        </div>
                                    )}
                                    {showImage && imageUrl && (
                                        <div className="author-avatar">
                                            <img src={imageUrl} alt={authorName} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="no-posts-message">
                        <p>{__('No testimonials found. Please select a post type and ensure it has content.', 'frontis-blocks')}</p>
                    </div>
                )}
            </div>
        </div>
    );
}