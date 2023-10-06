const throttle = (fn, time) => {
  // let timer;
  let isFirst = true;

  return function (...args) {
    if (!isFirst) return;

    isFirst = false;
    let res = fn.call(this, ...args);
    setTimeout(() => {
      isFirst = true;
    }, time);
    return res;
  };
};

const callback = () => {
  console.log('打印内容');
};
const throttleCallback = throttle(callback, 1000);
document.onclick = throttleCallback;
