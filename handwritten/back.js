/**
 * 1. 确定dp数组以及下标的问题
 * 2. 推到出递推公式
 * 3. 初始化数组
 * 4. 确认遍历顺序
 * 5. 举例
 */

// 1. dp 数组以及下标的含义
// dp[i][j] 表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少。

// dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);

// for (let j = 0; j < weight[0]; j++) {
//   dp[0][j] = 0;
// }

// for (let j = weight[0]; j <= bagWight; j++) {
//   dp[0][j] = value[0];
// }

function testWeightBagProblem(weight, value, size) {
  const length = weight.length;
  const dp = new Array(length + 1).fill().map((item) => Array(size + 1).fill(0));
  console.log('dp', dp);

  // for (let i = 1; i <= length; i++) {
  //   for (let j = 0; j <= size; j++) {
  //     if (weight[i - 1] <= j) {
  //       dp[i][j] = Math.max(dp[i - 1][j], value[i - 1] + dp[i - 1][j - weight[i - 1]]);
  //     } else {
  //       dp[i][j] = dp[i - 1][j];
  //     }
  //   }
  // }

  for (let j = 0; j <= size; j++) {
    // 遍历背包容量
    for (let i = 1; i < length; i++) {
      // 遍历物品
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[length][size];
}

// // const weight = [3, 4, 1];
// // const value = [15, 20, 30];
// // const size = 4;

// let result = testWeightBagProblem(weight, value, size);
// console.log('result: ', result);

// 背包问题

// 输入：
// 50 5
// 20 3 5
// 20 3 5
// 10 3 0
// 10 2 0
// 10 1 0
// 复制
// 输出：
// 130
// 复制
// 说明：
// 由第1行可知总钱数N为50以及希望购买的物品个数m为5；
// 第2和第3行的q为5，说明它们都是编号为5的物品的附件；
// 第4~6行的q都为0，说明它们都是主件，它们的编号依次为3~5；
// 所以物品的价格与重要度乘积的总和的最大值为10*1+20*3+20*3=130

// 3  []
// 4
// 5

function testWeightBagProblem(weight, value, size) {
  const dp = Array(size + 1).fill(0);
  console.log(dp);
  for (let i = 0; i <= weight.length; i++) {
    // 遍历物品
    for (let j = size; j >= weight[i]; j--) {
      // 遍历背包容量
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
  }
  console.log(dp);
  return dp[size];
}

const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;

console.log(testWeightBagProblem(weight, value, size));
