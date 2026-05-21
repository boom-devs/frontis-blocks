import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	BaseControl,
	RangeControl,
	Button,
	ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_Range from '../../components/range';

export default function SortableItem({ deviceType, GalleryColumnNumber, GalleryType, id, item, handleChangeItem, handleDeleteItem, handleRemoveMedia, setAttributes }) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
	const [isOpen, setIsOpen] = useState(false);
	// const [FeatureIconAlign, setFeatureIconAlign] = useState( ICON_ALIGN[1].value );

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const toggleOpen = () => setIsOpen(!isOpen);

	const TrashIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
			<path d="M9.82692 6L9.59615 12M6.40385 12L6.17308 6M12.8184 3.86038C13.0464 3.89481 13.2736 3.93165 13.5 3.97086M12.8184 3.86038L12.1065 13.115C12.0464 13.8965 11.3948 14.5 10.611 14.5H5.38905C4.60524 14.5 3.95358 13.8965 3.89346 13.115L3.18157 3.86038M12.8184 3.86038C12.0542 3.74496 11.281 3.65657 10.5 3.59622M2.5 3.97086C2.72638 3.93165 2.95358 3.89481 3.18157 3.86038M3.18157 3.86038C3.94585 3.74496 4.719 3.65657 5.5 3.59622M10.5 3.59622V2.98546C10.5 2.19922 9.8929 1.54282 9.10706 1.51768C8.73948 1.50592 8.37043 1.5 8 1.5C7.62957 1.5 7.26052 1.50592 6.89294 1.51768C6.1071 1.54282 5.5 2.19922 5.5 2.98546V3.59622M10.5 3.59622C9.67504 3.53247 8.84131 3.5 8 3.5C7.15869 3.5 6.32496 3.53247 5.5 3.59622" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
	const MoveIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
			<path d="M2.1875 2.1875V4.8125M2.1875 2.1875H4.8125M2.1875 2.1875L5.25 5.25M2.1875 11.8125V9.1875M2.1875 11.8125H4.8125M2.1875 11.8125L5.25 8.75M11.8125 2.1875L9.1875 2.1875M11.8125 2.1875V4.8125M11.8125 2.1875L8.75 5.25M11.8125 11.8125H9.1875M11.8125 11.8125V9.1875M11.8125 11.8125L8.75 8.75" stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);

	return (
		<li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
			<div className="sortable-header">
				{/* Title toggle */}
				<span className="sortable-title" onClick={toggleOpen}>
					{item.title || __("Gallery Image", "frontis-blocks")}
				</span>

				{/* Sort button */}
				<span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
					<Button icon={MoveIcon} label={__("Sort", "frontis-blocks")} />
				</span>

				{/* Delete button */}
				<span className="sortable-delete">
					<Button
						icon={TrashIcon}
						label={__("Delete", "frontis-blocks")}
						onClick={() => handleDeleteItem(item.id)}
					/>
				</span>
			</div>

			{isOpen && (
				<div className="sortable-item-content">
					<div className='fb-image-upload-field-wrapper'>
						<BaseControl
							className="fb-image-control-wrapper"
						>
							{item?.image?.url ? (
								<div className="fb-image-control" style={{ backgroundImage: `url(${item.image.url})` }}>
									<button
										className='fb-image-delete'
										onClick={() => handleRemoveMedia(item.id, 'image', { id: 0, url: '', alt: '', width: '', height: '' })}
									>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" strokeWidth="1.5"></path><path d="M15 9L9 15" stroke="#4D4D4D" strokeWidth="1.5"></path><path d="M9 9L15 15" stroke="#4D4D4D" strokeWidth="1.5"></path></svg>
									</button>
									<button
										className='fb-image-replace-btn'
										onClick={() => {
											const mediaUploader = wp.media({
												title: __('Select or Upload background Image', 'frontis-blocks'),
												button: {
													text: __('Use this image', 'frontis-blocks'),
												},
												multiple: false
											});

											mediaUploader.on('select', function () {
												const media = mediaUploader.state().get('selection').first().toJSON();
												handleChangeItem(item.id, 'image', { id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height });
											});

											mediaUploader.open();
										}}
									>
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"></path><path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"></path></svg>
										Replace
									</button>
								</div>
							) : (
								<button
									className='fb-image-upload-btn'
									onClick={() => {
										const mediaUploader = wp.media({
											title: __('Select or Upload background Image', 'frontis-blocks'),
											button: {
												text: __('Use this image', 'frontis-blocks'),
											},
											multiple: false
										});

										mediaUploader.on('select', function () {
											const media = mediaUploader.state().get('selection').first().toJSON();
											handleChangeItem(item.id, 'image', { id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height });
										});

										mediaUploader.open();
									}}
								>
									<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
									Upload
								</button>
							)}
						</BaseControl>

						{GalleryType == 'mesonry' &&
							<div className="fb-setting-spacing-container">
								<div className="fb-setting-spacing-inner-container">
									<div className="fb-setting-spacing-label-container">
										<FB_ResponsiveControl
											labelText={__("Column Span", "frontis-blocks")}
											device={deviceType}
										/>
									</div>
									<RangeControl
										value={deviceType === "Desktop" ? item.column?.desktop : deviceType === "Tablet" ? item.column?.tablet : item.column?.mobile}
										onChange={(value) => {
											if (deviceType === "Desktop") {
												handleChangeItem(item.id, 'column', { ...item.column, desktop: value });
											} else if (deviceType === "Tablet") {
												handleChangeItem(item.id, 'column', { ...item.column, tablet: value });
											} else if (deviceType === "Mobile") {
												handleChangeItem(item.id, 'column', { ...item.column, mobile: value });
											}
										}}
										min={1}
										max={deviceType === "Desktop" ? GalleryColumnNumber.Desktop : deviceType === "Tablet" ? GalleryColumnNumber.Tablet : GalleryColumnNumber.Mobile}
										allowReset
										resetFallbackValue={1}
										className="default-range"
									/>
								</div>
							</div>
						}

						{GalleryType == 'mesonry' &&
							<div className="fb-setting-spacing-container">
								<div className="fb-setting-spacing-inner-container">
									<div className="fb-setting-spacing-label-container">
										<FB_ResponsiveControl
											labelText={__("Row Span", "frontis-blocks")}
											device={deviceType}
										/>
									</div>
									<RangeControl
										value={deviceType === "Desktop" ? item.row?.desktop : deviceType === "Tablet" ? item.row?.tablet : item.row?.mobile}
										onChange={(value) => {
											if (deviceType === "Desktop") {
												handleChangeItem(item.id, 'row', { ...item.row, desktop: value });
											} else if (deviceType === "Tablet") {
												handleChangeItem(item.id, 'row', { ...item.row, tablet: value });
											} else if (deviceType === "Mobile") {
												handleChangeItem(item.id, 'row', { ...item.row, mobile: value });
											}
										}}
										min={1}
										max={4}
										allowReset
										resetFallbackValue={1}
										className="default-range"
									/>
								</div>
							</div>
						}
					</div>
				</div>
			)}
		</li>
	);
}
