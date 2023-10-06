/**
 * 改变this指向
 * 调用目标函数
 * 第二个及以后均为目标函数参数
 */
Function.prototype.myCall = function (thisObj, ...restArgs) {
  // thisObj.__call__ = this; // 这里的this就是foo函数本身

  // 上面一行代码的优化写法，防止在原函数上打印的this多一个__call__属性
  Object.defineProperty(thisObj, '__call__', {
    enumerable: false,
    value: this,
  });

  let ret = thisObj.__call__(...restArgs);
  delete thisObj.__call__; // 最后删除掉

  return ret;
};

const foo = function (a, b) {
  console.log('this', this, a, b);
  return 123;
};

// let obj = foo.myCall({ name: 'zyc' }, 'param1', 'param2');
// console.log('obj: ', obj);

Function.prototype.myBind = function (thisObj, ...restArgs) {
  let fn = this;

  return function (...args) {
    Object.defineProperty(thisObj, '__bind__', {
      enumerable: false,
      value: fn,
    });

    let ret = thisObj.__bind__(...restArgs, ...args);
    delete thisObj.__bind__;
    return ret;
  };
};

let obj = foo.myBind({ name: 'zyc' }, 'param1', 'param2');
// console.log('obj: ', obj);
// console.log(obj());
