import {__} from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import {Card} from "@wordpress/components";

export default function Edit({attributes, setAttributes, clientId}) {
	const {
		blockID,
		headingText,
		Heading_Tag,
		Alignment,
		separator,
		Sub_Heading_Switcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		info_Button_Switcher,
		info_Button_Text,
		info_Button_Link,
		wrapperAlignment,
		infoBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment

	} = attributes;

	const blockProps = useBlockProps();

	return (
		<>

			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={contentAlignment}
					onChange={(value) => setAttributes({contentAlignment: value})}
					controls={['left', 'center', 'right', 'justify']}
				/>
			</BlockControls>

			<div {...blockProps} id={blockID}>
				<div className="fb-cta-main-wrapper">
					<Card
						className={`fb-cta-content-wrapper ${blockID}`}
					>
						<div className={`fb-cta-content-wrapper-inner ${blockID}`}>
							<div className="fb-cta-desc-wrapper">
								<RichText
									tagName={Heading_Tag}
									value={headingText}
									onChange={(value) => setAttributes({text: value})}
									placeholder={__('CTA Title', 'frontis-block')}
									className="fb-heading"
									style={{textAlign: Alignment}}
								/>
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) => setAttributes({Sub_Heading_Text: value})}
									placeholder={__('CTA description', 'frontis-block')}
									className="fb-description"
									style={{textAlign: descAlignment}}
								/>
							</div>

							{info_Button_Switcher && (
								<div className="fb-info-btn-wrapper">
									<RichText
										value={info_Button_Text}
										onChange={(value) => setAttributes({info_Button_Text: value})}
										placeholder={__('Info Button', 'frontis-block')}
										className="fb-info-button"
										style={{textAlign: buttonAlignment}}
									/>
								</div>

							)}

						</div>
					</Card>
				</div>

			</div>
		</>
	);
}
