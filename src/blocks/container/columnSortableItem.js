import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, ButtonGroup, BaseControl, RangeControl } from '@wordpress/components';
import FB_RangeUnitsType from '../../components/unit-control';
import { TrashIcon, DuplicateIcon, ResetIcon } from './icons';
import { GRID_COLUMN_TYPE, GRID_UNIT_TYPES } from '@Constants/fbConstants';

export default function ColumnSortableItem({ id, columnItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, index, containerColumnsItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    // Icons and constants are now imported from icons.js

    const handleColumnTypeChange = (value) => {
        handleChangeItem(columnItem.id, 'type', value);
    };

    const setWidthRangeValue = (value) => {
		handleChangeItem(columnItem.id, 'width', value);
	};
    const setWidthRangeUnit = (unit) => {
		handleChangeItem(columnItem.id, 'widthUnits', unit);
	};
    const resetWidthRangeValue = () => {
		setWidthRangeValue(columnItem.widthUnits === '%' ? 100 : 1);
	};

    const setMinRangeValue = (value) => {
		handleChangeItem(columnItem.id, 'min', value);
	};
    const setMinRangeUnit = (unit) => {
		handleChangeItem(columnItem.id, 'minUnits', unit);
	};
    const resetMinRangeValue = () => {
		setMinRangeValue(columnItem.minUnits === '%' ? 100 : 1);
	};

    const setMaxRangeValue = (value) => {
		handleChangeItem(columnItem.id, 'max', value);
	};
    const setMaxRangeUnit = (unit) => {
		handleChangeItem(columnItem.id, 'maxUnits', unit);
	};
    const resetMaxRangeValue = () => {
		setMaxRangeValue(columnItem.maxUnits === '%' ? 100 : 1);
	};


    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {columnItem.title || __(`Column ${index + 1}`, "frontis-blocks")}
                </span>

                <span className="sortable-duplicate">
                    <Button
                        icon={DuplicateIcon}
                        label={__("Duplicate", "frontis-blocks")}
                        aria-label={__("Duplicate item", "frontis-blocks")}
                        onClick={() => handleDuplicateItem(columnItem.id)}
                    />
                </span>

                {/* Delete button */}
                {containerColumnsItem.length > 1 && (
                    <span className="sortable-delete">
                        <Button
                            icon={TrashIcon}
                            label={__("Delete", "frontis-blocks")}
                            onClick={() => handleDeleteItem(columnItem.id)}
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
										className={`fb-advanced-alignment-single-btn ${columnItem.type === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>


                    {columnItem.type === 'min-max' && <div className="fb-setting-spacing-container">
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
                                            currentUnit={columnItem.minUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setMinRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={columnItem.min}
                                onChange={setMinRangeValue}
                                min={1}
                                max={columnItem.minUnits === '%' ? 100 : columnItem.minUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={columnItem.minUnits === '%' ? 100 : columnItem.minUnits === 'px' ? 10 : 1}
                            />
                        </div>
                    </div>}

                    {columnItem.type === 'auto' && <p style={{fontStyle: 'italic', color: '#555E72', fontSize: '12px', marginBottom: '24px', marginTop: '-10px'}}>The column-width will be automatic.</p>}

                    {columnItem.type === 'min-max' && <div className="fb-setting-spacing-container">
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
                                            currentUnit={columnItem.maxUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setMaxRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={columnItem.max}
                                onChange={setMaxRangeValue}
                                min={1}
                                max={columnItem.maxUnits === '%' ? 100 : columnItem.maxUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={columnItem.maxUnits === '%' ? 100 : 1}
                            />
                        </div>
                    </div>}

                    {columnItem.type === 'custom' && <div className="fb-setting-spacing-container">
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
                                            currentUnit={columnItem.widthUnits}
                                            unitTypes={GRID_UNIT_TYPES}
                                            onUnitChange={setWidthRangeUnit}
                                        />
                                </div>

                            </div>
                            <RangeControl
                                value={columnItem.width}
                                onChange={setWidthRangeValue}
                                min={1}
                                max={columnItem.widthUnits === '%' ? 100 : columnItem.widthUnits === 'fr' ? 12 : 1000}
                                step={1}
                                resetFallbackValue={columnItem.widthUnits === '%' ? 100 : 1}
                            />
                        </div>
                    </div>}
                </div>
            )}
        </li>
    );
}
