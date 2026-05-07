/**
 * render.js
 * Pure function that converts block attributes → JSX markup.
 * Used by both edit.js (live editor preview) and save.js (static HTML).
 *
 * @param {object}  attrs       Block attributes.
 * @param {boolean} isEditor    True when called from edit.js (adds editor-only classes).
 * @param {object}  blockProps  Spread-target from useBlockProps / useBlockProps.save.
 */

export const renderAccordion = (attrs, isEditor = false) => {
	const {
		presetStyle = "preset-1",
		triggerOn = "hover",
		accordionItems = [],
		containerHeight = 500,
		itemsGap = 12,
		overlayColor = "rgba(0,0,0,0.55)",
		iconColor = "#0875FF",
		showDots = true,
		dotColor = "#ffffff",
		dotSize = 12,
		showNumber = true,
		numberColor = "#ffffff",
		titleColor = "#ffffff",
		subtitleColor = "rgba(255,255,255,0.8)",
		btnTextColor = "#ffffff",
		btnBgColor = "rgba(255,255,255,0.18)",
	} = attrs;

	const containerStyle = {
		height: `${containerHeight}px`,
		gap: presetStyle !== "preset-2" ? `${itemsGap}px` : undefined,
	};

	const items = accordionItems.map((item, index) => {
		const isFirst = index === 0;
		const numLabel = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

		// Preset 1
		const renderPreset1 = () => (
			<>
				<div
					className="pea-image-accordion-overlay"
					style={{ background: overlayColor }}
				></div>
				<div className="pea-image-accordion-content-wrapper">
					<div
						className="pea-image-accordion-icon-circle"
						style={{ color: iconColor }}
					>
						{(item.mediaType || "icon") === "icon" && item.iconValue ? (
							<i className={item.iconValue} aria-hidden="true"></i>
						) : item.iconImageUrl ? (
							<img src={item.iconImageUrl} alt="" loading="lazy" />
						) : (
							<i className="fas fa-star" aria-hidden="true"></i>
						)}
					</div>
					<div className="pea-image-accordion-text-group">
						<h3
							className="pea-image-accordion-title"
							style={{ color: titleColor }}
						>
							{item.title}
						</h3>
						{item.subTitle && (
							<p
								className="pea-image-accordion-desc"
								style={{ color: subtitleColor }}
							>
								{item.subTitle}
							</p>
						)}
					</div>
				</div>
			</>
		);

		// Preset 2
		const renderPreset2 = () => (
			<>
				<div
					className="pea-image-accordion-overlay"
					style={{ background: overlayColor }}
				></div>
				<div className="pea-image-accordion-content-wrapper">
					{showDots && (
						<div className="pea-image-accordion-dot-wrapper">
							<span
								className="pea-image-accordion-dot"
								style={{
									background: dotColor,
									width: dotSize,
									height: dotSize,
								}}
							></span>
						</div>
					)}
					<div className="pea-image-accordion-preset2-content">
						<div className="pea-image-accordion-bottom-content">
							{showNumber && (
								<span
									className="pea-image-accordion-number"
									style={{ color: numberColor }}
								>
									{numLabel}
								</span>
							)}
							<h3
								className="pea-image-accordion-title"
								style={{ color: titleColor }}
							>
								{item.title}
							</h3>
							{item.subTitle && (
								<p className="pea-sub-title" style={{ color: subtitleColor }}>
									{item.subTitle}
								</p>
							)}
						</div>
					</div>
				</div>
			</>
		);

		// Preset 3
		const renderPreset3 = () => (
			<>
				<div
					className="pea-image-accordion-overlay"
					style={{ background: overlayColor }}
				></div>
				<div className="pea-image-accordion-content-wrapper">
					<div className="pea-image-accordion-preset3-content">
						<div className="pea-image-accordion-left-content">
							<h3
								className="pea-image-accordion-title"
								style={{ color: titleColor }}
							>
								{item.title}
							</h3>
							{item.subTitle && (
								<p className="pea-sub-title" style={{ color: subtitleColor }}>
									{item.subTitle}
								</p>
							)}
						</div>
						<a
							href={item.buttonUrl || "#"}
							target={item.buttonExternal ? "_blank" : "_self"}
							rel={item.buttonExternal ? "noopener noreferrer" : undefined}
							className="pea-image-accordion-btn"
							style={{ color: btnTextColor, background: btnBgColor }}
						>
							{item.buttonText || "Read More"}
						</a>
					</div>
				</div>
			</>
		);

		// Preset 4
		const renderPreset4 = () => (
			<>
				<div
					className="pea-skew-bg"
					style={
						item.imageUrl ? { backgroundImage: `url('${item.imageUrl}')` } : {}
					}
				></div>
				<div
					className="pea-image-accordion-overlay"
					style={{ background: overlayColor }}
				></div>
				<div className="pea-image-accordion-content-wrapper">
					<h3
						className="pea-image-accordion-title"
						style={{ color: titleColor }}
					>
						{item.title}
					</h3>
					{showNumber && (
						<span
							className="pea-image-accordion-number"
							style={{ color: numberColor }}
						>
							{numLabel}
						</span>
					)}
					{item.subTitle && (
						<p
							className="pea-image-accordion-desc"
							style={{ color: subtitleColor }}
						>
							{item.subTitle}
						</p>
					)}
				</div>
			</>
		);

		const itemStyle =
			presetStyle !== "preset-4" && item.imageUrl
				? { backgroundImage: `url('${item.imageUrl}')` }
				: {};

		return (
			<div
				key={item.id || index}
				className={`pea-image-accordion-item${isFirst ? " is-active" : ""}`}
				style={itemStyle}
				role="button"
				tabIndex={0}
				aria-expanded={isFirst ? "true" : "false"}
				aria-label={item.title}
			>
				{presetStyle === "preset-1" && renderPreset1()}
				{presetStyle === "preset-2" && renderPreset2()}
				{presetStyle === "preset-3" && renderPreset3()}
				{presetStyle === "preset-4" && renderPreset4()}
			</div>
		);
	});

	return { containerStyle, items, presetStyle, triggerOn };
};
