import { useBlockProps, RichText } from '@wordpress/block-editor';
import {Card} from "@wordpress/components";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import {__} from "@wordpress/i18n";
export default function save({ attributes }) {
	const {
		blockID,
		infoMediaUrl,
		wrapperAlignment,
		Heading_Text,
		Heading_Tag,
		Heading_Background_Color,
		Alignment,
		Sub_Heading_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Position,
		Heading_Font_Family,
		Heading_Font_Size,
		Heading_Font_size_units,
		Heading_Font_Weight,
		Heading_Font_Style,
		Heading_Text_Transform,
		Heading_Text_Decoration,
		Heading_Letter_Spacing,
		Heading_Line_Height,
		Heading_Letter_Spacing_units,
		Heading_Line_Height_units,
		Heading_Color_Switcher,
		Heading_Color,
		Heading_Hover_Color,
		Heading_Border,
		Heading_Border_Color,
		Heading_Border_Hover_Color,
		Heading_Border_Color_Switcher,
		Heading_Border_units,
		Heading_Border_radius_units,
		Heading_Desktop_Border_Width,
		Heading_Tab_Border_Width,
		Heading_Mobile_Border_Width,
		activeBorderDevice,
		Heading_Desktop_Border_radius_Width,
		Heading_Tab_Border_radius_Width,
		Heading_Mobile_Border_radius_Width,
		activeBorderRadiusDevice,
		borderRadiusLink,
		borderLink,
		Heading_padding_units,
		Heading_Desktop_padding,
		Heading_Tab_padding,
		Heading_Mobile_padding,
		DeviceType,
		paddingLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Active_Margin_Device,
		Heading_Margin_Link,

		info_Button_Switcher,
		info_Button_Text,
		info_Button_Link,
		descAlignment,
		buttonAlignment,
		infoBoxBg,

		SubHeadingPaddingUnits,
		SubHeadingDesktopPadding,
		SubHeadingTabPadding,
		SubHeadingMobilePadding,
		SubHeadingTextDecoration,
		SubHeadingTextTransform,
		SubHeadingFontStyle,
		SubHeadingFontWeight,
		SubHeadingFontSizeUnits,
		SubHeadingFontSize,
		SubHeadingFontFamily,
		SubHeadingColor,
		SubHeadingColorSwitcher,
		SubHeadingHoverColor,

		descMarginUnits,
		descDesktopMargin,
		descTabMargin,
		descMobileMargin,
		descActiveMarginDevice,
		descMarginLink,

		infoBoxPaddingUnits,
		infoBoxDesktopPadding,
		infoBoxTabPadding,
		infoBoxMobilePadding,
		infoBoxBorder,
		infoBoxBorderColor,
		infoBoxBorderHoverColor,
		infoBoxBorderColorSwitcher,
		infoBoxBorderUnits,
		infoBoxDesktopBorderWidth,
		infoBoxTabBorderWidth,
		infoBoxMobileBorderWidth,

		infoBoxBorderRadiusUnits,
		infoBoxDesktopBorderRadiusWidth,
		infoBoxTabBorderRadiusWidth,
		infoBoxMobileBorderRadiusWidth,

		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonColorSwitcher,
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,

		infoButtonMarginLink,
		infoButtonMarginUnits,
		infoButtonDesktopMargin,
		infoButtonTabMargin,
		infoButtonMobileMargin,
		infoButtonActiveMarginDevice,

		infoButtonPaddingUnits,
		infoButtonDesktopPadding,
		infoButtonTabPadding,
		infoButtonMobilePadding,
		icon,
		width,
		mediaSwitcher,
		contentAlignment,

		infoButtonBorder,
		infoBoxMarginUnits,
		infoBoxDesktopMargin,
		infoBoxTabMargin,
		infoBoxMobileMargin,
		infoBoxMarginLink,
		infoButtonBorderUnits,
		infoButtonDesktopBorderWidth,
		infoButtonTabBorderWidth,
		infoButtonMobileBorderWidth,
		infoBtnBorderradiusUnits,
		infoBtnDesktopBorderradiusWidth,
		infoBtnTabBorderradiusWidth,
		infoBtnMobileBorderradiusWidth,
		infoButtonBorderColorSwitcher,
		infoButtonBorderColor,
		infoButtonHoverBorderColor,
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
		mediaSize,
		mediaSizeUnits,
		mediaSizeUnitsSave,
		mediaSizeDesktop,
		Sub_Heading_Tag
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});
	// Box styling variable
	const boxPadding = `${infoBoxDesktopPadding.top}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.right}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.bottom}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.left}${infoBoxPaddingUnits}`;
	const boxMargin = `${infoBoxDesktopMargin.top}${infoBoxMarginUnits} ${infoBoxDesktopMargin.right}${infoBoxMarginUnits} ${infoBoxDesktopMargin.bottom}${infoBoxMarginUnits} ${infoBoxDesktopMargin.left}${infoBoxMarginUnits}`;
	const boxBorderWidth = `${infoBoxDesktopBorderWidth.top}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.right}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.bottom}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.left}${infoBoxBorderUnits}`;
	const boxBorderRadiusWidth = `${infoBoxDesktopBorderRadiusWidth.top}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.right}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.left}${infoBoxBorderRadiusUnits}`;

	// Title
	const padding = `${Heading_Desktop_padding.top}${Heading_padding_units} ${Heading_Desktop_padding.right}${Heading_padding_units} ${Heading_Desktop_padding.bottom}${Heading_padding_units} ${Heading_Desktop_padding.left}${Heading_padding_units}`;
	const margin = `${Heading_Desktop_Margin.top}${Heading_padding_units} ${Heading_Desktop_Margin.right}${Heading_padding_units} ${Heading_Desktop_Margin.bottom}${Heading_padding_units} ${Heading_Desktop_Margin.left}${Heading_padding_units}`;
	const borderWidth = `${Heading_Desktop_Border_Width.top}${Heading_Border_units} ${Heading_Desktop_Border_Width.right}${Heading_Border_units} ${Heading_Desktop_Border_Width.bottom}${Heading_Border_units} ${Heading_Desktop_Border_Width.left}${Heading_Border_units}`;
	const borderRadiusWidth = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units}`;

	//Description
	const descPadding = `${SubHeadingDesktopPadding.top}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.right}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.left}${SubHeadingPaddingUnits}`;
	const descMargin = `${descDesktopMargin.top}${descMarginUnits} ${descDesktopMargin.right}${descMarginUnits} ${descDesktopMargin.bottom}${descMarginUnits} ${descDesktopMargin.left}${descMarginUnits}`;

	//Button
	const buttonPadding = `${infoButtonDesktopPadding.top}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.right}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.bottom}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.left}${infoButtonPaddingUnits}`;
	const buttonMargin = `${infoButtonDesktopMargin.top}${infoButtonMarginUnits} ${infoButtonDesktopMargin.right}${infoButtonMarginUnits} ${infoButtonDesktopMargin.bottom}${infoButtonMarginUnits} ${infoButtonDesktopMargin.left}${infoButtonMarginUnits}`;
	const buttonBorderRadiusWidth = `${infoBtnDesktopBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.left}${infoBtnBorderradiusUnits}`;
	const buttonBorderWidth = `${infoButtonDesktopBorderWidth.top}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.right}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.left}${infoButtonBorderUnits}`;
	return (

		<>
			<style>
			{`
                    .fb-cta-content-wrapper.${blockID} {
                    padding: ${boxPadding};
                    margin: ${boxMargin};
                    border: ${infoBoxBorder};
                    border-width: ${boxBorderWidth};
                    border-radius: ${boxBorderRadiusWidth};
                    ${infoBoxBorderColor !== undefined ? `border-color: ${infoBoxBorderColor};` : ''}
                    ${boxBgColor !== undefined ? `background-color: ${boxBgColor};` : ''}
                    text-align: ${contentAlignment};
                }

                @media only screen and (max-width: 1024px){
                .fb-cta-content-wrapper.${blockID}{
                padding: ${infoBoxTabPadding.top}${infoBoxPaddingUnits} ${infoBoxTabPadding.right}${infoBoxPaddingUnits} ${infoBoxTabPadding.bottom}${infoBoxPaddingUnits} ${infoBoxTabPadding.left}${infoBoxPaddingUnits} !important;
                margin: ${infoBoxTabMargin.top}${infoBoxMarginUnits} ${infoBoxTabMargin.right}${infoBoxMarginUnits} ${infoBoxTabMargin.bottom}${infoBoxMarginUnits} ${infoBoxTabMargin.left}${infoBoxMarginUnits} !important;
                border-width: ${infoBoxTabBorderWidth.top}${infoBoxBorderUnits} ${infoBoxTabBorderWidth.right}${infoBoxBorderUnits} ${infoBoxTabBorderWidth.bottom}${infoBoxBorderUnits} ${infoBoxTabBorderWidth.left}${infoBoxBorderUnits} !important;
                border-radius: ${infoBoxTabBorderRadiusWidth.top}${infoBoxBorderRadiusUnits} ${infoBoxTabBorderRadiusWidth.right}${infoBoxBorderRadiusUnits} ${infoBoxTabBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits} ${infoBoxTabBorderRadiusWidth.left}${infoBoxBorderRadiusUnits} !important;
                }
                }
                @media only screen and (max-width: 767px){
                .fb-cta-content-wrapper.${blockID}{
                padding: ${infoBoxMobilePadding.top}${infoBoxPaddingUnits} ${infoBoxMobilePadding.right}${infoBoxPaddingUnits} ${infoBoxMobilePadding.bottom}${infoBoxPaddingUnits} ${infoBoxMobilePadding.left}${infoBoxPaddingUnits} !important;
                margin: ${infoBoxMobileMargin.top}${infoBoxMarginUnits} ${infoBoxMobileMargin.right}${infoBoxMarginUnits} ${infoBoxMobileMargin.bottom}${infoBoxMarginUnits} ${infoBoxMobileMargin.left}${infoBoxMarginUnits} !important;
                border-width: ${infoBoxMobileBorderWidth.top}${infoBoxBorderUnits} ${infoBoxMobileBorderWidth.right}${infoBoxBorderUnits} ${infoBoxMobileBorderWidth.bottom}${infoBoxBorderUnits} ${infoBoxMobileBorderWidth.left}${infoBoxBorderUnits} !important;
                border-radius: ${infoBoxMobileBorderRadiusWidth.top}${infoBoxBorderRadiusUnits} ${infoBoxMobileBorderRadiusWidth.right}${infoBoxBorderRadiusUnits} ${infoBoxMobileBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits} ${infoBoxMobileBorderRadiusWidth.left}${infoBoxBorderRadiusUnits} !important;
                }
                }

                .fb-cta-content-wrapper.${blockID} .fb-heading {
                    ${Heading_Color !== undefined ? `color: ${Heading_Color};` : ''}
                    ${Heading_Background_Color !== undefined ? `background-color: ${Heading_Background_Color};` : ''}
                    font-family: ${Heading_Font_Family !== 'default' ? Heading_Font_Family : Heading_Font_Family};
                    font-size: ${Heading_Font_Size !== undefined ? `${Heading_Font_Size}${Heading_Font_size_units}` : ''};
                    font-weight: ${Heading_Font_Weight};
                    font-style: ${Heading_Font_Style};
                    text-transform: ${Heading_Text_Transform};
                    text-decoration: ${Heading_Text_Decoration};
                    ${Heading_Letter_Spacing !== undefined ? `letter-spacing: ${Heading_Letter_Spacing}${Heading_Letter_Spacing_units};` : ''}
                    ${Heading_Line_Height !== undefined ? `line-height: ${Heading_Line_Height}${Heading_Line_Height_units};` : ''}
                    transition: all .3s ease-in-out;
                    padding: ${padding};
                    margin: ${margin};
                    border: ${Heading_Border};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${Heading_Border_Color !== undefined ? `border-color: ${Heading_Border_Color};` : ''}
                }

                .fb-cta-content-wrapper.${blockID} .fb-heading:hover {
                    ${Heading_Hover_Color !== undefined ? `color: ${Heading_Hover_Color};` : ''}
                    ${Heading_Border_Hover_Color !== undefined ? `border-color: ${Heading_Border_Hover_Color};` : ''}
                }

                @media only screen and (max-width: 1024px) {
                    .fb-cta-content-wrapper.${blockID} .fb-heading {
                        padding: ${Heading_Tab_padding.top}${Heading_padding_units} ${Heading_Tab_padding.right}${Heading_padding_units} ${Heading_Tab_padding.bottom}${Heading_padding_units} ${Heading_Tab_padding.left}${Heading_padding_units} !important;
                        margin: ${Heading_Tab_Margin.top}${Heading_Margin_Units} ${Heading_Tab_Margin.right}${Heading_Margin_Units} ${Heading_Tab_Margin.bottom}${Heading_Margin_Units} ${Heading_Tab_Margin.left}${Heading_Margin_Units} !important;
                        border-width: ${Heading_Tab_Border_Width.top}${Heading_Border_units} ${Heading_Tab_Border_Width.right}${Heading_Border_units} ${Heading_Tab_Border_Width.bottom}${Heading_Border_units} ${Heading_Tab_Border_Width.left}${Heading_Border_units} !important;
                        border-radius: ${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-cta-content-wrapper.${blockID} .fb-heading {
                        padding: ${Heading_Mobile_padding.top}${Heading_padding_units} ${Heading_Mobile_padding.right}${Heading_padding_units} ${Heading_Mobile_padding.bottom}${Heading_padding_units} ${Heading_Mobile_padding.left}${Heading_padding_units} !important;
                        margin: ${Heading_Mobile_Margin.top}${Heading_Margin_Units} ${Heading_Mobile_Margin.right}${Heading_Margin_Units} ${Heading_Mobile_Margin.bottom}${Heading_Margin_Units} ${Heading_Mobile_Margin.left}${Heading_Margin_Units} !important;
                        border-width: ${Heading_Mobile_Border_Width.top}${Heading_Border_units} ${Heading_Mobile_Border_Width.right}${Heading_Border_units} ${Heading_Mobile_Border_Width.bottom}${Heading_Border_units} ${Heading_Mobile_Border_Width.left}${Heading_Border_units} !important;
                        border-radius: ${Heading_Mobile_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.left}${Heading_Border_radius_units} !important;
                    }
                }

                .fb-cta-content-wrapper.${blockID} .fb-description {
                	${SubHeadingColor !== undefined ? `color: ${SubHeadingColor};` : ''}
                	font-family: ${SubHeadingFontFamily !== 'default' ? SubHeadingFontFamily : SubHeadingFontFamily};
                    font-size: ${SubHeadingFontSize !== undefined ? `${SubHeadingFontSize}${SubHeadingFontSizeUnits}` : ''};
                    font-weight: ${SubHeadingFontWeight};
                    font-style: ${SubHeadingFontStyle};
                    text-transform: ${SubHeadingTextTransform};
                    text-decoration: ${SubHeadingTextDecoration};
					padding: ${descPadding};
                    margin: ${descMargin};
                }
                .fb-cta-content-wrapper.${blockID} .fb-description:hover {
                    ${SubHeadingHoverColor !== undefined ? `color: ${SubHeadingHoverColor};` : ''}
                }

				@media only screen and (max-width: 1024px){
				.fb-cta-content-wrapper.${blockID} .fb-description {
                        padding: ${SubHeadingTabPadding.top}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.right}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.left}${SubHeadingPaddingUnits} !important;
                        margin: ${descTabMargin.top}${descMarginUnits} ${descTabMargin.right}${descMarginUnits} ${descTabMargin.bottom}${descMarginUnits} ${descTabMargin.left}${descMarginUnits} !important;

                    }
				}
				@media only screen and (max-width: 757px){
				.fb-cta-content-wrapper.${blockID} .fb-description {
                        padding: ${SubHeadingMobilePadding.top}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.right}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.left}${SubHeadingPaddingUnits} !important;
                        margin: ${descMobileMargin.top}${descMarginUnits} ${descMobileMargin.right}${descMarginUnits} ${descMobileMargin.bottom}${descMarginUnits} ${descMobileMargin.left}${descMarginUnits} !important;
                    }
				}

                .fb-cta-content-wrapper.${blockID} .fb-info-btn-wrapper .fb-info-button {
                	${buttonTextColor !== undefined ? `color: ${buttonTextColor};` : ''}
                	${buttonBgColor !== undefined ? `background-color: ${buttonBgColor};` : ''}
                	font-family: ${buttonFontFamily !== 'default' ? buttonFontFamily : buttonFontFamily};
                    font-size: ${buttonFontSize !== undefined ? `${buttonFontSize}${buttonFontSizeUnits}` : ''};
                    font-weight: ${buttonFontWeight};
                    font-style: ${buttonFontStyle};
                    text-transform: ${buttonTextTransform};
                    text-decoration: ${buttonTextDecoration};
					padding: ${buttonPadding};
                    margin: ${buttonMargin};
                    border: ${infoButtonBorder};
                    border-width: ${buttonBorderWidth};
                    border-radius: ${buttonBorderRadiusWidth};
                }

                .fb-cta-content-wrapper.${blockID} .fb-info-btn-wrapper .fb-info-button:hover {
                	${buttonTextHoverColor !== undefined ? `color: ${buttonTextHoverColor};` : ''}
                	${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : ''}
                }

				@media only screen and (max-width: 1024px) {
                    .fb-cta-content-wrapper.${blockID} .fb-info-btn-wrapper .fb-info-button {
                        padding: ${infoButtonTabPadding.top}${infoButtonPaddingUnits} ${infoButtonTabPadding.right}${infoButtonPaddingUnits} ${infoButtonTabPadding.bottom}${infoButtonPaddingUnits} ${infoButtonTabPadding.left}${infoButtonPaddingUnits} !important;
                        margin: ${infoButtonTabMargin.top}${infoButtonMarginUnits} ${infoButtonTabMargin.right}${infoButtonMarginUnits} ${infoButtonTabMargin.bottom}${infoButtonMarginUnits} ${infoButtonTabMargin.left}${infoButtonMarginUnits} !important;
                        border-width: ${infoButtonTabBorderWidth.top}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.right}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.left}${infoButtonBorderUnits} !important;
                        border-radius: ${infoBtnTabBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.left}${infoBtnBorderradiusUnits} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-cta-content-wrapper.${blockID} .fb-heading {
                        padding: ${infoButtonMobilePadding.top}${infoButtonPaddingUnits} ${infoButtonMobilePadding.right}${infoButtonPaddingUnits} ${infoButtonMobilePadding.bottom}${infoButtonPaddingUnits} ${infoButtonMobilePadding.left}${infoButtonPaddingUnits} !important;
                        margin: ${infoButtonMobileMargin.top}${infoButtonMarginUnits} ${infoButtonMobileMargin.right}${infoButtonMarginUnits} ${infoButtonMobileMargin.bottom}${infoButtonMarginUnits} ${infoButtonMobileMargin.left}${infoButtonMarginUnits} !important;
                        border-width: ${infoButtonMobileBorderWidth.top}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.right}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.left}${infoButtonBorderUnits} !important;
                        border-radius: ${infoBtnTabBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.left}${infoBtnBorderradiusUnits} !important;
                    }
                }
                .fb-cta-content-wrapper.${blockID} .fb-icon-wrapper svg,
                .fb-cta-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
                }
                @media only screen and (max-width: 1024px) {
                .fb-cta-content-wrapper.${blockID} .fb-iinfoButtonMobileMargincon-wrapper svg,
                .fb-cta-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-cta-content-wrapper.${blockID} .fb-icon-wrapper svg,
                .fb-cta-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                }
                }
                `}
			</style>

			<div {...blockProps}>
			<div
				className={`fb-cta-content-wrapper ${blockID}`}
			>
				<div className={`fb-cta-content-wrapper-inner ${blockID}`}>
					<div className="fb-cta-desc-wrapper">
						<RichText.Content
							tagName={Heading_Tag}
							value={Heading_Text}
							onChange={(value) => setAttributes({text: value})}
							placeholder={__('Info Heading', 'frontis-block')}
							className="fb-heading"
							style={{textAlign: Alignment}}
						/>
						{Sub_Heading_Switcher && (
							<RichText.Content
								tagName={Sub_Heading_Tag}
								value={Sub_Heading_Text}
								onChange={(value) => setAttributes({Sub_Heading_Text: value})}
								placeholder={__('Info description', 'frontis-block')}
								className="fb-description"
								style={{textAlign: descAlignment}}
							/>
						)}
					</div>

				{info_Button_Switcher && (
					<div className="fb-info-btn-wrapper">
						<a className="fb-info-button" >
							<RichText.Content
								value={info_Button_Text}
								onChange={(value) => setAttributes({info_Button_Text: value})}
								placeholder={__('Info Button', 'frontis-block')}
								style={{textAlign: buttonAlignment}}
							/>
						</a>

					</div>

				)}
				</div>
			</div>
			</div>
		</>
	);
}
