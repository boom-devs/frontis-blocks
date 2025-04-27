import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        animation
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-masionry-testimonial frontis-block ${blockID || ''} ${animation !== 'none' ? `animate__${animation}` : ''}`,
    });

    // Return a minimal structure that will be replaced by the render.php file
    return <div {...blockProps}></div>;
}