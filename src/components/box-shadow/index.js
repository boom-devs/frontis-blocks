import { __ } from '@wordpress/i18n';
import React, { useState, useEffect } from 'react';
import Control from './control';
import { Dashicon, BaseControl, Button, Dropdown} from '@wordpress/components';
import './editor.lazy.scss';

export default function FB_BoxShadowControl({ label, onBoxShadowChange, initialShadowValue, onBoxShadowStyleChange, isBoxShadow=true }) {
	const [boxShadow, setBoxShadow] = useState(() => {
		if (isBoxShadow) {
			return initialShadowValue || [0, 0, 0, 0, '', '#00000000'];
		} else {
			return initialShadowValue || [0, 0, 0, '', '#00000000'];
		}
	});

	useEffect(() => {
		onBoxShadowChange(boxShadow);
	}, [boxShadow, onBoxShadowChange]);

	useEffect(() => {
        const boxShadowStyle = boxShadow.map((value, index) => {
            if (index === (isBoxShadow ? 4 : 3)) return value;
            if (index === (isBoxShadow ? 5 : 4)) return value;
            return `${value}px`;
        }).join(' ');

        if (onBoxShadowStyleChange) {
            onBoxShadowStyleChange(boxShadowStyle);
        }
    }, [boxShadow, onBoxShadowStyleChange, isBoxShadow]);

	function onChangeHandler(value, index) {
		setBoxShadow((prevBoxShadow) => {
			const newBoxShadow = [...prevBoxShadow];
			const colorIndex = isBoxShadow ? 5 : 4;
			const insetIndex = isBoxShadow ? 4 : 3;
			switch (index) {
				case colorIndex:
					newBoxShadow[index] = value;
					break;
				case insetIndex:
					newBoxShadow[index] = value ? 'inset' : '';
					break;
				default:
					newBoxShadow[index] = +value;
					break;
			}
			return newBoxShadow;
		});
	}

	return (
		<>
			<BaseControl 
				label={label || __("Box Shadow", "frontis-blocks")}
				className="fb-box-shadow-wrapper shadow-color"
			>
				<Dropdown
					className="fb-box-shadow-icon-dropdown"
					contentClassName="fb-box-shadow-icon-dropdown-content"
					popoverProps={{ placement: 'bottom-start' }}
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							variant="primary"
							onClick={onToggle}
							aria-expanded={isOpen}
							className="fb-box-shadow-icon-btn"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<rect x="2" y="2" width="12" height="12" fill="#404655"/>
							<rect x="0.5" y="0.5" width="11" height="11" fill="#F7F7F7" stroke="#404655"/>
							</svg>
						</Button>
					)}
					renderContent={() => (
						<div className="controlPane controls">
							<Control
								label="Inset"
								type="checkbox"
								value={boxShadow[isBoxShadow ? 4 : 3] === 'inset'}
								onChangeHandler={(e) => onChangeHandler(e, isBoxShadow ? 4 : 3)}
							/>
							<Control
								label="Color"
								type="color"
								value={boxShadow[isBoxShadow ? 5 : 4]}
								onChangeHandler={(e) => onChangeHandler(e, isBoxShadow ? 5 : 4)}
							/>
							<Control
								label="Offset X"
								type="range"
								value={boxShadow[0]}
								onChangeHandler={(e) => onChangeHandler(e, 0)}
							/>
							<Control
								label="Offset Y"
								type="range"
								value={boxShadow[1]}
								onChangeHandler={(e) => onChangeHandler(e, 1)}
							/>
							<Control
								label="Blur"
								type="range"
								value={boxShadow[2]}
								onChangeHandler={(e) => onChangeHandler(e, 2)}
							/>
							{isBoxShadow && (
								<Control
									label="Spread"
									type="range"
									value={boxShadow[3]}
									onChangeHandler={(e) => onChangeHandler(e, 3)}
								/>
							)}
						</div>
					)}
				/>
			</BaseControl>
		</>
	);
}