import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
// Internal
import Inspector from "./inspector";
import "./editor.scss";
import generateSrcSet from "@Utils/generateSrcSet";
import useDynamicImage from "@Components/use-dynamic-image";

export default function Edit({ attributes, setAttributes, clientId, context }) {
  const {
    // base
    blockID,

    // manual image
    advancedImageUrl,
    advancedImageId,
    advancedImageAlt,
    advancedImageDefaultWidth,
    advancedImageDefaultHeight,
    advancedImageSrcSet,

    // display options
    imageCaption,
    imageSize,
    imageStyle,
    imageHover,
    imageFit,
    autoFitSwitch,
    displayCaption,
    displayTitle,
    titleText,
    titleTag,
    titlePosition,
    showOverlay,

    // linking
    linkSwitch,
    linkTargetUrl,
    linkUrl,

    // wrappers / responsive flags
    advancedImageGlobalWraperID,
    advancedImageGlobalWraperClass,
    advancedImageDesktopSwitcher,
    advancedImageTabletSwitcher,
    advancedImageMobileSwitcher,

    // dynamic image attrs
    dynamicImageEnabled,
    dynamicImageSource,
    dynamicImagePostId,
    dynamicImagePostType,
    dynamicImagePostLabel,
    dynamicImageField,
    dynamicImageSize,
    dynamicImageFallbackUrl,
    dynamicImageFallbackAlt,
    dynamicImageFallbackId,
    dynamicImageEnableLink,
    dynamicImageLinkSource,
    loopAutoApplied,
  } = attributes;

  // block props (unchanged)
  const blockProps = useBlockProps({
    className: `fb-advanced-image-main-wrapper ${blockID} ${
      advancedImageDesktopSwitcher && "fb-desktop-responsive"
    } ${advancedImageTabletSwitcher && "fb-tablet-responsive"} ${
      advancedImageMobileSwitcher && "fb-mobile-responsive"
    }`,
  });

  // loop context from block.json usesContext (unchanged)
  const loopPostId   = context?.postId;
  const loopPostType = context?.postType;

  // dynamic image source
  const { renderSource: dynamicSource, isLoading } = useDynamicImage({
    imageEnabled:     dynamicImageEnabled,
    imageSource:      dynamicImageSource,
    imagePostId:      dynamicImagePostId,
    imagePostType:    dynamicImagePostType,
    imageField:       dynamicImageField,
    imageSize:        dynamicImageSize,
    imageFallbackUrl: dynamicImageFallbackUrl,
    imageFallbackAlt: dynamicImageFallbackAlt,
    loopPostType: loopPostType,
    loopPostId: loopPostId,
  });

  // manual image srcset → width/height
  useEffect(() => {
    if (!advancedImageSrcSet) return;
    const items = advancedImageSrcSet.split(", ");
    const last = items[items.length - 1] || "";
    const w = last.match(/(\d+)w/);
    const h = last.match(/(\d+)h/);
    if (w && h) {
      setAttributes({
        advancedImageDefaultWidth: parseInt(w[1], 10),
        advancedImageDefaultHeight: parseInt(h[1], 10),
      });
    }
  }, [advancedImageSrcSet]);

  // media select
  const onSelectImage = (media) => {
    const newSrcSet = generateSrcSet(media.sizes);
    setAttributes({
      advancedImageUrl: media.url,
      advancedImageId: media.id,
      advancedImageAlt: media.alt || "",
      advancedImageSrcSet: newSrcSet,
    });
  };

  const handleAnchorClick = (e) => e.preventDefault();

  // final render source (dynamic first, otherwise manual)
  const renderSource = dynamicImageEnabled
    ? (dynamicSource || null)
    : {
        url: advancedImageUrl,
        alt: advancedImageAlt || "",
        width: advancedImageDefaultWidth,
        height: advancedImageDefaultHeight,
        srcSet: advancedImageSrcSet || undefined,
      };

  return (
    <>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
        onSelectImage={onSelectImage}
      />

      <BlockControls>
        <ToolbarGroup>
          {!dynamicImageEnabled && renderSource?.url && (
            <>
              <ToolbarButton
                icon="trash"
                onClick={() =>
                  setAttributes({
                    advancedImageId: "",
                    advancedImageUrl: "",
                    advancedImageAlt: "",
                    advancedImageDefaultWidth: "",
                    advancedImageDefaultHeight: "",
                    advancedImageSrcSet: "",
                  })
                }
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage}
                  allowedTypes={["image"]}
                  value={advancedImageId}
                  render={({ open }) => <ToolbarButton onClick={open} icon="edit" />}
                />
              </MediaUploadCheck>
            </>
          )}
        </ToolbarGroup>
      </BlockControls>

      <div {...blockProps}>
        <div
          className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`}
          id={advancedImageGlobalWraperID}
        >
          <div
            className={[
              "fb-advanced-image",
              imageStyle,
              imageSize,
              imageHover,
              autoFitSwitch ? imageFit : "",
              titlePosition,
              showOverlay ? "overlay-simple" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="fb-advanced-image-inner">
              {renderSource?.url ? (
                linkSwitch ? (
                  <a
                    href={linkUrl}
                    target={linkTargetUrl ? "_blank" : undefined}
                    rel={linkTargetUrl ? "noopener noreferrer" : undefined}
                    onClick={handleAnchorClick}
                    aria-label={renderSource.alt}
                  >
                    <img
                      width={renderSource.width}
                      height={renderSource.height}
                      src={renderSource.url}
                      alt={renderSource.alt}
                      srcSet={renderSource.srcSet}
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <img
                    width={renderSource.width}
                    height={renderSource.height}
                    src={renderSource.url}
                    alt={renderSource.alt}
                    srcSet={renderSource.srcSet}
                    aria-hidden="true"
                  />
                )
              ) : (
                <>
                  {dynamicImageEnabled ? (
                    <div className="fb-advanced-image-dynamic-empty" style={{ opacity: 0.75 }}>
                      {isLoading
                        ? __("Loading dynamic image…", "frontis-blocks")
                        : __("No image available from the selected dynamic source.", "frontis-blocks")}
                    </div>
                  ) : (
                    <MediaPlaceholder
                      onSelect={onSelectImage}
                      allowedTypes={["image"]}
                      multiple={false}
                      labels={{ title: __("Add Image", "frontis-blocks") }}
                    />
                  )}
                </>
              )}
            </div>

            {displayTitle && (
              <div className="fb-advanced-image-title">
                <div className="fb-advanced-image-title-inner">
                  <RichText
                    tagName={titleTag}
                    value={titleText}
                    onChange={(value) => setAttributes({ titleText: value })}
                    placeholder={__("Add your title here...", "frontis-blocks")}
                    className="fb-advanced-title"
                  />
                </div>
              </div>
            )}
          </div>

          {displayCaption && (
            <div className="fb-advanced-image-caption">
              <RichText
                tagName="figcaption"
                value={imageCaption}
                onChange={(value) => setAttributes({ imageCaption: value })}
                placeholder={__("Add your caption here...", "frontis-blocks")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}