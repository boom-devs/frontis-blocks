import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID, boxBgColor, borderRadius, beforeMediaUrl, width, height, titleColor, titleText
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});

	return (
		<>
		</>
	);
}
