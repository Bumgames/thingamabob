document.addEventListener('DOMContentLoaded', function () {
    const rainOverlay = document.querySelector('.rain-overlay');
    const numberOfDrops = 1000; // Adjust the number of raindrops

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('rain');
        drop.style.left = `${Math.random() * 200}vw`;
        drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.opacity = `${Math.random()}`; // Randomize opacity for depth effect
        rainOverlay.appendChild(drop);
    }
});
