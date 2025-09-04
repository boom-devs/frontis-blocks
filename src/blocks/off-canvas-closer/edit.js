import { __ } from '@wordpress/i18n';
import {
	useBlockProps
} from '@wordpress/block-editor';
import Inspector from "./inspector";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";

import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		offCanvasIconAlign,
        offCanvasIcon,
		/** Start button Icon Image */
		offCanvasIconImageUrl,
		offCanvasIconImageAlt,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-off-canvas-closer-block ${blockId}`,
	});


	const closeMenu = () => {
		const menu = document.querySelector('.fb-off-canvas-menu');
		menu.classList.remove('open');
		overlay.classList.remove('active');
		document.body.classList.remove('fb-menu-open');
		toggleBtn.setAttribute('aria-expanded', 'false');
	}

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
			<div {...blockProps}>
				<button 
					className="fb-off-canvas-closer"
					aria-label={__('Close menu', 'frontis-blocks')}
					onClick={() => closeMenu()}
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
						<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="https://www.w3.org/2000/svg">
							<line x1="13.7071" y1="12.2929" x2="38.4558" y2="37.0416" stroke="black" strokeWidth="2"/>
							<line x1="12.2929" y1="37.2929" x2="37.0416" y2="12.5442" stroke="black" strokeWidth="2"/>
						</svg>
					)}
				</button>
			</div>
		</>
	);
}