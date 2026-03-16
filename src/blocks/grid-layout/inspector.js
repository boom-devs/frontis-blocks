import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	Button,
	ToggleControl,
	SelectControl
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Range from '@Components/range';
import { useDeviceType } from '@Config/displayType';

const Inspector = ({ attributes, setAttributes, addGridItem }) => {
	const {
		cols,
		rowHeight,
		rowHeightUnits,
		gutter,
		gutterUnits,
		compactType,
		allowOverlap
	} = attributes;

	const deviceType = useDeviceType();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__('Grid Settings', 'frontis-blocks')}>
				<FB_Range
					min={1}
					max={24}
					label={__("Columns", "frontis-blocks")}
					rangeValue={cols}
					onChangeHandler={(value) => setAttributes({ cols: value })}
					deviceType={deviceType}
					rangeStep={1}
					resetFallbackValue={'12'}
					isRangeUnit={false}
				/>

				<FB_Range
					min={1}
					max={rowHeightUnits === '%' ? 100 : 1000}
					label={__("Row Height", "frontis-blocks")}
					rangeValue={rowHeight}
					onChangeHandler={(value) => setAttributes({ rowHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ rowHeightUnits: value })}
					deviceType={deviceType}
					units={rowHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_Range
					min={1}
					max={gutterUnits === '%' ? 100 : 1000}
					label={__("Gap", "frontis-blocks")}
					rangeValue={gutter}
					onChangeHandler={(value) => setAttributes({ gutter: value })}
					rangeUnitHandler={(value) => setAttributes({ gutterUnits: value })}
					deviceType={deviceType}
					units={gutterUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
			</PanelBody>

			<PanelBody title={__('Layout Behavior', 'frontis-blocks')} initialOpen={false}>
				<SelectControl
					label={__('Compaction Type', 'frontis-blocks')}
					value={compactType}
					options={[
						{ label: __('None (Free Placement)', 'frontis-blocks'), value: '' },
						{ label: __('Vertical', 'frontis-blocks'), value: 'vertical' },
						{ label: __('Horizontal', 'frontis-blocks'), value: 'horizontal' },
					]}
					onChange={(val) => setAttributes({ compactType: val || null })}
					help={__('Determines how items compact when laid out.', 'frontis-blocks')}
				/>
				<ToggleControl
					label={__('Allow Overlap', 'frontis-blocks')}
					checked={allowOverlap}
					onChange={(val) => setAttributes({ allowOverlap: val })}
					help={__('Allow items to overlap each other.', 'frontis-blocks')}
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
