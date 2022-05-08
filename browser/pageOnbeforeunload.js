/**
 * 在浏览器关闭之前做一些事情
 */
window.onbeforeunload = function (e) {
  // while (true) {
  //   console.log('关注Jone，携手学习Python从入门到入狱');
  // }

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      console.log('这些是都会执行到的吗');
    }
  }

  console.log('这些执行了吗');
};

// 当前在页面中显示的元素
// 浏览器tab页面关闭的时候，把正在显示的再累加一下，然后发送到服务器
// [ dom1, dom2, dom3, dom4 ];
// {
//   dom: {
//     startTimeStamp: Date.now(),
//     totalTime: 0,
//   },
// }
