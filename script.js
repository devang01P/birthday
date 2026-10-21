
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {
  surprise.classList.toggle("show");

  if (surprise.classList.contains("show")) {
    surpriseBtn.textContent = "Surprise Unlocked! 💖";
    createHearts(45);
  } else {
    surpriseBtn.textContent = "Click for a Surprise 🎁";
  }
});

function createHearts(amount) {
  const emojis = ["💗", "💖", "💕", "💝", "✨", "🎉"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 15 + Math.random() * 25 + "px";
    heart.style.animationDuration = 3 + Math.random() * 4 + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

// A few floating hearts when the website opens
window.addEventListener("load", () => {
  createHearts(15);
});
