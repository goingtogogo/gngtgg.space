// todo: save 'theme' to LocalStorage
const toggleThemeButton = document.querySelector('.header__toggle-theme');

const toggleTheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme');
    } else {
        document.body.classList.toggle('dark-theme');
    }
};

export default () => {
    toggleThemeButton.addEventListener('change', toggleTheme);
};
