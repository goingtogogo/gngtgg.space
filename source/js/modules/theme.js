const toggleThemeButton = document.querySelector('.header__toggle-theme');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
} else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme');
}

const toggleTheme = () => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDarkScheme.matches) {
        document.body.classList.toggle('light-theme');
    } else {
        document.body.classList.toggle('dark-theme');
    }

    const theme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light';
    localStorage.setItem('theme', theme);
};

export default () => {
    toggleThemeButton.addEventListener('change', toggleTheme);
};
