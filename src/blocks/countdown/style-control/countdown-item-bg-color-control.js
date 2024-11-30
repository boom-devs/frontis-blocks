import { __ } from '@wordpress/i18n';

import FB_Range from "@Components/range";
import FB_Color from "@Components/color";
import {BaseControl, SelectControl, ToggleControl} from "@wordpress/components";
import {
	SELECT_BG_IMAGE_ATTACHMENT_TYPE,
	SELECT_BG_IMAGE_POSITION_TYPE,
	SELECT_BG_IMAGE_REPEAT_TYPE, SELECT_BG_IMAGE_SIZE_TYPE
} from "@Blocks/flip-box/constants/constants";
import {useEffect} from "@wordpress/element";
export default function CountDownItemBgColorControl ({ attributes, setAttributes}) {

	const {
		countDownItemBgColorSwitcher,
		countDownItemBgColor,
		countDownItemBgHoverColor,

		/** Background Image */
		countDownItemBgImageEnabled,
		countDownItemBgImageUrl,
		countDownItemBgImageAlt,
		countDownItemBgImageID,

		countDownItemBgImagePositionType,
		countDownItemBgImageAttachmentType,
		countDownItemBgImageRepeatType,
		countDownItemBgImageSizeType,

	} = attributes;


	const handleColorSwitcherChange = (value) => {
		setAttributes({ countDownItemBgColorSwitcher: value });
	};
	const handleGlobalColorChange = (value) => {
		setAttributes({ countDownItemBgColor: value });
	};
	const handleGlobalHoverColorChange = (value) => {
		setAttributes({ countDownItemBgHoverColor: value });
	};

	/** Background Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.svg';
	}

	// Set default value for countDownItemBackgroundImageUrl
	useEffect(() => {
		if (!countDownItemBgImageUrl) {
			setAttributes({ countDownItemBgImageUrl: defaultImageUrl });
		}
	}, []);


	return (
	<>
		<FB_Color
			label={__("Background Color", "frontis-blocks")}
			globalColorSwitcher={countDownItemBgColorSwitcher}
			globalColor={countDownItemBgColor}
			globalHoverColor={countDownItemBgHoverColor}
			handleColorSwitcherChange={handleColorSwitcherChange}
			handleGlobalColorChange={handleGlobalColorChange}
			handleGlobalHoverColorChange={handleGlobalHoverColorChange}
		/>
		<ToggleControl
			label={__("Enable Background Image", "frontis-blocks")}
			checked={
			countDownItemBgImageEnabled}
			onChange={(value) => setAttributes({
				countDownItemBgImageEnabled: value })}
		/>

		{
			countDownItemBgImageEnabled && (
			<>
				<BaseControl
					label={__("Background Image", "frontis-blocks")}
					className="fb-advanced-heading-bg-image"
				>
					{
						countDownItemBgImageUrl ? (
						<div className="fb-image-avatar-control" style={{backgroundImage: `url(${
							countDownItemBgImageUrl})`}}>
							<button
								className='fb-image-avatar-delete'
								onClick={() => {
									setAttributes({

										countDownItemBgImageUrl: null,

										countDownItemBgImageAlt: null,

										countDownItemBgImageID: null,
									});
								}}
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
							</button>
							<button
								className='fb-image-replace-btn'
								onClick={() => {
									const mediaUploader = wp.media({
										title: __('Select or Upload Background Image', 'frontis-blocks'),
										button: {
											text: __('Use this image', 'frontis-blocks'),
										},
										multiple: false
									});

									mediaUploader.on('select', function() {
										const attachment = mediaUploader.state().get('selection').first().toJSON();
										setAttributes({

											countDownItemBgImageUrl: attachment.url,

											countDownItemBgImageAlt: attachment.alt,

											countDownItemBgImageID: attachment.id,
										});
									});

									mediaUploader.open();
								}}
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
								Replace
							</button>
						</div>
					) : (
						<button
							className='fb-image-upload-btn'
							onClick={() => {
								const mediaUploader = wp.media({
									title: __('Select or Upload Background Image', 'frontis-blocks'),
									button: {
										text: __('Use this image', 'frontis-blocks'),
									},
									multiple: false
								});

								mediaUploader.on('select', function() {
									const attachment = mediaUploader.state().get('selection').first().toJSON();
									setAttributes({

										countDownItemBgImageUrl: attachment.url,

										countDownItemBgImageAlt: attachment.alt,

										countDownItemBgImageID: attachment.id,
									});
								});

								mediaUploader.open();
							}}
						>
							<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
							Upload
						</button>
					)}
				</BaseControl>

				<SelectControl
					label={__("Background Position", "frontis-blocks")}
					value={countDownItemBgImagePositionType}
					options={SELECT_BG_IMAGE_POSITION_TYPE}
					onChange={(value) => setAttributes({ countDownItemBgImagePositionType: value })}
				/>

				<SelectControl
					label={__("Background Attachment", "frontis-blocks")}
					value={countDownItemBgImageAttachmentType}
					options={SELECT_BG_IMAGE_ATTACHMENT_TYPE}
					onChange={(value) => setAttributes({ countDownItemBgImageAttachmentType: value })}
				/>
				<SelectControl
					label={__("Background Repeat", "frontis-blocks")}
					value={countDownItemBgImageRepeatType}
					options={SELECT_BG_IMAGE_REPEAT_TYPE}
					onChange={(value) => setAttributes({ countDownItemBgImageRepeatType: value })}
				/>

				<SelectControl
					label={__("Background Size", "frontis-blocks")}
					value={countDownItemBgImageSizeType}
					options={SELECT_BG_IMAGE_SIZE_TYPE}
					onChange={(value) => setAttributes({ countDownItemBgImageSizeType: value })}
				/>
			</>
		)}

	</>
	);
};
