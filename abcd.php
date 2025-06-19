position: relative;
				${flipBoxBackWidth.Desktop ? `width: ${flipBoxBackWidth.Desktop}${flipBoxBackWidthUnits.Desktop};` : ''}
				${flipBoxBackHeight.Desktop ? `min-height: ${flipBoxBackHeight.Desktop}${flipBoxBackHeightUnits.Desktop};` : ''}
				${flipBoxBackBackgroundType === "gradient" ? `
				background: ${flipBoxBackCustomGradientSwitcher && flipBoxBackCustomGradientInputValue ? flipBoxBackCustomGradientInputValue : flipBoxBackGradientColor};
				`
				: flipBoxBackBackgroundImageUrl && flipBoxBackBackgroundImageUrl !== "null" ? `
				${flipBoxBackBackgroundImageUrl ? `background-image: url(${flipBoxBackBackgroundImageUrl});` : ""}
				${flipBoxBackBackgroundImagePosition ? `background-position: ${flipBoxBackBackgroundImagePosition};` : ""}
				${flipBoxBackBackgroundImageAttachment ? `background-attachment: ${flipBoxBackBackgroundImageAttachment};` : ""}
				${flipBoxBackBackgroundImageRepeat ? `background-repeat: ${flipBoxBackBackgroundImageRepeat};` : ""}
				${flipBoxBackBackgroundImageSize ? `background-size: ${flipBoxBackBackgroundImageSize};` : ""}`
					: flipBoxBackClassicColor ? `background: ${flipBoxBackClassicColor}; ` : ""}
				background-repeat: none;
				background-size: cover;
				${flipBoxBackClassicColor ? `justify-content: center; ` : ''}
				transition: all .3s ease-in-out; 