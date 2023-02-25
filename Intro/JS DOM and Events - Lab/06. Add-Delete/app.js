function addItem() {
    let ul = document.querySelectorAll('#items')[0];
    let input = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.textContent = input;

    let a = document.createElement('a');
    a.href = '#';
    li.appendChild(a);
    let linkText = document.createTextNode('[Delete]');
    a.appendChild(linkText);

    ul.appendChild(li);

    a.addEventListener('click', function() {
        li.remove();
    })
}