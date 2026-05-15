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
		titleFontSize,
		titleFontWeight,
		subtitleFontSize,
	} = attributes;

	const isActive = index === activeIndex;

	const itemStyle = {
		backgroundImage: item.imageUrl ? `url("${item.imageUrl}")` : "none",
		backgroundColor: item.imageUrl ? "transparent" : "#2a2a2a",
	};

	const iconCircleStyle = {
		width: `${iconCircleSize}px`,
		height: `${iconCircleSize}px`,
		minWidth: `${iconCircleSize}px`,
		backgroundColor: iconBgColor,
		color: iconColor,
	};

	return (
		<div
			key={item.id || index}
			className={`pea-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div
				className="pea-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>
			<div className="pea-image-accordion-content-wrapper">
				<div
					className="pea-image-accordion-icon-circle"
					style={iconCircleStyle}
				>
					{item.mediaType === "image" && item.iconImageUrl ? (
						<img src={item.iconImageUrl} alt="" />
					) : (
						<i
							className={item.iconValue || "fas fa-star"}
							style={{ fontSize: `${iconSize}px`, color: iconColor }}
						/>
					)}
				</div>
				<div className="pea-image-accordion-text-group">
					<p
						className="pea-image-accordion-title"
						style={{
							color: titleColor,
							fontSize: `${titleFontSize}px`,
							fontWeight: titleFontWeight,
						}}
					>
						{item.title}
					</p>
					{item.subTitle && (
						<p
							className="pea-image-accordion-desc"
							style={{
								color: subtitleColor,
								fontSize: `${subtitleFontSize}px`,
							}}
						>
							{item.subTitle}
						</p>
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
		backgroundImage: item.imageUrl ? `url("${item.imageUrl}")` : "none",
		backgroundColor: item.imageUrl ? "transparent" : "#2a2a2a",
	};

	return (
		<div
			key={item.id || index}
			className={`pea-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div
				className="pea-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>

			{showDots && (
				<div className="pea-image-accordion-dot-wrapper">
					<span
						className="pea-image-accordion-dot"
						style={{
							width: `${dotSize}px`,
							height: `${dotSize}px`,
							backgroundColor: dotColor,
						}}
					/>
				</div>
			)}

			<div className="pea-image-accordion-content-wrapper">
				<div className="pea-image-accordion-preset2-content pea-image-accordion-bottom-content">
					{showNumber && (
						<span
							className="pea-image-accordion-number"
							style={{
								color: numberColor,
								fontSize: `${numberFontSize}px`,
							}}
						>
							{itemNumber}
						</span>
					)}
					<p
						className="pea-image-accordion-title"
						style={{
							color: titleColor,
							fontSize: `${titleFontSize}px`,
							fontWeight: titleFontWeight,
						}}
					>
						{item.title}
					</p>
					{item.subTitle && (
						<p
							className="pea-sub-title"
							style={{
								color: subtitleColor,
								fontSize: `${subtitleFontSize}px`,
							}}
						>
							{item.subTitle}
						</p>
					)}
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
		backgroundImage: item.imageUrl ? `url("${item.imageUrl}")` : "none",
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
			className={`pea-image-accordion-item${isActive ? " is-active" : ""}`}
			style={itemStyle}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			<div
				className="pea-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>
			<div className="pea-image-accordion-content-wrapper">
				<div className="pea-image-accordion-preset3-content">
					<div className="pea-image-accordion-left-content">
						<p
							className="pea-image-accordion-title"
							style={{
								color: titleColor,
								fontSize: `${titleFontSize}px`,
								fontWeight: titleFontWeight,
							}}
						>
							{item.title}
						</p>
						{item.subTitle && (
							<p
								className="pea-sub-title"
								style={{
									color: subtitleColor,
									fontSize: `${subtitleFontSize}px`,
								}}
							>
								{item.subTitle}
							</p>
						)}
					</div>
					<a
						href={item.buttonUrl || "#"}
						className="pea-image-accordion-btn"
						style={btnStyle}
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
		backgroundImage: item.imageUrl ? `url("${item.imageUrl}")` : "none",
		backgroundColor: item.imageUrl ? "transparent" : "#1e293b",
	};

	return (
		<div
			key={item.id || index}
			className={`pea-image-accordion-item${isActive ? " is-active" : ""}`}
			tabIndex={0}
			role="button"
			aria-expanded={isActive ? "true" : "false"}
			onClick={() => onItemAction && onItemAction(index, "click")}
			onMouseEnter={() => onItemAction && onItemAction(index, "hover")}
		>
			{/* Un-skewed background */}
			<div className="pea-skew-bg" style={skewBgStyle} />

			{/* Overlay */}
			<div
				className="pea-image-accordion-overlay"
				style={{ background: overlayColor }}
			/>

			{/* Counter-skewed content */}
			<div className="pea-image-accordion-content-wrapper">
				{showNumber && (
					<span
						className="pea-image-accordion-number"
						style={{
							color: numberColor,
							fontSize: `${numberFontSize}px`,
						}}
					>
						{itemNumber}
					</span>
				)}
				<span
					className="pea-image-accordion-title"
					style={{
						color: titleColor,
						fontSize: `${titleFontSize}px`,
						fontWeight: titleFontWeight,
					}}
				>
					{item.title}
				</span>
				{item.subTitle && (
					<span
						className="pea-image-accordion-desc"
						style={{
							color: subtitleColor,
							fontSize: `${subtitleFontSize}px`,
						}}
					>
						{item.subTitle}
					</span>
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
