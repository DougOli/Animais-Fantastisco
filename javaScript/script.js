import ScrollSuave from "./modulos/scroll-suave.js";
import TabNav from "./modulos/tab-animate.js";
import Accordion from "./modulos/activate-accordion.js";
import initAnimation from "./modulos/menu-animate.js";
import initModal from "./modulos/modal.js";
import initTooltip from "./modulos/tooltip.js";
import initDropdown from "./modulos/dropdown.js";
import initMobileMenu from "./modulos/mobile-menu.js";
import openingHours from "./modulos/opening-hours.js";
import fetchAnimais from "./modulos/fetch-animais.js";
import fetchBitCoins from "./modulos/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-tab="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="acorddion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initAnimation();
initModal();
initTooltip();
initDropdown();
initMobileMenu();
openingHours();
fetchAnimais();
fetchBitCoins();
