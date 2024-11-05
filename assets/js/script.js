/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  var menuIcon = document.querySelector(".nav-menu-btn i");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
    menuIcon.className = "uil uil-times"; // Change to cross icon
  } else {
    menuBtn.className = "nav-menu";
    menuIcon.className = "uil uil-bars"; // Change back to hamburger icon
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function sendMessage(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  window.location.href = `mailto:sagarrathore896581@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
}

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
if (typeof Typed !== "undefined") {
  var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "data analyst"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
}
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  /* -- HOME -- */
  sr.reveal(".featured-text-card", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });

  /* -- PROJECT BOX -- */
  sr.reveal(".project-box", { interval: 200 });

  /* -- HEADINGS -- */
  sr.reveal(".top-header", {});
}

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*='" + sectionId + "']")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*='" + sectionId + "']")
        .classList.remove("active-link");
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const themeToggleIcon = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-theme")) {
    themeToggleIcon.classList.remove("uil-moon");
    themeToggleIcon.classList.add("uil-sun");
  } else {
    themeToggleIcon.classList.remove("uil-sun");
    themeToggleIcon.classList.add("uil-moon");
  }
}
const fontToggleBtn = document.getElementById("fontToggleBtn");
if (fontToggleBtn) {
  fontToggleBtn.addEventListener("click", function () {
    const label = document.querySelector(".toggle-switch-label");
    if (label.style.fontFamily === '"Luxurious Roman", cursive') {
      label.style.fontFamily = '"Poppins", sans-serif';
    } else {
      label.style.fontFamily = '"Luxurious Roman", cursive';
    }
  });
}
function toggleFont() {
  const body = document.body;
  const buttons = document.querySelectorAll("button");

  if (body.style.fontFamily === '"Luxurious Roman", cursive') {
    body.style.fontFamily = '"Poppins", sans-serif';
    buttons.forEach((button) => {
      button.style.fontFamily = '"Poppins", sans-serif';
    });
  } else {
    body.style.fontFamily = '"Luxurious Roman", cursive';
    buttons.forEach((button) => {
      button.style.fontFamily = '"Luxurious Roman", cursive';
    });
  }
}
window.addEventListener("scroll", scrollActive);
