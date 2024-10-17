import {__} from "@wordpress/i18n";

export default function FbHelpText({text}) {
	return (
		<div className={'fb-help-text'}>{__(text, 'frontis-blocks')}</div>
	)
}
