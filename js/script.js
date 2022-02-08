////! Экспортировали этот полифил для старых бразуеров
require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";
////! my modules
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import { openModal } from "./modules/modal";
window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );
  // Tabs
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  // Timer
  timer(".timer", "2022-02-08");
  // Modal
  modal("[data-modal]", ".modal", modalTimerId);
  // Используем классы для создание карточек меню
  cards();
  // Forms send data
  forms("form", modalTimerId);
  // Slider
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totlaCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
  // Calculator
  calc();
});
