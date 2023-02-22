function solve(text, template) {
    let result = []
    let words = text.split(', ');
    let templateWords = template.split(' ');

    for (let wordTemplate of templateWords) {
        const regex = /^[*]+$/gi
        if (wordTemplate.match(regex)) {
            for (let word of words) {
                if (wordTemplate.length == word.length) {
                    wordTemplate = word;
                }
            }
        }
        result.push(wordTemplate);
    }


    // print resulted string
    result = result.join(' ')
    console.log(result);
}

// 'great, learning',
// 'softuni is ***** place for ******** new programming languages'

solve('great', 'softuni is ***** place for ******** new programming languages');