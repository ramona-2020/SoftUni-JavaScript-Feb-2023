
function oddAndEvenSum(number) {
    number = String(number);
    let digits = [...number];
    let oddDigits = digits.filter((element) => element % 2 === 1).map((element) => Number(element));
    let evenDigits = digits.filter((element) => element % 2 === 0 && element > 0).map((element) => Number(element));

    let oddSum = oddDigits.reduce((a, b) => a + b);
    let evenSum = evenDigits.reduce((a, b) => a + b);

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    console.log(result)
}

// Tests:
oddAndEvenSum(3495892137259234);