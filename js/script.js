window.addEventListener("DOMContentLoaded", function () {
  const tabs = require("./modules/tabs"),
    timer = require("./modules/timer"),
    modal = require("./modules/modal"),
    cards = require("./modules/cards"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider"),
    calc = require("./modules/calc");

  // Tabs
  tabs();
  // Timer
  timer();
  // Modal
  modal();
  // Используем классы для создание карточек меню
  cards();
  // Forms send data
  forms();
  // Slider
  slider();
  // Calculator
  calc();
});
