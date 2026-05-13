import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
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
					<div className="fb-coverflowCarousel-item">
						
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
