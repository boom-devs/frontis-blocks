import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { parse } from '@wordpress/blocks';
import Inspector from './inspector';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		selectedTemplate,
		menuPosition = 'left',
		iconStyle = 'hamburger',
	} = attributes;

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const patternData = useSelect(select => {
		if (!selectedTemplate) return null;

		if (select('core')) {
			const patterns = select('core').getBlockPatterns() || [];
			return patterns.find(pattern => pattern.name === selectedTemplate);
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
			}
		}
	}, [patternData, clientId]);

	// Get the appropriate icon based on iconStyle
	const getIcon = () => {
		switch (iconStyle) {
			case 'dots':
				return (
					<div className="fb-menu-icon fb-dots-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				);
			case 'plus':
				return (
					<div className="fb-menu-icon fb-plus-icon">
						<span></span>
						<span></span>
					</div>
				);
			case 'hamburger':
			default:
				return (
					<div className="fb-menu-icon fb-hamburger-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				);
		}
	};

	const menuPositionClass = `fb-off-canvas-menu-${menuPosition}`;

	const blockProps = useBlockProps({
		className: `fb-off-canvas-menu-block ${blockID}`,
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
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			{/* Hamburger Icon Button */}
			<div
				className="fb-menu-toggle-btn"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				role="button"
				tabIndex="0"
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						setIsMenuOpen(!isMenuOpen);
					}
				}}
			>
				{getIcon()}
			</div>

			{/* Off-Canvas Menu Container */}
			<div className={`fb-off-canvas-menu ${menuPositionClass} ${isMenuOpen ? 'open' : ''}`}>
				<div className="fb-off-canvas-header">
					<button
						className="fb-close-menu"
						onClick={() => setIsMenuOpen(false)}
					>
						×
					</button>
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
					className="fb-menu-overlay"
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}
		</div>
	);
}