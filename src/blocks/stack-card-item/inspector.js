import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { BORDER_STYLES } from '@Constants/fbConstants';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_Spacing from '@Components/spacing';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import { useDeviceType } from '@Config/displayType';

export default function StackCardItemInspector({ attributes, setAttributes }) {
	const {
		stackCardItemBgColorSwitcher,
		stackCardItemBgNormalBackgroundType,
		stackCardItemBgNormalClassicColor,
		stackCardItemBgNormalGradientColor,
		stackCardItemBgNormalCustomGradientSwitcher,
		stackCardItemBgNormalCustomGradientInputValue,
		stackCardItemBgHoverBackgroundType,
		stackCardItemBgHoverClassicColor,
		stackCardItemBgHoverGradientColor,
		stackCardItemBgHoverCustomGradientSwitcher,
		stackCardItemBgHoverCustomGradientInputValue,
		stackCardItemPaddingUnits,
		stackCardItemPaddingDesktop,
		stackCardItemPaddingTablet,
		stackCardItemPaddingMobile,
		stackCardItemPaddingLink,
		stackCardItemBorder,
		stackCardItemBorderColor,
		stackCardItemBorderHoverColor,
		stackCardItemBorderColorSwitcher,
		stackCardItemBorderUnits,
		stackCardItemBorderDesktop,
		stackCardItemBorderTablet,
		stackCardItemBorderMobile,
		stackCardItemBorderLink,
		stackCardItemBorderRadiusUnits,
		stackCardItemBorderRadiusDesktop,
		stackCardItemBorderRadiusTablet,
		stackCardItemBorderRadiusMobile,
		stackCardItemBorderRadiusLink,
	} = attributes;

	const deviceType = useDeviceType();

	const handleStackCardItemPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (stackCardItemPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						stackCardItemPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Tablet':
					setAttributes({
						stackCardItemPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Mobile':
					setAttributes({
						stackCardItemPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ stackCardItemPaddingDesktop: { ...stackCardItemPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ stackCardItemPaddingTablet: { ...stackCardItemPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ stackCardItemPaddingMobile: { ...stackCardItemPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const handleStackCardItemPaddingCombineBtn = () => {
		setAttributes({ stackCardItemPaddingLink: !stackCardItemPaddingLink });
	};

	const handleStackCardItemPaddingUnitsHandler = (unit) => {
		setAttributes({
			stackCardItemPaddingUnits: {
				...stackCardItemPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleStackCardItemBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (stackCardItemBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						stackCardItemBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Tablet':
					setAttributes({
						stackCardItemBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Mobile':
					setAttributes({
						stackCardItemBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ stackCardItemBorderDesktop: { ...stackCardItemBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ stackCardItemBorderTablet: { ...stackCardItemBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ stackCardItemBorderMobile: { ...stackCardItemBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const handleStackCardItemBorderCombineBtn = () => {
		setAttributes({ stackCardItemBorderLink: !stackCardItemBorderLink });
	};

	const handleStackCardItemBorderUnitsHandler = (unit) => {
		setAttributes({
			stackCardItemBorderUnits: {
				...stackCardItemBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleStackCardItemBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (stackCardItemBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						stackCardItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Tablet':
					setAttributes({
						stackCardItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case 'Mobile':
					setAttributes({
						stackCardItemBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						stackCardItemBorderRadiusDesktop: { ...stackCardItemBorderRadiusDesktop, [position]: value },
					});
					break;
				case 'Tablet':
					setAttributes({
						stackCardItemBorderRadiusTablet: { ...stackCardItemBorderRadiusTablet, [position]: value },
					});
					break;
				case 'Mobile':
					setAttributes({
						stackCardItemBorderRadiusMobile: { ...stackCardItemBorderRadiusMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleStackCardItemBorderRadiusCombineBtn = () => {
		setAttributes({ stackCardItemBorderRadiusLink: !stackCardItemBorderRadiusLink });
	};

	const handleStackCardItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			stackCardItemBorderRadiusUnits: {
				...stackCardItemBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	return (
		<PanelBody title={__('Stack Card Item', 'frontis-blocks')} initialOpen={true}>
			<FB_BackgroundColorControl
				label={__('Background Color', 'frontis-blocks')}
				bgColorSwitcher={stackCardItemBgColorSwitcher}
				setBgColorSwitcher={(value) => setAttributes({ stackCardItemBgColorSwitcher: value })}
				normalBackgroundType={stackCardItemBgNormalBackgroundType}
				setNormalBackgroundType={(value) => setAttributes({ stackCardItemBgNormalBackgroundType: value })}
				normalClassicColor={stackCardItemBgNormalClassicColor}
				setNormalClassicColor={(value) => setAttributes({ stackCardItemBgNormalClassicColor: value === undefined ? '' : value })}
				normalGradientColor={stackCardItemBgNormalGradientColor}
				setNormalGradientColor={(value) => setAttributes({ stackCardItemBgNormalGradientColor: value === undefined ? '' : value })}
				normalCustomGradientSwitcher={stackCardItemBgNormalCustomGradientSwitcher}
				setNormalCustomGradientSwitcher={(value) => setAttributes({ stackCardItemBgNormalCustomGradientSwitcher: value })}
				normalCustomGradientInputValue={stackCardItemBgNormalCustomGradientInputValue}
				setNormalCustomGradientInputValue={(value) => setAttributes({ stackCardItemBgNormalCustomGradientInputValue: value })}
				hoverBackgroundType={stackCardItemBgHoverBackgroundType}
				setHoverBackgroundType={(value) => setAttributes({ stackCardItemBgHoverBackgroundType: value })}
				hoverClassicColor={stackCardItemBgHoverClassicColor}
				setHoverClassicColor={(value) => setAttributes({ stackCardItemBgHoverClassicColor: value === undefined ? '' : value })}
				hoverGradientColor={stackCardItemBgHoverGradientColor}
				setHoverGradientColor={(value) => setAttributes({ stackCardItemBgHoverGradientColor: value === undefined ? '' : value })}
				hoverCustomGradientSwitcher={stackCardItemBgHoverCustomGradientSwitcher}
				setHoverCustomGradientSwitcher={(value) => setAttributes({ stackCardItemBgHoverCustomGradientSwitcher: value })}
				hoverCustomGradientInputValue={stackCardItemBgHoverCustomGradientInputValue}
				setHoverCustomGradientInputValue={(value) => setAttributes({ stackCardItemBgHoverCustomGradientInputValue: value })}
				isBackgroundImage={false}
			/>

			<FB_Spacing
				label={__('Padding', 'frontis-blocks')}
				deviceType={deviceType}
				spacingUnitsHandler={handleStackCardItemPaddingUnitsHandler}
				spacingUnits={stackCardItemPaddingUnits}
				spacingDesktop={stackCardItemPaddingDesktop}
				spacingTablet={stackCardItemPaddingTablet}
				spacingMobile={stackCardItemPaddingMobile}
				handleSpacingUnitHandler={handleStackCardItemPaddingUnitChange}
				spacingCombineBtn={stackCardItemPaddingLink}
				spacingCombineBtnHandler={handleStackCardItemPaddingCombineBtn}
				setAttributes={setAttributes}
			/>

			<SelectControl
				label={__('Border Style', 'frontis-blocks')}
				value={stackCardItemBorder}
				options={BORDER_STYLES}
				onChange={(value) => setAttributes({ stackCardItemBorder: value })}
			/>

			<FB_SwitcherControl
				label={__('Border Color', 'frontis-blocks')}
				globalSwitcher={stackCardItemBorderColorSwitcher}
				setGlobalSwitcher={(value) => setAttributes({ stackCardItemBorderColorSwitcher: value })}
			/>

			{stackCardItemBorderColorSwitcher === 'normal' && (
				<FB_ColorControl
					label={__('Normal Color', 'frontis-blocks')}
					globalColor={stackCardItemBorderColor}
					setGlobalColor={(value) => setAttributes({ stackCardItemBorderColor: value === undefined ? '' : value })}
				/>
			)}

			{stackCardItemBorderColorSwitcher === 'hover' && (
				<FB_ColorControl
					label={__('Hover Color', 'frontis-blocks')}
					globalColor={stackCardItemBorderHoverColor}
					setGlobalColor={(value) => setAttributes({ stackCardItemBorderHoverColor: value === undefined ? '' : value })}
				/>
			)}

			<FB_Spacing
				label={__('Border', 'frontis-blocks')}
				deviceType={deviceType}
				spacingUnitsHandler={handleStackCardItemBorderUnitsHandler}
				spacingUnits={stackCardItemBorderUnits}
				spacingDesktop={stackCardItemBorderDesktop}
				spacingTablet={stackCardItemBorderTablet}
				spacingMobile={stackCardItemBorderMobile}
				handleSpacingUnitHandler={handleStackCardItemBorderUnitChange}
				spacingCombineBtn={stackCardItemBorderLink}
				spacingCombineBtnHandler={handleStackCardItemBorderCombineBtn}
				setAttributes={setAttributes}
			/>

			<FB_Spacing
				label={__('Border Radius', 'frontis-blocks')}
				deviceType={deviceType}
				spacingUnitsHandler={handleStackCardItemBorderRadiusUnitsHandler}
				spacingUnits={stackCardItemBorderRadiusUnits}
				spacingDesktop={stackCardItemBorderRadiusDesktop}
				spacingTablet={stackCardItemBorderRadiusTablet}
				spacingMobile={stackCardItemBorderRadiusMobile}
				handleSpacingUnitHandler={handleStackCardItemBorderRadiusUnitChange}
				spacingCombineBtn={stackCardItemBorderRadiusLink}
				spacingCombineBtnHandler={handleStackCardItemBorderRadiusCombineBtn}
				setAttributes={setAttributes}
			/>
		</PanelBody>
	);
}
