var d, k;

do {
    d = parseFloat(prompt('Введите кол-во человек', 0));
} while (isNaN(d) || d === 0);

do {
    k = parseFloat(prompt('Введите зарплату на человека', 0));
} while (isNaN(k) || k === 0);

var totalCost = d * k;
alert('Затраты на ЗП: ' + totalCost);