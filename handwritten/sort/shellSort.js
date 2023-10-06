function shellSort(arr) {
  const length = arr.length;
  let gap = 1;

  // 定义间隔
  while (gap < length / 5) {
    gap = gap * 5 + 1;
  }

  for (; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = 0; i < length; i++) {
      let temp = arr[i];
      let j;
      for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }

  return arr;
}

console.log('希尔排序');
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(shellSort(arr1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
