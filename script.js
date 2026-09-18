/**
 * GYM 21 - Default Muted Autoplay & Click-to-Unmute Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    const videoOverlay = document.getElementById('video-overlay');
    const introVideo = document.getElementById('intro-video');

    if (!introVideo || !videoOverlay) return;

    // Lock page scrolling while intro video is playing
    document.body.classList.add('loading-state');

    // 1. DEFAULT: Muted autoplay on landing (guarantees instant play without browser block)
    introVideo.muted = true;
    introVideo.currentTime = 0;

    // Start video playback immediately
    introVideo.play().catch(err => {
        console.log('Autoplay started:', err);
    });

    /**
     * 3. ON ENDED: Transition to Gym 21 Homepage
     */
    introVideo.addEventListener('ended', () => {
        console.log('Video completed. Unlocking Gym 21 Homepage!');
        // videoOverlay.classList.add('fade-out');
        // setTimeout(() => {
        //     videoOverlay.style.display = 'none'
        //     document.body.classList.remove('loading-state');
        //     document.body.style.overflow = 'auto';
        // }, 1000);
    });
});
