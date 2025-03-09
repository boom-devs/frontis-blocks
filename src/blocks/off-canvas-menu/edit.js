import { __ } from '@wordpress/i18n';
import { useRef } from "@wordpress/element";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		DeviceType,
		ButtonAlignment,

		dualBtnDesktopSwitcher,
		dualBtnTabletSwitcher,
		dualBtnMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-off-canvas-menu-main-wrapper ${blockID} ${dualBtnDesktopSwitcher && 'fb-desktop-responsive'} ${dualBtnTabletSwitcher && 'fb-tablet-responsive'} ${dualBtnMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<BlockControls>
				<AlignmentToolbar
					value={ButtonAlignment}
					onChange={(value) => setAttributes({ ButtonAlignment: value })}
					controls={['start', 'center', 'end', 'start']}
				/>
			</BlockControls>

			<div {...blockProps}>
				<div className='fb-off-canvas-menu-wrapper'
					style={{
						justifyContent: ButtonAlignment,

					}}
				>
					<svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path></svg>
				</div>
			</div>
		</>
	);
}
