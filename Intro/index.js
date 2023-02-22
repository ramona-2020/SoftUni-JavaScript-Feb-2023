function solve(array) {
    let firstArrayItem = Number(array[0]);
    let lastArrayItem = Number(array[array.length - 1]);

    console.log(firstArrayItem + lastArrayItem);
}

solve([20, 30, 40])

let arr = [14, -5, 6];
for (const iterator of arr) {
    console.log(iterator)
}

console.log('*'.repeat(5))