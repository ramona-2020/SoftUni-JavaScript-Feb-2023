function solve(number) {
    let digits = Array.from(String(number), Number);
    let firstDigit = digits[0];

    let allEqual = digits.every(item => item == firstDigit);
    let sumDigits = digits.reduce((a, b) => a + b);

    console.log(allEqual);
    console.log(sumDigits);
}

solve(2222222);

/*
Examples:
> 1234
false
10

> 2222222
true
14
*/