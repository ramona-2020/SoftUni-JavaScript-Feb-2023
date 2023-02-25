function solve(input) {

    let catalog = {}
    let totalItems = input.length - 1;

    /* Populate catalog dictionary */
    let numberOfPieces = Number(input.shift());
    for (let index = 0; index < numberOfPieces; index++) {
        let item = input[index];
        let [piece, composer, key] = item.split('|');
        catalog[piece] = {
            composer: composer,
            key: key,
        }
    }

    for (let index = numberOfPieces; index < totalItems; index++) {
        const element = input[index];
        let tokens = element.split('|');
        let command = tokens.shift();
        let piece = tokens[0];

        switch (command) {
            // "Add|{piece}|{composer}|{key}"
            case 'Add':
                if (piece in catalog) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    let composer = tokens[1];
                    let key = tokens[2];

                    catalog[piece] = {
                        composer: composer,
                        key: key,
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break;

            // "Remove|{piece}"
            case 'Remove':
                if (piece in catalog) {
                    delete catalog[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            // "ChangeKey|{piece}|{new key}"
            case 'ChangeKey':
                if (piece in catalog) {
                    let new_key = tokens[1];
                    catalog[piece]['key'] = new_key;
                    console.log(`Changed the key of ${piece} to ${new_key}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;

            case 'Stop':
                for (let item in catalog) {
                    let composer = catalog[item]['composer'];
                    let key = catalog[item]['key'];

                    // "{Piece} -> Composer: {composer}, Key: {key}"
                    console.log(`${item} -> Composer: ${composer}, Key: ${key}`);
                }
                break;
        }
    }

}