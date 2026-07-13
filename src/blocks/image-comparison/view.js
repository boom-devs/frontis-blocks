jQuery(document).ready(function ($) {
    function initImageComparison() {
        $(".fb-img-comp-overlay").each(function () {
            const $overlay = $(this);
            const $wrapper = $overlay.closest(".fb-image-comparison-slider-wrapper");
            if ($wrapper.length === 0 || $wrapper.find(".fb-image-comparison-slider").length > 0) {return;}
            let clicked = false;
            const direction = $wrapper.attr('data-direction') || 'horizontal';
            let offsetData = $wrapper.attr('data-offset');
            if (offsetData) {
                try {
                    offsetData = JSON.parse(offsetData);
                } catch (e) {
                    offsetData = { Desktop: 50, Tablet: 50, Mobile: 50 };
                }
            } else {
                offsetData = { Desktop: 50, Tablet: 50, Mobile: 50 };
            }

            let offset = 50;
            const windowWidth = $(window).width();
            if (windowWidth <= 767) {
                offset = offsetData.Mobile !== undefined ? offsetData.Mobile : 50;
            } else if (windowWidth <= 1024) {
                offset = offsetData.Tablet !== undefined ? offsetData.Tablet : 50;
            } else {
                offset = offsetData.Desktop !== undefined ? offsetData.Desktop : 50;
            }

            const isVertical = direction === 'vertical';

            if (isVertical) {
                $overlay.css({
                    "width": "",
                    "clip-path": `inset(0 0 ${100 - offset}% 0)`,
                    "-webkit-clip-path": `inset(0 0 ${100 - offset}% 0)`
                });
            } else {
                $overlay.css({
                    "width": "",
                    "clip-path": `inset(0 ${100 - offset}% 0 0)`,
                    "-webkit-clip-path": `inset(0 ${100 - offset}% 0 0)`
                });
            }

            // const $slider = $('<div class="fb-image-comparison-slider"></div>');
            const $slider = $('<div class="fb-image-comparison-slider"><div class="fb-slider-arrows"><span class="fb-arrow-left"></span><span class="fb-arrow-right"></span></div></div>');
            $wrapper.append($slider);

            if (isVertical) {
                $slider.css({
                    top: offset + "%",
                    left: "50%"
                });
            } else {
                $slider.css({
                    left: offset + "%",
                    top: "50%"
                });
            }

            const hoverToSlide = $wrapper.attr('data-hover') === 'true';
            const clickToMove = $wrapper.attr('data-click') === 'true';

            if (hoverToSlide) {
                $wrapper.on("mousemove", function (e) {
                    const rect = $wrapper[0].getBoundingClientRect();

                    if (isVertical) {
                        let y = e.clientY - rect.top;
                        if (y < 0) y = 0;
                        if (y > rect.height) y = rect.height;
                        const pct = (y / rect.height) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 0 ${100 - pct}% 0)`,
                            "-webkit-clip-path": `inset(0 0 ${100 - pct}% 0)`
                        });
                        $slider.css({ top: pct + "%" });

                    } else {
                        let x = e.clientX - rect.left;
                        if (x < 0) x = 0;
                        if (x > rect.width) x = rect.width;
                        const pct = (x / rect.width) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 ${100 - pct}% 0 0)`,
                            "-webkit-clip-path": `inset(0 ${100 - pct}% 0 0)`
                        });
                        $slider.css({ left: pct + "%" });
                    }
                });

                // Support touch screens when hoverToSlide is active
                $wrapper.on("touchmove", function (e) {
                    const rect = $wrapper[0].getBoundingClientRect();
                    const event = e.originalEvent && e.originalEvent.touches
                        ? e.originalEvent.touches[0]
                        : e;

                    if (isVertical) {
                        let y = event.clientY - rect.top;
                        if (y < 0) y = 0;
                        if (y > rect.height) y = rect.height;
                        const pct = (y / rect.height) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 0 ${100 - pct}% 0)`,
                            "-webkit-clip-path": `inset(0 0 ${100 - pct}% 0)`
                        });
                        $slider.css({ top: pct + "%" });
                    } else {
                        let x = event.clientX - rect.left;
                        if (x < 0) x = 0;
                        if (x > rect.width) x = rect.width;
                        const pct = (x / rect.width) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 ${100 - pct}% 0 0)`,
                            "-webkit-clip-path": `inset(0 ${100 - pct}% 0 0)`
                        });
                        $slider.css({ left: pct + "%" });
                    }
                });
            } else {
                const dragStartSelector = clickToMove ? $wrapper : $slider;

                dragStartSelector.on("mousedown touchstart", function (e) {
                    if ($(e.target).closest('.fb-image-comparison-label').length > 0) {
                        return;
                    }
                    e.preventDefault();
                    clicked = true;
                    if (clickToMove) {
                        updatePosition(e);
                    }
                });

                $(window).on("mouseup touchend", function () {
                    clicked = false;
                });

                $(window).on("mousemove touchmove", function (e) {
                    if (!clicked) return;
                    updatePosition(e);
                });

                function updatePosition(e) {
                    const rect = $wrapper[0].getBoundingClientRect();
                    const wrapperWidth = rect.width;
                    const wrapperHeight = rect.height;
                    if (wrapperWidth === 0 || wrapperHeight === 0) return;

                    const event = e.originalEvent && e.originalEvent.touches
                        ? e.originalEvent.touches[0]
                        : e;

                    if (isVertical) {
                        let y = event.clientY - rect.top;

                        if (y < 0) y = 0;
                        if (y > wrapperHeight) y = wrapperHeight;

                        const pct = (y / wrapperHeight) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 0 ${100 - pct}% 0)`,
                            "-webkit-clip-path": `inset(0 0 ${100 - pct}% 0)`
                        });
                        $slider.css({
                            top: pct + "%"
                        });
                    } else {
                        let x = event.clientX - rect.left;

                        if (x < 0) x = 0;
                        if (x > wrapperWidth) x = wrapperWidth;

                        const pct = (x / wrapperWidth) * 100;

                        $overlay.css({
                            "clip-path": `inset(0 ${100 - pct}% 0 0)`,
                            "-webkit-clip-path": `inset(0 ${100 - pct}% 0 0)`
                        });
                        $slider.css({
                            left: pct + "%"
                        });
                    }
                }
            }
        });
    }
    initImageComparison();

    // Handle dynamic content changes (crucial for Next.js / SPA route transitions)
    if (typeof MutationObserver !== "undefined") {
        var domObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    initImageComparison();
                }
            });
        });

        domObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
});