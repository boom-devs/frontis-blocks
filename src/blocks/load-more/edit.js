import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Spinner } from '@wordpress/components';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    loadMoreCount,
    showLoadMoreButton,
  } = attributes;

  // Generate a unique ID for the block if not already set
  useEffect(() => {
    if (!blockID) {
      setAttributes({ blockID: 'fb-load-more-' + clientId.slice(0, 8) });
    }
  }, [blockID, clientId]);

  const parentQueryLoop = useSelect((select) => {
    const { getBlockParentsByBlockName, getBlockAttributes } = select('core/block-editor');
    const parentQueryLoopIds = getBlockParentsByBlockName(clientId, 'core/query');
    
    if (parentQueryLoopIds && parentQueryLoopIds.length > 0) {
      const parentId = parentQueryLoopIds[0];
      return getBlockAttributes(parentId);
    }
    return null;
  }, [clientId]);

  const blockProps = useBlockProps({
    className: `fb-load-more-block ${blockID}`,
  });

  return (
    <div {...blockProps}>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
      />

      {parentQueryLoop ? (
        <div className="load-more-wrapper">
          {showLoadMoreButton && (
            <div className="load-more">
              <a href="#" className="load-more-button">
                {__('Load More', 'frontis-blocks')}
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 3.11 16.94 3.11 16.94M3.11 16.94H7.63M3.11 16.94V21.94M2 12.5C2 6.98 6.44 2.5 12 2.5C18.67 2.5 22 8.06 22 8.06M22 8.06V3.06M22 8.06H17.56" stroke="#00010B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="notice-message">
          {__('Please place this block inside a Post loop.', 'frontis-blocks')}
        </div>
      )}
    </div>
  );
}