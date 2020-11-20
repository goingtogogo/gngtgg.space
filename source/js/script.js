import onLoad from './modules/on-load';
import menu from './modules/menu';
import form from './modules/form';
import Slider from './modules/slider';

// init modules
onLoad();
menu();
form();

const slider = new Slider();
slider.init();
