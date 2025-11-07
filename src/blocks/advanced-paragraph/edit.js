import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import { useRef } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";
import { useDeviceType } from "@Config/displayType";
import "./editor.scss";

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockId,
		paragraphText,
		paragraphAlignment,

		paragraphGlobalWraperID,
		paragraphGlobalWraperClass,

		advancedParagraphDesktopSwitcher,
		advancedParagraphTabletSwitcher,
		advancedParagraphMobileSwitcher,

		dynamicContent,
	} = attributes;


	const blockProps = useBlockProps({
		className: `frontis-block fb-advanced-paragraph-main-wrapper ${blockId} ${
			advancedParagraphDesktopSwitcher && "fb-desktop-responsive"
		} ${advancedParagraphTabletSwitcher && "fb-tablet-responsive"} ${
			advancedParagraphMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	const deviceType = useDeviceType();

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const dynamicValue = useSelect(	
		(select) => {
			if (!dynamicContent) return "";

			// Check if we're inside a Query Loop block
			const { getBlockParentsByBlockName } = select("core/block-editor");
			const queryBlockIds = getBlockParentsByBlockName(clientId, "core/query");
			const isInsideQueryLoop = queryBlockIds && queryBlockIds.length > 0;

			if (isInsideQueryLoop) {
				// In the first snippet, they use context from props directly
				// You could add context to your function parameters: Edit({ attributes, setAttributes, clientId, context })
				// Where context would include: { postType, postId, queryId }

				// Then use this postId instead of trying to get it from selectedBlock
				const contextPostId = context?.postId;

				if (contextPostId) {
					const contextPostType = context?.postType || "post";
					const post = select("core").getEntityRecord(
						"postType",
						contextPostType,
						contextPostId,
					);

					if (post) {
						switch (dynamicContent) {
							case "post_title":
								// return post.title.rendered;
								return post?.title?.rendered || ""; // no crash
							case "post_date":
								return new Date(post.date).toLocaleDateString();
							default:
								return "";
						}
					}
				}
				return "";
			} else {
				// This part is good as is
				const postType = select("core/editor").getCurrentPostType();
				const postId = select("core/editor").getCurrentPostId();
				const post = select("core").getEditedEntityRecord(
					"postType",
					postType,
					postId,
				);

				switch (dynamicContent) {
					case "post_title":
						return post.title;
					case "post_date":
						return new Date(post.date).toLocaleDateString();
					default:
						return "";
				}
			}
		},
		[dynamicContent, clientId, context?.postId, context?.postType],
	);


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
				dynamicValue={dynamicValue}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={paragraphAlignment[deviceType]}
					onChange={(value) =>
						setAttributes({
							paragraphAlignment: { ...paragraphAlignment, [deviceType]: value },
						})
					}
					controls={["left", "center", "right"]}
				/>
			</BlockControls>

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-advanced-wrapper ${paragraphGlobalWraperClass}`}
					id={paragraphGlobalWraperID}
					ref={panelRef}
				>
					<div className="fb-advanced-paragraph-wrapper">
						<RichText
							tagName="p"
							value={dynamicContent ? dynamicValue : paragraphText}
							onChange={(value) => {
								if (!dynamicContent) {
									setAttributes({ paragraphText: value });
								}
							}}
							placeholder={ __("Write your advanced paragraph...", "frontis-blocks") }
							className={`fb-advanced-paragraph`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
