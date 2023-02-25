function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let itemsArray =  Array.from(listItems);
    let result = document.getElementById('result');

    for (const li of itemsArray) {
        result.value += li.textContent + '\n';
    }
}