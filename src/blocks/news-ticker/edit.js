import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { useMemo, useEffect } from "@wordpress/element";
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId }) {
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
		timerPosition,
		arrowsUniqueId
	} = attributes;

	// Generate unique ID for arrows (only if not already saved)
    const generatedArrowsId = useMemo(() => {
        if (arrowsUniqueId) return arrowsUniqueId; // Use existing if available
        
        const randomString = Math.random().toString(36).substring(2, 10) +
                            Date.now().toString(36).substring(2);
        return `arrows-${randomString}`;
    }, [arrowsUniqueId]);

    // Save the generated ID to attributes
    useEffect(() => {
        if (!arrowsUniqueId || arrowsUniqueId !== generatedArrowsId) {
            setAttributes({ arrowsUniqueId: generatedArrowsId });
        }
    }, [generatedArrowsId, arrowsUniqueId, setAttributes]);

    // Use the generated/saved ID
    const finalArrowsId = arrowsUniqueId || generatedArrowsId;

	// console.log(finalArrowsId);
	// console.log(arrowsUniqueId);
	const blockProps = useBlockProps({
		className: `fb-news-ticker-wrapper ${blockID} ${
			newsTickerDesktopSwitcher && "fb-desktop-responsive"
		} ${newsTickerTabletSwitcher && "fb-tablet-responsive"} ${
			newsTickerMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<div {...blockProps} id={newsTickerGlobalWraperID}>
				<div className={`fb-news-ticker-inner ${newsTickerGlobalWraperClass}`}>
					<div className="fb-news-ticker-label-container">
						{labelIconSwitcher && (
							<div className="fb-news-ticker-label-icon">
								<div className="fb-icon-wrapper">
									{renderSVG(tickerLabelIcon)}
								</div>
							</div>
						)}
						<div className="fb-news-ticker-label">
							<RichText
								tagName="span"
								value={tickerLabel}
								onChange={(value) => setAttributes({ tickerLabel: value })}
								placeholder={__("Breaking News", "frontis-blocks")}
							/>
						</div>
					</div>
					<div className="fb-news-ticker-content">
						<InnerBlocks
							allowedBlocks={["frontis-blocks/marquee-carousel"]}
							template={[
								[
									"frontis-blocks/marquee-carousel"
								],
							]}
							templateLock={false}
						/>
						
					</div>
					{showArrows && (
						<div className={`fb-news-ticker-arrows ${finalArrowsId}`}>
							<div className="fb-news-ticker-prev">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
								>
									<path
										d="M15.75 20L8.25 12.5L15.75 5"
										stroke="#E95B68"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="fb-news-ticker-next">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="25"
									viewBox="0 0 24 25"
									fill="none"
								>
									<path
										d="M8.25 5L15.75 12.5L8.25 20"
										stroke="#E95B68"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					)}
					{showTime && (
						<div className={`fb-news-ticker-time ${timerPosition}`}>
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
		</>
	);
}