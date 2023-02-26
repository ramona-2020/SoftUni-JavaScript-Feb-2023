function create(words) {
   let content = document.getElementById('content');

   // ['Section 1', 'Section 2', 'Section 3', 'Section 4']
   for (const word of words) {
      let div = document.createElement('div');
      content.appendChild(div);

      let p = document.createElement('p');
      p.style.display = 'none';
      p.appendChild(document.createTextNode(word));
      div.appendChild(p);
   }

   let divNodeList = document.querySelectorAll('div');
   for (const div of divNodeList) {
      div.addEventListener('click', function() {
         div.firstChild.style = 'display: block';
      })
   }
}