/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";



export default function Edit({ attributes, setAttributes, clientId, context }) {



	
	const {
		blockId,
		blockStyle,
		label,
	} = attributes;

	const { 
		paginationPrevNextType,
		paginationNextTxt,
		paginationNextIcon,
	} = context;

	return (
			<>
				<span className="fb-page-next">
					{paginationPrevNextType === 'icon' ? (
						<span className="fb-pagination-icon">{renderSVG(paginationNextIcon)}</span>
					) : (
						<span className="fb-pagination-text">{paginationNextTxt}</span>
					)}
				</span>
			</>
	);
}