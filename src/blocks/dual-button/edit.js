import { __ } from '@wordpress/i18n';
import { useRef, memo } from "@wordpress/element";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';
import DynamicTextValue from '@Components/dynamic-text-value';

import Inspector from "./inspector";

function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockID,
		blockStyle,
		DeviceType,
		ButtonAlignment,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonWidth,
		ButtonIcon,
		ButtonZIndex,
		ButtonTwoText,
		ButtonTwoIcon,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		connectorText,
		connectorSwitcher,
		buttonIconAlign,
		buttonTwoIconAlign,
		btnIconPosition,
		btnTwoIconPosition,
		buttonsDirection,

		dualButtonGlobalWraperID,
		dualButtonGlobalWraperClass,

		dualBtnDesktopSwitcher,
		dualBtnTabletSwitcher,
		dualBtnMobileSwitcher,

		/** Start Dynamic Btn One Text */
		dynamicBtnOneEnabled,
		dynamicBtnOneSource,
		dynamicBtnOnePostId,
		dynamicBtnOnePostType,
		dynamicBtnOnePostLabel,
		dynamicBtnOneField,
		dynamicBtnOneFeaturedImageField,

		dynamicBtnOneDateType,
		dynamicBtnOneDateFormat,

		dynamicBtnOneTimeType,
		dynamicBtnOneTimeFormat,

		dynamicBtnOneCommentsZeroText,
		dynamicBtnOneCommentsOneText,
		dynamicBtnOneCommentsManyText,

		dynamicBtnOneTermsTaxonomy,
		dynamicBtnOneTermsSeparator,
		dynamicBtnOneEnableLink,
		dynamicBtnOneLinkSource,
		/** End Dynamic Btn One Text */

		/** Start Dynamic Btn Two Text */
		dynamicBtnTwoEnabled,
		dynamicBtnTwoSource,
		dynamicBtnTwoPostId,
		dynamicBtnTwoPostType,
		dynamicBtnTwoPostLabel,
		dynamicBtnTwoField,
		dynamicBtnTwoFeaturedImageField,

		dynamicBtnTwoDateType,
		dynamicBtnTwoDateFormat,

		dynamicBtnTwoTimeType,
		dynamicBtnTwoTimeFormat,

		dynamicBtnTwoCommentsZeroText,
		dynamicBtnTwoCommentsOneText,
		dynamicBtnTwoCommentsManyText,

		dynamicBtnTwoTermsTaxonomy,
		dynamicBtnTwoTermsSeparator,
		dynamicBtnTwoEnableLink,
		dynamicBtnTwoLinkSource,
		/** End Dynamic Btn Two Text */
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-dual-button-main-wrapper ${blockID} ${dualBtnDesktopSwitcher && 'fb-desktop-responsive'} ${dualBtnTabletSwitcher && 'fb-tablet-responsive'} ${dualBtnMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};

	/**
	 * Dynamic Text Value for Button One Text
	 */
	const { dynamicDisplayValue: dynamicBtnOneValue, dynamicDisplayLink: dynamicBtnOneLink } = DynamicTextValue({
		textEnabled:            dynamicBtnOneEnabled,
		textSource:             dynamicBtnOneSource,
		textField:              dynamicBtnOneField,

		textPostId:             dynamicBtnOnePostId,
		textPostType:           dynamicBtnOnePostType,
		textPostLabel:          dynamicBtnOnePostLabel,

		textFeaturedImageField: dynamicBtnOneFeaturedImageField,

		textDateType:           dynamicBtnOneDateType,
		textDateFormat:         dynamicBtnOneDateFormat,
		textTimeType:           dynamicBtnOneTimeType,
		textTimeFormat:         dynamicBtnOneTimeFormat,

		textCommentsZeroText:   dynamicBtnOneCommentsZeroText,
		textCommentsOneText:    dynamicBtnOneCommentsOneText,
		textCommentsManyText:   dynamicBtnOneCommentsManyText,

		textTermsTaxonomy:      dynamicBtnOneTermsTaxonomy,
		textTermsSeparator:     dynamicBtnOneTermsSeparator,

		textLinkEnabled:        dynamicBtnOneEnableLink,
		textLinkSource:         dynamicBtnOneLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Button Two Text
	 */
	const { dynamicDisplayValue: dynamicBtnTwoValue, dynamicDisplayLink: dynamicBtnTwoLink } = DynamicTextValue({
		textEnabled:            dynamicBtnTwoEnabled,
		textSource:             dynamicBtnTwoSource,
		textField:              dynamicBtnTwoField,

		textPostId:             dynamicBtnTwoPostId,
		textPostType:           dynamicBtnTwoPostType,
		textPostLabel:          dynamicBtnTwoPostLabel,

		textFeaturedImageField: dynamicBtnTwoFeaturedImageField,

		textDateType:           dynamicBtnTwoDateType,
		textDateFormat:         dynamicBtnTwoDateFormat,
		textTimeType:           dynamicBtnTwoTimeType,
		textTimeFormat:         dynamicBtnTwoTimeFormat,

		textCommentsZeroText:   dynamicBtnTwoCommentsZeroText,
		textCommentsOneText:    dynamicBtnTwoCommentsOneText,
		textCommentsManyText:   dynamicBtnTwoCommentsManyText,

		textTermsTaxonomy:      dynamicBtnTwoTermsTaxonomy,
		textTermsSeparator:     dynamicBtnTwoTermsSeparator,

		textLinkEnabled:        dynamicBtnTwoEnableLink,
		textLinkSource:         dynamicBtnTwoLinkSource,

		context,
	});

	return (
		<>
			<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>

			<BlockControls>
				<AlignmentToolbar
					value={ButtonAlignment}
					onChange={(value) => setAttributes({ ButtonAlignment: value })}
					controls={['start', 'center', 'end', 'start']}
				/>
			</BlockControls>

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-dual-button-container ${blockID} ${dualButtonGlobalWraperClass}`} id={dualButtonGlobalWraperID} ref={panelRef}>
					<div className="fb-dual-button-wrapper" style={{
						justifyContent: ButtonAlignment,
						flexDirection:
							buttonsDirection === "vertical"
								? "row"
								: buttonsDirection === "horizontal"
									? "column"
									: "row",
					}}>
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button fb-dual-button-one"
								href={ButtonUrl}
								target={ButtonTargetUrl ? '_blank' : undefined}
								rel={ButtonTargetUrl ? 'noopener noreferrer' : undefined}
								onClick={handleButtonClick}
								style={{
									flexDirection:
										btnIconPosition === "left"
											? "row-reverse"
											: btnIconPosition === "right"
												? "row"
												: "row-reverse",
								}}
							>
								{buttonIconAlign !== 'icon-only' && (
									<RichText
										tagName="span"
										value={dynamicBtnOneEnabled ? dynamicBtnOneValue : ButtonText}
										onChange={(value) => {
											if (!dynamicBtnOneEnabled) setAttributes({ ButtonText: value });
										}}
										placeholder={__('Enter button text...', 'frontis-blocks')}
										className="fb-advanced-button-text"
									/>
								)}
								{buttonIconAlign === 'icon-text' && (
									<div className={`fb-advanced-button-icon-wrapper`}>
										<div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
									</div>
								)}
								{buttonIconAlign === 'icon-only' && (
									<div className={`fb-advanced-button-icon-wrapper`}>
										<div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
									</div>
								)}
							</a>
						</div>
						{connectorSwitcher && (
							<div className="fb-dual-button-connector">
								<RichText
									tagName="span"
									value={connectorText}
									onChange={(value) => setAttributes({ connectorText: value })}
									placeholder={__('Or', 'frontis-blocks')}
									className="fb-dual-button-connector-text"
								/>
							</div>
						)}
						<div className="fb-dual-button-two-wrapper">
							<a
								className="fb-advanced-button  fb-dual-button-two"
								href={ButtonTwoUrl}
								target={ButtonTwoTargetUrl ? '_blank' : undefined}
								rel={ButtonTwoTargetUrl ? 'noopener noreferrer' : undefined}
								onClick={handleButtonClick}
								style={{
									flexDirection:
										btnTwoIconPosition === "left"
											? "row-reverse"
											: btnTwoIconPosition === "right"
												? "row"
												: "row-reverse",

								}}
							>
								{buttonTwoIconAlign !== 'icon-only' && (
									<RichText
										tagName="span"
										value={dynamicBtnTwoEnabled ? dynamicBtnTwoValue : ButtonTwoText}
										onChange={(value) => {
											if (!dynamicBtnTwoEnabled) setAttributes({ ButtonTwoText: value });
										}}
										placeholder={__('Enter button text...', 'frontis-blocks')}
										className="fb-advanced-button-text"
									/>
								)}
								{buttonTwoIconAlign === 'icon-text' && (
									<div className={`fb-advanced-button-icon-wrapper`}>
										<div className="fb-advanced-button-icon">{renderSVG(ButtonTwoIcon)}</div>
									</div>
								)}
								{buttonTwoIconAlign === 'icon-only' && (
									<div className={`fb-advanced-button-icon-wrapper`}>
										<div className="fb-advanced-button-icon">{renderSVG(ButtonTwoIcon)}</div>
									</div>
								)}
							</a>
						</div>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}

export default memo(Edit);
