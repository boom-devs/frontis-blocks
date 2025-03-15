import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { useEffect } from '@wordpress/element';
import metadata from './block.json';
import Inspector from './inspector';

const VARIATION_NAMESPACE = 'frontis-blocks/custom-loop';

registerBlockVariation('core/query', {
    name: VARIATION_NAMESPACE,
    title: __('Loop Builder', 'frontis-blocks'),
    description: __('Display posts with custom layout options', 'frontis-blocks'),
    category: 'frontis-blocks',
    isActive: ({ namespace, query }) => {
        return (
            namespace === VARIATION_NAMESPACE &&
            query.postType === 'post'
        );
    },
    icon: 'grid-view',
    attributes: {
        namespace: VARIATION_NAMESPACE,
        query: {
            perPage: 6,
            pages: 0,
            offset: 0,
            postType: 'post',
            order: 'desc',
            orderBy: 'date',
            author: '',
            search: '',
            exclude: [],
            sticky: '',
            inherit: false,
        },
        displayLayout: {
            type: 'flex',
            columns: 3
        }
    },
    innerBlocks: [
        [
            'core/post-template',
            {},
            [
                ['core/post-featured-image'],
                ['frontis-blocks/advanced-heading'],
                ['core/post-excerpt', { moreText: 'Read More' }]
            ],
        ],
        ['core/query-no-results', {}, [['core/paragraph', { content: 'No posts found.' }]]],
    ],
    scope: ['inserter'],
    allowedControls: ['inherit', 'order', 'taxQuery', 'search'],
});

// Function to initialize Swiper
const initializeSwiper = (clientId) => {
    // Wait for DOM to be ready
    setTimeout(() => {
        // Find the post template element in the editor
        const blockElement = document.querySelector(`[data-block="${clientId}"]`);
        if (!blockElement) return;
        
        const postTemplateElement = blockElement.querySelector('.wp-block-post-template');
        if (!postTemplateElement) return;
        
        // Check if Swiper is already initialized
        if (postTemplateElement.classList.contains('swiper-initialized')) return;
        
        // Check if Swiper is available
        if (window.Swiper) {
            console.log('Initializing Swiper for', clientId);
            
            // Add necessary Swiper classes
            postTemplateElement.classList.add('swiper-wrapper');
            
            // Find all direct children and add swiper-slide class
            const slides = postTemplateElement.children;
            Array.from(slides).forEach(slide => {
                slide.classList.add('swiper-slide');
            });
            
            // Create a container for Swiper
            const swiperContainer = document.createElement('div');
            swiperContainer.className = 'swiper';
            
            // Insert the container before the post template
            postTemplateElement.parentNode.insertBefore(swiperContainer, postTemplateElement);
            
            // Move post template into the container
            swiperContainer.appendChild(postTemplateElement);
            
            // Add navigation elements
            const prevButton = document.createElement('div');
            prevButton.className = 'swiper-button-prev';
            swiperContainer.appendChild(prevButton);
            
            const nextButton = document.createElement('div');
            nextButton.className = 'swiper-button-next';
            swiperContainer.appendChild(nextButton);
            
            // Add pagination
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            swiperContainer.appendChild(pagination);
            
            // Initialize Swiper
            new window.Swiper(swiperContainer, {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        } else {
            console.error('Swiper is not available');
        }
    }, 500); // Give time for the editor to render
};

// Add filter to customize the Query Loop when your variation is active
addFilter(
    'editor.BlockEdit',
    'frontis-blocks/with-loop-builder-controls',
    createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            const { name, attributes, setAttributes, clientId } = props;
            
            // Only apply to Query Loop block with your namespace
            if (name === 'core/query' && attributes.namespace === VARIATION_NAMESPACE) {
                // Initialize Swiper if layout type is slider
                useEffect(() => {
                    if (attributes.displayLayout?.type === 'slider') {
                        initializeSwiper(clientId);
                    }
                }, [attributes.displayLayout?.type, clientId]);
                
                return (
                    <>
                        <BlockEdit {...props} />
                        <Inspector
                            attributes={attributes}
                            setAttributes={setAttributes}
                            clientId={clientId}
                        />
                    </>
                );
            }
            return <BlockEdit {...props} />;
        };
    }, 'withLoopBuilderControls')
);

// Add filter to modify the post template block when inserted
addFilter(
    'blocks.getBlockAttributes',
    'frontis-blocks/modify-post-template-attributes',
    function (attributes, blockType, attributes2) {
        if (blockType.name === 'core/post-template' && attributes2?.namespace === VARIATION_NAMESPACE) {
            const displayLayout = attributes2.displayLayout || { type: 'flex', columns: 3 };
            const layoutClass = displayLayout.type === 'flex' ? 'fb-grid-layout' :
                displayLayout.type === 'list' ? 'fb-list-layout' :
                displayLayout.type === 'slider' ? 'fb-slider-layout' : '';

            return {
                ...attributes,
                className: `${attributes.className || ''} ${layoutClass}`.trim(),
                layout: displayLayout.type === 'flex' ?
                    { type: 'grid', columnCount: displayLayout.columns } :
                    displayLayout.type === 'list' ?
                        { type: 'default' } :
                        { type: 'default' } // For slider
            };
        }
        return attributes;
    }
);

// Add filter to specify the category for your Query variation
addFilter(
    'blocks.registerBlockType',
    'frontis-blocks/set-block-category',
    (settings, name) => {
        if (name === 'core/query' && settings.variations) {
            const updatedVariations = settings.variations.map(variation => {
                if (variation.name === VARIATION_NAMESPACE) {
                    return {
                        ...variation,
                        category: 'frontis-blocks'
                    };
                }
                return variation;
            });

            return {
                ...settings,
                variations: updatedVariations
            };
        }
        return settings;
    }
);

// Also add a function to initialize Swiper on the frontend
const initializeFrontendSwiper = () => {
    if (!window.Swiper) return;
    
    document.addEventListener('DOMContentLoaded', () => {
        // Find all slider layouts
        const sliderTemplates = document.querySelectorAll('.fb-slider-layout');
        
        sliderTemplates.forEach(template => {
            // Skip if already initialized
            if (template.classList.contains('swiper-initialized')) return;
            
            // Add swiper-wrapper class
            template.classList.add('swiper-wrapper');
            
            // Add swiper-slide class to children
            Array.from(template.children).forEach(child => {
                child.classList.add('swiper-slide');
            });
            
            // Create container
            const container = document.createElement('div');
            container.className = 'swiper';
            
            // Replace template with container
            template.parentNode.insertBefore(container, template);
            container.appendChild(template);
            
            // Add navigation and pagination
            const prevButton = document.createElement('div');
            prevButton.className = 'swiper-button-prev';
            container.appendChild(prevButton);
            
            const nextButton = document.createElement('div');
            nextButton.className = 'swiper-button-next';
            container.appendChild(nextButton);
            
            const pagination = document.createElement('div');
            pagination.className = 'swiper-pagination';
            container.appendChild(pagination);
            
            // Initialize Swiper
            new window.Swiper(container, {
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
        });
    });
};

// Initialize on frontend if not in editor
if (!window.wp || !window.wp.blockEditor) {
    initializeFrontendSwiper();
}