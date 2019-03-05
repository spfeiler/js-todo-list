let pendingTaskList = document.getElementById("pendingTaskList")
let task = document.getElementById("task")
let addTaskTextBox = document.getElementById("addTaskTextBox")
let btnAddTask = document.getElementById("btnAddTask")

let pendingTasks = []
let index = 0

function clearTextBox() {
  document.getElementById("addTaskTextBox").value = ""
}

btnAddTask.addEventListener('click',function() {

  let spanElement = document.createElement("span")
  spanElement.src = pendingTasks[index]
  spanElement.className = "task"
  spanElement.innerHTML = addTaskTextBox.value
  clearTextBox()

  let checkboxElement = document.createElement("input")
  checkboxElement.setAttribute("type", "checkbox")

  let deleteButton = document.createElement("button")
  deleteButton.innerHTML = "Remove"

  let lineBreak = document.createElement("br")

  let listElement = document.createElement("li")
  listElement.appendChild(checkboxElement)
  listElement.appendChild(spanElement)
  listElement.appendChild(deleteButton)
  listElement.appendChild(lineBreak)

  task.appendChild(listElement)

  index += 1
})
