import slider from "./slider";
const modal = (
  popupClass,
  buttonClass,
  {
    isCarousel = "",
    isInitActiveSlide = "",
    classSlides = "",
    classSlider = "",
    classActiveSlides = "",
    portfolioBtn = "",
    classControlLeft = "",
    classControlRight = "",
    classCounter = "",
    classCounterTotal = "",
  }
) => {
  const popupContent = document.querySelector(`.${popupClass}`);
  const buttons = document.querySelectorAll(`.${buttonClass}`);
  const closeBtn = popupContent.querySelector(".close ");
  let idInterval;

  const getIndexActiveSlide = (event) => {
    const image = event.target.querySelector("img");
    const index = parseInt(image.alt[image.alt.search(/[0-9]/)]);
    return index - 1;
  };

  if (buttonClass) {
    buttons.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (isCarousel) {
          popupContent.style.visibility = "visible";
          idInterval = slider(
            classSlider,
            classSlides,
            classActiveSlides,
            portfolioBtn,
            classControlLeft,
            classControlRight,
            isInitActiveSlide && getIndexActiveSlide(event),
            classCounter,
            classCounterTotal,
            false
          );
        } else {
          popupContent.style.visibility = "visible";
        }
      });
    });
  } else {
    popupContent.style.visibility = "visible";
  }

  closeBtn.addEventListener("click", () => {
    clearInterval(idInterval);
    popupContent.style.visibility = "hidden";
  });
};

export default modal;
