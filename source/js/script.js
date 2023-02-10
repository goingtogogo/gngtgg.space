import onLoad from './modules/on-load';
import menu from './modules/menu';
import form from './modules/form';
import Slider from './modules/slider';
import animateBackground from './modules/background';
import { inject } from '@vercel/analytics';
// import theme from './modules/theme';

// init modules
onLoad();
animateBackground();
menu();
form();
inject();
// theme();

const mainSlider = new Slider();
mainSlider.init();
