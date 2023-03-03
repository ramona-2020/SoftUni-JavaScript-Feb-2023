const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
const ulList = document.getElementById('todo-list');
const loadTasksBtn = document.getElementById('load-button');
const addTaskBtn = document.getElementById('add-button');

function createElement(node, value, parentNode) {
    let newElement = document.createElement(node);
    newElement.textContent = value;
    parentNode.appendChild(newElement);
    return newElement;
}

function renderTasks(data) {
    Object.entries(data).forEach(([key, obj])=> {
        let listItem = createElement('li', '', ulList);
        let span = createElement('span', '', listItem);
        let btnRemove = createElement('button', 'Remove', listItem);
        btnRemove.classList.add('btnRemove');
        let btnEdit = createElement('button', 'Edit', listItem);
        btnEdit.classList.add('btnEdit');

        for (const prop in obj) {
            if (prop === 'name') {
                span.textContent = obj[prop];
            } else {
                btnRemove.id = obj[prop];
                btnEdit.id = obj[prop];

                // Remove
                btnRemove.addEventListener('click', removeTaskHandler);

                // Edit
                btnEdit.addEventListener('click', editTaskHandler);
            }
        }
    })
}

function attachEvents() {
  loadTasksBtn.addEventListener('click', loadTasksHandler);
  addTaskBtn.addEventListener('click', createTaskHandler);
}

async function loadTasksHandler(e) {
    if (e) {
        e.preventDefault();
    }
    ulList.innerHTML = '';
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        let error = new Error();
        error.code = response.code;
        error.statusCode = response.statusCode;
        throw error;
    }

    try {
        const data = await response.json();
        renderTasks(data);
    }catch (error) {
        // Not process error...
    }
}

function createTaskHandler(e) {
    e.preventDefault();

    let taskName = document.getElementById('title').value;
    fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({
             'name': taskName,
        }),
    })
    .then(() => {
        ulList.innerHTML = '';
        loadTasksHandler();
    })

}

async function removeTaskHandler(e) {
    const taskID = e.target.id;
    await fetch(`http://localhost:3030/jsonstore/tasks/${taskID}`, {
        method: 'DELETE',
    });
    await loadTasksHandler();
}

async function editTaskHandler(e) {
    if (e) {
        e.preventDefault();
    }
    let editBtn = e.target;
    let listItem = e.target.parentNode;
    let removeBtn = e.target.parentNode.children[1];
    listItem.classList.add('active');

    let span = listItem.children[0];

    // Change edit button to Submit button
    editBtn.textContent = 'Submit';

    let input = document.createElement('input');
    input.setAttribute('value', span.textContent);

    // remove span and buttons
    span.remove();
    removeBtn.remove();
    editBtn.remove();

    // add input and buttons
    listItem.appendChild(input);
    listItem.appendChild(removeBtn);
    listItem.appendChild(editBtn);

    async function editTask() {
        const taskId = e.target.id;
        await fetch(`http://localhost:3030/jsonstore/tasks/${taskId}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: input.value,
            })
        });
        await loadTasksHandler();
    }
    editBtn.addEventListener("click", editTask);
}

attachEvents();
