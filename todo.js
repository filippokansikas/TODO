document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const deleteAllButton = document.getElementById('delete-all-btn'); // Delete All button

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const listItem = document.createElement('li');

        // Checkbox to mark completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        // Task content (Text only, will get line-through when checked)
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskContent.classList.add('task-text'); // Added a class for styling

        // Timestamp
        const timestamp = document.createElement('span');
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
        timestamp.textContent = ` (${formattedTime})`;
        timestamp.classList.add('timestamp');

        // Delete button (X)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');

        // Delete button event listener
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Toggle completion and move to bottom
        checkbox.addEventListener('change', function () {
            taskContent.classList.toggle('completed'); // Apply line-through only to task text
            if (checkbox.checked) {
                taskList.appendChild(listItem); // Move completed task to bottom
            } else {
                taskList.insertBefore(listItem, taskList.firstChild); // Move back to top when unchecked
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(timestamp); // Add timestamp
        listItem.appendChild(deleteButton);

        // Insert new task at the **top** of the list
        taskList.insertBefore(listItem, taskList.firstChild);

        taskInput.value = ''; // Clear input field
    }

    // Function to delete all tasks
    function deleteAllTasks() {
        taskList.innerHTML = ""; // Clears all tasks from the list
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Delete all tasks when button is clicked
    deleteAllButton.addEventListener('click', deleteAllTasks);
});
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if dark mode was enabled before (saved in localStorage)
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Event listener for the toggle switch
darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled"); // Save preference
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled"); // Save preference
    }
});

