const slider = {
  // slide_count: document.querySelectorAll(".liquid__slide").length,
  // current: 1,
  slide: document.querySelector(".slider"),
  slidesContainer: document.querySelector(".slide_container"),
  init: function () {
    // document.querySelectorAll(".liquid__slide").forEach(function (el, i) {
    //   el.style.order = i + 1;
    // });

    this.addEvents();
  },
  addEvents: function () {
    document
      .querySelector("#slider_next")
      .addEventListener("click", () => this.next());
    document
      .querySelector("#slider_prev")
      .addEventListener("click", () => this.prev());
    // document
    //   .querySelector("#liquid__slider__pause")
    //   .addEventListener("click", () => this.pause());

    // document
    //   .querySelector(".liquid__slider__container")
    //   .addEventListener("transitioned", () => {
    //     this.changeOrder();
    //   });
  },
  // changeOrder: function () {
  //   if (this.current == this.slide_count) {
  //     this.current = 1;
  //   } else {
  //     this.current++;
  //   }

  //   let order = 1;

  //   for (let i = 1; i < this.current; i++) {
  //     document.querySelector(
  //       ".liquid__slide[data-position=" + i + "]",
  //     ).style.order = order;
  //   }

  //   document.querySelector(".liquid__slider__container").style.transform =
  //     "translateX(0)";
  // },
  next: function () {
    console.log("next");
    this.slidesContainer.scrollLeft += this.slide.clientWidth;
    // document.querySelector(".slide_container").style.transform =
    //   "translateX(-100%)";
  },
  prev: function () {
    console.log("prev");
    this.slidesContainer.scrollLeft -= this.slide.clientWidth;
    // document.querySelector(".slide_container").style.transform =
    //   "translateX(0%)";
  },
  pause: function () {
    console.log("pause");
    // document.querySelector("#liquid__slider__container").style.transform =
    // "translateX(100%)";
  },
};

slider.init();
