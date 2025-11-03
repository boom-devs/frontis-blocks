import React, { useState } from 'react';
import { SwitchCheckIcon, XIcon } from '../../icons';
import './switch.scss';

export default function FBSwitch({ onChange, checked = true, disabled = false }) {
    
    return (
        <div className="fb-switch-wrapper">
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="toggle-switch__input"
                    disabled={disabled}
                />
                <span className="toggle-switch__slider">
                    <span className="toggle-switch__icon toggle-switch__icon--off">
                        <XIcon />
                    </span>
                    <span className="toggle-switch__icon toggle-switch__icon--on">
                        <SwitchCheckIcon />
                    </span>
                </span>
            </label>
        </div>
    )
}