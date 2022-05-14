

// new Fn().log('hello world').sleep(1000).log(1111)
// hello
// 等待1秒
// 1111

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
