import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    
    const {
		blockID,
		DeviceType,
        progressGlobalZIndex,
		progressTextPosition,
		progressNumber,
		progressColor,
        progressHoverColor,

		progressTextColor,
        progressTextHoverColor,

		progressBgColor,
        progressBgHoverColor,

		progressTitle,
		progressHeadingTag,
		progressBarHeight,

		progressBorderRadiusUnits,
		progressBorderRadiusDesktop,
		progressBorderRadiusTablet,
		progressBorderRadiusMobile,

        progressFontFamily,
        progressFontSize,
        progressFontSizeUnits,
        progressFontWeight,
        progressFontStyle,
        progressTextTransform,
        progressTextDecoration,
        progressLetterSpacing,
        progressLetterSpacingUnits,
        progressLineHeight,
        progressLineHeightUnits,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-progress-bar-main-wrapper ${blockID}`,
    });

    /** Default border radius for Progress */
    const progressDesktopBorderRadiusWidth = `${progressBorderRadiusDesktop.top}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.right}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.bottom}${progressBorderRadiusUnits.Desktop} ${progressBorderRadiusDesktop.left}${progressBorderRadiusUnits.Desktop}`;
    const progressTabletBorderRadiusWidth = `${progressBorderRadiusTablet.top}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.right}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.bottom}${progressBorderRadiusUnits.Tablet} ${progressBorderRadiusTablet.left}${progressBorderRadiusUnits.Tablet}`;
    const progressMobileBorderRadiusWidth = `${progressBorderRadiusMobile.top}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.right}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.bottom}${progressBorderRadiusUnits.Mobile} ${progressBorderRadiusMobile.left}${progressBorderRadiusUnits.Mobile}`;
    /** End Progress Border Radius */
    
    return (
        <>

            <style>
            {`
                .${blockID} .progress-bar-wrapper {
                    position: relative;
                    z-index: ${progressGlobalZIndex !== undefined ? progressGlobalZIndex : ''};
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
                    ${progressTextColor ? `color: ${progressTextColor} !important;` : ''}
                    ${progressFontFamily ? `font-family: ${progressFontFamily};` : ''}
                    ${progressFontSize.Desktop && progressFontSizeUnits.Desktop ? `font-size: ${progressFontSize.Desktop}${progressFontSizeUnits.Desktop};` : ''}
                    ${progressFontWeight ? `font-weight: ${progressFontWeight};` : ''}
                    ${progressFontStyle ? `font-style: ${progressFontStyle};` : ''}
                    ${progressTextTransform ? `text-transform: ${progressTextTransform};` : ''}
                    ${progressTextDecoration ? `text-decoration: ${progressTextDecoration};` : ''}
                    ${progressLetterSpacing.Desktop && progressLetterSpacingUnits.Desktop ? `letter-spacing: ${progressLetterSpacing.Desktop}${progressLetterSpacingUnits.Desktop};` : ''}
                    ${progressLineHeight.Desktop && progressLineHeightUnits.Desktop ? `line-height: ${progressLineHeight.Desktop}${progressLineHeightUnits.Desktop};` : ''}
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label:hover {
					color: ${progressTextHoverColor} !important;
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line {
                    background-color: ${progressBgColor};
                    border-radius: ${progressDesktopBorderRadiusWidth};
					position: relative;
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line:hover {
                    background-color: ${progressBgHoverColor};
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
					height: ${progressBarHeight ? `${progressBarHeight}px` : '2px'};
                    background-color: ${progressColor};
                    border-radius: ${progressDesktopBorderRadiusWidth};
                    transition: width 0.5s ease-in-out;
                    width: ${progressNumber}%;
                }
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar:hover {
                    background-color: ${progressHoverColor};
                    transition: ease-in-out .5s;
                }
				.${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number {
					position: absolute;
					top: -30px;
					left: 150px; 
					transform: translateX(-100%);
					transition: left 0.5s ease-in-out;
                    color: ${progressTextColor};
				}
                .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number:hover {
					color: ${progressTextHoverColor};
				}
                
				.${blockID} .progress-bar-text-inSide-wrapper {
                    display: flex;
                    background-color: ${progressBgColor};
                    border-radius: ${progressDesktopBorderRadiusWidth};
					height: ${progressBarHeight ? `${progressBarHeight}px` : '30px'};
					overflow: hidden;
                }
                .${blockID} .progress-bar-text-inSide-wrapper:hover {
                    background-color: ${progressBgHoverColor};
                }
				.${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    transition: width .6s ease;
                    background-color: ${progressColor};
                    border-radius: ${progressDesktopBorderRadiusWidth};
					transition: width 0.5s ease-in-out;
					width: ${progressNumber}%;
                }
                .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label:hover {
                    background-color: ${progressHoverColor};
                    transition: ease-in-out .5s;
                }

				.${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info {
                    padding-right: 1rem;
                    padding-left: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 1;
                    border-radius: ${progressDesktopBorderRadiusWidth};
					color: ${progressTextColor};
					font-size: 14px;
                }
                .${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info:hover {
					color: ${progressTextHoverColor};
                }

                @media only screen and (max-width: 1024px) {
                    .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
					.${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
					.${blockID} .progress-bar-text-inSide-wrapper,
					.${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                        border-radius: ${progressTabletBorderRadiusWidth} !important;  
                    }
                    .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
                        ${progressFontSize.Tablet && progressFontSizeUnits.Tablet ? `font-size: ${progressFontSize.Tablet}${progressFontSizeUnits.Tablet};` : ''}
                        ${progressLetterSpacing.Tablet && progressLetterSpacingUnits.Tablet ? `letter-spacing: ${progressLetterSpacing.Tablet}${progressLetterSpacingUnits.Tablet};` : ''}
                        ${progressLineHeight.Tablet && progressLineHeightUnits.Tablet ? `line-height: ${progressLineHeight.Tablet}${progressLineHeightUnits.Tablet};` : ''}   
                    }
                }

                @media only screen and (max-width: 767px) {
                    .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
					.${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
					.${blockID} .progress-bar-text-inSide-wrapper,
					.${blockID} .progress-bar-text-inSide-wrapper .progress-bar-label {
                        border-radius: ${progressMobileBorderRadiusWidth} !important;
                    }
                    .${blockID} .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label { 
                        ${progressFontSize.Mobile && progressFontSizeUnits.Mobile ? `font-size: ${progressFontSize.Mobile}${progressFontSizeUnits.Mobile};` : ''}
                        ${progressLetterSpacing.Mobile && progressLetterSpacingUnits.Mobile ? `letter-spacing: ${progressLetterSpacing.Mobile}${progressLetterSpacingUnits.Mobile};` : ''}
                        ${progressLineHeight.Mobile && progressLineHeightUnits.Mobile ? `line-height: ${progressLineHeight.Mobile}${progressLineHeightUnits.Mobile};` : ''}  
                    }
                }
                
            `}
            </style>

            <div {...blockProps}>
                <div className='progress-bar-wrapper'>
                    {progressTextPosition === 'text-outSide' && (
                        <div className="progress-bar-text-outSide-wrapper">
                            <div className="progress-bar-label">
                                <RichText.Content
                                    tagName={progressHeadingTag}
                                    value={progressTitle}
                                />
                            </div>
                            <div className='progress-bar-line'>
                                <div className="progress-bar">
                                    <span className="progress-bar-number">{progressNumber}%</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {progressTextPosition === 'text-inSide' && (
						<div className="progress-bar-text-inSide-wrapper">
							<div 
								className="progress-bar-label"
								data-level={progressNumber} 
								style={{ width: `${progressNumber}%` }}
							>
								<div className="progress-bar-info">
									<RichText.Content
										className='progress-bar-name'
										tagName={progressHeadingTag}
										value={progressTitle}
									/>
									<span className="progress-bar-number">{progressNumber}%</span>
								</div>
							</div>
						</div>
					)}

                </div>
            </div>

            <script>
                {`(function() {
                    // Handle text-outSide progress bars
                    const progressBarsOutSide = document.querySelectorAll('.${blockID} .progress-bar');
                    
                    progressBarsOutSide.forEach(progressBar => {
                        const percentageSpan = progressBar.querySelector('.progress-bar-number');
                        const finalCount = progressBar.getAttribute('data-progress') || ${progressNumber};
                        let count = 0;
                        const animationDuration = 500;
                        const intervalTime = 10;
                        const step = finalCount / (animationDuration / intervalTime);
                        
                        // Reset the width for animation replay
                        progressBar.style.width = '0%';
                        percentageSpan.textContent = '0%';
                        
                        // Delay to allow the initial render
                        setTimeout(() => {
                            const interval = setInterval(() => {
                                count += step;

                                if (count >= finalCount) {
                                    count = finalCount;
                                    clearInterval(interval);
                                }

                                progressBar.style.width = count + '%';
                                percentageSpan.textContent = Math.round(count) + '%';
                                percentageSpan.style.left = count + '%';

                            }, intervalTime);
                            
                        }, 100);
                    });

                    // Handle text-inSide progress bars
                    const progressBarsInSide = document.querySelectorAll('.${blockID} .progress-bar-text-inSide-wrapper');

                    progressBarsInSide.forEach(wrapper => {
                        const progressBarLabel = wrapper.querySelector('.progress-bar-label');
                        const percentageSpan = wrapper.querySelector('.progress-bar-number');
                        const finalCount = ${progressNumber};
                        
                        // Reset width for animation replay
                        progressBarLabel.style.width = '0%';
                        percentageSpan.textContent = '0%';
                        
                        // Delay to allow the initial render
                        setTimeout(() => {
                            progressBarLabel.style.width = finalCount + '%';
                            percentageSpan.textContent = finalCount + '%';
                            percentageSpan.style.left = finalCount + '%';
                        }, 100); // Delay to allow the initial render
                    });
                })();`}
            </script>

        </>
    );
}
