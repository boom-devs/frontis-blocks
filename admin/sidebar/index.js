import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	Dropdown,
	Button,
	ColorPalette,
	ColorIndicator,
	TabPanel,
	GradientPicker,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalUseDeviceType as useDeviceType,
} from "@wordpress/components";
import {
	PanelColorSettings,
	__experimentalColorGradientControl as ColorGradientControl,
	BlockPreview,
} from "@wordpress/block-editor";
import FB_TypographyControl from '@Components/typography-control';
import GradientColorPallet from './components/GradientColorPallet';
import { createBlock, store as blocksStore } from "@wordpress/blocks";
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { FBIcon } from '../icons';
import "./sidebar.scss";
import jQuery from 'jquery';

const defaultsColors = [
    {
        "name": __("Primary Color", "frontis-blocks"),
        "color": '#f00000',
        "slug": 'primary-color',
    },
    {
        "name": __("Secondary Color", "frontis-blocks"),
        "color": '#0f0',
        "slug": 'secondary-color',
    },
    {
        "name": __("Tertiary Color", "frontis-blocks"),
        "color": '#00f',
        "slug": 'tertiary-color',
    },
    {
        "name": __("Accent Color", "frontis-blocks"),
        "color": "#00f",
        "slug": 'accent-color',
    },
    {
        "name": __("Text Color", "frontis-blocks"),
        "color": '#000',
        "slug": 'text-color',
    },
    {
        "name": __("Link Color", "frontis-blocks"),
        "color": '#00f',
        "slug": 'link-color',
    },
    {
        "name": __("Link Hover Color", "frontis-blocks"),
        "color": '#00f',
        "slug": 'link-hover-color',
    },
    {
        "name": __("Background Color", "frontis-blocks"),
        "color": '#000',
        "slug": 'background-color',
    },
    {
        "name": __("Button Color", "frontis-blocks"),
        "color": '#FFFFFF',
        "slug": 'button-color',
    },
    {
        "name": __("Button Background Color", "frontis-blocks"),
        "color": '#000',
        "slug": 'button-background-color',
    }

];

const gradientDefaults = [
    {
        "color": "linear-gradient(90deg, hsla(259, 84%, 78%, 1) 0%, hsla(206, 67%, 75%, 1) 100%)",
        "name": "Primary Color",
        "slug": "gradientPrimary",
        "var": "--fb-gradient-primary-color"
    },
    {
        "color": "linear-gradient(90deg, hsla(18, 76%, 85%, 1) 0%, hsla(203, 69%, 84%, 1) 100%)",
        "name": "Secondary Color",
        "slug": "gradientSecondary",
        "var": "--fb-gradient-secondary-color"
    },
    {
        "color": "linear-gradient(90deg, hsla(248, 21%, 15%, 1) 0%, hsla(250, 14%, 61%, 1) 100%)",
        "name": "Tertiary Color",
        "slug": "gradientTertiary",
        "var": "--fb-gradient-tertiary-color"
    },
    {
        "color": "linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(233, 233, 233) 49%, rgb(244, 243, 243) 100%)",
        "name": "Background Color",
        "slug": "gradientBackground",
        "var": "--fb-gradient-background-color"
    }
];

