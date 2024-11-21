import { registerPlugin } from "@wordpress/plugins";
import { FBIcon } from "../icons";
import FrontisBlocksSidebar from "./sidebar";

import "../store";

registerPlugin("frontis-blocks-sidebar", {
	render: FrontisBlocksSidebar,
	icon: <FBIcon />,
});
