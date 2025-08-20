import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
  const {
    blockId,
    tabItems,
    tabActiveFrontend,
    tabTitleTag,
    tabIconPosition,
    showIcon,
    showTitle,
    tabLayoutSwitcher,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `fb-tabs-wrapper ${blockId || ''}`,
    'data-tab-active': tabActiveFrontend,
  });

  return (
    <div {...blockProps}>
      <div className={`fb-tabs-wrap ${tabLayoutSwitcher}`}>
        <ul className="fb-tabs-panel" role="tablist">
          {tabItems.map((item, index) => {
            const isActive = tabActiveFrontend === index;
            const tabId = `fb-tabs-tab-${blockId || 'x'}-${index}`;
            const panelId = `fb-tabs-panel-${blockId || 'x'}-${index}`;

            return (
              <li
                key={item.id ?? index}
                className={`fb-tab ${isActive ? 'fb-tabs-active' : ''} ${tabIconPosition}`}
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                data-tab={index}
              >
                {/* Left Icon */}
                {tabIconPosition === 'left' && item.tabIconAlign !== 'none' && showIcon && (
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

                {showTitle && (
                  <RichText.Content 
                    tagName={tabTitleTag}
                    value={item.title}
                    className="fb-tab-title"
                  />
                )}

                {/* Right Icon */}
                {tabIconPosition === 'right' && item.tabIconAlign !== 'none' && showIcon && (
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
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}