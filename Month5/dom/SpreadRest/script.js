// const regularCars = ["vw", "skoda", "jiguli"];
// const electricCars = ["tesla", "bmw", "audi"];

// let cars = regularCars.concat(electricCars);
// console.log(cars);

// // let cars2 = [];

// // cars2.concat(regular);
// // cars2.push('chevrolet')

// // let reg2 = [...regularCars];
// // reg2[1] = "matiz";

// // console.log(reg2);
// // console.log(regularCars);

// // let cars3 = [...regularCars, "chevrolet", ...electricCars];

// // // let carsNew = cars3;

// // // carsNew[0] = 'lada';
// // // console.log(cars3);
// // // console.log(carsNew);

// // const cars4 = [...cars3]
// // console.log(cars4);

// let items = document.querySelectorAll(".item");
// console.log(items);
// const items2 = [...items];
// console.log(items2);

// items2.push(512);
// console.log(items2);

// function convert(rate, sum1, sum2, sum3) {
//   rate / sum1;
//   rate / sum2;
//   rate / sum3;
//   return;
// }

// function convert2(rate, ...rest) {
//     console.log(rate, rest);
//     return rest.map((sum) => sum / rate);
// }

// convert2(12160, 1216000 , 1216000 * 2, 1216000 * 0.5);

// console.log(convert2);

//деструктизация - пщзволяет получить значения и присвоить их переменным из массивов и объектов

const auto = {
    name: 'nissan',
    year: 2025, 
    color: 'red',
};
const auto2 = {
    name: 'tesla',
    year: 2024, 
    color: 'black',
    size:{
        width:185,
        height: 75,
    },
}

const {name, year, color} = auto;

console.log(name, year, color); 
const {name: name2, year: year2, color: color2} = auto2;
console.log(name2, year2, color2);
let {width, height} = auto2.size;
console.log(width, height);