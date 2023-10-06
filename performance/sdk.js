/**
 * 性能监控
 * 性能指标
 *  1. 白屏时间：白屏时间是指浏览器从响应用户输入网址地址，到浏览器开始渲染内容的时间。
 *  2. 首屏时间：首屏时间是指浏览器从响应用户输入网络地址，到首屏内容渲染完成的时间。 一般是首屏中的图片加载完毕的时候，我们认为是首屏结束的时间点。
 *  3. 完全加载时间：DOM Tree 构建完成后，开始加载网页资源，资源完全加载完成后，从加载开始到此为网页的完全加载时间。
 *  4. 可交互时间 (TTI)：用户第一次可以和界面进行交互的时间
 *  5. 慢会话 Long Tasks：RAIL有在100毫秒内相应用户输入的要求。如果响应超过这个时间就是慢会话
 *  6. FPS：渲染帧率，动画的卡顿感
 */

// 只是在测试实验，所以代码采用es6的代码进行统计即可。

const CONFIG = {
  'first-paint': 'FP',
  'first-contentful-paint': 'FCP',
};

class PerformanceSdk {
  constructor() {
    // 统计的指标都放在这里
    this.info = {};
  }

  // 开始统计
  start() {
    console.log('开始统计页面性能');
    console.log(window.performance);
    // window.performance
    // 白屏统计
    this.whiteScreenTime();

    // FPS
    this.FPS();
  }

  // 白屏时间的采集
  whiteScreenTime() {
    console.log('白屏时间的采集');
    // console.log(window.performance.getEntriesByType('resource'))
    let result = window.performance.getEntriesByType('paint');
    console.log('白屏时间的采集', result);


    for (let i = 0; i < result.length; i++) {
      // 这一步就不考虑那个属性存不存在了，后续若完善则写一些判断
      const item = result[i];
      const name = item.name;

      if (CONFIG[name]) {
        this.info[CONFIG[name]] = item.startTime;
      }
    }

    // let 

    // initiatorType

    console.log('统计完成后', this);
  }


  // TTI的采集
  // tti采集的库使用非常简单

  // 由于 requestAnimationFrame 会在每一帧渲染前被调用，所以fps的计算就依赖于它。
  // 不是这样求的吧
  FPS() {
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    let self = this;

    this.fpsDom = document.getElementById('fps_con');
    var loop = function () {
      var now = Date.now();
      var fs = (now - lastFameTime);
      var fps = Math.round(1000 / fs);

      lastFameTime = now;
      allFrameCount++;
      frame++;

      window.requestAnimationFrame(loop);

      if (now > 1000 + lastTime) {
        //算出一秒左右的时间内总共渲染了多少帧
        var fps = Math.round((frame * 1000) / (now - lastTime));
        // console.log('frame', frame, 'fps', fps);
        frame = 0;
        lastTime = now;
        // TODO: 在浏览器上展示
        self.fpsDom.innerText = fps;
        console.log('FPS ---->', fps);
      }
    }

    window.requestAnimationFrame(loop);
  }
}
