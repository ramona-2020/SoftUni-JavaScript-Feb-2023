function solve(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let item of array) {
        if (item % 2 == 0) {
            evenSum += item;
        } else {
            oddSum += item;
        }
    }

    console.log(evenSum - oddSum);
}

// solve([1,2,3,4,5,6])
solve([2,4,6,8,10])