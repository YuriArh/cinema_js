import slideMenu from "./menu.js";
import renderVideo from './rendervideo.js';
import menuLink from './menuLink.js';

slideMenu ({
    openBtn: '.header__burger-btn', 
    menu:  '.navigation', 
    classActiveMenu: 'navigation_active', 
    closeTrigger: '.navigation__link, .navigation__close',
});

renderVideo();
menuLink();