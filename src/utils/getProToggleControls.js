import React from 'react';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
  ToggleControl,
  Dropdown,
  Button,
  MenuGroup,
  MenuItem,
} from '@wordpress/components';

const getProToggleControls = ({
  hook,
  attributes,
  setAttributes,
  dynamicAttr,
  label,
  keyPrefix = 'pro-toggle',
  links = {
    upgrade: 'https://frontiswp.com/pro',
    docs: 'https://frontiswp.com/docs',
    support: 'https://frontiswp.com/contact',
  },
  isProActive,
}) => {
  // If prop is not passed, use localize/fallback
  const pro = typeof isProActive === 'boolean'
    ? isProActive
    : !!window?.FrontisBlocksData?.is_pro_active;

  const checked = !!attributes?.[dynamicAttr];

  // If Pro is active, return external controls (PRO hook)
  if (pro) {
    const external = applyFilters(hook, [], { attributes, setAttributes, isProActive: pro });
    if (Array.isArray(external) && external.length) return external;
  }

  const ProBadgeDropdown = () => (
    <Dropdown
      className="fb-pro-badge-dropdown"
      contentClassName="fb-pro-badge-dropdown-content"
      popoverProps={{ placement: 'bottom-start' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button onClick={onToggle} aria-expanded={isOpen} className="fb-pro-badge">
          <span className="fb-pro-badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H17Z" fill="#F89B2E"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8321 5.24808C12.4362 4.65434 11.5638 4.65434 11.1679 5.24808L8.45008 9.32488C8.18777 9.71835 7.6857 9.87428 7.24664 9.69866L5.0019 8.80076C4.21143 8.48457 3.4126 9.23779 3.68182 10.0455L5.77208 16.3162C5.90819 16.7246 6.29033 17 6.72076 17H12H17.2792C17.7097 17 18.0918 16.7246 18.2279 16.3162L20.3182 10.0455C20.5874 9.23779 19.7886 8.48457 18.9981 8.80076L16.7534 9.69866C16.3143 9.87428 15.8122 9.71835 15.5499 9.32488L12.8321 5.24808Z" fill="#F89B2E"/>
            </svg>
          </span>
          <span className="fb-pro-badge-text">{__('PRO', 'frontis-blocks')}</span>
        </Button>
      )}
      renderContent={() => (
        <div className="fb-pro-menu">
          <MenuGroup label={__('Frontis Pro', 'frontis-blocks')}>
            <MenuItem href={links.upgrade} target="_blank" rel="noopener noreferrer">
              {__('Upgrade to PRO', 'frontis-blocks')}
            </MenuItem>
            <MenuItem onClick={() => window.open(links.docs, '_blank', 'noopener')}>
              {__('Documentation', 'frontis-blocks')}
            </MenuItem>
            <MenuItem onClick={() => window.open(links.support, '_blank', 'noopener')}>
              {__('Contact Support', 'frontis-blocks')}
            </MenuItem>
          </MenuGroup>
        </div>
      )}
    />
  );

  return [
    {
      key: `${keyPrefix}-${pro ? 'default' : 'locked'}`,
      comp: pro ? (
        <ToggleControl
          label={label}
          checked={checked}
          onChange={(value) => setAttributes({ [dynamicAttr]: value })}
        />
      ) : (
        <div className="fb-pro-lock switcher-control">
          <ToggleControl
            label={label}
            checked={checked}
            onChange={() => {}}
            disabled
          />
          <ProBadgeDropdown />
        </div>
      ),
    },
  ];
};

export default getProToggleControls;