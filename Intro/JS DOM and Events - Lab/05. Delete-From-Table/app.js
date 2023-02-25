function deleteByEmail() {
    let searchedEmail = document.getElementsByName('email')[0];
    let searchedEmailValue = searchedEmail.value;
    let result = document.getElementById('result');

    let tdNodeList = document.querySelectorAll('table td:nth-child(2)');
    for (let td of tdNodeList) {
        if (td.textContent == searchedEmailValue) {
            td.parentElement.remove();

            // create new item
            let text = document.createElement('span');
            let textNode = document.createTextNode('Deleted!');
            text.appendChild(textNode);
            
            // append created item to #result
            result.appendChild(text);
            
            return;
        }
    }
    
    result.textContent = 'Not found.';

    // clear input value:
    searchedEmail.value = '';
}