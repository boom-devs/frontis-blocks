import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { layoutType, columns, rows } = attributes;
  const blockProps = useBlockProps.save({
    className: `fb-container fb-container-${layoutType}`,
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