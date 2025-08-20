document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.getElementById('video-container');
    
    // Set a 5-second timer to reveal the video container
    setTimeout(() => {
        videoContainer.style.display = 'flex';
    }, 5000); // 5000 milliseconds = 5 seconds
});