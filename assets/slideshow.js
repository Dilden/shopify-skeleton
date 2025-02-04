const slider = {
  slidesContainer: document.querySelector(".slide_container"),
  current: 1,
  count: document.querySelectorAll(".slide").length,
  autoplay: true,
  timer: 3000,
  interval: null,
  init: function (options) {
    this.slidesContainer =
      options.container ?? document.querySelector(".slide_container");
    this.current = options.current ?? 1;
    this.count = options.count ?? document.querySelectorAll(".slide").length;
    this.autoplay = options.autoplay ?? true;
    this.timer = options.timer ?? 3000;

    this.addEvents();

    if (this.autoplay) {
      this.play();
    }
  },
  addEvents: function () {
    document
      .querySelector("#slider_next")
      .addEventListener("click", () => this.next());
    document
      .querySelector("#slider_prev")
      .addEventListener("click", () => this.prev());
    document.querySelector("#slider_pause").addEventListener("click", () => {
      if (!this.interval) {
        this.play();
      } else {
        this.pause();
      }
    });
  },
  next: function () {
    if (this.current >= this.count) {
      this.slidesContainer.scrollLeft = 0;
      this.current = 1;
    } else {
      this.slidesContainer.scrollLeft += this.slidesContainer.clientWidth;
      this.current = this.current + 1;
    }
  },
  prev: function () {
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
    clearInterval(this.interval);
    this.interval = null;
  },
  play: function () {
    console.log("play");
    this.interval = setInterval(() => this.next(), this.timer);
  },
};

slider.init({ slidesContainer: document.querySelector(".slide_container") });
