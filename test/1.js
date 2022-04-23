async function async1() {
  console.log("async1 start");
  try {
    await async2();
  } catch (e) {
    console.error(e);         // ?
  }
  console.log("async1 end");      // ?
}

async function async2() {
  console.log('async2');       // ?
  throw new Error('hack1');
}

console.log("script start");  // 1

setTimeout(function () {
  console.log("setTimeout");         // ?
}, 0);

try {
  async1().catch((e) => {
    console.error(e);
  });
} catch (e) {
  console.error(e);
}

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log('script end');         //    ?

// [18]
// [11, 33]


// script start
// async1 start
// async2
// promise1
// script end
// hack1
// async1 end
// promise2
// setTimeout
