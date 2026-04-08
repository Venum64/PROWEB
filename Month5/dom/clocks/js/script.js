const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hoursNumber = document.querySelector(".houre"),
  minutesNumber = document.querySelector(".minutes");

function clocks() {
  let time = new Date(),
    second = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  hour.style = `transform: rotate(${hours}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  sec.style = `transform: rotate(${second}deg)`;

  console.log(time.getHours);
  console.log(time.getMinutes);
  //   hoursNumber.innerHTML = time.getHours() < 10 ? "0" +  time.getHours() : time.getHours();
  //   minutesNumber.innerHTML = time.getMinutes() < 10 ?  "0" + time.getMinutes() : time.getMinutes();
  setTimeout(() => clocks(), 1000);
}

clocks();

const links = document.querySelectorAll(".tabItem");
const tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    event.preventDefault();
    for (let ix = 0; i < links.length; i++) {
      links[i].classList.remove("active");
      tabs[i].classList.remove("active");
    }
    links[i].classList.add("active");
    tabs[i].classList.add("active");
  });
}

//
//
//

const secondsWatch = document.querySelector(".stopwatch__seconds"),
  minutesWatch = document.querySelector(".stopwatch__minutes"),
  hoursWatch = document.querySelector(".stopwatch__hours"),
  watchBtn = document.querySelector(".stopwatch__btn"),
  watchInfo = document.querySelector(".tabsLink__span");

watchBtn.addEventListener("click", () => {
  if (watchBtn.innerHTML == "start") {
    watchBtn.innerHTML = "stop";
    watchInfo.classList.add("active");
    let i = 0;
    setTimeout(() => stopWatch(watchBtn, i), 1000);
  } else if (watchBtn.innerHTML == "stop") {
    watchBtn.innerHTML = "clear";
    watchInfo.classList.add("active_clear");
    watchInfo.classList.remove("active");
  } else if (watchBtn.innerHTML == "clear") {
    watchBtn.innerHTML = "start";
    watchInfo.classList.remove("active_clear");
    secondsWatch.innerHTML = 0;
    minutesWatch.innerHTML = 0;
    hoursWatch.innerHTML = 0;
  }
});

function stopWatch(btn, i) {
  if (btn.innerHTML == "stop") {
    if (i == 60) {
      i = 0;
      if (minutesWatch.innerHTML == 59) {
        minutesWatch = 0;
        hoursWatch.innerHTML++;
      } else {
        minutesWatch.innerHTML++;
      }
    } else {
      i++;
      secondsWatch.innerHTML = i;
    }
    setTimeout(() => stopWatch(btn, i), 1000);
  }
}
