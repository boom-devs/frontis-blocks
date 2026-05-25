jQuery(document).ready(function ($) {

    function initImageComparison() {

        $(".fb-img-comp-overlay").each(function () {

            const $overlay = $(this);
            const $wrapper = $overlay.closest(".fb-image-comparison-slider-wrapper");

            if ($wrapper.length === 0 || $wrapper.find(".fb-image-comparison-slider").length > 0) {
                return;
            }

            let clicked = false;

            // Initial overlay clip-path and reset width to default
            $overlay.css({
                "width": "",
                "clip-path": "inset(0 50% 0 0)",
                "-webkit-clip-path": "inset(0 50% 0 0)"
            });

            // Create slider
            const $slider = $('<div class="fb-image-comparison-slider"></div>');

            $wrapper.append($slider);

            // Initial slider position
            $slider.css({
                left: "50%"
            });

            // Start drag
            $slider.on("mousedown touchstart", function (e) {
                e.preventDefault();
                clicked = true;
            });

            // Stop drag
            $(window).on("mouseup touchend", function () {
                clicked = false;
            });

            // Move slider
            $(window).on("mousemove touchmove", function (e) {

                if (!clicked) return;

                const rect = $wrapper[0].getBoundingClientRect();
                const wrapperWidth = rect.width;
                if (wrapperWidth === 0) return;

                const event = e.originalEvent && e.originalEvent.touches
                    ? e.originalEvent.touches[0]
                    : e;

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
            });

        });

    }

    initImageComparison();

});