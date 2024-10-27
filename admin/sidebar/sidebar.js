import { __ } from "@wordpress/i18n";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import {
	PanelBody,
	Dropdown,
	Button,
	ColorPalette,
	ColorIndicator,
    TabPanel,
    Dashicon
} from "@wordpress/components";
import {
	PanelColorSettings,
} from "@wordpress/block-editor";
import FB_TypographyControl from '@Components/typography-control';
import GradientColorPallet from './components/GradientColorPallet';
import { useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import "./sidebar.scss";


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

export default function FrontisBlocksSidebar() {
	const themeColors = useSelect((select) => {
		return select("core/editor").getEditorSettings().colors;
	}, []);

	const [customColors, setCustomColors] = useState([]);
	const [activeTab, setActiveTab] = useState("solid");
    const [gradientColors, setGradientColors] = useState([]);
	const [globalColors, setGlobalColors] = useState([]);
    

	const [heading, setHeading] = useState({
		fontFamily: '',
		fontSize: '',
		fontSizeUnits: 'px',
		fontWeight: '',
		fontStyle: '',
		textTransform: '',
		textDecoration: '',
		letterSpacing: '',
		letterSpacingUnits: 'px',
		lineHeight: '',
		lineHeightUnits: '',
	});

	const [body, setBody] = useState({
		fontFamily: '',
		fontSize: '',
		fontSizeUnits: 'px',
		fontWeight: '',
		fontStyle: '',
		textTransform: '',
		textDecoration: '',
		letterSpacing: '',
		letterSpacingUnits: 'px',
		lineHeight: '',
		lineHeightUnits: '',
	});

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
    const setCustomColor = (index, color) => {
        const colors = [...customColors];
        colors[index].color = color;
        setCustomColors([...colors]);
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
                                            {customColors && customColors.length > 0 && (
                                                <ColorPalletWrapper
                                                    colorPanelArray={colorPanelArray}
                                                    customColors={customColors}
                                                    setCustomColor={setCustomColor}
                                                    setCustomColors={setCustomColors}
                                                />
                                            )}
                                            <div className="add-custom-color">
                                                <Button
                                                    className="add-custom-color-btn"
                                                    onClick={() => setCustomColors([
                                                        ...customColors,
                                                        {
                                                            color: '#000000',
                                                            name: `Custom Color ${customColors.length + 1}`,
                                                            slug: `custom-color-${customColors.length + 1}`,
                                                            var: `--eb-custom-color-${customColors.length + 1}`
                                                        }
                                                    ])}
                                                >Add Custom Color <Dashicon icon={"plus"} /></Button>
                                            </div>
                                        
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
                        <>
					<h3>{__("Heading Typography", "frontis-blocks")}</h3>
					<FB_TypographyControl
						fontFamily={heading.fontFamily}
						onChangeFontFamily={(value) => setHeading({...heading, fontFamily: value})}
						fontSize={heading.fontSize}
						onChangeFontSize={(value) => setHeading({...heading, fontSize: value})}
						fontSizeUnits={heading.fontSizeUnits}
						onChangeFontSizeUnit={(value) => setHeading({...heading, fontSizeUnits: value})}
						fontWeight={heading.fontWeight}
						onChangeFontWeight={(value) => setHeading({...heading, fontWeight: value})}
						fontStyle={heading.fontStyle}
						onChangeFontStyle={(value) => setHeading({...heading, fontStyle: value})}
						textTransform={heading.textTransform}
						onChangeTextTransform={(value) => setHeading({...heading, textTransform: value})}
						textDecoration={heading.textDecoration}
						onChangeTextDecoration={(value) => setHeading({...heading, textDecoration: value})}
						letterSpacing={heading.letterSpacing}
						onChangeLetterSpacing={(value) => setHeading({...heading, letterSpacing: value})}
						letterSpacingUnits={heading.letterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setHeading({...heading, letterSpacingUnits: value})}
						lineHeight={heading.lineHeight}
						onChangeLineHeight={(value) => setHeading({...heading, lineHeight: value})}
						lineHeightUnits={heading.lineHeightUnits}
						onChangeLineHeightUnit={(value) => setHeading({...heading, lineHeightUnits: value})}
						deviceType={deviceType}
					/>

					<h3>{__("Body Typography", "frontis-blocks")}</h3>
					<FB_TypographyControl
						fontFamily={body.fontFamily}
						onChangeFontFamily={(value) => setBody({...body, fontFamily: value})}
						fontSize={body.fontSize}
						onChangeFontSize={(value) => setBody({...body, fontSize: value})}
						fontSizeUnits={body.fontSizeUnits}
						onChangeFontSizeUnit={(value) => setBody({...body, fontSizeUnits: value})}
						fontWeight={body.fontWeight}
						onChangeFontWeight={(value) => setBody({...body, fontWeight: value})}
						fontStyle={body.fontStyle}
						onChangeFontStyle={(value) => setBody({...body, fontStyle: value})}
						textTransform={body.textTransform}
						onChangeTextTransform={(value) => setBody({...body, textTransform: value})}
						textDecoration={body.textDecoration}
						onChangeTextDecoration={(value) => setBody({...body, textDecoration: value})}
						letterSpacing={body.letterSpacing}
						onChangeLetterSpacing={(value) => setBody({...body, letterSpacing: value})}
						letterSpacingUnits={body.letterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setBody({...body, letterSpacingUnits: value})}
						lineHeight={body.lineHeight}
						onChangeLineHeight={(value) => setBody({...body, lineHeight: value})}
						lineHeightUnits={body.lineHeightUnits}
						onChangeLineHeightUnit={(value) => setBody({...body, lineHeightUnits: value})}
						deviceType={deviceType}
                            />
                        </>
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
