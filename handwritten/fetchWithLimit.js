const fetchWithLimit = (limit, promises) =>
  new Promise((resolve) => {
    // 当前开始执行任务的索引； finished 已完成的index; curCount 当前处理的任务数量
    let curIndex = 0;
    let finishIndex = 0;
    let curCount = 0;

    function run() {
      if (finishIndex >= promises.length) {
        resolve('finished');
        return;
      }

      while (curCount < limit && curIndex < promises.length) {
        // 执行下一个任务
        promises[curIndex]().finally(() => {
          finishIndex += 1;
          curCount -= 1;
          run();
        });
        curCount += 1;
        curIndex += 1;
      }
    }

    run();
  });

class PromiseQueue {
  constructor(limit) {
    this.queue = [];
    this.limit = limit;
    this.count = 0;
  }
  add(promiseFn) {
    this.queue.push(promiseFn);
    this.loadNext();
  }

  loadNext() {
    if (this.queue.length > 0 && this.count < this.limit) {
      this.count++;
      const fn = this.queue.shift();
      const promiseFn = fn();
      promiseFn.then(this.handleFinally.bind(this)).catch(this.handleFinally);
    }
  }

  handleFinally() {
    this.count--;
    this.loadNext();
  }
}

const startTime = new Date().getTime();

const sleep = (time, value) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('sleep res', value, new Date().getTime() - startTime);
      resolve();
    }, time);
  });

fetchWithLimit(3, [sleep(3000, 1), sleep(1000, 2), sleep(4000, 3), sleep(5000, 4), sleep(6000, 5)]).then((data) => {
  console.log('then data', data);
});

const promiseQueue = new PromiseQueue(3);
promiseQueue.add(sleep(3000, 1));
promiseQueue.add(sleep(1000, 2));
promiseQueue.add(sleep(4000, 3));
promiseQueue.add(sleep(5000, 4));
promiseQueue.add(sleep(6000, 5));

// promiseQueue().then((res) => {
//   console.log('完成了');
// });
