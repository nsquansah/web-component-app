// script.js

// Create and set the width of the progress bar dynamically
const progressBarContainer = document.getElementById('progress-bar-container');
const progressText = document.createElement('div');

// Set styles for the progress text
progressText.textContent = '33% Complete';
progressText.classList.add('progress-text');

// Create and set the background image for the progress bar
progressBarContainer.style.backgroundImage = 'url("progress-bar-image.jpg")';
progressBarContainer.style.backgroundSize = '33% 100%'; // Set the initial width of the progress bar (e.g., 33%)

// Append progress text to the container
progressBarContainer.appendChild(progressText);
