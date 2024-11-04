import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
  const { 
    layout, 
    htmlTag: Tag = 'div',
    placeholder, 
    containerWidth,
    contentBoxWidth,
    minimumHeight,
    equalHeight,
    overflow,
    isChildBlock,
  } = attributes;

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
        // For any unspecified layouts, default to equal width
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
//     isChildBlock ? getColumnClass() : `fb-container-${layout}`,
//     containerWidth === 'boxed' ? 'fb-container-boxed' : '',
//     equalHeight ? 'fb-container-equal-height' : '',
    //   ].filter(Boolean).join(' ');
    
    const containerClasses = [
        'fb-container',
        isChildBlock ? 'fb-column' : `fb-container-${layout}`,
        containerWidth === 'boxed' ? 'fb-container-boxed' : '',
        equalHeight ? 'fb-container-equal-height' : '',
        placeholder ? 'fb-inner-blocks-placeholder' : '',
      ].filter(Boolean).join(' ');

  const blockProps = useBlockProps.save({
    className: containerClasses,
    style: containerStyle,
  });

  return (
    <Tag {...blockProps}>
      <InnerBlocks.Content />
    </Tag>
  );
};

export default Save;