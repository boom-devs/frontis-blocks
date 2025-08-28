import { __ } from '@wordpress/i18n';
import { BlockControls, ColorPalette } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarDropdownMenu } from '@wordpress/components';
import { more } from '@wordpress/icons';

export default function HighlightToolbar( { attributes, setAttributes } ) {

    const onHighlightColorChange = ( color ) => {
        setAttributes( { highlightColor: color } );
    };

    return (
        <BlockControls group="block">
            <ToolbarGroup>
                <ToolbarDropdownMenu
                    icon={more}
                    label={__('Highlight', 'frontis-blocks')}
                    controls={[]}
                >
                    {() => (
                        <div style={{ padding: '10px', width: '200px' }}>
                            <p>{__('Highlight Color', 'frontis-blocks')}</p>
                            <ColorPalette
                                value={attributes.highlightColor}
                                onChange={onHighlightColorChange}
                            />
                        </div>
                    )}
                </ToolbarDropdownMenu>
            </ToolbarGroup>
        </BlockControls>
    )
}
