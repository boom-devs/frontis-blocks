import { __ } from "@wordpress/i18n";
import { useEffect, memo } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import Inspector from "./inspector";

function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
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
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-post-title-block ${blockId} ${
			postTitleDesktopSwitcher && "fb-desktop-responsive"
		} ${postTitleTabletSwitcher && "fb-tablet-responsive"} ${
			postTitleMobileSwitcher && "fb-mobile-responsive"
			}`,
	});

	useEffect(() => {
		if (clientId && !blockId) {
			setAttributes({ blockId: "fb-post-title-" + clientId.slice(0, 8) });
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
			<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>

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

export default memo(Edit);

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
