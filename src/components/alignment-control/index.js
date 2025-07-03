import React from 'react';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup } from '@wordpress/components';
import { Dashicon } from '@wordpress/components';

const FB_AlignmentControl = ({ 
	label,
	options = [
		{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
		{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
		{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
	],
	globalAlignment,
	setGlobalAlignment 
	}) => {

	return (
		<BaseControl
			label={label ? __(label, "frontis-blocks") : __("Alignment", "frontis-blocks")}
			id="fb-setting-text-alignment"
			className="fb-setting-text-alignment"
		>
			<ButtonGroup className="fb-setting-text-alignment-group-btn fb-btn-group-icon-only">
				{options.map((item) => (
					<Button
						key={item.value}
						onClick={() => setGlobalAlignment(item.value)}
						className={`fb-setting-text-alignment-single-btn ${globalAlignment === item.value ? 'active' : ''}`}
					>
						{item.label}
					</Button>
				))}
			</ButtonGroup>
		</BaseControl>
	);
};

export default FB_AlignmentControl;