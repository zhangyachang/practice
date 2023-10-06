function quickSort(arr, left, right) {
  if (left + 1 > right) {
    return;
  }

  let base = arr[left];
  let pos = left + 1;
  for (let i = left + 1; i < right; i++) {
    if (arr[i] <= base) {
      let temp = arr[i];
      arr[i] = arr[pos];
      arr[pos] = temp;
      pos++;
    }
  }

  // 等到完成之后
  let temp = arr[left];
  arr[left] = arr[pos - 1];
  arr[pos - 1] = temp;

  // 左边的再次排序，右边的也再次排序
  quickSort(arr, left, pos - 1);
  quickSort(arr, pos, right);
  return arr;
}


console.log('快速排序');
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(quickSort(arr, 0, arr.length));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort(arr1, 0, arr1.length));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47s, 48, 50]
