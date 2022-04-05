import ScrollSuave from "./modulos/scroll-suave.js";
import TabNav from "./modulos/tab-animate.js";
import Accordion from "./modulos/activate-accordion.js";
import initAnimation from "./modulos/menu-animate.js";
import Modal from "./modulos/modal.js";
import Tooltip from "./modulos/tooltip.js";
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

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");

tooltip.init();

initAnimation();
initDropdown();
initMobileMenu();
openingHours();
fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitCoins("https://blockchain.info/ticker", ".btc-preco");
