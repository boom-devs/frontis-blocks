import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import Switch from "rc-switch";
import { toast } from 'react-toastify';

const Performance = () => {
	const [options, setOptions] = useState({
		google_fonts: false,
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
			  setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
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
		setOptions((prevState) => ({
			...prevState,
			[option]: !prevState[option],
		}));
		saveOption(option, !prevState[option]);
	};

	return (
		<div className="fb-blocks-settings-options">

			<div className="fb-option">
				<div className="fb-option-label">
					<h3>{__("Load Google Fonts Locally", "frontis-blocks")}</h3>
					<p>
						{__(
							"Load Google Fonts Locally for performance improvement",
							"frontis-blocks",
						)}
					</p>
				</div>

				{/* <div className="fb-option-input">
					<Switch
						checked={options.google_fonts}
						onChange={() => handleSwitchChange("google_fonts")}
					/>
				</div> */}
				<p className="fb-button-upcoming">
					{__('Coming Soon', 'frontis-blocks')}
				</p>
			</div>

			<div className="fb-option">
				<div className="fb-option-label">
					<h3>{__("Preload Local Fonts", "frontis-blocks")}</h3>
					<p>
						{__(
							"Preload Local Fonts for performance improvement",
							"frontis-blocks",
						)}
					</p>
				</div>
				{/* <div className="fb-option-input">
					<Switch
						checked={options.preload_local_fonts}
						onChange={() => handleSwitchChange("preload_local_fonts")}
					/>
				</div> */}
				<p className="fb-button-upcoming">
					{__('Coming Soon', 'frontis-blocks')}
				</p>
			</div>

            {/* Allow Only Selected Fonts for later, its need to use select2 library */}
		</div>
	);
};

export default Performance;
