  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('closeBtn');

  burger.addEventListener('click', () => {
    mobileNav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
