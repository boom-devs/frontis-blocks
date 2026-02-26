import "../../admin/scss/_upgrade-to-pro-popup.scss";

const UpgradeToProPopup = () => {
	return (
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
					<p className="fb-pro-card-text">
						Upgrade to Frontis Blocks PRO and gain access to advanced blocks
						and features to build websites more efficiently.
					</p>
				</div>
				<div className="fb-pro-upgrade-btn-wrapper">
					<div className="fb-pro-upgrade-now-btn">
						<a target="_blank" href="https://frontiswp.com/block/pricing-table/">Upgrade Now</a>
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
				</div>
			</div>
		</div>
	);
};

export default UpgradeToProPopup;