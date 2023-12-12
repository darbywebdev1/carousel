const carousel = document.querySelector(".carousel");
const previousButton = carousel.querySelector(".previous-button");
const nextButton = carousel.querySelector(".next-button");
const contents = carousel.querySelector(".carousel__contents");

nextButton.addEventListener("click", (event) => {
  const currentSlide = contents.querySelector(".is-selected");
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    const destination = getComputedStyle(nextSlide).left;
    contents.style.left = "-" + destination;
    currentSlide.classList.remove("is-selected");
    nextSlide.classList.add("is-selected");

    if (!nextSlide.nextElementSibling) {
      nextButton.setAttribute("hidden", true);
    }
    previousButton.removeAttribute("hidden");
  }
});

previousButton.addEventListener("click", (event) => {
  const currentSlide = contents.querySelector(".is-selected");
  const previousSlide = currentSlide.previousElementSibling;

  if (previousSlide) {
    const destination = getComputedStyle(previousSlide).left;
    contents.style.left = "-" + destination;
    currentSlide.classList.remove("is-selected");
    previousSlide.classList.add("is-selected");

    if (!previousSlide.previousElementSibling) {
      previousButton.setAttribute("hidden", true);
    }
    nextButton.removeAttribute("hidden");
  }
});
