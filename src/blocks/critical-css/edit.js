import { __ } from "@wordpress/i18n";

import {
	useBlockProps
} from "@wordpress/block-editor";
import {
    __experimentalDivider as Divider,
    __experimentalVStack as VStack,
} from "@wordpress/components";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-icon-box-main-wrapper ${blockID} `,
	});

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
