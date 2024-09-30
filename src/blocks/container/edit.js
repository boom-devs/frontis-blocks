import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Icon } from '@wordpress/components';
import { plus } from '@wordpress/icons';
import Inspector from './inspector';
import { VariationPicker } from './variationPicker';

const ALLOWED_BLOCKS = null; // Allow all blocks

const PlaceholderContent = () => (
  <div className="fb-placeholder">
    <Icon icon={plus} />
    <p>{__('Add blocks here', 'frontis-blocks')}</p>
  </div>
);

const Edit = (props) => {
  const { attributes, clientId } = props;
  const { layout, placeholder } = attributes;
  
  const blockProps = useBlockProps({
    className: `fb-container fb-container-${layout}`,
  });

  const { hasInnerBlocks } = useSelect(
    (select) => {
      const { getBlocks } = select('core/block-editor');
      return {
        hasInnerBlocks: getBlocks(clientId).length > 0,
      };
    },
    [clientId]
  );

  const innerBlocksProps = useInnerBlocksProps(
    { className: placeholder ? 'fb-inner-blocks-placeholder' : '' },
    {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: hasInnerBlocks
        ? undefined
        : InnerBlocks.ButtonBlockAppender,
      placeholder: placeholder ? PlaceholderContent : undefined,
    }
  );

  if (!layout && !hasInnerBlocks) {
    return <VariationPicker {...props} />;
  }

  return (
    <>
      <Inspector {...props} />
      <div {...blockProps}>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
};

export default Edit;