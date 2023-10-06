/**
 * 深拷贝
 */

// 使用WeakMap是便于回收
function deepClone(obj, cacheCurr = new WeakMap()) {
  // 如果该对象已经创建好，则从缓存中获取直接返回
  if (cacheCurr.has(obj)) return cacheCurr.get(obj);
  // 通用的类型集合，方便后面统一处理:new obj.constructor(obj),所以该集合一定是要能够这样创建的才能放进来
  const types = ['RegExp', 'Date', 'Set', 'Map', 'WeakMap', 'WeakSet'];
  // 获取当前对象类型
  let objDataType = Object.prototype.toString.call(obj).slice(8, -1);
  // 对比当前类型是否在通用类型中，在则统一处理克隆。【较通用的处理方式】
  if (types.includes(objDataType)) return new obj.constructor(obj);
  // 创建克隆对象
  let cloneObj = objDataType === 'Array' ? [] : {};
  // 继承原型
  if (obj) Object.setPrototypeOf(cloneObj, Object.getPrototypeOf(obj));
  // 普通引用类型及非引用类型克隆，Reflect.ownKeys能够获取自身所有属性【非枚举也可】
  for (let key of Reflect.ownKeys(obj)) {
    let value = obj[key];
    let valueType = Object.prototype.toString.call(value).slice(8, -1);
    // 引用类型处理
    if (valueType === 'Object' || valueType === 'Array' || types.includes(valueType)) {
      // 记录已创建引用
      cacheCurr.set(obj, cloneObj);
      // 对引用类型进行递归进入当前级的下一级进行遍历
      cloneObj[key] = deepClone(value, cacheCurr);
    } else {
      // 非引用类型处理
      cloneObj[key] = value;
    }
  }
  return cloneObj;
}

function deepClone1(target, cache = new Map()) {
  if (cache.get(target)) return cache.get(target);

  if (!(target instanceof Object)) {
    return target;
  }

  let result;
  if (target instanceof Array) {
    result = [];
  } else if (target instanceof Function) {
    result = function (...args) {
      return target.call(this, ...args);
    };
  } else if (target instanceof RegExp) {
    result = new RegExp(target);
  } else if (target instanceof Date) {
    result = new Date(target);
  } else {
    result = {};
  }

  cache.set(target, result);
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      result[key] = deepClone1(target[key], cache);
    }
  }

  return result;
}

// let obj = {

//   // name: '张三',
// };
// obj.key = obj;

let obj = {
  newDate: new Date('2020-10-11 12:00:01'),
  null: null,
  string: 'string',
  num: 23,
  nan: NaN,
  func: function () {
    console.log('function');
  },
  arr: [1, 2, 3],
  reg: /ABC\-001/,
  regObj: new RegExp(/ABC/),
  object: {
    c: {
      a: 1,
    },
  },
};
obj.loop = obj; // 循环引用

console.log(obj);
let newObj = deepClone1(obj);
console.log('newObj: ', newObj);

// console.log(newObj.func === obj.func);

const name = '张三';
console.log(name === name);
