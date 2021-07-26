const slideUp = document.querySelectorAll('.slide-up');
const about = document.querySelectorAll('.about');

// SECTIONS SLIDEUP
const slideUpFunction = (entries, obs) => {
  entries.forEach(entry => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.remove('slide-up');
      obs.unobserve(entry.target);
    }
  });
};

const slideUpOptions = {
  root: null,
  threshold: 0.3,
  rootMargin: '150px',
};

const slideUpObserver = new IntersectionObserver(
  slideUpFunction,
  slideUpOptions
);

slideUp.forEach(slide => {
  slideUpObserver.observe(slide);
});

// ---------------------------
