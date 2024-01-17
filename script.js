let menuBtn = document.querySelector("#menu-btn");
let logoBtn = document.querySelector(".logo");
let navbarr = document.querySelector(".header .flex .navbar");
let navEle = document.querySelectorAll(".header .flex .navbar .nav-ele");

console.log(navEle);

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbarr.classList.toggle("active");
};

logoBtn.addEventListener("click", () => {
  navEle.forEach((nav) => {
    nav.classList.remove("active");
  });
  document.querySelector(".home").classList.add("active");
});

navEle.forEach((singleNav, i) => {
  singleNav.addEventListener("click", (e) => {
    navEle.forEach((nav) => {
      nav.classList.remove("active");
      console.log(nav);
    });
    e.target.classList.add("active");
  });
  console.log(singleNav.classList.contains("active"));
});

var swiper = new Swiper(".course-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
