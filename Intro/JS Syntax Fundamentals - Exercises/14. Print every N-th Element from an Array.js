function solve(array, step) {
    let resultArray = [];

    for (let index = 0; index < array.length; index+=step) {
        let item = array[index];
        resultArray.push(item);
    }

    return resultArray;
}

let resultArray = solve(['1', '2','3', '4', '5'], 6);
// ['5', '20', '31', '4', '20']
//   0 ,   1,   2,    3,  4
console.log(resultArray);