// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Berubah warna navbar ketika di scroll
const nav = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 180) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    nav.style.transition = ".8s";
  } else {
    nav.style.backgroundColor = "transparent";
  }
};

// Berubah warna text navbar  ketika di scrol
window.addEventListener('scroll', function() {
  if (window.scrollY > 875) {
    document.querySelector('#beranda').classList.remove('active'); 
  } else {
    document.querySelector('#beranda').classList.add('active');
  }

  if (window.scrollY > 875 && window.scrollY < 3050) {
    document.querySelector('#tentang').classList.add('active'); 
  } else {
    document.querySelector('#tentang').classList.remove('active');
  }

  if (window.scrollY > 3050 && window.scrollY < 3950) {
    document.querySelector('#layanan').classList.add('active'); 
  } else {
    document.querySelector('#layanan').classList.remove('active');
  }

  if (window.scrollY > 3950 && window.scrollY < 10000) {
    document.querySelector('#kontak').classList.add('active'); 
  } else {
    document.querySelector('#kontak').classList.remove('active');
  }
});
