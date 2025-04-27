document.addEventListener('DOMContentLoaded', function () {
  const thumbs = document.querySelectorAll('.video-thumb');
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  const closeBtn = document.querySelector('.close');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function () {
      const src = this.getAttribute('data-src');
      video.src = src;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    video.pause();
    video.src = ''; // очищаем src чтобы не продолжалось воспроизведение
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      video.pause();
      video.src = '';
    }
  });
});
