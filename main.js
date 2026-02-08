
const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme switching functionality
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Load theme on page load
loadTheme();

// Lotto number generation functionality
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
        // The background color for numbers will now be handled by CSS variables based on theme
        // element.style.backgroundColor = getNumberColor(numbers[index]); // Removed this line
    });
}

// Keeping getNumberColor but not using it for background as CSS handles it now
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
