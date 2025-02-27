import { useBlockProps, RichText } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            progressTextPosition,
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
            className: `fb-progress-bar-main-wrapper ${blockID} ${progressbarDesktopSwitcher && 'fb-desktop-responsive'} ${progressbarTabletSwitcher && 'fb-tablet-responsive'} ${progressbarMobileSwitcher && 'fb-mobile-responsive'}`,
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
            </>
        );
    },
};

export default [v1_0_3];