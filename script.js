//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        if (currentAudio) {
            currentAudio.pause(); // Stop the current audio
        }
        currentAudio = new Audio(`sounds/${soundFile}`);
        currentAudio.play(); // Play the new audio
    });
});

stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause(); // Stop any playing audio
        currentAudio.currentTime = 0; // Reset to start
    }
});