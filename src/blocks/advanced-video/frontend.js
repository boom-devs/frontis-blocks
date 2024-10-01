
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactPlayer from 'react-player';

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed"); // Check if this logs

//     const testElement = document.querySelector(".fb-player-option");
//     const videoElements = document.querySelector(".fb-player-option");


//     videoElements.forEach(element => {
//         const videoURL = element.getAttribute("data-url");
//         const autoplay = element.getAttribute("data-autoplay") === 'true';
//         const muted = element.getAttribute("data-muted") === 'true';
//         const loop = element.getAttribute("data-loop") === 'true';
//         const controls = element.getAttribute("data-controls") === 'true';

//         if (videoURL) {
//             ReactDOM.render(
//                 <ReactPlayer 
//                     url={videoURL}
//                     playing={autoplay}
//                     muted={muted}
//                     loop={loop}
//                     controls={controls}
//                     width="100%"
//                     height="100%"
//                 />, 
//                 element
//             );
//         }
//     });
//     if (videoElements) {
//         videoElements.innerHTML = '<div style="color: red; font-size: 24px;">Hello, World!</div>';
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    // Find all elements with class 'fb-player-option'
    const videoElements = document.querySelectorAll('.fb-player-option');

    videoElements.forEach((element) => {
        // Get the video attributes from the element
        const videoURL = element.getAttribute('data-url');
        const autoplay = element.getAttribute('data-autoplay') === 'true';
        const muted = element.getAttribute('data-muted') === 'true';
        const loop = element.getAttribute('data-loop') === 'true';
        const controls = element.getAttribute('data-controls') === 'true';

        // Ensure the video URL is present before rendering
        if (videoURL) {
            // Render the ReactPlayer component inside the element
            ReactDOM.render(
                <ReactPlayer
                    url={videoURL}
                    playing={autoplay}
                    muted={muted}
                    loop={loop}
                    controls={controls}
                    width="100%"
                    height="100%"
                />,
                element
            );
        }
    });
});



// const container = document.getElementById('container')
// const url = 'https://www.youtube.com/watch?v=d46Azg3Pm4c'


// console.log(url);

// window.playPlayer = function () {
//   renderReactPlayer(container, { url, playing: true })
// }

// window.pausePlayer = function () {
//   renderReactPlayer(container, { url, playing: false })
// }

// playPlayer()