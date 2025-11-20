import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-breadcrumb-main-wrapper ${blockID}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-breadcrumb-container ${blockID}`} id={blockID}>

				</div>
			</div>
		</>
	);
}
