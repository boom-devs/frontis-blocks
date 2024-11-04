import { useBlockProps, InnerBlocks, useInnerBlocksProps, __experimentalUseInnerBlocksProps as useInnerBlocksPropsV2 } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { plus } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector';
import { VariationPicker } from './variationPicker';
import './editor.scss';

const ALLOWED_BLOCKS = null; // Allow all blocks

const PlaceholderContent = () => (
  <div className="fb-placeholder">
    <Icon icon={plus} />
    <p>{__('Add blocks here', 'frontis-blocks')}</p>
  </div>
);

const Edit = (props) => {
  const { attributes, clientId, setAttributes } = props;
  const { 
    layout, 
    placeholder, 
    isChildBlock,
    containerWidth,
    contentBoxWidth,
    minimumHeight,
    equalHeight,
    overflow,
  } = attributes;
    
  const containerRef = useRef(null);


  const getColumnClass = (layout, isChildBlock, index) => {
    if (!isChildBlock) return '';
  
    let columnClass = 'fb-column';
  
    switch (layout) {
      case 'two-columns':
        columnClass += ' fb-column-50';
        break;
      case 'three-columns':
        columnClass += ' fb-column-33';
        break;
      case 'four-columns':
        columnClass += ' fb-column-25';
        break;
      case 'two-rows-two-columns':
        columnClass += ' fb-column-50';
        break;
      case 'three-columns-wide-center':
        if (index === 1) {
          columnClass += ' fb-column-50';
        } else {
          columnClass += ' fb-column-25';
        }
        break;
      case 'two-thirds-one-third':
        if (index === 0) {
          columnClass += ' fb-column-66';
        } else {
          columnClass += ' fb-column-33';
        }
        break;
      case 'one-third-two-thirds':
        if (index === 0) {
          columnClass += ' fb-column-33';
        } else {
          columnClass += ' fb-column-66';
        }
        break;
      case 'two-rows-three-columns':
        columnClass += ' fb-column-33';
        break;
      default:
        columnClass += ' fb-column-equal';
    }
  
    return columnClass;
  };

  const containerStyle = {
    ...(containerWidth === 'custom' && { maxWidth: `${contentBoxWidth}px` }),
    ...(minimumHeight && { minHeight: `${minimumHeight}px` }),
    ...(equalHeight && { height: '100%' }),
    overflow,
  };

//   const containerClasses = [
//     'fb-container',
//     isChildBlock ? getColumnClass(layout, isChildBlock, index) : `fb-container-${layout}`,
//     containerWidth === 'boxed' ? 'fb-container-boxed' : '',
//     equalHeight ? 'fb-container-equal-height' : '',
//     placeholder ? 'fb-inner-blocks-placeholder' : '',
    //   ].filter(Boolean).join(' ');
    
    const containerClasses = [
        'fb-container',
        isChildBlock ? 'fb-column' : `fb-container-${layout}`,
        containerWidth === 'boxed' ? 'fb-container-boxed' : '',
        equalHeight ? 'fb-container-equal-height' : '',
        placeholder ? 'fb-inner-blocks-placeholder' : '',
      ].filter(Boolean).join(' ');

  const blockProps = useBlockProps({
    className: containerClasses,
    style: containerStyle,
    ref: containerRef,
  });

  const { hasInnerBlocks, isParentBlock } = useSelect(
    (select) => {
      const { getBlocks, getBlockRootClientId } = select('core/block-editor');
      return {
        hasInnerBlocks: getBlocks(clientId).length > 0,
        isParentBlock: getBlockRootClientId(clientId) === '',
      };
    },
    [clientId]
  );

  const innerBlocksProps = useInnerBlocksProps(
    {},
    {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: hasInnerBlocks
        ? undefined
        : InnerBlocks.ButtonBlockAppender,
      placeholder: placeholder ? PlaceholderContent : undefined,
    }
  );

  useEffect(() => {
    if (isChildBlock === undefined) {
      setAttributes({ isChildBlock: !isParentBlock });
    }
  }, [isChildBlock, isParentBlock, setAttributes]);

  useEffect(() => {
    if (containerRef.current && isParentBlock) {
      const childBlocks = containerRef.current.querySelectorAll('.fb-container');
      childBlocks.forEach((child, index) => {
        const columnClass = getColumnClass(layout, true, index);
        child.classList.add(...columnClass.split(' '));
      });
    }
  }, [layout, isParentBlock]);

  if (isParentBlock && !layout && !hasInnerBlocks) {
    return <VariationPicker {...props} />;
  }

  return (
    <>
      {isParentBlock && <Inspector {...props} />}
      <div {...blockProps}>
        <div {...innerBlocksProps} />
      </div>
    </>
  );
};

export default Edit;