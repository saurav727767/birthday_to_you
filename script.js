document.getElementById("surpriseButton").addEventListener("click", function () {
    const surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.classList.toggle("hidden");

    // Start confetti effect
    startConfetti();
});

// Confetti Effect
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 5 + 3,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
            speed: Math.random() * 2 + 1,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((particle, index) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particle.y += particle.speed;

        if (particle.y > canvas.height) {
            confetti.splice(index, 1);
        }
    });

    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    confetti = [];
    createConfetti();
    drawConfetti();
}