function heapSort(arr) {
  let heapSize = arr.length;
  let temp;

  // 建造堆
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapify(arr, i, heapSize);
  }

  while (heapSize) {
    temp = arr[0];
    arr[0] = arr[heapSize - 1];
    arr[heapSize - 1] = temp;
    heapify(arr, 0, --heapSize);
  }

  return arr;
}

/**
 * 建堆
 * @param {*} arr 
 * @param {*} x 
 * @param {*} length 
 */
function heapify(arr, x, length) {
  let l = 2 * x + 1;
  let r = l + 1;
  let largest = x; // 默认最大的点就是当前节点

  // 寻找一个堆中的最大值
  if (l < length && arr[l] > arr[largest]) {
    largest = l;
  }

  if (r < length && arr[r] > arr[largest]) {
    largest = r;
  }

  // 如果最大者不是父节点，则交换位置
  if (largest !== x) {
    temp = arr[x];
    arr[x] = arr[largest];
    arr[largest] = temp;
    // 递归寻找
    heapify(arr, largest, length);
  }
}

console.log('堆排序');
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
var arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(heapSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(heapSort(arr1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47s, 48, 50]
