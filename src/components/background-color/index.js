// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    ButtonGroup, 
    BaseControl, 
    Dropdown, 
    ColorPicker, 
    Dashicon, 
    ColorPalette,
    GradientPicker,
    ToggleControl,
    TextareaControl,
    SelectControl,
    
} from '@wordpress/components';
import './editor.lazy.scss';

const FB_BackgroundColor = ({
    bgColorSwitcher,
    setBgColorSwitcher,

    normalBackgroundType,
    setNormalBackgroundType,
    normalClassicColor,
    setNormalClassicColor,
    normalGradientColor=null,
    setNormalGradientColor,
    normalCustomGradientSwitcher,
    setNormalCustomGradientSwitcher,
    normalCustomGradientInputValue,
    setNormalCustomGradientInputValue,
    normalBackgroundImageUrl,
    setNormalBackgroundImageUrl,
    normalBackgroundImageAlt,
    setNormalBackgroundImageAlt,
    normalBackgroundImageID,
    setNormalBackgroundImageID,
    normalBackgroundImagePosition = '',
    setNormalBackgroundImagePosition,
    normalBackgroundImageAttachment = '',
    setNormalBackgroundImageAttachment,
    normalBackgroundImageRepeat = '',
    setNormalBackgroundImageRepeat,
    normalBackgroundImageSize = '',
    setNormalBackgroundImageSize,

    hoverBackgroundType,
    setHoverBackgroundType,
    hoverClassicColor,
    setHoverClassicColor,
    hoverGradientColor=null,
    setHoverGradientColor,
    hoverCustomGradientSwitcher,
    setHoverCustomGradientSwitcher,
    hoverCustomGradientInputValue,
    setHoverCustomGradientInputValue,
    hoverBackgroundImageUrl,
    setHoverBackgroundImageUrl,
    hoverBackgroundImageAlt,
    setHoverBackgroundImageAlt,
    hoverBackgroundImageID,
    setHoverBackgroundImageID,
    hoverBackgroundImagePosition = '',
    setHoverBackgroundImagePosition,
    hoverBackgroundImageAttachment = '',
    setHoverBackgroundImageAttachment,
    hoverBackgroundImageRepeat = '',
    setHoverBackgroundImageRepeat,
    hoverBackgroundImageSize = '',
    setHoverBackgroundImageSize,
}) => {

    const NORMAL_HOVER = [
        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
    ];

    const BACKGROUND_TYPES = [
        { label: __('Classic', 'frontis-blocks'), value: 'classic' },
        { label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
    ];


    return (

        <>
            <div className="fb-setting-background-color-container-switcher">
                <BaseControl
                    className="fb-setting-background-color-panel-wrapper"
                >
                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                        {NORMAL_HOVER.map((item, key) => (
                            <Button
                            key={key}
                                onClick={() => setBgColorSwitcher(item.value)} 
                                className={`fb-setting-background-color-panel-btn-switcher ${bgColorSwitcher === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>
            </div>

            {bgColorSwitcher === 'normal' && (
                <BaseControl
                    className="fb-setting-background-color-setting-wrapper"
                    label={__("Background Type", "frontis-blocks")}
                >
                    <Dropdown
                        className="fb-setting-background-color-setting-icon-dropdown"
                        contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <Button
                                variant="primary"
                                onClick={onToggle}
                                aria-expanded={isOpen}
                                className="fb-setting-background-color-setting-icon-btn"
                            >
                                <Dashicon icon="color-picker" className="fb-setting-background-color-setting-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="fb-setting-background-color-popup-wrapper">
                                <BaseControl
                                    className="fb-setting-background-color-popup-inner-wrapper"
                                >
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {BACKGROUND_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setNormalBackgroundType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${normalBackgroundType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {normalBackgroundType === 'classic' && (

                                    <>
                                        <BaseControl
                                            label={__("Color", "frontis-blocks")}
                                            className="fb-setting-background-color-setting-wrapper"
                                        >
                                            <Dropdown
                                                className="fb-setting-background-color-setting-icon-dropdown"
                                                contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                                popoverProps={{ placement: 'bottom-start' }}
                                                renderToggle={({ isOpen, onToggle }) => (
                                                    <Button
                                                        variant="primary"
                                                        onClick={onToggle}
                                                        aria-expanded={isOpen}
                                                        className="fb-setting-background-color-setting-icon-btn"
                                                    >
                                                        <Dashicon icon="color-picker" className="fb-setting-background-color-setting-icon" />
                                                    </Button>
                                                )}
                                                renderContent={() => (
                                                    <div className="fb-setting-background-color-setting-icon-popup">
                                                        <BaseControl className="fb-setting-background-color-setting-icon-popup-inner">
                                                            <div className="fb-setting-normal-color">
                                                                <ColorPicker
                                                                    color={normalClassicColor} 
                                                                    onChange={setNormalClassicColor}
                                                                    enableAlpha
                                                                />
                                                                <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                <ColorPalette
                                                                    colors={[
                                                                        { color: '#F72585' },
                                                                        { color: '#7209B7' },
                                                                        { color: '#3A0CA3' },
                                                                        { color: '#4361EE' },
                                                                        { color: '#4CC9F0' },
                                                                    ]}
                                                                    disableCustomColors
                                                                    value={normalClassicColor}
                                                                    onChange={setNormalClassicColor}
                                                                />
                                                            </div>
                                                        </BaseControl>
                                                    </div>
                                                )}
                                            />
                                        </BaseControl>

                                        <BaseControl
                                            className="fb-background-image-control-wrapper"
                                        >
                                            {normalBackgroundImageUrl ? ( 
                                                <div className="fb-background-image-control" style={{backgroundImage: `url(${normalBackgroundImageUrl})`}}>
                                                    <button
                                                        className='fb-background-image-delete'
                                                        onClick={() => {
                                                            setNormalBackgroundImageUrl(null);
                                                            setNormalBackgroundImageAlt(null);
                                                            setNormalBackgroundImageID(null);
                                                        }}
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </button>
                                                    <button
                                                        className='fb-background-image-replace-btn'
                                                        onClick={() => {
                                                            const mediaUploader = wp.media({
                                                                title: __('Select or Upload background Image', 'frontis-blocks'),
                                                                button: {
                                                                    text: __('Use this image', 'frontis-blocks'),
                                                                },
                                                                multiple: false
                                                            });

                                                            mediaUploader.on('select', function() {
                                                                const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                                setNormalBackgroundImageUrl(attachment.url);
                                                                setNormalBackgroundImageAlt(attachment.alt);
                                                                setNormalBackgroundImageID(attachment.id);
                                                            });

                                                            mediaUploader.open();
                                                        }}
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                        Replace
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className='fb-background-image-upload-btn'
                                                    onClick={() => {
                                                        const mediaUploader = wp.media({
                                                            title: __('Select or Upload background Image', 'frontis-blocks'),
                                                            button: {
                                                                text: __('Use this image', 'frontis-blocks'),
                                                            },
                                                            multiple: false
                                                        });

                                                        mediaUploader.on('select', function() {
                                                            const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                            setNormalBackgroundImageUrl(attachment.url);
                                                            setNormalBackgroundImageAlt(attachment.alt);
                                                            setNormalBackgroundImageID(attachment.id);
                                                        });

                                                        mediaUploader.open();
                                                    }}
                                                >
                                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
                                                    Upload
                                                </button>
                                            )}
                                            {normalBackgroundImageUrl && (
                                                <div className="fb-background-image-control-setting-wrapper">
                                                    <BaseControl
                                                    >
                                                        <SelectControl
                                                            label={__("Image Position", "frontis-blocks")}
                                                            value={normalBackgroundImagePosition}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Center Center", "frontis-blocks"), value: "center center"},
                                                                    {label: __("Center Left", "frontis-blocks"), value: "center left"},
                                                                    {label: __("Center Right", "frontis-blocks"), value: "center right"},
                                                                    {label: __("Top Center", "frontis-blocks"), value: "top center"},
                                                                    {label: __("Top Left", "frontis-blocks"), value: "top left"},
                                                                    {label: __("Top Right", "frontis-blocks"), value: "top right"},
                                                                    {label: __("Bottom Center", "frontis-blocks"), value: "bottom center"},
                                                                    {label: __("Bottom Left", "frontis-blocks"), value: "bottom left"},
                                                                    {label: __("Bottom Right", "frontis-blocks"), value: "bottom right"},
                                                                    {label: __("Left Center", "frontis-blocks"), value: "left center"},
                                                                    {label: __("Left Top", "frontis-blocks"), value: "left top"},
                                                                    {label: __("Left Bottom", "frontis-blocks"), value: "left bottom"},
                                                                    {label: __("Right Center", "frontis-blocks"), value: "right center"},
                                                                    {label: __("Right Top", "frontis-blocks"), value: "right top"},
                                                                    {label: __("Right Bottom", "frontis-blocks"), value: "right bottom"},
                                                                ]
                                                            )}
                                                            onChange={setNormalBackgroundImagePosition} 
                                                        />
                                                        <SelectControl
                                                            label={__("Image Attachment", "frontis-blocks")}
                                                            value={normalBackgroundImageAttachment}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Scroll", "frontis-blocks"), value: "scroll"},
                                                                    {label: __("Fixed", "frontis-blocks"), value: "fixed"},
                                                                ]
                                                            )}
                                                            onChange={setNormalBackgroundImageAttachment}
                                                        />
                                                        <SelectControl
                                                            label={__("Image Repeat", "frontis-blocks")}
                                                            value={normalBackgroundImageRepeat}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Repeat", "frontis-blocks"), value: "repeat"},
                                                                    {label: __("Repeat X", "frontis-blocks"), value: "repeat-x"},
                                                                    {label: __("Repeat Y", "frontis-blocks"), value: "repeat-y"},
                                                                    {label: __("No Repeat", "frontis-blocks"), value: "no-repeat"},
                                                                ]
                                                            )}
                                                            onChange={setNormalBackgroundImageRepeat} 
                                                        />
                                                        <SelectControl
                                                            label={__("Image Size", "frontis-blocks")}
                                                            value={normalBackgroundImageSize}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Auto", "frontis-blocks"), value: "auto"},
                                                                    {label: __("Cover", "frontis-blocks"), value: "cover"},
                                                                    {label: __("Contain", "frontis-blocks"), value: "contain"},
                                                                ]
                                                            )}
                                                            onChange={setNormalBackgroundImageSize}
                                                        />
                                                    </BaseControl>
                                                    
                                                </div>
                                            )} 

                                            </BaseControl>
                                    </>
                                )}

                                {normalBackgroundType === 'gradient' && (
                                    <>
                                        <ToggleControl
                                            label={__("Add Custom Gradient", "frontis-blocks")}
                                            checked={normalCustomGradientSwitcher}
                                            onChange={setNormalCustomGradientSwitcher}
                                        />
                                        
                                        { normalCustomGradientSwitcher && (
                                            <>
                                                <TextareaControl
                                                    value={normalCustomGradientInputValue}
                                                    onChange={setNormalCustomGradientInputValue}
                                                    help={__(
                                                        "Add your gradient color here."
                                                    )}
                                                />
                                            </>
                                        )}

                                        {normalCustomGradientSwitcher !== true && (
                                            <BaseControl
                                                className="fb-setting-background-color-setting-wrapper"
                                            >
                                                <GradientPicker
                                                    value={normalGradientColor} 
                                                    onChange={setNormalGradientColor}
                                                    gradients={[
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',
                                                        name: 'Vivid cyan blue to vivid purple',
                                                        slug: 'vivid-cyan-blue-to-vivid-purple'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(122,220,180) 0%, rgb(0,208,130) 100%)',
                                                        name: 'Light green cyan to vivid green cyan',
                                                        slug: 'light-green-cyan-to-vivid-green-cyan'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(252,185,0,1) 0%, rgba(255,105,0,1) 100%)',
                                                        name: 'Luminous vivid amber to luminous vivid orange',
                                                        slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(255,105,0,1) 0%, rgb(207,46,46) 100%)',
                                                        name: 'Luminous vivid orange to vivid red',
                                                        slug: 'luminous-vivid-orange-to-vivid-red'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(238,238,238) 0%, rgb(169,184,195) 100%)',
                                                        name: 'Very light gray to cyan bluish gray',
                                                        slug: 'very-light-gray-to-cyan-bluish-gray'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(74,234,220) 0%, rgb(151,120,209) 20%, rgb(207,42,186) 40%, rgb(238,44,130) 60%, rgb(251,105,98) 80%, rgb(254,248,76) 100%)',
                                                        name: 'Cool to warm spectrum',
                                                        slug: 'cool-to-warm-spectrum'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(255,238,88) 0%, rgb(255,140,0) 100%)',
                                                        name: 'Soft yellow to amber',
                                                        slug: 'soft-yellow-to-amber'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(0,176,255) 0%, rgb(75,0,130) 100%)',
                                                        name: 'Vivid blue to indigo',
                                                        slug: 'vivid-blue-to-indigo'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(255,173,173) 0%, rgb(255,61,61) 100%)',
                                                        name: 'Light pink to red',
                                                        slug: 'light-pink-to-red'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(135,131,120) 0%, rgb(41,44,47) 100%)',
                                                        name: 'Muted gray to dark slate',
                                                        slug: 'muted-gray-to-dark-slate'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(240,86,199) 0%, rgb(255,72,0) 100%)',
                                                        name: 'Hot pink to orange',
                                                        slug: 'hot-pink-to-orange'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(120,191,255) 0%, rgb(0,102,204) 100%)',
                                                        name: 'Sky blue to royal blue',
                                                        slug: 'sky-blue-to-royal-blue'
                                                        }
                                                    ]}                                          
                                                />
                                            </BaseControl>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    />
                </BaseControl>
            )}
            {bgColorSwitcher === 'hover' && (
                <BaseControl
                    className="fb-setting-background-color-setting-wrapper"
                    label={__("Background Type", "frontis-blocks")}
                >
                    <Dropdown
                        className="fb-setting-background-color-setting-icon-dropdown"
                        contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <Button
                                variant="primary"
                                onClick={onToggle}
                                aria-expanded={isOpen}
                                className="fb-setting-background-color-setting-icon-btn"
                            >
                                <Dashicon icon="color-picker" className="fb-setting-background-color-setting-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="fb-setting-background-color-popup-wrapper">
                                <BaseControl
                                    className="fb-setting-background-color-popup-inner-wrapper"
                                >
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {BACKGROUND_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setHoverBackgroundType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${hoverBackgroundType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {hoverBackgroundType === 'classic' && (

                                    <>
                                        <BaseControl
                                            label={__("Color", "frontis-blocks")}
                                            className="fb-setting-background-color-setting-wrapper"
                                        >
                                            <Dropdown
                                                className="fb-setting-background-color-setting-icon-dropdown"
                                                contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                                                popoverProps={{ placement: 'bottom-start' }}
                                                renderToggle={({ isOpen, onToggle }) => (
                                                    <Button
                                                        variant="primary"
                                                        onClick={onToggle}
                                                        aria-expanded={isOpen}
                                                        className="fb-setting-background-color-setting-icon-btn"
                                                    >
                                                        <Dashicon icon="color-picker" className="fb-setting-background-color-setting-icon" />
                                                    </Button>
                                                )}
                                                renderContent={() => (
                                                    <div className="fb-setting-background-color-setting-icon-popup">
                                                        <BaseControl className="fb-setting-background-color-setting-icon-popup-inner">
                                                            <div className="fb-setting-normal-color">
                                                                <ColorPicker
                                                                    color={hoverClassicColor} 
                                                                    onChange={setHoverClassicColor}
                                                                    enableAlpha
                                                                />
                                                                <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                <ColorPalette
                                                                    colors={[
                                                                        { color: '#F72585' },
                                                                        { color: '#7209B7' },
                                                                        { color: '#3A0CA3' },
                                                                        { color: '#4361EE' },
                                                                        { color: '#4CC9F0' },
                                                                    ]}
                                                                    disableCustomColors
                                                                    value={hoverClassicColor}
                                                                    onChange={setHoverClassicColor}
                                                                />
                                                            </div>
                                                        </BaseControl>
                                                    </div>
                                                )}
                                            />
                                        </BaseControl>

                                        <BaseControl
                                            className="fb-background-image-control-wrapper"
                                        >
                                            {hoverBackgroundImageUrl ? ( 
                                                <div className="fb-background-image-control" style={{backgroundImage: `url(${hoverBackgroundImageUrl})`}}>
                                                    <button
                                                        className='fb-background-image-delete'
                                                        onClick={() => {
                                                            setHoverBackgroundImageUrl(null);
                                                            setHoverBackgroundImageAlt(null);
                                                            setHoverBackgroundImageID(null);
                                                        }}
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </button>
                                                    <button
                                                        className='fb-background-image-replace-btn'
                                                        onClick={() => {
                                                            const mediaUploader = wp.media({
                                                                title: __('Select or Upload background Image', 'frontis-blocks'),
                                                                button: {
                                                                    text: __('Use this image', 'frontis-blocks'),
                                                                },
                                                                multiple: false
                                                            });

                                                            mediaUploader.on('select', function() {
                                                                const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                                setHoverBackgroundImageUrl(attachment.url);
                                                                setHoverBackgroundImageAlt(attachment.alt);
                                                                setHoverBackgroundImageID(attachment.id);
                                                            });

                                                            mediaUploader.open();
                                                        }}
                                                    >
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                        Replace
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className='fb-background-image-upload-btn'
                                                    onClick={() => {
                                                        const mediaUploader = wp.media({
                                                            title: __('Select or Upload background Image', 'frontis-blocks'),
                                                            button: {
                                                                text: __('Use this image', 'frontis-blocks'),
                                                            },
                                                            multiple: false
                                                        });

                                                        mediaUploader.on('select', function() {
                                                            const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                            setHoverBackgroundImageUrl(attachment.url);
                                                            setHoverBackgroundImageAlt(attachment.alt);
                                                            setHoverBackgroundImageID(attachment.id);
                                                        });

                                                        mediaUploader.open();
                                                    }}
                                                >
                                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
                                                    Upload
                                                </button>
                                            )}
                                            {hoverBackgroundImageUrl && (
                                                <div className="fb-background-image-control-setting-wrapper">
                                                    <BaseControl
                                                    >
                                                        <SelectControl
                                                            label={__("Image Position", "frontis-blocks")}
                                                            value={hoverBackgroundImagePosition}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Center Center", "frontis-blocks"), value: "center center"},
                                                                    {label: __("Center Left", "frontis-blocks"), value: "center left"},
                                                                    {label: __("Center Right", "frontis-blocks"), value: "center right"},
                                                                    {label: __("Top Center", "frontis-blocks"), value: "top center"},
                                                                    {label: __("Top Left", "frontis-blocks"), value: "top left"},
                                                                    {label: __("Top Right", "frontis-blocks"), value: "top right"},
                                                                    {label: __("Bottom Center", "frontis-blocks"), value: "bottom center"},
                                                                    {label: __("Bottom Left", "frontis-blocks"), value: "bottom left"},
                                                                    {label: __("Bottom Right", "frontis-blocks"), value: "bottom right"},
                                                                    {label: __("Left Center", "frontis-blocks"), value: "left center"},
                                                                    {label: __("Left Top", "frontis-blocks"), value: "left top"},
                                                                    {label: __("Left Bottom", "frontis-blocks"), value: "left bottom"},
                                                                    {label: __("Right Center", "frontis-blocks"), value: "right center"},
                                                                    {label: __("Right Top", "frontis-blocks"), value: "right top"},
                                                                    {label: __("Right Bottom", "frontis-blocks"), value: "right bottom"},
                                                                ]
                                                            )}
                                                            onChange={setHoverBackgroundImagePosition}
                                                        />
                                                        <SelectControl
                                                            label={__("Image Attachment", "frontis-blocks")}
                                                            value={hoverBackgroundImageAttachment}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Scroll", "frontis-blocks"), value: "scroll"},
                                                                    {label: __("Fixed", "frontis-blocks"), value: "fixed"},
                                                                ]
                                                            )}
                                                            onChange={setHoverBackgroundImageAttachment}
                                                        />
                                                        <SelectControl
                                                            label={__("Image Repeat", "frontis-blocks")}
                                                            value={hoverBackgroundImageRepeat}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Repeat", "frontis-blocks"), value: "repeat"},
                                                                    {label: __("Repeat X", "frontis-blocks"), value: "repeat-x"},
                                                                    {label: __("Repeat Y", "frontis-blocks"), value: "repeat-y"},
                                                                    {label: __("No Repeat", "frontis-blocks"), value: "no-repeat"},
                                                                ]
                                                            )}
                                                            onChange={setHoverBackgroundImageRepeat}
                                                        />
                                                        <SelectControl
                                                            label={__("Image Size", "frontis-blocks")}
                                                            value={hoverBackgroundImageSize}
                                                            options={(
                                                                [
                                                                    {label: __("Default", "frontis-blocks"), value: ""},
                                                                    {label: __("Auto", "frontis-blocks"), value: "auto"},
                                                                    {label: __("Cover", "frontis-blocks"), value: "cover"},
                                                                    {label: __("Contain", "frontis-blocks"), value: "contain"},
                                                                ]
                                                            )}
                                                            onChange={setHoverBackgroundImageSize}
                                                        />
                                                    </BaseControl>
                                                    
                                                </div>
                                            )} 

                                            </BaseControl>
                                    </>
                                )}

                                {hoverBackgroundType === 'gradient' && (
                                    <>
                                        <ToggleControl
                                            label={__("Add Custom Gradient", "frontis-blocks")}
                                            checked={hoverCustomGradientSwitcher}
                                            onChange={setHoverCustomGradientSwitcher}
                                        />
                                        
                                        { hoverCustomGradientSwitcher && (
                                            <>
                                                <TextareaControl
                                                    value={hoverCustomGradientInputValue}
                                                    onChange={setHoverCustomGradientInputValue}
                                                    help={__(
                                                        "Add your gradient color here."
                                                    )}
                                                />
                                            </>
                                        )}

                                        {hoverCustomGradientSwitcher !== true && (
                                            <BaseControl
                                                className="fb-setting-background-color-setting-wrapper"
                                            >
                                                <GradientPicker
                                                    value={hoverGradientColor} 
                                                    onChange={setHoverGradientColor}
                                                    gradients={[
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',
                                                        name: 'Vivid cyan blue to vivid purple',
                                                        slug: 'vivid-cyan-blue-to-vivid-purple'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(122,220,180) 0%, rgb(0,208,130) 100%)',
                                                        name: 'Light green cyan to vivid green cyan',
                                                        slug: 'light-green-cyan-to-vivid-green-cyan'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(252,185,0,1) 0%, rgba(255,105,0,1) 100%)',
                                                        name: 'Luminous vivid amber to luminous vivid orange',
                                                        slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgba(255,105,0,1) 0%, rgb(207,46,46) 100%)',
                                                        name: 'Luminous vivid orange to vivid red',
                                                        slug: 'luminous-vivid-orange-to-vivid-red'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(238,238,238) 0%, rgb(169,184,195) 100%)',
                                                        name: 'Very light gray to cyan bluish gray',
                                                        slug: 'very-light-gray-to-cyan-bluish-gray'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(74,234,220) 0%, rgb(151,120,209) 20%, rgb(207,42,186) 40%, rgb(238,44,130) 60%, rgb(251,105,98) 80%, rgb(254,248,76) 100%)',
                                                        name: 'Cool to warm spectrum',
                                                        slug: 'cool-to-warm-spectrum'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(255,238,88) 0%, rgb(255,140,0) 100%)',
                                                        name: 'Soft yellow to amber',
                                                        slug: 'soft-yellow-to-amber'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(0,176,255) 0%, rgb(75,0,130) 100%)',
                                                        name: 'Vivid blue to indigo',
                                                        slug: 'vivid-blue-to-indigo'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(255,173,173) 0%, rgb(255,61,61) 100%)',
                                                        name: 'Light pink to red',
                                                        slug: 'light-pink-to-red'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(135,131,120) 0%, rgb(41,44,47) 100%)',
                                                        name: 'Muted gray to dark slate',
                                                        slug: 'muted-gray-to-dark-slate'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(240,86,199) 0%, rgb(255,72,0) 100%)',
                                                        name: 'Hot pink to orange',
                                                        slug: 'hot-pink-to-orange'
                                                        },
                                                        {
                                                        gradient: 'linear-gradient(135deg, rgb(120,191,255) 0%, rgb(0,102,204) 100%)',
                                                        name: 'Sky blue to royal blue',
                                                        slug: 'sky-blue-to-royal-blue'
                                                        }
                                                    ]}                                          
                                                />
                                            </BaseControl>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    />
                </BaseControl>
            )}
        </>
    );
};

export default FB_BackgroundColor;
