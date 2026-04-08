// // var i = 2
// // console.log(++i);
// // console.log(i++);
// // console.log(i++);
// // console.log(i++);
// // console.log(i++);

// // var i = 0;
// // // while (condition)
// // while (i < 10) {
// //   console.log('hi');
// //   i++;
// // }
// // var myNumber = 64
// do {
//     var x = +prompt('введите загаданное число');
//     if (x > myNumber) {
//         console.log("мое число меньше");
//     }
//     else if(x > myNumber) {
//         console.log("мое число больше");
//     }
//     else if(x == myNumber) {
//         alert('ты выйграл')
//     }
//     else (
//         alert('ты совершил ошибку попробуй снова')
//     )
// } while (isNaN(x) || x != myNumber);

// for (var i = 0; i < 10; i+1) {
//   console.log(i);
// }

// let a = +prompt("введите число");

// a = 5 == 5 ? a : a == 10 ? a : 15;
// console.log(a);

// for (let i = 0; i < a; i++){
//     console.log('цикл повторился' + a);
// }

do {
  var number = +prompt("Введите число от 1 до 10");
  if (number < 0 || number > 10) {
    alert("Введите число заново");
  }
} while (isNaN(number) || number < 0 || number > 10);

let a;
for (let i = 1; i <= num; i++) {
  a = a * i;
  console.log(a);
}
