import React, {useState} from 'react';
import { ColorPicker } from '@wordpress/components';

function Control({ label, type, onChangeHandler, value }) {
	return (
		<div className={`paneChild ${type}`}>
			<div className='label'>
				<label htmlFor={label}>{label}</label>
			</div>
			{
				type === 'color' ? (
					<>
						<ColorPicker color={value} onChange={onChangeHandler} enableAlpha defaultValue="#000" />
					</>
					) : (
					<>
						<label className="switch">
							<input type={type} name={label} value={value}
								   min={(label === 'Spread' || label === "Blur") ? 0 : -350}
								   max={(label === 'Spread' || label === "Blur") ? 100 : 350}
								   onChange={onChangeHandler}/>
							<span className="slider"></span>
						</label>
					</>
				)
			}
		</div>
	)
}

export default Control
