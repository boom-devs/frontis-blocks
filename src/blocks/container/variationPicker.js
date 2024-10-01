import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { Button, Placeholder } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
import variations from './variations';

export const VariationPicker = ({ clientId, setAttributes }) => {
  const { replaceInnerBlocks } = useDispatch('core/block-editor');

  const selectVariation = (variation) => {
    setAttributes({ layout: variation.attributes.layout });
    
    const newInnerBlocks = variation.innerBlocks.map(([name, attributes]) => 
      createBlock(name, { ...attributes, placeholder: undefined })
    );
    
    replaceInnerBlocks(clientId, newInnerBlocks, false);
  };

  return (
    <Placeholder
      icon="layout"
      label={__('Container Layout', 'frontis-blocks')}
      instructions={__('Select a container layout to start with.', 'frontis-blocks')}
    >
      <div className="fb-container-variation-picker">
        {variations.map((variation) => (
          <Button
            key={variation.name}
            icon={variation.icon}
            onClick={() => selectVariation(variation)}
            variant="secondary"
          >
            {variation.title}
          </Button>
        ))}
      </div>
    </Placeholder>
  );
};