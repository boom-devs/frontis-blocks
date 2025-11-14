import React from 'react';

const Button = ({ text, onClick, disabled = false, type = 'button', icon='', buttonType='outline', position='left' }) => {
  return (
    <button
      type={type}
      className={`frontis-common-button ${buttonType}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && position === 'left' && <span className='frontis-common-button-icon'>{icon}</span>}
      {text}
      {icon && position === 'right' && <span className='frontis-common-button-icon'>{icon}</span>}
    </button>
  );
};

export default Button;