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
import {Card} from "@wordpress/components";
export default function Edit({ attributes, setAttributes, clientId}) {
    const {
        blockID,
        Heading_Text,
        Heading_Tag,
        Alignment,
        Sub_Heading_Switcher,
        Sub_Heading_Text,
        Sub_Heading_Tag,
        wrapperAlignment,
		descAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
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
					onChange={(value) => setAttributes({ contentAlignment: value })}
					controls={['left', 'center', 'right', 'justify']}
				/>
			</BlockControls>

            <div {...blockProps} id={blockID}>
				<div
					className={`fb-info-box-content-wrapper ${blockID}`}
				>
                <div className={`fb-info-box-content-wrapper-inner ${blockID}`} >
					<div className="fb-info-media-wrapper" style={{textAlign: wrapperAlignment}}>
						{mediaSwitcher === 'image' && (
						<img src={attributes.infoMediaUrl}

						/>
							)}
						{mediaSwitcher === 'icon' && (
						<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
						)}
					</div>

					<RichText
                        tagName={Heading_Tag}
                        value={Heading_Text}
                        onChange={(value) => setAttributes({text: value})}
                        placeholder={__('Info Heading', 'frontis-block')}
                        className="fb-heading"
                        style={{textAlign: Alignment}}
                    />

                    {Sub_Heading_Switcher && (
                        <RichText
                            tagName={Sub_Heading_Tag}
                            value={Sub_Heading_Text}
                            onChange={(value) => setAttributes({Sub_Heading_Text: value})}
                            placeholder={__('Info description', 'frontis-block')}
                            className="fb-description"
							style={{textAlign: descAlignment}}
                        />
                    )}
				</div>
				</div>
			</div>
		</>
	);
}
