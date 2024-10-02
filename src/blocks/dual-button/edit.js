import { __ } from '@wordpress/i18n';
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
		connectorSwitcher
    } = attributes;

    const blockProps = useBlockProps();


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

            <div {...blockProps} id={blockID}>
                <div className={`fb-advanced-button-wrapper ${blockID}`} >
					<div className="fb-dual-button-wrapper" style={{ justifyContent: ButtonAlignment }}>
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button"
								href={ButtonUrl}
								target={ButtonTargetUrl ? '_blank' : undefined}
								rel={ButtonTargetUrl ? 'noopener noreferrer' : undefined}
								onClick={handleButtonClick}
							>
								<RichText
									tagName="span"
									value={ButtonText}
									onChange={(value) => setAttributes({ButtonText: value})}
									placeholder={__('Enter button text...', 'frontis-blocks')}
									className="fb-advanced-button-text"
								/>
								<div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
							</a>
						</div>
						{connectorSwitcher && (
						<div className="fb-dual-button-connector">
							<RichText
								tagName="span"
								value={connectorText}
								onChange={(value) => setAttributes({connectorText: value})}
								placeholder={__('Enter connector text...', 'frontis-blocks')}
								className="fb-dual-button-connector-text"
							/>
						</div>
						)}
						<div className="fb-dual-button-one-wrapper">
							<a
								className="fb-advanced-button"
								href={ButtonTwoUrl}
								target={ButtonTwoTargetUrl ? '_blank' : undefined}
								rel={ButtonTwoTargetUrl ? 'noopener noreferrer' : undefined}
								onClick={handleButtonClick}
							>
								<RichText
									tagName="span"
									value={ButtonTwoText}
									onChange={(value) => setAttributes({ButtonTwoText: value})}
									placeholder={__('Enter button text...', 'frontis-blocks')}
									className="fb-advanced-button-text"
								/>
								<div className="fb-advanced-button-icon">{renderSVG(ButtonTwoIcon)}</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
