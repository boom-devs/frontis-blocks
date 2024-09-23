import React, {useState} from 'react';
import { ColorPicker } from '@wordpress/components';
import {BaseControl, Button, Dashicon, Modal} from "@wordpress/components";

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
					) : <input type={type} name={label} value={value} min={(label === 'Spread' || label === "Blur") ? 0 : -350} max={(label === 'Spread' || label === "Blur") ? 100 : 350} onChange={onChangeHandler} />
			}
		</div>
	)
}
export default Control
