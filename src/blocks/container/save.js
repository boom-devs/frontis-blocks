import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { layout, columns, rows } = attributes;
  const blockProps = useBlockProps.save({
    className: `fb-container fb-container-${layout}`,
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: rows > 1 ? `repeat(${rows}, 1fr)` : 'auto',
    },
  });

  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
};

export default Save;