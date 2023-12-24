const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

redInput.addEventListener('input', generateBackgroundColor);
greenInput.addEventListener('input', generateBackgroundColor);
blueInput.addEventListener('input', generateBackgroundColor);

function generateBackgroundColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (isValidInput(redValue) && isValidInput(greenValue) && isValidInput(blueValue)) {
        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        const colorArea = document.getElementById('colorArea');
        colorArea.style.backgroundColor = color;
    }
}

function isValidInput(value) {
    if (value >= 256) { value = 255; }
    return /^\d+$/.test(value) && value >= 0 && value <= 255;
}