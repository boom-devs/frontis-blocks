import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import Inspector from "./inspector";

/* ─────────────────────────────────────────────
   Shared fallback gradient for items without images
───────────────────────────────────────────────── */
const FALLBACK_GRADIENTS = [
	"linear-gradient(135deg,#1a1a2e,#16213e)",
	"linear-gradient(135deg,#2d1b33,#11032e)",
	"linear-gradient(135deg,#0f3460,#533483)",
	"linear-gradient(135deg,#1a3a4a,#0d2137)",
	"linear-gradient(135deg,#2c0735,#6a0572)",
];

/* ─────────────────────────────────────────────
   Helper: zero-padded ordinal labels
───────────────────────────────────────────────── */
const ordinal = (n) => String(n).padStart(2, "0");

/* ─────────────────────────────────────────────
   PRESET 1 — Rounded Cards (vertical columns)
   Active card expands; inactive cards collapse to pill icons
───────────────────────────────────────────────── */
const Preset1 = ({
	items,
	height,
	borderRadius,
	accentColor,
	overlayOpacity,
	showNumbers,
	showButton,
	triggerOn,
}) => {
	const [active, setActive] = useState(0);

	const handlers = (index) =>
		triggerOn === "hover"
			? { onMouseEnter: () => setActive(index) }
			: { onClick: () => setActive(index) };

	return (
		<div style={{ display: "flex", height, gap: 10, alignItems: "stretch" }}>
			{items.map((item, i) => {
				const isActive = i === active;
				const bg = item.imageUrl
					? `url(${item.imageUrl}) center/cover no-repeat`
					: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];

				return (
					<div
						key={item.id}
						{...handlers(i)}
						style={{
							flex: isActive ? "5 1 0%" : "0 0 64px",
							transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1)",
							borderRadius,
							background: bg,
							position: "relative",
							overflow: "hidden",
							cursor: "pointer",
						}}
					>
						{/* Overlay */}
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: `rgba(0,0,0,${overlayOpacity / 100})`,
							}}
						/>

						{/* Collapsed: star icon + rotated title */}
						{!isActive && (
							<div
								style={{
									position: "absolute",
									inset: 0,
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "flex-end",
									paddingBottom: 16,
									gap: 12,
								}}
							>
								<div
									style={{
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: "#fff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: 18,
									}}
								>
									⭐
								</div>
							</div>
						)}

						{/* Expanded: title + subtitle + button */}
						{isActive && (
							<div
								style={{
									position: "absolute",
									inset: 0,
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-end",
									padding: "24px 28px",
									background:
										"linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
								}}
							>
								<div
									style={{
										width: 40,
										height: 40,
										borderRadius: "50%",
										background: "#fff",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: 18,
										marginBottom: 12,
									}}
								>
									⭐
								</div>
								<h3
									style={{
										margin: 0,
										color: accentColor,
										fontSize: 22,
										fontWeight: 700,
										fontFamily: '"Playfair Display", Georgia, serif',
										textShadow: "0 2px 8px rgba(0,0,0,0.5)",
									}}
								>
									{item.title}
								</h3>
								{item.subtitle && (
									<p
										style={{
											margin: "4px 0 0",
											color: "rgba(255,255,255,0.75)",
											fontSize: 13,
										}}
									>
										{item.subtitle}
									</p>
								)}
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

/* ─────────────────────────────────────────────
   PRESET 2 — Full Bleed + White Dot indicators
   Active panel fills most width; numbers + dots at bottom
───────────────────────────────────────────────── */
const Preset2 = ({
	items,
	height,
	accentColor,
	overlayOpacity,
	showNumbers,
	triggerOn,
}) => {
	const [active, setActive] = useState(0);

	const handlers = (index) =>
		triggerOn === "hover"
			? { onMouseEnter: () => setActive(index) }
			: { onClick: () => setActive(index) };

	return (
		<div
			style={{
				display: "flex",
				height,
				position: "relative",
				overflow: "hidden",
				borderRadius: 0,
			}}
		>
			{items.map((item, i) => {
				const isActive = i === active;
				const bg = item.imageUrl
					? `url(${item.imageUrl}) center/cover no-repeat`
					: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];

				return (
					<div
						key={item.id}
						{...handlers(i)}
						style={{
							flex: isActive ? "4 1 0%" : "1 1 0%",
							transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1)",
							background: bg,
							position: "relative",
							overflow: "hidden",
							cursor: "pointer",
						}}
					>
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: isActive
									? `rgba(0,0,0,${(overlayOpacity - 10) / 100})`
									: `rgba(0,0,0,${(overlayOpacity + 20) / 100})`,
								transition: "background 0.4s",
							}}
						/>

						{/* Bottom bar — number + dot */}
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								padding: "12px 16px",
								display: "flex",
								flexDirection: "column",
								alignItems: isActive ? "flex-start" : "center",
								gap: 6,
								background:
									"linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
							}}
						>
							{isActive && (
								<>
									<span
										style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}
									>
										{ordinal(i + 1)}
									</span>
									<h3
										style={{
											margin: 0,
											color: accentColor,
											fontSize: 20,
											fontWeight: 700,
											fontFamily: '"Playfair Display", Georgia, serif',
										}}
									>
										{item.title}
									</h3>
								</>
							)}
							{!isActive && showNumbers && (
								<>
									<div
										style={{
											width: 10,
											height: 10,
											borderRadius: "50%",
											background: "#fff",
											opacity: 0.7,
										}}
									/>
									<span
										style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}
									>
										{ordinal(i + 1)}
									</span>
								</>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

/* ─────────────────────────────────────────────
   PRESET 3 — Horizontal Strips
   Each item is a full-width strip; active expands vertically
───────────────────────────────────────────────── */
const Preset3 = ({
	items,
	height,
	borderRadius,
	accentColor,
	overlayOpacity,
	showButton,
	triggerOn,
}) => {
	const [active, setActive] = useState(0);

	const handlers = (index) =>
		triggerOn === "hover"
			? { onMouseEnter: () => setActive(index) }
			: { onClick: () => setActive(index) };

	return (
		<div style={{ display: "flex", flexDirection: "column", height, gap: 6 }}>
			{items.map((item, i) => {
				const isActive = i === active;
				const bg = item.imageUrl
					? `url(${item.imageUrl}) center/cover no-repeat`
					: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];

				return (
					<div
						key={item.id}
						{...handlers(i)}
						style={{
							flex: isActive ? "4 1 0%" : "1 1 0%",
							transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
							borderRadius,
							background: bg,
							position: "relative",
							overflow: "hidden",
							cursor: "pointer",
						}}
					>
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: `rgba(0,0,0,${overlayOpacity / 100})`,
							}}
						/>

						<div
							style={{
								position: "absolute",
								inset: 0,
								display: "flex",
								alignItems: "center",
								padding: "0 28px",
								justifyContent: "space-between",
							}}
						>
							<h3
								style={{
									margin: 0,
									color: accentColor,
									fontSize: isActive ? 22 : 15,
									fontWeight: 700,
									fontFamily: '"Playfair Display", Georgia, serif',
									transition: "font-size 0.3s",
									textShadow: "0 2px 8px rgba(0,0,0,0.6)",
								}}
							>
								{item.title}
							</h3>

							{isActive && showButton && (
								<a
									href={item.buttonUrl}
									style={{
										color: "#fff",
										background: "rgba(255,255,255,0.2)",
										border: "1px solid rgba(255,255,255,0.5)",
										padding: "8px 20px",
										borderRadius: 4,
										fontSize: 13,
										fontWeight: 600,
										textDecoration: "none",
										backdropFilter: "blur(4px)",
										whiteSpace: "nowrap",
									}}
								>
									{item.buttonText || "Read More"}
								</a>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

/* ─────────────────────────────────────────────
   PRESET 4 — Diagonal Slices
   Panels have skewed clip-path dividers; active expands
───────────────────────────────────────────────── */
const Preset4 = ({
	items,
	height,
	accentColor,
	overlayOpacity,
	showNumbers,
	triggerOn,
}) => {
	const [active, setActive] = useState(0);

	const handlers = (index) =>
		triggerOn === "hover"
			? { onMouseEnter: () => setActive(index) }
			: { onClick: () => setActive(index) };

	return (
		<div
			style={{
				display: "flex",
				height,
				position: "relative",
				overflow: "hidden",
			}}
		>
			{items.map((item, i) => {
				const isActive = i === active;
				const bg = item.imageUrl
					? `url(${item.imageUrl}) center/cover no-repeat`
					: FALLBACK_GRADIENTS[i % FALLBACK_GRADIENTS.length];

				/* Diagonal clip: each panel tilts slightly */
				const skewOffset = 24; // px overlap from skew
				const clipPath =
					i === 0
						? `polygon(0 0, calc(100% + ${skewOffset}px) 0, calc(100% - ${skewOffset}px) 100%, 0 100%)`
						: i === items.length - 1
						? `polygon(${skewOffset}px 0, 100% 0, 100% 100%, -${skewOffset}px 100%)`
						: `polygon(${skewOffset}px 0, calc(100% + ${skewOffset}px) 0, calc(100% - ${skewOffset}px) 100%, -${skewOffset}px 100%)`;

				return (
					<div
						key={item.id}
						{...handlers(i)}
						style={{
							flex: isActive ? "4 1 0%" : "1 1 0%",
							transition: "flex 0.55s cubic-bezier(0.4,0,0.2,1)",
							background: bg,
							clipPath,
							position: "relative",
							overflow: "hidden",
							cursor: "pointer",
							marginLeft: i > 0 ? -skewOffset : 0,
						}}
					>
						<div
							style={{
								position: "absolute",
								inset: 0,
								background: isActive
									? `rgba(0,0,0,${(overlayOpacity - 5) / 100})`
									: `rgba(0,0,0,${(overlayOpacity + 25) / 100})`,
								transition: "background 0.4s",
							}}
						/>

						<div
							style={{
								position: "absolute",
								inset: 0,
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-end",
								padding: "20px 28px",
							}}
						>
							{showNumbers && (
								<span
									style={{
										color: "rgba(255,255,255,0.5)",
										fontSize: isActive ? 14 : 11,
										fontWeight: 600,
										letterSpacing: 2,
										fontFamily: "monospace",
									}}
								>
									{ordinal(i + 1)}
								</span>
							)}
							{isActive && (
								<h3
									style={{
										margin: "4px 0 0",
										color: accentColor,
										fontSize: 20,
										fontWeight: 700,
										fontFamily: '"Playfair Display", Georgia, serif',
										textShadow: "0 2px 12px rgba(0,0,0,0.8)",
									}}
								>
									{item.title}
								</h3>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

/* ─────────────────────────────────────────────
   Main Edit Component
───────────────────────────────────────────────── */
const PRESET_LABELS = {
	preset1: "Preset 1 — Rounded Cards",
	preset2: "Preset 2 — Full Bleed + Dots",
	preset3: "Preset 3 — Horizontal Strips",
	preset4: "Preset 4 — Diagonal Slices",
};

const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps({ className: "image-accordion-block" });
	const {
		preset,
		items,
		height,
		borderRadius,
		accentColor,
		overlayColor,
		overlayOpacity,
		showNumbers,
		showButton,
		triggerOn,
	} = attributes;

	const sharedProps = {
		items,
		height,
		borderRadius,
		accentColor,
		overlayColor,
		overlayOpacity,
		showNumbers,
		showButton,
		triggerOn,
	};

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...blockProps}>
				{/* Editor badge */}
				<div
					style={{
						background: "#1e1e1e",
						color: "#a0a0a0",
						fontSize: 11,
						padding: "4px 10px",
						borderRadius: "4px 4px 0 0",
						display: "inline-block",
						marginBottom: 2,
						fontFamily: "monospace",
					}}
				>
					Image Accordion — {PRESET_LABELS[preset]} ({triggerOn})
				</div>

				{preset === "preset1" && <Preset1 {...sharedProps} />}
				{preset === "preset2" && <Preset2 {...sharedProps} />}
				{preset === "preset3" && <Preset3 {...sharedProps} />}
				{preset === "preset4" && <Preset4 {...sharedProps} />}

				<p
					style={{
						fontSize: 11,
						color: "#888",
						margin: "4px 0 0",
						textAlign: "center",
					}}
				>
					{__(
						"Use the inspector sidebar to manage items, images and styles.",
						"image-accordion",
					)}
				</p>
			</div>
		</>
	);
};

export default Edit;
