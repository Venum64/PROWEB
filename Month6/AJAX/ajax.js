// console.log(1);
// console.log(2);
// setTimeout(() => console.log(3), 0);
// console.log(3);
// console.log(4);

// api - application programming interface

// console.log("отправка запроса");
// setTimeout(() => {
//   console.log("данные готовятся к отправке");
//   const backendData = {
//     name: "GetResponse",
//     status: 200,
//     port: 5000,
//   };
//   setTimeout(() => {
//     backendData.statusOk = true
//     console.log('данные получены', backendData);
//   }, 4000);
// }, 2000);

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("данные готовятся к отправке");
//     const backendData = {
//       name: "GetResponse",
//       status: 200,
//       port: 5000,
//     };
//     resolve(backendData);
//   }, 2000);
// })
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       data.modified = true;
//       reject(data);
//     }).then((clientData) => {
//       console.log("данные не получены", clientData);
//     });
//   })
//   .catch((err) => {
//     console.error(err, "ошибка");
//   })
//   .finally(() => {});

// try {
//   console.log(someText);
// } catch (error) {
//   console.log(error);
// }
// console.log("привет мир");

// const url = `https://jsonplaceholder.typicode.com/albums/1/photos`;
// let box = document.querySelector(".grid");
// console.dir(box);

// // fetch(url)
// //   .then((response) => {
// //     if (response.ok) return response.json();
// //   })
// //   .then((data) => {
// //     data.forEach((element) => {
// //       let div = document.createElement("div");
// //       div.innerHTML = `
// //       <h3>${element.title}</h3>
// //       <p>${element.id}</p>
// //       <img src="${element.thumbnailUrl}" alt="">
// //       `;
// //       box.append(div)
// //     });
// //   }).catch((err)=>{

// //   });

// async function getPhotoes() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     data.forEach((element) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//             <h3>${element.title}</h3>
//             <p>${element.id}</p>
//             <img src="${element.thumbnailUrl}" alt="">
//             `;
//       box.append(div);
//     });
//   } catch (error) {}
// }
// getPhotoes();


const url = `https://jsonplaceholder.typicode.com/posts`;
let box = document.querySelector(".grid");
console.dir(box);

async function getText() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    data.forEach((element) => {
      let div = document.createElement("div");
      div.innerHTML = `
            <h3>${element.title}</h3>
            <p>${element.id}</p>
            <p>${element.body}</p>
            `;
      box.append(div);
    });
  } catch (error) {}
}
getText();