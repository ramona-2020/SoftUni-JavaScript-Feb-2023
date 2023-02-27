function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.getElementById('searchField');

      // reset table rows
      let selectedTrNodeList = document.querySelectorAll('tr.select');
      for(let tr of selectedTrNodeList) {
         tr.classList.remove('select');
      }

      // select 
      let tdNodeList = document.querySelectorAll('tr td');
      for(let td of tdNodeList) {
         if (td.textContent.includes(searchField.value)) {
            td.parentElement.classList.add('select');
         }
      }

      // reset searchField
      searchField.value = '';
   }
}