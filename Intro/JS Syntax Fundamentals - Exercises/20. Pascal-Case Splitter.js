function solve(text) {
    let words = []

    let countOfUppers = 0;
    let chars = text.split('');
    let word = '';

    for (let char of chars) {
        if (char.toUpperCase() == char) {
            countOfUppers++;
        }
        if (countOfUppers == 2) {
            words.push(word);
           
            word = ''
            countOfUppers = 1;
        }
        word += char;
    }

    words.push(word);
    console.log(words.join(', '));
}

solve('ThisIsSoAnnoyingToDo')