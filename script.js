document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.querySelector(".particles");

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) { 
            const particle = document.createElement("div");
            particle.classList.add("particle");

            const size = random(2, 10);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            particle.style.top = `${random(0, window.innerHeight)}px`;
            particle.style.left = `${random(0, window.innerWidth)}px`;

            const duration = random(5, 15);
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${random(0, 10)}s`;

            particleContainer.appendChild(particle);
        }
    }

    createParticles();
});