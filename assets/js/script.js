const slidesData = [
  { image: 'assets/img/gallery/photo01.jpg', headline: 'Portrait', subheadline: 'Faces, gestures, and the stories held in a glance.' },
  { image: 'assets/img/gallery/photo02.jpg', headline: 'Events', subheadline: 'Energy, movement, and the moments between the moments.' },
  { image: 'assets/img/gallery/photo03.jpg', headline: 'Street', subheadline: 'Unscripted frames from the rhythm of the everyday.' },
  { image: 'assets/img/gallery/photo04.jpg', headline: 'Cinematic', subheadline: 'Light, shadow, and a little bit of atmosphere.' },
  { image: 'assets/img/gallery/photo05.jpg', headline: 'Travel', subheadline: 'Warm light across a quiet afternoon.' }
];

const revealItems = document.querySelectorAll('.reveal, .journey-card');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => revealObserver.observe(item));

const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slide-dots');
const count = document.querySelector('.slide-count');

if (slider && dotsContainer) {
  let currentIndex = 0;
  let touchStartX = 0;

  slidesData.forEach((slideData, index) => {
    const slide = document.createElement('article');
    slide.className = 'slide';
    slide.setAttribute('aria-hidden', String(index !== 0));
    slide.innerHTML = `<img class="slide-image" src="${slideData.image}" alt="${slideData.headline}" loading="${index === 0 ? 'eager' : 'lazy'}"><div class="slide-content"><h1>${slideData.headline}</h1><p>${slideData.subheadline}</p></div>`;
    slider.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'slide-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Go to ${slideData.headline} slide`);
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  function showSlide(index) {
    currentIndex = (index + slidesData.length) % slidesData.length;
    document.querySelectorAll('.slide').forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    document.querySelectorAll('.slide-dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === currentIndex);
      dot.setAttribute('aria-current', dotIndex === currentIndex ? 'true' : 'false');
    });
    if (count) count.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(slidesData.length).padStart(2, '0')}`;
  }

  slider.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) showSlide(currentIndex + (delta < 0 ? 1 : -1));
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') showSlide(currentIndex + 1);
    if (event.key === 'ArrowLeft') showSlide(currentIndex - 1);
  });
  showSlide(0);
}
