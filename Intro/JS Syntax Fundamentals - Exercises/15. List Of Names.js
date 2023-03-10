// You will receive an array of names. Sort them alphabetically in ascending order 
// and print a numbered list of all the names, each on a new line.

function solve(names) {
    names.sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b) {
            return -1;
        } 
        if (a > b) {
            return 1;
        }
        return 0;
    })

    for (let index = 0; index < names.length; index++) {
        console.log(`${index+1}.${names[index]}`)
    }
}

solve(["John", "Bob", "Bob", "Christina", "ctew"]);
