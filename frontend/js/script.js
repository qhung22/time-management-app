let tasks = [];

/* ===== CLOCK ===== */
function updateClock() {
  const now = new Date();
  document.getElementById("currentTime").innerText =
    now.toLocaleDateString("vi-VN") + " | " +
    now.toLocaleTimeString("vi-VN");
}
setInterval(updateClock, 1000);
updateClock();

/* ===== TASK ===== */
function addTask() {
  const task = document.getElementById("task").value;
  const priority = document.getElementById("priority").value;
  const endTimeValue = document.getElementById("endTime").value;

  if (!task) return;

  tasks.push({
    name: task,
    priority,
    done: false,
    startAt: new Date(),
    endAt: endTimeValue ? new Date(endTimeValue) : null,
    startTime: null,
    totalTime: 0
  });

  document.getElementById("task").value = "";
  renderTasks();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  if (tasks[i].done && !tasks[i].endAt) {
    tasks[i].endAt = new Date();
  }
  renderTasks();
}

function startTask(i) {
  tasks[i].startTime = Date.now();
}

function stopTask(i) {
  if (tasks[i].startTime) {
    tasks[i].totalTime += Date.now() - tasks[i].startTime;
    tasks[i].startTime = null;
    renderTasks();
  }
}

function formatDuration(ms) {
  const m = Math.floor(ms / 60000);
  const h = Math.floor(m / 60);
  return `${h} giờ ${m % 60} phút`;
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  let doneCount = 0;

  tasks.forEach((t, i) => {
    if (t.done) doneCount++;

    list.innerHTML += `
      <li>
        <input type="checkbox" ${t.done ? "checked" : ""} onchange="toggleTask(${i})">
        <b>[${t.priority}]</b> ${t.name}
        <small>🕒 Bắt đầu: ${t.startAt.toLocaleString("vi-VN")}</small>
        <small>🏁 Kết thúc: ${t.endAt ? t.endAt.toLocaleString("vi-VN") : "Chưa có"}</small>
        <small>⏱ Thời gian: ${t.totalTime ? formatDuration(t.totalTime) : "Chưa ghi"}</small>
        <button onclick="startTask(${i})">▶</button>
        <button onclick="stopTask(${i})">⏹</button>
      </li>
    `;
  });

  const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText = percent + "% hoàn thành";
}

/* ===== POMODORO ===== */
let time = 1500;
let timer;

function startPomodoro() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (time <= 0) {
      alert("🎉 Hoàn thành Pomodoro!");
      time = 1500;
    }
    const m = Math.floor(time / 60);
    const s = time % 60;
    document.getElementById("timer").innerText =
      `${m}:${s < 10 ? "0" : ""}${s}`;
    time--;
  }, 1000);
}
