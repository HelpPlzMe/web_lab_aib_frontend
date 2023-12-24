const container = document.querySelector('.container');
const generateButton = document.getElementById('generateButton');
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

let blocks = [];

generateButton.addEventListener('click', () => {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    if (blocks.length < 15) {
        const block = document.createElement('div');
        block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        block.classList.add('block');
        container.appendChild(block);
        blocks.push(block);
    } else {
        const blockToReplace = blocks.shift();
        blockToReplace.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        blocks.push(blockToReplace);
    }
});