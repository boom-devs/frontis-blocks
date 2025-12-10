import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useEffect, useRef } from '@wordpress/element';
import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		riveAnimationImageUrl,
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationGlobalWraperClass,
		riveAnimationGlobalWraperID,
		riveAnimationImageID,
		riveSelectedAnimation,
		riveAvailableAnimations,
		riveAnimationType,
		riveFitMode = 'contain',
		riveAlignment = 'center',
		rivePlayOnScroll,
		riveScrollThreshold = 50
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	const canvasRef = useRef(null);
	const riveInstanceRef = useRef(null);

	// Load and configure Rive animation
	useEffect(() => {
		if (!canvasRef.current || !riveAnimationImageUrl) {
			return;
		}

		// Cleanup previous instance
		if (riveInstanceRef.current) {
			riveInstanceRef.current = null;
		}

		try {
			// First detect animations and state machines
			const tempRive = new Rive({
				src: riveAnimationImageUrl,
				canvas: canvasRef.current,
				autoplay: false,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];

					console.log('Detected animations:', animations);
					console.log('Detected state machines:', stateMachines);

					// Build options array for SelectControl
					const animationOptions = [];

					animations.forEach(anim => {
						animationOptions.push({
							label: `Animation: ${anim}`,
							value: `animation:${anim}`
						});
					});

					stateMachines.forEach(sm => {
						animationOptions.push({
							label: `State Machine: ${sm}`,
							value: `stateMachine:${sm}`
						});
					});

					// Update available animations in attributes
					setAttributes({
						riveAvailableAnimations: animationOptions
					});

					// Set default selection if none exists
					if (!riveSelectedAnimation && animationOptions.length > 0) {
						setAttributes({
							riveSelectedAnimation: animationOptions[0].value
						});
					}

					// Cleanup temp instance
					tempRive.cleanup();

					// Determine which animation/state machine to use
					let useAnimation = null;
					let useStateMachine = null;
					let animType = 'animation';

					if (riveSelectedAnimation) {
						const [type, name] = riveSelectedAnimation.split(':');
						if (type === 'stateMachine' && stateMachines.includes(name)) {
							useStateMachine = name;
							animType = 'stateMachine';
						} else if (type === 'animation' && animations.includes(name)) {
							useAnimation = name;
							animType = 'animation';
						}
					}

					// Fallback to first available
					if (!useAnimation && !useStateMachine) {
						if (stateMachines.length > 0) {
							useStateMachine = stateMachines[0];
							animType = 'stateMachine';
						} else if (animations.length > 0) {
							useAnimation = animations[0];
							animType = 'animation';
						}
					}

					// Update animation type
					setAttributes({ riveAnimationType: animType });
					
					// Create actual instance with proper configuration
					const config = {
						src: riveAnimationImageUrl,
						canvas: canvasRef.current,
						autoplay: riveAutoplay,
						automaticallyHandleEvents: true,
						onLoad: () => {
							const instance = riveInstanceRef.current;
							if (instance) {
								instance.resizeDrawingSurfaceToCanvas();
								console.log('Rive animation loaded successfully');
							}
						},
						onLoadError: (err) => {
							console.error('Rive load error:', err);
						}
					};

					// Add state machine or animation based on selection
					if (useStateMachine) {
						config.stateMachines = useStateMachine;
					} else if (useAnimation) {
						config.animations = useAnimation;
					}

					riveInstanceRef.current = new Rive(config);
				},
				onLoadError: (err) => {
					console.error('Rive detection error:', err);
				}
			});
		} catch (error) {
			console.error('Error loading Rive animation:', error);
		}

		return () => {
			if (riveInstanceRef.current) {
				riveInstanceRef.current = null;
			}
		};
	}, [
		riveAnimationImageUrl,
		riveAutoplay,
		riveSelectedAnimation,
		rivePlayOnScroll
	]);


	const onSelectImage = (media) => {
		setAttributes({
			riveAnimationImageUrl: media.url,
			riveAnimationImageID: media.id,
			riveSelectedAnimation: '',
			riveAvailableAnimations: []
		});
	};

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon="trash"
						onClick={() =>
							setAttributes({
								riveAnimationImageUrl: "",
								riveAnimationImageID: "",
								riveSelectedAnimation: '',
								riveAvailableAnimations: []
							})
						}
					/>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onSelectImage}
							allowedTypes={["application/octet-stream"]}
							value={riveAnimationImageID}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									icon={(riveAnimationImageUrl || riveAnimationImageID) ? "edit" : "upload"}
									label={(riveAnimationImageUrl || riveAnimationImageID) ? __("Replace Rive File", "frontis-blocks") : __("Add Rive File", "frontis-blocks")}
								/>
							)}
						/>
					</MediaUploadCheck>
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-rive-animation-container ${blockID} ${riveAnimationGlobalWraperClass}`} id={riveAnimationGlobalWraperID} ref={riveInstanceRef}>
					<div
						className="fb-rive-canvas-wrapper"

					>
						{riveAnimationImageUrl ? (
							<canvas
								ref={canvasRef}
								style={{
									width: '100%',
									height: '100%',
									maxWidth: '100%',
								}}
							/>
						) : (
							<MediaPlaceholder
								onSelect={onSelectImage}
								allowedTypes={["application/octet-stream"]}
								multiple={false}
								labels={{ title: __("Add Rive File", "frontis-blocks") }}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}