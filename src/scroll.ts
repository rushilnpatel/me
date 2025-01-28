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
  console.log("🚀 ~ observeSections ~ sections:", sections)

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      console.log("🚀 ~ entries.forEach ~ id:", id)
      const navLink = document.querySelector(`.nav a[href="#${id}"]`);

      console.log("🚀 ~ entries.forEach ~ navLink:", navLink)
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
