import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
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

        showProgressTitle,
        showProgressNumber,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-progressbar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
    });
    
    return (
        <>
        	<div {...blockProps}>
            	<div className={`fb-parent-wrapper fb-progressbar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID}>
						<div className="fb-progressbar-item" data-progressbar-type={progressbarType}  data-progress={progressNumber} data-progress-number-position={progressNumberPosition}>
							{progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && (showProgressTitle || showProgressNumber) && (
								<div className="fb-progressbar-content">
									<RichText.Content
										tagName={progressHeadingTag}
										className="fb-progressbar-label"
										value={progressTitle}
									/>
									{progressNumberPosition === 'default' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
								</div>
							)}
							{progressbarType === 'vertical' && progressNumberPosition === 'default' && showProgressNumber && (
								<div className="fb-progressbar-content">
									<span className="fb-progressbar-number">{progressNumber}%</span>
								</div>
							)}
							<div className='fb-progressbar-line-wrapper'>
								<div className="fb-progressbar-line">
									{progressNumberPosition === 'with-progressbar' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
								</div>
									{progressbarType === 'horizontal' && progressTextPosition === 'text-inSide' && (showProgressTitle || showProgressNumber) && (
										<div className="fb-progressbar-content">
											<RichText.Content
												tagName={progressHeadingTag}
												className="fb-progressbar-label"
												value={progressTitle}
											/>
											{progressNumberPosition === 'default' && showProgressNumber && <span className="fb-progressbar-number">{progressNumber}%</span>}
										</div>
									)}
							</div>
							{progressbarType === 'vertical' && showProgressTitle && (
								<div className="fb-progressbar-content">
									<RichText.Content
										tagName={progressHeadingTag}
										className="fb-progressbar-label"
										value={progressTitle}
									/>
								</div>
							)}
						</div>
				</div>
            </div>
        </>
    );
}
