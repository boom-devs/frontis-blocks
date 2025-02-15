import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings'; 
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId}) {
    const {
        blockId,
        headingText,
        headingTag,
        headingAlignment,
        subHeadingSwitcher,
        separator,
        separatorColor,
        separatorZigzagWidth,
        separatorWidth,
        separatorWidthUnits,
        separatorHeight,
        separatorHeightUnits,

        showSeparatorSwitcher,
        subHeadingText,
        subHeadingTag,
        separatorPosition,
        subHeadingPosition,
        headingIconAlign,
        headingIcon,
        headingIconSwitcher,
        activeLineSwitcher,
        headingGlobalWraperID,
        headingGlobalWraperClass,
    } = attributes;


    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-heading-main-wrapper ${blockId}`,
    });


    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={headingAlignment}
                    onChange={(value) => setAttributes({ headingAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-wrapper ${headingGlobalWraperClass}`} id={headingGlobalWraperID} style={{textAlign: headingAlignment}} ref={panelRef}>

                    {headingIconAlign === 'icon' && headingIconSwitcher && (
                        <div className="fb-advanced-icon-wrapper" style={{justifyContent: headingAlignment}}>
                            <div className="fb-advanced-icon">{renderSVG(headingIcon)}</div>
                        </div>
                    )}

                    {showSeparatorSwitcher && separatorPosition === "top" && (
                        <div className='fb-advanced-title-separator'>
                            {separator === 'zigzag' && (
                                <div className='fb-advanced-title-separator-zigzag'>
                                    <svg
                                        className='fb-advanced-title-separator-zigzag-svg'
                                        width="322"
                                        height="7"
                                        viewBox="0 0 322 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ stroke: separatorColor }}
                                    >
                                        <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094"
                                        stroke-width="2" stroke-miterlimit="10" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    )}

                    {subHeadingSwitcher && subHeadingPosition === 'top' && (
                        <div className="fb-advanced-sub-heading-wrapper">
                            <RichText
                                tagName={subHeadingTag}
                                value={subHeadingText}
                                onChange={(value) => setAttributes({ subHeadingText: value })}
                                placeholder={__('Sub heading...', 'frontis-blocks')}
                                className="fb-advanced-sub-heading"
                            />
                        </div>
                    )}

                    <div className="fb-advanced-heading-wrapper">
                        <RichText
                            tagName={headingTag}
                            value={headingText}
                            onChange={(value) => setAttributes({ headingText: value })}
                            placeholder={__('Advanced Heading', 'frontis-blocks')}
                            className={`fb-advanced-heading ${activeLineSwitcher ? 'active-line' : ''}`}
                        />
                    </div>

                    {subHeadingSwitcher && subHeadingPosition === 'bottom' && (
                        <div className="fb-advanced-sub-heading-wrapper">
                            <RichText
                                tagName={subHeadingTag}
                                value={subHeadingText}
                                onChange={(value) => setAttributes({ subHeadingText: value })}
                                placeholder={__('Sub heading...', 'frontis-blocks')}
                                className="fb-advanced-sub-heading"
                            />
                        </div>
                    )}

                    {showSeparatorSwitcher && separatorPosition === "bottom" && (
                        <div className='fb-advanced-title-separator'>
                        {separator === 'zigzag' && (
                            <div className='fb-advanced-title-separator-zigzag'>
                                <svg
                                    className='fb-advanced-title-separator-zigzag-svg'
                                    width="322"
                                    height="7"
                                    viewBox="0 0 322 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ stroke: separatorColor }}
                                >
                                    <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094"
                                    stroke-width="2" stroke-miterlimit="10" />
                                </svg>
                            </div>
                        )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
