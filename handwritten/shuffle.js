// // console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));

const nums = [];
for (let i = 1; i <= 54; i++) {
  nums.push(i);
}

{
  // 青铜洗牌
  //   在 1 至 54 之前随机生成一个整数，然后把它放到新数组里，然后再随机生成一个整数，如果和之前生成的没重复，直接放入新数组，如果和之前重复了，那再随机生成一个......
  // 这样直至数组中所有数字都被抽取放到新数组，最终得解！
  let count = 0;
  const shuffle = function (nums) {
    let radomNums = [];
    while (radomNums.length < nums.length) {
      count++; // count 计数洗牌次数
      let rand = randOne();
      if (radomNums.includes(rand)) {
        // 随机数重复
        rand = randOne(); // 再次生成
      } else {
        radomNums.push(rand);
      }
    }
    return radomNums;
  };

  // 在 1 至 54 之间任意取一整数；
  const randOne = function () {
    return Math.floor(Math.random() * 54) + 1;
  };

  // console.log(shuffle(nums));
  // console.log('count', count);
}

{
  // 铂金洗牌算法：
  const FYShuffle = function (nums) {
    const radomNums = nums.slice(0);
    let len = radomNums.length;

    while (len > 1) {
      let rand = Math.floor(Math.random() * len);
      len--;
      let temp = radomNums[len];
      radomNums[len] = radomNums[rand];
      radomNums[rand] = temp;
    }

    return radomNums;
  };

  console.log('FYShuffle', FYShuffle(nums));
}
