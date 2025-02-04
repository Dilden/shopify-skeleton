const slider = {
  slidesContainer: document.querySelector(".slide_container"),
  current: 1,
  count: document.querySelectorAll(".slide").length,
  autoplay: true,
  timer: 3000,
  interval: null,
  playBtn: document.getElementById("slider_pause"),
  dotsContainer: document.querySelectorAll(".dots"),
  dots: document.querySelectorAll(".dots > button"),
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
    console.log(this.dots);
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

    this.dots.forEach((item, x) => {
      item.addEventListener("click", () => this.dotClick(x));
    });
  },
  dotClick: function (index) {
    if (!this.dots.item(index).classList.contains("bg-blue-200")) {
      this.dots.forEach((item) => {
        item.classList.remove("bg-blue-200");
      });
      this.dots.item(index).classList.add("bg-blue-200");
      let i = index + 1;

      if (i > this.current) {
        this.slidesContainer.scrollLeft +=
          this.slidesContainer.clientWidth * (i - this.current);
      }
      if (i < this.current) {
        this.slidesContainer.scrollLeft -=
          this.slidesContainer.clientWidth * (this.current - i);
      }
      this.current = i;
    }
  },
  next: function () {
    if (this.current >= this.count) {
      this.dotClick(0);
    } else {
      this.dotClick(this.current);
    }
  },
  prev: function () {
    if (this.current <= 1) {
      this.dotClick(this.count - 1);
    } else {
      this.dotClick(this.current - 2);
    }
  },
  pause: function () {
    clearInterval(this.interval);
    this.interval = null;
    this.playBtn.classList.add("play");
    this.playBtn.classList.remove("pause");
  },
  play: function () {
    this.interval = setInterval(() => this.next(), this.timer);
    this.playBtn.classList.add("pause");
    this.playBtn.classList.remove("play");
  },
};

slider.init({});
