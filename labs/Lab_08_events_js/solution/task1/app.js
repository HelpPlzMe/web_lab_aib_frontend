const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
// Добавляем обработчик события для кнопки red
redButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});
greenButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});
// Добавляем обработчик события для кнопки blue
blueButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});
