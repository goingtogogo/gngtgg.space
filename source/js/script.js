import onLoad from './modules/on-load';
import menu from './modules/menu';
import Slider from './modules/slider';

// init modules
onLoad();
menu();

const slider = new Slider();
slider.init();
