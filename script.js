document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other FAQ items

      faqItems.forEach((el) => {
        if (el !== item) {
          el.classList.remove("active");

          el.querySelector(".faq-answer").style.display = "none";

          el.querySelector(".arrow").textContent = "+";
        }
      });

      // Toggle current item

      const answer = item.querySelector(".faq-answer");

      const arrow = item.querySelector(".arrow");

      if (item.classList.contains("active")) {
        item.classList.remove("active");

        answer.style.display = "none";

        arrow.textContent = "+";
      } else {
        item.classList.add("active");

        answer.style.display = "block";

        arrow.textContent = "−";
      }
    });
  });
});
// scroll down animations

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "h1, h2, h3, p, img, .button, .btn, .contact-btn, .image-container, .text-container, .hero-section, .brand-section, .featured-collection, .faq-section, .contact-section"
  ); // Select all key elements

  function revealElements() {
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Trigger animation on page load if elements are already in view
});
// animatin trigger process
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-animate]"); // Select elements with custom attribute

  function revealElements() {
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        const animation = el.dataset.animate; // Get animation name
        el.classList.add("animate__animated", animation, "animate__slow"); // Add animation
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Trigger on load if elements are already visible
});

// swiperJS code

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000, // Slides will change every 3 seconds
    disableOnInteraction: false, // Keeps autoplay running even after user interaction
  },
  speed: 1000, // Smooth transition speed (1 second)
  // loop: true, // Enables infinite scrolling
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allows pagination dots to be clickable
  },
});
