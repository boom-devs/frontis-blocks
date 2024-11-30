import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { TextControl } from '@wordpress/components';
import { toast } from 'react-toastify';

const Integration = () => {
  const [integrations, setIntegrations] = useState({
    recaptcha_v2_site_key: '',
    recaptcha_v2_secret_key: '',
    recaptcha_v3_site_key: '',
    recaptcha_v3_secret_key: '',
    google_maps_api_key: '',
    instagram_access_token: '',
  });

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = () => {
    const keys = Object.keys(integrations);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys,
      },
      success: function(response) {
        if (response.success) {
          setIntegrations(prevIntegrations => ({ ...prevIntegrations, ...response.data }));
        } else {
          toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      },
      error: function(xhr, status, error) {
        toast.error(__(`Failed to fetch options: ${status} - ${error}`, 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  };

  const saveOption = (key, value) => {
    return new Promise((resolve, reject) => {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: `fb_${key}`,
          security: nonce,
          value: value,
        },
        success: function(response) {
          if (response.success) {
            setIntegrations(prevIntegrations => ({ ...prevIntegrations, [key]: value }));
            toast.success(__(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            resolve(true);
          } else {
            const errorMessage = response.data?.message || 'Unknown error';
            toast.error(__(`Failed to save option: ${errorMessage}`, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            reject(new Error(errorMessage));
          }
        },
        error: function(xhr, status, error) {
          const errorMessage = `${status} - ${error}`;
          toast.error(__(`Failed to save option: ${errorMessage}`, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };

  const handleChange = (value, name) => {
    setIntegrations((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (name) => {
    saveOption(name, integrations[name]);
  };

  return (
    <div className="fb-blocks-integration">
      <div className="integration-section">
        <div className="section-content">
          <div className="section-left">
            <h2>{__('Google reCAPTCHA', 'frontis-blocks')}</h2>
            <p className="description">
              {__('Google reCAPTCHA is a free service that protects your website from spam and abuse.', 'frontis-blocks')}
            </p>
          </div>
          <div className="section-right">
            <div className="recaptcha-version">
              <h3>{__('reCAPTCHA v2', 'frontis-blocks')}</h3>
              <TextControl
                label={__('Site key', 'frontis-blocks')}
                value={integrations.recaptcha_v2_site_key}
                onChange={(value) => handleChange(value, 'recaptcha_v2_site_key')}
                onBlur={() => handleBlur('recaptcha_v2_site_key')}
                placeholder={__('Enter reCAPTCHA v2 Site Key', 'frontis-blocks')}
              />
              <TextControl
                label={ __('Secret key', 'frontis-blocks') }
                type="password"
                value={integrations.recaptcha_v2_secret_key}
                onChange={(value) => handleChange(value, 'recaptcha_v2_secret_key')}
                onBlur={() => handleBlur('recaptcha_v2_secret_key')}
                placeholder={__('Enter reCAPTCHA v2 Secret Key', 'frontis-blocks')}
              />
              <a href="#" className="api-documentation">{__('API Documentation', 'frontis-blocks')}</a>
            </div>

            <div className="recaptcha-version">
              <h3>{__('reCAPTCHA v3', 'frontis-blocks')}</h3>
              <TextControl
                label={__('Site key', 'frontis-blocks')}
                value={integrations.recaptcha_v3_site_key}
                onChange={(value) => handleChange(value, 'recaptcha_v3_site_key')}
                onBlur={() => handleBlur('recaptcha_v3_site_key')}
                placeholder={__('Enter reCAPTCHA v3 Site Key', 'frontis-blocks')}
              />
              <TextControl
                label={ __('Secret key', 'frontis-blocks') }
                type="password"
                value={integrations.recaptcha_v3_secret_key}
                onChange={(value) => handleChange(value, 'recaptcha_v3_secret_key')}
                onBlur={() => handleBlur('recaptcha_v3_secret_key')}
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
              value={integrations.google_maps_api_key}
              onChange={(value) => handleChange(value, 'google_maps_api_key')}
              onBlur={() => handleBlur('google_maps_api_key')}
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
              label={ __('Instagram Access Token', 'frontis-blocks') }
              type="password"
              value={integrations.instagram_access_token}
              onChange={(value) => handleChange(value, 'instagram_access_token')}
              onBlur={() => handleBlur('instagram_access_token')}
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
