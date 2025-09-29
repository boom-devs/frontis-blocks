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
}) => {
  const isProActive = applyFilters('frontisblocks/is-pro-active', false);

  // Pull external controls (e.g., from PRO or other extensions)
  let controls = applyFilters(hook, [], { attributes, setAttributes, isProActive });

  // If any control already provided, just use them
  if (Array.isArray(controls) && controls.length) return controls;

  const checked = !!(attributes && attributes[dynamicAttr]);

  const ProBadgeDropdown = () => (
    <Dropdown
      className="fb-pro-badge-dropdown"
      contentClassName="fb-pro-badge-dropdown-content"
      popoverProps={{ placement: 'bottom-start' }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button onClick={onToggle} aria-expanded={isOpen} className="fb-pro-badge">
          <span className="fb-pro-badge-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M19.2133 5.43013C19.2167 5.48727 19.2122 5.54441 19.1989 5.60155L17.9656 10.677C17.9033 10.933 17.6811 11.1124 17.4244 11.1136L10.0222 11.1524H2.61667C2.35889 11.1524 2.13444 10.9718 2.07222 10.7147L0.838889 5.62098C0.824444 5.5627 0.821111 5.50327 0.824444 5.44498C0.585393 5.36766 0.376551 5.21392 0.228281 5.00612C0.0800105 4.79833 4.15036e-05 4.54731 0 4.28955C0 3.96826 0.124087 3.66013 0.344963 3.43294C0.565839 3.20576 0.865412 3.07813 1.17778 3.07813C1.49014 3.07813 1.78972 3.20576 2.01059 3.43294C2.23147 3.66013 2.35556 3.96826 2.35556 4.28955C2.3554 4.46836 2.31676 4.64492 2.24242 4.80655C2.16807 4.96818 2.05986 5.11088 1.92556 5.22441L3.47 6.82555C3.86 7.23013 4.40222 7.46213 4.95667 7.46213C5.61222 7.46213 6.23667 7.14213 6.63 6.60613L9.16778 3.1467C8.95444 2.92727 8.82222 2.62441 8.82222 2.2907C8.82208 2.13151 8.85243 1.97386 8.91156 1.82675C8.97068 1.67964 9.05741 1.54596 9.16679 1.43335C9.27617 1.32074 9.40606 1.2314 9.54903 1.17045C9.69199 1.1095 9.84524 1.07812 10 1.07813C10.1547 1.07813 10.3078 1.10946 10.4507 1.17034C10.5936 1.23122 10.7234 1.32045 10.8328 1.43294C10.9422 1.54544 11.0289 1.67898 11.0881 1.82596C11.1473 1.97294 11.1778 2.13047 11.1778 2.28955C11.1778 2.61298 11.0533 2.90784 10.8511 3.12498L13.3733 6.59698C13.7667 7.1387 14.3933 7.46213 15.0511 7.46213C15.3263 7.4631 15.5989 7.40783 15.8532 7.29953C16.1075 7.19124 16.3383 7.03207 16.5322 6.83127L18.0867 5.23241C17.8972 5.07516 17.7597 4.86135 17.6932 4.62042C17.6267 4.37949 17.6344 4.12329 17.7153 3.88706C17.7962 3.65084 17.9463 3.44621 18.1449 3.30135C18.3436 3.15648 18.581 3.07849 18.8244 3.07813C19.1014 3.07951 19.369 3.18124 19.5803 3.36544C19.7915 3.54964 19.9329 3.80452 19.9796 4.0853C20.0263 4.36609 19.9753 4.65482 19.8356 4.90076C19.6958 5.14671 19.4763 5.33414 19.2156 5.43013H19.2133ZM17.8444 12.9604C17.8444 12.6416 17.5933 12.3833 17.2833 12.3833H2.77889C2.46889 12.3833 2.21778 12.6416 2.21778 12.9604V14.3444C2.21778 14.6633 2.46889 14.9216 2.77889 14.9216H17.2833C17.5933 14.9216 17.8444 14.6633 17.8444 14.3444V12.9604Z" fill="#F89B2E"/>
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
      key: `${keyPrefix}-${isProActive ? 'default' : 'locked'}`,
      comp: isProActive ? (
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