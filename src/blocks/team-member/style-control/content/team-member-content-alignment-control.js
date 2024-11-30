import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	Button,
	ButtonGroup,
} from "@wordpress/components";
import { CONTENT_ALIGN } from "../../constants/constants";

export default function TeamMemberContentAlignmentControl({
	attributes,
	setAttributes,
}) {
	const {
		deviceType,
		teamMemberContentAlignment,
	} = attributes;


	return (
		<BaseControl
			label={__("Alignment", "frontis-blocks")}
			id="fb-setting-text-alignment"
			className="fb-setting-text-alignment"
		>
			<ButtonGroup className="fb-setting-text-alignment-group-btn">
				{CONTENT_ALIGN.map((item, key) => (
					<Button
						key={key}
						onClick={() => setAttributes({ teamMemberContentAlignment: item.value })}
						className={`fb-setting-text-alignment-single-btn ${
							teamMemberContentAlignment === item.value ? "active" : ""
						}`}
					>
						{item.label}
					</Button>
				))}
			</ButtonGroup>
		</BaseControl>
	);
}
