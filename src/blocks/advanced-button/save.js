import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockID,
        DeviceType,
        ButtonAlignment,
        ButtonText,

    } = attributes;

    const blockProps = useBlockProps.save({
        id: blockID,
    });


    return (
        <>
            <div {...blockProps}>
                <div className="fb-advanced-button-wrapper" style={{textAlign: ButtonAlignment}}>
                    <RichText.Content
                        value={ButtonText}
                        className= "fb-advanced-button"
                    />
                </div>
            </div>
        </>
    );
}
