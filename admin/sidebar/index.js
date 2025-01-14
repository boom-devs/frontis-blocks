import { registerPlugin } from "@wordpress/plugins";
import { FBIcon } from "../icons";
import FrontisBlocksSidebar from "./sidebar";
import { store } from "./store";

registerPlugin("frontis-blocks-sidebar", {
	render: FrontisBlocksSidebar,
	icon: <FBIcon />,
});
