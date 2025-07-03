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
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-progressbar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
    });
    
    return (
        <>
            <div {...blockProps}>
            <div className={`fb-parent-wrapper fb-progressbar-wrapper ${progressGlobalWraperClass}`} id={progressGlobalWraperID} data-progressbar-type={progressbarType}  data-progress={progressNumber}>
						<div className="fb-progressbar-item">
							{progressbarType === 'horizontal' && progressTextPosition === 'text-outSide' && (
								<div className="fb-progressbar-content">
									<RichText.Content
										tagName={progressHeadingTag}
										className="fb-progressbar-label"
										value={progressTitle}
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
											<RichText.Content
												tagName={progressHeadingTag}
												className="fb-progressbar-label"
												value={progressTitle}
											/>
											{progressNumberPosition === 'default' && <span className="fb-progressbar-number">{progressNumber}%</span>}
										</div>
									)}
							</div>
							{progressbarType === 'vertical' && (
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
