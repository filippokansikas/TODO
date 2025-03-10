document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

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

        // Task content
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');

        // Delete button event listener
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Toggle completion and move to bottom
        checkbox.addEventListener('change', function () {
            listItem.classList.toggle('completed');
            if (checkbox.checked) {
                taskList.appendChild(listItem); // Moves completed tasks to the bottom
            } else {
                taskList.insertBefore(listItem, taskList.firstChild); // Moves back to the top
            }
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear input field
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
