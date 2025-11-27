import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		breadcrumbGlobalWraperID,
		breadcrumbGlobalWraperClass,
		breadcrumbDesktopSwitcher,
		breadcrumbTabletSwitcher,
		breadcrumbMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-breadcrumb-main-wrapper ${blockID} ${breadcrumbDesktopSwitcher && 'fb-desktop-responsive'} ${breadcrumbTabletSwitcher && 'fb-tablet-responsive'} ${breadcrumbMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}> 
				<div className={`fb-parent-wrapper fb-breadcrumb-container ${breadcrumbGlobalWraperClass}`} id={breadcrumbGlobalWraperID}>

				</div>
			</div>
		</>
	);
}
