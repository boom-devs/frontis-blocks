import {RichText, useBlockProps} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		pricingTableHeaderName,
		pricingTableHeaderContent,
		pricingTablePricePrefix,
		pricingTablePriceAmount,

	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps} id={blockID}>
			<div className={`fb-pricing-table-wrapper ${blockID}`}>
				<div className={`fb-pricing-table-item`}>
					<div className={`fb-pricing-table-icon`}>

					</div>
					<div className={`fb-pricing-table-header`}>
						{pricingTableHeaderName}
						{pricingTableHeaderContent}
					</div>
					<div className={`fb-pricing-table-price-wrapper`}>
						<div className={`fb-pricing-table-price`}>
							{pricingTablePricePrefix}
							{pricingTablePriceAmount}
						</div>
						<span className={`fb-pricing-table-price-period`}>/ month</span>
					</div>
					<div className={`fb-pricing-table-feature`}>
						<div className={`fb-pricing-table-feature-item`}>
								<span className={`fb-pricing-table-feature-icon`}>

								</span>
							<span className={`fb-pricing-table-feature-title`}>Customization options</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
