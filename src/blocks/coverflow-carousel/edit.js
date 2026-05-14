import {
	RichText,
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps
} from '@wordpress/block-editor';

import { useEffect, useRef, useState } from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatecoverflowCarouselNumberStyle from "./styling";

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
		
		coverflowCarouselGlobalWraperID,
		coverflowCarouselGlobalWraperClass,

		coverflowCarouselDesktopSwitcher,
		coverflowCarouselTabletSwitcher,
		coverflowCarouselMobileSwitcher,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-coverflow-carousel',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generatecoverflowCarouselNumberStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const ALLOWED_BLOCKS = [ 'frontis-blocks/coverflow-carousel-item' ];

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-coverflowCarousel-items-container',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: [
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
			],
		}
	);

	const blockProps = useBlockProps({
		className: `fb-coverflowCarousel-main-wrapper ${blockID} ${coverflowCarouselDesktopSwitcher && 'fb-desktop-responsive'} ${coverflowCarouselTabletSwitcher && 'fb-tablet-responsive'} ${coverflowCarouselMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>	
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-coverflowCarousel-wrapper ${blockID} ${coverflowCarouselGlobalWraperClass}`} id={coverflowCarouselGlobalWraperID}>
					<div {...innerBlocksProps} />
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
