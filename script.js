// Selectors
const form = document.querySelector('form');
const input = document.querySelector('input');
const pendingTasksList = document.querySelector('#pending-tasks');
const completedTasksList = document.querySelector('#completed-tasks');

// Event listeners
form.addEventListener('submit', addTask);

// Functions
function addTask(event) {
  event.preventDefault();
  const taskName = input.value;
  if (taskName === '') {
    return;
  }
  const task = createTask(taskName);
  pendingTasksList.appendChild(task);
  input.value = '';
}

function createTask(name) {
  const task = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = name;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', deleteTask);
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', completeTask);
  task.appendChild(taskText);
  task.appendChild(deleteBtn);
  task.appendChild(completeBtn);
  return task;
}

function deleteTask(event) {
  const task = event.target.parentElement;
  task.remove();
}

function completeTask(event) {
  const task = event.target.parentElement;
  task.removeChild(task.lastChild); // Remove the "Complete" button
  completedTasksList.appendChild(task);
}
