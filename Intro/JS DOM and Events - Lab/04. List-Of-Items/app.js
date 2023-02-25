function addItem() {
    let newItem = document.createElement('li');
    newItem.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(newItem);
}