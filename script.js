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
  noBtn.style.top = `${newY}px`;
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
