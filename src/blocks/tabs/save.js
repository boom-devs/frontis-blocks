import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
  const {
    blockID,
    tabItems,
    tabActiveFrontend,
    tabTitleTag,
    tabDescriptionTag,
    tabIconPosition,
    showIcon,
    showTitle,
    showDescription,
    tabLayoutSwitcher,
    tabGlobalWraperID,
		tabGlobalWraperClass,
  } = attributes;

  const blockProps = useBlockProps.save({
    className: `fb-tabs-wrapper ${blockID || ''}`,
    'data-tab-active': tabActiveFrontend,
  });

  const contentId = `fb-tabs-body-${blockID || 'x'}`;

  return (
    <div {...blockProps}>
      <div className={`fb-tabs-wrap ${tabLayoutSwitcher} ${tabGlobalWraperClass}`} id={tabGlobalWraperID}>
        <ul className="fb-tabs-panel" role="tablist">
          {tabItems.map((item, index) => {
            const isActive = tabActiveFrontend === index;
            const tabId = `fb-tabs-tab-${blockID || 'x'}-${index}`;

            return (
              <li
                key={item.id ?? index}
                className={`fb-tab ${isActive ? 'fb-tabs-active' : ''} ${tabIconPosition}`}
                role="tab"
                id={tabId}
                aria-selected={isActive}
                aria-controls={contentId}
                tabIndex={isActive ? 0 : -1}
                data-tab={index}
                aria-label = {__("Tab", "frontis-blocks")}
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
                          alt={item.tabIconImageAlt || __("Tab Icon", "frontis-blocks")}
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
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

                {showDescription && (
                  <RichText.Content 
                    tagName={tabDescriptionTag}
                    value={item.description}
                    className="fb-tab-description"
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
                          alt={item.tabIconImageAlt || __("Tab Icon", "frontis-blocks")}
                          loading="lazy"
                          decoding="async"
                          aria-hidden="true"
                        />
                      </div>
                    ) : null}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="fb-tabs-body-wrap" id={contentId}>
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}