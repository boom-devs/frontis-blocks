import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import Switch from "rc-switch";

const Performance = () => {
	const [options, setOptions] = useState({
		googleFonts: false,
		preloadLocalFonts: false,
	});

	const handleSwitchChange = (option) => {
		setOptions((prevState) => ({
			...prevState,
			[option]: !prevState[option],
		}));
	};

	return (
		<div className="fb-blocks-settings-options">

			<div className="fb-option">
				<div className="fb-option-label">
					<label>{__("Load Google Fonts Locally", "frontis-blocks")}</label>
					<p>
						{__(
							"Load Google Fonts Locally for performance improvement",
							"frontis-blocks",
						)}
					</p>
				</div>

				<div className="fb-option-input">
					<Switch
						checked={options.googleFonts}
						onChange={() => handleSwitchChange("googleFonts")}
					/>
				</div>
			</div>

			<div className="fb-option">
				<div className="fb-option-label">
					<label>{__("Preload Local Fonts", "frontis-blocks")}</label>
					<p>
						{__(
							"Preload Local Fonts for performance improvement",
							"frontis-blocks",
						)}
					</p>
				</div>
				<div className="fb-option-input">
					<Switch
						checked={options.preloadLocalFonts}
						onChange={() => handleSwitchChange("preloadLocalFonts")}
					/>
				</div>
			</div>

            {/* Allow Only Selected Fonts for later, its need to use select2 library */}
		</div>
	);
};

export default Performance;
