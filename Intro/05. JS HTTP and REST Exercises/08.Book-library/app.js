function onLoad() {

  function createTableRow(bookDataList) {
    for (const bookData of bookDataList) {
      let tr = document.createElement('tr');
      let titleTd = document.createElement('td');
      let authorTd = document.createElement('td');
      let tdActions = document.createElement('td');
      let btnEdit = document.createElement('button');
      let btnDelete = document.createElement('button');
      btnEdit.textContent = 'Edit';
      btnEdit.id = bookData.id;
      btnDelete.textContent = 'Delete';
      btnDelete.id = bookData.id;
      tdActions.appendChild(btnEdit);
      tdActions.appendChild(btnDelete);

      titleTd.textContent = bookData.title;
      authorTd.textContent = bookData.author;

      let tbody = document.querySelectorAll('table tbody')[0];
      tr.appendChild(titleTd);
      tr.appendChild(authorTd);
      tr.appendChild(tdActions);
      tbody.appendChild(tr);
    }
  }

  function updateBookFunction(bookID) {
    let updateBook = async () => {
      let url = `http://localhost:3030/jsonstore/collections/books/${bookID}`
      let bookBody = {
        "author": "Changed Author",
        "title": "Changed Title"
      }
      let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(bookBody),
      });
      let data = await response.json();
      return data;
    }

    updateBook()
      .then((data) => {
        console.log(data);
      })
  }

  function loadBooksFunction() {
    // remove old table data:
    let tableRows = document.querySelectorAll('table tbody tr');
    for (let i=0; i<tableRows.length; i++) {
        let tableRow = tableRows[i];
        tableRow.remove();
    }

    const asyncFunc = async () => {
      const resourceAllBooks = `http://localhost:3030/jsonstore/collections/books`;
      const response = await fetch(resourceAllBooks, {
        method: 'GET',
      });
      const data = await response.json();
      return data;
    }

    asyncFunc().then((data) => {
      let bookDataList = [];
      for (let key in data) {
        let author = data[key].author;
        let title = data[key].title;

        bookData = {
          'id': key,
          'title': title,
          'author': author,
        }
        bookDataList.push(bookData);
      }
      createTableRow(bookDataList);

      let editBookButtons = document.querySelectorAll('tbody tr td:last-child button:first-child');
      if (editBookButtons.length > 2) {
        for (let button of editBookButtons) {
          button.addEventListener('click', () => {
            let bookID = button.id;
            updateBookFunction(bookID);
          })
        }
      }

    })
  }


  let loadBooksBtn = document.getElementById('loadBooks');
  loadBooksBtn.addEventListener('click', loadBooksFunction);



}

window.onload = onLoad();