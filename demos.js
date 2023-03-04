// console.log(
//     ['5', '8', '1'].map((a) => Number(a) + 5)
// )

console.log(
    [14, '50', 3, 16]
        .map((a) => Number(a))
        .filter((a) => a > 3)
        .every((a) => a % 2 === 1)
)