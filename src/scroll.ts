export const observeBreakpoint = () => {
  const resizeObserver = new ResizeObserver(() => {
    if (window.innerWidth > 1024) {
    observeSections();
    } else {
    unobserveSections();
    }
  });

  resizeObserver.observe(document.documentElement); 
};

let observer: IntersectionObserver;

const observeSections = () => {
  const sections = document.querySelectorAll('main>section');

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
};

const unobserveSections = () => {
  if (observer) {
    observer.disconnect();
  }
};
