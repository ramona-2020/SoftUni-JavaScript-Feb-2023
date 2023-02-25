function colorize() {
    let trNodes = document.querySelectorAll('table tr:nth-child(2n)');
    for(let tr of trNodes) {
        tr.style = 'background-color: Teal';
    }
}