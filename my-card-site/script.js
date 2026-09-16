// Находим элементы на странице
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Вешаем "слушателя" на клик по кнопке
toggleBtn.addEventListener('click', () => {
    // Проверяем, какая тема сейчас активна
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Если темно, переключаем на светло
        body.removeAttribute('data-theme');
        toggleBtn.textContent = '🌙'; // Меняем иконку
    } else {
        // Если светло, переключаем на темно
        body.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '☀️'; // Меняем иконку
    }
});