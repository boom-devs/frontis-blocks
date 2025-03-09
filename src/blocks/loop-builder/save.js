import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
    
    const blockProps = useBlockProps.save({
        className: `fb-loop-builder-block ${blockID}`,
    });
    
    // We'll save attributes as data attributes to be used by the frontend script
    return (
        <div 
            {...blockProps}
            data-post-type={postTypes}
            data-template-type={templateType}
            data-items-per-page={itemsPerPage}
            data-columns-desktop={columns.desktop}
            data-columns-tablet={columns.tablet}
            data-columns-mobile={columns.mobile}
            data-gap-desktop={gap.desktop}
            data-gap-tablet={gap.tablet}
            data-gap-mobile={gap.mobile}
            data-sort-by={sortBy}
            data-taxonomy-filter={taxonomyFilter}
            data-filter-terms={filterTerms ? filterTerms.join(',') : ''}
            data-show-pagination={showPagination}
            data-card-elements={JSON.stringify(cardElements)}
            data-image-size={imageSize}
            data-excerpt-length={excerptLength}
            data-meta-elements={JSON.stringify(metaElements)}
            data-button-text={buttonText}
            data-card-style={JSON.stringify(cardStyle)}
            data-title-style={JSON.stringify(titleStyle)}
            data-image-style={JSON.stringify(imageStyle)}
            data-button-style={JSON.stringify(buttonStyle)}
        >
            <div className="fb-loop-builder-wrapper">
                {/* Content will be dynamically populated with JavaScript */}
                <div className="fb-loop-builder-content"></div>
                <div className="fb-loop-builder-pagination"></div>
            </div>
        </div>
    );
}