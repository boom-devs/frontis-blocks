import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';
import { useDeviceType } from '@Config/displayType';
import { useRef, useEffect, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import loadGoogleFont from '@Utils/loadGoogleFont';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';
import { applyFilters } from '@wordpress/hooks';
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";

import generateAdvancedMegaMenuStyle from "./styling";
import getProActive from '@Utils/getProActive';

// Global set to track loaded fonts across all block instances
const loadedFonts = new Set();

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId, context, isSelected }) {

	const {
		blockID,
		blockStyle,
		menuItems,
		megaMenuDesktopSwitcher,
		megaMenuTabletSwitcher,
		megaMenuMobileSwitcher,
		megaMenuGlobalWraperClass,
		megaMenuGlobalWraperID,
		megaMenuIcon,
		megaMenuFontFamily,
		megaMenuMobileLogoUrl,
		megaMenuMobileLogoAlt,
		megaMenuMobileLogoID,
		megaMenuMobileLogoWidth,
		megaMenuMobileLogoWidthUnits,
		megaMenuMobileLogoHeight,
		megaMenuMobileLogoHeightUnits,
		megaMenuMobileLogoObjectFit,
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-advanced-megamenu',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start load font */
	useEffect(() => {
		[megaMenuFontFamily].forEach((font) => {
			if (font && !loadedFonts.has(font)) {
				loadGoogleFont(font);
				loadedFonts.add(font);
			}
		});
	}, [megaMenuFontFamily]);
	/** End load font */

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateAdvancedMegaMenuStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const blockProps = useBlockProps({
		className: `frontis-block fb-advanced-mega-menu-main-wrapper ${blockID} ${megaMenuDesktopSwitcher && 'fb-desktop-responsive'} ${megaMenuTabletSwitcher && 'fb-tablet-responsive'} ${megaMenuMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	const deviceType = useDeviceType();

	const currentPostId = useSelect(
		(select) => select('core/editor')?.getCurrentPostId?.() || 0,
		[]
	);

	const isCurrentMenuItem = useMemo(() => {
		return (item) => {
			if (!item) {
				return false;
			}

			if (item.pageId && currentPostId && String(item.pageId) === String(currentPostId)) {
				return true;
			}

			if (!item.url || typeof window === 'undefined') {
				return false;
			}

			try {
				const current = new URL(window.location.href);
				const target = new URL(item.url, window.location.origin);
				const normalize = (pathname) => pathname.replace(/\/+$/, '') || '/';

				return (
					current.origin === target.origin &&
					normalize(current.pathname) === normalize(target.pathname)
				);
			} catch (error) {
				return false;
			}
		};
	}, [currentPostId]);
	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const isProActive = true;
	const advancedMegamenuAvailable = true;


	return (
		<>
			{isSelected && (	
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-advanced-mega-menu-wrapper ${megaMenuGlobalWraperClass}`} id={megaMenuGlobalWraperID} ref={panelRef}>
					<div className="fb-mega-menu-editor">
						{(menuItems.length > 0 || megaMenuMobileLogoUrl) ? (
							<ul className={`fb-advanced-mega-menu-list fb-device-${deviceType}`}>
								{menuItems.map((item, index) => {
									const isCurrent = isCurrentMenuItem(item);

									return (
									<li
										key={index}
										className={`fb-advanced-mega-menu-item ${item.patternSlug ? 'has-mega-menu' : ''} ${isCurrent ? 'current-menu-item' : ''}`}
									>
										{item.url ? (
											<a
												href={item.url}
												className="fb-advanced-mega-menu-link"
												aria-current={isCurrent ? 'page' : undefined}
												onClick={(event) => event.preventDefault()}
											>
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
								);
								})}
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