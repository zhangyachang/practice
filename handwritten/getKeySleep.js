

// new Fn().log('hello world').sleep(1000).log(1111)
// hello
// 等待1秒
// 1111

/**
 * 方法一
 * 使用Proxy代理劫持它的一些属性，缓存它的操作，后续再来执行
 */
let fn = (function () {
  // 使用队列辅助存储一下 . 属性的顺序
  let queue = [];
  let isStart = false;

  async function startQueueTask() {
    if (isStart) return;
    isStart = true;
    while (queue.length) {
      const [taskName, rest] = queue.shift();
      await sourceObj[taskName](...rest);
    }
    isStart = false;
  }

  const sourceObj = {
    log(str) {
      console.log(str);
    },
    async sleep(time) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
      })
    }
  };

  let proxyObj = new Proxy(sourceObj, {
    get(target, propKey, receiver) {
      return function (...rest) {
        queue.push([propKey, rest]);
        startQueueTask();
        return receiver;
      };
    },
    // set(target, propKey, value, receiver) {
    // }
  });

  return proxyObj;
})();


fn.log('你好呀').sleep(1000).log('好的').sleep(3000).log('你好').sleep(1000).log('最终结果');

// .sleep(1000).log('你好').sleep(1000).log('好的呀');

// fn.log('hello world').sleep(1000).log('')



/**
 * 方法二
 */
{
  function Fn(name) {
    this.name = name;
    this.taskQueue = [];
    let _this = this;
    setTimeout(() => {
      _this.next();
    }, 0);
  }

  Fn.prototype.log = function () {
    let _this = this;
    function handler() {
      console.log(`log method: ${_this.name}`);
      _this.next();
    }

    this.taskQueue.push(handler);
    return this;
  }

  Fn.prototype.sleep = function (time) {
    let _this = this;
    function handler() {
      setTimeout(() => {
        _this.next();
      }, time);
    }

    this.taskQueue.push(handler);
    return this;
  }

  Fn.prototype.next = function () {
    if (this.taskQueue.length <= 0) return;
    let curTask = this.taskQueue.shift();
    curTask();
  }
}
