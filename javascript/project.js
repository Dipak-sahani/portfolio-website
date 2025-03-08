document.querySelectorAll(".slider-container").forEach((sliderContainer, sliderIndex) => {
    let index = 0;
    const slides = sliderContainer.querySelectorAll(".slide");
    const slider = sliderContainer.querySelector(".slider");
    const prevButton = sliderContainer.querySelector(".prev");
    const nextButton = sliderContainer.querySelector(".next");
    const dotsContainer = sliderContainer.querySelector(".dots-container");

    // Create Dots
    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-index", i);
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(n) {
        if (n >= slides.length) index = 0;
        else if (n < 0) index = slides.length - 1;
        else index = n;

        slider.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function nextSlide() { showSlide(index + 1); }
    function prevSlide() { showSlide(index - 1); }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            showSlide(parseInt(dot.getAttribute("data-index")));
        });
    });

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    function autoSlide() {
        nextSlide();
        setTimeout(autoSlide, 3000);
    }

    setTimeout(autoSlide, 3000);
    showSlide(index);
});
