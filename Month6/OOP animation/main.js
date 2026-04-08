class Parallax {
  constructor(obj) {
    this.clouds = document.querySelectorAll(obj.clouds);
    this.boat = document.querySelector(obj.boat);
    this.background = document.querySelector(obj.background);
    window.addEventListener("scroll", () => this.moveElements());
  }
  moveElements() {
    this.clouds.forEach((cloud) => {
      let speed = cloud.getAttribute("data-speed");
      cloud.style.transform = `translateX(${window.scrollY * speed}px)`;
    });

    this.boat.style.transform = `translateX(${window.scrollY * 0.8}px)`;
    this.background.style.objectPosition = `0 ${window.scrollY / 10}%`;
  }
}

const parallax = new Parallax({
  clouds: ".header__cloud",
  boat: ".header__boat",
  background: ".header__fantasy",
});

class Typing {
  constructor(text) {
    this.text = document.querySelector(text);
    this.fullText = this.text.innerHTML;
    this.text.innerHTML = "";
    setTimeout(() => this.typeText(), 500);
  }
  typeText(x = 0) {
    this.text.innerHTML += this.fullText[x];
    x++;
    if (x <= this.fullText.length) {
      setTimeout(() => this.typeText(x), 300);
    } else {
      x = 0;
      (this.text.innerHTML = ""), setTimeout(() => this.typeText(x), 300);
    }
  }
}

const TypeingElement = new Typing(".header__title");

// Ball Move

class ParalaxMove {
  constructor(option) {
    this.ballons = document.querySelectorAll(option);
    window.addEventListener("mousemove", (event) => {
      this.moveElements(event);
    });
  }
  moveElements(event) {
    this.ballons.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      const x = (innerWidth - event.x * speed) / 50;
      const y = (innerHeight - event.y * speed) / 50;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

const parallaxMove = new ParalaxMove(".parallax__ball");

class Counter {
  constructor(obj) {
    this.numsEl = document.querySelectorAll(obj.numsEl);
    this.section = document.querySelector(obj.section);
    this.state = true;
    window.addEventListener("scroll", () => {
      this.scrollCounter();
    });
  }
  scrollCounter() {
    if (this.state) {
      if (scrollY >= this.section.offsetTop - this.section.offsetHeight * 2) {
        this.counterStart();
        this.state = false;
      }
    }
  }
  counterStart() {
    this.numsEl.forEach((item) => {
      const count = +item.getAttribute("data-num");
      item.innerHTML = 0;
      let speed = 10;
      function counterNums(k = 0) {
        item.innerHTML = k;
        k++;
        if (k < 100) {
          speed = 5;
        } else if (k < 150) {
          speed = 3;
        } else if (k < 200) {
          speed = 1;
        } else speed = 0;
        if (k <= count) {
          setTimeout(() => counterNums(k), speed);
        }
      }
      counterNums();
    });
  }
}

const counterEl = new Counter({
  numsEl: ".timer__num",
  section: ".timer",
});

class Bubble {
  constructor(obj) {
    this.bubbles = document.querySelectorAll(obj.bubbles);
    this.bubbles.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        this.bubbleShow(e, item);
      });
    });
  }
  bubbleShow(e, item) {
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;
    let span = item.querySelector("span");
    span.style.left = x + "px";
    span.style.top = y + "px";
  }
}

const bubbleBtn = new Bubble({
  bubbles: ".timer__btn",
});

class Rotate3D {
  constructor(card) {
    this.card = document.querySelectorAll(card);
    this.card.forEach((item) => {
      item.addEventListener("mousemove", (e) => this.rotate(e, item));
      item.addEventListener("mouseout", () => this.noneRotate(item));
    });
  }
  rotate(e, item) {
    let cardItem = item.querySelector(".card__item");
    let halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform = `rotateX(${
      (halfHeight - e.offsetY) / 5
    }deg) rotateY(${(halfHeight - e.offsetX) / 5}deg)`;
  }
  noneRotate(item) {
    let cardItem = item.querySelector(".card__item");
    cardItem.style = "";
  }
}

let rotate = new Rotate3D(".card");

class FadeRight {
  constructor(section) {
    this.section = document.querySelector(section);
    window.addEventListener("scroll", () => this.fade(this.section, 2));
  }
  fade(section, coord) {
    let fadeCard = section.querySelectorAll(".fade-right");
    fadeCard.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      item.style.transition = speed + "ms";
      if (scrollY >= this.section.offsetTop - this.section.offsetHeight * 2) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

const fadeRight = new FadeRight(".about");
const fadeRight2 = new FadeRight(".scroll");