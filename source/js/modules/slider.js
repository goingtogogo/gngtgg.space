class Slider {
    constructor() {
        this.screenElements = document.querySelectorAll('.animated-section');
        this.menuElements = document.querySelectorAll('.header__menu-link');

        this.arrowNavigation = document.querySelectorAll(
            '.header__arrows-nav button'
        );

        this.activeScreen = 0;
        this.onUrlHashChangedHandler = this.onUrlHashChanged.bind(this);
        this.onArrowNavigationHandler = this.onArrowNavigation.bind(this);
    }

    init() {
        window.addEventListener(`popstate`, this.onUrlHashChangedHandler);

        this.arrowNavigation.forEach((arrow) =>
            arrow.addEventListener('click', this.onArrowNavigationHandler)
        );

        this.onUrlHashChanged();
    }

    onArrowNavigation(e) {
        if (e.currentTarget.dataset.direction === 'left') {
            const newIndex = this.activeScreen - 1;

            this.activeScreen = newIndex < 0 ? 0 : newIndex;
        } else {
            const newIndex = this.activeScreen + 1;

            this.activeScreen =
                newIndex > this.screenElements.length - 1
                    ? this.screenElements.length - 1
                    : newIndex;
        }

        this.changePageDisplay();
    }

    onUrlHashChanged() {
        const newIndex = Array.from(this.screenElements).findIndex(
            (screen) => window.location.hash.slice(1) === screen.dataset.id
        );
        this.activeScreen = newIndex < 0 ? 0 : newIndex;
        this.changePageDisplay();
    }

    changePageDisplay() {
        this.changeVisibilityDisplay();
        this.changeActiveMenuItem();
    }

    changeVisibilityDisplay() {
        this.screenElements.forEach((screen) => {
            screen.classList.remove(`animated-section--active`);
        });

        this.screenElements[this.activeScreen].classList.add(
            `animated-section--active`
        );
    }

    changeActiveMenuItem() {
        const activeItem = Array.from(this.menuElements).find(
            (item) =>
                item.dataset.href ===
                this.screenElements[this.activeScreen].dataset.id
        );
        if (activeItem) {
            this.menuElements.forEach((item) =>
                item.classList.remove(`header__menu-link--active`)
            );
            activeItem.classList.add(`header__menu-link--active`);
        }
    }
}

export default Slider;
