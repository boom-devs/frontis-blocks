import { __ } from '@wordpress/i18n';
import { useRef } from "@wordpress/element";
import {
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
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
    } = attributes;

    const blockProps = useBlockProps({
		className: `fb-dual-button-main-wrapper ${blockID}`,
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

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId = {clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={ButtonAlignment}
                    onChange={(value) => setAttributes({ ButtonAlignment: value })}
                    controls={['start', 'center', 'end', 'start']}
                />
            </BlockControls>

            <div {...blockProps} className={`fb-dual-button-area ${blockID}`} >
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
								style ={{
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
									value={ButtonText}
									onChange={(value) => setAttributes({ButtonText: value})}
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
								onChange={(value) => setAttributes({connectorText: value})}
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
								style = {{
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
									value={ButtonTwoText}
									onChange={(value) => setAttributes({ButtonTwoText: value})}
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
		</>
	);
}
