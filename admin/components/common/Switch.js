// src/components/common/FBSwitch.jsx
import React from 'react';
import { SwitchCheckIcon, XIcon } from '../../icons';
import './switch.scss';

export default function FBSwitch({ 
  checked, 
  onChange, 
  disabled = false 
}) {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className="fb-switch-wrapper">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="toggle-switch__input"
          disabled={disabled}
        />
        <span
          className="toggle-switch__slider"
          onClick={handleClick}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          <span className="toggle-switch__icon toggle-switch__icon--off">
            <XIcon />
          </span>
          <span className="toggle-switch__icon toggle-switch__icon--on">
            <SwitchCheckIcon />
          </span>
        </span>
      </label>
    </div>
  );
}