
const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numberElements.forEach((element, index) => {
        element.textContent = numbers[index];
        element.style.backgroundColor = getNumberColor(numbers[index]);
    });
}

function getNumberColor(number) {
    if (number <= 10) {
        return '#f9e45b'; // Yellow
    } else if (number <= 20) {
        return '#5b8def'; // Blue
    } else if (number <= 30) {
        return '#ef5b5b'; // Red
    } else if (number <= 40) {
        return '#808080'; // Gray
    } else {
        return '#5bef5b'; // Green
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayNumbers(numbers);
});
