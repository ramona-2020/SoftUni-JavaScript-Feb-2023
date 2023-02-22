function solve(array) {
    let sortedArray = [];
    array.sort((a, b) => {
        return a - b;
    })

    while(array.length) {
        let min = array.shift();
        let max = array.pop();
        sortedArray.push(min, max);
    }

    return sortedArray;
}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); 
