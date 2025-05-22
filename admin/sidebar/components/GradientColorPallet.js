import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    Popover,
    Dashicon,
    GradientPicker,
    ColorIndicator,
    PanelRow,
    TextControl
} from "@wordpress/components";

const GradientColorPallet = (props) => {
    const {
        title = "",
        colors,
        setColor,
        setColors,
        wrapperClass,
        resetAction,
        deleteAction,
        enableEditName = false,
        onDelete
    } = props

    const [clickedGradient, setClickedGradient] = useState('');
    const [gradientPopoverAnchor, setGradientPopoverAnchor] = useState();

    const editColorName = (index, value) => {
        let cloneColors = [...colors]
        cloneColors[index] = {
            ...cloneColors[index],
            name: value
        }
        setColors([...cloneColors])
    }

    return (
        <>
            {colors && colors.length > 0 && (
                <div className={`fb-color-panel ${wrapperClass}`}>
                    <PanelRow className="fb-gradient-color-label">{title}</PanelRow>
                    <div className="fb-custom-panel fb-gradient-color-list">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                ref={setGradientPopoverAnchor}
                                id={`fb-gradient-color-${index}`}
                                className="fb-custom-element fb-custom-color-item"
                            >
                                <div
                                    className="item-content"
                                    onClick={() => !enableEditName && setClickedGradient(clickedGradient === color.slug ? '' : color.slug)}
                                >
                                    <ColorIndicator
                                        onClick={() => setClickedGradient(clickedGradient === color.slug ? '' : color.slug)}
                                        colorValue={color?.color}
                                    />
                                    {enableEditName && (
                                        <TextControl
                                            className={'fb-custom-element__edit-input'}
                                            value={color.name || ''}
                                            onChange={(text) => editColorName(index, text)}
                                        />
                                    )}
                                    {!enableEditName && (
                                        color?.name
                                    )}
                                </div>
                                <div className="actions">
                                    {resetAction && (
                                        <span
                                            className={'fb-reset'}
                                            title="Reset"
                                            onClick={() => setColor(index, 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)')}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6817 6.23162H14.0101V6.23044M1.98926 13.0956V9.76718M1.98926 9.76718L5.31768 9.76718M1.98926 9.76718L4.10985 11.8892C4.7702 12.5507 5.60824 13.0527 6.57607 13.312C9.51014 14.0982 12.526 12.357 13.3122 9.42292M2.68699 6.57591C3.47317 3.64184 6.48902 1.90064 9.42308 2.68682C10.3909 2.94615 11.229 3.4481 11.8893 4.10969L14.0101 6.23044M14.0101 2.90322V6.23044" stroke="#555E72"></path></svg>
                                        </span>
                                    )}
                                    {deleteAction && (
                                        <span
                                            className={'fb-delete'}
                                            title="Delete"
                                            onClick={() => onDelete(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M13 4.16675L12.5869 10.8501C12.4813 12.5577 12.4285 13.4115 12.0005 14.0253C11.7889 14.3288 11.5165 14.5849 11.2005 14.7774C10.5614 15.1667 9.706 15.1667 7.99513 15.1667C6.28208 15.1667 5.42553 15.1667 4.78603 14.7767C4.46987 14.5839 4.19733 14.3273 3.98579 14.0233C3.55792 13.4085 3.5063 12.5535 3.40307 10.8435L3 4.16675" stroke="#E43242" stroke-linecap="round" />
                                                <path d="M2 4.16659H14M10.7038 4.16659L10.2487 3.22774C9.9464 2.60409 9.7952 2.29227 9.53447 2.09779C9.47667 2.05465 9.4154 2.01628 9.35133 1.98305C9.0626 1.83325 8.71607 1.83325 8.023 1.83325C7.31253 1.83325 6.95733 1.83325 6.66379 1.98933C6.59873 2.02393 6.53665 2.06385 6.47819 2.1087C6.21443 2.31105 6.06709 2.63429 5.77241 3.28076L5.36861 4.16659" stroke="#E43242" stroke-linecap="round" />
                                                <path d="M6.3335 11.5V7.5" stroke="#E43242" stroke-linecap="round" />
                                                <path d="M9.6665 11.5V7.5" stroke="#E43242" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    )}
                                </div>

                                {clickedGradient === color?.slug && (
                                    <Popover
                                        anchor={gradientPopoverAnchor}
                                        className="fb-gradient-color-popup"
                                        placement="right"
                                        onClose={() => setClickedGradient('')}
                                    >
                                        <div className="fb-gradient-color-popup-content">
                                            <GradientPicker
                                                __nextHasNoMargin
                                                value={color?.color}
                                                onChange={(color) => setColor(index, color)}
                                                asButtons={true}
                                                clearable={true}
                                                gradients={[
                                                    {
                                                        name: color?.name,
                                                        gradient: color?.color,
                                                        slug: color?.slug,
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </Popover>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default GradientColorPallet
