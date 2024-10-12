import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import App from './App';
import './scss/admin.scss';

const FrontisBlocksAdmin = () => {
  return (
    <div className="wrap">
      <App />
    </div>
  );
};

const root = createRoot(document.getElementById('frontis-blocks-admin'));
root.render(<FrontisBlocksAdmin />);
