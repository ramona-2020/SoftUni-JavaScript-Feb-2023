
function solve(numOne, numTwo, operator) {
    const add = (numOne, numTwo) => numOne + numTwo;
    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo)=>numOne / numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case 'add':
            return add(numOne, numTwo);
        case 'multiply':
            return multiply(numOne, numTwo);
        case 'divide':
            return divide(numOne, numTwo);
       case 'subtract':
           return subtract(numOne, numTwo);
    }
}