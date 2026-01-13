import { __ } from "@wordpress/i18n";
import { memo } from "@wordpress/element";
import { applyFilters } from '@wordpress/hooks';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';

import {
	useBlockProps
} from "@wordpress/block-editor";
import {
    __experimentalDivider as Divider,
    __experimentalVStack as VStack,
} from "@wordpress/components";


function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-icon-box-main-wrapper ${blockID} `,
	});

	const criticalCssAvailable = applyFilters('frontisblocks-critical-css-available', false);

	if(!criticalCssAvailable) {
		return (
			<UpgradeToProPopup />
		)
	}

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-icon-box-wrapper ${blockID}`}>
				<VStack spacing={4}>
					<Divider />
				</VStack>
				</div>
			</div>
		</>
	);
}

export default memo(Edit);
