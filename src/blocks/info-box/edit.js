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

export default function Edit({ attributes, setAttributes}) {
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
        wrapperAlignment

    } = attributes;

    const blockProps = useBlockProps();

    // Define a variable to hold the separator styles based on separator
    const separatorStyles = Show_Separator_Switcher ? {
        display: 'inline-block',
        margin: '0 0 10px 0',
        width: '12%',
        borderTop: `2px ${separator} #0170b9`,
        marginBottom: '15px'
    } : {};

    return (
        <>

            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />



            <div {...blockProps} id={blockID}>
                <div className={`sh-info-box-content-wrapper ${blockID}`} >
                    <div className="sh-info-media-wrapper" style={{textAlign: wrapperAlignment}}>
                    <img src={attributes.infoMediaUrl}
                         style={{width: `${attributes.width}px`, height: `${attributes.height}px`}}
                    />
                    </div>

                    <RichText
                        tagName={Heading_Tag}
                        value={Heading_Text}
                        onChange={(value) => setAttributes({text: value})}
                        placeholder={__('Info Heading', 'frontis-block')}
                        className="sh-heading"
                        style={{textAlign: Alignment}}
                    />

                    {Sub_Heading_Switcher && Sub_Heading_Position === 'top' && (
                        <RichText
                            tagName={Sub_Heading_Tag}
                            value={Sub_Heading_Text}
                            onChange={(value) => setAttributes({Sub_Heading_Text: value})}
                            placeholder={__('Info description', 'frontis-block')}
                            className="sh-description"
                        />
                    )}

                    {Sub_Heading_Switcher && Sub_Heading_Position === 'bottom' && (
                        <RichText
                            tagName={Sub_Heading_Tag}
                            value={Sub_Heading_Text}
                            onChange={(value) => setAttributes({Sub_Heading_Text: value})}
                            placeholder={__('Info description', 'frontis-block')}
                            className="sh-description"
                        />
                    )}
                    {info_Button_Switcher && (
                        <a
                            href={info_Button_Link}
                            className="sh-info-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {info_Button_Text}
                        </a>
                    )}


                </div>
            </div>
        </>
    );
}
