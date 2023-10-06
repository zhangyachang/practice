function countSort(arr) {
  const length = arr.length;
  const B = [];
  const C = [];
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < length; i++) {
    arr[i] < min && (min = arr[i]);
    arr[i] > max && (max = arr[i]);
    C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
  }

  // console.log('初始化结束之后', JSON.stringify(C));
  // console.log('数组', JSON.stringify(arr));

  // // 初始化C数组
  for (let j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }

  console.log('重新赋值后', JSON.stringify(C));

  for (let k = length - 1; k >= 0; k--) {
    B[C[arr[k]] - 1] = arr[k];
    C[arr[k]]--;
  }

  // console.log('最终的C', JSON.stringify(C))
  return B;
}

console.log('计数排序');
var arr = [3, 44, 38, 5, 47, 2, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(countSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(countSort(arr1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47s, 48, 50]
