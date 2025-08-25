import React from 'react';
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup } from '@wordpress/components';

const HEADING_OPTIONS = [
	{ label: __("H1", "frontis-blocks"), value: "h1" },
	{ label: __("H2", "frontis-blocks"), value: "h2" },
	{ label: __("H3", "frontis-blocks"), value: "h3" },
	{ label: __("H4", "frontis-blocks"), value: "h4" },
	{ label: __("H5", "frontis-blocks"), value: "h5" },
	{ label: __("H6", "frontis-blocks"), value: "h6" },
	{ label: __("P", "frontis-blocks"), value: "p" },
	{ label: __("Span", "frontis-blocks"), value: "span" },
];

const FB_HtmlTagControl = ({ label, globalHtmlTag, setGlobalHtmlTag }) => {
	return (
		<BaseControl
			label={label ? __(label, "frontis-blocks") : __("HTML Tag", "frontis-blocks")}
			id="fb-setting-text-alignment"
			className="fb-setting-text-alignment"
		>
			<ButtonGroup className="fb-setting-text-alignment-group-btn fb-btn-group-html-tag">
				{HEADING_OPTIONS.map((item) => (
					<Button
						key={item.value}
						onClick={() => setGlobalHtmlTag(item.value)}
						className={`fb-setting-text-alignment-single-btn ${globalHtmlTag === item.value ? 'active' : ''}`}
					>
						{item.label}
					</Button>
				))}
			</ButtonGroup>
		</BaseControl>
	);
};

export default FB_HtmlTagControl;