import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockID,
		paragraphText,
		paragraphGlobalWraperID,
		paragraphGlobalWraperClass,
		paragraphBeforeAfterSwitcher,
		advancedParagraphDesktopSwitcher,
		advancedParagraphTabletSwitcher,
		advancedParagraphMobileSwitcher,
	} = attributes;

	if (!paragraphText?.trim()) {
		return null;
	}

	const blockProps = useBlockProps.save({
		className: `frontis-block fb-advanced-paragraph-main-wrapper ${blockID} ${
			advancedParagraphDesktopSwitcher && "fb-desktop-responsive"
		} ${advancedParagraphTabletSwitcher && "fb-tablet-responsive"} ${
			advancedParagraphMobileSwitcher && "fb-mobile-responsive"
		} ${paragraphBeforeAfterSwitcher && "fb-advanced-paragraph-before-after"}`,
	});


	return (
		<>
			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-advanced-wrapper ${paragraphGlobalWraperClass}`}
					id={paragraphGlobalWraperID}
				>
					<div className="fb-advanced-paragraph-wrapper">
						<RichText.Content
							tagName="p"
							value={paragraphText}
							className={`fb-advanced-paragraph`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
