function myNew(fn) {
  const foo = {};
  foo.__proto__ = fn.prototype;

  fn.apply(foo);
  return foo;
}

// 逻辑较为简单，重点在于理解上面的 “方法说明” 、 “划重点”、”示例代码“ 三部分内容，源码就是实现 “方法说明” 的一个过程，通过闭包 + Object.create() + Function.prototype.call来实现，具体的可参考代码中的详细注释

const myNew1 = function (constructor) {
  return function (...args) {
    // 完成1、2两步，创建一个链接到构造函数的原型对象的对象
    const obj = Object.create(constructor.prototype);
    // 将obj作为构造函数的this上下文
    constructor.call(obj, ...args);
    // 如果构造函数有返回值，则将返回值作为实例对象返回，否则返回obj作为实例对象
    // 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
    return constructor() || obj;
  };
};

function son() {
  this.a = 1;
  this.b = 2;
}

const a = myNew(son);

console.log(a);

// 示例 1，构造函数无返回值
function T1(arg1, arg2) {
  this.arg1 = arg1;
  this.arg2 = arg2;
}
const ins1 = myNew1(T1)(1, 2);
console.log(ins1); // {arg1: 1, arg2: 2}

function Person() {
  return null;
}

console.log(new Person());

// 创建了一个全新的对象。
// 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
// 生成的新对象会绑定到函数调用的this。
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

// 去除了注释
function newOperator(ctor) {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  newOperator.target = ctor;
  var newObj = Object.create(ctor.prototype);
  var argsArr = [].slice.call(arguments, 1);
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === 'function';
  if (isObject || isFunction) {
    return ctorReturnResult;
  }
  return newObj;
}
