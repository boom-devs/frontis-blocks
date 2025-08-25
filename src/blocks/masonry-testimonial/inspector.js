import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    RangeControl,
    ToggleControl,
    TextControl,
    ColorPalette
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
    ANIMATION
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        postsToShow,
        postType,
        postOrder,
        columns,
        showImage,
        showAuthor,
        showRole,
        textColor,
        backgroundColor,
        itemBackgroundColor,
        animation
    } = attributes;

    // Get available post types
    const postTypes = useSelect((select) => {
        const { getPostTypes } = select('core');
        const excludedTypes = ['attachment', 'page', 'wp_block', 'wp_navigation'];
        const filteredTypes = getPostTypes({ per_page: -1 })?.filter(
            ({ viewable, slug }) => viewable && !excludedTypes.includes(slug)
        );
        return filteredTypes;
    }, []);

    const postTypeOptions = postTypes
        ? [
            { label: __('Select Post Type', 'frontis-blocks'), value: '' },
            ...postTypes.map(({ labels, slug }) => ({
                label: labels.singular_name,
                value: slug,
            })),
        ]
        : [{ label: __('Loading...', 'frontis-blocks'), value: '' }];

   
    useEffect(() => {
        if (clientId && typeof clientId === 'string' && !blockID) {
            setAttributes({
                blockID: "fb-masionry-testimonial-" + clientId.slice(0, 8),
            });
        }
    }, [clientId, blockID, setAttributes]);



    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody title={__("Testimonial Content", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Post Type", "frontis-blocks")}
                    value={postType}
                    options={postTypeOptions}
                    onChange={(value) => setAttributes({ postType: value })}
                />
                
                <SelectControl
                    label={__("Post Order", "frontis-blocks")}
                    value={postOrder}
                    options={[
                        { label: __('Latest First', 'frontis-blocks'), value: 'desc' },
                        { label: __('Oldest First', 'frontis-blocks'), value: 'asc' },
                        { label: __('Random', 'frontis-blocks'), value: 'rand' },
                        { label: __('Title (A-Z)', 'frontis-blocks'), value: 'title' },
                        { label: __('Title (Z-A)', 'frontis-blocks'), value: 'title-desc' },
                    ]}
                    onChange={(value) => setAttributes({ postOrder: value })}
                />

                <RangeControl
                    label={__("Number of Testimonials", "frontis-blocks")}
                    value={postsToShow}
                    onChange={(value) => setAttributes({ postsToShow: value })}
                    min={1}
                    max={20}
                />
                <RangeControl
                    label={__("Columns", "frontis-blocks")}
                    value={columns}
                    onChange={(value) => setAttributes({ columns: value })}
                    min={1}
                    max={6}
                />
                <ToggleControl
                    label={__("Show Author Image", "frontis-blocks")}
                    checked={showImage}
                    onChange={(value) => setAttributes({ showImage: value })}
                />
                <ToggleControl
                    label={__("Show Author Name", "frontis-blocks")}
                    checked={showAuthor}
                    onChange={(value) => setAttributes({ showAuthor: value })}
                />
                <ToggleControl
                    label={__("Show Role/Designation", "frontis-blocks")}
                    checked={showRole}
                    onChange={(value) => setAttributes({ showRole: value })}
                />
            </PanelBody>
        </>
	);

    /**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>

		</>
	);

    /**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
            <PanelBody title={__("Animation", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Animation Effect", "frontis-blocks")}
                    value={animation}
                    options={ANIMATION}
                    onChange={(value) => setAttributes({ animation: value })}
                />
            </PanelBody>
		</>
	);

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}