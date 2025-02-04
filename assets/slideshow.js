const slider = {
  slidesContainer: document.querySelector(".slide_container"),
  current: 1,
  count: document.querySelectorAll(".slide").length,
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
    console.log(this.current);
    if (this.current >= this.count) {
      this.slidesContainer.scrollLeft = 0;
      this.current = 1;
    } else {
      this.slidesContainer.scrollLeft += this.slidesContainer.clientWidth;
      this.current = this.current + 1;
    }
  },
  prev: function () {
    console.log(this.current);
    if (this.current <= 1) {
      this.slidesContainer.scrollLeft =
        this.slidesContainer.clientWidth * this.count;
      this.current = this.count;
    } else {
      this.slidesContainer.scrollLeft -= this.slidesContainer.clientWidth;
      this.current = this.current - 1;
    }
  },
  pause: function () {
    console.log("pause");
  },
};

slider.init();
