import { useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		preset,
		triggerOn,
		items,
		height,
		borderRadius,
		accentColor,
		overlayOpacity,
		showNumbers,
		showButton,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "image-accordion-block",
		"data-preset": preset,
		"data-trigger": triggerOn,
		"data-height": height,
		"data-border-radius": borderRadius,
		"data-accent-color": accentColor,
		"data-overlay-opacity": overlayOpacity,
		"data-show-numbers": showNumbers ? "1" : "0",
		"data-show-button": showButton ? "1" : "0",
	});

	return (
		<div {...blockProps}>
			{/* Items encoded as JSON in a hidden script tag — safe, no XSS */}
			<script
				type="application/json"
				className="image-accordion-data"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						items.map(
							({
								id,
								title,
								subtitle,
								description,
								imageUrl,
								buttonText,
								buttonUrl,
							}) => ({
								id,
								title,
								subtitle,
								description,
								imageUrl,
								buttonText,
								buttonUrl,
							}),
						),
					),
				}}
			/>

			{/* Accessible no-JS fallback */}
			<noscript>
				<ul className="image-accordion-block__fallback">
					{items.map((item) => (
						<li key={item.id}>
							{item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
							<strong>{item.title}</strong>
							{item.subtitle && <span> — {item.subtitle}</span>}
						</li>
					))}
				</ul>
			</noscript>
		</div>
	);
};

export default Save;
