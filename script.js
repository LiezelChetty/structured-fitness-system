// ---------- WORKOUT DATA ----------
const workouts = {
  Monday: {
    title: "Lower Body",
    exercises: [
      "Squats — 3 × 12",
      "Glute bridges — 3 × 15",
      "Reverse lunges — 3 × 10",
      "Wall sit — 30 sec",
    ],
  },
  Tuesday: {
    title: "Upper Body",
    exercises: [
      "Push-ups — 3 × 10",
      "Shoulder taps — 3 × 20",
      "Tricep dips — 3 × 12",
      "Plank — 30 sec",
    ],
  },
  Wednesday: {
    title: "Active Recovery",
    exercises: [
      "Light walk — 15 min",
      "Stretch hips",
      "Stretch shoulders",
      "Deep breathing — 3 min",
    ],
  },
  Thursday: {
    title: "Lower Body",
    exercises: [
      "Squats — 3 × 12",
      "Step-backs — 3 × 10",
      "Glute bridges — 3 × 15",
      "Calf raises — 3 × 20",
    ],
  },
  Friday: {
    title: "Full Body",
    exercises: [
      "Squats — 3 × 12",
      "Push-ups — 3 × 10",
      "Dead bug — 3 × 20",
      "Plank — 30 sec",
    ],
  },
};

// ---------- DOM ELEMENTS ----------
const workoutTitle = document.getElementById("workout-title");
const workoutList = document.getElementById("workout-list");
const statusMessage = document.getElementById("statusMessage");
const startButton = document.getElementById("startWorkout");
const streakEl = document.getElementById("streak");

// ---------- LOAD TODAY'S WORKOUT ----------
const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
const workout = workouts[today];

if (workout) {
  workoutTitle.textContent = workout.title;

  workout.exercises.forEach((exercise) => {
    const li = document.createElement("li");
    li.textContent = exercise;
    workoutList.appendChild(li);
  });
} else {
  workoutTitle.textContent = "Rest Day";
  workoutList.innerHTML = "<li>Take the day off guilt-free.</li>";
}

// ---------- STREAK LOGIC ----------
function updateStreak() {
  const today = new Date().toDateString();
  const lastWorkout = localStorage.getItem("lastWorkout");
  let streak = Number(localStorage.getItem("streak")) || 0;

  if (lastWorkout !== today) {
    streak += 1;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastWorkout", today);
  }

  streakEl.textContent = `${streak}-day streak 🔥`;
  streakEl.classList.remove("hidden");
}

// ---------- CLICK HANDLER ----------
startButton.addEventListener("click", () => {
  startButton.textContent = "Workout in progress";
  startButton.disabled = true;

  statusMessage.textContent = "Workout started. Just keep moving 💪";
  statusMessage.classList.remove("hidden");

  updateStreak();
});
