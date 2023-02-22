function solve(text, searchedWord) {
    let words = text.split(' ');
    let resultedWords = []

    for (let element of words) {
        if (element == searchedWord) {
            element = '*'.repeat(element.length);
        }
        resultedWords.push(element)
    }

    let result = resultedWords.join(' ');
    console.log(result);
}

//solve('Find, the hidden word', 'hidden')

function solve(text, searchedWord) {
    while(text.includes(searchedWord)) {
        let count = searchedWord.length; 
        text = text.replace(searchedWord, '*'.repeat(count))
    }

    console.log(text);
}
demo('Find, the hidden word hidden', 'hidden')