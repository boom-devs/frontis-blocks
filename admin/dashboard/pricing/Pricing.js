import React from 'react';
import { __ } from '@wordpress/i18n';

const pricingFeatures = [
  { feature: __('Plugin updated', 'frontis-blocks'), free: __('Free', 'frontis-blocks'), pro: __('Lifetime', 'frontis-blocks') },
  { feature: __('Support', 'frontis-blocks'), free: 'WordPress.org', pro: __('Lifetime', 'frontis-blocks') },
  { feature: __('Modules', 'frontis-blocks'), free: '10', pro: __('All', 'frontis-blocks') },
  { feature: __('More than 30 Custom Blocks', 'frontis-blocks'), free: true, pro: true },
  { feature: __('Extra Function for all Blocks', 'frontis-blocks'), free: true, pro: true },
  { feature: __('Premium Blocks', 'frontis-blocks'), free: false, pro: true },
  { feature: __('Dynamic Blocks', 'frontis-blocks'), free: false, pro: true },
  { feature: __('Review Comparison Table', 'frontis-blocks'), free: false, pro: true },
  { feature: __('Woocommerce Builder Blocks', 'frontis-blocks'), free: false, pro: true },
  { feature: __('Extended Popups', 'frontis-blocks'), free: false, pro: true },
  { feature: __('Priority Support', 'frontis-blocks'), free: false, pro: true },
];

const Pricing = () => {
  return (
    <div className="fb-blocks-pricing">
      <div className="fb-pricing-table">
        <div className="fb-pricing-header">
          <div className="fb-pricing-column">
            <h2>{__('Features Comparison', 'frontis-blocks')}</h2>
            <p>{__('Frontis Blocks is a powerful plugin that allows you to create stunning websites with ease.', 'frontis-blocks')}</p>
          </div>
          <div className="fb-pricing-column">
            <div className="fb-pricing-column-title">
              <span className="fb-pricing-type">{__('Free', 'frontis-blocks')}</span>
              <span className="fb-pricing-price">$00<span>{__('/Forever', 'frontis-blocks')}</span></span>
            </div>
            <button className="fb-button fb-button-green">{__('Download', 'frontis-blocks')}</button>
          </div>
          <div className="fb-pricing-column">
            <div className="fb-pricing-column-title">
              <span className="fb-pricing-type">{__('Pro', 'frontis-blocks')}</span>
              <span className="fb-pricing-price">$999<span>{__('/Years', 'frontis-blocks')}</span></span>
            </div>
            <button className="fb-button fb-button-blue">{__('Buy Now', 'frontis-blocks')}</button>
          </div>
        </div>
        <div className="fb-pricing-body">
          {pricingFeatures.map((row, index) => (
            <div key={index} className="fb-pricing-row">
              <div className="fb-pricing-column">{row.feature}</div>
              <div className="fb-pricing-column">
                {typeof row.free === 'boolean' ? (
                  <span className={`fb-pricing-icon ${row.free ? 'fb-pricing-icon-check' : 'fb-pricing-icon-cross'}`}></span>
                ) : (
                  row.free
                )}
              </div>
              <div className="fb-pricing-column">
                {typeof row.pro === 'boolean' ? (
                  <span className={`fb-pricing-icon ${row.pro ? 'fb-pricing-icon-check' : 'fb-pricing-icon-cross'}`}></span>
                ) : (
                  row.pro
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
