import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
	Button,
	ButtonGroup,
	BaseControl,
	Flex,
	FlexItem,
	Dashicon,
} from "@wordpress/components";
import FB_InputControl from "@Components/input-control";
import FB_IconPicker from "@Components/icon-picker";

export default function SortableItem({
	id,
	item,
	index,
	imageAccordionPreset,
	updateItem,
	removeItem,
	duplicateItem,
}) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id });

	const [isOpen, setIsOpen] = useState(false);

	const style = {
		transform: CSS.Translate.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
		zIndex: isDragging ? 999 : 1,
		position: "relative",
	};

	const toggleOpen = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};

	return (
		<li
			className={`fb-accordion-item-control sortable-item ${
				isOpen ? "is-open" : ""
			}`}
			ref={setNodeRef}
			style={style}
		>
			<Flex
				align="center"
				className={`fb-accordion-item-header ${isOpen ? "is-open" : ""}`}
				onClick={toggleOpen}
			>
				<FlexItem isBlock className="fb-accordion-item-title-wrap">
					<span className="fb-accordion-item-title">
						{item.title || __(`Item ${index + 1}`, "frontis-blocks")}
					</span>
				</FlexItem>
				<FlexItem>
					<Flex align="center" justify="flex-end" gap={1}>
						<Button
							icon="admin-page"
							size="small"
							variant="link"
							className="fb-accordion-item-duplicate"
							label={__("Duplicate", "frontis-blocks")}
							onClick={(e) => {
								e.stopPropagation();
								duplicateItem(item.id);
							}}
						/>
						<div
							{...listeners}
							{...attributes}
							className="fb-accordion-item-drag"
							style={{
								cursor: "grab",
								display: "flex",
								alignItems: "center",
								padding: "4px",
							}}
						>
							<Dashicon icon="move" size={16} />
						</div>
						<Button
							icon="trash"
							size="small"
							variant="link"
							className="fb-accordion-item-remove"
							onClick={(e) => {
								e.stopPropagation();
								removeItem(item.id);
							}}
							label={__("Delete", "frontis-blocks")}
						/>
						<Dashicon
							className="fb-accordion-item-toggle"
							icon={isOpen ? "arrow-up-alt2" : "arrow-down-alt2"}
							size={16}
						/>
					</Flex>
				</FlexItem>
			</Flex>

			{isOpen && (
				<div className="fb-accordion-item-body">
					<BaseControl label={__("Background Image", "frontis-blocks")}>
						<div className="fb-image-upload-control">
							{item.image?.url ? (
								<div className="fb-image-preview">
									<img src={item.image.url} alt="" />
									<Button
										isDestructive
										isSmall
										onClick={() =>
											updateItem(item.id, "image", { url: "", id: "" })
										}
									>
										{__("Remove", "frontis-blocks")}
									</Button>
								</div>
							) : (
								<Button
									variant="secondary"
									onClick={() => {
										const frame = wp.media({
											title: __("Select Image", "frontis-blocks"),
											multiple: false,
											library: { type: "image" },
										});
										frame.on("select", () => {
											const attachment = frame
												.state()
												.get("selection")
												.first()
												.toJSON();
											updateItem(item.id, "image", {
												url: attachment.url,
												id: attachment.id,
											});
										});
										frame.open();
									}}
								>
									{__("Choose Image", "frontis-blocks")}
								</Button>
							)}
						</div>
					</BaseControl>

					<FB_InputControl
						label={__("Title", "frontis-blocks")}
						value={item.title}
						onChangeValue={(value) => updateItem(item.id, "title", value)}
					/>

					<FB_InputControl
						label={__("Sub Title", "frontis-blocks")}
						value={item.subTitle}
						onChangeValue={(value) => updateItem(item.id, "subTitle", value)}
					/>

					{imageAccordionPreset === "preset-1" && (
						<FB_IconPicker
							value={item.selectedIcon || ""}
							setIconHandler={(value) =>
								updateItem(item.id, "selectedIcon", value)
							}
						/>
					)}

					{imageAccordionPreset === "preset-3" && (
						<FB_InputControl
							label={__("Button Text", "frontis-blocks")}
							value={item.buttonText}
							onChangeValue={(value) =>
								updateItem(item.id, "buttonText", value)
							}
						/>
					)}
				</div>
			)}
		</li>
	);
}
