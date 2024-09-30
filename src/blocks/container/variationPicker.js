import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { Button, Placeholder } from '@wordpress/components';
import { variations } from './variations';

export const VariationPicker = ({ clientId, setAttributes }) => {
  const { replaceInnerBlocks } = useDispatch('core/block-editor');

  const selectVariation = (variation) => {
    setAttributes(variation.attributes);
    if (variation.innerBlocks) {
      replaceInnerBlocks(clientId, variation.innerBlocks);
    }
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
            label={variation.title}
          />
        ))}
      </div>
    </Placeholder>
  );
};