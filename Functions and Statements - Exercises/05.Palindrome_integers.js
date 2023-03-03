function isPalindrome(arrayNumbers) {
    for (const number of arrayNumbers) {
        const digitsArray = Array.from(String(number)).map((digit) => Number(digit));
        const reversedArray = [...digitsArray].reverse();
        const isPalindrome = digitsArray.toString() === reversedArray.toString();
        console.log(isPalindrome);
    }
}
// Tests:
isPalindrome([32,2,232,1010]);
isPalindrome([123,323,421,121]);
