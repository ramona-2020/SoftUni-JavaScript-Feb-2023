
function performOperation(number, operation) {
    switch(operation) {
        case 'chop':
            number /= 2;
            break;
        case 'dice':
            number = Math.sqrt(number);
            break;
        case 'spice':
            number++;
            break;
        case 'bake':
            number *= 3;
            break;
        case 'fillet':
            number = number * 0.80;
            break;
    }
    return number;
}


function solve(...list) {
    let array = list;
    let number = Number(array.shift());
    
    for (let operation of array) {
        number = performOperation(number, operation);
        console.log(number);
    }
}

/*
Examples:
'32', 'chop', 'chop', 'chop', 'chop', 'chop'
'9', 'dice', 'spice', 'chop', 'bake', 'fillet'
*/
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


function solve(num, ...Operators){
    let currentResult = Number(num)
    for (op of Operators){
        if (op === 'chop'){
            currentResult /= 2
        } else if(op === 'dice'){
            currentResult = Math.sqrt(Number(num))
        } else if(op === 'spice'){
            currentResult += 1
        } else if(op === 'bake'){
            currentResult *= 3
        } else if(op === 'fillet'){
            currentResult *= 0.8
        }
        console.log(currentResult)
    }
}
 
solve('9', 'dice', 'dice', 'dice', 'dice', 'dice')