import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
} from '@wordpress/block-editor';

import Inspector from "./inspector";
import {useEffect, useRef, useState} from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterGlobalWraperID,
		counterGlobalWraperClass,

		counterDesktopSwitcher,
		counterTabletSwitcher,
		counterMobileSwitcher,
	} = attributes;

	const counterRef = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "counter-number" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);


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


	// Icon media remove handler
	const removeCounterMedia = () => {
		setAttributes({
			counterMediaId: '',
			counterMediaUrl: ''
		});
	}
	const iconHandler = (iconName) => {
		setAttributes({icon: iconName || 'star' })
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
						<div className={`fb-counter-icon-wrapper`}>
							{mediaSwitcher === 'image' && attributes.counterMediaUrl && (
								<img src={attributes.counterMediaUrl}/>
							)}
							{mediaSwitcher === 'icon' && (
								<div className="fb-counter-icon">{renderSVG(icon)}</div>
							)}
						</div>
						<div className={`fb-counter-number-wrapper`}>
							<span className={`fb-counter-number-prefix`}>{counterPrefix}</span>
							 <span ref={counterRef} className="fb-counter-number">
								{showThousandsSeparator
									? Number(0).toLocaleString()
									: 0
								}
                        	</span>
							<span className={`fb-counter-number-suffix`}>{counterSuffix}</span>
						</div>
						<span className="fb-counter-title">
                            {counterTitle}
                        </span>
					</div>
				</div>
			</div>
		</>
	);
}
