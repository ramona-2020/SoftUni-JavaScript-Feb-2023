/*
  Constants:
*/
const BASE_URL = 'http://localhost:3030/jsonstore/collections/books' 
const loadBooksBtn = document.getElementById('loadBooks');
const submitBtn = document.querySelector('#form button');
const tableTbody = document.querySelector('table tbody');

// Helper functions:
function createElement(tagName, value, parentNode) {
  let newElement = document.createElement(tagName);
  newElement.textContent = value;
  if (parentNode) {
    parentNode.appendChild(newElement);
  }
  return newElement;
}

/*
  Events:
  - load all books
  - create book
*/
function attachEvents() {
  loadBooksBtn.addEventListener('click', loadBooksFunction);
  submitBtn.addEventListener('click', createBookHandler);

}

function loadBooksFunction(e) {
  tableTbody.innerHTML = '';

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((list) => {

      for (const key in list) {
        let object = list[key];
        let author = object.author;
        let title = object.title;

        let tableTr = createElement('tr', '', tableTbody);
        let tdAuthor = createElement('td', author, tableTr);
        let tdTitle = createElement('td', title, tableTr);
        let tdActions = createElement('td', '', tableTr);
        let btnEdit = createElement('button', 'Edit', tdActions);
        btnEdit.id = key;
        btnEdit.addEventListener('click', editBookHandler);
        let btnDelete = createElement('button', 'Delete', tdActions);
        btnDelete.id = key;
        btnDelete.addEventListener('click', deleteBookHandler);

        tableTbody.appendChild(tableTr);
      }

    })
}

function editBookHandler(e) {
  let bookId = e.target.id;
  let newTitleValue = document.querySelector('input[name="title"]').value;
  let newAuthorValue = document.querySelector('input[name="author"]').value;

  if (newAuthorValue && newTitleValue) {
    let jsonBody = JSON.stringify({
      author: newTitleValue,
      title: newAuthorValue
    })
  
    fetch(BASE_URL + `/${bookId}`, {
      method: 'PUT',
      body: jsonBody,
    })
    .then(() => {
      loadBooksFunction(e);
    })
  } else {
    alert(`Please enter author and title!`);
  }

}

function createBookHandler(e) {
  let newTitleValue = document.querySelector('input[name="title"]').value;
  let newAuthorValue = document.querySelector('input[name="author"]').value;

  if (newAuthorValue && newTitleValue) {
    let jsonBody = JSON.stringify({
      author: newTitleValue,
      title: newAuthorValue,
      id: `1_${newAuthorValue}`
    })
  
    fetch(BASE_URL, {
      method: 'POST',
      body: jsonBody
    })
    .then(() => {
      loadBooksFunction(e);
    })
  } else {
    alert(`Please enter author and title!`);
  }
}

function deleteBookHandler(e) {
  let bookId = e.target.id;
  fetch(BASE_URL + `/${bookId}`, {
    method: 'DELETE',
  })
  .then(() => {
    loadBooksFunction();
  })
}

attachEvents();