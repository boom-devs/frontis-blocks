export function getContainerStyle(attributes) {
	const { containerHeight = {}, itemsGap = {}, presetStyle } = attributes;
	const style = {
		height: `${containerHeight?.Desktop || 500}px`,
	};

	// Only apply gap via inline style if it's not Preset 2
	if (presetStyle !== "preset-2" && itemsGap?.Desktop !== undefined) {
		style.gap = `${itemsGap.Desktop}px`;
	}
	return style;
}

/* 
   PRESET 1
 */
export function renderPreset1Item(
	item,
	index,
	attributes,
	activeIndex = 0,
	onItemAction,
) {
	const {
		overlayColor,
		iconColor,
		iconBgColor,
		iconSize,
		iconCircleSize,
		titleColor,
		subtitleColor,
	} = attributes;

	const isActive = index === activeIndex;

	const itemStyle = {
		backgroundImage: `url("${
			item.imageUrl || "https://placehold.co/1920x1080?text=Placeholder"
		}")`,
		backgroundColor: item.imageUrl ? "transparent" : "#2a2a2a",
	};

	const iconClass = item.iconValue || "fas fa-star";
	const iconImage =
		item.iconImageUrl || "https://placehold.co/100x100?text=Icon";

	return (
		<div
			key={item.id || index}
			className={`fb-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div className="fb-image-accordion-overlay" />
			<div className="fb-image-accordion-content-wrapper">
				<div className="fb-image-accordion-icon-circle">
					{item.mediaType === "image" && item.iconImageUrl ? (
						<img src={item.iconImageUrl} alt="" />
					) : (
						<i className={item.iconValue || "fas fa-star"} />
					)}
				</div>
				<div className="fb-image-accordion-text-group">
					<p className="fb-image-accordion-title">{item.title}</p>
					{item.subTitle && (
						<p className="fb-image-accordion-desc">{item.subTitle}</p>
					)}
				</div>
			</div>
		</div>
	);
}

/* 
   PRESET 2 
   
*/
export function renderPreset2Item(
	item,
	index,
	attributes,
	activeIndex = 0,
	onItemAction,
) {
	const {
		overlayColor,
		showDots,
		dotColor,
		dotSize,
		showNumber,
		numberColor,
		numberFontSize,
		titleColor,
		subtitleColor,
		titleFontSize,
		titleFontWeight,
		subtitleFontSize,
	} = attributes;

	const isActive = index === activeIndex;
	const itemNumber = String(index + 1).padStart(2, "0");

	const itemStyle = {
		backgroundImage: `url("${
			item.imageUrl || "https://placehold.co/1920x1080?text=Placeholder"
		}")`,
		backgroundColor: item.imageUrl ? "transparent" : "#2a2a2a",
	};

	const iconClass = item.iconValue || "fas fa-star";
	const iconImage =
		item.iconImageUrl || "https://placehold.co/100x100?text=Icon";

	return (
		<div
			key={item.id || index}
			className={`fb-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div
				className="fb-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>

			{showDots && (
				<div className="fb-image-accordion-dot-wrapper">
					<span className="fb-image-accordion-dot" />
				</div>
			)}

			<div className="fb-image-accordion-content-wrapper">
				<div className="fb-image-accordion-preset2-content fb-image-accordion-bottom-content">
					<div className="fb-image-accordion-icon-circle">
						{item.mediaType === "image" && item.iconImageUrl ? (
							<img src={item.iconImageUrl} alt="" />
						) : (
							<i className={item.iconValue || "fas fa-star"} />
						)}
					</div>
					{showNumber && (
						<span className="fb-image-accordion-number">{itemNumber}</span>
					)}
					<p className="fb-image-accordion-title">{item.title}</p>
					{item.subTitle && <p className="fb-sub-title">{item.subTitle}</p>}
				</div>
			</div>
		</div>
	);
}

/* 
   PRESET 3 
   
 */
export function renderPreset3Item(
	item,
	index,
	attributes,
	activeIndex = 0,
	onItemAction,
) {
	const {
		overlayColor,
		titleColor,
		subtitleColor,
		titleFontSize,
		titleFontWeight,
		subtitleFontSize,
		btnTextColor,
		btnBgColor,
		btnBorderColor,
		btnBorderRadius,
		btnFontSize,
		btnPaddingY,
		btnPaddingX,
	} = attributes;

	const isActive = index === activeIndex;

	const itemStyle = {
		backgroundImage: `url("${
			item.imageUrl || "https://placehold.co/1920x1080?text=Default+Background"
		}")`,
		backgroundColor: item.imageUrl ? "transparent" : "#2a2a2a",
	};

	const btnStyle = {
		color: btnTextColor,
		backgroundColor: btnBgColor,
		borderColor: btnBorderColor,
		borderStyle: "solid",
		borderWidth: "1px",
		borderRadius: `${btnBorderRadius}px`,
		fontSize: `${btnFontSize}px`,
		padding: `${btnPaddingY}px ${btnPaddingX}px`,
	};

	return (
		<div
			key={item.id || index}
			className={`fb-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div
				className="fb-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>
			<div className="fb-image-accordion-content-wrapper">
				<div className="fb-image-accordion-preset3-content">
					<div className="fb-image-accordion-left-content">
						<div className="fb-image-accordion-icon-circle">
							{item.mediaType === "image" && item.iconImageUrl ? (
								<img src={item.iconImageUrl} alt="" />
							) : (
								<i className={item.iconValue || "fas fa-star"} />
							)}
						</div>
						<p className="fb-image-accordion-title">{item.title}</p>
						{item.subTitle && <p className="fb-sub-title">{item.subTitle}</p>}
					</div>
					<a
						href={item.buttonUrl || "#"}
						className="fb-image-accordion-btn"
						style={{ borderRadius: `${btnBorderRadius?.Desktop || 6}px` }}
						target={item.buttonExternal ? "_blank" : "_self"}
						rel={item.buttonExternal ? "noopener noreferrer" : undefined}
						onClick={(e) => e.stopPropagation()}
					>
						{item.buttonText || "Read More"}
					</a>
				</div>
			</div>
		</div>
	);
}

/* 
   PRESET 4 
*/
export function renderPreset4Item(
	item,
	index,
	attributes,
	activeIndex = 0,
	onItemAction,
) {
	const {
		overlayColor,
		showNumber,
		numberColor,
		numberFontSize,
		titleColor,
		subtitleColor,
		titleFontSize,
		titleFontWeight,
		subtitleFontSize,
	} = attributes;

	const isActive = index === activeIndex;
	const itemNumber = String(index + 1).padStart(2, "0");

	/*
	 * Preset 4
	 */
	const skewBgStyle = {
		backgroundImage: `url("${
			item.imageUrl || "https://placehold.co/1920x1080?text=Placeholder"
		}")`,
		backgroundColor: item.imageUrl ? "transparent" : "#1e293b",
	};

	const iconClass = item.iconValue || "fas fa-star";
	const iconImage =
		item.iconImageUrl || "https://placehold.co/100x100?text=Icon";

	return (
		<div
			key={item.id || index}
			className={`fb-image-accordion-item${isActive ? " is-active" : ""}`}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div className="fb-skew-bg" style={skewBgStyle} />

			{/* Overlay */}
			<div
				className="fb-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>

			<div className="fb-image-accordion-content-wrapper">
				<div className="fb-image-accordion-icon-circle">
					{item.mediaType === "image" ? (
						<img src={iconImage} alt="" />
					) : (
						<i className={iconClass} />
					)}
				</div>
				{showNumber && (
					<span className="fb-image-accordion-number">{itemNumber}</span>
				)}
				<span className="fb-image-accordion-title">{item.title}</span>
				{item.subTitle && (
					<span className="fb-image-accordion-desc">{item.subTitle}</span>
				)}
			</div>
		</div>
	);
}

/* 
   Main
 */
export function renderAccordion(attributes, activeIndex = 0, onItemAction) {
	const { presetStyle, accordionItems = [] } = attributes;
	const containerStyle = getContainerStyle(attributes);

	const items = accordionItems.map((item, index) => {
		switch (presetStyle) {
			case "preset-2":
				return renderPreset2Item(
					item,
					index,
					attributes,
					activeIndex,
					onItemAction,
				);
			case "preset-3":
				return renderPreset3Item(
					item,
					index,
					attributes,
					activeIndex,
					onItemAction,
				);
			case "preset-4":
				return renderPreset4Item(
					item,
					index,
					attributes,
					activeIndex,
					onItemAction,
				);
			default:
				return renderPreset1Item(
					item,
					index,
					attributes,
					activeIndex,
					onItemAction,
				);
		}
	});

	return { containerStyle, items };
}
