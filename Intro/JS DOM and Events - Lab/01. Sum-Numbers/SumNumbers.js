function calc() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let total = num1 + num2;

    sum = document.getElementById('sum');
    sum.value = total;
}
