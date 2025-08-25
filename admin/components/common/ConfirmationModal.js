import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  
  if (!isOpen) return null;

  return (
    <div className="fb-modal-overlay">
      <div className="fb-modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="fb-confirmation-modal-actions">
          <Button
            className="fb-button-error"
            onClick={onClose}
          >
            {__('Cancel', 'frontis-blocks')}
          </Button>
          <Button
            className="fb-button-primary"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {__('Confirm', 'frontis-blocks')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
