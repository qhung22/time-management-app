function addTask() {
  const task = document.getElementById("task").value;
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("taskList").appendChild(li);
}

function startPomodoro() {
  alert("Pomodoro bắt đầu! (demo)");
}

function addGoal() {
  const goal = document.getElementById("goal").value;
  if (!goal) return;

  const li = document.createElement("li");
  li.textContent = goal;
  document.getElementById("goalList").appendChild(li);
}
