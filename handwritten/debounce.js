function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    let self = this;
    timer = setTimeout(() => {
      fn.call(self, ...args);
      timer = null;
    }, delay);
  };
}
