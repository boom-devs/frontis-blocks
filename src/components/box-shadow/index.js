<<<<<<< HEAD
import { __ } from '@wordpress/i18n'
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import Control from './Control'
import {BaseControl, Button, Dashicon, Popover} from '@wordpress/components';
import './editor.lazy.scss';

export default function FB_BoxShadowControl( {boxShadowHandler} ) {
	const [boxShadow, setBoxShadow] = useState( [23, 23, 0, 10, ' ', '#00000045'] );

	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => {
		setOpen( ( state ) => ! state );
	}

	function onChangeHandler( e, index ) {
		switch ( index ) {
			case 5:
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? e : c ) );
				break;
			case 4:
				// eslint-disable-next-line no-nested-ternary
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? e.target.checked ? 'inset' : '' : c ) );
				break;
			default:
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? +e : c ) );
				break;
		}

		boxShadowHandler( boxShadow );
	}

	const shadowArrayToString = ( element ) => {
		if ( typeof element === 'number' ) {
			return element + 'px';
		}
		return element;
	}
	return (
		<>
			<BaseControl>
				<BaseControl.VisualLabel>{ __( 'Box Shadow', 'frontis-blocks' ) }</BaseControl.VisualLabel>
				<Button onClick={ openModal }><Dashicon icon="color-picker" /></Button>
			</BaseControl>

			{ isOpen && (
				<div className={ 'fb-box-shadow-wrapper' }>
					<Popover
						placement={ 'top' }
					>
						<div className="controlPane controls">
							<Control label="Inset" type="checkbox" value={boxShadow[4]}
									 onChangeHandler={e => onChangeHandler( e, 4 ) }/>
							<Control label="Color" type="color" value={boxShadow[5]}
									 onChangeHandler={e => onChangeHandler( e, 5 ) }/>
							<Control label="Offset X" type="range" value={boxShadow[0]}
									 onChangeHandler={e => onChangeHandler( e, 0 ) }/>
							<Control label="Offset Y" type="range" value={boxShadow[1]}
									 onChangeHandler={e => onChangeHandler( e, 1 ) }/>
							<Control label="Blur" type="range" value={boxShadow[2]}
									 onChangeHandler={e => onChangeHandler( e, 2 ) }/>
							<Control label="Spread" type="range" value={boxShadow[3]}
									 onChangeHandler={e => onChangeHandler( e, 3 ) }/>
						</div>
						<div>
							<div className='square' style={{
								boxShadow: boxShadow.map( shadowArrayToString ).join( ' ' ),
								backgroundColor: '#ffffff',
								border: 'solid 0.2px'
							}}></div>
						</div>
					</Popover>
				</div>
			)}
		</>
	)
}
=======
import { __ } from '@wordpress/i18n'
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import Control from './Control'
import {BaseControl, Button, Dashicon, Popover} from '@wordpress/components';
import './editor.lazy.scss';

export default function FB_BoxShadowControl( {boxShadowHandler} ) {
	const [boxShadow, setBoxShadow] = useState( [23, 23, 0, 10, ' ', '#00000045'] );

	const [ isOpen, setOpen ] = useState( false );
	const openModal = () => {
		setOpen( ( state ) => ! state );
	}

	function onChangeHandler( e, index ) {
		switch ( index ) {
			case 5:
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? e : c ) );
				break;
			case 4:
				// eslint-disable-next-line no-nested-ternary
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? e.target.checked ? 'inset' : '' : c ) );
				break;
			default:
				setBoxShadow( boxShadow.map( ( c, i ) => i === index ? +e : c ) );
				break;
		}

		boxShadowHandler( boxShadow );
	}

	const shadowArrayToString = ( element ) => {
		if ( typeof element === 'number' ) {
			return element + 'px';
		}
		return element;
	}
	return (
		<>
			<BaseControl>
				<BaseControl.VisualLabel>{ __( 'Box Shadow', 'frontis-blocks' ) }</BaseControl.VisualLabel>
				<Button onClick={ openModal }><Dashicon icon="color-picker" /></Button>
			</BaseControl>

			{ isOpen && (
				<div className={ 'fb-box-shadow-wrapper' }>
					<Popover
						placement={ 'top' }
					>
						<div className="controlPane controls">
							<Control label="Inset" type="checkbox" value={boxShadow[4]}
									 onChangeHandler={e => onChangeHandler( e, 4 ) }/>
							<Control label="Color" type="color" value={boxShadow[5]}
									 onChangeHandler={e => onChangeHandler( e, 5 ) }/>
							<Control label="Offset X" type="range" value={boxShadow[0]}
									 onChangeHandler={e => onChangeHandler( e, 0 ) }/>
							<Control label="Offset Y" type="range" value={boxShadow[1]}
									 onChangeHandler={e => onChangeHandler( e, 1 ) }/>
							<Control label="Blur" type="range" value={boxShadow[2]}
									 onChangeHandler={e => onChangeHandler( e, 2 ) }/>
							<Control label="Spread" type="range" value={boxShadow[3]}
									 onChangeHandler={e => onChangeHandler( e, 3 ) }/>
						</div>
						<div>
							<div className='square' style={{
								boxShadow: boxShadow.map( shadowArrayToString ).join( ' ' ),
								backgroundColor: '#ffffff',
								border: 'solid 0.2px'
							}}></div>
						</div>
					</Popover>
				</div>
			)}
		</>
	)
}
>>>>>>> 27c59d133d37688901b0b4f70b07538faaff9329
