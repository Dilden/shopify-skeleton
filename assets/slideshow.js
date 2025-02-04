const slider = {
  slide: document.querySelector(".slider"),
  slidesContainer: document.querySelector(".slide_container"),
  init: function () {
    this.addEvents();
  },
  addEvents: function () {
    document
      .querySelector("#slider_next")
      .addEventListener("click", () => this.next());
    document
      .querySelector("#slider_prev")
      .addEventListener("click", () => this.prev());
  },
  next: function () {
    console.log("next");
    this.slidesContainer.scrollLeft += this.slide.clientWidth;
  },
  prev: function () {
    console.log("prev");
    this.slidesContainer.scrollLeft -= this.slide.clientWidth;
  },
  pause: function () {
    console.log("pause");
  },
};

slider.init();
