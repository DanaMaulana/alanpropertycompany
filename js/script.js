// Menu hamberger
function menuHumberger() {
  const menuHumberger = document.querySelector('.menuToggle');
  const headerList = document.querySelector('.header-list');

  menuHumberger.classList.toggle('active');
  headerList.classList.toggle('active');
}