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
let count = 0;
let blocks = [];
let rememberedColor = null;
let cid = 0;

generateButton.addEventListener('click', () => {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    let block = null;
    if (blocks.length < 15) {
        block = document.createElement('div');
        block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        block.classList.add('block');
        block.id = count;
        container.appendChild(block);
        blocks.push(block); count++;
    } else {
        const blockToReplace = blocks.shift();
        blockToReplace.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        blocks.push(blockToReplace);
    }
    block.onclick = () => {
        if (rememberedColor === null) {
            rememberedColor = block.style.backgroundColor;
        }
        console.log(rememberedColor);
        cid = block.id;
        if (rememberedColor !== null) {
            blocks[cid].style.backgroundColor = rememberedColor;
        }
        console.log('success');
        console.log(cid);
    }
});

colorArea.addEventListener('click', () => {
    rememberedColor = null;
    console.log('clear');
});
function scrollThumb(direction) {
    if (direction == 'Go_L') {
        $('#container').animate({
            scrollLeft: "-=" + 150 + "px"
        });
    } else if (direction == 'Go_R') {
        $('#container').animate({
            scrollLeft: "+=" + 150 + "px"
        });
    }
}