import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	MediaUpload,
	MediaPlaceholder,
	BlockControls,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {
	Button,
	ToolbarButton,
	ToolbarGroup
} from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import { Rive } from '@rive-app/canvas';
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		riveAnimationImageUrl,
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationSpeed = 1,
		riveAnimationReverse = false,
		riveEffectsOnHover = 'none',
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationImageID,
		riveAnimationImageAlt
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-rive-animation-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const deviceType = useDeviceType();

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
			riveInstanceRef.current.cleanup();
			riveInstanceRef.current = null;
		}

		const shouldAutoplay = (riveEffectsOnHover === 'play-pause' || riveEffectsOnHover === 'play') ? false : riveAutoplay;

		try {
			// First, detect what's in the file
			const tempRive = new Rive({
				src: riveAnimationImageUrl,
				canvas: canvasRef.current,
				autoplay: false,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];

					// Cleanup temp instance
					tempRive.cleanup();

					// Now create the actual instance with proper config
					const config = {
						src: riveAnimationImageUrl,
						canvas: canvasRef.current,
						autoplay: shouldAutoplay,
						automaticallyHandleEvents: true,
						onLoad: () => {
							const instance = riveInstanceRef.current;
							if (instance) {
								instance.resizeDrawingSurfaceToCanvas();
							}
						},
						onLoadError: (err) => {
							console.error('Rive load error:', err);
						}
					};

					// Add state machine or animation
					if (stateMachines.length > 0) {
						config.stateMachines = stateMachines[0];
					} else if (animations.length > 0) {
						config.animations = animations[0];
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
				riveInstanceRef.current.cleanup();
				riveInstanceRef.current = null;
			}
		};
	}, [
		riveAnimationImageUrl,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveAnimationReverse,
		riveEffectsOnHover,
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight
	]);

	// Handle canvas resize when dimensions change
	useEffect(() => {
		const instance = riveInstanceRef.current;
		if (instance && canvasRef.current) {
			instance.resizeDrawingSurfaceToCanvas();
		}
	}, [deviceType, riveAnimationCanvasWidth, riveAnimationCanvasHeight]);

	// Handle hover effects
	useEffect(() => {
		const canvas = canvasRef.current;
		const instance = riveInstanceRef.current;

		if (!canvas || !instance || riveEffectsOnHover === 'none') {
			return;
		}

		const handleMouseEnter = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					instance.play();
					break;
				case 'pause':
					instance.pause();
					break;
				case 'stop':
					instance.stop();
					break;
			}
		};

		const handleMouseLeave = () => {
			switch (riveEffectsOnHover) {
				case 'play':
				case 'play-pause':
					instance.pause();
					break;
				case 'pause':
					instance.play();
					break;
			}
		};

		canvas.style.cursor = 'pointer';
		canvas.addEventListener('mouseenter', handleMouseEnter);
		canvas.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			canvas.style.cursor = '';
			canvas.removeEventListener('mouseenter', handleMouseEnter);
			canvas.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [riveEffectsOnHover]);

	const onSelectRiveFile = (media) => {
		if (!media) return;

		if (!media.url.endsWith('.riv')) {
			return;
		}

		setAttributes({
			riveAnimationImageUrl: media.url,
			riveAnimationImageID: media.id,
			riveAnimationImageAlt: media.alt || media.title,
		});
	};

	return (
		<>
			<Inspector 
				attributes={attributes}
				setAttributes={setAttributes}
			/>

			<BlockControls>
				<ToolbarGroup>
					{riveAnimationImageUrl && (
						<>
							<ToolbarButton
								icon="trash"
								onClick={() =>
									setAttributes({
										riveAnimationImageUrl: "",
										riveAnimationImageID: "",
										riveAnimationImageAlt: "",
									})
								}
							/>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={onSelectRiveFile}
									allowedTypes={['application/octet-stream', 'application/json']}
									value={riveAnimationImageID}
									render={({ open }) => <ToolbarButton onClick={open} icon="edit" />}
								/>
							</MediaUploadCheck>
						</>
					)}
				</ToolbarGroup>
			</BlockControls>

			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-rive-animation-container">
					{riveAnimationImageUrl ? (
						<div
							className="fb-rive-canvas-wrapper"
							style={{
								border: riveAnimationImageUrl ? 'none' : '',
								minHeight: !riveAnimationImageUrl ? '200px' : undefined,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
							}}
						>
							<canvas
								ref={canvasRef}
								width={riveAnimationCanvasWidth?.[deviceType]}
								height={riveAnimationCanvasHeight?.[deviceType]}
							/>
						</div>
					) : (
						<MediaPlaceholder
							onSelect={onSelectRiveFile}
							allowedTypes={['application/octet-stream', 'application/json']}
							accept=".riv"
							multiple={false}
							labels={{
								title: __("Rive Animation", "frontis-blocks"),
								instructions: __("Drag and drop a .riv animation file, upload, or choose from your library", "frontis-blocks")
							}}
							icon="media-interactive"
						/>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}