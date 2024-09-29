// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ColorPicker, RangeControl } from '@wordpress/components';

function Control( { label, type, onChangeHandler, value } ) {
	return (
		<div className={`paneChild ${type}`}>

			{
				type === 'color' ? (
					<>
						<div className='label'>
							<label htmlFor={label}>{label}</label>
						</div>
						<ColorPicker color={value} onChange={onChangeHandler} enableAlpha defaultValue="#000"/>
					</>
				) : (
					<>
						{type === 'checkbox' ? (
							<>
								{/*eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
								<div className='label'>
									<label htmlFor={label}>{label}</label>
								</div>
								{/*eslint-disable-next-line jsx-a11y/label-has-associated-control*/}
								<label className="switch">
									<input type={type} name={label} value={value}
										   min={( label === 'Spread' || label === 'Blur' ) ? 0 : -350}
										   max={( label === 'Spread' || label === 'Blur' ) ? 100 : 350}
										   onChange={onChangeHandler}/>
									<span className="slider"></span>
								</label>
							</>
						) : (
							<RangeControl
								__nextHasNoMarginBottom
								label={ label }
								value={ value }
								onChange={onChangeHandler}
								min={ ( label === 'Spread' || label === 'Blur' ) ? 0 : -350 }
								max={ ( label === 'Spread' || label === 'Blur' ) ? 100 : 350 }
							/>
						)}
					</>
				)
			}
		</div>
	)
}

export default Control
