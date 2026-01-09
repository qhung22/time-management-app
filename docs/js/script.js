/* =========================
   HIỂN THỊ THỜI GIAN THỰC
========================= */
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById("currentTime");
    if (timeElement) {
        timeElement.innerText = now.toLocaleString("vi-VN");
    }
}
setInterval(updateTime, 1000);

/* =========================
   QUẢN LÝ CÔNG VIỆC
========================= */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskInput = document.getElementById("task");
    const priority = document.getElementById("priority").value;
    const endTime = document.getElementById("endTime").value;

    if (taskInput.value.trim() === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }

    const task = {
        name: taskInput.value,
        priority,
        endTime: endTime.replace("T", " "),
        done: false
    };

    tasks.push(task);
    saveAndRenderTasks();
    taskInput.value = "";
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveAndRenderTasks();
}

function deleteTask(index) {
    if(confirm("Xóa công việc này?")) {
        tasks.splice(index, 1);
        saveAndRenderTasks();
    }
}

function saveAndRenderTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    if (!list) return;
    list.innerHTML = "";

    let doneCount = 0;
    tasks.forEach((task, index) => {
        if (task.done) doneCount++;
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        
        li.innerHTML = `
            <span style="${task.done ? 'text-decoration: line-through; opacity: 0.6' : ''}">
                <b>${task.name}</b><br>
                <small>⏳ ${task.endTime || "Không hạn"} | ${task.priority}</small>
            </span>
            <div>
                <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${index})">
                <button onclick="deleteTask(${index})" style="width: auto; margin: 0; padding: 5px 10px; background: none; color: red; box-shadow: none;">❌</button>
            </div>
        `;
        list.appendChild(li);
    });

    const percent = tasks.length === 0 ? 0 : Math.round((doneCount / tasks.length) * 100);
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressText").innerText = percent + "% hoàn thành";
}

/* =========================
   QUẢN LÝ MỤC TIÊU
========================= */
let goals = JSON.parse(localStorage.getItem("goals")) || [];

function addGoal() {
    const name = document.getElementById("goalName").value;
    const desc = document.getElementById("goalDesc").value;
    const start = document.getElementById("goalStart").value;
    const end = document.getElementById("goalEnd").value;

    if (name.trim() === "") {
        alert("Vui lòng nhập tên mục tiêu!");
        return;
    }

    goals.push({ name, desc, start, end });
    localStorage.setItem("goals", JSON.stringify(goals));
    
    document.getElementById("goalName").value = "";
    document.getElementById("goalDesc").value = "";
    renderGoals();
}

function renderGoals() {
    const list = document.getElementById("goalList");
    if (!list) return;
    list.innerHTML = "";

    goals.forEach((g, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <b>🎯 ${g.name}</b>
                <button onclick="deleteGoal(${index})" style="width: auto; margin: 0; background: none; color: red;">❌</button>
            </div>
            <p style="font-size: 13px; margin: 5px 0;">${g.desc}</p>
            <small>📅 ${g.start || "?"} đến ${g.end || "?"}</small>
        `;
        list.appendChild(li);
    });
}

function deleteGoal(index) {
    goals.splice(index, 1);
    localStorage.setItem("goals", JSON.stringify(goals));
    renderGoals();
}

/* =========================
   POMODORO
========================= */
let pomodoroTime = 25 * 60;
let pomodoroInterval = null;

function startPomodoro() {
    const btn = document.getElementById("pomodoroBtn");
    
    if (pomodoroInterval) {
        clearInterval(pomodoroInterval);
        pomodoroInterval = null;
        btn.innerText = "Tiếp tục";
        return;
    }

    btn.innerText = "Tạm dừng";
    pomodoroInterval = setInterval(() => {
        if (pomodoroTime <= 0) {
            clearInterval(pomodoroInterval);
            alert("⏰ Hết giờ làm việc! Hãy nghỉ ngơi.");
            resetPomodoro();
            return;
        }
        pomodoroTime--;
        displayTimer();
    }, 1000);
}

function resetPomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
    pomodoroTime = 25 * 60;
    displayTimer();
    document.getElementById("pomodoroBtn").innerText = "Bắt đầu";
}

function displayTimer() {
    const min = Math.floor(pomodoroTime / 60);
    const sec = pomodoroTime % 60;
    document.getElementById("timer").innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// Khởi tạo khi trang web tải xong
window.onload = () => {
    updateTime();
    renderTasks();
    renderGoals();
};