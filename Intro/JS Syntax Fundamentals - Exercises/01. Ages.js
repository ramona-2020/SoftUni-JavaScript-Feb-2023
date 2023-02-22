function solve(age) {
    let resultByAge = '';
    if (0 <= age && age <= 2) {
        resultByAge = 'baby';
    } else if (3 <= age && age <= 13) {
        resultByAge = 'child';
    } else if (14 <= age && age <= 19) {
        resultByAge = 'teenager';
    } else if (20 <= age && age <= 65) {
        resultByAge = 'adult';
    }  else if (age >= 66) {
        resultByAge = 'elder';
    } else {
        resultByAge = 'out of bounds';
    }

    console.log(resultByAge);
}

solve(-5)