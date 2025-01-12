import { registerPlugin } from "@wordpress/plugins";
import './store';
import { FBIcon } from "../icons";
import FrontisBlocksSidebar from "./sidebar";

registerPlugin("frontis-blocks-sidebar", {
	render: FrontisBlocksSidebar,
	icon: <FBIcon />,
});
