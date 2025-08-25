// Togle and responsive navigation
const navSlide = () => {
  const burgerAnimation = document.querySelector(".burger-menu");
  const navbarList = document.querySelector("nav");

  burgerAnimation.addEventListener("click", () => {
    navbarList.classList.toggle("active");
    burgerAnimation.classList.toggle("animation-burger");
  });
};
navSlide();

// Berubah warna navbar ketika di scroll
// Sesuai dengan mode dark/light
const nav = document.getElementById("navbar");
window.onscroll = () => {
  if (window.scrollY > 180) {
    nav.classList.add("scrolled-navbar");
  } else {
    nav.classList.remove("scrolled-navbar");
  }
};

// Membuat fungsi light & dark mode
// Ambil elemen checkbox dan kedua ikon
const checkbox = document.getElementById('modeToggle');
const sunIcon = document.querySelector('.sun');
const monIcon = document.querySelector('.moon');
const bodyDark = document.body;

// Event listener untuk menangani perubahan status checkbox
checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    sunIcon.style.display = 'block';
    monIcon.style.display = 'none';
    bodyDark.classList.add('dark');
    localStorage.setItem('darkMode', 'on');
  } else {
    sunIcon.style.display = 'none';
    monIcon.style.display = 'block';
    bodyDark.classList.remove('dark');
    localStorage.setItem('darkMode', 'off');
  }
});

// Cek apakah dark mode sebelumnya aktif
if (localStorage.getItem('darkMode') === 'on') {
  checkbox.checked = true;
  bodyDark.classList.add('dark');
  sunIcon.style.display = 'block';
  monIcon.style.display = 'none';
} else {
  checkbox.checked = false;
  bodyDark.classList.remove('dark');
  sunIcon.style.display = 'none';
  monIcon.style.display = 'block';
}

// Toggle paragraf lebih banyak
function toggleText(paragrafId) {
  // Menutup semua paragraf yang terbuka sebelumnya
  const allMoreText = document.querySelectorAll('.moreText');
  const allButtonText = document.querySelectorAll('.buttonText');

  // Mendapatkan elemen yang relevan berdasarkan paragrafId
  const moreText = document.querySelector(`#paragraf${paragrafId} .moreText`);
  const buttonText = document.querySelector(`#paragraf${paragrafId} .buttonText`);

  // Mengecek jika teks saat ini sedang ditampilkan
  const isCurrentlyVisible = moreText.style.display === "inline";

  allMoreText.forEach(text => {
    text.style.display = "none";
  });

  allButtonText.forEach(button => {
    button.innerHTML = "Lebih banyak";
  });
  
  // Menampilkan atau menyembunyikan teks lebih banyak
  if (!isCurrentlyVisible) {
    moreText.style.display = "inline";
    buttonText.innerHTML = "Lebih Sedikit";
  } else {
    moreText.style.display = "none";
    buttonText.innerHTML = "Lebih banyak";
  }
}

// Copy slider skills
const copySlideLeft = document.querySelector('#icons-group-left').cloneNode(true);
document.querySelector('#icon-slide-left').appendChild(copySlideLeft);

const copySlideRight = document.querySelector('#icons-group-right').cloneNode(true);
document.querySelector('#icon-slide-right').appendChild(copySlideRight);

// Custom delay AOS
function setCustomAOSDelay() {
  const width = window.innerWidth;

  let sizeDeviceAOS;
  if (width > 1366) {
    sizeDeviceAOS = 'desktop';
  } else if (width > 768) {
    sizeDeviceAOS= 'laptop';
  } else if (width > 490) {
    sizeDeviceAOS = 'tablet';
  } else {
    sizeDeviceAOS = 'mobile';
  }

  document.querySelectorAll('.custom-delay-aos').forEach(el => {
    const delay = el.getAttribute(`data-delay-${sizeDeviceAOS}`) || 0;
    el.setAttribute('data-aos-delay', delay);
  });

  AOS.refresh();
}

window.addEventListener('load', setCustomAOSDelay);
window.addEventListener('resize', setCustomAOSDelay);