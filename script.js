document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is not empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create new list item with text node
        const li = document.createElement('li');
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Add click event to remove button using addEventListener
        removeButton.addEventListener('click', function() {
            li.remove(); // Using the modern remove() method
        });

        // Append remove button to list item
        li.appendChild(removeButton);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";

        // Focus back on the input field
        taskInput.focus();
    }

    // Add click event listener to the add button
    addButton.addEventListener('click', addTask);

    // Add keypress event listener to input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission if within a form
            addTask();
        }
    });
});