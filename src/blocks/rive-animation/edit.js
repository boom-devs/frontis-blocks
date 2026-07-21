import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaPlaceholder,
	BlockControls,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useEffect, useRef, useState } from "@wordpress/element";
import { useDeviceType } from "@Config/displayType";
import { Rive as RiveCanvas } from "@rive-app/canvas";
import { Rive as RiveWebGL2 } from "@rive-app/webgl2";
import Inspector from "./inspector";

import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateRiveAnimationStyle from "./styling";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		blockID,
		blockStyle,
		riveAnimationImageUrl,
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationSpeed = 1,
		riveAnimationReverse = false,
		riveEffectsOnHover = "none",
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationImageID,
		riveAnimationImageAlt,
		riveRenderer = "canvas",
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-rive-animation",
		isSelected,
		attributes,
		setAttributes,
	});
	const [resizeTrigger, setResizeTrigger] = useState(0);
	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateRiveAnimationStyle(attributes);
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

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

		const shouldAutoplay =
			riveEffectsOnHover === "play-pause" || riveEffectsOnHover === "play"
				? false
				: riveAutoplay;
		let isVisible = false;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isVisible = entry.isIntersecting;
					const instance = riveInstanceRef.current;
					if (instance) {
						if (isVisible) {
							if (shouldAutoplay) instance.play();
						} else {
							instance.pause();
						}
					}
				});
			},
			{ threshold: 0.05 },
		);

		observer.observe(canvasRef.current);

		// Conditionally select renderer class based on riveRenderer attribute
		const RiveClass = riveRenderer === "webgl2" ? RiveWebGL2 : RiveCanvas;

		try {
			// First, detect what's in the file
			const tempRive = new RiveClass({
				src: riveAnimationImageUrl,
				canvas: canvasRef.current,
				autoplay: false,
				useOffscreenRenderer: true,
				onLoad: () => {
					const animations = tempRive.animationNames || [];
					const stateMachines = tempRive.stateMachineNames || [];

					// Cleanup temp instance
					tempRive.cleanup();

					// Now create the actual instance with proper config
					const config = {
						src: riveAnimationImageUrl,
						canvas: canvasRef.current,
						autoplay: true,
						useOffscreenRenderer: true,
						automaticallyHandleEvents: true,
						onLoop: () => {
							const instance = riveInstanceRef.current;
							if (!riveLoop) {
								requestAnimationFrame(() => {
									if (instance) instance.pause();
								});
							}
						},
						onLoad: () => {
							const instance = riveInstanceRef.current;
							if (instance) {
								const rect = canvasRef.current.getBoundingClientRect();
								canvasRef.current.width = rect.width * window.devicePixelRatio;
								canvasRef.current.height =
									rect.height * window.devicePixelRatio;
								instance.resizeDrawingSurfaceToCanvas();

								// Double check if it became visible while we were loading it!
								if (!shouldAutoplay) {
									instance.play();
									requestAnimationFrame(() => {
										if (instance) instance.pause();
									});
								} else {
									instance.play();
								}
							}
						},
						onLoadError: (err) => {
							console.error("Rive load error:", err);
						},
					};

					// Add state machine or animation
					if (stateMachines.length > 0) {
						config.stateMachines = stateMachines[0];
					} else if (animations.length > 0) {
						config.animations = animations[0];
					}

					riveInstanceRef.current = new RiveClass(config);
				},
				onLoadError: (err) => {
					console.error("Rive detection error:", err);
				},
			});
		} catch (error) {
			console.error("Error loading Rive animation:", error);
		}

		return () => {
			observer.disconnect();
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
		riveAnimationCanvasHeight,
		riveRenderer,
		resizeTrigger,
	]);

	// Handle canvas resize cleanly using a ResizeObserver to prevent layout stretching
	const triggerResize = () => {
		const instance = riveInstanceRef.current;
		const canvas = canvasRef.current;
		if (instance && canvas) {
			const rect = canvas.getBoundingClientRect();
			if (rect.width === 0 || rect.height === 0) return;

			// Fix canvas internal resolution
			canvas.width = rect.width * window.devicePixelRatio;
			canvas.height = rect.height * window.devicePixelRatio;

			instance.resizeDrawingSurfaceToCanvas();

			const shouldAutoplay =
				riveEffectsOnHover === "play-pause" || riveEffectsOnHover === "play"
					? false
					: riveAutoplay;

			// Repaint if paused to update the frame for the new size
			if (!shouldAutoplay && !instance.isPlaying) {
				if (typeof instance.startRendering === "function") {
					instance.startRendering();
					setTimeout(() => {
						if (riveInstanceRef.current && !riveInstanceRef.current.isPlaying) {
							riveInstanceRef.current.stopRendering?.();
						}
					}, 30);
				}
			}
		}
	};

	useEffect(() => {
		const wrapper = canvasRef.current?.parentElement;
		if (!wrapper) return;

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(triggerResize);
		});

		resizeObserver.observe(wrapper);

		return () => {
			resizeObserver.disconnect();
		};
	}, [riveEffectsOnHover, riveAutoplay]); // Stable dependencies
	// Trigger resize when device type changes
	useEffect(() => {
		if (deviceType != "Desktop") {
			const t = setTimeout(() => {
				setResizeTrigger((prev) => prev + 1);
			}, 400); // editor layout settle

			return () => clearTimeout(t);
		}
	}, [deviceType]);

	// Handle hover effects
	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas || riveEffectsOnHover === "none") {
			return;
		}

		const handleMouseEnter = () => {
			const instance = riveInstanceRef.current;
			if (!instance) return;
			switch (riveEffectsOnHover) {
				case "play":
				case "play-pause":
					instance.play();
					break;
				case "pause":
					instance.pause();
					break;
				case "stop":
					instance.stop();
					break;
			}
		};

		const handleMouseLeave = () => {
			const instance = riveInstanceRef.current;
			if (!instance) return;
			switch (riveEffectsOnHover) {
				case "play":
				case "play-pause":
					instance.pause();
					break;
				case "pause":
					const shouldAutoplay =
						riveEffectsOnHover === "play-pause" || riveEffectsOnHover === "play"
							? false
							: riveAutoplay;
					if (shouldAutoplay) instance.play();
					break;
			}
		};

		canvas.style.cursor = "pointer";
		canvas.addEventListener("mouseenter", handleMouseEnter);
		canvas.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			canvas.style.cursor = "";
			canvas.removeEventListener("mouseenter", handleMouseEnter);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [riveEffectsOnHover, riveAutoplay]);

	const onSelectRiveFile = (media) => {
		if (!media) return;

		if (!media.url.endsWith(".riv")) {
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
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

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
									allowedTypes={[
										"application/octet-stream",
										"application/json",
									]}
									value={riveAnimationImageID}
									render={({ open }) => (
										<ToolbarButton onClick={open} icon="edit" />
									)}
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
								border: riveAnimationImageUrl ? "none" : "",
								minHeight: !riveAnimationImageUrl ? "200px" : undefined,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								width: riveAnimationCanvasWidth?.[deviceType]
									? `${riveAnimationCanvasWidth[deviceType]}${
											attributes.riveAnimationCanvasWidthUnits?.[deviceType] ||
											"px"
									  }`
									: undefined,
								height: riveAnimationCanvasHeight?.[deviceType]
									? `${riveAnimationCanvasHeight[deviceType]}${
											attributes.riveAnimationCanvasHeightUnits?.[deviceType] ||
											"px"
									  }`
									: undefined,
							}}
						>
							<canvas
								ref={canvasRef}
								style={{ width: "100%", height: "100%", display: "block" }}
							/>
						</div>
					) : (
						<MediaPlaceholder
							onSelect={onSelectRiveFile}
							allowedTypes={["application/octet-stream", "application/json"]}
							accept=".riv"
							multiple={false}
							labels={{
								title: __("Rive Animation", "frontis-blocks"),
								instructions: __(
									"Drag and drop a .riv animation file, upload, or choose from your library",
									"frontis-blocks",
								),
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
