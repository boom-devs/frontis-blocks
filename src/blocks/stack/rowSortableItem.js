import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, ButtonGroup, BaseControl } from '@wordpress/components';
import FB_RangeUnitsType from '../../components/unit-control';
import { RangeControl } from '@wordpress/components';

export default function RowSortableItem({ id, rowItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, index, containerRowsItem }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    const TrashIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622" stroke="#0F172A" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    const DuplicateIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 48 48" fill="none">
            <g id="duplicate">
                <g id="duplicate_2">
                    <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M29.2827 4.88487C28.7191 4.31826 27.954 4 27.1556 4H14.9996C13.3433 4 11.9996 5.34372 11.9996 7V37C11.9996 38.6563 13.3433 40 14.9996 40H31.9992V41C31.9992 41.5526 31.5521 42 30.9992 42H10.9992C10.4475 42 9.99921 41.5517 9.99921 41V9C9.99921 8.44772 9.55149 8 8.99921 8C8.44692 8 7.99921 8.44772 7.99921 9V41C7.99921 42.6563 9.34292 44 10.9992 44H30.9992C32.657 44 33.9992 42.6568 33.9992 41V40H34.9996C36.6574 40 37.9996 38.6568 37.9996 37V17.0162H39.0226C39.5749 17.0162 40.0226 16.5685 40.0226 16.0162C40.0226 15.4639 39.5749 15.0162 39.0226 15.0162H37.9996V14.888C37.9996 14.0969 37.6859 13.3381 37.1285 12.7747L29.2827 4.88487ZM27.0266 15.0162H35.9996V14.888C35.9996 14.6251 35.8947 14.3713 35.7085 14.1831L27.8646 6.29523C27.6764 6.10599 27.4216 6 27.1556 6H14.9996C14.4479 6 13.9996 6.44828 13.9996 7V37C13.9996 37.5517 14.4479 38 14.9996 38H34.9996C35.5525 38 35.9996 37.5526 35.9996 37V17.0162H26.2286C25.5662 17.0162 25.0266 16.4803 25.0266 15.8162V8.9482C25.0266 8.39592 25.4743 7.9482 26.0266 7.9482C26.5789 7.9482 27.0266 8.39592 27.0266 8.9482V15.0162Z" fill="#000000" />
                </g>
            </g>
        </svg>
    );

    const COLUMN_TYPE = [
		{ title: 'Auto', label: __('Auto', 'frontis-blocks'), value: "auto" },
		{ title: 'Min/Max', label: __('Min/Max', 'frontis-blocks'), value: "min-max" },
		{ title: 'Custom', label: __('Custom', 'frontis-blocks'), value: "custom" },
	];
    const UNIT_TYPES = [
		{ title: 'Fr', label: __('Fr', 'frontis-blocks'), value: "fr" },
		{ title: 'Px', label: __('Px', 'frontis-blocks'), value: "px" },
		{ title: '%', label: __('%', 'frontis-blocks'), value: "%" }
	];

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
								{COLUMN_TYPE.map((item, key) => (
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.minUnits}
                                            unitTypes={UNIT_TYPES}
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.maxUnits}
                                            unitTypes={UNIT_TYPES}
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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
                                            </button>
                                        </div>

                                        <FB_RangeUnitsType
                                            currentUnit={rowItem.widthUnits}
                                            unitTypes={UNIT_TYPES}
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
