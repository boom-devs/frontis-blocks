${flipBoxFrontHoverBackgroundType === "gradient" ? `
				background: ${flipBoxFrontHoverCustomGradientSwitcher && flipBoxFrontHoverCustomGradientInputValue ? flipBoxFrontHoverCustomGradientInputValue : flipBoxFrontHoverGradientColor};
				`
				: flipBoxFrontHoverBackgroundImageUrl && flipBoxFrontHoverBackgroundImageUrl !== "null" ? `
				${flipBoxFrontHoverBackgroundImageUrl ? `background-image: url(${flipBoxFrontHoverBackgroundImageUrl});` : ""}
				${flipBoxFrontHoverBackgroundImagePosition ? `background-position: ${flipBoxFrontHoverBackgroundImagePosition};` : ""}
				${flipBoxFrontHoverBackgroundImageAttachment ? `background-attachment: ${flipBoxFrontHoverBackgroundImageAttachment};` : ""}
				${flipBoxFrontHoverBackgroundImageRepeat ? `background-repeat: ${flipBoxFrontHoverBackgroundImageRepeat};` : ""}
				${flipBoxFrontHoverBackgroundImageSize ? `background-size: ${flipBoxFrontHoverBackgroundImageSize};` : ""}`
					: flipBoxFrontHoverClassicColor ? `background: ${flipBoxFrontHoverClassicColor}; ` : ""}
				${flipBoxFrontHoverBorderColor ? `border-color: ${flipBoxFrontHoverBorderColor};` : ''}