import onLoad from './modules/on-load';
import menu from './modules/menu';
import form from './modules/form';
import Slider from './modules/slider';
import { inject } from '@vercel/analytics';
// import theme from './modules/theme';

// init modules
onLoad();
menu();
form();
inject();
// theme();

const slider = new Slider();
slider.init();
