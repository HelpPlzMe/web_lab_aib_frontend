# Рефакторинг кода 
___________________________________________________
## Лабораторная работа 7
### Задание 1. level stone

Скрипт сравнивает две переменные и выводит равны они или нет

```js
var var1 = prompt('Enter var1');
var var2 = prompt('Enter var2');

if (variable1 === variable2)
console.log('equally');
else
console.log('not equally');
```

### Задание №2. level iron

Скрипт выводит названия фруктов, а затем отображает название фрукта и его цвет

```js
var f = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon'];
var colors = {
    'apple': 'green',
    'strawberry': 'red',
    'blueberry': 'blue',
    'raspberry': 'light red',
    'lemon': 'yellow'
};

for (var i = 0; i < f.length; i++) {
    var fruit = f[i];
    var color = colors[fruit];

    console.log(fruit, color);
}
```

### Задание 3. level gold

Скрипт выполняет подсчет затрат на зарплату сотрудникам.  
Где спрашивает у пользователя кол-во сотрудников и зарплату на одного человека

```js
var d, k;

do {
    d = parseFloat(prompt('Введите кол-во человек', 0));
} while (isNaN(d) || d === 0);

do {
    k = parseFloat(prompt('Введите зарплату на человека', 0));
} while (isNaN(k) || k === 0);

var totalCost = d * k;
alert('Затраты на ЗП: ' + totalCost);
```
### Задание 4

Скрипт проводит анализ имеющихся студентов в массиве.
Выводит среднюю оценку и список плохих студентов

```js
var klassSoStudentami = [
    { FIO: 'Петров А.А.', Ocenka: 5 },
    { FIO: 'Иванов Б.Б.', Ocenka: 3.4 },
    { FIO: 'Сидоров Г.Г.', Ocenka: 9 },
    { FIO: 'Немолодой Д.Д', Ocenka: 2 },
    { FIO: 'Молодой Е.Е', Ocenka: 3.4 }
];

var s = 0;
var kolichectvo = 0;
var ploxieStudenti = [];

for (var student of klassSoStudentami) {
    var ocenka = student.Ocenka;
    if (ocenka < 0 || ocenka > 5) {
        console.log('Это значение учитываться не будет, оно не соответствует допустимым значениям');
        continue;
    }
    if (ocenka < 4) {
        ploxieStudenti.push(student);
    }
    s += ocenka;
    kolichectvo++;
}

if (kolichectvo > 0) {
    s = s / kolichectvo;
    console.log('Средняя оценка: ' + s);
    console.log('Плохие студенты:');
    if (ploxieStudenti.length === 0) {
        console.log('Таких нет');
    } else {
        ploxieStudenti.forEach((student) => {
            console.log('Фио: ' + student.FIO + '; Оценка: ' + student.Ocenka);
        });
    }
} else {
    console.log('Нет допустимых оценок для анализа.');
}
```
