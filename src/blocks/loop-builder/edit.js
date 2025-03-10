import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    useInnerBlocksProps,
    store as blockEditorStore,
    InnerBlocks,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { 
    Placeholder, 
    Spinner, 
    Button,
    Notice 
} from '@wordpress/components';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        postType = 'post',
        postsPerPage = 3,
        order = 'desc',
        orderBy = 'date',
        includedCategories = [],
        includedTags = [],
        offset = 0,
        showFeaturedImage = true,
        showTitle = true,
        showExcerpt = true,
        excerptLength = 100,
        showReadMore = true,
        readMoreText = 'Read More',
        columns = 3,
        gap = 20
    } = attributes;
    
    const [isEditing, setIsEditing] = useState(false);
    
    // Generate a unique ID for the block if it doesn't exist
    useEffect(() => {
        if (!blockID) {
            setAttributes({ blockID: 'fb-loop-' + clientId.substr(0, 8) });
        }
    }, [blockID, clientId, setAttributes]);
    
    // Fetch posts based on query parameters
    const { posts, isLoading } = useSelect((select) => {
        if (!postType) return { posts: [], isLoading: false };
        
        const { getEntityRecords, isResolving } = select(coreStore);
        
        const query = {
            per_page: postsPerPage,
            order,
            orderby: orderBy,
            offset,
        };
        
        if (includedCategories && includedCategories.length > 0) {
            query.categories = includedCategories;
        }
        
        if (includedTags && includedTags.length > 0) {
            query.tags = includedTags;
        }
        
        return {
            posts: getEntityRecords('postType', postType, query) || [],
            isLoading: isResolving('getEntityRecords', ['postType', postType, query]),
        };
    }, [postType, postsPerPage, order, orderBy, offset, includedCategories, includedTags]);
    
    const { hasInnerBlocks } = useSelect(
        (select) => {
            const { getBlocks } = select(blockEditorStore);
            const blocks = getBlocks(clientId);
            return {
                hasInnerBlocks: blocks.length > 0,
            };
        },
        [clientId]
    );
    
    const blockProps = useBlockProps({
        className: `fb-loop-builder-block ${blockID}`,
    });
    
    const innerBlocksProps = useInnerBlocksProps(
        { className: 'fb-loop-builder-template' },
        {
            renderAppender: hasInnerBlocks
                ? undefined
                : InnerBlocks.ButtonBlockAppender,
            templateLock: false,
        }
    );
    
    // Generate CSS for the grid layout
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
    };
    
    // Function to truncate excerpt
    const truncateExcerpt = (text, length) => {
        if (!text) return '';
        if (text.length <= length) return text;
        return text.substr(0, length) + '...';
    };
    
    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            {!postType && (
                <Placeholder
                    icon="database"
                    label={__("Loop Builder", "frontis-blocks")}
                    instructions={__("Select a post type to start building your loop", "frontis-blocks")}
                >
                    <Notice status="warning" isDismissible={false}>
                        {__("Please select a post type in the block settings panel", "frontis-blocks")}
                    </Notice>
                </Placeholder>
            )}
            
            {postType && isLoading && (
                <Placeholder
                    icon="update"
                    label={__("Loading posts...", "frontis-blocks")}
                >
                    <Spinner />
                </Placeholder>
            )}
            
            {postType && !isLoading && posts.length === 0 && (
                <Placeholder
                    icon="warning"
                    label={__("No posts found", "frontis-blocks")}
                    instructions={__("Try changing your query settings or select a different post type", "frontis-blocks")}
                />
            )}
            
            {postType && !isLoading && posts.length > 0 && (
                <>
                    {isEditing ? (
                        <div className="fb-loop-template-editor">
                            <div className="fb-loop-template-header">
                                <h4>{__("Edit Loop Template", "frontis-blocks")}</h4>
                                <Button
                                    variant="primary"
                                    onClick={() => setIsEditing(false)}
                                >
                                    {__("Done", "frontis-blocks")}
                                </Button>
                            </div>
                            <div {...innerBlocksProps} />
                        </div>
                    ) : (
                        <>
                            <div className="fb-loop-preview-header">
                                <h4>{__("Loop Preview", "frontis-blocks")}</h4>
                                <Button
                                    variant="secondary"
                                    onClick={() => setIsEditing(true)}
                                >
                                    {__("Edit Template", "frontis-blocks")}
                                </Button>
                            </div>
                            <div className="fb-loop-preview" style={gridStyle}>
                                {posts.map((post, index) => (
                                    <div key={post.id} className="fb-loop-item">
                                        {hasInnerBlocks ? (
                                            <div className="fb-template-preview">
                                                {/* Placeholder for custom template */}
                                                <div className="fb-template-placeholder">
                                                    {__("Your Template", "frontis-blocks")}
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {showFeaturedImage && post.featured_media > 0 && (
                                                    <div className="fb-loop-featured-image">
                                                        <img src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '#'} alt={post.title.rendered} />
                                                    </div>
                                                )}
                                                {showTitle && (
                                                    <h3 className="fb-loop-title">{post.title.rendered}</h3>
                                                )}
                                                {showExcerpt && (
                                                    <div className="fb-loop-excerpt">
                                                        {truncateExcerpt(post.excerpt.rendered, excerptLength)}
                                                    </div>
                                                )}
                                                {showReadMore && (
                                                    <a href="#" className="fb-loop-read-more">{readMoreText}</a>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}