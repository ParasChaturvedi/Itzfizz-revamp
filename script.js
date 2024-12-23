
// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(ScrollTrigger)


// gsap.to(".video-sec-3",{
//     width:"100%",
//     height:"100%",
//     borderRadius:"0px",
//     // y:"-5%",
//     ease: "expoScale(1, 2)" ,
//     scrollTrigger:{
//         trigger: ".vid-parent",
//         scroller: "body",
//         markers: true,
//         start:"top 50%",
//         end: "+=300px",
//         // pin:"#sec-3",
//         scrub: 1,
//     }
// })

// });

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scroll effect on the .video-sec-3 element
    gsap.to(".video-sec-3", {
        width: "100%",
        height: "100%",
        borderRadius: "0px", 
        ease: "power2.inOut", // Smoother ease function for transition
        scrollTrigger: {
            trigger: ".vid-parent", // Element that triggers the scroll animation
            scroller: "body", // Ensure smooth scrolling when using `body` as scroller
            markers: false, // Disable markers in production
            start: "top 55%", // Start when the element is at the middle of the viewport
            end: "+=350px", // End the animation after scrolling 300px
            scrub: 1, // Control the smoothness of the scroll animation
        }
    });
});
