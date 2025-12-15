function addTask() {
  const task = document.getElementById("task").value;
  if (task === "") return;

  const li = document.createElement("li");
  li.innerText = task;
  document.getElementById("taskList").appendChild(li);
}
