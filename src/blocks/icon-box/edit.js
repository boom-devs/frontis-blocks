import { __ } from '@wordpress/i18n';

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

export default function Edit({ attributes, setAttributes, clientId}) {
    const {
        blockID,
        Heading_Text,
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
		icon
    } = attributes;

    const blockProps = useBlockProps();

    return (
        <>

            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div {...blockProps} id={blockID}>
                <div className={`fb-info-box-content-wrapper ${blockID}`} style={{ backgroundColor: infoBoxBg }}>
					<div className="fb-info-media-wrapper" style={{textAlign: wrapperAlignment}}>
						<img src={attributes.infoMediaUrl}
							 style={{width: `${attributes.width}px`, height: `${attributes.height}px`}}
						/>
						<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
					</div>

					<RichText
						tagName={Heading_Tag}
                        value={Heading_Text}
                        onChange={(value) => setAttributes({text: value})}
                        placeholder={__('Info Heading', 'frontis-block')}
                        className="fb-heading"
                        style={{textAlign: Alignment}}
                    />

                    {Sub_Heading_Switcher && Sub_Heading_Position === 'top' && (
                        <RichText
                            tagName={Sub_Heading_Tag}
                            value={Sub_Heading_Text}
                            onChange={(value) => setAttributes({Sub_Heading_Text: value})}
                            placeholder={__('Info description', 'frontis-block')}
                            className="fb-description"
							style={{textAlign: descAlignment}}
                        />
                    )}

                    {Sub_Heading_Switcher && Sub_Heading_Position === 'bottom' && (
                        <RichText
                            tagName={Sub_Heading_Tag}
                            value={Sub_Heading_Text}
                            onChange={(value) => setAttributes({Sub_Heading_Text: value})}
                            placeholder={__('Info description', 'frontis-block')}
                            className="fb-description"
							style={{textAlign: descAlignment}}
                        />
                    )}
                    {info_Button_Switcher && (
						<div className="fb-info-btn-wrapper" style={{textAlign: buttonAlignment}}>
							<a
								href={info_Button_Link}
								className="fb-info-button"
								target="_blank"
								rel="noopener noreferrer"

							>
								{info_Button_Text}
							</a>
						</div>

					)}


				</div>
			</div>
		</>
	);
}
