// edit.js - Fixed toolbar to accept JSON files

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import generateSrcSet from "@Utils/generateSrcSet";
import { useEffect, useRef, memo } from '@wordpress/element';
import lottie from 'lottie-web';

import Inspector from "./inspector";

function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieRenderer = 'svg',
		lottieLoop = true,
		lottieAutoplay = true,
		lottieAnimationSpeed = 1,
		lottieEffectsOnHover = 'none',
		lottieAnimationReverse = false,
		lottieAnimationImageID,
		lottieAnimationDesktopSwitcher,
		lottieAnimationTabletSwitcher,
		lottieAnimationMobileSwitcher,
		lottieAnimationGlobalWraperClass,
		lottieAnimationGlobalWraperID
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-lottie-animation-main-wrapper ${blockID} ${lottieAnimationDesktopSwitcher && 'fb-desktop-responsive'} ${lottieAnimationTabletSwitcher && 'fb-tablet-responsive'} ${lottieAnimationMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	const containerRef = useRef(null);
	const animationRef = useRef(null);

	// Load animation when attributes change
	useEffect(() => {
		if (!containerRef.current) return;

		if (animationRef.current) {
			animationRef.current.destroy();
			animationRef.current = null;
		}

		let path = null;
		if (lottieAnimationJsonTypeSwitcher === 'json-file' && lottieAnimationImageUrl) {
			path = lottieAnimationImageUrl;
		} else if (lottieAnimationJsonTypeSwitcher === 'json-url' && lottieAnimationJsonUrl) {
			path = lottieAnimationJsonUrl;
		}

		if (!path) return;

		const shouldAutoplay = (lottieEffectsOnHover === 'play-pause' || lottieEffectsOnHover === 'play') ? false : lottieAutoplay;

		const anim = lottie.loadAnimation({
			container: containerRef.current,
			renderer: lottieRenderer,
			loop: lottieLoop,
			autoplay: shouldAutoplay,
			path: path,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet',
				className: 'fb-lottie-inner',
			},
		});

		animationRef.current = anim;

		anim.addEventListener('DOMLoaded', () => {
			anim.setDirection(lottieAnimationReverse ? -1 : 1);
			anim.setSpeed(lottieAnimationSpeed);

			if (shouldAutoplay) {
				anim.play();
			}
		});

		return () => {
			if (animationRef.current) {
				animationRef.current.destroy();
				animationRef.current = null;
			}
		};
	}, [
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTypeSwitcher,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
		lottieAnimationSpeed,
		lottieEffectsOnHover,
		lottieAnimationReverse,
	]);

	useEffect(() => {
		const container = containerRef.current;
		const anim = animationRef.current;
		if (!container || !anim || lottieEffectsOnHover === 'none') return;

		const playNormally = () => {
			anim.setDirection(lottieAnimationReverse ? -1 : 1);
			anim.play();
		};

		const playReversedOnHover = () => {
			anim.setDirection(lottieAnimationReverse ? 1 : -1);
			anim.play();
		};

		const handleMouseEnter = () => {
			switch (lottieEffectsOnHover) {
				case 'play':
				case 'play-pause':
					playNormally();
					break;
				case 'pause':
					anim.pause();
					break;
				case 'stop':
					anim.stop();
					break;
				case 'reverse':
					playReversedOnHover();
					break;
				case 'toggle':
					anim.isPaused ? playNormally() : anim.pause();
					break;
			}
		};

		const handleMouseLeave = () => {
			switch (lottieEffectsOnHover) {
				case 'play':
				case 'play-pause':
					anim.pause();
					break;
				case 'pause':
					playNormally();
					break;
				case 'reverse':
					playNormally();
					break;
			}
		};

		container.style.cursor = 'pointer';
		container.addEventListener('mouseenter', handleMouseEnter);
		container.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			container.style.cursor = '';
			container.removeEventListener('mouseenter', handleMouseEnter);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [lottieEffectsOnHover, lottieAnimationReverse]);

	const onSelectImage = (media) => {
		setAttributes({
			lottieAnimationImageUrl: media.url,
			lottieAnimationImageID: media.id,
		});
	};

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<BlockControls>
				<ToolbarGroup>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["application/json"]}
							value={lottieAnimationImageID}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									icon={(lottieAnimationImageUrl || lottieAnimationImageID) ? "edit" : "upload"}
									label={(lottieAnimationImageUrl || lottieAnimationImageID) ? __("Replace JSON File", "frontis-blocks") : __("Add JSON File", "frontis-blocks")}
								/>
							)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-lottie-animation-container ${blockID} ${lottieAnimationGlobalWraperClass}`} id={lottieAnimationGlobalWraperID} ref={containerRef}>
					{!(lottieAnimationImageUrl || lottieAnimationJsonUrl) && (
						<MediaPlaceholder
							onSelect={onSelectImage}
							allowedTypes={["application/json"]}
							multiple={false}
							labels={{ title: __("Add Json File", "frontis-blocks") }}
						/>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}

export default memo(Edit);