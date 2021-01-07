/* eslint no-param-reassign: 0 */
/* eslint no-cond-assign: 0 */

const fadeOut = (el) => {
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = 'none';
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

const animatePageLoading = () => {
    const preloader = document.querySelector('.preloader');

    fadeOut(preloader);
};

const onLoad = () => {
    document.body.classList.add('content-loaded');
};

export default () => {
    document.addEventListener(`DOMContentLoaded`, () => {
        animatePageLoading();

        onLoad();
    });
};
