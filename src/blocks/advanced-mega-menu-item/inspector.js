import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { 
    PanelBody, 
    TextControl,
    ToggleControl,
    SelectControl,
} from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        menuLabel,
        menuUrl,
        openInNewTab,
        hasSubmenu,
        isMegaMenu,
        selectedPattern,
    } = attributes;

    const [patterns, setPatterns] = useState([]);

    // Fetch patterns (same logic as off-canvas menu)
    const patternData = useSelect(select => {
        const allPatterns = select('core') ? select('core').getBlockPatterns() || [] : [];
        let userPatterns = [];
        
        try {
            if (select('core')) {
                userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
            }
        } catch (error) {
            console.log('Error getting user patterns:', error);
        }

        return { allPatterns, userPatterns };
    }, []);

    // Transform patterns for SelectControl
    useEffect(() => {
        const patternOptions = [
            { value: '', label: __('Select a pattern', 'frontis-blocks') }
        ];

        if (patternData.allPatterns && patternData.allPatterns.length > 0) {
            patternOptions.push(
                { value: 'core-separator', label: __('--- Theme Patterns ---', 'frontis-blocks'), disabled: true },
                ...patternData.allPatterns.map(pattern => ({
                    value: pattern.name,
                    label: pattern.title
                }))
            );
        }

        if (patternData.userPatterns && patternData.userPatterns.length > 0) {
            patternOptions.push(
                { value: 'user-separator', label: __('--- User Patterns ---', 'frontis-blocks'), disabled: true },
                ...patternData.userPatterns.map(pattern => ({
                    value: 'user-' + pattern.id,
                    label: pattern.title && pattern.title.raw ? pattern.title.raw : `Pattern ${pattern.id}`
                }))
            );
        }
        
        setPatterns(patternOptions);
    }, [patternData]);

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-mega-menu-item-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    // Reset pattern selection when mega menu is disabled
    useEffect(() => {
        if (!isMegaMenu && selectedPattern) {
            setAttributes({ selectedPattern: '' });
        }
    }, [isMegaMenu]);

    return (
        <InspectorControls>
            <PanelBody title={__("Menu Item Settings", "frontis-blocks")} initialOpen={true}>
                <TextControl
                    label={__("Menu URL", "frontis-blocks")}
                    value={menuUrl || ''}
                    onChange={(value) => setAttributes({ menuUrl: value })}
                    placeholder="https://"
                />

                <ToggleControl
                    label={__("Open in New Tab", "frontis-blocks")}
                    checked={openInNewTab || false}
                    onChange={(value) => setAttributes({ openInNewTab: value })}
                />

                <ToggleControl
                    label={__("Enable Submenu", "frontis-blocks")}
                    checked={hasSubmenu || false}
                    onChange={(value) => {
                        setAttributes({ 
                            hasSubmenu: value,
                            isMegaMenu: value ? isMegaMenu : false 
                        });
                    }}
                    help={__("Add child menu items below this menu", "frontis-blocks")}
                />

                {hasSubmenu && (
                    <ToggleControl
                        label={__("Enable Mega Menu", "frontis-blocks")}
                        checked={isMegaMenu || false}
                        onChange={(value) => setAttributes({ isMegaMenu: value })}
                        help={__("Use a block pattern as mega menu content", "frontis-blocks")}
                    />
                )}

                {isMegaMenu && hasSubmenu && (
                    <SelectControl
                        label={__("Select Pattern", "frontis-blocks")}
                        value={selectedPattern || ''}
                        options={patterns}
                        onChange={(value) => setAttributes({ selectedPattern: value })}
                        help={__("Choose a block pattern for the mega menu", "frontis-blocks")}
                    />
                )}
            </PanelBody>
        </InspectorControls>
    );
}