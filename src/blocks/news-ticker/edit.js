import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { useMemo, useEffect } from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import loadGoogleFont from "@Utils/loadGoogleFont";
import "./editor.scss";

import Inspector from "./inspector";

import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateNewsTickerStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
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
		arrowsUniqueId,
		showAutoplayButton,

		tickerLabelFontFamily,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-news-ticker',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start load font */
	useEffect(() => {
		[tickerLabelFontFamily].forEach(font => {
			if (font && !loadedFonts.has(font)) {
				loadGoogleFont(font);
				loadedFonts.add(font);
			}
		});
	}, [tickerLabelFontFamily]);
	/** End load font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateNewsTickerStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	// Generate unique ID for arrows
	const generatedArrowsId = useMemo(() => {
		if (arrowsUniqueId) return arrowsUniqueId;

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

	const blockProps = useBlockProps({
		className: `fb-news-ticker-wrapper ${blockID} ${newsTickerDesktopSwitcher && "fb-desktop-responsive"
			} ${newsTickerTabletSwitcher && "fb-tablet-responsive"} ${newsTickerMobileSwitcher && "fb-mobile-responsive"
			}`,
	});

	return (
		<>	
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			
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
							{showAutoplayButton && (
								<div className={`fb-news-ticker-pause-btn ${finalArrowsId}`}>
									{/* Pause Icon */}
									<svg className="icon-pause" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
										<path fillRule="evenodd" clipRule="evenodd" d="M6.75 5.75C6.75 5.33579 7.08579 5 7.5 5H9C9.41421 5 9.75 5.33579 9.75 5.75V19.25C9.75 19.6642 9.41421 20 9 20H7.5C7.30109 20 7.11032 19.921 6.96967 19.7803C6.82902 19.6397 6.75 19.4489 6.75 19.25V5.75ZM14.25 5.75C14.25 5.33579 14.5858 5 15 5H16.5C16.6989 5 16.8897 5.07902 17.0303 5.21967C17.171 5.36032 17.25 5.55109 17.25 5.75V19.25C17.25 19.6642 16.9142 20 16.5 20H15C14.5858 20 14.25 19.6642 14.25 19.25V5.75Z" fill="" />
									</svg>

									{/* Play Icon */}
									<svg className="icon-play" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
										<path d="M8 5V20L19 12.5L8 5Z" fill="currentColor" />
									</svg>
								</div>
							)}
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
								Time:
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
			<style>{blockStyle}</style>
		</>
	);
}