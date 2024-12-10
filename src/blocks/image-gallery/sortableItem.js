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


export default function SortableItem({ deviceType, GalleryColumnNumberMobile, GalleryColumnNumberTablet, GalleryColumnNumberDesktop, GalleryType, id, item, handleChangeItem, handleDeleteItem, handleRemoveMedia, setAttributes }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const [isOpen, setIsOpen] = useState(false);
    // const [FeatureIconAlign, setFeatureIconAlign] = useState( ICON_ALIGN[1].value );

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const toggleOpen = () => setIsOpen(!isOpen);

    
    return (
        <li className="sortable-item" ref={setNodeRef} {...attributes} style={style}>
            <div className="sortable-header">
                {/* Title toggle */}
                <span className="sortable-title" onClick={toggleOpen}>
                    {item.title || __("Gallery Image", "frontis-blocks")}
                </span>

                {/* Sort button */}
                <span className="sortable-sort" {...listeners} style={{ cursor: 'grab' }}>
                    <Button icon="move" label={__("Sort", "frontis-blocks")} />
                </span>

                {/* Delete button */}
                <span className="sortable-delete">
                    <Button 
                        icon="trash" 
                        label={__("Delete", "frontis-blocks")} 
                        onClick={() => handleDeleteItem(item.id)} 
                    />
                </span>
            </div>

            {isOpen && (
                <div className="sortable-item-content">

                                                    <div className='fb-image-upload-field-wrapper'>
													
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => handleChangeItem(item.id, 'image' , {id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height}) }
																	type="image"
																	value={item.image.id}
																	render={({open}) => {
																		return (
																			<Button
																				className={item.image.id == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{item.image.id == 0 && __('Select Image', 'frontis-block')}
																				{item.image.id != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={item.image.width}
																						naturalHeight={item.image.height}>
																						<img
																							src={item.image.url}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{item.image.id != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => handleRemoveMedia( item.id, 'image', {id: 0, url: '', alt: '', width: '', height: ''} )}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={item.image.id}
																			onSelect={(media) => handleChangeItem(item.id, 'image' , {id: media.id, url: media.url, alt: media.alt, width: media.width, height: media.height}) }
																			type="image"
																			render={({open}) => (
																				<Button
																					className='editor-post-featured-image__action'
																					onClick={open}>{__('Replace', 'frontis-block')}</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															}
														</BaseControl>

														{ GalleryType == 'mesonry' &&
															<div className="fb-setting-columns-wrapper">
																<div className="fb-setting-columns-header">
																	<FB_ResponsiveControl
																		labelText={__("Column Span", "frontis-blocks")}
																		device={deviceType}
																		deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
																	/>
																</div>
																<div className="fb-setting-columns-rangecontrol">
																	<RangeControl
																		value={deviceType === "Desktop" ? item.column?.desktop : deviceType === "Tablet" ? item.column?.tablet : item.column?.mobile}
																		onChange={(value) => {
																			if (deviceType === "Desktop") {
																				handleChangeItem(item.id, 'column', {...item.column, desktop: value});
																			} else if (deviceType === "Tablet") {
																				handleChangeItem(item.id, 'column', {...item.column, tablet: value});
																			} else if (deviceType === "Mobile") {
																				handleChangeItem(item.id, 'column', {...item.column, mobile: value});
																			}
																		}}
																		min={1}
																		max={deviceType === "Desktop" ? GalleryColumnNumberDesktop : deviceType === "Tablet" ? GalleryColumnNumberTablet : GalleryColumnNumberMobile}
																		allowReset
																		resetFallbackValue={0}
																	/>
																</div>
															</div>
														// <FB_Range
														// 	label={__("Column Span", "frontis-blocks")}
														// 	min={1}
														// 	max={deviceType === "Desktop" ? GalleryColumnNumberDesktop : deviceType === "Tablet" ? GalleryColumnNumberTablet : GalleryColumnNumberMobile}
														// 	rangeValue={deviceType === "Desktop" ? item.column?.desktop : deviceType === "Tablet" ? item.column?.tablet : item.column?.mobile}
														// 	onChangeHandler={(value) => {
														// 		if (deviceType === "Desktop") {
														// 			handleChangeItem(item.id, 'column', {...item.column, desktop: value});
														// 		} else if (deviceType === "Tablet") {
														// 			handleChangeItem(item.id, 'column', {...item.column, tablet: value});
														// 		} else if (deviceType === "Mobile") {
														// 			handleChangeItem(item.id, 'column', {...item.column, mobile: value});
														// 		}
														// 	}}
														// 	deviceType={deviceType}
														// 	setAttributes={setAttributes}
														// 	rangeStep={1}
														// 	resetFallbackValue={0}
														// 	isRangeUnit={false}
														// />
															
														}
														

														{ GalleryType == 'mesonry' &&
															<div className="fb-setting-columns-wrapper">
																<div className="fb-setting-columns-header">
																	<FB_ResponsiveControl
																		labelText={__("Row Span", "frontis-blocks")}
																		device={deviceType}
																		deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
																	/>
																</div>
																<div className="fb-setting-columns-rangecontrol">
																	<RangeControl
																		value={deviceType === "Desktop" ? item.row?.desktop : deviceType === "Tablet" ? item.row?.tablet : item.row?.mobile}
																		onChange={(value) => {
																			if (deviceType === "Desktop") {
																				handleChangeItem(item.id, 'row', {...item.row, desktop: value});
																			} else if (deviceType === "Tablet") {
																				handleChangeItem(item.id, 'row', {...item.row, tablet: value});
																			} else if (deviceType === "Mobile") {
																				handleChangeItem(item.id, 'row', {...item.row, mobile: value});
																			}
																		}}
																		min={1}
																		max={4}
																		allowReset
																		resetFallbackValue={0}
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
