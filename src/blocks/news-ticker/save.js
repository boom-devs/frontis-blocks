import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import "./style.scss";

export default function Save({ attributes }) {
	const {
		blockID,
		newsTickerGlobalWraperID,
		newsTickerGlobalWraperClass,
		newsTickerDesktopSwitcher,
		newsTickerTabletSwitcher,
		newsTickerMobileSwitcher,
		tickerLabel,
		tickerLabelIcon,
		labelIconSwitcher,
        showArrows,
		showTime,
		arrowsUniqueId
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-news-ticker-wrapper ${blockID} 
            ${newsTickerDesktopSwitcher && "fb-desktop-responsive"} 
            ${newsTickerTabletSwitcher && "fb-tablet-responsive"} 
            ${newsTickerMobileSwitcher && "fb-mobile-responsive"}`,
	});

	return (
		<div {...blockProps} id={newsTickerGlobalWraperID}>
			<div className={`fb-news-ticker-inner ${newsTickerGlobalWraperClass}`}>
				<div className="fb-news-ticker-label-container">
					{labelIconSwitcher && (
						<div className="fb-news-ticker-label-icon">
							<div className="fb-icon-wrapper">{renderSVG(tickerLabelIcon)}</div>
						</div>
					)}
					<div className="fb-news-ticker-label">
						<RichText.Content tagName="span" value={tickerLabel} />
					</div>
				</div>

				<div className="fb-news-ticker-content">
					<InnerBlocks.Content />
				</div>
				{showArrows && (
					<div className={`fb-news-ticker-arrows ${arrowsUniqueId}`}>
						<div className="fb-news-ticker-prev">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
							<path d="M15.75 20L8.25 12.5L15.75 5" stroke="#E95B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						</div>
						<div className="fb-news-ticker-next">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
							<path d="M8.25 5L15.75 12.5L8.25 20" stroke="#E95B68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						</div>
					</div>
                )}
				{showTime && (
					<div className="fb-news-ticker-time">
						<span>
							{new Date()
								.toLocaleTimeString("en-US", {
									hour: "numeric",
									minute: "2-digit",
									hour12: true,
								})
								.toLowerCase()}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
