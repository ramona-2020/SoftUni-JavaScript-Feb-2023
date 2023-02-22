function solve(text, searchedWord) {
    let words = text.split(' ')
    let counter = words.filter(x => x.toLowerCase() == searchedWord.toLowerCase()).length;
    console.log(counter);
}

// 'This is a word and it also is a sentence', 'is'
// 'softuni is great place for learning new programming languages', 'softuni'
solve('Softuni is great place for learning new programming languages', 'softuni')