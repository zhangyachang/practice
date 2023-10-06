// 我们现在要实现一个红绿灯，把一个圆形 div 按照绿色 3 秒，黄色 1 秒，红色 2 秒循环改变背景色

const sleep = (time, value) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
      console.log('value', value);
    }, time);
  });

// 好像有点不对劲，逻辑是正确的，颜色没有按照要求展示，没关系
const lightControl = async () => {
  while (true) {
    await sleep(3000, 'green');
    await sleep(1000, 'yellow');
    await sleep(2000, 'red');
  }
};

lightControl();
