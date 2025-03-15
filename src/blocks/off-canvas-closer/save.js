import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
        offCanvasIconAlign,
        offCanvasIcon,
        offCanvasIconImageUrl,
        offCanvasIconImageAlt,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-off-canvas-closer-block ${blockId}`,
    });
    
    return (
        <div {...blockProps}>
            <button 
                className="fb-off-canvas-closer"
                aria-label={__('Close menu', 'frontis-blocks')}
            >
                {offCanvasIconAlign === 'icon-text' && offCanvasIcon ? (
                    <div className={`fb-off-canvas-closer-icon-wrapper`}>
                        <div className="fb-off-canvas-closer-icon">{renderSVG(offCanvasIcon)}</div>
                    </div>
                ) : offCanvasIconAlign === 'image' && offCanvasIconImageUrl ? (
                    <div className={`fb-off-canvas-closer-icon-wrapper`}>
                        <div className="fb-off-canvas-closer-icon-image">
                            <img src={offCanvasIconImageUrl} alt={offCanvasIconImageAlt} />
                        </div>
                    </div>
                ) : (
					<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="13.7071" y1="12.2929" x2="38.4558" y2="37.0416" stroke="black" strokeWidth="2"/>
						<line x1="12.2929" y1="37.2929" x2="37.0416" y2="12.5442" stroke="black" strokeWidth="2"/>
					</svg>
				)}
            </button>
        </div>
    );
}
