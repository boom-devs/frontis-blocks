// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactPlayer from 'react-player';

// window.onload = function () {
//     const videoElements = document.querySelectorAll(".fb-player-option");

//     console.log(`Found ${videoElements.length} video elements.`);

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
// };


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed"); // Check if this logs

    const testElement = document.querySelector(".fb-player-option");
    if (testElement) {
        testElement.innerHTML = '<div style="color: blue; font-size: 24px;">Hello, World!</div>';
    }
});

// const observer = new MutationObserver(() => {
//     const videoElements = document.querySelectorAll(".fb-player-option");
//     if (videoElements.length) {
//         videoElements.forEach(element => {
//             element.innerHTML = '<div style="color: red; font-size: 24px;">Hello, World!</div>';
//         });
//         observer.disconnect(); // Stop observing once we've modified the elements
//     }
// });

// observer.observe(document.body, { childList: true, subtree: true });


// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactPlayer from 'react-player';

// // Ensure the code runs when the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(() => {
//         const videoElements = document.querySelectorAll(".fb-player-option");

//         console.log(`Found ${videoElements.length} video elements.`);

//         videoElements.forEach(element => {
//             const videoURL = element.getAttribute("data-url");
//             const autoplay = element.getAttribute("data-autoplay") === 'true';
//             const muted = element.getAttribute("data-muted") === 'true';
//             const loop = element.getAttribute("data-loop") === 'true';
//             const controls = element.getAttribute("data-controls") === 'true';

//             if (videoURL) {
//                 ReactDOM.render(
//                     <ReactPlayer 
//                         url={videoURL}
//                         playing={autoplay}
//                         muted={muted}
//                         loop={loop}
//                         controls={controls}
//                         width="100%"
//                         height="100%"
//                     />, 
//                     element
//                 );
//             } else {
//                 // Fallback or error handling if no URL is found
//                 element.innerHTML = '<div style="color: red; font-size: 24px;">No video URL provided!</div>';
//             }
//         });
//     }, 100); // Adjust the delay if necessary
// });




