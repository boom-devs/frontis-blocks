import { __ } from '@wordpress/i18n';
import { Button, Placeholder } from '@wordpress/components';
import { columns as columnsIcon } from '@wordpress/icons';

export const VariationPicker = ({ variations, onSelect }) => (
    <Placeholder
        icon={columnsIcon}
        label={__('Column Layout', 'frontis-blocks')}
        instructions={__('Select a column layout to start with.', 'frontis-blocks')}
    >
        <div className="fb-column-variation-picker">
            {variations.map((variation) => (
                <Button
                    key={variation.name}
                    icon={variation.icon}
                    onClick={() => onSelect(variation)}
                    variant="secondary"
                >
                    {variation.title}
                </Button>
            ))}
        </div>
    </Placeholder>
);
