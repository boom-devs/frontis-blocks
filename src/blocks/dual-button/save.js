import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		ButtonAlignment,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonIcon,
		ButtonTwoText,
		ButtonTwoIcon,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		connectorText,
		connectorSwitcher
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-advanced-button-wrapper ${blockID}`}>
				<div className="fb-dual-button-wrapper" style={{ justifyContent: ButtonAlignment }}>
					<div className="fb-dual-button-one-wrapper">
						<a
							className="fb-advanced-button"
							href={ButtonUrl}
							target={ButtonTargetUrl ? '_blank' : undefined}
							rel={ButtonTargetUrl ? 'noopener noreferrer' : undefined}
						>
							<RichText.Content
								tagName="span"
								value={ButtonText}
								className="fb-advanced-button-text"
							/>
							<div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
						</a>
					</div>
					{connectorSwitcher && (
						<div className="fb-dual-button-connector">
							<RichText.Content
								tagName="span"
								value={connectorText}
								className="fb-dual-button-connector-text"
							/>
						</div>
					)}
					<div className="fb-dual-button-one-wrapper">
						<a
							className="fb-advanced-button fb-dual-button-two"
							href={ButtonTwoUrl}
							target={ButtonTwoTargetUrl ? '_blank' : undefined}
							rel={ButtonTwoTargetUrl ? 'noopener noreferrer' : undefined}
						>
							<RichText.Content
								tagName="span"
								value={ButtonTwoText}
								className="fb-advanced-button-text"
							/>
							<div className="fb-advanced-button-icon">{renderSVG(ButtonTwoIcon)}</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
