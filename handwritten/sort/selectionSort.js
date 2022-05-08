function selectionSort(arr) {
  const length = arr.length;

  // 把最大的先放到后面
  for (let i = 0; i < length; i++) {
    let max = 0;
    for (let j = 1; j < length - i; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    let temp = arr[max];
    arr[max] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }

  return arr;
}

function selectionSort1(arr) {
  const length = arr.length;

  // 把最大的先放到后面
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
}


console.log('选择排序');
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(selectionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(selectionSort(arr1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]