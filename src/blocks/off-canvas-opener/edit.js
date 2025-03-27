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
		menuPosition,
		iconStyle,
		animation
	} = attributes;

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const patternData = useSelect(select => {
		if (!selectedTemplate) return null;
	
		// Check if it's a user pattern (starts with 'user-')
		if (selectedTemplate.startsWith('user-')) {
			const id = parseInt(selectedTemplate.replace('user-', ''), 10);
			
			if (select('core')) {
				// Get user patterns from wp_block post type
				const userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
				const userPattern = userPatterns.find(p => p.id === id);
				
				// For user patterns, content is in content.raw
				if (userPattern && userPattern.content && userPattern.content.raw) {
					return {
						content: userPattern.content.raw
					};
				}
			}
		} else {
			// It's a core pattern
			if (select('core')) {
				const patterns = select('core').getBlockPatterns() || [];
				return patterns.find(pattern => pattern.name === selectedTemplate);
			}
		}
		
		return null;
	}, [selectedTemplate]);

	// Update innerBlocks when pattern changes
	useEffect(() => {
		console.log("Selected template:", selectedTemplate);
		console.log("Pattern data:", patternData);
		
		if (patternData && patternData.content) {
			const parsedBlocks = parse(patternData.content);
			console.log("Parsed blocks:", parsedBlocks);
			
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
	const menuOpenClass = isMenuOpen ? 'fb-menu-open' : '';
	const menuAnimationClass = animation ? `fb-animation-${animation}` : '';

	const blockProps = useBlockProps({
		className: `fb-off-canvas-menu-block ${blockID} ${menuOpenClass}`,
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

			{/* Toggle Button with animated icon */}
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
				{getIcon()}
			</div>

			{/* Off-Canvas Menu Container */}
			<div className={`fb-off-canvas-menu ${menuPositionClass} ${isMenuOpen ? 'open' : ''}`}>
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
	);
}