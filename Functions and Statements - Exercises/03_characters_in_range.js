
function charactersInRange(char1, char2) {
    let asciiChar1 = char1.charCodeAt(0);
    let asciiChar2 = char2.charCodeAt(0);
    let tempVar = asciiChar1;

    if (asciiChar1 > asciiChar2) {
        asciiChar1 = asciiChar2;
        asciiChar2 = tempVar;
    }

    let chars = [];
    for (let i = asciiChar1 + 1; i < asciiChar2; i++) {
        // convert Unicode values to characters:
        let charFromCode = String.fromCharCode(i);
        chars.push(charFromCode);
    }
    console.log(chars.join(' '));
}

charactersInRange('a', 'd');
