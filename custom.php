/** Start border width */
	const handleoffCanvasCloseIconBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							...offCanvasCloseIconDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							...offCanvasCloseIconTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
							...offCanvasCloseIconMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderLink: !offCanvasCloseIconBorderLink });
	};

	const handleoffCanvasCloseIconBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderUnits: {
				...offCanvasCloseIconBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvasCloseIconDesktopBorderWidthStr = `${offCanvasCloseIconDesktopBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderWidthStr = `${offCanvasCloseIconTabBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderWidthStr = `${offCanvasCloseIconMobileBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvasCloseIconBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							...offCanvasCloseIconDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							...offCanvasCloseIconTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
							...offCanvasCloseIconMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderRadiusLink: !offCanvasCloseIconBorderRadiusLink });
	};

	const handleoffCanvasCloseIconBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderRadiusUnits: {
				...offCanvasCloseIconBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvasCloseIconDesktopBorderRadiusStr = `${offCanvasCloseIconDesktopBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderRadiusStr = `${offCanvasCloseIconTabBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderRadiusStr = `${offCanvasCloseIconMobileBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Start offCanvasCloseIcon Padding */
    const offCanvasCloseIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasCloseIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasCloseIconDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasCloseIconTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasCloseIconMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ offCanvasCloseIconDesktopPadding: { ...offCanvasCloseIconDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasCloseIconTabletPadding: { ...offCanvasCloseIconTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasCloseIconMobilePadding: { ...offCanvasCloseIconMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasCloseIconPaddingLinkBtn = () => {
        setAttributes({
            offCanvasCloseIconPaddingLink: !offCanvasCloseIconPaddingLink
        });
    };

    const offCanvasCloseIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            offCanvasCloseIconPaddingUnits: {
                ...offCanvasCloseIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for offCanvasCloseIcon */
    const offCanvasCloseIconDesktopPaddingWidth = `${offCanvasCloseIconDesktopPadding?.top}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.right}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.left}${offCanvasCloseIconPaddingUnits?.Desktop}`;
    const offCanvasCloseIconTabletPaddingWidth = `${offCanvasCloseIconTabletPadding?.top}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.right}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.left}${offCanvasCloseIconPaddingUnits?.Tablet}`;
    const offCanvasCloseIconMobilePaddingWidth = `${offCanvasCloseIconMobilePadding?.top}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.right}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.bottom}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.left}${offCanvasCloseIconPaddingUnits?.Mobile}`;
    /** End offCanvasCloseIcon Padding */

    /** Start offCanvasCloseIcon Margin */
    const offCanvasCloseIconMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (offCanvasCloseIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        offCanvasCloseIconDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        offCanvasCloseIconTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        offCanvasCloseIconMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ offCanvasCloseIconDesktopMargin: { ...offCanvasCloseIconDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ offCanvasCloseIconTabletMargin: { ...offCanvasCloseIconTabletMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ offCanvasCloseIconMobileMargin: { ...offCanvasCloseIconMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const offCanvasCloseIconMarginLinkBtn = () => {
        setAttributes({
            offCanvasCloseIconMarginLink: !offCanvasCloseIconMarginLink
        });
    };

    const offCanvasCloseIconMarginUnitsHandler = (unit) => {
        setAttributes({
            offCanvasCloseIconMarginUnits: {
                ...offCanvasCloseIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for offCanvasCloseIcon */
    const offCanvasCloseIconDesktopMarginWidth = `${offCanvasCloseIconDesktopMargin?.top}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.right}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.bottom}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.left}${offCanvasCloseIconMarginUnits?.Desktop}`;
    const offCanvasCloseIconTabletMarginWidth = `${offCanvasCloseIconTabletMargin?.top}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.right}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.bottom}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.left}${offCanvasCloseIconMarginUnits?.Tablet}`;
    const offCanvasCloseIconMobileMarginWidth = `${offCanvasCloseIconMobileMargin?.top}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.right}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.bottom}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.left}${offCanvasCloseIconMarginUnits?.Mobile}`;
    /** End offCanvasCloseIcon Margin */