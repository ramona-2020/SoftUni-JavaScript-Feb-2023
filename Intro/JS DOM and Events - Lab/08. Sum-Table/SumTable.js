function sumTable() {
    let tdPrices = document.querySelectorAll('table tr td:nth-child(2)');
    let totalSum = 0;

    for (let td of tdPrices) {
        totalSum += Number(td.textContent);
    }

    document.getElementById('sum').textContent = totalSum;
}