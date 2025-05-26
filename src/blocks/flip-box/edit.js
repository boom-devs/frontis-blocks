import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useRef } from "@wordpress/element";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		Heading_Text,
		headingTag,
		Alignment,
		separator,
		descSwitcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		flip_Button_Switcher,
		flip_Button_Text,
		flip_Button_Link,
		wrapperAlignment,
		flipBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
		flipIconPosition,
		flipButtonLink,
		flipbtnTargetUrl,
		flipIconVerticalPosition,
		flipCardAlignment,

		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={contentAlignment}
					onChange={(value) => setAttributes({ contentAlignment: value })}
					controls={["left", "center", "right", "justify"]}
				/>
			</BlockControls>

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`} id={flipBoxGlobalWraperID} ref={panelRef}>
					<div className="fb-flipper-wrapper">
						<div className="fb-flipbox-front">
							<div className="fb-flipbox-content-wrapper">
								<h2>Front title</h2>
								<p>Front conent here. lorem ispus inta manderin ustu poshtu</p>
							</div>
						</div>
						<div className="fb-flipbox-back">
							<div className="fb-flipbox-content-wrapper">
								<h2>Back title</h2>
								<p>Back conent here. lorem ispus inta manderin ustu poshtu</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
