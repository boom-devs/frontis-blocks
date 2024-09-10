import { Fragment } from "@wordpress/element";
import './editor.scss';
import FBIconPicker from "../../components/icon-picker";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody} from "@wordpress/components";
export default function Edit(props) {
	const iconHandler = () => {
		console.log("Hello world")
	}
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={false}>
					<FBIconPicker value={''} setIconHandler={iconHandler} />
				</PanelBody>
			</InspectorControls>

			<h1>Test component</h1>
		</Fragment>
	);
}
