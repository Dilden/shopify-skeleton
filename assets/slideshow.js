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
  touchstartX: 0,
  touchendX: 0,
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
    const next = document.querySelector("#slider_next");
    if (next) {
      next.addEventListener("click", () => this.next());
    }

    const prev = document.querySelector("#slider_prev");
    if (prev) {
      prev.addEventListener("click", () => this.prev());
    }

    const pause = document.querySelector("#slider_pause");
    if (pause) {
      pause.addEventListener("click", () => {
        if (!this.interval) {
          this.play();
        } else {
          this.pause();
        }
      });
    }

    if (this.dots) {
      this.dots.forEach((item, x) => {
        item.addEventListener("click", () => this.dotClick(x));
      });
    }

    this.slidesContainer.addEventListener("touchstart", (e) => {
      this.touchstartX = e.changedTouches[0].screenX;
    });

    this.slidesContainer.addEventListener("touchend", (e) => {
      this.touchendX = e.changedTouches[0].screenX;
      if (this.touchstartX > this.touchendX) {
        // swipe right
        this.next();
      }
      if (this.touchstartX < this.touchendX) {
        // swipe left
        this.prev();
      }
      this.touchstartX = this.touchendX = 0;
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
