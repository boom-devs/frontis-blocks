import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    blockId,
    TabItems,
    tabActiveFrontend,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `fb-tabs-wrapper ${blockId}`,
    'data-tab-active': tabActiveFrontend,
  });

  return (
    <div {...blockProps}>
      <div className="fb-tabs-wrap">
        <ul className="fb-tabs-panel" role="tablist">
          {TabItems.map((item, index) => (
            <li
              key={item.id}
              className={`fb-tab ${tabActiveFrontend === index ? 'fb-tabs-active' : ''}`}
              role="presentation"
              id={`fb-tabs-tab${index}`}
            >
              <a
                href={`#fb-tabs-panel${index}`}
                className="fb-tabs-list"
                data-tab={index}
                role="tab"
                aria-selected={tabActiveFrontend === index}
                aria-controls={`fb-tabs-panel${index}`}
              >
                <RichText.Content tagName="span" value={item.title} />
              </a>
            </li>
          ))}
        </ul>

        <div className="fb-tabs-body-wrap">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
