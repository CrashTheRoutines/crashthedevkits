//let age = prompt ('Введите ваш возраст:');
//if (age < 18) {
//  alert("Доступ запрещен!");
//} else {
//  alert("Добро пожаловать!");
//}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("ageModal");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  modal.style.display = "flex"; // Показываем модальное окно

  yesBtn.addEventListener("click", () => {
    alert("Добро пожаловать!");
    modal.style.display = "none"; // Закрываем окно
  });

  noBtn.addEventListener("click", () => {
    alert("Доступ запрещен!");
    modal.style.display = "none"; // Закрываем окно
    window.location.href = "https://google.com"; // Перенаправление
  });
});
