document.querySelectorAll('.video-thumb').forEach(thumb => {
  const videoSrc = thumb.dataset.src;
  const canvas = thumb.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const video = document.createElement('video');
  video.src = videoSrc;
  video.muted = true;
  video.crossOrigin = "anonymous"; // если с другого домена
  video.currentTime = Math.random() * 5 + 1; // случайный момент, 1-6 секунд

  video.addEventListener('loadeddata', () => {
    video.addEventListener('seeked', () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }, { once: true });

    video.currentTime = Math.random() * video.duration;
  });
});
