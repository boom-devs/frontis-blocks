import { render } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import App from './components/App';
import './scss/admin.scss';

const FrontisBlocksAdmin = () => {
  return (
    <div className="wrap">
      <h1>{__('Frontis Blocks', 'frontis-blocks')}</h1>
      <App />
    </div>
  );
};

render(<FrontisBlocksAdmin />, document.getElementById('frontis-blocks-admin'));
