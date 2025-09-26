// Получаем кнопку
var mybutton = document.getElementById("scrollToTopBtn");

// Когда пользователь прокручивает вниз на 20px от верхнего края, показываем кнопку
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Когда пользователь кликает на кнопку, прокручиваем страницу наверх
mybutton.onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}