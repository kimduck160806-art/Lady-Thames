// Function to fade out the scroll prompt message
function fadeOutPrompt() {
    const promptBox = document.querySelector('.scroll-prompt');
    promptBox.style.opacity = '0';
    promptBox.style.visibility = 'hidden';
}

// Add a click listener to the audio button
document.getElementById('play-audio-button').addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    audio.play();
    const audioButton = document.getElementById('play-audio-button');
    audioButton.style.display = 'none'; // Hide the button after it's clicked

    // Fade out the prompt after 5 seconds
    setTimeout(fadeOutPrompt, 5000); 
});

// Add a click listener to the next-page button
document.getElementById('next-page-button').addEventListener('click', function() {
    window.location.href = 'fourth-page.html';
});