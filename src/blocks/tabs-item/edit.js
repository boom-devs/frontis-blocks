/**
 * BLOCK: Tabs Child - Single File Edit.js (no addInitialAttr)
 */

import { useEffect, memo } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

const Render = memo(({ attributes }) => {
	const { tabActive, id } = attributes || {};
	const isActive = id === tabActive;

	return (
		<div
			className={`fb-tabs-body-container fb-inner-tab-${id}`}
			aria-labelledby={`fb-tabs-tab${id}`}
		>
			<InnerBlocks
				template={[
					[
						'core/paragraph',
						{
							content:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
						},
					],
				]}
				templateLock={false}
			/>
		</div>
	);
});

export default function Edit({ attributes, setAttributes, clientId }) {

	const { blockId, id, tabActive } = attributes;
	const isActive = id === tabActive;

	useEffect(() => {
		const editorSelect = select('core/block-editor');
		if (!editorSelect) return;

		const { getBlockRootClientId, getBlockAttributes } = editorSelect;
		if (!getBlockRootClientId || !getBlockAttributes) return;

		const rootBlockId = getBlockRootClientId(clientId);
		if (!rootBlockId) return;

		const rootBlockAttrs = getBlockAttributes(rootBlockId) || {};

		// Parent → Child: active tab sync (editor state থেকে)
		if (
			rootBlockAttrs.tabActive !== undefined &&
			rootBlockAttrs.tabActive !== attributes?.tabActive
		) {
			setAttributes({ tabActive: rootBlockAttrs.tabActive });
		}

		// Parent-এর style/attributes apply (metadata বাদ)
		if (rootBlockAttrs?.needUpdate !== false) {
			const next = Object.keys(rootBlockAttrs).reduce((acc, key) => {
				if (key !== 'metadata' && attributes?.[key] !== rootBlockAttrs[key]) {
					acc[key] = rootBlockAttrs[key];
				}
				return acc;
			}, {});

			if (Object.keys(next).length) {
				setAttributes(next);
			}
		}

	}, []);

	const blockProps = useBlockProps({
		className: `fb-tabs-item-wrapper ${blockId} ${isActive ? 'fb-tabs-panel-active' : ''}`,
		style: { display: isActive ? 'block' : 'none', opacity: isActive ? 1 : 0}
	});

	return (
		<>
			<div {...blockProps}>
				<Render attributes={attributes} setAttributes={setAttributes} />
			</div>
		</>
	);
};
