import React from 'react';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { Button } from '@wordpress/components';

const getProDynamicButton = ({
  hook,
  attributes = {},
  setAttributes,
  dynamicAttr = 'dynamicImageEnabled',
  keyPrefix = 'pro-dynamic-button',
}) => {
  // Allow external filters first if registered
  if (hook) {
    const controls = applyFilters(hook, [], { attributes, setAttributes, isProActive: true });
    if (Array.isArray(controls) && controls.length) return controls;
  }

  const isEnabled = !!attributes[dynamicAttr];
  const toggleDynamic = () => setAttributes?.({ [dynamicAttr]: !isEnabled });

  return [
    {
      key: `${keyPrefix}-default`,
      comp: (
        <Button
          type="button"
          className="fb-components-button"
          onClick={toggleDynamic}
          title={isEnabled ? __('Disable Dynamic Image', 'frontis-blocks') : __('Enable Dynamic Image', 'frontis-blocks')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12V16.5C3 18.9853 7.02944 21 12 21C16.9706 21 21 18.9853 21 16.5V12M3 12C3 14.4853 7.02944 16.5 12 16.5C16.9706 16.5 21 14.4853 21 12M3 12V7.5M21 12V7.5M21 7.5C21 9.98528 16.9706 12 12 12C7.02944 12 3 9.98528 3 7.5M21 7.5C21 5.01472 16.9706 3 12 3C7.02944 3 3 5.01472 3 7.5" stroke="#0B0C0E" strokeWidth="1.4" />
          </svg>
        </Button>
      ),
    },
  ];
};

export default getProDynamicButton;