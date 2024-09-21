import { __ } from '@wordpress/i18n';
import { Card, CardHeader, CardBody, ToggleControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const Blocks = () => {
//   const blocks = useSelect((select) => select('frontis-blocks').getBlocks());

//   const { toggleBlockStatus } = useDispatch('frontis-blocks');

  return (
    <div className="frontis-blocks-blocks">
      <h2>{__('Blocks', 'frontis-blocks')}</h2>
      {/* {blocks.map((block) => (
        <Card key={block.id}>
          <CardHeader>
            <h3>{block.title}</h3>
          </CardHeader>
          <CardBody>
            <ToggleControl
              label={__('Enabled', 'frontis-blocks')}
              checked={block.enabled}
              onChange={() => toggleBlockStatus(block.id)}
            />
            <p>{block.description}</p>
          </CardBody>
        </Card>
      ))} */}
    </div>
  );
};

export default Blocks;