function solve(searchedWord, text){
    let words = text.toLowerCase().split(' ')
    for (let word of words) {
        if (word === searchedWord.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${searchedWord} not found!`)
}

// 'python', 'JavaScript is the best programming language'
// 'javascript', 'JavaScript is the best programming language'
solve('python', 'programming language javascript')