// 全排列

const permute = function (nums) {
  const result = [];
  const path = [];
  const length = nums.length;
  let used = [];
  // 回溯法
  function backtrack(path) {
    if (path.length === length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < length; i++) {
      if (used[i]) {
        continue;
      }

      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack(path);
  return result;
};

console.log(permute([1, 2, 3]));
