import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
  const {
    blockId,
    tabItems = [],
    tabActiveFrontend = 0,
    tabIconPosition,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `fb-tabs-wrapper ${blockId || ''}`,
    'data-tab-active': tabActiveFrontend,
  });

  return (
    <div {...blockProps}>
      <div className="fb-tabs-wrap">
        <ul className="fb-tabs-panel" role="tablist">
          {tabItems.map((item, index) => {
            const isActive = tabActiveFrontend === index;
            const tabId = `fb-tabs-tab-${blockId || 'x'}-${index}`;
            const panelId = `fb-tabs-panel-${blockId || 'x'}-${index}`;

            return (
              <li
                key={item.id ?? index}
                className={`fb-tab ${isActive ? 'fb-tabs-active' : ''}`}
                role="presentation"
              >
                {tabIconPosition === 'left' && item.tabIconAlign !== 'none' && (
                  <div className="fb-tab-icon-image-box" aria-hidden="true">
                    {(item.tabIconAlign === 'icon' || item.tabIconAlign === undefined) ? (
                      <span className="fb-tab-icon">
                        {item.tabIcon && (typeof renderSVG === 'function' ? renderSVG(item.tabIcon) : null)}
                      </span>
                    ) : (item.tabIconAlign === 'image' && item.tabIconImageUrl) ? (
                      <div className="fb-tab-icon-image">
                        <img
                          src={item.tabIconImageUrl}
                          alt={item.tabIconImageAlt || ''}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : null}
                  </div>
                )}

                <button
                  type="button"
                  className="fb-tabs-list"
                  role="tab"
                  id={tabId}
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  data-tab={index}
                >
                  <RichText.Content tagName="span" value={item.title} />
                </button>

                {tabIconPosition === 'right' && item.tabIconAlign !== 'none' && (
                  <div className="fb-tab-icon-image-box" aria-hidden="true">
                    {(item.tabIconAlign === 'icon' || item.tabIconAlign === undefined) ? (
                      <span className="fb-tab-icon">
                        {item.tabIcon && (typeof renderSVG === 'function' ? renderSVG(item.tabIcon) : null)}
                      </span>
                    ) : (item.tabIconAlign === 'image' && item.tabIconImageUrl) ? (
                      <div className="fb-tab-icon-image">
                        <img
                          src={item.tabIconImageUrl}
                          alt={item.tabIconImageAlt || ''}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : null}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="fb-tabs-body-wrap">
          {/* নোট: প্রতিটি ট্যাব প্যানেল যদি আলাদা ID চায়, সেগুলো InnerBlocks-এর ভিতরের টেমপ্লেটে দিন */}
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
