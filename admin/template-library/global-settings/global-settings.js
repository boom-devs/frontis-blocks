import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { useViewportMatch } from '@wordpress/compose';
import {
	__experimentalNavigatorProvider as NavigatorProvider,
	__experimentalNavigatorScreen as NavigatorScreen,
	__experimentalNavigatorButton as NavigatorButton,
	__experimentalPaletteEdit as PaletteEdit,
} from "@wordpress/components";
import { useEffect, useState, useCallback, useMemo } from "@wordpress/element";
import TypographySettings from "./components/TypographySettings";
import { useDeviceType } from "@Config/displayType";
import { loadGoogleFont, useAfterSave } from "./helper";
import { getGlobalStyle, updateGlobalStyle } from "./fetch";
// import generateCSSVariables from "./components/GenerateRootCss";
import './scss/global-settings.scss';
import ColorSettings from "./components/ColorSettings";


const FsiGbTypography = ({ 
    globalColors,
    setGlobalColors,
    customColors,
    setCustomColors,
    gradientColors,
    setGradientColors,
    customGradientColors,
    setCustomGradientColors,
    typography, 
    setTypography,
    customTypography,
    setCustomTypography,
    fontFamilies,
    setFontFamilies,
    globalTypography,
    setGlobalTypography,
}) => {

	const deviceType = useDeviceType();


	return (
		<>
			<div className="fb_template_library_sidebar">
				<div className="fb-panel-control">
					<NavigatorProvider initialPath="/">
						<ColorSettings
							globalColors={globalColors}
							setGlobalColors={setGlobalColors}
							customColors={customColors}
							setCustomColors={setCustomColors}
							gradientColors={gradientColors}
							setGradientColors={setGradientColors}
							customGradientColors={customGradientColors}
							setCustomGradientColors={setCustomGradientColors}
							deviceType={deviceType}
						/>

						<TypographySettings
							typography={typography}
							setTypography={setTypography}
							customTypography={customTypography}
							setCustomTypography={setCustomTypography}
							fontFamilies={fontFamilies}
							setFontFamilies={setFontFamilies}
							globalTypography={globalTypography}
							setGlobalTypography={setGlobalTypography}
						/>
					</NavigatorProvider>
				</div>
			</div>
		</>
	);
}

export default FsiGbTypography;

