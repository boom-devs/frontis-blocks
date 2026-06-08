/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import getProActive from '@Utils/getProActive';

const TEMPLATE = [
  ['frontis-blocks/query-pagination-previous'],
  ['frontis-blocks/query-pagination-numbers'],
  ['frontis-blocks/query-pagination-next'],
];

export default function Edit({ attributes, setAttributes, clientId }) {
	const isProActive = getProActive();

	const {
		blockId,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-query-pagination-wrapper ${blockId}`,
	});

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'fb-query-pagination' },
		{ template: TEMPLATE }
	);

	if (!isProActive) {
		return null;
	}

  return (
    <>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
      />
      <div {...blockProps}>
        <nav {...innerBlocksProps} />
      </div>
    </>
  );
}
