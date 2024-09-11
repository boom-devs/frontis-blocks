import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		icon,
		blockID
	} = attributes;

	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps} id={blockID}>
			<h1>{renderSVG(icon)}</h1>
		</div>
	);
}
