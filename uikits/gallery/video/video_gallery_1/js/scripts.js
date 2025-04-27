document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video");

  videos.forEach((video) => {
    const durationSpan = video.nextElementSibling.nextElementSibling;

    video.addEventListener("loadedmetadata", () => {
      const duration = video.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60)
        .toString()
        .padStart(2, "0");
      durationSpan.textContent = `Длительность: ${minutes}:${seconds}`;
    });

    video.controls = false; // Отключить стандартные элементы управления (опционально)
  });
});

// Функция для загрузки контента категории
function loadCategory(categoryId) {
  // Скрыть все категории
  const allCategories = document.querySelectorAll('.category-content');
  allCategories.forEach(function(category) {
      category.style.display = 'none';
  });
  
  // Показать выбранную категорию
  const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
      selectedCategory.style.display = 'block';
  }
}

// По умолчанию показываем первую категорию
loadCategory('category1');