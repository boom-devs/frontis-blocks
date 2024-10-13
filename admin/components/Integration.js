import { __ } from '@wordpress/i18n';
import { Card, CardHeader, CardBody, TextControl, Button } from '@wordpress/components';

const Integration = () => {
  return (
    <div className="fb-blocks-integration">
      <h2>{__('Integration', 'frontis-blocks')}</h2>
      <Card>
        <CardHeader>
          <h3>{__('Shortcode', 'frontis-blocks')}</h3>
        </CardHeader>
        <CardBody>
          <p>
            {__(
              'Use this shortcode to display Frontis Blocks in your posts or pages:',
              'frontis-blocks'
            )}
          </p>
          <TextControl
            value="[frontis_blocks]"
            readOnly
          />
          <Button isSecondary>
            {__('Copy Shortcode', 'frontis-blocks')}
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Integration;