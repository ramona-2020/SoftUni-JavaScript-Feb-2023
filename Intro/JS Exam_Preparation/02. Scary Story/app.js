window.addEventListener("load", solve);

function solve() {
  let form = document.getElementsByTagName('form')[0];

  let publishBtn = document.getElementById('form-btn');
  let ulPreviewList = document.getElementById('preview-list');
  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let title = document.getElementById('story-title');
  let genre = document.getElementById('genre');
  let story = document.getElementById('story');

  publishBtn.addEventListener('click', function() {
    if (firstName.value === '' ||
        lastName.value === '' ||
        age.value === '' ||
        title.value === '' ||
        genre.value === '' ||
        story.value === '') {

      form.reset();
      return;
    }

    publishBtn.disabled = 'disabled';

    let li = document.createElement('li');
    li.classList.add('story-info')

    let article = document.createElement('article');
    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let pAge = document.createElement('p');
    let pTitle = document.createElement('p');
    let pGenre = document.createElement('p');
    let pStory = document.createElement('p');

    pAge.textContent = `Age: ${age.value}`;
    pTitle.textContent = `Title: ${title.value}`;
    pGenre.textContent = `Genre: ${genre.value}`;
    pStory.textContent = story.value;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    let buttonSave = document.createElement('button');
    buttonSave.textContent = 'Save Story';
    buttonSave.classList.add('save-btn');

    let buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'Edit Story';
    buttonEdit.classList.add('edit-btn');

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete Story';
    buttonDelete.classList.add('delete-btn');
    
    li.appendChild(article);
    li.appendChild(buttonSave);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    ulPreviewList.appendChild(li);
    form.reset();

    // buttonEdit
    buttonEdit.addEventListener('click', function(){
      publishBtn.disabled = '';
      firstName.value = h4.textContent.split(' ')[1];
      lastName.value = h4.textContent.split(' ')[2];
      age.value = pAge.textContent.split(' ')[1];
      title.value = pTitle.textContent.split(' ')[1];
      genre.value = pGenre.textContent.split(' ')[1];
      story.value = pStory.textContent;

      li.remove();
    })

    // buttonSave
    buttonSave.addEventListener('click', function(){
      let divItems = document.querySelectorAll('#main div');
      for (const div of divItems) {
        div.remove();
      }

      let h1 = document.createElement('h1');
      h1.textContent = "Your scary story is saved!"
      main.appendChild(h1);
    })

    // buttonDelete
    buttonDelete.addEventListener('click', function(){
      publishBtn.disabled = '';
      li.remove();
    })

  })
}