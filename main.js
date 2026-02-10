
const recommendBtn = document.getElementById('recommend-btn');
const menuItemElement = document.querySelector('.menu-item');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const dinnerMenus = [
    "치킨", "피자", "삼겹살", "초밥", "파스타", "족발", "보쌈", "짜장면", "짬뽕", "떡볶이",
    "김치찌개", "된장찌개", "부대찌개", "곱창", "막창", "닭발", "햄버거", "샌드위치", "샐러드", "라면"
];

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

// Dinner menu recommendation functionality
function recommendDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    return dinnerMenus[randomIndex];
}

function displayMenu(menu) {
    menuItemElement.textContent = menu;
}

recommendBtn.addEventListener('click', () => {
    const recommendedMenu = recommendDinner();
    displayMenu(recommendedMenu);
});
