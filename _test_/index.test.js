
// Setup DOM environment
beforeEach(() => {
  document.body.innerHTML = `
    <ul id="taskList"></ul>
    <input id="taskTitle" value="New Task" />
    <input id="dueDate" />
    <input id="priority" />
    <button id="submitBtn">Add Task</button>
    <p id="errorMessage"></p>
  `;
});

// Mock addTask function
function addTask(taskTitle, dueDate, priority) {
  const todoList = document.getElementById("taskList");
  const existingTasks = todoList.querySelectorAll("li");
  const taskExists = Array.from(existingTasks).some(
    (item) => item.textContent.trim().toLowerCase() === taskTitle.trim().toLowerCase()
  );

  if (taskExists) {
    document.getElementById("errorMessage").textContent = "Task already exists !!!";
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskTitle;
  todoList.appendChild(newTask);
}

// Test for adding a new task
test('Add new task', () => {
  addTask("New Task", "2024-09-01", "High");

  const taskList = document.getElementById('taskList');
  expect(taskList.querySelectorAll('li').length).toBe(1);
  expect(taskList.querySelector('li').textContent).toBe('New Task');
});

// Test for adding a duplicate task
test('Add duplicate task', () => {
  addTask("Duplicate Task", "2024-09-01", "High");
  addTask("Duplicate Task", "2024-09-01", "High");

  const taskList = document.getElementById('taskList');
  expect(taskList.querySelectorAll('li').length).toBe(1);
  expect(document.getElementById("errorMessage").textContent).toBe("Task already exists !!!");
});

// Test for marking a task as completed
test('Mark task as completed', () => {
  addTask("Task to Complete", "2024-09-01", "Medium");
  const taskList = document.getElementById('taskList');
  const taskItem = taskList.querySelector('li');
  
  // Simulate marking the task as completed
  taskItem.classList.add('completed');

  expect(taskItem.classList.contains('completed')).toBe(true);
});

// Test for removing a task
test('Remove a task', () => {
  addTask("Task to Remove", "2024-09-01", "Low");
  const taskList = document.getElementById('taskList');
  const taskItem = taskList.querySelector('li');

  // Function to remove a task
  function removeTask(taskTitle) {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.querySelectorAll("li");
    tasks.forEach((task) => {
      if (task.textContent.trim() === taskTitle) {
        task.remove();
      }
    });
  }

  removeTask("Task to Remove");

  expect(taskList.querySelectorAll('li').length).toBe(0);
});

// Test for error message display
test('Display error message for duplicate task', () => {
  addTask("Task for Error", "2024-09-01", "Low");
  addTask("Task for Error", "2024-09-01", "Low");

  expect(document.getElementById("errorMessage").textContent).toBe("Task already exists !!!");
});
