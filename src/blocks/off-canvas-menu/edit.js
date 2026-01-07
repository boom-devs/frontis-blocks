import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect, useRef, lazy, Suspense } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import './editor.scss';

const Inspector = lazy(() => import('./inspector'));

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		selectedTemplate,
		menuPosition,
		hamburgerIcon,
		hamburgerText,
		menuType,
		closeMenuType,
		closeMenuIcon,
		closeMenuText,
		offCanvasGlobalWraperClass,
		offCanvasGlobalWraperID,
		offCanvasDesktopSwitcher,
		offCanvasTabletSwitcher,
		offCanvasMobileSwitcher
	} = attributes;

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const patternData = useSelect(select => {
		if (!selectedTemplate) return null;

		if (selectedTemplate.startsWith('user-')) {
			const id = parseInt(selectedTemplate.replace('user-', ''), 10);

			if (select('core')) {
				// Get user patterns from wp_block post type
				const userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
				const userPattern = userPatterns.find(p => p.id === id);

				if (userPattern && userPattern.content && userPattern.content.raw) {
					return {
						content: userPattern.content.raw
					};
				}
			}
		} else {
			if (select('core')) {
				const patterns = select('core').getBlockPatterns() || [];
				return patterns.find(pattern => pattern.name === selectedTemplate);
			}
		}

		return null;
	}, [selectedTemplate]);

	// Update innerBlocks when pattern changes
	useEffect(() => {

		if (patternData && patternData.content) {
			const parsedBlocks = parse(patternData.content);

			if (parsedBlocks && parsedBlocks.length > 0) {
				const { replaceInnerBlocks } = wp.data.dispatch(blockEditorStore);
				replaceInnerBlocks(clientId, parsedBlocks, false);
			} else {
				console.warn("No blocks parsed from pattern content");
			}
		} else {
			console.warn("No content found in pattern data");
		}
	}, [patternData, clientId]);

	const getIcon = () => {
		if (hamburgerIcon) {
			return (
				<div className="fb-menu-icon">
					{renderSVG(hamburgerIcon)}
				</div>
			);
		}
		return null;
	};

	const getText = () => {
		if (!hamburgerText) return null;

		return (
			<span className="fb-menu-text">
				{hamburgerText}
			</span>
		);
	};

	/**
		* Manages tab button settings and switches to block settings on click
		*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const menuPositionClass = `fb-off-canvas-menu-${menuPosition}`;
	const menuOpenClass = isMenuOpen ? 'fb-menu-open' : '';

	const blockProps = useBlockProps({
		className: `fb-off-canvas-menu-block ${blockID} ${offCanvasDesktopSwitcher && 'fb-desktop-responsive'} ${offCanvasTabletSwitcher && 'fb-tablet-responsive'} ${offCanvasMobileSwitcher && 'fb-mobile-responsive'}`
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-off-canvas-content',
		},
		{
			templateLock: false,
		}
	);

	return (
		<div {...blockProps}>
			<Suspense fallback={null}>
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</Suspense>

			<div className={`fb-off-canvas-menu-container ${offCanvasGlobalWraperClass}`} id={offCanvasGlobalWraperID} ref={panelRef}>
				<div
					className={`fb-menu-toggle-btn ${isMenuOpen ? 'active' : ''}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					role="button"
					tabIndex="0"
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? __('Close menu', 'frontis-blocks') : __('Open menu', 'frontis-blocks')}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							setIsMenuOpen(!isMenuOpen);
						}
					}}
				>
					{(menuType === 'icon' || menuType === 'icon-text') && getIcon()}
					{(menuType === 'text' || menuType === 'icon-text') && getText()}
				</div>

				{/* Off-Canvas Menu Container */}
				<div className={`fb-off-canvas-menu ${menuPositionClass} ${isMenuOpen ? 'open' : ''}`}>
					{/* Close Button */}
					<div className="fb-off-canvas-header">
						{(closeMenuType === 'icon' || closeMenuType === 'icon-text') && (
							<div
								className="fb-close-menu icon"
								onClick={() => setIsMenuOpen(false)}
								aria-label={__('Close menu', 'frontis-blocks')}
							>
								{renderSVG(closeMenuIcon)}
							</div>
						)}
						{(closeMenuType === 'text' || closeMenuType === 'icon-text') && (
							<div
								className="fb-close-menu text"
								onClick={() => setIsMenuOpen(false)}
								aria-label={__('Close menu', 'frontis-blocks')}
							>
								{closeMenuText}
							</div>
						)}
					</div>

					{selectedTemplate ? (
						<div {...innerBlocksProps} />
					) : (
						<div className="fb-pattern-placeholder">
							<p>{__('Select a pattern from the sidebar to display here', 'frontis-blocks')}</p>
						</div>
					)}
				</div>

				{/* Overlay */}
				{isMenuOpen && (
					<div
						className={`fb-menu-overlay ${isMenuOpen ? 'active' : ''}`}
						onClick={() => setIsMenuOpen(false)}
					></div>
				)}
			</div>
			<style>{blockStyle}</style>
		</div>
	);
}