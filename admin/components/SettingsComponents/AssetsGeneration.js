import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState, useEffect, useCallback } from '@wordpress/element';
import ConfirmationModal from '../common/ConfirmationModal';
import { toast } from 'react-toastify';

const AssetsGeneration = () => {
	const [options, setOptions] = useState({
		file_generation: false,
	});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

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
						const errorDetails = response.data?.old_value !== undefined ?
							` (Old value: ${JSON.stringify(response.data.old_value)}, New value: ${JSON.stringify(response.data.new_value)}, Option name: ${response.data.option_name})` : '';
						toast.error(__(`Failed to save option: ${errorMessage}${errorDetails}`, 'frontis-blocks'), {
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

	const handleSwitchChange = async (option) => {
		const newValue = !options[option];
		try {
			await saveOption(option, newValue ? '1' : '0');
			setOptions(prevOptions => ({ ...prevOptions, [option]: newValue }));
		} catch (error) {
			// Revert the switch if saving failed
			setOptions(prevOptions => ({ ...prevOptions, [option]: !newValue }));
		}
	};

	const handleAssetGeneration = useCallback(() => {
		setIsModalOpen(true);
	}, []);

	const confirmAssetGeneration = useCallback(() => {
		setIsLoading(true); // Start loading
		setIsModalOpen(false);
		window.jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_generate_assets',
				security: nonce,
			},
			success: function(response) {
				setIsLoading(false);
				if (response.success) {
					setIsLoading(false); // Stop loading
					toast.success(__(response.data.message, 'frontis-blocks'), {
						position: "top-right",
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
					});
				} else {
					setIsLoading(false); // Stop loading
					toast.error(__(`Failed to regenerate files: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
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
				setIsLoading(false); // Stop loading
				toast.error(__(`Failed to regenerate files: ${status} - ${error}`, 'frontis-blocks'), {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				});
			}
		});
	}, [ajaxUrl, nonce]);

	const closeModal = useCallback(() => {
		setIsModalOpen(false);
	}, []);

	return (
		<div className="fb-blocks-settings-options">
			{/* <h3>{__('Assets Generation', 'frontis-blocks')}</h3> */}

			<div className="fb-option">
				<div className="fb-option-label">
					<h3>{__('File Generation', 'frontis-blocks')}</h3>
					<p>{__('Enable automatic file generation', 'frontis-blocks')}</p>
				</div>
				<div className="fb-option-input">
					<p className="fb-button-upcoming">
						{__('Coming Soon', 'frontis-blocks')}
					</p>
				</div>
			</div>

			<div className="fb-option">
				<div className="fb-option-label">
					<h3>{__('Asset Generation', 'frontis-blocks')}</h3>
					<p>{__('Generate assets for your blocks', 'frontis-blocks')}</p>
				</div>
				<div className={`fb-option-input ${isLoading ? 'fb-assets-generation-button-wrapper' : ''}`}>
					<Button
						className={`fb-button-primary ${isLoading ? 'fb-assets-generation-button' : ''}`}
						onClick={handleAssetGeneration}
						disabled={isLoading}
					>
						{__('Regenerate Asset', 'frontis-blocks')}
					</Button>
					{isLoading && (
						<span className="fb-loading-spinner"></span>
					)}
				</div>
			</div>

			<ConfirmationModal
				isOpen={isModalOpen}
				onClose={closeModal}
				onConfirm={confirmAssetGeneration}
				title={__('Confirm Asset Generation', 'frontis-blocks')}
				message={__('Are you sure you want to generate assets? This process may take a few moments.', 'frontis-blocks')}
			/>
		</div>
	);
};

export default AssetsGeneration;
