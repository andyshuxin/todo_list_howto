/* Define the names of the elements we need */
var task_list = document.getElementById('task_list');
var task_input = document.getElementById('task_input');
var btn_add_task = document.getElementById('btn_add_task');

/* Define what happens when the button is clicked */
btn_add_task.onclick = function () {
    var newTaskText = task_input.value;
    var textNode = document.createTextNode(newTaskText);
    var newTaskListItem = document.createElement('li');
    newTaskListItem.appendChild(textNode);
    task_list.appendChild(newTaskListItem);
};