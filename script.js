document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Get only the text content without the "Remove" button text
            const taskText = li.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create task element
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        removeButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage after removal
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create and add the new task element
        createTaskElement(taskText);

        // Save to Local Storage
        saveTasks();

        // Clear input field
        taskInput.value = "";
    }

    // Add click event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});