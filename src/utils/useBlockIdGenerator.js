import { useEffect, useRef } from '@wordpress/element';

/**
 * Custom hook to handle duplicate block detection and ID regeneration.
 * 
 * When a block is duplicated, it keeps the original blockID. This hook detects
 * when a duplicated block's style changes and generates a new unique blockID.
 * 
 * @param {Object} params
 * @param {string} params.clientId - Block's unique client ID
 * @param {string} params.blockID - Current block ID attribute
 * @param {string} params.blockPrefix - Prefix for the block ID (e.g., 'fb-testimonial')
 * @param {boolean} params.isSelected - Whether the block is currently selected
 * @param {Object} params.attributes - All block attributes
 * @param {Function} params.setAttributes - Function to update attributes
 * @param {string[]} [params.excludeKeys] - Additional keys to exclude from change detection
 */
const useBlockIdGenerator = ({
    clientId,
    blockID,
    blockPrefix,
    isSelected,
    attributes,
    setAttributes,
    excludeKeys = [],
}) => {
    // Track previous attributes to detect style changes
    const prevAttributesRef = useRef(attributes);

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            const expectedIdPrefix = `${blockPrefix}-${clientId.slice(0, 8)}`;
            
            // Case 1: Brand new block with no ID
            if (!blockID) {
                setAttributes({
                    blockID: expectedIdPrefix,
                });
                prevAttributesRef.current = attributes;
                return;
            }

            // Case 2: Duplicated block - blockID doesn't match current clientId
            // This means the block was copied from another block
            const isDuplicate = blockID !== expectedIdPrefix;
            
            if (isDuplicate && isSelected) {
                const prevAttrs = prevAttributesRef.current;
                
                // Default keys to always exclude from change detection
                const defaultExcludeKeys = ['blockID', 'blockStyle'];
                const allExcludeKeys = [...defaultExcludeKeys, ...excludeKeys];
                
                // Check if any attribute (except excluded attributes) changed
                const hasStyleChange = Object.keys(attributes).some(key => {
                    if (allExcludeKeys.includes(key)) {
                        return false;
                    }
                    return JSON.stringify(attributes[key]) !== JSON.stringify(prevAttrs[key]);
                });

                if (hasStyleChange) {
                    setAttributes({
                        blockID: expectedIdPrefix,
                    });
                }
            }
        }

        // Update ref for next comparison
        prevAttributesRef.current = attributes;
    }, [clientId, blockID, blockPrefix, isSelected, attributes, setAttributes, excludeKeys]);
};

export default useBlockIdGenerator;
