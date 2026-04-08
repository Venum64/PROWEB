export let value: number = 43243423432443;

let value2: string | number = 897658;

let tuple: [string, number, boolean] = ["ddsdas", 11223132, false];

type Text = string | string[];

let word: Text = [""];

type Num = number | number[];

let arr: Num = [1332];

type User = {
  id: number;
  name: string;
  age: number;
  city: string;
  working?: boolean;
};

type Pro = {
  skills: string[];
};

type Admin = User & Pro;

let user: Admin = {
  id: 1,
  name: "umar",
  age: 15,
  city: "tas",
  working: true,
  skills: ["html", "css", "sass", "react", "js"],
};

interface Product {
  id: Num;
  title: string;
  desc: Text;
  price: string | number;
  info?: () => void;
}

interface Discount {
  discount: string | number;
}

interface Best extends Product, Discount {}

let best: Best = {
  id: 1,
  title: "Груша",
  desc: "Описание",
  price: 1000,
  info: () => best.title + best.desc,
};

function find<T>(value: T): T[] {
    return[value]
}
find<string>("typescript")
