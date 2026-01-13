import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useDeviceType } from '@Config/displayType';
import { useRef, memo } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';



import Inspector from "./inspector";

function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		blockStyle,
		menuItems,
		megaMenuDesktopSwitcher,
		megaMenuTabletSwitcher,
		megaMenuMobileSwitcher,
		megaMenuGlobalWraperClass,
		megaMenuGlobalWraperID,
		megaMenuIcon
	} = attributes;


	const blockProps = useBlockProps({
		className: `frontis-block fb-advanced-mega-menu-main-wrapper ${blockId} ${megaMenuDesktopSwitcher && 'fb-desktop-responsive'} ${megaMenuTabletSwitcher && 'fb-tablet-responsive'} ${megaMenuMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	const deviceType = useDeviceType();
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
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-advanced-mega-menu-wrapper ${megaMenuGlobalWraperClass}`} id={megaMenuGlobalWraperID} ref={panelRef}>
					<div className="fb-mega-menu-editor">
						{menuItems.length > 0 ? (
							<ul className={`fb-advanced-mega-menu-list fb-device-${deviceType}`}>
								{menuItems.map((item, index) => (
									<li
										key={index}
										className={`fb-advanced-mega-menu-item ${item.patternSlug ? 'has-mega-menu' : ''}`}
									>
										{item.url ? (
											<a href='#' className="fb-advanced-mega-menu-link">
												{item.label || __('Item 1', 'frontis-blocks')}
												{item.patternSlug && (
													<span className="fb-advanced-mega-menu-indicator">
														{item.megaMenuIcon ? renderSVG(item.megaMenuIcon) : ''}
													</span>
												)}
											</a>
										) : (
											<span className="fb-advanced-mega-menu-link">
												{item.label || __('Item 1', 'frontis-blocks')}
												{item.patternSlug && (
													<span className="fb-advanced-mega-menu-indicator">
														{item.megaMenuIcon ? renderSVG(item.megaMenuIcon) : ''}
													</span>
												)}
											</span>
										)}
									</li>
								))}
							</ul>
						) : (
							<p>{__('Use the sidebar to add menu items →', 'frontis-blocks')}</p>
						)}
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}

export default memo(Edit);