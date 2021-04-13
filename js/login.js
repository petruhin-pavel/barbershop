const link = document.querySelector(".login-link"); //получаем ссылку кнопку Войти
const popup = document.querySelector(".modal-login"); //получаем модальное окно
const close = document.querySelector(".modal-close"); //получаем кнопку Х
const login = popup.querySelector("[name=login]"); //получаем поле ввода с именем login
const password = popup.querySelector("[name=password]"); //получаем поле ввода с именем password
const form = popup.querySelector("form"); //получаем форму ввода
const storage = localStorage.getItem("login"); //получаем ключ login из локального хранилища

// Проверка на доступность локального хранилища
const isStorageSupport = true;
const storage = " ";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


//открыть модальное окно
link.addEventListener("click", function (evt) { //события по клику
  evt.preventDefault(); //убираем стандартное действие браузера
  popup.classList.add("modal-show"); // добавляем класс

  if (storage) { //если значение существует
    login.value = storage; // тогда подставляем значение в поле ввода
    password.focus(); // и поставь фокус на поле ввода пароля
  } else {
    login.focus(); // поставь фокус на поле ввода логина
  }
});

//Закрыть модальное окно
close.addEventListener("click", function (evt) { //события по клику
  evt.preventDefault(); //убираем стандартное действие браузера
  popup.classList.remove("modal-show"); //удаляем класс
  popup.classList.remove("madal-error"); //удаляем класс с анимацией
});

//Валидация заполнения формы и запись логина в локальное хранилище, если оно доступно
form.addEventListener("submit", function (evt) { //событие при отправке формы
  if (!login.value || !password.value) { //если значения login или password пусты (|| - или, && - и)
    evt.preventDefault();
    popup.classList.remove("modal-error"); // очищаем класс
    popup.offsetWidth = popup.offsetWidth; // перезаписываем ширину
    popup.classList.add("modal-error"); //добавляем класс с анимацией (3 строки, связка позволяет вызывать анимацию много раз)
  } else {
    if (isStorageSupport) { // если хранилище доступно
      localStorage.setItem("login", login.value); // запись в локальное хранилище логин пользователя
    }
  }
});

// Закрыть модальное окно клавишей esc
window.addEventListener("keydown", function (evt) { // событие при нажатии клавиши на клавиатуре
  if (evt.keyCode === 27) { // 27 код клавиши esc 
    if (popup.classList.contains('modal-show')) { //если окно открыто
      evt.preventDefault();
      popup.classList.remove("modal-show"); // удали класс
    }
  }
});