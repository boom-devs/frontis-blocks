import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,

		coverflowCarouselGlobalWraperID,
		coverflowCarouselGlobalWraperClass,

		coverflowCarouselDesktopSwitcher,
		coverflowCarouselTabletSwitcher,
		coverflowCarouselMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-coverflowCarousel-main-wrapper ${blockID} ${coverflowCarouselDesktopSwitcher && 'fb-desktop-responsive'} ${coverflowCarouselTabletSwitcher && 'fb-tablet-responsive'} ${coverflowCarouselMobileSwitcher && 'fb-mobile-responsive'}`,
    });

	return (
		<div {...blockProps}>
			<div className={`fb-parent-wrapper fb-coverflowCarousel-wrapper ${blockID} ${coverflowCarouselGlobalWraperClass}`} id={coverflowCarouselGlobalWraperID}>
				<div className="fb-coverflowCarousel-item">
						
				</div>
			</div>
		</div>
	);
}
