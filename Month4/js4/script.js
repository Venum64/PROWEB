// function sum() {
//   let sum = 5 + 1;
//   return sum;
// }
// summ();
// console.log(sum());

// let a = summ();
// let b = 5;
// console.log(a + b);

// function param(num1 = 3, num2 = 2) {
//   let sum = num1 + num2;
//   return sum;
// }
// console.log(param());

// param(5, 3);
// let sum = param(5, 2);
// let ans = param(param(3, 5), sum);

// console.log(Math.pow(5, 3));

// 3 метода округления чисел
//Math.ceil() - округление в большую сторону
//Math.floor() - округление в меньшую сторону
//Math.round() - округление до ближайшего целого числа

// console.log(Math.ceil(3.7));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.4));

// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1
// console.log(Math.random()); // от 0 до 1

// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());
// console.log(randomaizer());

// function randomaizer(min = 1, max = 10) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));
// console.log(randomaizer(1, 100));

// let number = +prompt("Введите число");
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomaizer() {
//   for (let i = 0; i < 10; i++) {
//     let number1 = random(1, 100);
//     let number2 = random(1, 100);
//     let sum = number1 + number2;
//   }
// }
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let minInt = +prompt("Введите минимальное число");
let maxInt = +prompt("Введите максимальное число");

minInt = isNaN(minInt) || minInt == 0 ? 1 : minInt;
maxInt = isNaN(maxInt) || maxInt == 0 ? 10 : maxInt;
console.log(isNaN(minInt) ||);
console.log(maxInt);

console.log(minInt);
console.log(maxInt);

for (let i = 0; i < 3; i++) {
  let num1 = randomaizer(minInt, maxInt);
  let num2 = randomaizer(minInt, maxInt);
  let pr = +prompt(num1 + " + " + num2 + " = ?");
  let sum = num1 + num2 == pr ? "Молодец" : "Иди учись";
  alert(
    num1 + " + " + num2 + " = " + (num1 + num2) + " Молодец " + "Иди учись"
  );
}
