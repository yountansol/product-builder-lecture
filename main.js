
const recommendBtn = document.getElementById('recommend-btn');
const menuItemElement = document.querySelector('.menu-item');
const menuImageElement = document.getElementById('menu-image');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const dinnerMenus = [
    { name: "치킨", imageUrl: "https://picsum.photos/seed/1/200" },
    { name: "피자", imageUrl: "https://picsum.photos/seed/2/200" },
    { name: "삼겹살", imageUrl: "https://picsum.photos/seed/3/200" },
    { name: "초밥", imageUrl: "https://picsum.photos/seed/4/200" },
    { name: "파스타", imageUrl: "https://picsum.photos/seed/5/200" },
    { name: "족발", imageUrl: "https://picsum.photos/seed/6/200" },
    { name: "보쌈", imageUrl: "https://picsum.photos/seed/7/200" },
    { name: "짜장면", imageUrl: "https://picsum.photos/seed/8/200" },
    { name: "짬뽕", imageUrl: "https://picsum.photos/seed/9/200" },
    { name: "떡볶이", imageUrl: "https://picsum.photos/seed/10/200" },
    { name: "김치찌개", imageUrl: "https://picsum.photos/seed/11/200" },
    { name: "된장찌개", imageUrl: "https://picsum.photos/seed/12/200" },
    { name: "부대찌개", imageUrl: "https://picsum.photos/seed/13/200" },
    { name: "곱창", imageUrl: "https://picsum.photos/seed/14/200" },
    { name: "막창", imageUrl: "https://picsum.photos/seed/15/200" },
    { name: "닭발", imageUrl: "https://picsum.photos/seed/16/200" },
    { name: "햄버거", imageUrl: "https://picsum.photos/seed/17/200" },
    { name: "샌드위치", imageUrl: "https://picsum.photos/seed/18/200" },
    { name: "샐러드", imageUrl: "https://picsum.photos/seed/19/200" },
    { name: "라면", imageUrl: "https://picsum.photos/seed/20/200" }
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
