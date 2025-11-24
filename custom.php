/** Start Icon Border */
	const handlebreadcrumbIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbIconBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {breadcrumbIconBorderDesktop: {...breadcrumbIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbIconBorderTablet: {...breadcrumbIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbIconBorderMobile: {...breadcrumbIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlebreadcrumbIconBorderCombineBtn = () => {
		setAttributes( {breadcrumbIconBorderLink: !breadcrumbIconBorderLink} );
	}

	const handlebreadcrumbIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbIconBorderUnits: {
				...breadcrumbIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const breadcrumbIconDesktopBorderWidthValue = `${breadcrumbIconBorderDesktop?.top}${breadcrumbIconBorderUnits?.Desktop} ${breadcrumbIconBorderDesktop?.right}${breadcrumbIconBorderUnits?.Desktop} ${breadcrumbIconBorderDesktop?.bottom}${breadcrumbIconBorderUnits?.Desktop} ${breadcrumbIconBorderDesktop?.left}${breadcrumbIconBorderUnits?.Desktop}`;
	const breadcrumbIconTabletBorderWidthValue = `${breadcrumbIconBorderTablet?.top}${breadcrumbIconBorderUnits?.Tablet} ${breadcrumbIconBorderTablet?.right}${breadcrumbIconBorderUnits?.Tablet} ${breadcrumbIconBorderTablet?.bottom}${breadcrumbIconBorderUnits?.Tablet} ${breadcrumbIconBorderTablet?.left}${breadcrumbIconBorderUnits?.Tablet}`;
	const breadcrumbIconMobileBorderWidthValue = `${breadcrumbIconBorderMobile?.top}${breadcrumbIconBorderUnits?.Mobile} ${breadcrumbIconBorderMobile?.right}${breadcrumbIconBorderUnits?.Mobile} ${breadcrumbIconBorderMobile?.bottom}${breadcrumbIconBorderUnits?.Mobile} ${breadcrumbIconBorderMobile?.left}${breadcrumbIconBorderUnits?.Mobile}`;
	/** End Icon Border */

	/** Start Icon Border Radius */
	const handlebreadcrumbIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbIconBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {breadcrumbIconBorderRadiusDesktop: {...breadcrumbIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbIconBorderRadiusTablet: {...breadcrumbIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbIconBorderRadiusMobile: {...breadcrumbIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlebreadcrumbIconBorderRadiusCombineBtn = () => {
		setAttributes( {breadcrumbIconBorderRadiusLink: !breadcrumbIconBorderRadiusLink} );
	}

	const handlebreadcrumbIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbIconBorderRadiusUnits: {
				...breadcrumbIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const breadcrumbIconDesktopBorderRadiusWidthValue = `${breadcrumbIconBorderRadiusDesktop?.top}${breadcrumbIconBorderRadiusUnits?.Desktop} ${breadcrumbIconBorderRadiusDesktop?.right}${breadcrumbIconBorderRadiusUnits?.Desktop} ${breadcrumbIconBorderRadiusDesktop?.bottom}${breadcrumbIconBorderRadiusUnits?.Desktop} ${breadcrumbIconBorderRadiusDesktop?.left}${breadcrumbIconBorderRadiusUnits?.Desktop}`;
	const breadcrumbIconTabletBorderRadiusWidthValue = `${breadcrumbIconBorderRadiusTablet?.top}${breadcrumbIconBorderRadiusUnits?.Tablet} ${breadcrumbIconBorderRadiusTablet?.right}${breadcrumbIconBorderRadiusUnits?.Tablet} ${breadcrumbIconBorderRadiusTablet?.bottom}${breadcrumbIconBorderRadiusUnits?.Tablet} ${breadcrumbIconBorderRadiusTablet?.left}${breadcrumbIconBorderRadiusUnits?.Tablet}`;
	const breadcrumbIconMobileBorderRadiusWidthValue = `${breadcrumbIconBorderRadiusMobile?.top}${breadcrumbIconBorderRadiusUnits?.Mobile} ${breadcrumbIconBorderRadiusMobile?.right}${breadcrumbIconBorderRadiusUnits?.Mobile} ${breadcrumbIconBorderRadiusMobile?.bottom}${breadcrumbIconBorderRadiusUnits?.Mobile} ${breadcrumbIconBorderRadiusMobile?.left}${breadcrumbIconBorderRadiusUnits?.Mobile}`;
	/** End Icon Border Radius */

     /** Start Icon Padding */
    const breadcrumbIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (breadcrumbIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        breadcrumbIconDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        breadcrumbIconTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        breadcrumbIconMobilePadding: {
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
                    setAttributes({ breadcrumbIconDesktopPadding: { ...breadcrumbIconDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ breadcrumbIconTabletPadding: { ...breadcrumbIconTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ breadcrumbIconMobilePadding: { ...breadcrumbIconMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const breadcrumbIconPaddingLinkBtn = () => {
        setAttributes({
            headingPaddingLink: !headingPaddingLink
        });
    };

    const breadcrumbIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            breadcrumbIconPaddingUnits: {
                ...breadcrumbIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Heading */
    const breadcrumbIconDesktopPaddingWidth = `${breadcrumbIconDesktopPadding?.top}${breadcrumbIconPaddingUnits?.Desktop} ${breadcrumbIconDesktopPadding?.right}${breadcrumbIconPaddingUnits?.Desktop} ${breadcrumbIconDesktopPadding?.bottom}${breadcrumbIconPaddingUnits?.Desktop} ${breadcrumbIconDesktopPadding?.left}${breadcrumbIconPaddingUnits?.Desktop}`;
    const breadcrumbIconTabletPaddingWidth = `${breadcrumbIconTabletPadding?.top}${breadcrumbIconPaddingUnits?.Tablet} ${breadcrumbIconTabletPadding?.right}${breadcrumbIconPaddingUnits?.Tablet} ${breadcrumbIconTabletPadding?.bottom}${breadcrumbIconPaddingUnits?.Tablet} ${breadcrumbIconTabletPadding?.left}${breadcrumbIconPaddingUnits?.Tablet}`;
    const breadcrumbIconMobilePaddingWidth = `${breadcrumbIconMobilePadding?.top}${breadcrumbIconPaddingUnits?.Mobile} ${breadcrumbIconMobilePadding?.right}${breadcrumbIconPaddingUnits?.Mobile} ${breadcrumbIconMobilePadding?.bottom}${breadcrumbIconPaddingUnits?.Mobile} ${breadcrumbIconMobilePadding?.left}${breadcrumbIconPaddingUnits?.Mobile}`;
    /** End Heading Padding */