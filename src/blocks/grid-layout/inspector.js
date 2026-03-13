import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	Button,
	ToggleControl,
	SelectControl
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import FB_InspectorControls from '@Components/InspectorControls';

const Inspector = ({ attributes, setAttributes, addGridItem }) => {
	const { 
		cols, 
		rowHeight, 
		gutter, 
		compactType, 
		allowOverlap 
	} = attributes;

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__('Grid Settings', 'frontis-blocks')}>
				<RangeControl
					label={__('Grid Columns', 'frontis-blocks')}
					value={cols}
					onChange={(val) => setAttributes({ cols: val })}
					min={1}
					max={24}
				/>
				<RangeControl
					label={__('Row Height (px)', 'frontis-blocks')}
					value={rowHeight}
					onChange={(val) => setAttributes({ rowHeight: val })}
					min={10}
					max={200}
				/>
				<RangeControl
					label={__('Gutter / Gap (px)', 'frontis-blocks')}
					value={gutter}
					onChange={(val) => setAttributes({ gutter: val })}
					min={0}
					max={50}
				/>
				<SelectControl
					label={__('Compaction Type', 'frontis-blocks')}
					value={compactType}
					options={[
						{ label: __('None (Messy Mode)', 'frontis-blocks'), value: '' },
						{ label: __('Vertical', 'frontis-blocks'), value: 'vertical' },
						{ label: __('Horizontal', 'frontis-blocks'), value: 'horizontal' },
					]}
					onChange={(val) => setAttributes({ compactType: val || null })}
					help={__('Determines if items should "gravity" towards one direction.', 'frontis-blocks')}
				/>
				<ToggleControl
					label={__('Allow Overlap', 'frontis-blocks')}
					checked={allowOverlap}
					onChange={(val) => setAttributes({ allowOverlap: val })}
					help={__('Allow items to be placed on top of each other.', 'frontis-blocks')}
				/>
				<Button
					variant="secondary"
					isFullWidth
					onClick={addGridItem}
					style={{ marginTop: '10px' }}
				>
					{__('Add New Item', 'frontis-blocks')}
				</Button>
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>

		</>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>

		</>
	);

	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>

		</>
	);
};

export default memo(Inspector);
