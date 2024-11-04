import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		deviceType,
		ButtonAlignment,
		ButtonText,
		ButtonUrl,
		DeviceType,
		ButtonTargetUrl,
		ButtonWidth,
		ButtonFontFamily,
		ButtonFontSize,
		ButtonFontSizeUnits,
		ButtonFontWeight,
		ButtonFontStyle,
		ButtonTextTransform,
		ButtonTextDecoration,
		ButtonLetterSpacing,
		ButtonLetterSpacingUnits,
		ButtonLineHeight,
		ButtonLineHeightUnits,
		ButtonColorSwitcher,
		ButtonColor,
		ButtonHoverColor,
		ButtonBgColorSwitcher,
		ButtonBgColor,
		ButtonBgHoverColor,
		ButtonBorder,
		ButtonBorderColor,
		ButtonBorderHoverColor,
		ButtonBorderColorSwitcher,
		ButtonBorderUnits,
		ButtonDesktopBorderWidth,
		ButtonTabBorderWidth,
		ButtonMobileBorderWidth,
		ButtonBorderLink,
		ButtonBorderRadiusUnits,
		ButtonDesktopBorderRadiusWidth,
		ButtonTabBorderRadiusWidth,
		ButtonMobileBorderRadiusWidth,
		ButtonBorderRadiusLink,
		ButtonPaddingUnits,
		ButtonDesktopPadding,
		ButtonTabPadding,
		ButtonMobilePadding,
		ButtonPaddingLink,
		ButtonIconAlign,
		ButtonIcon,
		ButtonZIndex,
		ButtonTwoText,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		ButtonTwoBorder,
		ButtonTwoBorderColor,
		ButtonTwoBorderHoverColor,
		ButtonTwoBorderColorSwitcher,
		ButtonTwoBorderUnits,
		ButtonTwoDesktopBorderWidth,
		ButtonTwoTabBorderWidth,
		ButtonTwoMobileBorderWidth,
		ButtonTwoBorderLink,
		ButtonTwoBorderRadiusUnits,
		ButtonTwoDesktopBorderRadiusWidth,
		ButtonTwoTabBorderRadiusWidth,
		ButtonTwoMobileBorderRadiusWidth,
		ButtonTwoBorderRadiusLink,
		ButtonTwoMarginUnits,
		ButtonTwoIconAlign,
		ButtonTwoIcon,
		ButtonMarginUnits,
		ButtonDesktopMargin,
		ButtonTabMargin,
		ButtonMobileMargin,
		ButtonMarginLink,

		connectorSwitcher,
		connectorText,
		connectorFontFamily,
		connectorFontSize,
		connectorFontSizeUnits,
		connectorFontWeight,
		connectorFontStyle,
		connectorTextTransform,
		connectorTextDecoration,
		connectorLetterSpacing,
		connectorLetterSpacingUnits,
		connectorLineHeight,
		connectorLineHeightUnits,
		connectorColorSwitcher,
		connectorColor,
		connectorHoverColor,
		connectorBgColorSwitcher,
		connectorBgColor,
		connectorBgHoverColor,
		connectorSize,
		connectorSizeUnits
	} = attributes;

	const blockProps = useBlockProps.save();

	const borderRadiusWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits}`;
	const borderWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits}`;

	const buttonBorderRadiusDesktopWidth = `${ButtonTwoDesktopBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoDesktopBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoDesktopBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoDesktopBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[DeviceType]}`;
	const buttonBorderRadiusTabletWidth = `${ButtonTwoTabBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoTabBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoTabBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoTabBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[DeviceType]}`;
	const buttonBorderRadiusMobileWidth = `${ButtonTwoMobileBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoMobileBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoMobileBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoBorderRadiusUnits[DeviceType]} ${ButtonTwoMobileBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[DeviceType]}`;

	const buttonBorderDesktopWidth = `${ButtonTwoDesktopBorderWidth.top}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoDesktopBorderWidth.right}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoDesktopBorderWidth.bottom}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoDesktopBorderWidth.left}${ButtonTwoBorderUnits[DeviceType]}`;
	const buttonBorderTabletWidth = `${ButtonTwoTabBorderWidth.top}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoTabBorderWidth.right}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoTabBorderWidth.bottom}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoTabBorderWidth.left}${ButtonTwoBorderUnits[DeviceType]}`;
	const buttonBorderMobileWidth = `${ButtonTwoMobileBorderWidth.top}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoMobileBorderWidth.right}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoMobileBorderWidth.bottom}${ButtonTwoBorderUnits[DeviceType]} ${ButtonTwoMobileBorderWidth.left}${ButtonTwoBorderUnits[DeviceType]}`;

	const buttonDesktopMargin = `${ButtonDesktopMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.left}${ButtonTwoMarginUnits[deviceType]}`;
	const buttonTabMargin = `${ButtonTabMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.left}${ButtonTwoMarginUnits[deviceType]}`;
	const buttonMobileMargin = `${ButtonMobileMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.left}${ButtonTwoMarginUnits[deviceType]}`;

	const buttonDesktopPadding = `${ButtonDesktopPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonDesktopPadding.left}${ButtonPaddingUnits[DeviceType]}`;
	const buttonTabPadding = `${ButtonTabPadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonTabPadding.left}${ButtonPaddingUnits[DeviceType]}`;
	const buttonMobilePadding = `${ButtonMobilePadding.top}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.right}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits[DeviceType]} ${ButtonMobilePadding.left}${ButtonPaddingUnits[DeviceType]}`;



	return (
		<>
			<style>
				{`

                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button .fb-advanced-button-text {
                    ${ButtonColor !== undefined ? `color: ${ButtonColor};` : ''}
                }
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button:hover .fb-advanced-button-text {
                    ${ButtonHoverColor !== undefined ? `color: ${ButtonHoverColor};` : ''}
                }

                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button:hover {
                    ${ButtonBgHoverColor !== undefined ? `background-color: ${ButtonBgHoverColor};` : ''}
                }

				@media only screen and (max-width: 1024px) {
                    .fb-advanced-button-wrapper.${blockID} .fb-advanced-button {
                        padding: ${buttonTabPadding};
                        margin: ${buttonTabMargin};
                        border-width: ${ButtonTabBorderWidth.top}${ButtonBorderUnits} ${ButtonTabBorderWidth.right}${ButtonBorderUnits} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits} ${ButtonTabBorderWidth.left}${ButtonBorderUnits} !important;
                        border-radius: ${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-advanced-button-wrapper.${blockID} .fb-advanced-button {
                        padding: ${buttonMobilePadding};
                        margin: ${buttonMobileMargin};
                        border-width: ${ButtonMobileBorderWidth.top}${ButtonBorderUnits} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits} !important;
                        border-radius: ${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits} !important;
                    }
                }

                .fb-advanced-button-wrapper.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
                    ${connectorBgColor !== undefined ? `background-color: ${connectorBgColor};` : ''}
                    font-family: ${connectorFontFamily !== 'default' ? connectorFontFamily : connectorFontFamily};
                    font-size: ${connectorFontSize !== undefined ? `${connectorFontSize}${connectorFontSizeUnits}` : ''};
                    font-weight: ${connectorFontWeight};
                    font-style: ${connectorFontStyle};
                    text-transform: ${connectorTextTransform};
                    text-decoration: ${connectorTextDecoration};
                    ${ButtonLetterSpacing !== undefined ? `letter-spacing: ${connectorLetterSpacing}${connectorLetterSpacingUnits};` : ''}
                    ${connectorLineHeight !== undefined ? `line-height: ${connectorLineHeight}${connectorLineHeightUnits};` : ''}
                    width: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};
                    height: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};
                }
                @media only screen and (max-width: 1024px) {
                .fb-advanced-button-wrapper.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
                height: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-advanced-button-wrapper.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
                height: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
                }
                }

                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button.fb-dual-button-two {
                    ${ButtonBgColor !== undefined ? `background-color: ${ButtonBgColor};` : ''}
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderDesktopWidth};
                    border-radius: ${buttonBorderRadiusDesktopWidth};
                    ${ButtonTwoBorderColor !== undefined ? `border-color: ${ButtonTwoBorderColor};` : ''}
                }
                @media only screen and  (max-width:1024px){
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button.fb-dual-button-two {
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderTabletWidth};
                    border-radius: ${buttonBorderRadiusTabletWidth};
                }
                }
                @media only screen and  (max-width:727px){
                .fb-advanced-button-wrapper.${blockID} .fb-advanced-button.fb-dual-button-two {
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderMobileWidth};
                    border-radius: ${buttonBorderRadiusMobileWidth};
                }
                }
            `}
			</style>
			<div {...blockProps} id={blockID}>
				<div className={`fb-advanced-button-wrapper ${blockID}`}>
					<div className="fb-dual-button-wrapper" style={{justifyContent: ButtonAlignment}}>
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button"
								href={ButtonUrl}
								target={ButtonTargetUrl ? '_blank' : undefined}
								rel={ButtonTargetUrl ? 'noopener noreferrer' : undefined}
							>
								<RichText.Content
									tagName="span"
									value={ButtonText}
									className="fb-advanced-button-text"
								/>
								<div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
							</a>
						</div>
						{connectorSwitcher && (
							<div className="fb-dual-button-connector">
								<RichText.Content
									tagName="span"
									value={connectorText}
									className="fb-dual-button-connector-text"
								/>
							</div>
						)}
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button fb-dual-button-two"
								href={ButtonTwoUrl}
								target={ButtonTwoTargetUrl ? '_blank' : undefined}
								rel={ButtonTwoTargetUrl ? 'noopener noreferrer' : undefined}
							>
								<RichText.Content
									tagName="span"
									value={ButtonTwoText}
									className="fb-advanced-button-text"
								/>
								<div className="fb-advanced-button-icon">{renderSVG(ButtonTwoIcon)}</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
