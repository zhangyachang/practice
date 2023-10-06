function myInstanceof(source, target) {
  while (source) {
    if (source === target.prototype) {
      return true;
    }
    source = Object.getPrototypeOf(source);
    // source = source.__proto__;
  }

  return false;
}

const o = new Object();

console.log(myInstanceof(o, Object));

class Parent {}
class Child extends Parent {}
const child = new Child();
console.log(myInstanceof(child, Parent), myInstanceof(child, Child), myInstanceof(child, Array));
