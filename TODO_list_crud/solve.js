const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
const ulList = document.getElementById('todo-list');
const loadTasksBtn = document.getElementById('load-button');
const addTaskBtn = document.getElementById('add-button');

function createElement(node, value, parentNode) {
    let newElement = document.createElement(node);
    newElement.textContent = value;
    parentNode.appendChild(newElement);
    return newElement;
}
function attachEvents() {
  loadTasksBtn.addEventListener('click', loadTasksHandler);
  addTaskBtn.addEventListener('click', createTaskHandler);
}

function loadTasksHandler(e) {
    if (e) {
        e.preventDefault();
    }

    ulList.innerHTML = '';
    const tasks = async () => {
        const response = await fetch(BASE_URL, {
            method: 'GET',
        })
        return await response.json()
    }

    tasks()
        .then((data) => {
            for (const key in data) {
                let task = data[key];
                let taskId = task._id;
                let taskName = task.name;
                let listItem = createElement('li', '', ulList);
                createElement('span', taskName,  listItem);

                let removeBtn = createElement('button', 'Remove', listItem);
                removeBtn.id = taskId;
                removeBtn.addEventListener('click', removeTaskHandler)
                let editBtn = createElement('button', 'Edit', listItem);
                editBtn.id = taskId;
                editBtn.addEventListener('click', editTaskHandler);
            }
        })
}

function createTaskHandler() {
    let taskName = document.getElementById('title').value;
    if (typeof taskName !== 'string' || taskName.length < 2) {
        return;
    }
    if (!taskName) {
        alert('Please enter task name!')
    }

    fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({
             'name': taskName,
        }),
    })
        .then(() => loadTasksHandler())
}

function removeTaskHandler(e) {
    const taskID = e.target.id;

    const task = async () => {
        return await fetch(BASE_URL + `/${taskID}`, {
            method: 'DELETE',
        })
    }

    task()
    .then(() => loadTasksHandler())
}

function editTaskHandler(e) {
    if (e) {
        e.preventDefault();
    }
    let editBtn = e.target;
    let listItem = e.target.parentNode;
    let listItemSpan = listItem.children[0];

    // Change edit button to Submit button
    editBtn.textContent = 'Submit';

    // Remove span
    listItemSpan.remove();

    // Create input field
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('value', listItemSpan.textContent);
    input.setAttribute('id', editBtn.id)

    listItem.prepend(input);

    editBtn.addEventListener('click', () => {
        // Change task name
        let newTaskName = input.value;
        if (typeof newTaskName !== 'string' || newTaskName.length < 3) {
            return;
        }

        const taskID = input.id;
        fetch(BASE_URL + `/${taskID}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: newTaskName
                })
        })
        .then(() => loadTasksHandler())
    })
}

attachEvents();
