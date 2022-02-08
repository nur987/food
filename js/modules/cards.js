import { getResource } from "../services/services";
////! Используем классы для создание карточек меню
function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>
          `;
      this.parent.append(element);
    }
  }

  /*  
 getResourses("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      ////! Создася сколько есть объектов в сервере столько и карточек
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ////!".menu .container"-куда мы будем пушит
        ".menu .container"
      ).render();
    });
  }); 
  */
  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      //     ////! Создася сколько есть объектов в сервере столько и карточек
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ////!".menu .container"-куда мы будем пушит
        ".menu .container"
      ).render();
    });
    console.log(data);
  });

  /*   ////! получаем данные из сервера присваиваем в data а данные будут доступны для функции createCard(data)
  getResourses("http://localhost:3000/menu").then((data) => createCard(data));

  ////! data это будем получать из бд db.json сервер second example how create card
  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const element = document.createElement("div");
      
      element.classList.add("menu__item");

      element.innerHTML = `
      <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
  `;

      document.querySelector(".menu .container").append(element);
    });
  } */
}

export default cards;
