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

const handleMouseMove = (e) => {
    const STRENGTH = 23;
    const windowHeight = document.documentElement.clientHeight;
    const windowWidth = document.documentElement.clientWidth;

    const height = STRENGTH / windowHeight;
    const width = STRENGTH / windowWidth;
    const pageX = e.pageX - windowWidth / 2;
    const pageY = e.pageY - windowHeight / 2;
    const newvalueX = width * pageX * -1;
    const newvalueY = height * pageY * -1;

    const background = document.querySelector('.animated-bg');

    background.classList.add('transition');
    background.style.backgroundPosition = `calc(50% + ${newvalueX}px) calc( 50% + ${newvalueY}px)`;

    setTimeout(function () {
        background.classList.remove('transition');
    }, 300);
};

const onLoad = () => {
    document.body.classList.add('content-loaded');

    document.addEventListener('mousemove', (e) => {
        handleMouseMove(e);
    });
};

export default () => {
    document.addEventListener(`DOMContentLoaded`, () => {
        animatePageLoading();

        onLoad();
    });
};
