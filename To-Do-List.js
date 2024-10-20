document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            
            const taskActions = document.createElement('div');
            taskActions.className = 'task-actions';
            
            //Add Task
            const completeButton = document.createElement('button');

            //Checkmark 
            completeButton.className = 'complete-button';
            completeButton.innerHTML = '&#10003;';
            
             completeButton.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });
            

            //Add task button
            const deleteButton = document.createElement('button');

            //Cross
            deleteButton.className = 'delete-button';
            deleteButton.innerHTML = '&#10005;'; 
            
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });
            

            //Checkmark button
            taskActions.appendChild(completeButton);

            //Cross button
            taskActions.appendChild(deleteButton);

            //Teksti
            taskItem.appendChild(taskTextSpan);

            //Task actions checkmark and cross
            taskItem.appendChild(taskActions);
            
            //Add task
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }
});