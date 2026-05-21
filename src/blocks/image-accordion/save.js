import { useBlockProps } from "@wordpress/block-editor";
import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockID,
		classHook,
		imageAccordionGlobalWraperID,
		imageAccordionGlobalWraperClass,

		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-imageAccordion-main-wrapper ${blockID} ${
			imageAccordionDesktopSwitcher && "fb-desktop-responsive"
		} ${imageAccordionTabletSwitcher && "fb-tablet-responsive"} ${
			imageAccordionMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-imageAccordion-wrapper fb-parent-${blockID} ${classHook} ${imageAccordionGlobalWraperClass}`}
					id={imageAccordionGlobalWraperID}
				>
					<div className={`fb-imageAccordion-container`}>
						<div className="fb-imageAccordion-inner">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
