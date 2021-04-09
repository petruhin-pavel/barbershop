const link = document.querySelector(".login-link"); //получаем ссылку кнопку Войти
const popup = document.querySelector(".modal-login"); //получаем модальное окно
const close = document.querySelector(".modal-close"); //получаем кнопку Х
const login = popup.querySelector("[name=login]"); //получаем поле ввода с именем login
const password = popup.querySelector("[name=password]"); //получаем поле ввода с именем password
const form = popup.querySelector("form"); //получаем форму ввода



link.addEventListener("click", function (evt) { //события по клику
  evt.preventDefault(); //убираем действие браузера
  popup.classList.add("modal-show"); // добавляем класс

  login.focus(); // автофокус на поле ввода
});

close.addEventListener("click", function (evt) { //события по клику
  evt.preventDefault(); //убираем действие браузера
  popup.classList.remove("modal-show"); //удаляем класс
});

form.addEventListener("submit", function (evt) { //событие при отправке формы
  if (!login.value || !password.value) { //если значения login или password пусты (|| - или, && - и)
    evt.preventDefault();
    console.log("Введите логин и пароль");
  }
});