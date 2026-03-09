import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { toast } from 'react-toastify';
import FBSwitch from '../../components/common/Switch';

const Performance = () => {
	const [options, setOptions] = useState({
		google_fonts_preload: true,
		preload_local_fonts: false,
	});
	const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

	useEffect(() => {
		fetchOptions();
	  }, []);
	
	  const fetchOptions = () => {
		const keys = Object.keys(options);
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
				setOptions(prevOptions => {
					const merged = { ...prevOptions };
					Object.keys(response.data).forEach(key => {
						const value = response.data[key];
						if (value !== undefined && value !== null && value !== '' && value !== false) {
							try {
								merged[key] = JSON.parse(value);
							} catch (e) {
								merged[key] = value;
							}
						}
					});
					return merged;
				});
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
				setOptions(prevOptions => ({ ...prevOptions, [key]: value }));
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

	const handleSwitchChange = (option) => {
		const newValue = !options[option];
		saveOption(option, newValue);
	};

	return (
		<div className="fb-blocks-settings-options">

			<div className="fb-option">
				<div className="fb-option-label">
					<h4 className="p1">{__("Preload Google Fonts", "frontis-blocks")}</h4>
					<p className="p2">
						{__(
							"Enable high-performance font loading (rel='preload'). If disabled, standard loading (rel='stylesheet') will be used.",
							"frontis-blocks",
						)}
					</p>
				</div>

				<div className="fb-block-card-switch">
					<FBSwitch
						checked={options.google_fonts_preload}
						onChange={() => handleSwitchChange("google_fonts_preload")}
					/>
				</div>
			</div>

			<div className="fb-option">
				<div className="fb-option-label">
					<h4 className="p1">{__("Preload Local Fonts", "frontis-blocks")}</h4>
					<p className="p2">
						{__(
							"Preload Local Fonts for performance improvement",
							"frontis-blocks",
						)}
					</p>
				</div>
				<p className="fb-button-upcoming">
					{__('Coming Soon', 'frontis-blocks')}
				</p>
			</div>
		</div>
	);
};

export default Performance;
