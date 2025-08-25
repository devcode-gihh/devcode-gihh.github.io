// Toggle class active
const burgerAnimation = document.querySelector(".burger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
burgerAnimation.onclick = () => {
  navbarNav.classList.toggle("active");
  burgerAnimation.classList.toggle("animation-burger");
};

// Klik diluar side bar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!burgerAnimation.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    burgerAnimation.classList.remove("animation-burger");
  }
});

// Klik slider product
const initSlider = () => {
  const cardList = document.querySelector(".card-list-bs");
  const slideButtons = document.querySelectorAll(".slide-button");

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1 ;
      const scrollAmount = cardList.clientWidth * direction;
      cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
}

window.addEventListener("load", initSlider);

// Klik button/link untuk category parfume
const linkscategory = document.querySelectorAll('.bar-category');
const buttonsCategory = document.querySelectorAll('.btn-category');
const productLists = document.querySelectorAll('.card-list-ls');

// Klik link di bar over untuk category parfume
linkscategory.forEach((aLink) => {
  aLink.addEventListener('click', () => {
    buttonsCategory.forEach((btn) => btn.classList.remove('category-active'));
    productLists.forEach((list) => list.classList.remove('product-active'));

    aLink.classList.add('category-active');
    document.getElementById('category-' + aLink.id.split('-')[1]).classList.add('category-active');
    document.getElementById('list-parfume-' + aLink.id.split('-')[1]).classList.add('product-active');
  });
});

// Klik button di product list untuk category parfume
buttonsCategory.forEach((button) => {
  button.addEventListener('click', () => {
    buttonsCategory.forEach((btn) => btn.classList.remove('category-active'));
    productLists.forEach((list) => list.classList.remove('product-active'));

    button.classList.add('category-active');
    document.getElementById('list-parfume-' + button.id.split('-')[1]).classList.add('product-active');
  });
});
