function addItem() {
    let newItem = document.createElement('li');
    let text = document.getElementById('newItemText').value;
    newItem.append(document.createTextNode(text));
    text.value = '';
    
    document.getElementById('items').appendChild(newItem);
}