function solve(text) {
    const regex = /#[a-zA-Z]+/gi
    let matches = text.match(regex);

    // Prints results with '#'
    for (let word of matches) {
        console.log(word.substr(1));
    }
}

//solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
//solve('The symbol # is known #variously in English-speaking #regions as the #number sign');