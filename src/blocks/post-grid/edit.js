// Edit.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from "@wordpress/element";
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import {
	SelectControl,
	PanelBody,
	TabPanel, RangeControl,
} from '@wordpress/components';
import LayoutGrid from './layoutGrid';
import './editor.scss';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		postType,
		postPerPage,
		selectedCatSwitcher,
		selectedCat,
		deSelectedCat,
		selectedTagSwitcher,
		selectedTag,
		deSelectedTag,
		selectedAuthorSwitcher,
		selectedAuthor,
		deSelectedAuthor,
		orderBy,
		sortOrder
    } = attributes;

    const blockProps = useBlockProps({
        className: `${blockId}`,
    });

    const { useSelect } = wp.data;

    const postLists = useSelect( ( select ) => {
        const query = {
            orderby: orderBy,
            order: sortOrder,
            per_page: postPerPage,
        };

        if (selectedCatSwitcher === 'include' && Array.isArray(selectedCat) && selectedCat.length > 0) {
            query.categories = selectedCat;
        } else if (selectedCatSwitcher === 'exclude' && Array.isArray(deSelectedCat) && deSelectedCat.length > 0) {
            query.categories_exclude = deSelectedCat;
        }

        if (selectedAuthorSwitcher === 'include' && Array.isArray(selectedAuthor) && selectedAuthor.length > 0) {
            query.author = selectedAuthor;
        } else if (selectedAuthorSwitcher === 'exclude' && Array.isArray(deSelectedAuthor) && deSelectedAuthor.length > 0) {
            query.author_exclude = deSelectedAuthor;
        }

        return select('core').getEntityRecords('postType', postType, query);
    } );

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            {postLists ? (
                <div {...blockProps} id={blockId}>
                    {postLists.length > 0 ? (
                        <div className='fb_post_grid_container'>
                            {postLists.map((item, index) => {
                                return <LayoutGrid data={item} index={index} />
                            })}
                        </div>
                    ) : (
                        <>
                            <p className="fb-post-grid-title">No post found</p>
                        </>
                    ) }

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
