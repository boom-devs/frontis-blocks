import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { TextControl } from '@wordpress/components';

const Integration = () => {
  const [integrations, setIntegrations] = useState({
    recaptchaV2SiteKey: '',
    recaptchaV2SecretKey: '',
    recaptchaV3SiteKey: '',
    recaptchaV3SecretKey: '',
    googleMapsApiKey: '',
    instagramAccessToken: '',
  });

  const handleChange = (value, name) => {
    setIntegrations((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="fb-blocks-integration">
      <div className="integration-section">
        <div className="section-content">
          <div className="section-left">
            <h2>{__('Google reCAPTCHA', 'frontis-blocks')}</h2>
            <p className="description">
              {__('Lorem ipsum dolor sit amet consectetur. Facilisis magna rhoncus aliquam neque semper interdum tempus eleifend justo. Cursus lectus nibh tempus commodo leo eget netus. Id libero eu euismod metus congue. Ornare erat ornare vel scelerisque neque in semper tortor justo.', 'frontis-blocks')}
            </p>
          </div>
          <div className="section-right">
            <div className="recaptcha-version">
              <h3>{__('reCAPTCHA v2', 'frontis-blocks')}</h3>
              <TextControl
                label={__('Site key v1', 'frontis-blocks')}
                value={integrations.recaptchaV2SiteKey}
                onChange={(value) => handleChange(value, 'recaptchaV2SiteKey')}
                placeholder={__('Enter reCAPTCHA v2 Site Key', 'frontis-blocks')}
              />
              <TextControl
                label={__('Secret key v2', 'frontis-blocks')}
                value={integrations.recaptchaV2SecretKey}
                onChange={(value) => handleChange(value, 'recaptchaV2SecretKey')}
                placeholder={__('Enter reCAPTCHA v2 Secret Key', 'frontis-blocks')}
              />
              <a href="#" className="api-documentation">{__('API Documentation', 'frontis-blocks')}</a>
            </div>

            <div className="recaptcha-version">
              <h3>{__('reCAPTCHA v3', 'frontis-blocks')}</h3>
              <TextControl
                label={__('Site key v1', 'frontis-blocks')}
                value={integrations.recaptchaV3SiteKey}
                onChange={(value) => handleChange(value, 'recaptchaV3SiteKey')}
                placeholder={__('Enter reCAPTCHA v3 Site Key', 'frontis-blocks')}
              />
              <TextControl
                label={__('Secret key v2', 'frontis-blocks')}
                value={integrations.recaptchaV3SecretKey}
                onChange={(value) => handleChange(value, 'recaptchaV3SecretKey')}
                placeholder={__('Enter reCAPTCHA v3 Secret Key', 'frontis-blocks')}
              />
              <a href="#" className="api-documentation">{__('API Documentation', 'frontis-blocks')}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="integration-section">
        <div className="section-content">
          <div className="section-left">
            <h2>{__('Google Maps', 'frontis-blocks')}</h2>
            <p className="description">
              {__('Integrate Google Maps into your website to display interactive maps and location-based information.', 'frontis-blocks')}
            </p>
          </div>
          <div className="section-right">
            <TextControl
              label={__('Google Maps API Key', 'frontis-blocks')}
              value={integrations.googleMapsApiKey}
              onChange={(value) => handleChange(value, 'googleMapsApiKey')}
              placeholder={__('Enter Google Maps API Key', 'frontis-blocks')}
            />
            <a href="#" className="api-documentation">{__('API Documentation', 'frontis-blocks')}</a>
          </div>
        </div>
      </div>

      <div className="integration-section">
        <div className="section-content">
          <div className="section-left">
            <h2>{__('Instagram Feed', 'frontis-blocks')}</h2>
            <p className="description">
              {__('Display your latest Instagram posts on your website with this integration.', 'frontis-blocks')}
            </p>
          </div>
          <div className="section-right">
            <TextControl
              label={__('Instagram Access Token', 'frontis-blocks')}
              value={integrations.instagramAccessToken}
              onChange={(value) => handleChange(value, 'instagramAccessToken')}
              placeholder={__('Enter Instagram Access Token', 'frontis-blocks')}
            />
            <a href="#" className="api-documentation">{__('API Documentation', 'frontis-blocks')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
