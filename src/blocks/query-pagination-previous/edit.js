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
		paginationPrevTxt,
		paginationPrevIcon,
	} = context;

	return (
			<>
				<span className="fb-page-prev is-disabled">
					{paginationPrevNextType === 'icon' ? (
						<span className="fb-pagination-icon">{renderSVG(paginationPrevIcon)}</span>
					) : (
						<span className="fb-pagination-text">{paginationPrevTxt}</span>
					)}
				</span>
			</>
	);
}
