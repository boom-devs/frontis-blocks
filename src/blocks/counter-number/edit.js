import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl, DateTimePicker, Dropdown, Button, Dashicon, SelectControl, ButtonGroup, ColorPalette,
} from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		blockID,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		counterColor,
		titleColor,
		counterBgColor,
		showThousandsSeparator,
	} = attributes;

	const counterRef = useRef(null);
	const observerRef = useRef(null);

	// Generate unique block ID if not set
	useEffect(() => {
		if (!blockID) {
			setAttributes({ blockID: 'block-' + Math.random().toString(36).substr(2, 9) });
		}
	}, [blockID, setAttributes]);

	// Set up Intersection Observer and animation in the editor
	useEffect(() => {
		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					animateCounter();
				}
			});
		});

		if (counterRef.current) {
			observerRef.current.observe(counterRef.current);
		}

		return () => {
			if (observerRef.current) observerRef.current.disconnect();
		};
	}, [counterNumber, showThousandsSeparator]);

	const animateCounter = () => {
		let start = 0;
		const end = counterNumber;
		const duration = 2000; // Animation duration in milliseconds
		let startTime = null;

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = Math.floor(progress * (end - start) + start);

			counterRef.current.textContent = showThousandsSeparator
				? current.toLocaleString()
				: current;

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	};

	const blockProps = useBlockProps();

	return (
		<>
			<style>
				{`
                #${blockID} .fb-counter-wrapper {
                    background-color: ${counterBgColor};
                }
            `}
			</style>


			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
									<PanelBody title={__("general", "frontis-blocks")} initialOpen={true}>
										<RangeControl
											label={__('Counter Number', 'frontis-blocks')}
											value={counterNumber}
											onChange={(value) => setAttributes({ counterNumber: value })}
											min={0}
											max={10000}
										/>
										<TextControl
											label={__('Counter Title', 'frontis-blocks')}
											value={counterTitle}
											onChange={(value) => setAttributes({ counterTitle: value })}
										/>
										<TextControl
											label={__('Counter Prefix', 'frontis-blocks')}
											value={counterPrefix}
											onChange={(value) => setAttributes({ counterPrefix: value })}
										/>
										<TextControl
											label={__('Counter Suffix', 'frontis-blocks')}
											value={counterSuffix}
											onChange={(value) => setAttributes({ counterSuffix: value })}
										/>
										<ToggleControl
											label={__('Show Thousands Separator', 'frontis-blocks')}
											checked={showThousandsSeparator}
											onChange={(value) => setAttributes({ showThousandsSeparator: value })}
										/>
									</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Style", "frontis-blocks")} initialOpen={true}>
											<BaseControl label={__('Counter Color', 'frontis-blocks')}>
												<ColorPicker
													color={counterColor}
													onChange={(color) => setAttributes({ counterColor: color })}
													enableAlpha
												/>
											</BaseControl>
											<BaseControl label={__('Title Color', 'frontis-blocks')}>
												<ColorPicker
													color={titleColor}
													onChange={(color) => setAttributes({ titleColor: color })}
													enableAlpha
												/>
											</BaseControl>
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>
				<div className="fb-counter-wrapper">
					<div className="fb-counter-item">
						<div className={`fb-counter-icon`}>

						</div>
						<div className={`fb-counter-number-wrapper`}>
							<span className={`fb-counter-number-prefix`}>{counterPrefix}</span>
							                        <span
														ref={counterRef}
														className="fb-counter-number"
														style={{ color: counterColor }}
													>
                            {showThousandsSeparator
								? Number(0).toLocaleString()
								: 0
							}
                        	</span>
							<span className={`fb-counter-number-suffix`}>{counterSuffix}</span>
						</div>
						<span
							className="fb-counter-title"
							style={{ color: titleColor }}
						>
                            {counterTitle}
                        </span>
					</div>
				</div>
			</div>
		</>
	);
}
