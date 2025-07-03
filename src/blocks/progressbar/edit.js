import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import Inspector from "./inspector";
import './editor.scss';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		progressbarType,
		progressTextPosition,
		progressNumberPosition,
		progressNumber,
		progressTitle,
		progressHeadingTag,

		progressGlobalWraperID,
		progressGlobalWraperClass,

		progressbarDesktopSwitcher,
		progressbarTabletSwitcher,
		progressbarMobileSwitcher,
	} = attributes;

	const outSideprogressBarRef = useRef(null);
    const inSideprogressBarRef = useRef(null);

	// useEffect(() => {
	// 	if (outSideprogressBarRef.current) {
	// 		outSideprogressBarRef.current.style.width = '0%';
	
	// 		setTimeout(() => {
	// 			if (outSideprogressBarRef.current) {
	// 				outSideprogressBarRef.current.style.width = `${progressNumber}%`;
	
	// 				const percentageLabel = outSideprogressBarRef.current.querySelector('.fb-progressbar-number');
	// 				if (percentageLabel) {
	// 					percentageLabel.style.left = `${progressNumber}%`;
	// 				}
	// 			}
	// 		}, 100);
	// 	}
	// }, [progressNumber, progressTextPosition]);

	// useEffect(() => {
	// 	if (inSideprogressBarRef.current) {

	// 		inSideprogressBarRef.current.style.width = '0%';
	
	// 		setTimeout(() => {
	// 			inSideprogressBarRef.current.style.width = `${progressNumber}%`;
	// 			const percentageLabel = inSideprogressBarRef.current.querySelector('.fb-progressbar-number');
	// 			percentageLabel.style.left = `${progressNumber}%`;
	// 		}, 100);
	// 	}
	// }, [progressNumber, progressTextPosition]);

	useEffect(() => {
		// Find the progress bar line element within the current component
		const progressBarLine = panelRef.current?.querySelector('.fb-progressbar-line');
		
		if (progressBarLine) {
			// Check if it's vertical progress bar
			const isVertical = progressbarType === 'vertical';
			
			// Reset width/height to 0% for animation
			if (isVertical) {
				progressBarLine.style.height = '0%';
			} else {
				progressBarLine.style.width = '0%';
			}
	
			// Animate the progress bar
			setTimeout(() => {
				if (progressBarLine) {
					// Set width for horizontal, height for vertical
					if (isVertical) {
						progressBarLine.style.height = `${progressNumber}%`;
						progressBarLine.style.width = '100%';
					} else {
						progressBarLine.style.width = `${progressNumber}%`;
						progressBarLine.style.height = '100%';
					}
				}
			}, 100);
		}
	}, [progressNumber, progressTextPosition, progressNumberPosition, progressbarType]);
	
	// Optional: Add CSS transition for smoother animation
	useEffect(() => {
		const progressBarLine = panelRef.current?.querySelector('.fb-progressbar-line');
		if (progressBarLine) {
			// Check if it's vertical progress bar
			const isVertical = progressbarType === 'vertical';
			
			// Set appropriate transition
			if (isVertical) {
				progressBarLine.style.transition = 'height 0.5s ease-in-out';
			} else {
				progressBarLine.style.transition = 'width 0.5s ease-in-out';
			}
		}
	}, [progressbarType]);

    const blockProps = useBlockProps({
        className: `fb-progressbar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
    });

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
				<div className={`fb-parent-wrapper fb-progressbar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID} ref={panelRef}>
						<div className="fb-progressbar-item">
							{progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && (
								<div className="fb-progressbar-content">
									<RichText
										tagName={progressHeadingTag}
										className="fb-progressbar-label"
										value={progressTitle}
										onChange={(value) => setAttributes({ progressTitle: value })}
										placeholder={__('Progress', 'frontis-blocks')}
									/>
									{progressNumberPosition === 'default' && <span className="fb-progressbar-number">{progressNumber}%</span>}
								</div>
							)}
							{progressbarType === 'vertical' && progressNumberPosition === 'default' && (
								<div className="fb-progressbar-content">
									<span className="fb-progressbar-number">{progressNumber}%</span>
								</div>
							)}
							<div className='fb-progressbar-line-wrapper'>
								<div className="fb-progressbar-line">
									{progressNumberPosition === 'with-progressbar' && <span className="fb-progressbar-number">{progressNumber}%</span>}
								</div>
									{progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && (
										<div className="fb-progressbar-content">
											<RichText
												tagName={progressHeadingTag}
												className="fb-progressbar-label"
												value={progressTitle}
												onChange={(value) => setAttributes({ progressTitle: value })}
												placeholder={__('Progress', 'frontis-blocks')}
											/>
											{progressNumberPosition === 'default' && <span className="fb-progressbar-number">{progressNumber}%</span>}
										</div>
									)}
							</div>
							{progressbarType === 'vertical' && (
								<div className="fb-progressbar-content">
									<RichText
										tagName={progressHeadingTag}
										className="fb-progressbar-label"
										value={progressTitle}
										onChange={(value) => setAttributes({ progressTitle: value })}
										placeholder={__('Progress', 'frontis-blocks')}
									/>
								</div>
							)}
						</div>
				</div>
            </div>
        </>
    );
}
