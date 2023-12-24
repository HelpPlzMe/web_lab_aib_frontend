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