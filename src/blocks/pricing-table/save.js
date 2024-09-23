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
		pricingTablePricePeriod,

		FeatureItems,
		FeatureTag

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
						{pricingTablePricePeriod}
					</div>
					<div className="fb-feature-list-wrapper">
						<ul className="fb-feature-list-items">
							{FeatureItems.map(item => (
								<li key={item.id} className="fb-feature-list-item">
									<div className="fb-feature-list-icon-box">
										<div className="fb-feature-list-icon-inner">
                                        <span className="fb-feature-list-icon">
                                            {renderSVG(item.FeatureIcon)}
                                        </span>
										</div>
									</div>
									<div className="fb-feature-list-content">
										<RichText.Content
											tagName={FeatureTag}
											className="fb-feature-list-title"
											value={item.Title}
										/>
										<RichText.Content
											tagName="p"
											className="fb-feature-list-text"
											value={item.Description}
										/>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
