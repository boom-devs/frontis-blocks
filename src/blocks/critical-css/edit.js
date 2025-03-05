import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	BaseControl,
} from '@wordpress/components';

import './editor.scss';

import Inspector from "./inspector";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
        blockId,
	} = attributes;

    const blockProps = useBlockProps({
        className: `fb-critical-css-area ${blockId}`,
    });

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
			<div {...blockProps}>
				<div className={`fb-critical-css-wrapper`}> 
					<hr />
				</div>
			</div>
		</>
	);
}
