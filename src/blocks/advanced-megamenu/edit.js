import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useDeviceType } from '@Config/displayType';
import { useRef } from '@wordpress/element';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		menuItems,
		megaMenuDesktopSwitcher,
		megaMenuTabletSwitcher,
		megaMenuMobileSwitcher,
		megaMenuGlobalWraperClass,
		megaMenuGlobalWraperID
	}
		= attributes;

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
							<div style={{ marginTop: '15px' }}>
								<ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
									{menuItems.map((item, index) => (
										<li key={index}>{item.label || __('(No label)', 'frontis-blocks')}</li>
									))}
								</ul>
							</div>
						) : (
							<p>{__('Use the sidebar to add menu items →', 'frontis-blocks')}</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}