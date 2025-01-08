import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId, context }) {
    const { blockId, slideTitle } = attributes;

    const blockProps = useBlockProps({
        className: `fb-slide-main-wrapper ${blockId} swiper-slide`,
    });

    useEffect(() => {
        setAttributes({
            sliderID: context['fb/sliderID'],
            inheritedTransitionType: context['fb/sliderInheritedTransitionType'],
            inheritedDisplayIndicators: context['fb/sliderInheritedDisplayIndicators'],
            inheritedIndicatorColor: context['fb/sliderInheritedIndicatorColor'],
            inheritedAutoplay: context['fb/sliderInheritedAutoplay'],
            inheritedAutoplaySpeed: context['fb/sliderInheritedAutoplaySpeed'],
            inheritedNavigationArrows: context['fb/sliderInheritedNavigationArrows'],
        });
    }, [context]);

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
            <div {...blockProps}>
                <div className="fb-slide-content">
                    <RichText
                        tagName="h2"
                        className="fb-slide-title"
                        value={slideTitle}
                        onChange={(value) => setAttributes({ slideTitle: value })}
                        placeholder={__('Enter slide title...', 'frontis-blocks')}
                    />
                </div>
            </div>
        </>
    );
}
