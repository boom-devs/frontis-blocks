import React from 'react';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup } from '@wordpress/components';
import FB_ResponsiveControl from '@Components/responsive-control';
import { Dashicon } from '@wordpress/components';

const FB_ResponsiveAlignmentControl = ({ 
	label='',
	globalAlignment,
	setGlobalAlignment,
	deviceType,
	setAttributes,
	disabled,
	options = [
		{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
		{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
		{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
	]
 }) => {
	

	const handleAlignmentChange = (value) => {
		setGlobalAlignment({
			...globalAlignment,
			[deviceType]: value
		});

		setAttributes({
			globalAlignment: {
				...globalAlignment,
				[deviceType]: value
			}
		});
	};

	return (
		<BaseControl
			className="fb-image-control-wrapper"
		>
			<FB_ResponsiveControl
				labelText={label}
                device={deviceType}
            />
			<ButtonGroup className={`fb-setting-text-alignment-group-btn fb-btn-group-icon-only ${disabled ? 'is-disabled' : ''} `}>
				{options.map((item) => (
					<Button
						key={item.value}
						onClick={() => !disabled && handleAlignmentChange(item.value)}
						disabled={disabled}
						className={`fb-setting-text-alignment-single-btn ${globalAlignment[deviceType] === item.value ? 'active' : ''}`}
					>
						{item.label}
					</Button>
				))}
			</ButtonGroup>
		</BaseControl>
	);
};

export default FB_ResponsiveAlignmentControl;