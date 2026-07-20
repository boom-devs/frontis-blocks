import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import loadGoogleFont from "@Utils/loadGoogleFont";

import Inspector from "./inspector";

import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generatePostTitleStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
		postTitleTag,
		isLink,
		rel,
		linkTarget,

		titleExcerptLength,

		postTitleDesktopSwitcher,
		postTitleTabletSwitcher,
		postTitleMobileSwitcher,

		wrapperId,
		wrapperClass,

		postTitleFontFamily,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-post-title',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start load font */
	useEffect(() => {
		[postTitleFontFamily].forEach(font => {
			if (font && !loadedFonts.has(font)) {
				loadGoogleFont(font);
				loadedFonts.add(font);
			}
		});
	}, [postTitleFontFamily]);
	/** End load font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generatePostTitleStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `fb-post-title-block ${blockID} ${
			postTitleDesktopSwitcher && "fb-desktop-responsive"
		} ${postTitleTabletSwitcher && "fb-tablet-responsive"} ${
			postTitleMobileSwitcher && "fb-mobile-responsive"
			}`,
	});

	useEffect(() => {
		if (clientId && !blockID) {
			setAttributes({ blockID: "fb-post-title-" + clientId.slice(0, 8) });
		}
	}, [clientId]);

	// Get current post title for editor preview
	const { useSelect } = wp.data;
	const postTitle = useSelect((select) => {
		return (
			select("core/editor")?.getEditedPostAttribute("title") ||
			__("Post Title", "frontis-blocks")
		);
	}, []);

	const TagName = postTitleTag;

	// Combine classes for HTML tag
	const htmlTagClasses = `fb-post-title ${wrapperClass}`.trim();

	return (
		<>	
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}

			<div {...blockProps}>
				<TagName className={htmlTagClasses} id={wrapperId || undefined}>
					{isLink ? (
						<a
							className="fb-post-title-link"
							href="#"
							rel={rel}
							target={''}
						>
							{trimWords(postTitle, titleExcerptLength || 0)}
						</a>
					) : (
						trimWords(postTitle, titleExcerptLength || 0)
					)}
				</TagName>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}

// Utility function
function trimWords(text, wordLimit) {
	if (!text) return "";
	if (wordLimit > 0) {
		const words = text.split(" ");
		return words.length > wordLimit
			? words.slice(0, wordLimit).join(" ")
			: text;
	}
	return text;
}