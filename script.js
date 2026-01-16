const startBtn = document.getElementById("startBtn");
const status = document.getElementById("status");

startBtn.addEventListener("click", () => {
  status.textContent = "Workout started. Just keep moving 💪";
});
