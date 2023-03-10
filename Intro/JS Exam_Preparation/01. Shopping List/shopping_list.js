
function solve(input) {
    const [shopping_list, ...pairs] = input;
    const array = shopping_list.split('!');

    for (const pair of pairs) {
        const [operation, ... info] = pair.split(' ');
        const item = info[0];

        if (operation === 'Urgent') {
            if (!array.includes(item)) {
                array.unshift(item);
            }
        } else if (operation === 'Unnecessary') {
            if (array.includes(item)) {
                const itemIndex = array.indexOf(item);
                array.splice(itemIndex, 1,);
            }
        } else if (operation === 'Correct') {
             const newItem = info[1];
             if (array.includes(item)) {
                const itemIndex = array.indexOf(item);
                array[itemIndex] = newItem;
             }
        } else if (operation === 'Rearrange') {
            if (array.includes(item)) {
                const itemIndex = array.indexOf(item);
                array.splice(itemIndex, 1);
                array.push(item);
            }
        }
    }

    console.log(array.join(', '));
}

solve(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])