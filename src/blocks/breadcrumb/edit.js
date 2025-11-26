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
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockID,
		separatorType,
		separatorText,
		separatorIcon,
		showHomeIcon,
		homeIcon,
		homeText,
		showItemIcon,
		itemIcon,
		breadcrumbGlobalWraperID,
		breadcrumbGlobalWraperClass,
		breadcrumbDesktopSwitcher,
		breadcrumbTabletSwitcher,
		breadcrumbMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-breadcrumb-main-wrapper ${blockID} ${breadcrumbDesktopSwitcher && 'fb-desktop-responsive'} ${breadcrumbTabletSwitcher && 'fb-tablet-responsive'} ${breadcrumbMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const renderSeparator = () => {
		if (separatorType === 'text') {
			return <span className="fb-breadcrumb-separator">{separatorText}</span>;
		}
		return <div className={`fb-breadcrumb-separator`}>{renderSVG(separatorIcon)}</div>;
	};

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-breadcrumb-container ${breadcrumbGlobalWraperClass}`} id={breadcrumbGlobalWraperID} ref={panelRef}>
					<div className="fb-breadcrumb-list">
						<div className="fb-breadcrumb-item home">
							{showHomeIcon && <div className={`fb-breadcrumb-icon home`}>{renderSVG(homeIcon)}</div>}
							<span className="fb-breadcrumb-link">{homeText}</span>
						</div>
						{renderSeparator()}
						<div className="fb-breadcrumb-item item">
							{showItemIcon && <div className={`fb-breadcrumb-icon item`}>{renderSVG(itemIcon)}</div>}
							<span className="fb-breadcrumb-link">Parent Page</span>

						</div>
						{renderSeparator()}
						<div className="fb-breadcrumb-item item">
							{showItemIcon && <div className={`fb-breadcrumb-icon item`}>{renderSVG(itemIcon)}</div>}
							<span className="fb-breadcrumb-text">Current Page</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
