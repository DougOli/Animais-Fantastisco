import ScrollSuave from "./modulos/scroll-suave.js";
import initTabNav from "./modulos/tab-animate.js";
import activateAccordion from "./modulos/activate-accordion.js";
import initAnimation from "./modulos/menu-animate";
import initModal from "./modulos/modal.js";
import initTooltip from "./modulos/tooltip.js";
import initDropdown from "./modulos/dropdown.js";
import initMobileMenu from "./modulos/mobile-menu.js";
import openingHours from "./modulos/opening-hours.js";
import fetchAnimais from "./modulos/fetch-animais.js";
import fetchBitCoins from "./modulos/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-tab="menu"] a[href^="#"]');
scrollSuave.init();

initTabNav();
activateAccordion();
initAnimation();
initModal();
initTooltip();
initDropdown();
initMobileMenu();
openingHours();
fetchAnimais();
fetchBitCoins();
