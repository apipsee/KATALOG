/*
==================================================
1. PHOTO DATA

Add more slides here whenever you want to show a new portrait.
Each object only needs an image, headline, and subheadline.
==================================================
*/
const slidesData = [
  {
    image: 'assets/img/gallery/photo01.jpg',
    headline: 'Urban Portrait',
    subheadline: 'A quiet moment between the city lights.'
  },
  {
    image: 'assets/img/gallery/photo02.jpg',
    headline: 'Soft Light',
    subheadline: 'Warm shadows and a gentle editorial mood.'
  },
  {
    image: 'assets/img/gallery/photo03.jpg',
    headline: 'Night Study',
    subheadline: 'A cinematic portrait shaped by contrast.'
  },
  {
    image: 'assets/img/gallery/photo04.jpg',
    headline: 'Quiet Confidence',
    subheadline: 'Minimal styling, calm focus, and strong character.'
  },
  {
    image: 'assets/img/gallery/photo05.jpg',
    headline: 'Golden Frame',
    subheadline: 'Sunlit detail and natural expression.'
  },
  {
    image: 'assets/img/gallery/photo06.jpg',
    headline: 'After Hours',
    subheadline: 'Late light, dark tones, and refined depth.'
  }
];

const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.slide-dots');

let currentIndex = 0;
let touchStartX = 0;
let touchCurrentX = 0;
let isDragging = false;
const swipeThreshold = 60;

/*
==================================================
2. RENDER SLIDE

This creates one slide element per photo object.
Each slide contains the image, headline, and subheadline.
==================================================
*/
function renderSlides() {
  slider.innerHTML = '';
  dotsContainer.innerHTML = '';

  slidesData.forEach((slideData, index) => {
    const slide = document.createElement('article');
    slide.className = 'slide';
    slide.setAttribute('data-index', String(index));
    slide.setAttribute('aria-hidden', String(index !== 0));

    const image = document.createElement('img');
    image.className = 'slide-image';
    image.src = slideData.image;
    image.alt = slideData.headline;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.addEventListener('error', () => {
      image.src = 'assets/img/gallery/photo01.jpg';
      image.alt = 'Placeholder portrait image';
    });

    const content = document.createElement('div');
    content.className = 'slide-content';
    content.innerHTML = `
      <h1>${slideData.headline}</h1>
      <p>${slideData.subheadline}</p>
    `;

    slide.appendChild(image);
    slide.appendChild(content);
    slider.appendChild(slide);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slide-dot';
    dot.setAttribute('aria-label', `Go to photo ${index + 1}`);
    dot.addEventListener('click', () => {
      showSlide(index);
    });
    dotsContainer.appendChild(dot);
  });
}

/*
==================================================
3. CURRENT SLIDE

This keeps the active slide in sync with the data array.
The infinite loop is handled with modulo math.
==================================================
*/
function updateDots() {
  const dots = Array.from(document.querySelectorAll('.slide-dot'));

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
    dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
  });
}

function showSlide(index) {
  const totalSlides = slidesData.length;
  currentIndex = (index + totalSlides) % totalSlides;

  const slides = Array.from(document.querySelectorAll('.slide'));

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentIndex;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
    slide.style.opacity = '';
  });

  updateDots();
}

/*
==================================================
4. NEXT SLIDE
==================================================
*/
function nextSlide() {
  showSlide(currentIndex + 1);
}

/*
==================================================
5. PREVIOUS SLIDE
==================================================
*/
function previousSlide() {
  showSlide(currentIndex - 1);
}

/*
==================================================
6. INFINITE LOOP

When the slider reaches the last image, it wraps back to the first.
When it goes backward from the first image, it wraps to the last.
This creates a seamless endless carousel without blank screens.
==================================================
*/

/*
==================================================
7. TOUCH SWIPE

Touch events detect the direction of the swipe.
A minimum swipe distance prevents accidental changes.
==================================================
*/
slider.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchCurrentX = touch.clientX;
  isDragging = true;
  slider.classList.add('is-dragging');
}, { passive: true });

slider.addEventListener('touchmove', (event) => {
  if (!isDragging) return;

  const touch = event.changedTouches[0];
  touchCurrentX = touch.clientX;
}, { passive: true });

slider.addEventListener('touchend', () => {
  if (!isDragging) return;

  const delta = touchCurrentX - touchStartX;

  if (Math.abs(delta) > swipeThreshold) {
    if (delta < 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  }

  slider.classList.remove('is-dragging');
  isDragging = false;
}, { passive: true });

/*
==================================================
8. MOUSE DRAG

Desktop users can drag horizontally to move to the next or previous photo.
The drag distance works the same way as the touch swipe.
==================================================
*/
slider.addEventListener('mousedown', (event) => {
  if (event.button !== 0) return;

  touchStartX = event.clientX;
  touchCurrentX = event.clientX;
  isDragging = true;
  slider.classList.add('is-dragging');
});

slider.addEventListener('mousemove', (event) => {
  if (!isDragging) return;

  touchCurrentX = event.clientX;
});

window.addEventListener('mouseup', () => {
  if (!isDragging) return;

  const delta = touchCurrentX - touchStartX;

  if (Math.abs(delta) > swipeThreshold) {
    if (delta < 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  }

  slider.classList.remove('is-dragging');
  isDragging = false;
});

/*
==================================================
9. KEYBOARD NAVIGATION

ArrowRight moves to the next photo.
ArrowLeft moves to the previous photo.
==================================================
*/
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextSlide();
  }

  if (event.key === 'ArrowLeft') {
    previousSlide();
  }
});

/*
==================================================
10. TRANSITION HANDLING

Initialize the slider on page load.
==================================================
*/
renderSlides();
showSlide(0);
