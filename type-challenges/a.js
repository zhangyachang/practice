class Animal {
  age = 100;

  static num = 1;

  constructor(name) {
    this.name = name;
  }

  get name() {
    return 'aaa';
  }


  set name(newVal) {
    console.log('newVal', newVal);
  }

  sayHello(){}

}


let animal = new Animal('张三');
console.log(animal);

animal.name = '1111';

console.log(animal.name);
console.log(animal);

console.dir(Animal)

