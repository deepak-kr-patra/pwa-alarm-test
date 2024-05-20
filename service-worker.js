importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// import { BackgroundSyncPlugin } from 'workbox-background-sync';


// let userTime = "";
// self.addEventListener("message", (event) => {
//     console.log(`Message receivedddd: ${event.data}`);
//     userTime = event.data;
// });

// const bgSyncPlugin = new BackgroundSyncPlugin('myQueueName', {
//     maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
// });

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.NetworkFirst({
        // Plugins: [bgSyncPlugin]
    })
);

// let checker = setInterval(() => {
//     let date = new Date();

//     // Extract hours and minutes
//     let hours = date.getHours();
//     let minutes = date.getMinutes();

//     // Format hours and minutes
//     let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

//     if (formattedTime == userTime) {
//         const music = new Audio('song.mp3');
//         music.play();
//         clearInterval(checker);
//     }
// }, 100);