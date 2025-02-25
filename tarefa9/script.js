const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let isRunning = false;
let countdown;
let seconds = 25 * 60;

function startTimer() {
 if (isRunning) {
  clearInterval(countdown);
 } else {
  countdown = setInterval(updateTimer, 1000);
 }
 isRunning = !isRunning;
 startBtn.textContent = isRunning ? "Pausar" : "Iniciar";
}

function updateTimer() {
 if (seconds <= 0) {
  clearInterval(countdown);
  alert("Pomodoro finalizado! Faça uma pausa.");
  seconds = 25 * 60;
  updateDisplay();
 } else {
  seconds--;
  updateDisplay();
 }
}

function updateDisplay() {
 const minutes = Math.floor(seconds / 60);
 const remainingSeconds = seconds % 60;
 timerDisplay.textContent = `${minutes
  .toString()
  .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function resetTimer() {
 clearInterval(countdown);
 seconds = 25 * 60;
 isRunning = false;
 updateDisplay();
 startBtn.textContent = "Iniciar";
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
