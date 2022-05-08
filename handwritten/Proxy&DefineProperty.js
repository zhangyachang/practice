/**
 * 请设计一个 obj.num 赋值只能赋值为数字，obj.num取值的时候取的是百分比。
 */
var obj = { num: 1 };

// 方法一
const proxyObj = new Proxy(obj, {

  get(target, key) {
    // 数字转百分数
    return target[key] * 100 + '%';
  },

  set(target, key, value) {
    if (typeof value !== 'number') {
      console.error(`${value} 不是一个数字，请设置数字`);
      return;
    }
    target[key] = value;
  }
});

console.log(proxyObj);
console.log(proxyObj.num);
proxyObj.num = '好的';
proxyObj.num = 123;
console.log(proxyObj.num);


// 方法二
var defineProperty = function (target, key) {
  let value = target[key];

  Object.defineProperty(obj, 'num', {
    get() {
      return value * 100 + '%';
    },
    set(newVal) {
      if (typeof newVal !== 'number') {
        console.error(`${newVal} 不是一个数字，请设置数字`);
        return;
      }

      value = newVal;
    }
  })
};

defineProperty(obj, 'num');
