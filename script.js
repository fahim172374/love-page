const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// "No" button runs away with rotation
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth));
  const newY = Math.floor(Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight));
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// Smooth position for NO button
noBtn.style.position = "absolute";
noBtn.style.transition = "all 0.4s ease";

noBtn.addEventListener("mouseover", () => {
  moveNoBtn();
});

// For mobile (touch support)
noBtn.addEventListener("touchstart", () => {
  moveNoBtn();
});

function moveNoBtn() {
  const maxX = questionContainer.offsetWidth - noBtn.offsetWidth;
  const maxY = questionContainer.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

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

  noBtn.style.transform = `rotate(${Math.random() * 360}deg)`;
});

// "Yes" button clicked
yesBtn.addEventListener("click", () => {
  heartLoader.style.display = "block";
  resultContainer.style.display = "none";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 2000);
});