const FrontisBlocksSidebar = () => {
	const themeColors = useSelect((select) => {
		return select("core/editor").getEditorSettings().colors;
	}, []);

	const [customColors, setCustomColors] = useState([]);
	const [activeTab, setActiveTab] = useState("solid");
    const [gradientColors, setGradientColors] = useState([]);
	const [globalColors, setGlobalColors] = useState([]);
    

	const [textFontFamily, setTextFontFamily] = useState('');
	const [textFontSize, setTextFontSize] = useState('');
	const [textFontSizeUnits, setTextFontSizeUnits] = useState('px');
	const [textFontWeight, setTextFontWeight] = useState('');
	const [textFontStyle, setTextFontStyle] = useState('');
	const [textTextTransform, setTextTextTransform] = useState('');
	const [textTextDecoration, setTextTextDecoration] = useState('');
	const [textLetterSpacing, setTextLetterSpacing] = useState('');
	const [textLetterSpacingUnits, setTextLetterSpacingUnits] = useState('px');
	const [textLineHeight, setTextLineHeight] = useState('');
	const [textLineHeightUnits, setTextLineHeightUnits] = useState('');
	const [deviceType, setDeviceType] = useState('Desktop');
	// const currentDeviceType = useDeviceType();

	// useEffect(() => {
	// 	setDeviceType(currentDeviceType);
	// }, [currentDeviceType]);

     //Initial UseEffect, Set Defualt color if Store is empty
     useEffect(() => {
        //Set Global Colors
        if (globalColors.length === 0) {
            setGlobalColors(defaultsColors);
        }

        //Set Gradient Colors
        if (gradientColors.length === 0) {
            setGradientColors(gradientDefaults);
        }
    }, []);

	const handleDeviceTypeChange = (newDeviceType) => {
		setDeviceType(newDeviceType);
	};

	const addCustomColor = () => {
		const newColor = {
			id: `custom-color-${customColors.length + 1}`,
			title: `Custom Color ${customColors.length + 1}`,
			color: "#000000",
		};
		setCustomColors([...customColors, newColor]);
	};

	const updateCustomColor = (id, newColor) => {
		setCustomColors(
			customColors.map((color) =>
				color.id === id ? { ...color, color: newColor } : color,
			),
		);
	};

	const colorPanelArray = (colors, setColor, defaults = []) => {
		if (typeof colors !== "object") {
			return [];
		}
		const colorArr = [];
		colors.map((colorObj, index) =>
			colorArr.push({
				label: colorObj.name || "Color",
				value: colorObj.color,
				onChange: (newColor) => {
					setColor(index, newColor || defaults[index]?.color || "#000");
				},
			}),
		);
		return colorArr;
    };
    
	//Update Global Colors
    const setGlobalColor = (index, color) => {
        const colors = [...globalColors];
        colors[index].color = color;
        setGlobalColors([...colors]);
        updateColorsViaAjax(colors, 'global');
    };
    //Update Gradient Colors
    const setGradientColor = (index, color) => {
        const colors = [...gradientColors];
        colors[index].color = color;
        setGradientColors([...colors]);
        updateColorsViaAjax(colors, 'gradient');
    };

	const updateColorsViaAjax = (colors, type) => {
		const action = type === 'global' ? 'fb_update_global_colors' : 'fb_update_global_gradients';

		jQuery.ajax({
			url: window.frontisBlocksAdminSidebar.ajaxUrl,
			type: 'POST',
			data: {
				action: action,
				nonce: window.frontisBlocksAdminSidebar.nonce,
				colors: JSON.stringify(colors)
			},
			success: function(response) {
				if (response.success) {
					console.log(`${type} colors updated successfully`);
				} else {
					console.error(`Failed to update ${type} colors:`, response.data);
				}
			},
			error: function(xhr, status, error) {
				console.error(`Ajax error when updating ${type} colors:`, error);
			}
		});
	};

	return (
		<>
			<PluginSidebarMoreMenuItem target="frontis-blocks-sidebar">
				{__("FB Global Settings", "frontis-blocks")}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="frontis-blocks-sidebar"
                title={ __("FB Global Settings", "frontis-blocks") }
                className="fb-global-controls"
			>
                <div className="fb-panel-control">
                    <PanelBody title={__("Color Settings", "frontis-blocks")}>
					<TabPanel
						className="fb-blocks-color-tabs"
						activeClass="active-tab"
						onSelect={(tabName) => setActiveTab(tabName)}
						tabs={[
							{ name: "solid", title: "Solid" },
							{ name: "gradient", title: "Gradient" },
						]}
					>
						{(tab) => (
							<div>
								{tab.name === "solid" && (
                                    <>
                                        <PanelColorSettings
											title={__("Global Colors", "frontis-blocks")}
											className={"fb-color-panel fb-global-color-panel"}
											initialOpen={true}
											disableAlpha={true}
											disableCustomGradients={false}
                                            colorSettings={ colorPanelArray(globalColors, setGlobalColor, defaultsColors)}
                                        />
                                        
									</>
								)}
                                { tab.name === "gradient" && (
                                    <>
                                    								
                                    {/* Gradient Color Pallet */ }
                                    <GradientColorPallet
                                        title={"Gradient Colors"}
                                        colors={gradientColors}
                                        setColor={setGradientColor}
                                        setColors={setGradientColors}
                                        wrapperClass={"fb-gradient-color-panel"}
                                        resetAction={true}
                                        />
                                    </>	
								)}
							</div>
						)}
					</TabPanel>
				</PanelBody>
				<PanelBody
					title={__("Global Typography", "frontis-blocks")}
				>
					<FB_TypographyControl
						fontFamily={textFontFamily}
						onChangeFontFamily={(value) => setTextFontFamily(value)}

						fontSize={textFontSize}
						onChangeFontSize={(value) => setTextFontSize(value)}

						fontSizeUnits={textFontSizeUnits}
						onChangeFontSizeUnit={(value) => setTextFontSizeUnits(value)}

						fontWeight={textFontWeight}
						onChangeFontWeight={(value) => setTextFontWeight(value)}

						fontStyle={textFontStyle}
						onChangeFontStyle={(value) => setTextFontStyle(value)}

						textTransform={textTextTransform}
						onChangeTextTransform={(value) => setTextTextTransform(value)}

						textDecoration={textTextDecoration}
						onChangeTextDecoration={(value) => setTextTextDecoration(value)}

						letterSpacing={textLetterSpacing}
						onChangeLetterSpacing={(value) => setTextLetterSpacing(value)}

						letterSpacingUnits={textLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setTextLetterSpacingUnits(value)}

						lineHeight={textLineHeight}
						onChangeLineHeight={(value) => setTextLineHeight(value)}

						lineHeightUnits={textLineHeightUnits}
						onChangeLineHeightUnit={(value) => setTextLineHeightUnits(value)}

						deviceType={deviceType}
					/>
                    </PanelBody>
                </div>
				
			</PluginSidebar>
		</>
	);
};

const ColorDropdown = ({ title, initialColor, onColorChange, themeColors }) => {
	const [color, setColor] = useState(initialColor);

	const handleColorChange = (newColor) => {
		setColor(newColor);
		onColorChange(newColor);
	};

	return (
		<Dropdown
			className="frontis-blocks-color-dropdown"
			contentClassName="frontis-blocks-color-dropdown__content"
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					onClick={onToggle}
					aria-expanded={isOpen}
					className="frontis-blocks-color-dropdown__toggle"
				>
					<ColorIndicator colorValue={color} />
					<span>{title}</span>
				</Button>
			)}
			renderContent={() => (
				<ColorPalette
					colors={[
						{
							name: "Theme Colors",
							colors: themeColors,
						},
					]}
					value={color}
					onChange={handleColorChange}
				/>
			)}
		/>
	);
};

registerPlugin("frontis-blocks-sidebar", {
	render: FrontisBlocksSidebar,
	icon: <FBIcon />,
});
