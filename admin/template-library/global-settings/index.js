import { registerPlugin } from "@wordpress/plugins";
import { FBIcon } from "../icons";
import FsiGbTypography from "./global-settings";

registerPlugin("frontis-blocks-sidebar", {
	render: FsiGbTypography,
	icon: <FBIcon />,
});
