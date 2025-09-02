import { __ } from "@wordpress/i18n";
import { useViewportMatch } from '@wordpress/compose';
import {
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalPaletteEdit as PaletteEdit,
} from "@wordpress/components";
import { useEffect, useCallback, useMemo } from "@wordpress/element";
import generateColorsVariables from "./GenerateColorRoot";
import { defaultColors } from "../constants/constants";
import { updateGlobalStyle } from "../fetch";


const ColorSettings = ({
	globalColors,
	setGlobalColors,
	gradientColors,
	setGradientColors,
	deviceType,
	isAfterSave,
	isLoading,
	setIsLoading,
}) => {


	// Memoized theme colors
	const themeColors = useMemo(
		() => frontisBlocksAdmin?.theme_colors || defaultColors,
		[],
	);
	
	const mobilePopoverProps = { placement: 'bottom-start', offset: 8 };
	const isMobileViewport = useViewportMatch( 'small', '<' );
	const popoverProps = isMobileViewport ? mobilePopoverProps : undefined;


	// Generate color variables
	useEffect(() => {
		const mergedColors = [
			...(gradientColors ?? []),
			...(globalColors ?? (Array.isArray(themeColors) ? themeColors : [])),
		];

		setTimeout(() => generateColorsVariables(mergedColors, deviceType), 1000);
	}, [
		globalColors,
		gradientColors,
		deviceType,
	]);

	// // Save settings after post save
	// const handleUpdateSettings = useCallback(async () => {
	// 	if (!isAfterSave || !isLoading) return;
	// 	const settings = [
	// 		{
	// 			key: "fb_update_global_colors",
	// 			data: globalColors,
	// 			setter: setGlobalColors,
	// 			storeKey: "fb_global_colors",
	// 		},
	// 		{
	// 			key: "fb_update_gradient_colors",
	// 			data: gradientColors,
	// 			setter: setGradientColors,
	// 			storeKey: "fb_gradient_colors",
	// 		},
	// 	];

	// 	try {
	// 		for (const { key, data, setter, storeKey } of settings) {
	// 			const response = await updateGlobalStyle(data, key);
	// 			if (response.success) {
	// 				setter(response.data.data);
	// 				localStorage.setItem(storeKey, JSON.stringify(response.data.data));
	// 			}
	// 		}

	// 		setIsLoading(false);
	// 	} catch (error) {
	// 		console.error("Error updating settings:", error);
	// 	}
	// }, [
	// 	isAfterSave,
	// 	isLoading,
	// 	globalColors,
	// 	gradientColors,
	// ]);

	// useEffect(() => {
	// 	handleUpdateSettings();
	// }, [handleUpdateSettings]);

	useEffect(() => {
		if (!isLoading) {
			setIsLoading(true);
			wp.data.dispatch('core/editor').editPost({ meta: { _dummy: new Date().getTime() } });
		}

		if (globalColors === undefined) {
			setGlobalColors(themeColors);
		}

	}, [globalColors, gradientColors]);


	return (
		<>
			<div className="fb-color-options-vertical">
									{/* Solid Colors Section */}
								<div className="fb-color-section-wrapper">
									{(globalColors.length !== 0 || themeColors.length !== 0) && (
									<div className="fb-color-section">
										<PaletteEdit
											canOnlyChangeValues
											colors={ globalColors || themeColors }
											onChange={ setGlobalColors }
											paletteLabel={ __( 'Solid' ) }
											paletteLabelHeadingLevel={ 3 }
											popoverProps={ popoverProps }
											classnames="fb-solid-color-panel"
										/>
									</div>
									)}
								</div>

								{/* Gradient Section */}
								<div className="fb-color-section-wrapper">
									{(gradientColors.length !== 0) && (
										<div className="fb-color-section">
											<PaletteEdit
												canOnlyChangeValues
												gradients={ gradientColors }
												onChange={ setGradientColors }
												paletteLabel={ __( 'Gradient' ) }
												classnames="fb-gradient-color-panel"
												paletteLabelHeadingLevel={ 3 }
												popoverProps={ popoverProps }
											/>
										</div>
									)}
								</div>
			</div>
		</>
	)
}

export default ColorSettings;
