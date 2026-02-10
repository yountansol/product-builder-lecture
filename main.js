
const recommendBtn = document.getElementById('recommend-btn');
const menuItemElement = document.querySelector('.menu-item');
const menuImageElement = document.getElementById('menu-image');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const dinnerMenus = [
    { name: "치킨", imageUrl: "https://placehold.co/200x200?text=%EC%B9%98%ED%82%A8" },
    { name: "피자", imageUrl: "https://placehold.co/200x200?text=%ED%94%BC%EC%9E%90" },
    { name: "삼겹살", imageUrl: "https://placehold.co/200x200?text=%EC%82%BC%EA%B2%B9%EC%82%B4" },
    { name: "초밥", imageUrl: "https://placehold.co/200x200?text=%EC%B4%88%EB%B0%A5" },
    { name: "파스타", imageUrl: "https://placehold.co/200x200?text=%ED%8C%8C%EC%8A%A4%ED%83%80" },
    { name: "족발", imageUrl: "https://placehold.co/200x200?text=%EC%A1%B1%EB%B0%9C" },
    { name: "보쌈", imageUrl: "https://placehold.co/200x200?text=%EB%B3%B4%EC%8C%88" },
    { name: "짜장면", imageUrl: "https://placehold.co/200x200?text=%EC%A7%9C%EC%9E%A5%EB%A9%B4" },
    { name: "짬뽕", imageUrl: "https://placehold.co/200x200?text=%EC%A7%AC%EB%BD%95" },
    { name: "떡볶이", imageUrl: "https://placehold.co/200x200?text=%EB%96%A1%EB%B3%B6%EC%9D%B4" },
    { name: "김치찌개", imageUrl: "https://placehold.co/200x200?text=%EA%B9%80%EC%B9%98%EC%B0%8C%EA%B0%9C" },
    { name: "된장찌개", imageUrl: "https://placehold.co/200x200?text=%EB%90%9C%EC%9E%A5%EC%B0%8C%EA%B0%9C" },
    { name: "부대찌개", imageUrl: "https://placehold.co/200x200?text=%EB%B6%80%EB%8C%80%EC%B0%8C%EA%B0%9C" },
    { name: "곱창", imageUrl: "https://placehold.co/200x200?text=%EA%B3%B1%EC%B0%BD" },
    { name: "막창", imageUrl: "https://placehold.co/200x200?text=%EB%A7%89%EC%B0%BD" },
    { name: "닭발", imageUrl: "https://placehold.co/200x200?text=%EB%8B%AD%EB%B0%9C" },
    { name: "햄버거", imageUrl: "https://placehold.co/200x200?text=%ED%96%84%EB%B2%84%EA%B1%B0" },
    { name: "샌드위치", imageUrl: "https://placehold.co/200x200?text=%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98" },
    { name: "샐러드", imageUrl: "https://placehold.co/200x200?text=%EC%83%90%EB%9F%AC%EB%93%9C" },
    { name: "라면", imageUrl: "https://placehold.co/200x200?text=%EB%9D%BC%EB%A9%B4" }
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
    menuItemElement.textContent = menu.name;
    menuImageElement.src = menu.imageUrl;
    menuImageElement.alt = menu.name;
}

recommendBtn.addEventListener('click', () => {
    const recommendedMenu = recommendDinner();
    displayMenu(recommendedMenu);
});
