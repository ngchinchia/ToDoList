# ToDoList
This repository consist of a simple to-do list application using HTML, CSS and React.

1. The component initializes two state variables modal and taskList using the useState hook 
modal is used to control the visibility of a popup to create a new task, and taskList stores an array of task objects.

2. The useEffect hook is used to retrieve any previously stored task list data from the browser's local storage when the component mounts.
If data is found, it is parsed and used to update the taskList state variable.

3. Delete and update functions are used to delete and update existing tasks in the taskList state variable.

Link : https://ngchinchia.github.io/ToDoList/
