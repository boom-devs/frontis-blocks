/**
     * Get background normal styles
     */
	const getBackgroundNormalStyles = (device) => {
		const bgType = megaMenuGlobalBgNormalBackgroundType;
		const bgColor = megaMenuGlobalBgNormalClassicColor;
		const bgGradient = megaMenuGlobalBgNormalGradientColor;
		const customGradient = megaMenuGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = megaMenuGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = megaMenuGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = megaMenuGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = megaMenuGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = megaMenuGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = megaMenuGlobalBgNormalBackgroundImageSize?.[device];  

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = megaMenuGlobalBgHoverBackgroundType;
		const bgColor = megaMenuGlobalBgHoverClassicColor;
		const bgGradient = megaMenuGlobalBgHoverGradientColor;
		const customGradient = megaMenuGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = megaMenuGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = megaMenuGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = megaMenuGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = megaMenuGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = megaMenuGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = megaMenuGlobalBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};


    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
          .map(([key, value]) => `${key}: ${value};`)
          .join(' ');


      const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
      const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
      const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
      const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
      const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
      const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));