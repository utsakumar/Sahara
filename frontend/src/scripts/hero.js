(() => {
  const slides = [
    {
      offer: "Limited Time Offer 30% off",
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      image: "hero-image.jpg",
      button: "Buy now",
    },
    {
      offer: "Exclusive Deal - 20% off",
      title: "Upgrade Your Listening Experience!",
      image: "hero-image2.jpg",
      button: "Shop now",
    },
    {
      offer: "Special Discount - 15% off",
      title: "Enhance Your Audio Experience!",
      image: "hero-image3.jpg",
      button: "Explore now",
    },
  ];

  const hero = document.querySelector(".hero");
  const offerElement = document.getElementById("hero-offer");
  const titleElement = document.getElementById("hero-title");
  const buyButton = document.querySelector(".buy-btn");
  const dots = Array.from(document.querySelectorAll(".dots .dot"));

  if (
    !hero ||
    !offerElement ||
    !titleElement ||
    !buyButton ||
    dots.length === 0
  )
    return;

  let current = 0;

  const setSlider = (index) => {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];

    offerElement.textContent = slide.offer;
    titleElement.textContent = slide.title;
    buyButton.textContent = slide.button;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => setSlider(i));
  });

  setSlider(current);
})();
