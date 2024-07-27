document.addEventListener("DOMContentLoaded", function () {
  const workoutForm = document.getElementById("workoutForm");
  const goalForm = document.getElementById("goalForm");
  const workoutChartElement = document
    .getElementById("workoutChart")
    .getContext("2d");
  const motivationalQuotes = [
    "The only bad workout is the one that didn't happen.",
    "Sweat is fat crying.",
    "No pain, no gain.",
    "Your body can stand almost anything. It’s your mind that you have to convince.",
    "Push yourself because no one else is going to do it for you.",
  ];

  let workouts = [];
  let workoutChart;

  workoutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;
    const duration = document.getElementById("duration").value;

    if (date && type && duration) {
      workouts.push({ date, type, duration: parseInt(duration) });
      updateChart();
      workoutForm.reset();
    }
  });

  goalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const goalType = document.getElementById("goalType").value;
    const goalValue = document.getElementById("goalValue").value;

    if (goalType && goalValue) {
      alert(`Goal set: ${goalType} - ${goalValue}`);
      goalForm.reset();
    }
  });

  function updateChart() {
    const dates = workouts.map((workout) => workout.date);
    const durations = workouts.map((workout) => workout.duration);

    if (workoutChart) {
      workoutChart.destroy();
    }

    workoutChart = new Chart(workoutChartElement, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Workout Duration (mins)",
            data: durations,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function displayMotivationalQuote() {
    const randomQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    document.getElementById("quote").textContent = randomQuote;
  }

  displayMotivationalQuote();
});
