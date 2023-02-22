function solve(n, array) {
    let resultArray = []
    if (n <= array.length) {
        for (let i = n - 1; i >= 0; i--) {
            let item = array[i]
            resultArray.push(item);
        }
        console.log(resultArray.join(' '));
    } else {
        console.log(`Please enter n between 0 and ${array.length}`)
    }
}

solve(3, [10, 20, 30, 40, 50])