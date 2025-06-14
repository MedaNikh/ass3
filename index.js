 function game() {
  const options = ["rock", "paper", "scissors"];
  const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂"
  };

  const randomIndex = Math.floor(Math.random() * 3);
  const computerOption = options[randomIndex];
  const userOption = document.getElementById('uo').value;

  // Display computer option with emoji
  document.getElementById('co').innerHTML = `Computer option: <span id="compEmoji">${emojis[computerOption]}</span>`;

  const resultSpan = document.getElementById('res');

  // Compare logic
  if (userOption === computerOption) {
    resultSpan.textContent = "It's a Tie!";
    resultSpan.style.color = "red";
  } else if (
    (userOption === "rock" && computerOption === "scissors") ||
    (userOption === "scissors" && computerOption === "paper") ||
    (userOption === "paper" && computerOption === "rock")
  ) {
    resultSpan.textContent = "You Win!";
    resultSpan.style.color = "deeppink";
  } else {
    resultSpan.textContent = "Computer Wins!";
    resultSpan.style.color = "black";
  }

  // Trigger animation
  resultSpan.classList.remove("animated-text");
  void resultSpan.offsetWidth; // Trigger reflow
  resultSpan.classList.add("animated-text");
}