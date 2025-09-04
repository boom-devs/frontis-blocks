/**
 * WordPress dependencies
 */
import { useCallback } from "@wordpress/element";


const PluginUpgradeModal = ({ onClose }) => {

	const handleOverlayClick = useCallback((e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}, [onClose]);
	

	return (
		<div className="fb-auth-modal" onClick={handleOverlayClick}>
				<div className="fb-plugin-upgrade-wrapper">
					<div className="fb-template-info">
						<div className="fb-template-icon">
							<svg xmlns="https://www.w3.org/2000/svg" width="62" height="63" viewBox="0 0 62 63" fill="none">
								<path d="M50.8585 34.9862L51.3322 29.9533C51.7042 26.0006 51.8902 24.0242 51.214 23.2072C50.8482 22.7653 50.3508 22.4945 49.819 22.4478C48.8359 22.3614 47.6013 23.767 45.1321 26.578C43.8551 28.0317 43.2166 28.7586 42.5043 28.8711C42.1096 28.9335 41.7075 28.8694 41.3431 28.686C40.6853 28.355 40.2468 27.4564 39.3698 25.6592L34.7469 16.1863C33.0896 12.7903 32.261 11.0923 30.9999 11.0923C29.7389 11.0923 28.9102 12.7903 27.2529 16.1863L22.6301 25.6592C21.753 27.4564 21.3145 28.355 20.6568 28.686C20.2924 28.8694 19.8902 28.9335 19.4956 28.8711C18.7833 28.7586 18.1448 28.0317 16.8678 26.578C14.3986 23.767 13.1639 22.3614 12.1808 22.4478C11.649 22.4945 11.1516 22.7653 10.7858 23.2072C10.1096 24.0242 10.2956 26.0006 10.6677 29.9533L11.1413 34.9862C11.9218 43.2789 12.312 47.4253 14.7561 49.9254C17.2002 52.4256 20.8633 52.4256 28.1894 52.4256H33.8104C41.1366 52.4256 44.7997 52.4256 47.2437 49.9254C49.6878 47.4253 50.078 43.2789 50.8585 34.9862Z" stroke="#3991FF" stroke-width="3"/>
								<path d="M24.804 44.1509H37.204" stroke="#3991FF" stroke-width="3" stroke-linecap="round"/>
							</svg>
						</div>

						<h2 className="fb-template-title">
							Upgrade to Pro
						</h2>

						<p className="fb-template-description">
							Get premium resources at Frontis Blocks and save more time with stunning patterns and templates
						</p>
					</div>

					<div className="fb-template-actions">
						<button
							className={`fb-plugin-upgrade-btn`}
						>
							Upgrade Now
						</button>
					</div>
				</div>
		</div>
	);
};

export default PluginUpgradeModal;