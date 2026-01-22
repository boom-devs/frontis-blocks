import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

import { useEffect, useRef, useState } from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import Inspector from "./inspector";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		counterNumberStart,
		counterNumberEnd,
		counterDuration,
		counterPrefix,
		counterPrefixSwitch,
		counterSuffix,
		counterSuffixSwitch,
		counterTitle,
		counterTitleTag,
		counterTitleSwitch,
		showThousandsSeparator,
		showThousandsSeparatorType,
		icon,
		mediaSwitcher,
		counterGlobalWraperID,
		counterGlobalWraperClass,

		counterDesktopSwitcher,
		counterTabletSwitcher,
		counterMobileSwitcher,
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "counter-number-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const counterRef = useRef(null);
	const observerRef = useRef(null);
	const hasCounted = useRef(false);

	// Set up Intersection Observer and animation in the editor
	const animateCounter = () => {
		if (hasCounted.current) return;
		hasCounted.current = true;

		const start = counterNumberStart;
		const end = counterNumberEnd;
		const duration = counterDuration;
		let startTime = null;

		const hasDecimal = !Number.isInteger(start) || !Number.isInteger(end);

		const formatNumberWithSpace = (num) => {
			const [intPart, decPartRaw] = num.toFixed(1).split('.');
			const intWithSpaces = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			const decimalPart = hasDecimal && parseInt(decPartRaw) !== 0 ? `.${decPartRaw}` : '';
			return `${intWithSpaces}${decimalPart}`;
		};

		const step = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime) / duration, 1);
			const current = progress * (end - start) + start;

			let formattedNumber = current.toString();

			if (showThousandsSeparator) {
				switch (showThousandsSeparatorType) {
					case "comma":
						formattedNumber = current.toLocaleString("en-US", {
							minimumFractionDigits: 0,
							maximumFractionDigits: hasDecimal ? 1 : 0,
						});
						break;
					case "space":
						formattedNumber = formatNumberWithSpace(current);
						break;
					default:
						formattedNumber = current.toLocaleString(undefined, {
							minimumFractionDigits: 0,
							maximumFractionDigits: hasDecimal ? 1 : 0,
						});
				}
			} else {
				formattedNumber = hasDecimal ? current.toFixed(1) : Math.round(current).toString();
			}

			if (counterRef.current) {
				counterRef.current.textContent = formattedNumber;
			}

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	};



	useEffect(() => {
		hasCounted.current = false;

		if (observerRef.current) observerRef.current.disconnect();

		observerRef.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasCounted.current) {
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
	}, [counterNumberStart, counterNumberEnd, counterDuration, showThousandsSeparator, showThousandsSeparatorType]);



	// Icon media remove handler
	const removeCounterMedia = () => {
		setAttributes({
			counterMediaId: '',
			counterMediaUrl: ''
		});
	}
	const iconHandler = (iconName) => {
		setAttributes({ icon: iconName || 'star' })
	}

	const blockProps = useBlockProps({
		className: `fb-counter-main-wrapper ${blockID} ${counterDesktopSwitcher && 'fb-desktop-responsive'} ${counterTabletSwitcher && 'fb-tablet-responsive'} ${counterMobileSwitcher && 'fb-mobile-responsive'}`,
	});


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-counter-wrapper ${blockID} ${counterGlobalWraperClass}`} id={counterGlobalWraperID}>
					<div className="fb-counter-item">
						{mediaSwitcher !== 'none' && <div className={`fb-counter-icon-wrapper`}>
							{mediaSwitcher === 'image' && attributes.counterMediaUrl && (
								<img src={attributes.counterMediaUrl} />
							)}
							{mediaSwitcher === 'icon' && (
								<div className="fb-counter-icon">{renderSVG(icon)}</div>
							)}
						</div>}
						<div className={`fb-counter-content-wrapper`}>
							<div className={`fb-counter-number-wrapper`}>
								{counterPrefixSwitch === true && <span className={`fb-counter-number-prefix`}>{counterPrefix}</span>}
								<span ref={counterRef} className="fb-counter-number">
									{showThousandsSeparator
										? Number(0).toLocaleString()
										: 0
									}
								</span>
								{counterSuffixSwitch === true && <span className={`fb-counter-number-suffix`}>{counterSuffix}</span>}
							</div>
							{counterTitleSwitch === true &&
								<RichText
									tagName={counterTitleTag}
									value={counterTitle}
									onChange={(value) => setAttributes({ counterTitle: value })}
									placeholder={__('Counter Title...', 'frontis-blocks')}
									className="fb-counter-title"
								/>
							}
						</div>
					</div>
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
