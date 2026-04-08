// let a = [];
// console.log(typeof a);
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(nums.length);
// console.log(nums[1]);

// let str = 'hello world';

// // console.log(str.length);
// // console.log(str[10]);

// for (let index = 0; index < randomnums.length; index++) {
//     console.log(randomnums[index]);
// }
// for (let index = 0; index < str.length; index++) {
//     console.log(str[index]);
// }

// let randomnums = [123, 45, 90, 77, 89, 19, 340];
// let ans = 0;
// for (let i = 0; i < randomnums.length; i++) {
//   ans += randomnums[i] % 2 === 0 ? 1 : 0;
// }

// let even = 0 // even - четный
// for (let i = 0; i < randomnums.length; i++) {
//   even += randomnums[i] % 2 === 0 ? randomnums[i] : 0;
// }

// console.log(even);

// let names = ["John", "Mike", "Ivan", "Petr", "Natalya"];

// for (const key in names) {
//   console.log(key);
//   console.log(names[key]);
//   names[key] == "Natalya" ? names.splice(key, 1) : "";
// }

// console.log(names);
// names.splice(4, 1, "Sveta", "Lena");

/* let names = ["John", "Mike", "Ivan", "Petr", "Natalya"];

names.push("Sveta");
console.log(names);
names.pop();
console.log(names); */

// pop - удаляет последний элемент массива
// push - добавляет элемент в конец массива
// shift - удаляет первый элемент массива
// unshift - добавляет элемент в начало массива

let users = [
  { name: "max", lastname: "smith", age: 25 },
  { name: "ivan", lastname: "ivanov", age: 30 },
  { name: "petr", lastname: "petrov", age: 35 },
];

users.forEach((key, index, arr) => {
  console.log(key);
  console.log(key.name);
  console.log(index);
  console.log(index.age);
  console.log(arr);
  console.log(arr.lastname);
});

// стрелочные функции
