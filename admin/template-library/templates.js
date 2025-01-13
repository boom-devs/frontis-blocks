/**
 * WordPress dependencies
 */
import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { Button, Popover } from "@wordpress/components";

const PatternLibraryButton = () => {
	const [showPatternButton, setShowPatternButton] = useState(true);
	const [isVisible, setIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleClick = () => {
		setIsVisible(!isVisible);
	};

	const templateButton = () => {
		setLoading(true)
		installPlugin("templately", plugin_file).then((data) => {
			const res = JSON.parse(data);
			if (res.success) {
				const templatelyDiv = document.createElement("div")
				templatelyDiv.setAttribute("id", "templately-gutenberg");
				document.querySelector('body').appendChild(templatelyDiv)
				//Reload Page Assets to get Templatey button
				LoadAssets().then(() => {
					setLoading(false)
					setIsVisible(false)

					//Open Templately Modal
					window.TemplatelyAppManager.open(null, 'templately-gutenberg', 'gutenberg');

					//Update Localize
					EssentialBlocksLocalize.get_plugins = {
						...EssentialBlocksLocalize.get_plugins,
						[plugin_file]: {
							...EssentialBlocksLocalize.get_plugins[plugin_file],
							active: true
						}
					}
				});
			} else {
				setError(true)
				setTimeout(() => {
					setIsVisible(false)
				}, 2000)
			}
		});
	}

	const neverShowPatternButton = () => {
		let data = new FormData();
		data.append("action", "hide_pattern_library");
		data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);

		return fetch(EssentialBlocksLocalize.ajax_url, {
			method: "POST",
			body: data,
		})
			.then((res) => res.text())
			.then((data) => {
				const res = JSON.parse(data);
				if (res.success) {
					setIsVisible(false)
					setShowPatternButton(false)
				}
			})
			.catch((err) => console.log(err));
	}

	return (
		<Button
			onClick={() => handleClick()}
			className={"eb-pattern-library-button"}
		>
			<img
				src={`assets/images/eb-logo.svg`}
				alt={"Essential Blocks Icon"}
			/>{" "}
			{__("Pattern Library", "essential-blocks")}
		</Button>
	);
};

export default PatternLibraryButton;
