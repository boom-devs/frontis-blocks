import React from 'react';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
  Dropdown,
  Button,
  MenuGroup,
  MenuItem,
} from '@wordpress/components';
import getProActive from "@Utils/getProActive";

const getProDynamicButton = ({
  hook,
  attributes,
  setAttributes,
  dynamicAttr,
  keyPrefix = 'pro-dynamic-button',
  links = {
    upgrade: 'https://frontiswp.com/pro',
    docs: 'https://frontiswp.com/docs',
    support: 'https://frontiswp.com/contact',
  },
}) => {
  const isProActive = getProActive();

  // Allow external providers (e.g., PRO or other extensions) to inject their own controls first
  let controls = applyFilters(hook, [], { attributes, setAttributes, isProActive });

  // If any control already provided, just use them
  if (Array.isArray(controls) && controls.length) return controls;

  const makeDynamic = () => setAttributes?.({ [dynamicAttr]: true });

  const ProBadgeDropdown = () => (
    <Dropdown
      className="fb-pro-badge-dropdown"
      contentClassName="fb-pro-badge-dropdown-content"
      popoverProps={{ placement: 'bottom-start' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="fb-pro-badge dynamic-button"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12V16.5C3 18.9853 7.02944 21 12 21C16.9706 21 21 18.9853 21 16.5V12M3 12C3 14.4853 7.02944 16.5 12 16.5C16.9706 16.5 21 14.4853 21 12M3 12V7.5M21 12V7.5M21 7.5C21 9.98528 16.9706 12 12 12C7.02944 12 3 9.98528 3 7.5M21 7.5C21 5.01472 16.9706 3 12 3C7.02944 3 3 5.01472 3 7.5" stroke="#0B0C0E" strokeWidth="1.4" />
          </svg>
          <span className="fb-pro-badge-icon" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H17Z" fill="#F89B2E" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.8321 5.24808C12.4362 4.65434 11.5638 4.65434 11.1679 5.24808L8.45008 9.32488C8.18777 9.71835 7.6857 9.87428 7.24664 9.69866L5.0019 8.80076C4.21143 8.48457 3.4126 9.23779 3.68182 10.0455L5.77208 16.3162C5.90819 16.7246 6.29033 17 6.72076 17H12H17.2792C17.7097 17 18.0918 16.7246 18.2279 16.3162L20.3182 10.0455C20.5874 9.23779 19.7886 8.48457 18.9981 8.80076L16.7534 9.69866C16.3143 9.87428 15.8122 9.71835 15.5499 9.32488L12.8321 5.24808Z" fill="#F89B2E" />
            </svg>
          </span>
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
      key: `${keyPrefix}-${isProActive ? 'default' : 'locked'}`,
      comp: isProActive ? (
        <Button
          type="button"
          className="fb-components-button"
          onClick={makeDynamic}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12V16.5C3 18.9853 7.02944 21 12 21C16.9706 21 21 18.9853 21 16.5V12M3 12C3 14.4853 7.02944 16.5 12 16.5C16.9706 16.5 21 14.4853 21 12M3 12V7.5M21 12V7.5M21 7.5C21 9.98528 16.9706 12 12 12C7.02944 12 3 9.98528 3 7.5M21 7.5C21 5.01472 16.9706 3 12 3C7.02944 3 3 5.01472 3 7.5" stroke="#0B0C0E" strokeWidth="1.4" />
          </svg>
        </Button>
      ) : (
        <div className="fb-pro-lock dynamic-button">
          <ProBadgeDropdown />
        </div>
      ),
    },
  ];
};

export default getProDynamicButton;