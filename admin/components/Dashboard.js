import { __ } from '@wordpress/i18n';
import { Card, CardHeader, CardBody } from '@wordpress/components';

const Dashboard = () => {
  return (
    <div className="frontis-blocks-dashboard">
      <h2>{__('Dashboard', 'frontis-blocks')}</h2>
      <Card>
        <CardHeader>
          <h3>{__('Welcome to Frontis Blocks', 'frontis-blocks')}</h3>
        </CardHeader>
        <CardBody>
          <p>
            {__(
              'Here you can manage your Frontis Blocks settings and view usage statistics.',
              'frontis-blocks'
            )}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Dashboard;