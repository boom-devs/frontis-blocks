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
		Sub_Heading_Tag,
		btnIconPosition,
		buttonIconSwitcher,
		btnIcon
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});


	return (
		<>
			<div {...blockProps}>
			<div
				className={`fb-cta-content-wrapper ${blockID}`}
			>
				<div className={`fb-cta-content-wrapper-inner ${blockID}`}>
					<div className="fb-info-media-wrapper" style={{textAlign: wrapperAlignment}}>
						{mediaSwitcher === 'image' && (
							<img src={attributes.infoMediaUrl}

							/>
						)}
						{mediaSwitcher === 'icon' && (
							<div className="fb-icon-wrapper">
								{renderSVG(icon)}
							</div>
						)}
					</div>
				</div>
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
				{info_Button_Switcher && (

					<div className="fb-info-btn-wrapper" style={{
						flexDirection:
							btnIconPosition === "left" ? "row-reverse" : "row",
					}}>
						<a className="fb-info-button" >
							<RichText.Content
								value={info_Button_Text}
								onChange={(value) => setAttributes({info_Button_Text: value})}
								placeholder={__('Info Button', 'frontis-block')}
								style={{textAlign: buttonAlignment}}
							/>
						</a>
						{buttonIconSwitcher && (
						<div className="fb-btn-icon-wrapper">
							{renderSVG(btnIcon)}
						</div>
					)}
					</div>
				)}
			</div>
			</div>
		</>
	);
}
