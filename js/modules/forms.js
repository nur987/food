import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";
function forms(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо мы с вами скоро свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    ////! если В Форме есть баттон у него есть автоматическая оправка submit
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Чтобы выводить данные в этом теге
      const statusMessage = document.createElement("img");
      ////? для spinner.svg
      statusMessage.src = message.loading;
      ////?Чтобы центрировать modal
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;`;
      ////?   спиннер будет выходит внизу модального окна
      form.insertAdjacentElement("afterend", statusMessage);

      ////!Всегда нужно проверять name input в html чтобы backend(php) мог правильно получать ключ значение
      ////!для получения данные при submit в переменную FormData
      const formData = new FormData(form);
      // //! Получаем данные из formData и присаваиваем их в формате json в = json
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // for post to server.php
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          // console.log(data);
          ////?если успешно отправился данные выводим success модальное окно
          showThanksModal(message.success);
          ////? Для очистки данных инпут после отправки
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          ////? Для очистки данных инпут после отправки
          form.reset();
        });
    });
  }

  ////? forms messageModal when was send
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal(".modal", modalTimerId);

    const thanksModal = document.createElement("div");
    // в новый div даем стили модального окна
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close" data-close>×</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal(".modal");
    }, 4000);
  }
}

export default forms;
