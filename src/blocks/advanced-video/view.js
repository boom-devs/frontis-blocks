import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('fb-player-option');
    if (container) {
        const url = container.getAttribute('data-url');
        const autoPlay = container.getAttribute('data-autoplay') === 'true';
        const muted = container.getAttribute('data-muted') === 'true';
        const loop = container.getAttribute('data-loop') === 'true';
        const controls = container.getAttribute('data-controls') === 'true';
        const previewImage = container.getAttribute('data-preview-image');
        const playIcon = container.getAttribute('data-play-icon');
        console.log(playIcon);
        console.log(previewImage);
        renderReactPlayer(container, { 
            url: url,
            playing: autoPlay,
            muted: muted,
            loop: loop,
            controls: controls,
            light: previewImage,
            playIcon: renderSVG(playIcon),
            onClickPreview: () => {
                container.setAttribute('data-autoplay', 'true');
                renderReactPlayer(container, { 
                    url: url,
                    playing: true,
                    muted: muted,
                    loop: loop,
                    controls: controls,
                    light: previewImage,
                    playIcon: renderSVG(playIcon),
                    width: '100%',
                    height: '100%',
                    className: 'fb-react-player'
                });
            },
            width: '100%',
            height: '100%',
            className: 'fb-react-player'
        });
    }
});
