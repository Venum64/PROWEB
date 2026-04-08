// console.log(document);

// const item = document.querySelector(".item");

// console.dir(item);

// item.addEventListener("click", function () {
//   console.log("клик сработал");
//   if (item.style.background == "red") {
//     item.style.background = "blue";
//   } else {
//     item.style.background = "red";
//   }
// });
// console.log(document);

// let img = document.querySelector(".img");

// console.log(img.getAttribute("atr"));

// img.setAttribute(
//   "src",
//   "https://img3.akspic.ru/previews/1/8/7/5/7/175781/175781-andzhunabity-andzhunadip-soundcloud-oblako-rastenie-500x.jpg"
// );
// console.log(img.hasAttribute("data-bg"));

// img.setAttribute("data-bg", "red");

// console.log(img.hasAttribute("data-bg"));

// img.removeAttribute("src");
let items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
  let element = items[i];
  element.style.background = element.getAttribute("data-bg");

  element.addEventListener("click", () => {
    body.style.background = element.style.background;
  });
}

let randomBox = document.querySelector(".random");
function randomNums(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  let r = randomNums(0, 255);
  let g = randomNums(0, 255);
  let b = randomNums(0, 255);

  return rgb(`${r}, ${g}, ${b}`);
}

function randDeg() {
  return randomNums + "deg";
}

randomBox.addEventListener("click", () => { 
  let grad = `linear-gradient(${randDeg()}, ${randomColor()}, ${randomColor()} , ${randomColor()}`;
  randomBox.style.background = grad;
  body.style.background = grad;
});