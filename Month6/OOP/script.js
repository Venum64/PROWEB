class Human {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.job = obj.job;
    this.birthDay = obj.birthDay;
    this.gendor = obj.gendor;
  }
}

class Man extends Human {
  constructor(obj) {
    super(obj);
    this.gendor = "M";
  }
  agePlus(){
    return this.age++;
  }
}

const human = new Man({
  name: "Umarxon",
  age: 14,
  job: "Student",
  birthDay: "01.10.2011",
});
console.log(human.age);

