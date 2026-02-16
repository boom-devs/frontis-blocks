import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, ButtonGroup, BaseControl, RangeControl } from '@wordpress/components';
import FB_RangeUnitsType from '../../components/unit-control';
import { TrashIcon, DuplicateIcon, ResetIcon } from './icons';
import { GRID_COLUMN_TYPE, GRID_UNIT_TYPES } from '@Constants/fbConstants';

export default function RowSortableItem({ id, rowItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, index, containerRowsItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    // Icons and constants are now imported from icons.js and fbConstants.js

    const handleColumnTypeChange = (value) => {
        handleChangeItem(rowItem.id, 'type', value);
    };

    const setWidthRangeValue = (value) => {
		handleChangeItem(rowItem.id, 'width', value);
	};
    const setWidthRangeUnit = (unit) => {
		handleChangeItem(rowItem.id, 'widthUnits', unit);
	};
    const resetWidthRangeValue = () => {
		setWidthRangeValue(rowItem.widthUnits === '%' ? 100 : 1);
	};

    const setMinRangeValue = (value) => {
		handleChangeItem(rowItem.id, 'min', value);
	};
    const setMinRangeUnit = (unit) => {
		handleChangeItem(rowItem.id, 'minUnits', unit);
	};
    const resetMinRangeValue = () => {
		setMinRangeValue(rowItem.minUnits === '%' ? 100 : 1);
	};

    const setMaxRangeValue = (value) => {
		handleChangeItem(rowItem.id, 'max', value);
	};
    const setMaxRangeUnit = (unit) => {
		handleChangeItem(rowItem.id, 'maxUnits', unit);
	};
    const resetMaxRangeValue = () => {
		setMaxRangeValue(rowItem.maxUnits === '%' ? 100 : 1);
	};

    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {rowItem.title || __(`Row ${index + 1}`, "frontis-blocks")}
                </span>

                <span className="sortable-duplicate">
                    <Button
                        icon={DuplicateIcon}
                        label={__("Duplicate", "frontis-blocks")}
                        aria-label={__("Duplicate item", "frontis-blocks")}
                        onClick={() => handleDuplicateItem(rowItem.id)}
                    />
                </span>

                {/* Delete button */}
                {containerRowsItem.length > 1 && (
                    <span className="sortable-delete">
                        <Button
                            icon={TrashIcon}
                            label={__("Delete", "frontis-blocks")}
                            onClick={() => handleDeleteItem(rowItem.id)}
                        />
                    </span>
                )}
            </div>

            {isOpen && (
                <div className="sortable-item-content">
                    <BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<ButtonGroup className="fb-advanced-alignment-group-btn">
								{GRID_COLUMN_TYPE.map((item, key) => (
									<Button
										key={key}
										onClick={() => handleColumnTypeChange(item.value)}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${rowItem.type === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>


                    {rowItem.type === 'min-max' && <div className="fb-setting-spacing-container">
                        <div className="fb-setting-spacing-inner-container">
                            <div className="fb-setting-spacing-label-container">
                                    <p className="fb-setting-spacing-label">{__("Min", "frontis-blocks")}</p>
                                <div className="fb-unit-wrapper">
                                        <div className="fb-reset-control-container" onClick={resetMinRangeValue}>
                                            <button className="fb-reset-button fb-reset-has-value">
                                            {ResetIcon}
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.minUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setMinRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={rowItem.min}
                                onChange={setMinRangeValue}
                                min={1}
                                max={rowItem.minUnits === '%' ? 100 : rowItem.minUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={rowItem.minUnits === '%' ? 100 : rowItem.minUnits === 'px' ? 10 : 1}
                            />
                        </div>
                    </div>}

                    {rowItem.type === 'auto' && <p style={{fontStyle: 'italic', color: '#555E72', fontSize: '12px', marginBottom: '24px', marginTop: '-10px'}}>The column-width will be automatic.</p>}

                    {rowItem.type === 'min-max' && <div className="fb-setting-spacing-container">
                        <div className="fb-setting-spacing-inner-container">
                            <div className="fb-setting-spacing-label-container">
                                    <p className="fb-setting-spacing-label">{__("Max", "frontis-blocks")}</p>
                                <div className="fb-unit-wrapper">
                                        <div className="fb-reset-control-container" onClick={resetMaxRangeValue}>
                                            <button className="fb-reset-button fb-reset-has-value">
                                            {ResetIcon}
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.maxUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setMaxRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={rowItem.max}
                                onChange={setMaxRangeValue}
                                min={1}
                                max={rowItem.maxUnits === '%' ? 100 : rowItem.maxUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={rowItem.maxUnits === '%' ? 100 : 1}
                            />
                        </div>
                    </div>}

                    {rowItem.type === 'custom' && <div className="fb-setting-spacing-container">
                        <div className="fb-setting-spacing-inner-container">
                            <div className="fb-setting-spacing-label-container">
                                    <p className="fb-setting-spacing-label">{__("Width", "frontis-blocks")}</p>
                                <div className="fb-unit-wrapper">
                                        <div className="fb-reset-control-container" onClick={resetWidthRangeValue}>
                                            <button className="fb-reset-button fb-reset-has-value">
                                            {ResetIcon}
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.widthUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setWidthRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={rowItem.width}
                                onChange={setWidthRangeValue}
                                min={1}
                                max={rowItem.widthUnits === '%' ? 100 : rowItem.widthUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={rowItem.widthUnits === '%' ? 100 : 1}
                            />
                        </div>
                    </div>}
                </div>
            )}
        </li>
    );
}
