import { Fragment } from "@wordpress/element";
import './editor.scss';
import FBIconPicker from "../../components/icon-picker";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody} from "@wordpress/components";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
export default function Edit(props) {
	const {attributes, setAttributes, clientId} = props;
	const iconHandler = (iconName) => {
		setAttributes({icon: iconName})
		console.log(attributes)
		console.log("Hello world")

		setAttributes({
			blockID: "fb-icon-picker-" + clientId.slice(0, 8),
		});
	}

	const selectedIconHandler = (svg) => {
		console.log(svg)
		setAttributes({
			selectedIconSvg: svg,
		});
	}
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={false}>
					<FBIconPicker value={''} setIconHandler={iconHandler}/>
				</PanelBody>
			</InspectorControls>

			<h1>Test component</h1>
		</Fragment>
	);
}
