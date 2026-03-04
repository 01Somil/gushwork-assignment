// Sticky Header Scroll Detection
const header = document.querySelector(".header");
const homeSection = document.querySelector(".home-section");
let scrollThreshold = homeSection.offsetHeight + header.offsetHeight;
let isSticky = false;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > scrollThreshold && !isSticky) {
    isSticky = true;
    header.classList.add("sticky");
  } else if (currentScrollPosition <= scrollThreshold && isSticky) {
    isSticky = false;
    header.classList.remove("sticky");
    header.classList.remove("animate-out");
  }
});

window.addEventListener("resize", () => {
  scrollThreshold = window.innerHeight;
});

// Carousel Functionality
const carouselImages = [
  "./assets/mainImage.jpg",
  "./assets/thumb1.jpg",
  "./assets/thumb2.jpg",
  "./assets/thumb1.jpg",
  "./assets/thumb2.jpg",
];

let currentImageIndex = 0;
const mainImage = document.querySelector(".main-image");
const leftArrowBtn = document.querySelector(".arrow-btn:has(.left-arrow)");
const rightArrowBtn = document.querySelector(".arrow-btn:has(.right-arrow)");

function updateMainImage() {
  mainImage.src = carouselImages[currentImageIndex];
}

if (leftArrowBtn) {
  leftArrowBtn.addEventListener("click", () => {
    currentImageIndex =
      (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    updateMainImage();
  });
}

if (rightArrowBtn) {
  rightArrowBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    updateMainImage();
  });
}

// Thumbnail Click Functionality
const thumbnails = document.querySelectorAll(".thumb");
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("mouseenter", () => {
    currentImageIndex = index;
    updateMainImage();
  });
});

updateMainImage();
