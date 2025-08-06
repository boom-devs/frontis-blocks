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
	customColors,
	setCustomColors,
	gradientColors,
	setGradientColors,
	customGradientColors,
	setCustomGradientColors,
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
			...(customColors ?? []),
			...(customGradientColors ?? []),
			...(gradientColors ?? []),
			...(globalColors ?? (Array.isArray(themeColors) ? themeColors : [])),
		];

		setTimeout(() => generateColorsVariables(mergedColors, deviceType), 1000);
	}, [
		globalColors,
		customColors,
		customGradientColors,
		gradientColors,
		deviceType,
	]);

	// Save settings after post save
	const handleUpdateSettings = useCallback(async () => {
		if (!isAfterSave || !isLoading) return;
		const settings = [
			{
				key: "fb_update_global_colors",
				data: globalColors,
				setter: setGlobalColors,
				storeKey: "fb_global_colors",
			},
			{
				key: "fb_update_custom_colors",
				data: customColors,
				setter: setCustomColors,
				storeKey: "fb_custom_colors",
			},
			{
				key: "fb_update_gradient_colors",
				data: gradientColors,
				setter: setGradientColors,
				storeKey: "fb_gradient_colors",
			},
			{
				key: "fb_update_custom_gradient_colors",
				data: customGradientColors,
				setter: setCustomGradientColors,
				storeKey: "fb_custom_gradient_colors",
			},
		];

		try {
			for (const { key, data, setter, storeKey } of settings) {
				const response = await updateGlobalStyle(data, key);
				if (response.success) {
					setter(response.data.data);
					localStorage.setItem(storeKey, JSON.stringify(response.data.data));
				}
			}

			setIsLoading(false);
		} catch (error) {
			console.error("Error updating settings:", error);
		}
	}, [
		isAfterSave,
		isLoading,
		globalColors,
		customColors,
		gradientColors,
		customGradientColors,
	]);

	useEffect(() => {
		handleUpdateSettings();
	}, [handleUpdateSettings]);

	useEffect(() => {
		if (!isLoading) {
			setIsLoading(true);
			wp.data.dispatch('core/editor').editPost({ meta: { _dummy: new Date().getTime() } });
		}

		if (globalColors === undefined) {
			setGlobalColors(themeColors);
		}

	}, [customColors, globalColors, gradientColors, customGradientColors]);


	return (
		<>
			<div className="fb-color-options-vertical">
				{/* Solid Colors Section */}
				<div className="fb-color-section">
										<PaletteEdit
											canReset={ globalColors || themeColors }
											canOnlyChangeValues
											colors={ globalColors || themeColors }
											onChange={ setGlobalColors }
											paletteLabel={ __( 'Solid' ) }
											paletteLabelHeadingLevel={ 3 }
											popoverProps={ popoverProps }
											classnames="fb-solid-color-panel"
										/>
										<PaletteEdit
											colors={ customColors }
											onChange={ setCustomColors }
											paletteLabel={ __( 'Custom' ) }
											paletteLabelHeadingLevel={ 3 }
											slugPrefix="custom-"
											popoverProps={ popoverProps }
											classnames="fb-custom-color-panel"	
										/>

									</div>
									
									{/* Gradient Section */}
									<div className="fb-color-section">
										{(gradientColors.length !== 0 || frontisBlocksAdmin?.gradients_colors.length !== 0) && (
											<PaletteEdit
												canReset={true}
												canOnlyChangeValues
												gradients={ gradientColors || frontisBlocksAdmin?.gradients_colors }
												onChange={ setGradientColors }
												paletteLabel={ __( 'Gradient' ) }
												classnames="fb-gradient-color-panel"
												paletteLabelHeadingLevel={ 3 }
												popoverProps={ popoverProps }
											/>
										)}
										<PaletteEdit
											gradients={ customGradientColors }
											onChange={ setCustomGradientColors }
											paletteLabel={ __( 'Custom Gradients' ) }
											paletteLabelHeadingLevel={ 3 }
											slugPrefix="custom-"
											className="fb-custom-gradient-color-panel"	
											popoverProps={ popoverProps }
										/>
									</div>
			</div>
		</>
	)
}

export default ColorSettings;
