// let cars = ["BMW", "MERCEDES", "CHEVOLETTE"];

// cars.forEach((car, i, arr) => {
//   console.log(car);
//   console.log(i);
//   console.log(arr);
// });

// cars.forEach((car, i) => console.log(`${car} находится в ячейке ${i}`));

// let nums = [5, 10, 15, 20, 25];

// const double = nums.map((num) => num * 2);

// console.log(double);

let heroes = [
  {
    id: 1,
    name: "Tony",
    lastName: "Stark",
    age: 50,
    isAlive: false,
  },
  {
    id: 2,
    name: "Peter",
    lastName: "Parker",
    age: 21,
    isAlive: true,
  },
  {
    id: 3,
    name: "Thor",
    lastName: "Odinson",
    age: 1500,
    isAlive: true,
  },
  {
    id: 4,
    name: "Steve",
    lastName: "Rogers",
    age: 100,
    isAlive: false,
  },
];

console.log(heroes);

// let newHeroesList = heroes.map((hero) => {
//   return {
//     fullName: `${hero.name} ${hero.lastName}`,
//     id: `Ваш id: ${hero.id}`,
//     isAlive: hero.isAlive ? "Он жив" : "Он мертв",
//   };
// });

// console.log(newHeroesList);

// // filter - фильтрация массива

// let aliveHeroes = newHeroesList.filter((el) => el.isAlive == "Он жив");

// let deadHeroes = newHeroesList.filter((el) => el.isAlive == "Он мертв");

// console.log(aliveHeroes);
// console.log(deadHeroes);

// let res = nums.reduce((acc, item) => acc + item);
// console.log(res);

// let generes = [
//   {
//     genere: "comedy",
//   },
//   {
//     genere: "drama",
//   },
//   {
//     genere: "horror",
//   },
//   {
//     genere: "action",
//   },
// ];

// let strGeneres = generes.reduce((acc, item) => acc + `${item.genere} `, "");

// console.log(strGeneres);

let nums = [123456, 6554321, 997654, 2234345, 7896543];
nums.sort((prev, next) => prev - next);
console.log(nums);

nums.sort((prev, next) => prev - next);
console.log(nums);

heroes.sort((prev, next) => prev.age - next.age);
console.log(heroes);

heroes.sort((prev, next) => prev.name < next.name ?  -1 : 1 )
console.log(heroes);


