import React from "react";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import {
  ToggleControl,
  Dropdown,
  Button,
  MenuGroup,
  MenuItem,
} from "@wordpress/components";
import getProActive from "@Utils/getProActive";

const getProToggleControls = ({
  hook,
  attributes,
  setAttributes,
  dynamicAttr,
  label,
  keyPrefix = "pro-toggle",
  links = {
    upgrade: "https://frontiswp.com/pro",
    docs: "https://frontiswp.com/docs",
    support: "https://frontiswp.com/contact",
  },
  isProActive,
}) => {
  // If prop is not passed, use localize/fallback
  const pro = typeof isProActive === "boolean" ? isProActive : getProActive();

  const checked = !!(attributes && attributes[dynamicAttr]);

  // If Pro is active, return external controls (PRO hook)
  if (pro) {
    const external = applyFilters(hook, [], {
      attributes,
      setAttributes,
      isProActive: pro,
    });
    if (Array.isArray(external) && external.length > 0) {
      return external;
    }
  }

  const ProBadgeDropdown = () => (
    <Dropdown
      className="fb-pro-badge-dropdown"
      contentClassName="fb-pro-badge-dropdown-content"
      popoverProps={{ placement: "bottom-start" }}
      renderToggle={({ isOpen, onToggle }) => (
        <Button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="fb-pro-badge"
        >
          <span className="fb-pro-badge-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H17Z"
                fill="#F89B2E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.8321 5.24808C12.4362 4.65434 11.5638 4.65434 11.1679 5.24808L8.45008 9.32488C8.18777 9.71835 7.6857 9.87428 7.24664 9.69866L5.0019 8.80076C4.21143 8.48457 3.4126 9.23779 3.68182 10.0455L5.77208 16.3162C5.90819 16.7246 6.29033 17 6.72076 17H12H17.2792C17.7097 17 18.0918 16.7246 18.2279 16.3162L20.3182 10.0455C20.5874 9.23779 19.7886 8.48457 18.9981 8.80076L16.7534 9.69866C16.3143 9.87428 15.8122 9.71835 15.5499 9.32488L12.8321 5.24808Z"
                fill="#F89B2E"
              />
            </svg>
          </span>
          <span className="fb-pro-badge-text">
            {__("PRO", "frontis-blocks")}
          </span>
        </Button>
      )}
      renderContent={() => (
        <div className="fb-pro-menu">
          <div className="fb-pro-popup-wrapper">
            <div className="fb-pro-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1667 15.834C14.6269 15.834 15 16.2071 15 16.6673C15 17.1276 14.6269 17.5007 14.1667 17.5007H5.83333C5.3731 17.5007 5 17.1276 5 16.6673C5 16.2071 5.3731 15.834 5.83333 15.834H14.1667Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8321 4.58206C10.4362 3.98833 9.56377 3.98833 9.16795 4.58206L7.11675 7.65886C6.85444 8.05233 6.35237 8.20827 5.91331 8.03264L4.50189 7.46808C3.71142 7.15189 2.9126 7.90511 3.18182 8.71278L4.77208 13.4835C4.90819 13.8919 5.29033 14.1673 5.72076 14.1673H10H14.2792C14.7097 14.1673 15.0918 13.8919 15.2279 13.4835L16.8182 8.71278C17.0874 7.90511 16.2886 7.15189 15.4981 7.46808L14.0867 8.03264C13.6476 8.20827 13.1456 8.05233 12.8833 7.65886L10.8321 4.58206Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="fb-pro-card-content">
              <h3 className="fb-pro-card-heading">Upgrade to PRO</h3>
              <p className="fb-pro-card-text">Get 1 month free and unlock</p>
            </div>
            <div className="fb-pro-upgrade-btn-wrapper">
              <div className="fb-pro-upgrade-now-btn">
                <a href="#">Upgrade Now</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1667 15.834C14.6269 15.834 15 16.2071 15 16.6673C15 17.1276 14.6269 17.5007 14.1667 17.5007H5.83333C5.3731 17.5007 5 17.1276 5 16.6673C5 16.2071 5.3731 15.834 5.83333 15.834H14.1667Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.8321 4.58206C10.4362 3.98833 9.56377 3.98833 9.16795 4.58206L7.11675 7.65886C6.85444 8.05233 6.35237 8.20827 5.91331 8.03264L4.50189 7.46808C3.71142 7.15189 2.9126 7.90511 3.18182 8.71278L4.77208 13.4835C4.90819 13.8919 5.29033 14.1673 5.72076 14.1673H10H14.2792C14.7097 14.1673 15.0918 13.8919 15.2279 13.4835L16.8182 8.71278C17.0874 7.90511 16.2886 7.15189 15.4981 7.46808L14.0867 8.03264C13.6476 8.20827 13.1456 8.05233 12.8833 7.65886L10.8321 4.58206Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="fb-pro-upgrade-doc-btn">
                <a href="#">Documentation</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 4.5L13.5 9M13.5 9L9 13.5M13.5 9H4.5"
                    stroke="#555E72"
                    stroke-width="1.2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );

  return [
    {
      key: `${keyPrefix}-${dynamicAttr}-locked`,
      comp: (
        <div className="fb-pro-lock switcher-control">
          <ToggleControl
            label={label}
            checked={checked}
            onChange={() => { }}
            disabled
          />
          <ProBadgeDropdown />
        </div>
      ),
    },
  ];
};

export default getProToggleControls;