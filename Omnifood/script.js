const nav = document.querySelector('.nav');

const navbar = document.querySelector('.nav__navigation');
const navRow = document.querySelector('.nav__row');

const animateSection = document.querySelectorAll('.animate-section');

const phone = document.querySelector('.phone');
const animatePhone = document.querySelector('.animate-phone');

// MENU BTN
const menu = document.querySelector('.menu-btn');
let menuOpen = false;
const sidebar = document.querySelector('.sidemenu');

// NAV //

// const heightNav = navbar.getBoundingClientRect().height;

// const navObserver = new IntersectionObserver(
//   (entries, obs) => {
//     entries.forEach(entry => {
//       // console.log(entry);
//       if (!entry.isIntersecting) {
//         navbar.classList.add('hidden');
//         navRow.classList.add('hidden');
//       } else {
//         navbar.classList.remove('hidden');
//         navRow.classList.remove('hidden');
//       }
//     });
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: `${-heightNav}px`,
//   }
// );

// navObserver.observe(nav);

// Animate-Section

const sectionObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');

        obs.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

animateSection.forEach(section => {
  sectionObserver.observe(section);
});

// ANIMATE-PHONE //

const phoneObserver = new IntersectionObserver(
  (entry, obs) => {
    entry.forEach(e => {
      if (e.isIntersecting) {
        animatePhone.classList.remove('hidden');
        obs.unobserve(e.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

phoneObserver.observe(phone);
// -----------------------

menu.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    sidebar.classList.add('open');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    sidebar.classList.remove('open');
    menuOpen = false;
  }
});

// toggle menu by clicking link
const toggle = document.querySelectorAll('.toggle');

toggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      sidebar.classList.remove('open');
      menuOpen = false;
    }
  });
});
