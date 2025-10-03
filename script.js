const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// Smooth random movement every second
noBtn.style.position = "absolute";
noBtn.style.transition = "all 0.6s ease";

function moveNoBtn() {
  const container = document.getElementById("questionContainer");
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Move continuously every 1 second
setInterval(moveNoBtn, 1000);

// YES button action
yesBtn.addEventListener("click", () => {
  heartLoader.style.display = "block";
  resultContainer.style.display = "none";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";

    // Confetti blast
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 2000);
});
