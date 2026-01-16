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
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockID,
		blockStyle,
		separatorType,
		separatorText,
		separatorIcon,
		showHomePage,
		homeprefixSwitcher,
		homeTextPrefix,
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
			return <span className="fb-breadcrumb-separator text">{separatorText}</span>;
		}
		return <div className={`fb-breadcrumb-separator`}>{renderSVG(separatorIcon)}</div>;
	};
	const renderHomePrefix = () => {
		if (homeprefixSwitcher === 'icon') {
			return showHomeIcon ? <div className={`fb-breadcrumb-icon home`}>{renderSVG(homeIcon)}</div> : null;
		}

		if (homeprefixSwitcher === 'text') {
			return <span className="fb-breadcrumb-text-prefix">{homeTextPrefix}</span>;
		}

		return null;
	};

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div className={`fb-breadcrumb-container ${breadcrumbGlobalWraperClass}`} id={breadcrumbGlobalWraperID} ref={panelRef}>
					<div className="fb-breadcrumb-inner-wrapper">
						<div className="fb-breadcrumb-list">
							{showHomePage && (
								<>
									<div className="fb-breadcrumb-item home">
										{renderHomePrefix()}
										<span className="fb-breadcrumb-label fb-breadcrumb-link">{homeText}</span>
									</div>
									{renderSeparator()}
								</>
							)}
							<div className="fb-breadcrumb-item item">
								{showItemIcon && <div className={`fb-breadcrumb-icon item`}>{renderSVG(itemIcon)}</div>}
								<span className="fb-breadcrumb-label fb-breadcrumb-link">{__("Dummy Parent", "frontis-blocks")}</span>

							</div>
							{renderSeparator()}
							<div className="fb-breadcrumb-item item">
								{showItemIcon && <div className={`fb-breadcrumb-icon item`}>{renderSVG(itemIcon)}</div>}
								<span className="fb-breadcrumb-label fb-breadcrumb-text">{__("Dummy Title", "frontis-blocks")}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
