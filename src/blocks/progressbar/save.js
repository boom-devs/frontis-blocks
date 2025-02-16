import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    
    const {
		blockID,
		progressTextPosition,
		progressNumber,
		progressTitle,
		progressHeadingTag,

		progressGlobalWraperID,
		progressGlobalWraperClass,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-progress-bar-main-wrapper ${blockID}`,
    });
    
    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper progress-bar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID}>
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
