import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import Inspector from "./inspector";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		progressTextPosition,
		progressNumber,
		progressTitle,
		progressHeadingTag,
	} = attributes;

	const outSideprogressBarRef = useRef(null);
    const inSideprogressBarRef = useRef(null);

	useEffect(() => {
		if (outSideprogressBarRef.current) {
			outSideprogressBarRef.current.style.width = '0%';
	
			setTimeout(() => {
				outSideprogressBarRef.current.style.width = `${progressNumber}%`;
	
				const percentageLabel = outSideprogressBarRef.current.querySelector('.progress-bar-number');
				percentageLabel.style.left = `${progressNumber}%`;
			}, 100);
		}
	}, [progressNumber, progressTextPosition]);

	useEffect(() => {
		if (inSideprogressBarRef.current) {

			inSideprogressBarRef.current.style.width = '0%';
	
			setTimeout(() => {
				inSideprogressBarRef.current.style.width = `${progressNumber}%`;
				const percentageLabel = inSideprogressBarRef.current.querySelector('.progress-bar-number');
				percentageLabel.style.left = `${progressNumber}%`;
			}, 100);
		}
	}, [progressNumber, progressTextPosition]);

    const blockProps = useBlockProps({
        className: `fb-progress-bar-main-wrapper ${blockID}`,
    });

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
            
            <div {...blockProps}>
				<div className='fb-parent-wrapper progress-bar-wrapper'>
					{progressTextPosition === 'text-outSide' && (
						<div className="progress-bar-text-outSide-wrapper">
							<div className="progress-bar-label">
								<RichText
									tagName={progressHeadingTag}
									value={progressTitle}
									onChange={(value) => setAttributes({ progressTitle: value })}
									placeholder={__('Progress', 'frontis-blocks')}
								/>
							</div>
							<div className='progress-bar-line'>
								<div
									className="progress-bar"
									ref={outSideprogressBarRef}
								>
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
								ref={inSideprogressBarRef}
							>
								<div className="progress-bar-info">
									<RichText
										className='progress-bar-name'
										tagName={progressHeadingTag}
										value={progressTitle}
										onChange={(value) => setAttributes({ Progress_Title: value })}
										placeholder={__('Progress', 'frontis-blocks')}
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
}
